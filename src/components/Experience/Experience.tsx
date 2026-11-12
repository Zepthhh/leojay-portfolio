import { motion } from 'framer-motion'
import { FiBriefcase, FiClipboard, FiFileText } from 'react-icons/fi'
import { SectionHeader } from '../SectionHeader'

const roles = [
  {
    title: 'Support Staff — Administrative Section',
    meta: 'Private Company · Davao City · 2026–Present',
    icon: FiBriefcase,
    copy: 'Assist customers, prepare certificates and administrative documents, and support daily office operations through filing, encoding, and document preparation.',
  },
  {
    title: 'On-the-Job Training — General Services Office',
    meta: 'Davao del Sur State College · 194 hours',
    icon: FiFileText,
    copy: 'Supported document organization, records management, data encoding, and daily administrative operations.',
  },
  {
    title: 'On-the-Job Training — CENRO, DENR',
    meta: 'Digos City · 294 hours',
    icon: FiClipboard,
    copy: 'Assisted with office documentation, record keeping, data entry, and administrative tasks supporting environmental office operations.',
  },
]

export function Experience() {
  return (
    <section id="Experience" className="section-shell">
      <SectionHeader
        kicker="Experience"
        title="Reliable support, documentation, and systems work."
        copy="Professional and OJT experience that strengthened my organization, communication, records management, and day-to-day operational skills."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {roles.map((role, index) => {
          const Icon = role.icon
          return (
            <motion.article key={role.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-3xl p-6">
              <div className="grid size-12 place-items-center rounded-2xl bg-[#06B6D4]/10 text-[#67E8F9]"><Icon size={23} /></div>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.1em] text-[#93C5FD]">{role.meta}</p>
              <h3 className="mt-3 text-2xl font-black text-white">{role.title}</h3>
              <p className="mt-4 leading-8 text-slate-400">{role.copy}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
