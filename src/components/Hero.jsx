import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Shared decorative primitives ── */

function Sparkle({ size = 14, color = '#e8a217', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0L13.854 10.146L24 12L13.854 13.854L12 24L10.146 13.854L0 12L10.146 10.146Z" />
    </svg>
  )
}

/* Animated wavy underline on key text */
function WavyUnderline({ color = '#e8a217', delay = 0.8 }) {
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
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const MICRO_PARTICLES = [
  { top: '22%', left: '12%', size: 3, opacity: 0.3 },
  { top: '68%', right: '18%', size: 2, opacity: 0.2 },
  { top: '40%', left: '52%', size: 2.5, opacity: 0.25 },
  { top: '82%', left: '38%', size: 2, opacity: 0.15 },
  { top: '15%', left: '72%', size: 1.5, opacity: 0.18 },
]

export default function Hero() {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const statsRef = useRef(null)
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Split text reveal ──
      const chars = nameRef.current.querySelectorAll('.char')
      gsap.set(chars, { y: '110%', opacity: 0 })
      gsap.to(chars, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.04,
        delay: 0.25,
      })

      // ── Counter animation ──
      statsRef.current.querySelectorAll('.stat-counter').forEach((el, i) => {
        const target = parseInt(el.dataset.target, 10)
        const suffix = el.dataset.suffix || ''
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 2,
          delay: 0.85 + i * 0.1,
          ease: 'power2.out',
          snap: { val: 1 },
          onUpdate() {
            el.textContent = `${Math.round(counter.val)}${suffix}`
          },
        })
      })

      // ── Parallax layers (scroll-driven) ──
      const st = {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      }

      gsap.to('.plx-gradient', { y: -40, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-glow', { y: -55, scale: 1.15, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-dots', { y: -75, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-ring', { y: -130, rotation: -6, scale: 0.93, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-ring-2', { y: -60, rotation: 4, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-sparkle-1', { y: -200, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-sparkle-2', { y: -160, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-sparkle-3', { y: -110, ease: 'none', scrollTrigger: st })
      gsap.to('.plx-particles', { y: -260, opacity: 0, ease: 'none', scrollTrigger: st })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative', minHeight: '100dvh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden', background: '#0b0b0d',
      }}
    >
      {/* ── Layered ambient gradient (deep background) ── */}
      <div className="plx-gradient" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: [
            'radial-gradient(ellipse 900px 700px at 80% 10%, rgba(232,162,23,0.07) 0%, transparent 65%)',
            'radial-gradient(ellipse 600px 500px at 5% 85%, rgba(90,60,180,0.04) 0%, transparent 60%)',
          ].join(', '),
        }} />
      </div>

      {/* ── Floating amber glow orb (new, deep layer) ── */}
      <div className="plx-glow" style={{
        position: 'absolute', top: '50%', left: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,162,23,0.045) 0%, transparent 65%)',
        pointerEvents: 'none', filter: 'blur(50px)',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* ── Subtle dot grid ── */}
      <div className="plx-dots" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 60% 0%, black 20%, transparent 100%)',
      }} />

      {/* ── Large decorative arc ring (top-right) ── */}
      <div className="plx-ring" style={{
        position: 'absolute', top: '-220px', right: '-220px',
        width: '780px', height: '780px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }}>
        {/* Inner concentric ring */}
        <div style={{
          position: 'absolute', inset: '110px', borderRadius: '50%',
          border: '1px solid rgba(232,162,23,0.05)',
        }} />
      </div>

      {/* ── Secondary arc ring (bottom-left, new) ── */}
      <div className="plx-ring-2" style={{
        position: 'absolute', bottom: '-320px', left: '-280px',
        width: '700px', height: '700px', borderRadius: '50%',
        border: '1px solid rgba(232,162,23,0.025)',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', inset: '90px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.02)',
        }} />
      </div>

      {/* ── Sparkle decorations (wrapper for GSAP parallax, inner for FM rotation) ── */}
      <div className="plx-sparkle-1" style={{ position: 'absolute', top: '18%', right: '6%', pointerEvents: 'none' }}>
        <motion.div
          animate={{ rotate: [0, 15, 0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkle size={22} color="#e8a217" />
        </motion.div>
      </div>

      <div className="plx-sparkle-2" style={{ position: 'absolute', top: '42%', right: '14%', pointerEvents: 'none' }}>
        <motion.div
          animate={{ rotate: [0, -20, 0, 20, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <Sparkle size={12} color="#e8a217" />
        </motion.div>
      </div>

      <div className="plx-sparkle-3" style={{ position: 'absolute', bottom: '28%', left: '4%', pointerEvents: 'none' }}>
        <motion.div
          animate={{ rotate: [0, 30, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        >
          <Sparkle size={16} color="#e8a217" />
        </motion.div>
      </div>

      {/* ── Floating micro particles (new, foreground layer — fastest parallax) ── */}
      <div className="plx-particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {MICRO_PARTICLES.map((p, i) => (
          <div key={i} style={{
            position: 'absolute', top: p.top, left: p.left, right: p.right,
            width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%',
            background: '#e8a217', opacity: p.opacity,
          }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2.25rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: '"Geist Mono", monospace',
              fontSize: '0.7rem', fontWeight: 400,
              color: '#e8a217', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.45rem 1rem', borderRadius: '3px',
              background: 'rgba(232,162,23,0.07)',
              border: '1px solid rgba(232,162,23,0.2)',
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e8a217', display: 'inline-block', flexShrink: 0 }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name — GSAP split text reveal */}
          <h1 ref={nameRef} style={{
            fontFamily: 'Geist, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
            lineHeight: 1.0, letterSpacing: '-0.04em',
            color: '#edeae4', margin: '0 0 0.15em',
          }}>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              {'Yudistira'.split('').map((char, i) => (
                <span key={`y-${i}`} className="char" style={{ display: 'inline-block' }}>
                  {char}
                </span>
              ))}
            </span>
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              {'Eka'.split('').map((char, i) => (
                <span key={`e-${i}`} className="char" style={{ display: 'inline-block', color: '#e8a217' }}>
                  {char}
                </span>
              ))}
              <span className="char" style={{ display: 'inline-block' }}>{' '}</span>
              {'Nugraha'.split('').map((char, i) => (
                <span key={`n-${i}`} className="char" style={{ display: 'inline-block' }}>
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Role with animated underline */}
          <motion.div {...fadeUp(0.35)} style={{ marginBottom: '2rem' }}>
            <p style={{
              fontFamily: 'Geist, sans-serif', fontWeight: 500,
              fontSize: 'clamp(1.05rem, 2.5vw, 1.55rem)',
              color: '#6b6879', letterSpacing: '-0.01em',
              lineHeight: 1.6,
            }}>
              <span style={{ position: 'relative', display: 'inline-block', color: '#edeae4' }}>
                Frontend Developer
                <WavyUnderline delay={0.6} />
              </span>
              {' '}specializing in{' '}
              <span style={{ color: '#edeae4', fontWeight: 600 }}>React</span>,{' '}
              <span style={{ color: '#edeae4', fontWeight: 600 }}>Vue</span> &{' '}
              <span style={{ color: '#edeae4', fontWeight: 600 }}>Angular</span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p {...fadeUp(0.45)} style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 'clamp(0.92rem, 1.5vw, 1.02rem)',
            lineHeight: 1.8, color: '#6b6879',
            maxWidth: '540px', marginBottom: '3rem',
          }}>
            6+ years crafting performant, pixel-perfect interfaces for a crypto
            exchange, an energy conglomerate, and enterprise mobile apps. I turn
            complex product requirements into clean, maintainable UI.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => scrollTo('#projects')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: '"Geist Mono", monospace',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#0b0b0d',
                background: '#e8a217', border: 'none', cursor: 'pointer',
                padding: '0.9rem 1.75rem', borderRadius: '3px',
                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(232,162,23,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f5b830'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,162,23,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#e8a217'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,162,23,0.3)' }}
            >
              View My Work &gt;
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: '"Geist Mono", monospace',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#edeae4',
                background: 'transparent',
                border: '1px solid rgba(237,234,228,0.18)',
                cursor: 'pointer', padding: '0.9rem 1.75rem', borderRadius: '3px',
                transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(237,234,228,0.4)'; e.currentTarget.style.background = 'rgba(237,234,228,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(237,234,228,0.18)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <Mail size={14} strokeWidth={2} />
              Get in Touch
            </button>
          </motion.div>

          {/* Stats — GSAP counter animation */}
          <motion.div {...fadeUp(0.7)} ref={statsRef} style={{
            marginTop: '4.5rem',
            display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid #111114',
          }}>
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '3', label: 'Companies' },
              { value: '5+', label: 'Frameworks' },
              { value: '50+', label: 'Features Shipped' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                <p
                  className="stat-counter"
                  data-target={parseInt(value, 10)}
                  data-suffix={value.replace(/\d/g, '')}
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: '#edeae4', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  0{value.replace(/\d/g, '')}
                </p>
                <p style={{ fontFamily: '"Geist Mono", monospace', fontSize: '0.65rem', color: '#3d3c45', marginTop: '0.35rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
        onClick={() => scrollTo('#about')}
      >
        <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: '0.62rem', color: '#2e2d36', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} color="#2e2d36" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
