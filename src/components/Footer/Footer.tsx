import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-black text-white">Leojay Canque</p>
          <p className="mt-1 text-sm text-slate-500">© {new Date().getFullYear()} Fresh BSIT Graduate Portfolio.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 hover:text-white"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 hover:text-white"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/ljay17" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 hover:text-white"><FaFacebookF /></a>
          <a href="#Home" aria-label="Back to top" className="grid size-10 place-items-center rounded-full bg-white text-slate-950"><FiArrowUp /></a>
        </div>
      </div>
    </footer>
  )
}
