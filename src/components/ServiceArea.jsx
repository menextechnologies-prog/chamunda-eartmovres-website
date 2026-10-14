import { useLang } from '../i18n.jsx'
import {
  MAP_DIRECTIONS_SRC,
  MAP_EMBED_SRC,
  PHONE1_DISPLAY,
  PHONE2_DISPLAY,
  tel1,
  tel2,
  waLink,
} from '../config.js'
import { Icon, Reveal, Section, SectionHeader } from './ui.jsx'

export default function ServiceArea() {
  const { t } = useLang()
  return (
    <Section id="area">
      <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col justify-center">
          <SectionHeader
            align="left"
            eyebrow={t.area.eyebrow}
            title={t.area.title}
            sub={t.area.sub}
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="glass h-full rounded-2xl p-5">
                <Icon name="pin" className="size-6 text-safety" />
                <h3 className="font-badge mt-3 text-sm tracking-wider uppercase">{t.area.office}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{t.area.addr}</p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="glass h-full rounded-2xl p-5">
                <Icon name="clock" className="size-6 text-safety" />
                <h3 className="font-badge mt-3 text-sm tracking-wider uppercase">{t.area.hoursTitle}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{t.area.hours}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={tel1}
                className="font-badge inline-flex items-center gap-2.5 rounded-full bg-safety px-6 py-3.5 text-sm text-ink transition hover:-translate-y-0.5 hover:bg-[#ffd34d]"
              >
                <Icon name="phone" className="size-4.5" strokeWidth={2} />
                {t.area.call} · {PHONE1_DISPLAY}
              </a>
              <a
                href={waLink(t.wa.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-badge glass inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm transition hover:-translate-y-0.5 hover:border-[#25D366]/60"
              >
                <Icon name="whatsapp" className="size-5 text-[#25D366]" />
                {t.area.wa}
              </a>
              <a
                href={MAP_DIRECTIONS_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="font-badge glass inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm transition hover:-translate-y-0.5 hover:border-safety/60"
              >
                <Icon name="arrowRight" className="size-4.5 text-safety" strokeWidth={2} />
                {t.area.directions}
              </a>
            </div>
            <p className="mt-4 text-sm text-mute">
              <a href={tel2} className="font-semibold text-ivory/80 hover:text-safety">
                {PHONE2_DISPLAY}
              </a>{' '}
              — {t.nav.callNow}
            </p>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="min-h-[380px] lg:min-h-full">
          <div className="h-full overflow-hidden rounded-3xl border border-line shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)]">
            <iframe
              src={MAP_EMBED_SRC}
              title={t.area.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full grayscale-[0.35] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
