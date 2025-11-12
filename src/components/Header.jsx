import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Header({ onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/30 dark:bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="text-lg font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Srijan Sarkar
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Mail size={16} /> Contact
            </a>
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="ml-2 text-white/80 hover:text-white transition-colors">◐</button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:srijanb463@gmail.com" className="text-white/80 hover:text-white"><Mail size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github size={18} /></a>
              <a href="/resume.pdf" className="text-white/80 hover:text-white flex items-center gap-1"><Download size={18} /> Resume</a>
              <button onClick={onToggleTheme} className="ml-auto text-white/80 hover:text-white">◐</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
