import { useLang } from '../i18n.jsx'
import { Icon, Reveal, Section, SectionHeader } from './ui.jsx'

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} / 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={`size-4.5 ${i < count ? 'text-safety' : 'text-white/15'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  return (
    <Section id="testimonials" className="bg-ink2/40">
      <SectionHeader
        eyebrow={t.testimonials.eyebrow}
        title={t.testimonials.title}
        sub={t.testimonials.sub}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 110}>
            <figure className="glass card-hover flex h-full flex-col rounded-2xl p-7">
              <Stars count={item.stars} />
              <blockquote className="mt-5 flex-1">
                <Icon name="quote" className="mb-3 size-7 text-safety/40" />
                <p className="leading-relaxed text-ivory/85">{item.text}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                <span className="font-display grid size-11 shrink-0 place-items-center rounded-full bg-safety/15 text-lg font-semibold text-safety">
                  {item.name.trim().charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm text-mute">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 text-center text-xs text-mute/60 italic">{t.testimonials.note}</p>
      </Reveal>
    </Section>
  )
}
