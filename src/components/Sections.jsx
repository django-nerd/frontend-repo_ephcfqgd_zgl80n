import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-20 snap-start">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white mb-8">
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
)

export function About() {
  const skills = [
    { name: 'Python / FastAPI', level: 95 },
    { name: 'LLMs / LangChain', level: 90 },
    { name: 'TensorFlow / PyTorch', level: 88 },
    { name: 'React / JavaScript', level: 85 },
    { name: 'C / C++ / Java', level: 80 },
    { name: 'AWS', level: 75 },
  ]

  return (
    <Section id="about" title="About Me">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
          <p className="text-indigo-100/90 leading-relaxed">
            B.Tech in Computer Science and Engineering (CyberSecurity specialization) at SRM Institute of Science and Technology, CGPA 9.72/10 (Expected 2027). A passionate AI developer working on NLP, LLMs, and Generative AI applications. Currently a Member at Next Tech Lab (McCarthy Lab, International QS Awarded), working on Semantic Retrieval Frameworks to enhance customer workflow efficiency.
          </p>
          <p className="mt-4 text-indigo-100/90">Skills: C, C++, Python, Java, JavaScript, React, Flask, FastAPI, TensorFlow, PyTorch, LangChain, YOLO, AWS.</p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold tracking-wide mb-4">Skills Snapshot</h3>
          <div className="space-y-4">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-indigo-100/90">{s.name}</span>
                  <span className="text-xs text-indigo-200/70">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.05 }} className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold tracking-wide mb-3">Contact</h3>
          <div className="space-y-3 text-indigo-100/90">
            <a href="mailto:srijanb463@gmail.com" className="flex items-center gap-3 hover:text-white"><Mail size={18}/> srijanb463@gmail.com</a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><Github size={18}/> GitHub</a>
          </div>
        </div>
        <div className="md:col-span-2 bg-gradient-to-br from-indigo-600/20 to-blue-600/10 border border-white/10 rounded-2xl p-6">
          <p className="text-indigo-100/90">“Turning ideas into intelligent systems.”</p>
        </div>
      </motion.div>
    </Section>
  )
}

export function Experience() {
  const items = [
    {
      title: 'Software Development Intern – SRM Technologies',
      date: 'Jun 2025 - Present',
      points: [
        'Built backend components for a Smart Inventory Maintenance System.',
        'Designed a robust data ingestion pipeline for efficient processing.',
        'Implemented weekly SKU availability tracking for real-time insights.'
      ]
    },
    {
      title: 'Member – Next Tech Lab, McCarthy Lab',
      date: 'Jul 2024 - Present',
      points: [
        'Developing a Semantic Retrieval Framework using advanced algorithms for contextual understanding and improved customer response accuracy.'
      ]
    }
  ]

  return (
    <Section id="experience" title="Experience">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20, rotateX: -8, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="transform-gpu p-6 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-blue-600/20 border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">{exp.title}</h3>
              <span className="text-indigo-2 00/80 text-sm">{exp.date}</span>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-indigo-100/90">
              {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  const projects = [
    {
      name: 'InvenX',
      stack: 'Python, Groq, Phidata, Flask, Next.js',
      desc: 'Smart warehouse system using LSTM neural networks (85% demand forecasting accuracy). Automated surplus/shortage detection and route optimization using TomTom API.',
      link: '#'
    },
    {
      name: 'MeetFriendAI',
      stack: 'Flask, Groq, Google Cloud, VexaMeet API',
      desc: 'Real-time meeting transcription and AI-based action item detection. Integrations with Google Calendar, Gmail API, Slack SDK, and OAuth2 authentication.',
      link: '#'
    },
    {
      name: 'SunScope',
      stack: 'Python, YOLOv11, Flask, JS',
      desc: 'AI-powered rooftop analysis for solar panel suitability (0.94 mAP accuracy). Solar ROI calculator for cost and energy savings visualization.',
      link: '#'
    }
  ]

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6, scale: 1.02, rotateX: 2 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group transform-gpu perspective-1000 relative rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-transparent" />
            <h3 className="text-white font-semibold text-lg">{p.name}</h3>
            <p className="text-xs text-indigo-200/80 mt-1">{p.stack}</p>
            <p className="text-indigo-100/90 mt-3 text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-indigo-200 group-hover:text-white">
              View <ExternalLink size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

export function Achievements() {
  const items = [
    '1st Prize – Hackademia (NIT Andhra Pradesh, Generative AI Hackathon)',
    '2nd Prize – CodeFest by SRM Technologies, leading to internship.',
    '3rd Prize – CAD 3.0 Hackathon by Coding Ninjas, SRM',
    'Chairperson – SRM ACM SIGKDD Student Chapter'
  ]

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-indigo-100/90">
            {t}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => { e.preventDefault(); const el = document.getElementById('success-burst'); el?.classList.remove('hidden'); setTimeout(()=> el?.classList.add('hidden'), 1500) }} className="max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 outline-none" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 outline-none" />
        </div>
        <textarea required placeholder="Message" rows={5} className="mt-4 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 outline-none" />
        <button className="mt-4 px-5 py-2.5 rounded-full bg-indigo-500/80 hover:bg-indigo-500 text-white transition-all hover:scale-105">Send</button>
        <div id="success-burst" className="hidden mt-4 text-sm text-emerald-300">Thanks! I will get back to you soon.</div>
      </motion.form>
    </Section>
  )
}
