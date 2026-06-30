import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiUser } from 'react-icons/fi'
import { SectionHeader } from '../SectionHeader'
import { stats } from '../../data/portfolio'

export function About() {
  return (
    <section id="About" className="section-shell">
      <SectionHeader
        kicker="About"
        title="A fresh graduate ready to build useful software."
        copy="I am a passionate Bachelor of Science in Information Technology graduate with a strong interest in Full Stack Development, Web Development, and Mobile Application Development. I enjoy building responsive websites, scalable systems, and intuitive user interfaces while continuously learning modern technologies."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120]">
            <img
              src="./leojay-canque-profile.jpg"
              alt="Leojay Canque portrait"
              className="h-full w-full object-cover object-[center_18%]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-cyan-300/25 bg-slate-950/60 px-4 py-2 text-sm font-black text-cyan-100 backdrop-blur">
              Leojay Canque
            </div>
          </div>
          <div className="mt-6 space-y-3 text-slate-300">
            <h3 className="text-2xl font-black text-white">Leojay Canque</h3>
            <p className="font-semibold text-[#93C5FD]">Fresh Graduate · BSIT Graduate</p>
            <p className="flex items-center gap-3"><FiMapPin /> Philippines</p>
            <a href="mailto:leojaycanque1@gmail.com" className="flex items-center gap-3 hover:text-white">
              <FiMail /> leojaycanque1@gmail.com
            </a>
          </div>
        </motion.article>
        <div className="grid content-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#3B82F6]/15 text-[#60A5FA]">
              <FiUser size={24} />
            </div>
            <h3 className="text-2xl font-black text-white">Career Objective</h3>
            <p className="mt-4 leading-8 text-slate-400">
              To contribute as an developer in a team where I can apply my skills in web, mobile, database, and system development while growing through real-world practice.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <strong className="text-4xl font-black text-white">{stat.value}</strong>
                <p className="mt-2 text-sm font-semibold text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
