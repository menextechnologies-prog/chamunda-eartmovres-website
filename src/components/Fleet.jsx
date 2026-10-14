import { useLang } from '../i18n.jsx'
import { MACHINES, waLink } from '../config.js'
import { Icon, Reveal, Section, SectionHeader, SmartImg } from './ui.jsx'

export default function Fleet() {
  const { t } = useLang()

  return (
    <Section id="fleet" bgSlot="fleet-bg">
      <SectionHeader eyebrow={t.fleet.eyebrow} title={t.fleet.title} sub={t.fleet.sub} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MACHINES.map((id, i) => {
          const item = t.fleet.items[id]
          const slot = `fleet-${id}`
          return (
            <Reveal key={id} delay={(i % 3) * 90}>
              <article className="glass card-hover group h-full overflow-hidden rounded-2xl">
                <div className="img-zoom relative h-52 overflow-hidden">
                  <SmartImg
                    slot={slot}
                    alt={`${item.name} — ${t.fleet.eyebrow}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="glass absolute bottom-3 left-3 rounded-full px-3.5 py-1.5 text-sm font-bold">
                    {item.name}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.use}</p>
                  <a
                    href={waLink(t.wa.machine.replace('{machine}', item.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-safety/40 px-4 py-3 text-sm font-bold text-safety transition group-hover:border-safety group-hover:bg-safety group-hover:text-ink"
                  >
                    <Icon name="whatsapp" className="size-4.5" />
                    {t.fleet.book}
                  </a>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-8">
        <p className="flex items-center justify-center gap-2.5 text-center text-sm text-mute">
          <Icon name="users" className="size-4.5 text-safety" />
          {t.fleet.note}
        </p>
        <a
          href="#/machines"
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-safety transition hover:gap-3"
        >
          <span className="mx-auto flex items-center gap-2">
            {t.fleet.viewAll}
            <Icon name="arrowRight" className="size-4" strokeWidth={2.2} />
          </span>
        </a>
      </Reveal>
    </Section>
  )
}
