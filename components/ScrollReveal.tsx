"use client";
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
}

export default function ScrollReveal({
  children = null,
  className = '',
}: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setShow(entry.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('transition-all duration-700', show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}>
      {children}
    </div>
  )
}
