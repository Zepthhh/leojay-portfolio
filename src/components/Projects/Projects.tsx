import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { SectionHeader } from '../SectionHeader'
import { projects } from '../../data/portfolio'

type Project = (typeof projects)[number]

function ProjectVisual({
  title,
  featured,
  image,
  onOpenImage,
}: {
  title: string
  featured?: boolean
  image?: string
  onOpenImage?: (image: string) => void
}) {
  if (image) {
    const content = (
      <>
        <img src={image} alt={`${title} website screenshot`} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/92 to-transparent" />
        <strong className="absolute bottom-5 left-5 text-2xl font-black text-white drop-shadow-lg">{title}</strong>
      </>
    )

    if (onOpenImage) {
      return (
        <button
          type="button"
          onClick={() => onOpenImage(image)}
          className={`relative block h-52 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-left ${featured ? 'sm:h-72' : ''}`}
        >
          {content}
        </button>
      )
    }

    return (
      <div className={`relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 ${featured ? 'sm:h-72' : ''}`}>
        {content}
      </div>
    )
  }

  return (
    <div className={`relative h-52 overflow-hidden rounded-2xl border border-white/10 ${featured ? 'sm:h-72' : ''}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,.32),rgba(6,182,212,.12),rgba(139,92,246,.26))]" />
      <div className="absolute inset-5 rounded-2xl border border-white/15 bg-slate-950/60 p-4">
        <div className="mb-4 flex gap-2">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-300" />
          <span className="size-3 rounded-full bg-green-400" />
        </div>
        <div className="space-y-3">
          <span className="block h-4 w-2/3 rounded bg-white/25" />
          <span className="block h-4 w-full rounded bg-[#3B82F6]/35" />
          <span className="block h-4 w-4/5 rounded bg-[#06B6D4]/35" />
          <span className="block h-16 rounded bg-white/10" />
        </div>
      </div>
      <strong className="absolute bottom-5 left-5 text-2xl font-black text-white">{title}</strong>
    </div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <section id="Projects" className="section-shell">
      <SectionHeader
        kicker="Projects"
        title="Selected academic and personal builds."
        copy="Realistic student projects focused on dashboards, mobile workflows, data management, and the featured AI + IoT capstone project."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, rotateX: 1, rotateY: project.featured ? -1 : 1 }}
            transition={{ delay: index * 0.05 }}
            className={`glass magnetic rounded-3xl p-5 ${project.featured ? 'lg:col-span-2' : ''}`}
          >
            <ProjectVisual title={project.title} featured={project.featured} image={project.image} />
            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.14em] text-[#06B6D4]">{project.status}</span>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{project.subtitle}</h3>
                <p className="mt-4 leading-8 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="h-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15"
              >
                View Details
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelected(null)
              setPreviewImage(null)
            }}
          >
            <motion.article
              className="glass max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl p-5 sm:p-7"
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="section-kicker">{selected.status}</span>
                  <h3 className="mt-3 text-3xl font-black text-white">{selected.title}</h3>
                  <p className="mt-2 text-slate-300">{selected.subtitle}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close project modal"
                  onClick={() => {
                    setSelected(null)
                    setPreviewImage(null)
                  }}
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 text-white"
                >
                  <FiX />
                </button>
              </div>
              <div className="mt-7 grid gap-6 md:grid-cols-[1fr_0.85fr]">
                <div>
                  <ProjectVisual title={selected.title} featured image={selected.image} onOpenImage={setPreviewImage} />
                  {selected.gallery && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {selected.gallery.map((image) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setPreviewImage(image)}
                          className="h-28 overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
                        >
                          <img
                            src={image}
                            alt={`${selected.title} project screen`}
                            className="h-full w-full object-cover object-top transition duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <p className="leading-8 text-slate-300">{selected.description}</p>
                  <p className="mt-4 leading-8 text-slate-400">{selected.impact}</p>
                  <h4 className="mt-6 font-black text-white">Main Features</h4>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {selected.features.map((feature) => <li key={feature}>• {feature}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selected.live && (
                      <a href={selected.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-slate-950">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                    <a href={selected.github} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-bold text-white">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
            <AnimatePresence>
              {previewImage && (
                <motion.div
                  className="fixed inset-0 z-[110] grid place-items-center bg-black/85 p-4 backdrop-blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setPreviewImage(null)}
                >
                  <motion.div
                    className="relative max-h-[92vh] w-full max-w-6xl"
                    initial={{ scale: 0.96, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.96, y: 20 }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-label="Close image preview"
                      onClick={() => setPreviewImage(null)}
                      className="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-slate-950/80 text-white backdrop-blur"
                    >
                      <FiX />
                    </button>
                    <img
                      src={previewImage}
                      alt={`${selected.title} enlarged project screen`}
                      className="max-h-[92vh] w-full rounded-3xl border border-white/10 bg-slate-950 object-contain"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
