import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiZap } from 'react-icons/fi'

const PortfolioScene = lazy(() =>
  import('../ThreeScene/PortfolioScene').then((module) => ({
    default: module.PortfolioScene,
  })),
)

export function Hero() {
  return (
    <section id="Home" className="overflow-hidden pt-20 lg:min-h-screen lg:pt-24">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-7 py-6 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(400px,1fr)] xl:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative z-10"
        >
          <span className="section-kicker">Hello, I'm</span>
          <h1 className="mt-4 text-[clamp(3.2rem,7vw,5.6rem)] font-black leading-[0.9] text-white">
            Leojay <span className="block bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">Canque</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold text-slate-200 sm:text-2xl">
            Fresh Graduate · Bachelor of Science in Information Technology
          </p>
          <div className="mt-4 text-2xl font-black text-[#06B6D4]">
            Full Stack Developer
          </div>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            I build responsive interfaces, practical systems, web and mobile with a strong interest in AI-assisted and IoT-enabled solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="./leojay-canque-cv.jpg" download className="magnetic inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-950 sm:text-base">
              <FiDownload /> Download Resume
            </a>
            <a href="#Projects" className="magnetic inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white sm:text-base">
              <FiZap /> View Projects
            </a>
            <a href="#Contact" className="magnetic inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/35 bg-[#06B6D4]/10 px-4 py-3 text-sm font-bold text-white sm:text-base">
              <FiMail /> Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.8 }}
          className="relative min-w-0 lg:justify-self-end"
        >
          <Suspense fallback={<div className="h-[420px]" />}>
            <PortfolioScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
