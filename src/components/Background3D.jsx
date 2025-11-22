import React from 'react'

function Particles() {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    const DPR = Math.min(2, window.devicePixelRatio || 1)

    const setSize = () => {
      const rect = canvas.getBoundingClientRect()
      const wCss = Math.max(1, Math.floor(rect.width))
      const hCss = Math.max(1, Math.floor(rect.height))
      canvas.width = wCss * DPR
      canvas.height = hCss * DPR
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
    }

    setSize()

    let w = 0, h = 0
    const syncWH = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
    }
    syncWH()

    const countBase = () => Math.floor((w * h) / 12000)
    let particles = []

    const initParticles = () => {
      const count = Math.max(70, countBase())
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 0.8,
        hue: 155 + Math.random() * 70,
      }))
    }

    initParticles()

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // ambient glow
      const g1 = ctx.createRadialGradient(w * 0.5, h * 0.0, 0, w * 0.5, h * 0.25, Math.max(w, h))
      g1.addColorStop(0, 'rgba(6,182,212,0.10)')
      g1.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      // connection lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < 140 * 140) {
            const a = 1 - Math.sqrt(d2) / 140
            ctx.strokeStyle = `rgba(94,234,212,${a * 0.12})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
        ctx.fillStyle = `hsla(${p.hue}, 85%, 62%, 0.85)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const onResize = () => {
      setSize()
      syncWH()
      initParticles()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

export default function Background3D(){
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Base: dark radial + vignette for depth */}
      <div className="absolute inset-0" style={{
        background: [
          'radial-gradient(60% 60% at 50% 0%, rgba(6,182,212,0.18), rgba(2,6,23,0.85))',
          'radial-gradient(80% 80% at 50% 120%, rgba(0,0,0,0.0), rgba(0,0,0,0.35))'
        ].join(',')
      }} />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: 'center'
      }} />

      {/* Particle cloud */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      {/* Conic aura */}
      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <div className="absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,.15),rgba(16,185,129,.08),transparent,rgba(6,182,212,.15))]" />
      </div>
    </div>
  )
}
