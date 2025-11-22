import React from 'react'

export default function Typewriter({ text, speed = 35, className = '' }){
  const [display, setDisplay] = React.useState('')
  React.useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return (
    <span className={className} aria-label={text}>
      {display}
      <span className="inline-block w-[2px] h-[1em] align-[-0.1em] bg-white ml-1 animate-cursor" />
    </span>
  )
}
