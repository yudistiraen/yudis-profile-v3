import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const S = {
  header: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
    borderBottom: scrolled ? '1px solid rgba(30,30,36,0.9)' : '1px solid transparent',
    background: scrolled ? 'rgba(11,11,13,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(24px)' : 'none',
  }),
  inner: {
    maxWidth: '1200px', margin: '0 auto', padding: '0 2rem',
  },
  nav: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', height: '68px',
  },
  logo: {
    fontFamily: 'Geist, sans-serif', fontWeight: 800,
    fontSize: '1.2rem', color: '#edeae4',
    textDecoration: 'none', letterSpacing: '-0.02em',
    display: 'flex', alignItems: 'center', gap: '1px',
  },
  dot: { color: '#e8a217' },
  linkList: {
    display: 'flex', gap: '2.25rem', listStyle: 'none',
    alignItems: 'center', margin: 0, padding: 0,
  },
  link: {
    fontFamily: 'Geist, sans-serif',
    fontSize: '0.85rem', fontWeight: 500, color: '#6b6879',
    background: 'none', border: 'none', cursor: 'pointer',
    transition: 'color 0.2s', letterSpacing: '0.01em',
    padding: '0.25rem 0',
  },
  cta: {
    fontFamily: 'Geist, sans-serif',
    fontSize: '0.85rem', fontWeight: 600, color: '#0b0b0d',
    background: '#e8a217', border: 'none', cursor: 'pointer',
    padding: '0.55rem 1.35rem', borderRadius: '100px',
    transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
    boxShadow: '0 4px 16px rgba(232,162,23,0.25)',
  },
  hamburger: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#edeae4', padding: '0.5rem', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
  },
  drawer: {
    background: 'rgba(11,11,13,0.97)', backdropFilter: 'blur(24px)',
    borderTop: '1px solid #1e1e24', padding: '1.25rem 2rem 2rem',
    display: 'flex', flexDirection: 'column', gap: '0',
  },
  drawerLink: {
    fontFamily: 'Geist, sans-serif',
    fontSize: '1rem', fontWeight: 500, color: '#edeae4',
    background: 'none', border: 'none', borderBottom: '1px solid #1e1e24',
    cursor: 'pointer', textAlign: 'left',
    padding: '0.9rem 0', width: '100%',
  },
  drawerCta: {
    marginTop: '1.25rem', fontFamily: 'Geist, sans-serif',
    fontSize: '0.95rem', fontWeight: 600, color: '#0b0b0d',
    background: '#e8a217', border: 'none', cursor: 'pointer',
    padding: '0.8rem 1.5rem', borderRadius: '100px',
    alignSelf: 'flex-start',
  },
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header style={S.header(scrolled)}>
      <div style={S.inner}>
        <nav style={S.nav}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={S.logo}>
            Y<span style={S.dot}>.</span>E<span style={S.dot}>.</span>N
          </a>

          {/* Desktop */}
          <ul style={S.linkList} className="hidden md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  style={S.link}
                  onClick={() => scrollTo(href)}
                  onMouseEnter={e => e.currentTarget.style.color = '#edeae4'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b6879'}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                style={S.cta}
                onClick={() => scrollTo('#contact')}
                onMouseEnter={e => { e.currentTarget.style.background = '#f5b830'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,162,23,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#e8a217'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,162,23,0.25)' }}
              >
                Hire Me
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            style={S.hamburger}
            className="flex md:hidden"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={S.drawer}
            className="md:hidden"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button key={label} style={S.drawerLink} onClick={() => scrollTo(href)}>
                {label}
              </button>
            ))}
            <button style={S.drawerCta} onClick={() => scrollTo('#contact')}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
