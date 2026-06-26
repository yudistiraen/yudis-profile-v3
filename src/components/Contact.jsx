import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Copy, Check } from 'lucide-react'

function GithubIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { useState } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yudistira.enugraha@gmail.com',
    href: 'mailto:yudistira.enugraha@gmail.com',
    copyable: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Yudistira Nugraha',
    href: 'https://linkedin.com/in/yudistira-nugraha',
    copyable: false,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'yudistiraen',
    href: 'https://github.com/yudistiraen',
    copyable: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Depok, West Java, Indonesia',
    href: null,
    copyable: false,
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: copied ? '#22c55e' : '#3d3c45',
        padding: '0.25rem', borderRadius: '4px',
        transition: 'color 0.2s', display: 'flex', alignItems: 'center',
        flexShrink: 0,
      }}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      onMouseEnter={e => { if (!copied) e.currentTarget.style.color = '#e8a217' }}
      onMouseLeave={e => { if (!copied) e.currentTarget.style.color = '#3d3c45' }}
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{
      background: '#0e0e11',
      padding: '7rem 0',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: [
          'radial-gradient(ellipse 600px 600px at 50% 100%, rgba(232,162,23,0.05) 0%, transparent 65%)',
          'radial-gradient(ellipse 400px 300px at 10% 30%, rgba(124,111,255,0.04) 0%, transparent 60%)',
        ].join(', '),
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '0.7rem', fontWeight: 700, color: '#e8a217',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'block', marginBottom: '1rem',
          }}>
            Contact
          </span>
          <h2 style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.04em',
            color: '#edeae4', lineHeight: 1.05,
          }}>
            Let's build something
            <br />
            <span style={{ color: '#e8a217' }}>great together.</span>
          </h2>
          <p style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '1rem', color: '#6b6879', lineHeight: 1.75,
            maxWidth: '480px', margin: '1.5rem auto 0',
          }}>
            Open to full-time roles, contract projects, and freelance opportunities.
            Drop me a line and let's talk.
          </p>
        </motion.div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem', alignItems: 'start',
        }}>
          {/* Contact cards */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, copyable }) => (
              <div
                key={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: '#111114', border: '1px solid #1e1e24',
                  borderRadius: '16px', padding: '1.25rem 1.5rem',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,162,23,0.2)'; e.currentTarget.style.background = '#131318' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e24'; e.currentTarget.style.background = '#111114' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(232,162,23,0.08)', border: '1px solid rgba(232,162,23,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={17} color="#e8a217" strokeWidth={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#3d3c45', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#edeae4', textDecoration: 'none', transition: 'color 0.2s', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e8a217'}
                      onMouseLeave={e => e.currentTarget.style.color = '#edeae4'}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#8a8899' }}>
                      {value}
                    </span>
                  )}
                </div>
                {copyable && <CopyButton text={value} />}
              </div>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.div
            {...fadeUp(0.2)}
            style={{
              background: '#111114', border: '1px solid #1e1e24',
              borderRadius: '22px', padding: '2.5rem',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 150% 120% at 100% 0%, rgba(232,162,23,0.06) 0%, transparent 60%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '0.72rem', fontWeight: 600, color: '#22c55e',
                  padding: '0.35rem 0.8rem', borderRadius: '100px',
                  background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                  marginBottom: '1.25rem',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                  Open to opportunities
                </div>
                <h3 style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#edeae4', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                  Ready for your next project?
                </h3>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.88rem', color: '#6b6879', lineHeight: 1.7 }}>
                  Whether you need a frontend engineer for a long-term role or a focused freelance sprint, I'm available to discuss how I can contribute to your team.
                </p>
              </div>

              <div style={{ borderTop: '1px solid #1e1e24', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="mailto:yudistira.enugraha@gmail.com"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '0.9rem', fontWeight: 600, color: '#0b0b0d',
                    background: '#e8a217', textDecoration: 'none',
                    padding: '0.85rem 1.75rem', borderRadius: '100px',
                    transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                    boxShadow: '0 4px 20px rgba(232,162,23,0.3)',
                    textAlign: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f5b830'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,162,23,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#e8a217'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,162,23,0.3)' }}
                >
                  <Mail size={16} strokeWidth={2} />
                  Send an Email
                </a>
                <a href="https://linkedin.com/in/yudistira-nugraha" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '0.9rem', fontWeight: 600, color: '#edeae4',
                    background: 'transparent', textDecoration: 'none',
                    border: '1px solid rgba(237,234,228,0.12)',
                    padding: '0.85rem 1.75rem', borderRadius: '100px',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
                    textAlign: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(237,234,228,0.3)'; e.currentTarget.style.background = 'rgba(237,234,228,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(237,234,228,0.12)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <LinkedinIcon size={16} strokeWidth={2} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
