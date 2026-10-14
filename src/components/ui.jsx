import { useEffect, useRef, useState } from 'react'
import { PLACEHOLDER, localPhoto } from '../config.js'
import { useLang } from '../i18n.jsx'

// ── Inline SVG icon set (stroke-based, lucide-style) ─────────────────────────
const ICONS = {
  road: <><path d="M4 20 9.5 4" /><path d="m20 20-5.5-16" /><path d="M12 7v2.5M12 12.5V15M12 18v2" /></>,
  shovel: <><path d="M10 3h4" /><path d="M12 3v9" /><path d="M8.5 12h7l-1.1 4.4a3 3 0 0 1-4.8 0Z" /></>,
  mountain: <><path d="m3 19 5.5-9 4 6 2.5-3.5L21 19Z" /><circle cx="18" cy="6" r="1.8" /></>,
  hammer: <><path d="m13 12-8.5 8.5" /><path d="M11.2 5.8 13.6 3.4a2 2 0 0 1 2.8 0l4.2 4.2a2 2 0 0 1 0 2.8L18.2 12.8a2 2 0 0 1-2.8 0l-4.2-4.2a2 2 0 0 1 0-2.8Z" /></>,
  truck: <><path d="M2 6.5h11V16H2z" /><path d="M13 9.5h4.3l2.7 3.2V16h-7" /><circle cx="6.5" cy="17.5" r="1.9" /><circle cx="16.5" cy="17.5" r="1.9" /></>,
  demo: <><path d="M5 21V5.5L12 3v18" /><path d="M2.5 21h19" /><path d="m14.5 21 2-4.5-2.5-3 3-4-1-3.5" /><path d="M7.5 8h.01M7.5 12h.01M7.5 16h.01" /></>,
  waves: <><path d="M2 8c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0" /><path d="M2 13c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0" /><path d="M2 18c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  phone: <path d="M4.6 3h3.9l1.5 4.9-2.4 1.5a12.6 12.6 0 0 0 6 6L15.2 13l4.9 1.5v3.9a1.9 1.9 0 0 1-2.1 1.9A17 17 0 0 1 2.7 5.1 1.9 1.9 0 0 1 4.6 3Z" />,
  whatsapp: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />,
  star: <path d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7-6-3.4-6 3.4 1.3-6.7-5-4.6 6.8-.8z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  shield: <><path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8 7.5 10 4.3-2 7.5-5.3 7.5-10v-6Z" /><path d="m9 11.5 2.2 2.2 4.3-4.2" /></>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5a3.5 3.5 0 0 1 0 7" /><path d="M17.5 14.5a6.5 6.5 0 0 1 4 5.5" /></>,
  filecheck: <><path d="M14 2.5H6.5A1.5 1.5 0 0 0 5 4v16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V7.5Z" /><path d="M14 2.5V8h5" /><path d="m9.5 14 1.8 1.8 3.2-3.3" /></>,
  tag: <><path d="M12.6 2.6 21.4 11.4a2 2 0 0 1 0 2.8L14.2 21.4a2 2 0 0 1-2.8 0L2.6 12.6V4a1.4 1.4 0 0 1 1.4-1.4Z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
  zap: <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13Z" />,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /><path d="M9 11h6M9 15h4" /></>,
  expand: <><path d="M15 3h6v6" /><path d="m21 3-7 7" /><path d="M9 21H3v-6" /><path d="m3 21 7-7" /></>,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  facebook: <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></>,
  youtube: <><path d="M22 12s0-3.3-.4-4.9a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.3a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.9a2.5 2.5 0 0 0 1.8 1.8c1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.9.4-4.9Z" /><path d="m10 9.2 5 2.8-5 2.8Z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" /></>,
  quote: <path d="M10 8c-3 0-5 2.2-5 5.4 0 2.4 1.6 4.1 3.7 4.1 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.3 0-.7.1-.7.1.3-1.4 1.7-2.4 3.2-2.6ZM19.4 8c-3 0-5 2.2-5 5.4 0 2.4 1.6 4.1 3.7 4.1 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.3 0-.7.1-.7.1.3-1.4 1.7-2.4 3.2-2.6Z" />,
}

const FILLED = new Set(['whatsapp', 'star', 'facebook', 'youtube', 'quote'])

export function Icon({ name, className = 'size-5', strokeWidth = 1.7 }) {
  const filled = FILLED.has(name)
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

// ── Image that prefers the client's local photo, falls back to Unsplash ──────
export function SmartImg({ slot, alt, loading = 'lazy', className = '', ...rest }) {
  return (
    <img
      src={localPhoto(slot)}
      data-placeholder={PLACEHOLDER[slot]}
      alt={alt}
      loading={loading}
      decoding={loading === 'eager' ? 'sync' : 'async'}
      className={className}
      onError={(e) => {
        const img = e.currentTarget
        if (img.dataset.step === 'ph') { img.onerror = null; return }
        img.dataset.step = 'ph'
        img.src = img.dataset.placeholder
      }}
      {...rest}
    />
  )
}

// ── Brand logo: client file at /assets/logo.png, monogram fallback ──────────
export function Logo({ compact = false }) {
  const [broken, setBroken] = useState(false)
  const { t } = useLang()
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3 group" aria-label="Chamunda Earthmovers — Home">
      {broken ? (
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-safety font-display text-xl font-bold text-ink">
          CE
        </span>
      ) : (
        <img
          src="/assets/logo.png"
          alt="Chamunda Earthmovers logo"
          className="size-11 shrink-0 object-contain"
          onError={() => setBroken(true)}
        />
      )}
      {!compact && (
        <span className="min-w-0 leading-tight">
          <span className="font-display block text-sm sm:whitespace-nowrap sm:text-lg font-semibold tracking-wide uppercase group-hover:text-safety transition-colors">
            Chamunda <span className="text-safety">Earthmovers</span>
          </span>
          <span className="hidden text-[11px] tracking-widest text-mute uppercase sm:block">
            {t.footer.est}
          </span>
        </span>
      )}
    </a>
  )
}

// ── Scroll-reveal ────────────────────────────────────────────────────────────
// One shared scroll loop for all reveal blocks. Unlike a plain IntersectionObserver
// this also reveals blocks that end up ABOVE the viewport (fast scroll / anchor
// jumps can skip past them between observer checks), so nothing stays invisible.
const revealStore = new Set()
let revealLoopActive = false

function startRevealLoop() {
  if (revealLoopActive) return
  revealLoopActive = true
  let ticking = false
  const tick = () => {
    const vh = window.innerHeight
    for (const el of revealStore) {
      const r = el.getBoundingClientRect()
      if (r.top < vh - 40 || r.bottom < 0) {
        el.classList.add('in')
        revealStore.delete(el)
      }
    }
    if (revealStore.size === 0) {
      window.removeEventListener('scroll', onScroll)
      revealLoopActive = false
    }
  }
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      tick()
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  tick()
}

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    revealStore.add(el)
    startRevealLoop()
    return () => revealStore.delete(el)
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

// ── Section heading block ────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, title, sub, align = 'center' }) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-safety uppercase">
        <span className="h-px w-8 bg-safety/70" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-safety/70" />}
      </p>
      <h2 className="font-display mt-4 text-4xl font-semibold uppercase md:text-5xl">{title}</h2>
      {sub && <p className="font-badge mt-4 text-mute md:text-lg">{sub}</p>}
    </Reveal>
  )
}

// ── Standard section shell (optional full-bleed background photo) ────────────
export function Section({ id, className = '', bgSlot, children }) {
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden py-20 md:py-28 ${className}`}>
      {bgSlot && (
        <div className="absolute inset-0" aria-hidden="true">
          <SmartImg slot={bgSlot} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink/90" />
        </div>
      )}
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  )
}
