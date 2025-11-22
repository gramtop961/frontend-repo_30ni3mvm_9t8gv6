import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Background3D({ scene = 'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode' }){
  const [loaded, setLoaded] = React.useState(false)
  const [failed, setFailed] = React.useState(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(()=>{
    const t = setTimeout(()=>{
      if(!loaded) setFailed(true)
    }, 4000)
    return ()=>clearTimeout(t)
  },[loaded])

  return (
    <div className="absolute inset-0 -z-10">
      {(!prefersReduced && !failed) && (
        <Spline scene={scene} onLoad={()=>setLoaded(true)} style={{ width: '100%', height: '100%' }} />
      )}
      {/* Fallback gradient / particles for contrast and motion if Spline fails or reduced motion */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,6,23,.35),rgba(2,6,23,.9))]" />
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="animate-bg-shift absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,.15),rgba(16,185,129,.08),transparent,rgba(6,182,212,.15))]" />
      </div>
    </div>
  )
}
