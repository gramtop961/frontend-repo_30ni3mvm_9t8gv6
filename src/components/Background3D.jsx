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
      const w = Math.max(1, Math.floor(rect.width))
      const h = Math.max(1, Math.floor(rect.height))
      canvas.width = w * DPR
      canvas.height = h * DPR
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

    const countBase = () => Math.floor((w * h) / 18000)
    let particles = []

    const initParticles = () => {
      const count = Math.max(40, countBase())
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
        hue: 160 + Math.random() * 60,
      }))
    }

    initParticles()

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // soft haze
      const g = ctx.createRadialGradient(w * 0.5, h * 0.1, 0, w * 0.5, h * 0.2, Math.max(w, h))
      g.addColorStop(0, 'rgba(6,182,212,0.05)')
      g.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < 120 * 120) {
            const a = 1 - Math.sqrt(d2) / 120
            ctx.strokeStyle = `rgba(94,234,212,${a * 0.08})`
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
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.6)`
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
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Subtle base gradient for contrast, very low opacity to avoid blackout */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 0%, rgba(2,6,23,0.2), rgba(2,6,23,0.6))'
      }} />

      {/* Particle cloud (always on) */}
      <div className="absolute inset-0 opacity-80">
        <Particles />
      </div>

      {/* Very subtle conic aura */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <div className="absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,.10),rgba(16,185,129,.05),transparent,rgba(6,182,212,.10))]" />
      </div>
    </div>
  )
}
