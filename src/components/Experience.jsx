import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { LimelightNav } from './ui/LimelightNav'

/* ── Decorative helpers ── */

function Sparkle({ size = 14, color = '#e8a217', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0L13.854 10.146L24 12L13.854 13.854L12 24L10.146 13.854L0 12L10.146 10.146Z" />
    </svg>
  )
}

function WavyUnderline({ delay = 0.4 }) {
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
        stroke="#e8a217"
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

/* ── Data ── */

const EXPERIENCES = [
  {
    role: 'Frontend Developer',
    company: 'Indodax',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2021 — Present',
    current: true,
    stack: ['React', 'Vue.js', 'TypeScript', 'RESTful APIs'],
    bullets: [
      'Maintain and ship new features for a high-traffic crypto trading platform serving millions of active users.',
      'Build reusable, well-documented component libraries that accelerate feature delivery across teams.',
      'Integrate frontend interfaces with backend APIs ensuring real-time data consistency across trading views.',
      'Lead bug triage and resolution on the frontend, coordinating fixes with backend and QA engineers.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Berau Coal Energy',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2019 — Feb 2021',
    current: false,
    stack: ['Vue.js', 'Angular', 'HTML/CSS', 'RESTful APIs'],
    bullets: [
      'Translated UI/UX designs into pixel-accurate, responsive web interfaces for a national energy company.',
      'Developed reusable component systems to standardize UI patterns across the company\'s internal portals.',
      'Collaborated with backend teams to integrate REST APIs into complex, data-intensive dashboards.',
      'Improved frontend stability through systematic bug fixing and cross-browser testing.',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'PT. Solusi Untuk Negeri',
    location: 'Salatiga, Indonesia',
    period: 'Jul 2018 — Jan 2019',
    current: false,
    stack: ['Angular', 'Ionic', 'HTML/CSS', 'RESTful APIs'],
    bullets: [
      'Developed web and cross-platform mobile applications using Angular and Ionic frameworks.',
      'Built and maintained API integrations for mobile and web products under tight sprint cycles.',
      'Gained hands-on experience in the full frontend development lifecycle from design handoff to production.',
    ],
  },
]

/* ── Tab items derived from EXPERIENCES ── */
const TAB_ITEMS = EXPERIENCES.map(exp => ({
  id: exp.company,
  company: exp.company,
}))

/* ── Main component ── */

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const exp = EXPERIENCES[activeIndex]

  return (
    <section
      id="experience"
      style={{ background: '#0b0b0d', padding: '7rem 0', position: 'relative', borderTop: '1px solid #111114' }}
    >
      {/* Amber separator line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(232,162,23,0.12), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: '3.5rem', position: 'relative' }}
        >
          <motion.div
            style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}
            animate={{ rotate: [0, 15, 0, -15, 0], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Sparkle size={17} />
          </motion.div>

          <span style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '0.7rem', fontWeight: 700, color: '#e8a217',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'block', marginBottom: '1rem',
          }}>
            Experience
          </span>

          <h2 style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.04em',
            color: '#edeae4', lineHeight: 1.1,
          }}>
            Where I've{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              built things.
              <WavyUnderline delay={0.35} />
            </span>
          </h2>
        </motion.div>

        {/* ── LimelightNav tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: '2rem', overflowX: 'auto' }}
        >
          <LimelightNav
            items={TAB_ITEMS}
            defaultActiveIndex={0}
            onTabChange={setActiveIndex}
          />
        </motion.div>

        {/* ── Animated tab content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{
              background: '#111114',
              border: '1px solid #1e1e24',
              borderRadius: '20px',
              padding: '2rem 2.25rem',
            }}>
              {/* Card header */}
              <div style={{
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: '1rem', marginBottom: '1.5rem',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <h3 style={{
                      fontFamily: 'Geist, sans-serif', fontWeight: 700,
                      fontSize: '1.15rem', color: '#edeae4', letterSpacing: '-0.025em',
                    }}>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span style={{
                        fontFamily: '"Geist Mono", monospace',
                        fontSize: '0.62rem', fontWeight: 700, color: '#e8a217',
                        padding: '0.2rem 0.65rem', borderRadius: '100px',
                        background: 'rgba(232,162,23,0.1)',
                        border: '1px solid rgba(232,162,23,0.22)',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontFamily: 'Geist, sans-serif', fontSize: '1rem',
                    fontWeight: 600, color: '#e8a217', letterSpacing: '-0.01em',
                  }}>
                    {exp.company}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-end', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={12} color="#6b6879" strokeWidth={2} />
                    <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.78rem', color: '#6b6879' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={12} color="#6b6879" strokeWidth={2} />
                    <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.78rem', color: '#6b6879' }}>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#1a1a20', marginBottom: '1.5rem' }} />

              {/* Bullet points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                    style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}
                  >
                    <span style={{
                      color: '#e8a217', flexShrink: 0,
                      marginTop: '0.5rem', fontSize: '0.4rem',
                    }}>
                      ●
                    </span>
                    <span style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '0.9rem', color: '#8a8899', lineHeight: 1.7,
                    }}>
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.stack.map(t => (
                  <span key={t} style={{
                    fontFamily: '"Geist Mono", monospace',
                    fontSize: '0.72rem', fontWeight: 400, color: '#6b6879',
                    letterSpacing: '0.04em',
                    padding: '0.3rem 0.8rem', borderRadius: '4px',
                    background: '#16161b', border: '1px solid #1e1e24',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Education ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ marginTop: '3rem' }}
        >
          <p style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '0.65rem', fontWeight: 700, color: '#3d3c45',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Education
          </p>
          <div style={{
            background: '#111114', border: '1px solid #1e1e24',
            borderRadius: '16px', padding: '1.5rem 2rem',
            display: 'flex', alignItems: 'center', gap: '1.5rem',
            flexWrap: 'wrap', justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Geist, sans-serif', fontWeight: 700,
                fontSize: '1rem', color: '#edeae4', letterSpacing: '-0.02em',
              }}>
                Universitas Kristen Satya Wacana
              </h3>
              <p style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: '0.85rem', color: '#6b6879', marginTop: '0.25rem',
              }}>
                D3 — Technical Information · GPA 3.34 / 4.00
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
              <Calendar size={13} color="#6b6879" strokeWidth={2} />
              <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.8rem', color: '#6b6879' }}>
                2014 — 2017
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
