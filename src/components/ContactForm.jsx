import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import {
  PHONE1_DISPLAY,
  PHONE2_DISPLAY,
  SERVICES,
  tel1,
  tel2,
  waLink,
} from '../config.js'
import { Icon, Reveal, Section, SectionHeader } from './ui.jsx'

const initial = { name: '', phone: '', service: '', location: '', message: '' }

export default function ContactForm() {
  const { t } = useLang()
  const [form, setForm] = useState(initial)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const L = t.wa.formLabels
    const lines = [
      t.wa.formIntro,
      `${L.name}: ${form.name}`,
      `${L.phone}: ${form.phone}`,
      `${L.service}: ${form.service}`,
      `${L.location}: ${form.location}`,
      `${L.message}: ${form.message || '-'}`,
    ]
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const inputCls = 'field'

  return (
    <Section id="contact">
      <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        {/* Direct contact info */}
        <div className="space-y-4 lg:col-span-2">
          <Reveal>
            <h3 className="text-xs font-bold tracking-[0.25em] text-mute uppercase">
              {t.contact.infoTitle}
            </h3>
          </Reveal>
          <Reveal delay={70}>
            <a
              href={tel1}
              className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-safety text-ink">
                <Icon name="phone" className="size-6" strokeWidth={1.9} />
              </span>
              <span>
                <span className="font-display block text-xl font-semibold tracking-wide">
                  {PHONE1_DISPLAY}
                </span>
                <span className="block text-xs text-mute">WhatsApp · Call</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a href={tel2} className="glass card-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-safety/30 bg-safety/10 text-safety">
                <Icon name="phone" className="size-6" strokeWidth={1.9} />
              </span>
              <span>
                <span className="font-display block text-xl font-semibold tracking-wide">
                  {PHONE2_DISPLAY}
                </span>
                <span className="block text-xs text-mute">Call</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={170}>
            <div className="glass card-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-safety/30 bg-safety/10 text-safety">
                <Icon name="pin" className="size-6" />
              </span>
              <span>
                <span className="block text-sm font-bold tracking-wider uppercase">
                  {t.contact.addrTitle}
                </span>
                <span className="mt-0.5 block text-sm text-mute">{t.area.addr}</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="glass card-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-safety/30 bg-safety/10 text-safety">
                <Icon name="clock" className="size-6" />
              </span>
              <span className="text-sm text-mute">{t.contact.hours}</span>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={100} className="lg:col-span-3">
          <form
            onSubmit={submit}
            className="glass grid gap-4 rounded-3xl p-6 sm:grid-cols-2 sm:p-8"
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ivory/80">
                {t.contact.name} *
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder={t.contact.namePh}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ivory/80">
                {t.contact.phone} *
              </span>
              <input
                required
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder={t.contact.phonePh}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ivory/80">
                {t.contact.service} *
              </span>
              <div className="relative">
                <select required value={form.service} onChange={set('service')} className={inputCls}>
                  <option value="" disabled>
                    {t.contact.servicePh}
                  </option>
                  {SERVICES.map((id) => (
                    <option key={id} value={t.services.items[id].title}>
                      {t.services.items[id].title}
                    </option>
                  ))}
                </select>
                <Icon
                  name="chevronDown"
                  className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-mute"
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ivory/80">
                {t.contact.location} *
              </span>
              <input
                required
                type="text"
                value={form.location}
                onChange={set('location')}
                placeholder={t.contact.locationPh}
                className={inputCls}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-ivory/80">
                {t.contact.message}
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder={t.contact.messagePh}
                className={`${inputCls} resize-y`}
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-ink shadow-[0_14px_35px_-12px_rgba(37,211,102,0.5)] transition hover:-translate-y-0.5 hover:bg-[#2ee974]"
              >
                <Icon name="whatsapp" className="size-5.5" />
                {t.contact.send}
              </button>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-mute">
                <Icon name="check" className="size-3.5 text-[#25D366]" strokeWidth={2.5} />
                {t.contact.viaWa}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
