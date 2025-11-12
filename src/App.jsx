import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Projects, Experience, Achievements, Contact } from './components/Sections'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,60,255,0.35),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(600px_300px_at_90%_0%,rgba(14,165,233,0.2),transparent)] dark:bg-black text-white scroll-smooth">
      <Header onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-10 text-center text-white/60">© {new Date().getFullYear()} Srijan Sarkar. All rights reserved.</footer>
    </div>
  )
}

export default App
