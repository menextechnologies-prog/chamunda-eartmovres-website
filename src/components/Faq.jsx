import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { Icon, Reveal, Section, SectionHeader } from './ui.jsx'

function FaqItem({ item, open, onToggle, index }) {
  return (
    <div className={`glass overflow-hidden rounded-2xl transition-colors ${open ? 'border-safety/40' : ''}`}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="flex items-center gap-4">
          <span className="font-display hidden text-lg font-semibold text-safety/50 sm:block">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-badge md:text-lg">{item.q}</span>
        </span>
        <Icon
          name="chevronDown"
          className={`size-5 shrink-0 text-safety transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.2}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-mute sm:pl-[68px] md:px-6 md:pb-6 md:pl-[74px] md:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" className="bg-ink2/40">
      <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} sub={t.faq.sub} />
      <div className="mx-auto mt-12 max-w-3xl space-y-3.5">
        {t.faq.items.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <FaqItem
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
