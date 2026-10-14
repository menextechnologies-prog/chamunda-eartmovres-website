import { useEffect } from 'react'
import { useLang } from '../i18n.jsx'
import { MACHINES, tel1, waLink } from '../config.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Icon, Reveal, SmartImg } from '../components/ui.jsx'

const HOME_TITLE = document.title

export default function MachinesPage() {
  const { t } = useLang()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `Machines on Rent in Gujarat | ${'Chamunda Earthmovers'}`
    return () => {
      document.title = HOME_TITLE
    }
  }, [])

  return (
    <div className="bg-ink text-ivory">
      <Navbar />

      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="absolute inset-0" aria-hidden="true">
            <SmartImg slot="services-bg" alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="max-w-3xl">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-safety uppercase">
                <span className="h-px w-8 bg-safety/70" />
                {t.machinesPage.eyebrow}
              </p>
              <h1 className="font-display mt-4 text-4xl font-semibold uppercase leading-tight sm:text-6xl">
                {t.machinesPage.title}
              </h1>
              <p className="font-herosub mt-5 max-w-xl text-ivory/75 md:text-lg">{t.machinesPage.sub}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={tel1}
                  className="font-badge inline-flex items-center gap-2.5 rounded-full bg-safety px-7 py-4 text-sm text-ink shadow-[0_14px_35px_-12px_rgba(255,193,7,0.55)] transition hover:-translate-y-0.5 hover:bg-[#ffd34d]"
                >
                  <Icon name="phone" className="size-4.5" strokeWidth={2} />
                  {t.machinesPage.call}
                </a>
                <a
                  href={waLink(t.wa.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-badge glass inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm transition hover:-translate-y-0.5 hover:border-[#25D366]/60"
                >
                  <Icon name="whatsapp" className="size-5 text-[#25D366]" />
                  {t.machinesPage.wa}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Machines zigzag list */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col gap-12 md:gap-16">
              {MACHINES.map((id, i) => {
                const item = t.fleet.items[id]
                const isOdd = i % 2 === 0
                return (
                  <Reveal key={id} delay={i * 120} className="w-full">
                    <article className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch md:min-h-[400px]">
                      {/* Image side */}
                      <div className={`relative flex-1 min-w-0 overflow-hidden ${isOdd ? 'md:order-1' : 'md:order-2'} flex-shrink-0 aspect-video md:aspect-auto`}>
                        <div className="img-zoom absolute inset-0">
                          <SmartImg
                            slot={`fleet-${id}`}
                            alt={`${item.name} — ${t.machinesPage.eyebrow}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                        <span className="glass absolute bottom-4 left-4 md:left-6 rounded-full px-4 py-2 text-base font-bold">
                          {item.name}
                        </span>
                      </div>

                      {/* Content side */}
                      <div className={`flex-1 min-w-0 flex items-center p-6 md:p-10 ${isOdd ? 'md:order-2' : 'md:order-1'} relative z-10`}>
                        <div className="w-full max-w-xl">
                          <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-wide">
                            {item.name}
                          </h2>
                          <p className="mt-3 text-base md:text-lg leading-relaxed text-mute">{item.use}</p>
                          <ul className="mt-6 space-y-3 border-t border-line pt-6">
                            {t.machinesPage.bullets[id].map((b) => (
                              <li key={b} className="flex items-start gap-3 text-base md:text-lg text-ivory/90">
                                <Icon name="check" className="mt-1 size-5 shrink-0 text-safety" strokeWidth={2.5} />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={waLink(t.wa.machine.replace('{machine}', item.name))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-xl border border-safety/40 px-6 py-4 text-base font-bold text-safety transition hover:border-safety hover:bg-safety hover:text-ink"
                          >
                            <Icon name="whatsapp" className="size-5" />
                            {t.fleet.book}
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-5 pb-20 md:px-8">
          <Reveal>
            <div className="glass mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-14">
              <h2 className="font-display text-3xl font-semibold uppercase md:text-4xl">
                {t.machinesPage.notSure}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mute md:text-lg">{t.machinesPage.notSureSub}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={tel1}
                  className="font-badge inline-flex items-center gap-2.5 rounded-full bg-safety px-7 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#ffd34d]"
                >
                  <Icon name="phone" className="size-4.5" strokeWidth={2} />
                  {t.machinesPage.call}
                </a>
                <a
                  href={waLink(t.wa.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-badge glass inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm transition hover:-translate-y-0.5 hover:border-[#25D366]/60"
                >
                  <Icon name="whatsapp" className="size-5 text-[#25D366]" />
                  {t.machinesPage.wa}
                </a>
              </div>
              <a
                href="#/"
                className="mt-8 inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-safety"
              >
                <Icon name="arrowRight" className="size-4 rotate-180" strokeWidth={2.2} />
                {t.machinesPage.backHome}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
