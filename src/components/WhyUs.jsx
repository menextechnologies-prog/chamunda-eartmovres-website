import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { localWhyVideo, WHY_VIDEO_REMOTE } from '../config.js'
import { Icon, Reveal, Section, SectionHeader, SmartImg } from './ui.jsx'

// Muted looping video layered over the Why-Us photo (same treatment as the hero):
// fades in when decodable, pauses off-screen, skipped for reduced-motion users.
function WhyVideo() {
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
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ease-out ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      autoPlay
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
    >
      <source src={localWhyVideo} type="video/mp4" />
      <source src={WHY_VIDEO_REMOTE} type="video/mp4" />
    </video>
  )
}

export default function WhyUs() {
  const { t } = useLang()
  return (
    <Section id="why-us">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <Reveal className="relative">
          <div className="absolute -top-3 -left-3 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-safety/60" />
          <div className="absolute -right-3 -bottom-3 h-24 w-24 rounded-br-3xl border-r-2 border-b-2 border-safety/60" />
          <div className="img-zoom relative overflow-hidden rounded-3xl">
            <SmartImg
              slot="why"
              alt={t.why.imgAlt}
              className="h-[340px] w-full object-cover md:h-[460px]"
            />
            <WhyVideo />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <span className="glass absolute top-4 left-4 rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-safety uppercase">
              {t.why.expTag}
            </span>
            <div className="glass absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl px-5 py-3.5">
              <span className="font-display text-4xl font-semibold text-safety">
                {t.why.imgBadge.n}
              </span>
              <span className="text-sm leading-tight font-semibold">
                {t.why.imgBadge.t}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Points side */}
        <div>
          <SectionHeader
            align="left"
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            sub={t.why.sub}
          />
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {t.why.items.map((item, i) => (
              <Reveal key={item.t} delay={(i % 2) * 80}>
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-safety/25 bg-safety/10 text-safety">
                    <Icon name={item.icon} className="size-5.5" />
                  </span>
                  <span>
                    <h3 className="font-badge leading-snug">{item.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{item.d}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
