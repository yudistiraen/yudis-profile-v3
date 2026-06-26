import { motion } from 'framer-motion'
import { Gamepad2, MonitorPlay, Code2, MapPin, Mail, Music } from 'lucide-react'

function LinkedinIcon({ size = 16, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function Sparkle({ size = 14, color = '#e8a217', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0L13.854 10.146L24 12L13.854 13.854L12 24L10.146 13.854L0 12L10.146 10.146Z" />
    </svg>
  )
}

function WavyUnderline({ color = '#e8a217', delay = 0.4 }) {
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const INTERESTS = [
  { icon: Gamepad2, label: 'Games' },
  { icon: Music, label: 'Music' },
  { icon: Code2, label: 'Open Source' },
  { icon: MonitorPlay, label: 'Streaming' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#0b0b0d', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section label */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem', position: 'relative' }}>
          {/* Sparkle decoration */}
          <motion.div
            style={{ position: 'absolute', top: '-1rem', right: '2rem', pointerEvents: 'none' }}
            animate={{ rotate: [0, 18, 0, -18, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkle size={18} />
          </motion.div>

          <span style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '0.7rem', fontWeight: 700, color: '#e8a217',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'block', marginBottom: '1rem',
          }}>
            About
          </span>
          <h2 style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.04em',
            color: '#edeae4', marginTop: '0.5rem', lineHeight: 1.1,
          }}>
            The developer behind
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              the screen.
              <WavyUnderline delay={0.4} />
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>
          {/* Left: Text */}
          <motion.div {...fadeUp(0.1)}>
            <div style={{
              fontFamily: 'Geist, sans-serif',
              lineHeight: 1.8, color: '#8a8899',
              fontSize: '1rem', marginBottom: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}>
              <p>
                I'm a frontend developer based in Depok, Indonesia. Over the past 6 years
                I've been fortunate to work on projects that helped me grow, from building
                interfaces with <span style={{ color: '#edeae4', fontWeight: 500 }}>Angular, Vue.js, React</span> to learning
                how to pick the right tool for different needs.
              </p>
              <p>
                I started out building mobile apps at a small startup,
                then moved on to working on internal tools for an energy company,
                and now I'm part of the frontend team at{' '}
                <span style={{ color: '#edeae4', fontWeight: 500 }}>a cryptocurrency exchange in Indonesia</span>.
                Each role has taught me a lot about teamwork, translating requirements
                into usable interfaces, and staying consistent under tight deadlines.
              </p>
              <p>
                I try to write code that's accessible and easy to maintain. I'm always
                looking for ways to improve and learn from the people around me.
              </p>
            </div>

            {/* Interests */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#3d3c45', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                Off the Clock
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {INTERESTS.map(({ icon: Icon, label }) => (
                  <span key={label} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '0.82rem', fontWeight: 500, color: '#6b6879',
                    padding: '0.4rem 0.85rem', borderRadius: '100px',
                    background: '#111114', border: '1px solid #1e1e24',
                  }}>
                    <Icon size={13} strokeWidth={2} color="#e8a217" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { icon: MapPin, text: 'Grand Depok City, Depok, Indonesia' },
                { icon: Mail, text: 'yudistira.enugraha@gmail.com', href: 'mailto:yudistira.enugraha@gmail.com' },
                { icon: LinkedinIcon, text: 'linkedin.com/in/yudistira-nugraha', href: 'https://linkedin.com/in/yudistira-nugraha' },
                { icon: GithubIcon, text: 'github.com/yudistiraen', href: 'https://github.com/yudistiraen' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon size={14} color="#e8a217" strokeWidth={2} style={{ flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#6b6879', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#edeae4'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6b6879'}>
                      {text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.85rem', color: '#6b6879' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Avatar card + stats */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Avatar placeholder */}
            <div style={{
              position: 'relative', borderRadius: '20px', overflow: 'hidden',
              background: '#111114', border: '1px solid #1e1e24',
              aspectRatio: '4/3',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(232,162,23,0.08) 0%, transparent 60%)',
              }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'rgba(232,162,23,0.1)', border: '2px solid rgba(232,162,23,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <span style={{ fontFamily: 'Geist, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#e8a217' }}>
                    Y
                  </span>
                </div>
                <p style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#edeae4', letterSpacing: '-0.02em' }}>
                  Yudistira Eka Nugraha
                </p>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.8rem', color: '#6b6879', marginTop: '0.3rem' }}>
                  Frontend Developer · Jakarta, Indonesia
                </p>
                <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {['React', 'Vue', 'Angular'].map(t => (
                    <span key={t} style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '0.72rem', fontWeight: 600, color: '#e8a217',
                      padding: '0.25rem 0.65rem', borderRadius: '100px',
                      background: 'rgba(232,162,23,0.1)', border: '1px solid rgba(232,162,23,0.2)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '6+', label: 'Years of Experience' },
                { value: '3', label: 'Companies Worked' },
                { value: '5+', label: 'JS Frameworks' },
                { value: 'Feb 2021', label: 'Current Role Since' },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  background: '#111114', border: '1px solid #1e1e24',
                  borderRadius: '14px', padding: '1.25rem',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,162,23,0.25)'; e.currentTarget.style.background = '#131318' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e24'; e.currentTarget.style.background = '#111114' }}
                >
                  <p style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#e8a217', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {value}
                  </p>
                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.78rem', color: '#6b6879', marginTop: '0.4rem', lineHeight: 1.4 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
