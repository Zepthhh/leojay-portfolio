import { useEffect } from 'react'
import gsap from 'gsap'

export function useCustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = document.querySelector<HTMLElement>('.cursor-dot')
    const ring = document.querySelector<HTMLElement>('.cursor-ring')
    if (!dot || !ring) return

    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' })
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3.out' })

    const onMove = (event: MouseEvent) => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.18 })
      moveDot(event.clientX - 4)
      moveDotY(event.clientY - 4)
      moveRing(event.clientX - 18)
      moveRingY(event.clientY - 18)
    }

    const onEnter = () => gsap.to(ring, { scale: 1.9, duration: 0.22 })
    const onLeave = () => gsap.to(ring, { scale: 1, duration: 0.22 })

    window.addEventListener('mousemove', onMove)
    const targets = document.querySelectorAll('a, button, .magnetic')
    targets.forEach((target) => {
      target.addEventListener('mouseenter', onEnter)
      target.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', onEnter)
        target.removeEventListener('mouseleave', onLeave)
      })
    }
  })
}
