import { useLang } from '../i18n.jsx'
import { waLink } from '../config.js'
import { Icon } from './ui.jsx'

export default function FloatingActions() {
  const { t } = useLang()
  return (
    <a
      href={waLink(t.wa.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.float.wa}
      className="wa-pulse fixed right-5 bottom-6 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 md:right-7 md:bottom-7"
    >
      <Icon name="whatsapp" className="size-7" />
    </a>
  )
}
