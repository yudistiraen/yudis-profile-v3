import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      background: '#0b0b0d',
      borderTop: '1px solid #111114',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Brand */}
        <div>
          <p style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 700,
            fontSize: '0.95rem', color: '#edeae4', letterSpacing: '-0.02em',
          }}>
            Y<span style={{ color: '#e8a217' }}>.</span>E<span style={{ color: '#e8a217' }}>.</span>N
          </p>
          <p style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '0.75rem', color: '#3d3c45', marginTop: '0.2rem',
          }}>
            © {new Date().getFullYear()} Yudistira Eka Nugraha. All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'Geist, sans-serif',
            fontSize: '0.78rem', fontWeight: 500, color: '#6b6879',
            background: '#111114', border: '1px solid #1e1e24',
            cursor: 'pointer', padding: '0.55rem 1rem',
            borderRadius: '100px', transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#edeae4'; e.currentTarget.style.borderColor = 'rgba(237,234,228,0.2)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#6b6879'; e.currentTarget.style.borderColor = '#1e1e24' }}
        >
          <ArrowUp size={13} strokeWidth={2} />
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}
