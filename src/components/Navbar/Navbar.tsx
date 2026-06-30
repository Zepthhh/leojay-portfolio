import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../../data/portfolio'

export function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -50% 0px' },
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const link = (item: string) => (
    <a
      key={item}
      href={`#${item}`}
      onClick={() => setOpen(false)}
      className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
        active === item ? 'text-white' : 'text-slate-400 hover:text-white'
      }`}
    >
      {active === item && (
        <motion.span
          layoutId="active-section"
          className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
        />
      )}
      {item}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050816]/65 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <a href="#Home" className="flex items-center gap-3 font-black text-white">
          <img
            src="./leojay-canque-profile.jpg"
            alt="Leojay Canque"
            className="size-10 rounded-full border border-cyan-300/25 object-cover object-[center_18%]"
          />
          <span className="hidden sm:inline">Leojay Canque</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">{navItems.map(link)}</div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/10 text-white md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 grid w-[calc(100%-18px)] max-w-6xl gap-2 rounded-2xl border border-white/10 bg-[#050816]/90 p-3 backdrop-blur-2xl md:hidden"
          >
            {navItems.map(link)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
