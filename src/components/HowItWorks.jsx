import { useLang } from '../i18n.jsx'
import { Icon, Reveal, Section, SectionHeader } from './ui.jsx'

export default function HowItWorks() {
  const { t } = useLang()
  return (
    <Section id="how" className="bg-ink2/40">
      <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} sub={t.how.sub} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.how.steps.map((step, i) => (
          <Reveal key={step.t} delay={i * 110}>
            <article className="glass card-hover relative h-full overflow-hidden rounded-2xl p-6 pt-8">
              <span className="font-display pointer-events-none absolute -top-2 right-3 text-7xl font-bold text-white/[0.05]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid size-12 place-items-center rounded-xl bg-safety text-ink">
                <Icon name={step.icon} className="size-6" strokeWidth={1.9} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold uppercase tracking-wide">
                {step.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{step.d}</p>
              {i < 3 && (
                <Icon
                  name="arrowRight"
                  className="absolute top-1/2 -right-3.5 z-10 hidden size-6 -translate-y-1/2 text-safety/50 lg:block"
                  strokeWidth={2}
                />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
