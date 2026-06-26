import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const PROJECTS = [
  {
    tag: 'Crypto Exchange',
    title: 'Indodax Trading Platform',
    description:
      'Contributed to the frontend of one of Indonesia\'s largest cryptocurrency exchanges. Delivered features spanning the order book, portfolio management dashboard, and real-time price charts — all built to handle millions of concurrent users with sub-second UI responsiveness.',
    highlights: [
      'Real-time order book & trading UI',
      'Portfolio analytics dashboard',
      'Reusable component library',
      'API-driven dynamic market data',
    ],
    stack: ['NuxtJs', 'Vue.js', 'TypeScript', 'WebSocket', 'RESTful APIs', 'PHP'],
    accentColor: '#e8a217',
    gradient: 'radial-gradient(ellipse 120% 100% at 100% 0%, rgba(232,162,23,0.1) 0%, transparent 60%)',
  },
  {
    tag: 'Energy Sector',
    title: 'Berau Coal Energy Portal',
    description:
      'Led frontend development for multiple internal and public-facing web portals at a national coal energy company. Translated complex data from ERP backends into clean, intuitive interfaces for corporate reporting, HR workflows, and operational monitoring.',
    highlights: [
      'Corporate reporting dashboard',
      'HR workflow management UI',
      'Cross-browser responsive design',
      'REST API integration at scale',
    ],
    stack: ['Vue.js', 'Angular', 'HTML/CSS', 'Axios', 'MySQL'],
    accentColor: '#7c6fff',
    gradient: 'radial-gradient(ellipse 120% 100% at 0% 100%, rgba(124,111,255,0.08) 0%, transparent 60%)',
  },
  {
    tag: 'Open Source',
    title: 'FFXIV JP Raid Dictionary',
    description:
      'A Dalamud plugin for Final Fantasy XIV that helps non-Japanese players understand Japanese raid terminology, Party Finder shorthand, and job abbreviations. Includes a bundled offline dictionary with live search, plus an optional AI-powered translation feature supporting OpenAI, Claude, and Google Translate.',
    highlights: [
      'In-game dictionary with live search',
      'AI chat translation via /jpt command',
      'Multi-provider support (OpenAI, Claude, Google)',
      'Bundled offline data, no network required',
    ],
    stack: ['C#', '.NET', 'Dalamud SDK', 'ImGui', 'OpenAI API', 'Claude API'],
    accentColor: '#2dd4bf',
    gradient: 'radial-gradient(ellipse 120% 100% at 50% 0%, rgba(45,212,191,0.08) 0%, transparent 60%)',
    link: 'https://github.com/yudistiraen/FFXIV-JP-Dictionary',
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{
      background: '#0b0b0d',
      padding: '7rem 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem' }}>
          <span style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '0.7rem', fontWeight: 700, color: '#e8a217',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'block', marginBottom: '1rem',
          }}>
            Featured Work
          </span>
          <h2 style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.04em',
            color: '#edeae4', lineHeight: 1.1,
          }}>
            What I've{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              shipped.
              <WavyUnderline delay={0.35} />
            </span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(i * 0.1)}
              style={{
                position: 'relative', overflow: 'hidden',
                background: '#111114', border: '1px solid #1e1e24',
                borderRadius: '22px', padding: '2.25rem',
                transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${hexToRgb(p.accentColor)},0.25)`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(${hexToRgb(p.accentColor)},0.08)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e1e24'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Background gradient */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: p.gradient, opacity: 0.6,
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Two-col layout on desktop */}
                <div style={{
                  display: 'grid',
                  gap: '2rem',
                }} className="md:grid-cols-[1fr_auto]">
                  <div>
                    {/* Tag */}
                    <span style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '0.67rem', fontWeight: 400, color: p.accentColor,
                      letterSpacing: '0.09em', textTransform: 'uppercase',
                      display: 'block', marginBottom: '0.6rem',
                    }}>
                      {p.tag}
                    </span>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'Geist, sans-serif', fontWeight: 800,
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                      color: '#edeae4', letterSpacing: '-0.03em',
                      lineHeight: 1.15, marginBottom: '1rem',
                    }}>
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '0.9rem', color: '#8a8899',
                      lineHeight: 1.75, marginBottom: '1.5rem',
                      maxWidth: '640px',
                    }}>
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {p.highlights.map(h => (
                        <span key={h} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          fontFamily: 'Geist, sans-serif',
                          fontSize: '0.78rem', fontWeight: 500, color: '#6b6879',
                          padding: '0.35rem 0.75rem', borderRadius: '100px',
                          background: '#16161b', border: '1px solid #1e1e24',
                        }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.accentColor, opacity: 0.8, flexShrink: 0 }} />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                      {p.stack.map(t => (
                        <span key={t} style={{
                          fontFamily: 'Geist, sans-serif',
                          fontSize: '0.75rem', fontWeight: 600,
                          color: p.accentColor,
                          padding: '0.3rem 0.7rem', borderRadius: '6px',
                          background: `rgba(${hexToRgb(p.accentColor)},0.08)`,
                          border: `1px solid rgba(${hexToRgb(p.accentColor)},0.15)`,
                        }}>
                          {t}
                        </span>
                      ))}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                            fontFamily: '"Geist Mono", monospace',
                            fontSize: '0.68rem', fontWeight: 600,
                            color: p.accentColor, textDecoration: 'none',
                            letterSpacing: '0.06em', textTransform: 'uppercase',
                            marginLeft: '0.5rem',
                            transition: 'opacity 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          View on GitHub <ArrowRight size={12} strokeWidth={2} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Index number */}
                  <div className="hidden md:flex" style={{
                    alignItems: 'flex-start', justifyContent: 'flex-end',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: 'Geist, sans-serif', fontWeight: 800,
                      fontSize: '5rem', color: `rgba(${hexToRgb(p.accentColor)},0.06)`,
                      lineHeight: 1, userSelect: 'none', letterSpacing: '-0.05em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
