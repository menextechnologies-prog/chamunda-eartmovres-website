import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useScrolled } from '../hooks.js'
import { tel1 } from '../config.js'
import { Icon, Logo } from './ui.jsx'

const LINKS = (t) => [
  { href: '#/machines', label: t.nav.machines, page: true },
  { href: '#services', label: t.nav.services },
  { href: '#fleet', label: t.nav.fleet },
  { href: '#why-us', label: t.nav.why },
  { href: '#gallery', label: t.nav.gallery },
  { href: '#faq', label: t.nav.faq },
  { href: '#contact', label: t.nav.contact },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink/85 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-2 px-3.5 sm:gap-4 sm:px-5 md:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS(t).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  l.page && window.location.hash.startsWith('#/machines')
                    ? 'text-safety'
                    : 'text-ivory/80 hover:text-safety'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* EN / GU toggle */}
          <div
            className="flex items-center rounded-full border border-line bg-white/5 p-1 text-xs font-semibold"
            role="group"
            aria-label="Language / ભાષા"
          >
            {['en', 'gu'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-2.5 py-1.5 transition-colors sm:px-3 ${
                  lang === code ? 'bg-safety text-ink' : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                {code === 'en' ? 'EN' : 'ગુ'}
              </button>
            ))}
          </div>

          <a
            href={tel1}
            className="hidden items-center gap-2 rounded-full bg-safety px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-[#ffd34d] md:inline-flex"
          >
            <Icon name="phone" className="size-4" />
            {t.nav.callNow}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-line text-ivory lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            {LINKS(t).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-ivory/85 transition-colors hover:bg-white/5 hover:text-safety"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={tel1}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-safety px-4 py-3 font-bold text-ink"
              >
                <Icon name="phone" className="size-4" />
                {t.nav.callNow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
