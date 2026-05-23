import { motion } from 'framer-motion'
import { Code2, Zap, Monitor, Box, Smartphone, GitBranch, ArrowRight } from 'lucide-react'

/* ── Shared primitives ── */

function Sparkle({ size = 14, color = '#e8a217', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0L13.854 10.146L24 12L13.854 13.854L12 24L10.146 13.854L0 12L10.146 10.146Z" />
    </svg>
  )
}

function WavyUnderline({ color = '#e8a217', delay = 0.3 }) {
  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '14px', overflow: 'visible', pointerEvents: 'none' }}
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M2,11 C35,4 65,12 100,6 C135,3 165,10 198,7"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  )
}

/* ── Feature card ── */

function FeatureCard({ icon: Icon, title, description, delay = 0, accentColor = '#e8a217' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={{ y: -4 }}
      style={{
        padding: '1.75rem',
        borderRadius: '4px',
        background: 'rgba(255,255,255,0.015)',
        border: '1px solid transparent',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        cursor: 'default',
        marginBottom: '1.5rem',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `rgba(${hexToRgb(accentColor)},0.18)`
        e.currentTarget.style.background = `rgba(${hexToRgb(accentColor)},0.03)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.background = 'rgba(255,255,255,0.015)'
      }}
    >
      {/* Icon container */}
      <div style={{
        width: '42px', height: '42px',
        borderRadius: '8px',
        background: `rgba(${hexToRgb(accentColor)},0.1)`,
        border: `1px solid rgba(${hexToRgb(accentColor)},0.2)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        <Icon size={18} color={accentColor} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: '"Geist Mono", monospace',
        fontWeight: 700, fontSize: '0.72rem',
        color: '#edeae4', letterSpacing: '0.09em',
        textTransform: 'uppercase', marginBottom: '0.65rem',
        lineHeight: 1.4,
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'Geist, sans-serif',
        fontSize: '0.85rem', color: '#6b6879',
        lineHeight: 1.7,
      }}>
        {description}
      </p>
    </motion.div>
  )
}

/* ── Data ── */

const COL_1 = [
  {
    icon: Code2,
    title: 'React Ecosystem',
    description: 'Modern React patterns with hooks, Context API, and component architecture. Experience with React 18+ concurrent features and state management.',
    accentColor: '#e8a217',
  },
  {
    icon: Box,
    title: 'Vue & Angular',
    description: 'Vue 3 Composition API and Angular enterprise patterns — two-way binding, reactive forms, directives, and service-based architecture.',
    accentColor: '#e8a217',
  },
]

const COL_2 = [
  {
    icon: Zap,
    title: 'API & Integration',
    description: 'RESTful API integration using Axios and Fetch — connecting frontend interfaces to backend services with real-time WebSocket data flows.',
    accentColor: '#e8a217',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native and Ionic, shipping to iOS and Android from a single shared codebase.',
    accentColor: '#e8a217',
  },
]

const COL_3 = [
  {
    icon: Monitor,
    title: 'UI Architecture',
    description: 'Responsive design, accessibility best practices, and performance optimisation. Translating high-fidelity designs into pixel-perfect production UIs.',
    accentColor: '#e8a217',
  },
  {
    icon: GitBranch,
    title: 'DevTools & Workflow',
    description: 'Git & Bitbucket for version control, Vite for fast builds, Firebase for deployment, and collaborative team workflows at scale.',
    accentColor: '#e8a217',
  },
]

const ALL_TECH = [
  'React', 'Vue 3', 'Angular', '', 'Ionic',
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Axios', 'Firebase', 'MySQL',
  'Git', 'Bitbucket', 'Vite', 'Golang', 'REST APIs',
]

export default function Skills() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="skills" style={{
      background: '#0e0e11',
      padding: '7rem 0',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient radial */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: [
          'radial-gradient(ellipse 700px 600px at 100% 50%, rgba(232,162,23,0.04) 0%, transparent 65%)',
          'radial-gradient(ellipse 500px 400px at 0% 80%, rgba(100,80,200,0.03) 0%, transparent 65%)',
        ].join(', '),
      }} />

      {/* Sparkle decoration */}
      <motion.div
        style={{ position: 'absolute', top: '12%', right: '5%', pointerEvents: 'none' }}
        animate={{ rotate: [0, 20, 0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkle size={20} />
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

        {/* Section header */}
        <div style={{ maxWidth: '640px', marginBottom: '5rem' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'block', fontFamily: '"Geist Mono", monospace',
              fontSize: '0.7rem', fontWeight: 700, color: '#e8a217',
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}
          >
            Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: 'Geist, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.04em',
              color: '#edeae4', lineHeight: 1.1, marginBottom: '1.25rem',
            }}
          >
            A toolkit built for{' '}
            <span style={{ position: 'relative', display: 'inline-block', color: '#edeae4', whiteSpace: 'nowrap' }}>
              the modern web
              <WavyUnderline delay={0.5} />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '1rem', color: '#6b6879', lineHeight: 1.75,
            }}
          >
            From interactive trading platforms to cross-platform mobile apps,
            my stack is shaped by 6+ years of real-world product delivery.
          </motion.p>
        </div>

        {/* ── Staggered 3-column feature cards (reference layout) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0 2.5rem',
          marginBottom: '4rem',
        }} className="md:grid-cols-3">

          {/* Column 1 */}
          <div>
            {COL_1.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>

          {/* Column 2 — offset down */}
          <div style={{ paddingTop: '2.5rem' }} className="hidden md:block">
            {COL_2.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={0.1 + i * 0.1} />
            ))}
          </div>

          {/* Column 2 — no offset on mobile */}
          <div className="block md:hidden">
            {COL_2.map((f, i) => (
              <FeatureCard key={`mob-${f.title}`} {...f} delay={0.1 + i * 0.1} />
            ))}
          </div>

          {/* Column 3 */}
          <div>
            {COL_3.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* "EXPLORE >" CTA button (reference style) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}
        >
          {/* Tech pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: 1 }}>
            {ALL_TECH.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ borderColor: 'rgba(232,162,23,0.35)', color: '#edeae4' }}
                style={{
                  display: 'inline-block',
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '0.65rem', fontWeight: 400, color: '#3d3c45',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '0.35rem 0.75rem', borderRadius: '2px',
                  border: '1px solid #1e1e24',
                  cursor: 'default', transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Reference-style button */}
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: '"Geist Mono", monospace',
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#edeae4', background: 'transparent',
              border: '1px solid rgba(237,234,228,0.2)',
              cursor: 'pointer', padding: '0.8rem 1.5rem',
              borderRadius: '3px',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8a217'; e.currentTarget.style.color = '#e8a217' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(237,234,228,0.2)'; e.currentTarget.style.color = '#edeae4' }}
          >
            Hire Me <ArrowRight size={13} strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}
