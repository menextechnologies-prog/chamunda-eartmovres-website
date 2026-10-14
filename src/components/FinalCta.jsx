import { useLang } from '../i18n.jsx'
import { PHONE1_DISPLAY, PHONE2_DISPLAY, tel1, tel2, waLink } from '../config.js'
import { Icon, Reveal } from './ui.jsx'

export default function FinalCta() {
  const { t } = useLang()
  return (
    <section className="scroll-mt-20 px-5 py-10 md:px-8 md:py-16">
      <Reveal>
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-safety via-[#ffbe00] to-amberdeep text-ink"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, rgba(0,0,0,0.05) 0 14px, transparent 14px 34px), linear-gradient(120deg, #ffc107 30%, #ff9d00)',
          }}
        >
          <div className="relative px-7 py-12 text-center md:px-12 md:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold uppercase leading-tight md:text-6xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-medium text-ink/75 md:text-lg">
              {t.finalCta.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={tel1}
                className="font-badge inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm text-ivory shadow-xl transition hover:-translate-y-0.5 hover:bg-black"
              >
                <Icon name="phone" className="size-4.5 text-safety" strokeWidth={2} />
                {t.finalCta.call.replace('+91 99099 55243', PHONE1_DISPLAY)}
              </a>
              <a
                href={tel2}
                className="font-badge inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm text-ivory shadow-xl transition hover:-translate-y-0.5 hover:bg-black"
              >
                <Icon name="phone" className="size-4.5 text-safety" strokeWidth={2} />
                {t.finalCta.call2.replace('+91 99091 83312', PHONE2_DISPLAY)}
              </a>
              <a
                href={waLink(t.wa.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-badge inline-flex items-center gap-2.5 rounded-full border-2 border-ink/30 px-7 py-[14px] text-sm transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink/10"
              >
                <Icon name="whatsapp" className="size-5" />
                {t.finalCta.wa}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
