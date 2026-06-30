import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiCheckCircle } from 'react-icons/fi'
import { SectionHeader } from '../SectionHeader'

const timeline = [
  {
    title: 'Bachelor of Science in Information Technology',
    meta: 'Fresh Graduate',
    icon: FiBookOpen,
    copy: 'Completed academic training in programming, database systems, web development, mobile development, networking, and system analysis.',
  },
  {
    title: 'RODWAY Capstone Project',
    meta: 'Graduation Milestone',
    icon: FiAward,
    copy: 'Built an AI-powered rodent detection and monitoring system combining YOLOv8, ESP32-CAM, Laravel, Supabase, and Flutter.',
  },
  {
    title: 'Ready for Software Roles',
    meta: 'Next Step',
    icon: FiCheckCircle,
    copy: 'Focused on contributing to web, mobile, full stack, QA, support, and junior developer roles while continuing to learn modern engineering practices.',
  },
]

export function Education() {
  return (
    <section id="Education" className="section-shell">
      <SectionHeader
        kicker="Education"
        title="A BSIT foundation shaped by hands-on projects."
        copy="Academic work centered on practical software development, culminating in a capstone project with AI, IoT, web, and mobile components."
      />
      <div className="relative mt-14">
        <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]" />
        <div className="grid gap-6">
          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border border-white/15 bg-[#0F172A] text-[#06B6D4] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <Icon />
                </div>
                <div className="glass rounded-3xl p-6">
                  <span className="text-sm font-black uppercase tracking-[0.14em] text-[#93C5FD]">{item.meta}</span>
                  <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-8 text-slate-400">{item.copy}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
