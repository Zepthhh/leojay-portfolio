import { motion } from 'framer-motion'

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center bg-[#050816]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
    >
      <div className="w-[min(420px,80vw)] text-center">
        <motion.p
          className="text-3xl font-black tracking-[0.08em] text-white sm:text-5xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Leojay Canque
        </motion.p>
        <div className="mt-8 h-2 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.95, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
