import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useParallax } from '../hooks.js'
import { HERO_VIDEO_REMOTE, localHeroVideo, waLink } from '../config.js'
import { Icon, SmartImg } from './ui.jsx'

// Muted looping background video layered over the hero image.
// - Fades in smoothly once frames are decodable (the image stays visible as
//   poster/fallback until then, and permanently if the video can't load).
// - Slow Ken Burns zoom (CSS) for a cinematic touch.
// - Pauses when the hero scrolls out of view to save battery/data.
// - Skipped entirely for prefers-reduced-motion users (image shows instead).
function HeroVideo() {
  const [ready, setReady] = useState(false)
  const videoRef = useRef(null)

  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.1 }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  if (reducedMotion) return null

  return (
    <video
      ref={(el) => {
        videoRef.current = el
        if (el) {
          el.muted = true
          el.defaultMuted = true
        }
      }}
      className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      autoPlay
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
    >
      <source src={localHeroVideo} type="video/mp4" />
      <source src={HERO_VIDEO_REMOTE} type="video/mp4" />
    </video>
  )
}

export default function Hero() {
  const { t } = useLang()
  const bgRef = useParallax(0.22)

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Parallax background: image poster + looping video */}
      <div ref={bgRef} className="absolute -inset-y-24 inset-x-0 will-change-transform">
        <SmartImg
          slot="hero"
          alt={t.hero.alt}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <HeroVideo />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/50 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/20 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-36 md:px-8 md:pb-44">
        <div className="max-w-3xl">
          <p className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-ivory/90">
            <span className="relative flex size-2">
              <span className="ping-dot absolute inline-flex size-full rounded-full bg-safety" />
              <span className="relative inline-flex size-2 rounded-full bg-safety" />
            </span>
            {t.hero.badge}
          </p>

          <h1 className="font-display mt-7 text-5xl font-semibold uppercase leading-[1.04] sm:text-7xl lg:text-8xl">
            <span className="block">{t.hero.title1}</span>
            <span className="mt-1 block text-safety">{t.hero.title2}</span>
          </h1>

          <p className="font-herosub mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="font-badge inline-flex items-center gap-2.5 rounded-full bg-safety px-7 py-4 text-sm text-ink shadow-[0_14px_35px_-12px_rgba(255,193,7,0.55)] transition hover:-translate-y-0.5 hover:bg-[#ffd34d]"
            >
              {t.hero.quote}
              <Icon name="arrowRight" className="size-4" strokeWidth={2.2} />
            </a>
            <a
              href={waLink(t.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-badge glass inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm text-ivory transition hover:-translate-y-0.5 hover:border-[#25D366]/60"
            >
              <Icon name="whatsapp" className="size-5 text-[#25D366]" />
              {t.hero.whatsapp}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {t.hero.badges.map((b) => (
              <div key={b.t} className="glass flex items-center gap-3 rounded-xl px-4 py-3.5">
                <Icon name={b.icon} className="size-6 shrink-0 text-safety" />
                <span className="leading-tight">
                  <span className="font-badge block text-sm">{b.t}</span>
                  <span className="block text-xs text-ivory/55">{b.d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#stats"
        aria-label="Scroll down"
        className="scroll-hint absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ivory/50 transition-colors hover:text-safety md:bottom-8 md:block"
      >
        <Icon name="chevronDown" className="size-7" />
      </a>
    </section>
  )
}
