import React from 'react'

function Particles({ strength = 18 }) {
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
      initParticles()
    })
    ro.observe(canvas.parentElement || canvas)

    // global parallax inputs
    let mouse = { x: 0.5, y: 0.5 }
    let scrollY = window.scrollY || 0
    const onMouse = (e) => {
      const vw = window.innerWidth || 1
      const vh = window.innerHeight || 1
      mouse.x = e.clientX / vw
      mouse.y = e.clientY / vh
    }
    const onScroll = () => { scrollY = window.scrollY || 0 }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('scroll', onScroll, { passive: true })

    // particle cloud with optional network in hotspots
    const countBase = () => Math.floor((w * h) / 11000)
    let particles = []
    let links = []

    // dynamic hotspots (regions where network emerges)
    let hotspots = []
    const makeHotspots = () => {
      const hs = []
      const n = 3
      for (let i = 0; i < n; i++) {
        hs.push({
          x: (0.25 + 0.5 * Math.random()) * w,
          y: (0.18 + 0.55 * Math.random()) * h,
          r: Math.min(w, h) * (0.18 + Math.random() * 0.12)
        })
      }
      hotspots = hs
    }

    const inHotspotFactor = (x, y) => {
      // returns 0..1 how deep inside any hotspot the point is
      let m = 0
      for (const hsp of hotspots) {
        const d = Math.hypot(x - hsp.x, y - hsp.y)
        const f = Math.max(0, 1 - d / hsp.r)
        if (f > m) m = f
      }
      return m
    }

    const initParticles = () => {
      makeHotspots()
      const count = Math.max(90, countBase())
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 1,
        hue: 160 + Math.random() * 40,
      }))

      // build sparse links; dense only inside hotspots
      links = []
      const baseMax = 120
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const pf = inHotspotFactor(p.x, p.y)
        const localMax = baseMax + pf * 80 // farther reach within hotspots
        const neighbors = []
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < localMax * localMax) {
            const qf = inHotspotFactor(q.x, q.y)
            const strength = Math.max(pf, qf)
            neighbors.push({ j, d2, strength })
          }
        }
        neighbors.sort((a, b) => a.d2 - b.d2)
        const take = neighbors.slice(0, 3 + Math.round(pf * 3))
        for (const n of take) {
          links.push({ i, j: n.j, len2: n.d2, strength: n.strength, speed: 0.001 + Math.random() * 0.003, offset: Math.random() })
        }
      }
    }

    initParticles()

    let raf, lastT = performance.now()

    const draw = (t) => {
      const dt = Math.min(33, t - lastT)
      lastT = t

      ctx.clearRect(0, 0, w, h)

      // ambient gradient with parallax
      const mx = (mouse.x - 0.5) * strength
      const my = (mouse.y - 0.5) * strength
      const sy = (scrollY % 600) / 600
      const cx = w * (0.5 + mx / 200)
      const cy = h * (0.24 + my / 250) + sy * 12
      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h))
      g1.addColorStop(0, 'rgba(34,211,238,0.12)')
      g1.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      // subtle parallax grid
      ctx.save()
      ctx.globalAlpha = 0.10
      ctx.translate(mx * 0.5, my * 0.5 + sy * 6)
      const gridSize = 60
      ctx.strokeStyle = 'rgba(148,163,184,0.15)'
      ctx.lineWidth = 1
      for (let x = -gridSize; x < w + gridSize; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, -gridSize); ctx.lineTo(x, h + gridSize); ctx.stroke()
      }
      for (let y = -gridSize; y < h + gridSize; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(-gridSize, y); ctx.lineTo(w + gridSize, y); ctx.stroke()
      }
      ctx.restore()

      // move particles with slight attraction towards mouse-derived center
      const targetX = w * (0.5 + mx / 160)
      const targetY = h * (0.45 + my / 200) + sy * 8
      for (const p of particles) {
        const pf = inHotspotFactor(p.x, p.y)
        const ax = (targetX - p.x) * (0.0006 + pf * 0.0004)
        const ay = (targetY - p.y) * (0.0006 + pf * 0.0004)
        p.vx += ax
        p.vy += ay
        p.vx *= 0.995
        p.vy *= 0.995
        p.x += p.vx
        p.y += p.vy
        if (p.x < -12) p.x = w + 12
        if (p.x > w + 12) p.x = -12
        if (p.y < -12) p.y = h + 12
        if (p.y > h + 12) p.y = -12
      }

      // draw links: dense inside hotspots, sparse otherwise
      ctx.lineWidth = 1
      for (const L of links) {
        const p = particles[L.i]
        const q = particles[L.j]
        const d = Math.sqrt(L.len2)
        if (d > 200) continue
        const localStrength = L.strength // 0..1
        const a = (1 - d / 200) * (0.08 + localStrength * 0.18)
        if (a <= 0) continue
        ctx.strokeStyle = `rgba(94,234,212,${a})`
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()

        // only show traveling dots prominently within hotspots
        if (localStrength > 0.25) {
          L.offset = (L.offset + L.speed * dt) % 1
          const tx = p.x + (q.x - p.x) * L.offset
          const ty = p.y + (q.y - p.y) * L.offset
          ctx.fillStyle = `rgba(16,185,129,${0.25 + localStrength * 0.45})`
          ctx.beginPath()
          ctx.arc(tx, ty, 1.2 + localStrength * 0.8, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // draw nodes
      for (const p of particles) {
        const pf = inHotspotFactor(p.x, p.y)
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(4, p.r * 5))
        glow.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${0.6 + pf * 0.3})`)
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 1.5 + pf, 0, Math.PI * 2); ctx.fill()

        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.8 + pf * 0.2})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      }

      // faint aura
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.globalAlpha = 0.07
      const r = Math.max(w, h)
      const steps = 20
      for (let i = 0; i < steps; i++) {
        const ang = (i / steps) * Math.PI * 2
        const x = w / 2 + Math.cos(ang) * r
        const y = h / 2 + Math.sin(ang) * r
        const grad = ctx.createLinearGradient(w / 2, h / 2, x, y)
        grad.addColorStop(0, 'rgba(6,182,212,0.12)')
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(x, y); ctx.lineTo(w / 2, h / 2); ctx.fill()
      }
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const onDPR = () => {
      setSize(); initParticles()
    }
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
