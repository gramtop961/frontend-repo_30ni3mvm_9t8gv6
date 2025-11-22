import React from 'react'
import Spline from '@splinetool/react-spline'

function Particles() {
  const ref = React.useRef(null)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(() => {
    if (!ref.current || prefersReduced) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = w * DPR
    canvas.height = h * DPR
    ctx.scale(DPR, DPR)

    const count = Math.floor((w * h) / 18000)
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
      hue: 160 + Math.random() * 60,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // subtle gradient haze
      const g = ctx.createRadialGradient(w * 0.5, h * 0.1, 0, w * 0.5, h * 0.2, Math.max(w, h))
      g.addColorStop(0, 'rgba(6,182,212,0.07)')
      g.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // draw links
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

      // draw particles
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
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.scale(DPR, DPR)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [prefersReduced])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

export default function Background3D({ scene = 'https://prod.spline.design/9W8r5nJ8R8lBf4rB/scene.splinecode' }){
  const [loaded, setLoaded] = React.useState(false)
  const [failed, setFailed] = React.useState(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded) setFailed(true)
    }, 4000)
    return () => clearTimeout(t)
  }, [loaded])

  return (
    <div className="absolute inset-0 -z-10">
      {!prefersReduced && !failed && (
        <Spline scene={scene} onLoad={() => setLoaded(true)} style={{ width: '100%', height: '100%' }} />
      )}
      {/* Fallback gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,6,23,.35),rgba(2,6,23,.9))]" />
      {/* Lightweight particle cloud fallback when Spline is disabled or fails */}
      {!prefersReduced && failed && (
        <div className="absolute inset-0 opacity-70">
          <Particles />
        </div>
      )}
      {/* Subtle conic aura */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="animate-bg-shift absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,.12),rgba(16,185,129,.06),transparent,rgba(6,182,212,.12))]" />
      </div>
    </div>
  )
}
