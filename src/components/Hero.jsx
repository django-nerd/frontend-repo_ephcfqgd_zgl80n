import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section id="hero" className="relative h-[95vh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-sm tracking-widest text-indigo-200/80 mb-3">AI Developer • LLMs • Generative AI</p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
              Srijan Sarkar
            </h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-4 text-lg sm:text-xl text-indigo-100/90">
              Turning ideas into intelligent systems.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-full bg-indigo-500/80 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:scale-105">View Projects</a>
              <a href="/resume.pdf" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white/90 backdrop-blur bg-white/10 transition-all hover:scale-105">Download Resume</a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  )
}
