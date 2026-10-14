import { useLang } from '../i18n.jsx'
import {
  PHONE1_DISPLAY,
  PHONE2_DISPLAY,
  SERVICES,
  tel1,
  tel2,
  waLink,
} from '../config.js'
import { Icon, Logo, SmartImg } from './ui.jsx'

const SOCIALS = [
  { icon: 'facebook', href: '#', label: 'Facebook' },
  { icon: 'instagram', href: '#', label: 'Instagram' },
  { icon: 'youtube', href: '#', label: 'YouTube' },
  { icon: 'whatsapp', href: waLink('Hello Chamunda Earthmovers!'), label: 'WhatsApp' },
]

const QUICK_LINKS = [
  { href: '#/machines', key: 'machines' },
  { href: '#services', key: 'services' },
  { href: '#fleet', key: 'fleet' },
  { href: '#why-us', key: 'why' },
  { href: '#gallery', key: 'gallery' },
  { href: '#faq', key: 'faq' },
  { href: '#contact', key: 'contact' },
]

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line pt-14 pb-14 md:pb-8">
      {/* Background photo with a dark veil so the text stays readable */}
      <div className="absolute inset-0" aria-hidden="true">
        <SmartImg slot="footer" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="font-display mt-4 text-lg text-safety">{t.footer.tagline}</p>
            <p className="mt-3 text-sm text-mute">{t.footer.follow}</p>
            <div className="mt-3 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid size-10 place-items-center rounded-full text-ivory/70 transition hover:border-safety/50 hover:text-safety"
                >
                  <Icon name={s.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.linksTitle}>
            <h3 className="text-xs font-bold tracking-[0.25em] text-mute uppercase">
              {t.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-safety"
                  >
                    {t.nav[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] text-mute uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((id) => (
                <li key={id}>
                  <a
                    href="#services"
                    className="text-sm text-ivory/75 transition-colors hover:text-safety"
                  >
                    {t.services.items[id].title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] text-mute uppercase">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={tel1}
                  className="font-display flex items-center gap-2.5 text-lg tracking-wide transition-colors hover:text-safety"
                >
                  <Icon name="phone" className="size-4.5 text-safety" />
                  {PHONE1_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={tel2}
                  className="font-display flex items-center gap-2.5 text-lg tracking-wide transition-colors hover:text-safety"
                >
                  <Icon name="phone" className="size-4.5 text-safety" />
                  {PHONE2_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory/75">
                <Icon name="pin" className="mt-0.5 size-4.5 shrink-0 text-safety" />
                {t.footer.addr}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ivory/75">
                <Icon name="clock" className="size-4.5 shrink-0 text-safety" />
                {t.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas — SEO content block */}
        <article className="mt-12 rounded-2xl border border-line/40 bg-white/[0.03] px-6 py-7 backdrop-blur-sm">
          <h3 className="text-xs font-bold tracking-[0.25em] text-mute uppercase">
            {t.footer.serviceAreasTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ivory/60">
            {t.footer.serviceAreasText}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.footer.serviceAreasCities.map((city) => (
              <span
                key={city}
                className="inline-block rounded-full border border-safety/20 bg-safety/5 px-3.5 py-1.5 text-xs font-medium text-safety/80 transition hover:border-safety/40 hover:text-safety"
              >
                {city}
              </span>
            ))}
          </div>
        </article>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-mute sm:flex-row">
          <p>
            © {year} Chamunda Earthmovers · {t.footer.rights}
          </p>
          <p className="tracking-wider uppercase">{t.footer.est}</p>
        </div>
      </div>
    </footer>
  )
}
