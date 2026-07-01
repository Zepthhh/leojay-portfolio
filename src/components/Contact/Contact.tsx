import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import { SectionHeader } from '../SectionHeader'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const contactEmail = 'leojaycanque1@gmail.com'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('Ready to connect.')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current) return

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Contact form setup needed: add your EmailJS Service ID, Template ID, and Public Key.')
      return
    }

    const formData = new FormData(formRef.current)
    const subject = String(formData.get('subject') || 'Portfolio message')
    let titleInput = formRef.current.elements.namedItem('title') as HTMLInputElement | null

    if (!titleInput) {
      titleInput = document.createElement('input')
      titleInput.type = 'hidden'
      titleInput.name = 'title'
      formRef.current.appendChild(titleInput)
    }

    titleInput.value = subject

    setStatus('Sending message...')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      formRef.current.reset()
      setStatus('Message sent. Thank you for reaching out.')
    } catch (error) {
      const emailError = error as { status?: number; text?: string; message?: string }
      const details = emailError.text || emailError.message || 'Please check your EmailJS service, template, and public key.'
      setStatus(`EmailJS error${emailError.status ? ` ${emailError.status}` : ''}: ${details}`)
    }
  }

  return (
    <section id="Contact" className="section-shell">
      <SectionHeader
        kicker="Contact"
        title="Let’s talk about junior developer opportunities."
        copy="Open to roles, internships, project collaboration, and interviews for software engineering, web development, and mobile development positions."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7"
        >
          <h3 className="text-2xl font-black text-white">Available for interviews</h3>
          <p className="mt-4 leading-8 text-slate-400">
            Send a message for resume requests, project walkthroughs, technical interviews, or collaboration details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              [FaGithub, '#', 'GitHub'],
              [FaLinkedinIn, '#', 'LinkedIn'],
              [FaFacebookF, 'https://www.facebook.com/ljay17', 'Facebook'],
              [FiMail, `mailto:${contactEmail}`, 'Email'],
            ].map(([Icon, href, label]) => (
              <a key={label as string} href={href as string} target={String(href).startsWith('http') ? '_blank' : undefined} rel={String(href).startsWith('http') ? 'noreferrer' : undefined} aria-label={label as string} className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white hover:bg-white/15">
                <Icon />
              </a>
            ))}
          </div>
        </motion.aside>
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-5 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Name" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[#06B6D4]" />
            <input name="email" type="email" required placeholder="Email" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[#06B6D4]" />
          </div>
          <input name="subject" required placeholder="Subject" className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[#06B6D4]" />
          <textarea name="message" required placeholder="Message" rows={6} className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[#06B6D4]" />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-400">{status}</p>
            <button type="submit" className="magnetic inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-slate-950">
              <FiSend /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
