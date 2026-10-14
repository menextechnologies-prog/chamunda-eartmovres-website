import { useLang } from '../i18n.jsx'
import { SERVICES, SERVICE_ICONS, SERVICE_PHOTO_SLOTS } from '../config.js'
import { Icon, Reveal, Section, SectionHeader, SmartImg } from './ui.jsx'

function ServiceCard({ id, index }) {
  const { t } = useLang()
  const item = t.services.items[id]
  const photoSlot = SERVICE_PHOTO_SLOTS[id]
  return (
    <Reveal delay={(index % 4) * 80}>
      <article className="glass card-hover relative h-full overflow-hidden rounded-2xl p-6">
        {photoSlot && (
          <div className="absolute inset-0" aria-hidden="true">
            <SmartImg
              slot={photoSlot}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/85" />
          </div>
        )}
        <div className="relative">
          <span className="mb-5 grid size-12 place-items-center rounded-xl border border-safety/30 bg-safety/10 text-safety backdrop-blur-sm">
            <Icon name={SERVICE_ICONS[id]} className="size-6" />
          </span>
          <h3 className="font-badge text-lg leading-snug">{item.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-mute">{item.desc}</p>
        </div>
      </article>
    </Reveal>
  )
}

function Highlight({ kind, icon }) {
  const { t } = useLang()
  const item = t.services[kind]
  const gov = kind === 'gov'
  return (
    <Reveal>
      <article
        className={`card-hover relative h-full overflow-hidden rounded-2xl p-7 md:p-8 ${
          gov
            ? 'border border-safety/40 bg-gradient-to-br from-safety/15 via-safety/5 to-transparent'
            : 'glass'
        }`}
      >
        {gov && (
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-safety to-transparent" />
        )}
        <div className="flex items-start gap-5">
          <span
            className={`grid size-13 shrink-0 place-items-center rounded-xl ${
              gov ? 'bg-safety text-ink' : 'border border-safety/30 bg-safety/10 text-safety'
            }`}
            style={{ width: 52, height: 52 }}
          >
            <Icon name={icon} className="size-7" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mute md:text-base">{item.desc}</p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-safety transition hover:gap-3"
            >
              {item.cta}
              <Icon name="arrowRight" className="size-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Services() {
  const { t } = useLang()
  return (
    <Section id="services" bgSlot="services-bg">
      <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} sub={t.services.sub} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((id, i) => (
          <ServiceCard key={id} id={id} index={i} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Highlight kind="gov" icon="filecheck" />
        <Highlight kind="priv" icon="shield" />
      </div>
    </Section>
  )
}
