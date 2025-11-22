import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Background3D({ scene = 'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode' }){
  return (
    <div className="absolute inset-0 -z-10">
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,6,23,.3),rgba(2,6,23,.85))]" />
    </div>
  )
}
