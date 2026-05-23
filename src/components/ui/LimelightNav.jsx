import { useState, useRef, useLayoutEffect } from 'react'

/**
 * LimelightNav — tab bar with an animated amber spotlight bar at the top.
 * Each item uses `company` as its display text instead of an icon.
 *
 * Props:
 *   items            – array of { id, company, onClick? }
 *   defaultActiveIndex – 0-based index of the initially active tab
 *   onTabChange      – (index: number) => void  called on tab switch
 *   style            – optional style overrides for the <nav> wrapper
 */
export function LimelightNav({
  items = [],
  defaultActiveIndex = 0,
  onTabChange,
  style = {},
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const [isReady, setIsReady]         = useState(false)
  const navItemRefs  = useRef([])
  const limelightRef = useRef(null)

  /* Reposition the limelight bar whenever the active tab changes */
  useLayoutEffect(() => {
    if (items.length === 0) return
    const limelight  = limelightRef.current
    const activeItem = navItemRefs.current[activeIndex]
    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft +
        activeItem.offsetWidth / 2 -
        limelight.offsetWidth / 2
      limelight.style.left = `${newLeft}px`
      if (!isReady) setTimeout(() => setIsReady(true), 50)
    }
  }, [activeIndex, isReady, items])

  if (items.length === 0) return null

  const handleClick = (index, itemOnClick) => {
    setActiveIndex(index)
    onTabChange?.(index)
    itemOnClick?.()
  }

  return (
    <nav
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        height: '52px',
        borderRadius: '12px',
        background: '#111114',
        border: '1px solid #1e1e24',
        padding: '0 0.25rem',
        overflowX: 'auto',
        overflowY: 'visible',
        scrollbarWidth: 'none',
        ...style,
      }}
    >
      {items.map(({ id, company, onClick }, index) => (
        <button
          key={id}
          ref={el => (navItemRefs.current[index] = el)}
          onClick={() => handleClick(index, onClick)}
          aria-label={company}
          style={{
            position: 'relative',
            zIndex: 20,
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1.35rem',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontFamily: '"Geist", sans-serif',
            fontSize: '0.82rem',
            fontWeight: activeIndex === index ? 600 : 400,
            letterSpacing: '-0.01em',
            color: activeIndex === index ? '#edeae4' : '#6b6879',
            transition: 'color 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            if (activeIndex !== index) e.currentTarget.style.color = '#9a9aaa'
          }}
          onMouseLeave={e => {
            if (activeIndex !== index) e.currentTarget.style.color = '#6b6879'
          }}
        >
          {company}
        </button>
      ))}

      {/* ── Limelight bar (top amber stripe) ── */}
      <div
        ref={limelightRef}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 10,
          width: '52px',
          height: '4px',
          borderRadius: '0 0 6px 6px',
          background: '#e8a217',
          /* downward amber glow */
          boxShadow: '0 8px 24px 4px rgba(232,162,23,0.22)',
          left: '-999px',
          transition: isReady ? 'left 0.38s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      >
        {/* Cone of light */}
        <div
          style={{
            position: 'absolute',
            left: '-30%',
            top: '4px',
            width: '160%',
            height: '48px',
            clipPath: 'polygon(5% 100%, 25% 0, 75% 0, 95% 100%)',
            background: 'linear-gradient(to bottom, rgba(232,162,23,0.18), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </nav>
  )
}
