import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { GALLERY_SLOTS } from '../config.js'
import { Icon, Reveal, Section, SectionHeader, SmartImg } from './ui.jsx'

export default function Gallery() {
  const { t } = useLang()
  const [open, setOpen] = useState(null) // index into GALLERY_SLOTS

  // Keyboard controls + scroll lock while lightbox is open
  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % GALLERY_SLOTS.length)
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + GALLERY_SLOTS.length) % GALLERY_SLOTS.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <Section id="gallery">
      <SectionHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} sub={t.gallery.sub} />

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {GALLERY_SLOTS.map((slot, i) => (
          <Reveal key={slot} delay={(i % 4) * 70}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="img-zoom group relative block w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-safety"
              aria-label={`${t.gallery.expand}: ${t.gallery.captions[i]}`}
            >
              <SmartImg
                slot={slot}
                alt={t.gallery.captions[i]}
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/45 group-focus-visible:bg-ink/45" />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-3 text-left text-xs font-semibold text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm">
                {t.gallery.captions[i]}
              </span>
              <span className="glass absolute top-3 right-3 grid size-9 place-items-center rounded-lg text-safety opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Icon name="expand" className="size-4.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.captions[open]}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="glass absolute top-5 right-5 grid size-11 place-items-center rounded-full text-ivory transition hover:text-safety"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <Icon name="close" className="size-5" />
          </button>

          <button
            type="button"
            className="glass absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full text-ivory transition hover:text-safety md:left-8"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((o) => (o - 1 + GALLERY_SLOTS.length) % GALLERY_SLOTS.length)
            }}
          >
            <Icon name="chevronLeft" className="size-5" />
          </button>
          <button
            type="button"
            className="glass absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full text-ivory transition hover:text-safety md:right-8"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((o) => (o + 1) % GALLERY_SLOTS.length)
            }}
          >
            <Icon name="chevronRight" className="size-5" />
          </button>

          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <SmartImg
              key={GALLERY_SLOTS[open]}
              slot={GALLERY_SLOTS[open]}
              alt={t.gallery.captions[open]}
              loading="eager"
              className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-mute md:text-base">
              {t.gallery.captions[open]}
              <span className="ml-3 text-ivory/40">
                {open + 1} / {GALLERY_SLOTS.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </Section>
  )
}
