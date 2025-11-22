import React from 'react'

function Particles({ strength = 14 }) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d', { alpha: true })

    const DPR = Math.min(2, window.devicePixelRatio || 1)

    let w = 0, h = 0
    const setSize = () => {
      const rect = canvas.getBoundingClientRect()
      const wCss = Math.max(1, Math.floor(rect.width))
      const hCss = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(wCss * DPR)
      canvas.height = Math.floor(hCss * DPR)
      canvas.style.width = wCss + 'px'
      canvas.style.height = hCss + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
      w = wCss
      h = hCss
    }

    setSize()

    const ro = new ResizeObserver(() => {
      setSize()
      init()
    })
    ro.observe(canvas.parentElement || canvas)

    // inputs
    let mouse = { x: 0.5, y: 0.5 }
    let scrollY = window.scrollY || 0

    // ephemeral cursor sparks to "spin" the web
    let sparks = [] // {x,y,r,life}

    const onMouse = (e) => {
      const vw = window.innerWidth || 1
      const vh = window.innerHeight || 1
      mouse.x = e.clientX / vw
      mouse.y = e.clientY / vh
      // inject a spark with short lifetime
      const x = e.clientX
      const y = e.clientY
      const baseR = Math.min(w, h) * 0.12
      sparks.push({ x, y, r: baseR, life: 1 })
      if (sparks.length > 24) sparks.shift()
    }
    const onScroll = () => { scrollY = window.scrollY || 0 }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('scroll', onScroll, { passive: true })

    // particles + links
    const countBase = () => Math.floor((w * h) / 9500)
    let particles = []
    let links = []

    // static anchor hotspots to keep a continuous network presence
    let anchors = []
    const makeAnchors = () => {
      const r = Math.min(w, h)
      anchors = [
        { x: w * 0.32, y: h * 0.35, r: r * 0.22 },
        { x: w * 0.68, y: h * 0.52, r: r * 0.20 },
      ]
    }

    const factorFromRegions = (x, y) => {
      // 0..1 based on anchors and cursor sparks
      let m = 0
      for (const a of anchors) {
        const d = Math.hypot(x - a.x, y - a.y)
        m = Math.max(m, Math.max(0, 1 - d / a.r))
      }
      for (const s of sparks) {
        const d = Math.hypot(x - s.x, y - s.y)
        const f = Math.max(0, 1 - d / s.r) * s.life
        m = Math.max(m, f)
      }
      return m
    }

    const init = () => {
      makeAnchors()
      const count = Math.max(120, countBase())
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.05, // very gentle drift
        vy: (Math.random() - 0.5) * 0.05,
        r: Math.random() * 1.8 + 0.9,
        hue: 165 + Math.random() * 30,
      }))

      // prebuild a moderately dense neighbor set; draw strength varies per frame
      links = []
      const reach = 200 // base reach for candidate edges
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const neighbors = []
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < reach * reach) neighbors.push({ j, d2 })
        }
        neighbors.sort((a, b) => a.d2 - b.d2)
        const take = neighbors.slice(0, 6) // keep a handful
        for (const n of take) links.push({ i, j: n.j, len2: n.d2, offset: Math.random() })
      }
    }

    init()

    let raf, lastT = performance.now()

    const draw = (t) => {
      const dt = Math.min(33, t - lastT)
      lastT = t

      ctx.clearRect(0, 0, w, h)

      // ambient gradient (very stable)
      const mx = (mouse.x - 0.5) * strength
      const my = (mouse.y - 0.5) * strength
      const sy = (scrollY % 600) / 600
      const cx = w * 0.5 + mx * 0.2
      const cy = h * 0.35 + my * 0.15 + sy * 6
      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h))
      g1.addColorStop(0, 'rgba(34,211,238,0.10)')
      g1.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      // subtle grid (barely moving)
      ctx.save()
      ctx.globalAlpha = 0.08
      ctx.translate(mx * 0.25, my * 0.25 + sy * 4)
      const gridSize = 64
      ctx.strokeStyle = 'rgba(148,163,184,0.12)'
      ctx.lineWidth = 1
      for (let x = -gridSize; x < w + gridSize; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, -gridSize); ctx.lineTo(x, h + gridSize); ctx.stroke()
      }
      for (let y = -gridSize; y < h + gridSize; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(-gridSize, y); ctx.lineTo(w + gridSize, y); ctx.stroke()
      }
      ctx.restore()

      // particle drift only (no attraction -> more stable)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        // very light damping to avoid cumulative drift
        p.vx *= 0.999
        p.vy *= 0.999
        if (p.x < -12) p.x = w + 12
        if (p.x > w + 12) p.x = -12
        if (p.y < -12) p.y = h + 12
        if (p.y > h + 12) p.y = -12
      }

      // decay cursor sparks
      for (const s of sparks) s.life *= 0.92
      sparks = sparks.filter(s => s.life > 0.08)

      // draw links – always visible baseline, stronger in regions (anchors + cursor)
      ctx.lineWidth = 1
      for (const L of links) {
        const p = particles[L.i]
        const q = particles[L.j]
        const d = Math.sqrt(L.len2)
        if (d > 220) continue
        const pf = factorFromRegions(p.x, p.y)
        const qf = factorFromRegions(q.x, q.y)
        const local = Math.max(pf, qf)
        // base visibility + boosted by local factor, fades with distance
        const a = Math.max(0.06, (1 - d / 220) * (0.10 + local * 0.28))
        ctx.strokeStyle = `rgba(94,234,212,${a})`
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()

        // traveling pulses when local factor high (mouse "spins" the web)
        if (local > 0.25) {
          L.offset = (L.offset + (0.0008 + local * 0.0025) * dt) % 1
          const tx = p.x + (q.x - p.x) * L.offset
          const ty = p.y + (q.y - p.y) * L.offset
          ctx.fillStyle = `rgba(16,185,129,${0.18 + local * 0.5})`
          ctx.beginPath()
          ctx.arc(tx, ty, 1.1 + local * 1.0, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // nodes
      for (const p of particles) {
        const f = factorFromRegions(p.x, p.y)
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(4, p.r * 5))
        glow.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${0.55 + f * 0.3})`)
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 1.2 + f * 0.8, 0, Math.PI * 2); ctx.fill()

        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.75 + f * 0.2})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      }

      // subtle aura
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.globalAlpha = 0.06
      const R = Math.max(w, h)
      const steps = 18
      for (let i = 0; i < steps; i++) {
        const ang = (i / steps) * Math.PI * 2
        const x = w / 2 + Math.cos(ang) * R
        const y = h / 2 + Math.sin(ang) * R
        const grad = ctx.createLinearGradient(w / 2, h / 2, x, y)
        grad.addColorStop(0, 'rgba(6,182,212,0.10)')
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(x, y); ctx.lineTo(w / 2, h / 2); ctx.fill()
      }
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const onDPR = () => { setSize(); init() }
    const mq = window.matchMedia(`(resolution: ${Math.round(DPR * 96)}dpi)`)
    if (mq && mq.addEventListener) mq.addEventListener('change', onDPR)

    return () => {
      cancelAnimationFrame(raf)
      if (mq && mq.removeEventListener) mq.removeEventListener('change', onDPR)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
    }
  }, [strength])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

export default function Background3D(){
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0">
        <Particles />
      </div>
    </div>
  )
}
