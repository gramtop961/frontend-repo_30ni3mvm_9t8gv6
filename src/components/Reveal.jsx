import React from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 20, once = true }) {
  const controls = useAnimation()
  const ref = React.useRef(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } })
          if (once) observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [controls, delay, once])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={controls}>
      {children}
    </motion.div>
  )
}
