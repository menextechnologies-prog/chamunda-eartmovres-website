import { useLang } from '../i18n.jsx'
import { useCountUp, useInView } from '../hooks.js'
import { Icon, Reveal } from './ui.jsx'

function Stat({ item }) {
  const { lang } = useLang()
  const [ref, inView] = useInView(0.4)
  const value = useCountUp(item.v || 0, inView)
  const locale = lang === 'gu' ? 'gu-IN' : 'en-IN'

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5 text-center">
      {item.all ? (
        <span className="font-display inline-flex items-center gap-2 text-4xl font-semibold text-safety md:text-5xl">
          <Icon name="pin" className="size-8 text-safety" strokeWidth={1.9} />
          {item.all}
        </span>
      ) : (
        <span className="font-display text-4xl font-semibold text-safety md:text-5xl">
          {value.toLocaleString(locale)}
          {item.suf}
        </span>
      )}
      <span className="text-xs font-semibold tracking-[0.18em] text-mute uppercase md:text-sm">
        {item.label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  const { t } = useLang()
  return (
    <section id="stats" className="relative scroll-mt-20 border-y border-line bg-ink2/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-safety/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-safety/70 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-12 md:grid-cols-4 md:px-8 md:py-14">
        {t.stats.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 90}>
            <Stat item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
