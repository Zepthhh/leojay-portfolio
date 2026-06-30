import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const stars = Array.from({ length: 70 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.2,
}))

export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18
      const y = (event.clientY / window.innerHeight - 0.5) * 18
      gsap.to(node, { x, y, duration: 1.2, ease: 'power3.out' })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div ref={ref} className="absolute inset-[-40px]">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(59,130,246,.12)_33%,transparent_46%,rgba(139,92,246,.12)_64%,transparent_78%)] opacity-80 blur-2xl" />
        <div className="absolute inset-x-0 top-16 h-56 bg-[linear-gradient(90deg,transparent,rgba(6,182,212,.18),rgba(139,92,246,.15),transparent)] blur-3xl" />
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,.75)]"
            style={{ left: star.left, top: star.top, animationDelay: `${star.delay}s` }}
          />
        ))}
      </div>
    </div>
  )
}
