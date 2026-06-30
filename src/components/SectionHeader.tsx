import { motion } from 'framer-motion'

type SectionHeaderProps = {
  kicker: string
  title: string
  copy?: string
}

export function SectionHeader({ kicker, title, copy }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  )
}
