import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { skillGroups } from '../../data/portfolio'

export function Skills() {
  return (
    <section id="Skills" className="section-shell">
      <SectionHeader
        kicker="Skills"
        title="A practical toolkit for modern web, mobile, and systems work."
        copy="Core technologies learned through academic projects, capstone development, personal practice, and hands-on system building."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-xl font-black text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map(([name, Icon]) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="magnetic inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-slate-200"
                >
                  <Icon className="text-[#06B6D4]" />
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
