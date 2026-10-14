import { createContext, useContext, useEffect, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATIONS — every visible word on the site lives in this one object.
// Edit copy here; components only read from it.
// ─────────────────────────────────────────────────────────────────────────────

export const translations = {
  en: {
    meta: { code: 'en', name: 'English', other: 'ગુજરાતી' },
    nav: {
      home: 'Home', machines: 'Machines', services: 'Services', fleet: 'Fleet', why: 'Why Us',
      gallery: 'Projects', faq: 'FAQ', contact: 'Contact',
      callNow: 'Call Now', openMenu: 'Open menu', closeMenu: 'Close menu',
    },
    hero: {
      badge: 'Since 2011 · Veraval, Gujarat',
      alt: 'Heavy earthmoving machines at work on a construction site in Gujarat',
      title1: 'Moving Earth.',
      title2: 'Building Gujarat.',
      sub: 'JCB, Hitachi excavators, breakers and more — with experienced operators, for government and private work across Gujarat.',
      quote: 'Get Free Quote',
      whatsapp: 'WhatsApp Now',
      badges: [
        { icon: 'shield', t: 'Since 2011', d: '15+ years on site' },
        { icon: 'filecheck', t: 'Govt. & Private Contracts', d: 'Tenders and private jobs' },
        { icon: 'pin', t: 'All Gujarat Service', d: 'Machine moves anywhere' },
        { icon: 'users', t: 'Experienced Operators', d: 'Trained. Verified. Safe.' },
      ],
    },
    stats: {
      items: [
        { v: 15, suf: '+', label: 'Years of Experience' },
        { v: 1000, suf: '+', label: 'Projects Completed' },
        { v: 6, suf: '+', label: 'Machine Types' },
        { all: 'Gujarat', label: 'Service Area' },
      ],
    },
    services: {
      eyebrow: 'What We Do',
      title: 'One call. Every machine.',
      sub: 'From farm plots to government highways — we bring the right machine with the right operator.',
      items: {
        road: { title: 'Road Construction & Levelling', desc: 'Roads cut, filled and levelled to line and level — highways, village roads and private layouts.' },
        excavation: { title: 'Excavation & Foundation Digging', desc: 'Deep, accurate digging for homes, sheds, factories and structures.' },
        clearing: { title: 'Site Clearing & Land Development', desc: 'Brush, debris and uneven ground cleared — land made build-ready.' },
        rock: { title: 'Rock Breaking', desc: 'Hydraulic breakers cut through hard rock and concrete — no blasting needed.' },
        transport: { title: 'Loading & Material Transport', desc: 'Soil, sand, rubble and material loaded and shifted fast.' },
        demolition: { title: 'Demolition Work', desc: 'Safe, controlled demolition of old structures — cleared to handover.' },
        pipeline: { title: 'Canal, Drainage & Pipeline Digging', desc: 'Clean, straight trenches for canals, drains and pipelines.' },
        rent: { title: 'Machinery on Rent', desc: 'Hourly and daily rentals with operator. Fair rates, no surprises.' },
      },
      gov: {
        title: 'Government Contracts',
        desc: 'Road, canal and development work executed to specification with complete documentation — trusted on government tenders for years.',
        cta: 'Discuss your tender',
      },
      priv: {
        title: 'Private Work',
        desc: 'Farms, plots, factories, farmhouses and homes — personal attention, clean finishing, work done on time.',
        cta: 'Plan your project',
      },
    },
    fleet: {
      eyebrow: 'Our Fleet',
      title: 'Machines that show up ready.',
      sub: 'Well-maintained, site-tested machines with experienced operators. Book by the hour or by the day.',
      book: 'Book Now',
      note: 'Every machine comes with a trained operator.',
      viewAll: 'View all machines',
      items: {
        jcb: { name: 'JCB', use: 'The all-rounder — digging, loading, levelling, back-filling.' },
        hitachi: { name: 'Hitachi Excavator', use: 'Deep, precise excavation for foundations, ponds and canals.' },
        loader: { name: 'Loader', use: 'Bulk loading of soil, sand and rubble in minutes.' },
        tractor: { name: 'Tractor', use: 'Towing, levelling and light transport for farms and sites.' },
        breaker: { name: 'Hydraulic Breaker', use: 'Hard rock and concrete broken safely, without blasting.' },
        bucket: { name: 'Bucket Attachments', use: 'The right bucket for every job — rock, mud, gravel or sand.' },
      },
    },
    machinesPage: {
      eyebrow: 'Our Machines',
      title: 'Pick the right machine.',
      sub: 'Six workhorses, one call away — every machine comes with a trained operator.',
      call: 'Call Now',
      wa: 'WhatsApp Now',
      notSure: 'Not sure which machine fits your job?',
      notSureSub: 'Tell us the work — we suggest the right machine and a clear rate.',
      backHome: 'Back to Home',
      bullets: {
        jcb: ['Digging & excavation', 'Loading & back-filling', 'Levelling & site preparation'],
        hitachi: ['Deep foundations', 'Pond & canal digging', 'Precise trench work'],
        loader: ['Bulk soil & sand loading', 'Rubble clearing', 'Fast material shifting'],
        tractor: ['Towing & hauling', 'Farm levelling', 'Light transport'],
        breaker: ['Rock & concrete breaking', 'No blasting needed', 'Road cutting'],
        bucket: ['Right bucket for every job', 'Rock, mud, gravel, sand', 'Quick swap on site'],
      },
    },
    why: {
      eyebrow: 'Why Chamunda',
      title: 'The name site engineers trust.',
      sub: 'Fifteen years of showing up on time with machines that work.',
      expTag: 'EST. 2011 — VERAVAL',
      imgAlt: 'Chamunda Earthmovers excavator working on a hillside site in Gujarat',
      imgBadge: { n: '15+', t: 'Years on the ground' },
      items: [
        { icon: 'shield', t: '15+ Years of Trust', d: 'Same family, same promise — since 2011.' },
        { icon: 'wrench', t: 'Modern, Serviced Machines', d: 'Well-kept machines that do not break down mid-job.' },
        { icon: 'users', t: 'Skilled Operators', d: 'Trained operators who treat your site like their own.' },
        { icon: 'filecheck', t: 'Government Contract Experience', d: 'Years on road and canal projects — paperwork included.' },
        { icon: 'tag', t: 'Transparent Rates', d: 'Clear rates before work starts. No hidden charges, ever.' },
        { icon: 'zap', t: 'Quick Response, All Gujarat', d: 'One call and the machine moves — anywhere in the state.' },
      ],
    },
    how: {
      eyebrow: 'How It Works',
      title: 'Simple. Fast. Done.',
      sub: 'Four steps between your call and a working machine.',
      steps: [
        { icon: 'phone', t: 'Call or WhatsApp', d: 'Tell us the job, place and timing.' },
        { icon: 'clipboard', t: 'Site Visit', d: 'We inspect and plan the right machine.' },
        { icon: 'filecheck', t: 'Free Quote', d: 'Clear rate, in writing, before we start.' },
        { icon: 'zap', t: 'Work Starts', d: 'Machine arrives on time. Job gets done.' },
      ],
    },
    gallery: {
      eyebrow: 'On-Site Work',
      title: 'Real machines. Real work.',
      sub: 'A glimpse from roads, farms and sites across Gujarat.',
      captions: [
        'Excavation near Veraval', 'Heavy equipment on rocky ground',
        'Road work in progress', 'Material transport fleet',
        'Site preparation work', 'Excavator at work, Gujarat',
        'Foundation digging', 'Land clearing project',
      ],
      expand: 'View',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What clients say.',
      sub: 'Contractors, farmers and families who called once — and keep calling back.',
      note: 'Placeholder reviews — replace with your real clients’ words.',
      items: [
        { stars: 5, text: 'Work finished ahead of schedule and the levelling was perfect. Fair rate, no arguments.', name: 'Ramesh Bhai', role: 'Farm Owner, Veraval' },
        { stars: 5, text: 'They have handled our road contracts for years. Documented work, always on time.', name: 'J. Contractor', role: 'Road Contractor, Junagadh' },
        { stars: 5, text: 'Booked the breaker for rock on my plot. Came next morning, clean work.', name: 'Kiran Solanki', role: 'Plot Owner, Somnath' },
      ],
    },
    area: {
      eyebrow: 'Service Area',
      title: 'Serving all of Gujarat.',
      sub: 'Head office in Supasi, Veraval (Gir Somnath) — machines move anywhere in the state, with the same quick response and honest rates.',
      office: 'Head Office',
      addr: 'Supasi, Veraval, Gir Somnath, Gujarat',
      hoursTitle: 'Working Hours',
      hours: 'Mon – Sun · 7 AM – 8 PM',
      call: 'Call Now',
      wa: 'WhatsApp',
      directions: 'Get Directions',
      mapTitle: 'Chamunda Earthmovers location map — Supasi, Veraval',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions.',
      sub: 'Straight answers, the same way we talk on site.',
      items: [
        { q: 'What are your rates?', a: 'Rates depend on the machine, working hours and distance. Call or WhatsApp with your job details and you will get a clear, same-day quote.' },
        { q: 'Hourly or daily — which is better?', a: 'Hourly suits short jobs. For full-day work (8–10 hours), the daily rate works out cheaper per hour. We suggest whatever saves you money.' },
        { q: 'Do I need to book in advance?', a: 'Advance booking is best in busy season (2–3 days ahead). Near Veraval, same-day service is often possible — call and we will confirm.' },
        { q: 'Is an operator included with the machine?', a: 'Yes. Every machine comes with a trained, experienced operator. Fuel terms are confirmed clearly at the time of booking.' },
        { q: 'Do you take government tender work?', a: 'Yes. We have years of experience on government road, canal and development contracts, with complete documentation and measurement books.' },
        { q: 'Which areas do you cover?', a: 'Our head office is in Supasi, Veraval (Gir Somnath). We serve the whole of Gujarat — from Somnath to Ahmedabad and beyond.' },
      ],
    },
    finalCta: {
      title: 'Need a machine today?',
      sub: 'Call now — we answer fast, and the machine moves fast.',
      call: 'Call +91 99099 55243',
      call2: 'Call +91 99091 83312',
      wa: 'WhatsApp Us',
    },
    contact: {
      eyebrow: 'Get a Quote',
      title: 'Tell us about your work.',
      sub: 'Fill the form — it opens WhatsApp with your details ready to send.',
      infoTitle: 'Reach us directly',
      addrTitle: 'Head Office',
      hours: 'Mon – Sun · 7 AM – 8 PM',
      name: 'Your Name', namePh: 'e.g. Ramesh Patel',
      phone: 'Phone Number', phonePh: 'e.g. 98765 43210',
      service: 'Service Needed', servicePh: 'Select a service',
      location: 'Site Location', locationPh: 'Village / town / plot no.',
      message: 'Message', messagePh: 'Machine, duration, any details…',
      send: 'Send on WhatsApp',
      viaWa: 'No email needed — your message opens in WhatsApp.',
    },
    footer: {
      tagline: 'Moving Earth. Building Gujarat.',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
      servicesTitle: 'Services',
      addr: 'Supasi, Veraval, Gir Somnath, Gujarat, India',
      follow: 'Follow Us',
      rights: 'All rights reserved.',
      est: 'Since 2011 · Veraval, Gujarat',
      serviceAreasTitle: 'Service Areas',
      serviceAreasText: 'We provide reliable JCB rent in Veraval, JCB rent in Junagadh, JCB rent in Keshod, and JCB rent in Supasi for all your excavation, road construction, and earthmoving needs. Our fleet of JCB machines, Hitachi excavators, loaders, and hydraulic breakers is available on rent with trained operators — serving Gir Somnath district and all of Gujarat since 2011.',
      serviceAreasCities: ['Veraval', 'Junagadh', 'Keshod', 'Supasi', 'Somnath', 'Una', 'Kodinar', 'Mangrol', 'Talala', 'Gir Somnath'],
    },
    float: { wa: 'Chat on WhatsApp', call: 'Call Now' },
    wa: {
      general: 'Hello Chamunda Earthmovers! I need a machine. Please share rates and availability.',
      machine: 'Hello Chamunda Earthmovers! I want to book the {machine}. Please share availability and rates.',
      formIntro: 'Hello Chamunda Earthmovers!',
      formLabels: { name: 'Name', phone: 'Phone', service: 'Service', location: 'Location', message: 'Message' },
    },
  },

  gu: {
    meta: { code: 'gu', name: 'ગુજરાતી', other: 'English' },
    nav: {
      home: 'હોમ', machines: 'મશીન્સ', services: 'સેવાઓ', fleet: 'મશીનરી', why: 'અમારી તાકાત',
      gallery: 'પ્રોજેક્ટ્સ', faq: 'પ્રશ્નો', contact: 'સંપર્ક',
      callNow: 'હમણાં કૉલ કરો', openMenu: 'મેનૂ ખોલો', closeMenu: 'મેનૂ બંધ કરો',
    },
    hero: {
      badge: '૨૦૧૧થી · વેરાવળ, ગુજરાત',
      alt: 'ગુજરાતમાં કામ પર ભારે અર્થમૂવિંગ મશીનો',
      title1: 'ધરતી ખસેડીએ,',
      title2: 'ગુજરાત બનાવીએ.',
      sub: 'JCB, હિટાચી એક્સકેવેટર, બ્રેકર અને વધુ — અનુભવી ઓપરેટર સાથે, ગુજરાતભરમાં સરકારી અને ખાનગી કામો માટે.',
      quote: 'મફત ક્વોટ મેળવો',
      whatsapp: 'હમણાં વોટ્સએપ કરો',
      badges: [
        { icon: 'shield', t: '૨૦૧૧થી', d: '૧૫+ વર્ષનો અનુભવ' },
        { icon: 'filecheck', t: 'સરકારી અને ખાનગી કામ', d: 'ટેન્ડર અને ખાનગી પ્રોજેક્ટ' },
        { icon: 'pin', t: 'આખા ગુજરાતમાં સેવા', d: 'મશીન ગમે ત્યાં પહોંચે' },
        { icon: 'users', t: 'અનુભવી ઓપરેટર', d: 'તાલીમ પામેલા. સલામત.' },
      ],
    },
    stats: {
      items: [
        { v: 15, suf: '+', label: 'વર્ષનો અનુભવ' },
        { v: 1000, suf: '+', label: 'પ્રોજેક્ટ પૂરાં થયા' },
        { v: 6, suf: '+', label: 'મશીન પ્રકાર' },
        { all: 'આખું ગુજરાત', label: 'સેવા ક્ષેત્ર' },
      ],
    },
    services: {
      eyebrow: 'અમે શું કરીએ?',
      title: 'એક કૉલ. દરેક મશીન.',
      sub: 'ખેતરના પ્લોટથી લઈને સરકારી હાઈવે સુધી — યોગ્ય મશીન, યોગ્ય ઓપરેટર સાથે.',
      items: {
        road: { title: 'રોડ બનાવવાનું અને લેવલિંગ', desc: 'હાઈવે, ગામના રસ્તા અને ખાનગી પ્લોટ — લાઈન-લેવલથી કામ.' },
        excavation: { title: 'ખોદકામ અને પાયા ખોદવાનું', desc: 'ઘર, શેડ, ફેક્ટરી માટે ઊંડું, ચોક્કસ ખોદકામ.' },
        clearing: { title: 'સાઇટ સાફસૂફ અને જમીન વિકાસ', desc: 'ઝાંખરા, કચરો અને ઊંચાનીચ સાફ — બિલ્ડ તૈયાર જમીન.' },
        rock: { title: 'ખડક તોડકામ', desc: 'હાઇડ્રોલિક બ્રેકરથી કઠણ ખડક અને કોંક્રિટ — બ્લાસ્ટિંગ વગર.' },
        transport: { title: 'લોડિંગ અને માલ પરિવહન', desc: 'માટી, રેતી, કચરો અને માલ ઝટથી લોડ અને ખસેડે.' },
        demolition: { title: 'ડિમોલિશન કામ', desc: 'જૂના માળખાંનું સલામત, નિયંત્રિત તોડકામ.' },
        pipeline: { title: 'નહેર, ગટર અને પાઇપલાઇન ખોદકામ', desc: 'નહેર, ગટર અને પાઇપલાઇન માટે સીધા, સાફ ખાતરા.' },
        rent: { title: 'મશીનરી ભાડે', desc: 'કલાક-આધારિત અને દૈનિક ભાડું, ઓપરેટર સાથે. પારદર્શક દર.' },
      },
      gov: {
        title: 'સરકારી કરાર',
        desc: 'રોડ, નહેર અને વિકાસનાં કામો — પૂરા દસ્તાવેજ સાથે, સ્પષ્ટીકરણ મુજબ અમલ. વર્ષોથી સરકારી ટેન્ડરમાં વિશ્વાસપાત્ર.',
        cta: 'ટેન્ડર વિશે વાત કરો',
      },
      priv: {
        title: 'ખાનગી કામ',
        desc: 'ખેતર, પ્લોટ, ફેક્ટરી, ફાર્મહાઉસ અને ઘર — અંગત ધ્યાન, સાફ-સુથરું કામ, સમયસર પૂરું.',
        cta: 'તમારું કામ પ્લાન કરો',
      },
    },
    fleet: {
      eyebrow: 'અમારી મશીનરી',
      title: 'મશીનો તૈયાર હાલતમાં આવે.',
      sub: 'સારી રીતે જાળવેલી, સાઇટ-ચકાસાયેલી મશીનો — અનુભવી ઓપરેટર સાથે. કલાકાળું કે દૈનિક બુક કરો.',
      book: 'હમણાં બુક કરો',
      note: 'દરેક મશીન સાથે તાલીમ પામેલો ઓપરેટર.',
      viewAll: 'બધી મશીનો જુઓ',
      items: {
        jcb: { name: 'JCB', use: 'ઓલરાઉન્ડર — ખોદકામ, લોડિંગ, લેવલિંગ, પાછળ-ભરાવ.' },
        hitachi: { name: 'હિટાચી એક્સકેવેટર', use: 'પાયા, તળાવ અને નહેર માટે ઊંડું, ચોક્કસ ખોદકામ.' },
        loader: { name: 'લોડર', use: 'માટી, રેતી અને કચરાનું મિનિટોમાં બલ્ક લોડિંગ.' },
        tractor: { name: 'ટ્રેક્ટર', use: 'ખેતરો અને સાઇટ માટે ટોઇંગ, લેવલિંગ અને નાનું પરિવહન.' },
        breaker: { name: 'હાઇડ્રોલિક બ્રેકર', use: 'કઠણ ખડક અને કોંક્રિટ સલામત રીતે, બ્લાસ્ટિંગ વગર.' },
        bucket: { name: 'બકેટ અટેચમેન્ટ', use: 'દરેક કામ માટે યોગ્ય બકેટ — ખડક, કાદવ, કંકરી કે રેતી.' },
      },
    },
    machinesPage: {
      eyebrow: 'અમારી મશીનો',
      title: 'યોગ્ય મશીન પસંદ કરો.',
      sub: 'છ કામની મશીનો — એક કૉલના અંતરે, દરેક સાથે તાલીમ પામેલો ઓપરેટર.',
      call: 'હમણાં કૉલ કરો',
      wa: 'હમણાં વોટ્સએપ કરો',
      notSure: 'ખબર નથી કઈ મશીન તમારા કામની છે?',
      notSureSub: 'કામ જણાવો — યોગ્ય મશીન અને સ્પષ્ટ દર અમે સૂચવીશું.',
      backHome: 'હોમ પર જાઓ',
      bullets: {
        jcb: ['ખોદકામ અને ખાડો ખોદવાનો', 'લોડિંગ અને પાછળ-ભરાવ', 'લેવલિંગ અને સાઇટ તૈયારી'],
        hitachi: ['ઊંડા પાયા', 'તળાવ અને નહેર ખોદકામ', 'ચોક્કસ ખાતરાનું કામ'],
        loader: ['માટી-રેતીનું બલ્ક લોડિંગ', 'કચરો સાફ કરવો', 'ઝડપી માલ ખસેડવો'],
        tractor: ['ટોઇંગ અને ખેંચાણ', 'ખેતર લેવલિંગ', 'નાનું પરિવહન'],
        breaker: ['ખડક અને કોંક્રિટ તોડકામ', 'બ્લાસ્ટિંગ વગર', 'રોડ કટીંગ'],
        bucket: ['દરેક કામ માટે યોગ્ય બકેટ', 'ખડક, કાદવ, કંકરી, રેતી', 'સાઇટ પર ઝડપી બદલાવ'],
      },
    },
    why: {
      eyebrow: 'ચામુંડા કેમ?',
      title: 'સાઇટ એન્જિનિયરોનું ભરોસાપાત્ર નામ.',
      sub: 'પંદર વર્ષથી સમયસર હાજર — કામ કરતાં મશીન સાથે.',
      expTag: '૨૦૧૧થી — વેરાવળ',
      imgAlt: 'ચામુંડા અર્થમૂવર્સનું એક્સકેવેટર ગુજરાતમાં કામ પર',
      imgBadge: { n: '૧૫+', t: 'વર્ષ મેદાનમાં' },
      items: [
        { icon: 'shield', t: '૧૫+ વર્ષનો વિશ્વાસ', d: '૨૦૧૧થી એક જ વાત — પાકું કામ.' },
        { icon: 'wrench', t: 'આધુનિક, જાળવેલી મશીનો', d: 'સારી રીતે સર્વિસ કરેલી મશીનો — કામ વચ્ચે અટકતી નહીં.' },
        { icon: 'users', t: 'નિપુણ ઓપરેટર', d: 'તાલીમ પામેલા ઓપરેટર — તમારી સાઇટને પોતાની સમજે.' },
        { icon: 'filecheck', t: 'સરકારી કામનો અનુભવ', d: 'રોડ અને નહેરનાં કામોમાં વર્ષો — દસ્તાવેજ સહિત.' },
        { icon: 'tag', t: 'પારદર્શક ભાડું', d: 'કામ શરૂ થાય તે પહેલાં સ્પષ્ટ દર. છૂપો ખર્ચ નહીં.' },
        { icon: 'zap', t: 'ઝડપી પ્રતિસાદ, આખું ગુજરાત', d: 'એક કૉલ — મશીન રવાના, ગમે ત્યાં.' },
      ],
    },
    how: {
      eyebrow: 'કામ કેવી રીતે થાય?',
      title: 'સરળ. ઝડપી. થઈ જાય.',
      sub: 'તમારા કૉલથી લઈને મશીન કામ પર લાગે ત્યાં સુધી — ચાર પગલાં.',
      steps: [
        { icon: 'phone', t: 'કૉલ કે વોટ્સએપ', d: 'કામ, જગ્યા અને સમય જણાવો.' },
        { icon: 'clipboard', t: 'સાઇટ મુલાકાત', d: 'સાઇટ જોઈને યોગ્ય મશીન નક્કી કરીએ.' },
        { icon: 'filecheck', t: 'મફત ક્વોટ', d: 'કામ પહેલાં સ્પષ્ટ દર, લેખિતમાં.' },
        { icon: 'zap', t: 'કામ શરૂ', d: 'મશીન સમયસર પહોંચે. કામ પૂરું થાય.' },
      ],
    },
    gallery: {
      eyebrow: 'સાઇટ પરનું કામ',
      title: 'સાચી મશીન. સાચું કામ.',
      sub: 'ગુજરાતભરના રસ્તા, ખેતરો અને સાઇટોમાંથી એક ઝલક.',
      captions: [
        'વેરાવળ પાસે ખોદકામ', 'ખડકાળ જમીન પર ભારે સાધન',
        'રોડ કામગીરી ચાલુ', 'માલ પરિવહન ફ્લીટ',
        'સાઇટ તૈયારીનું કામ', 'ગુજરાતમાં એક્સકેવેટર કામ પર',
        'પાયાનું ખોદકામ', 'જમીન સાફ કરવાનો પ્રોજેક્ટ',
      ],
      expand: 'જુઓ',
    },
    testimonials: {
      eyebrow: 'પ્રતિસાદ',
      title: 'ગ્રાહકો શું કહે છે.',
      sub: 'ઠેકેદારો, ખેડૂતો અને પરિવારો — જેમણે એક વાર કૉલ કર્યો, હજુ પણ કરે છે.',
      note: 'નમૂના પ્રતિસાદ — સાચા ગ્રાહકોના શબ્દોથી બદલો.',
      items: [
        { stars: 5, text: 'કામ સમય પહેલાં પૂરું થયું અને લેવલિંગ એકદમ બરાબર. યોગ્ય ભાડું, કોઈ વાંધા નહીં.', name: 'રમેશભાઈ', role: 'ખેડૂત, વેરાવળ' },
        { stars: 5, text: 'વર્ષોથી અમારા રોડ કરાર સંભાળે છે. દસ્તાવેજ સહિત, હંમેશા સમયસર કામ.', name: 'ઠેકેદાર', role: 'રોડ ઠેકેદાર, જૂનાગઢ' },
        { stars: 5, text: 'મારા પ્લોટમાં ખડક માટે બ્રેકર બુક કર્યું. બીજે સવારે આવી ગયા, સાફ-સુથરું કામ.', name: 'કિરણ સોલંકી', role: 'પ્લોટ માલિક, સોમનાથ' },
      ],
    },
    area: {
      eyebrow: 'સેવા ક્ષેત્ર',
      title: 'આખા ગુજરાતમાં સેવા.',
      sub: 'મુખ્ય કચેરી સુપાસી, વેરાવળ (ગીર સોમનાથ) — આખા ગુજરાતમાં મશીન પહોંચે, એટલી જ ઝડપ અને એટલો જ સાચો દર.',
      office: 'મુખ્ય કચેરી',
      addr: 'સુપાસી, વેરાવળ, ગીર સોમનાથ, ગુજરાત',
      hoursTitle: 'કામના કલાક',
      hours: 'સોમ – રવિ · સવારે ૭ – રાત્રે ૮',
      call: 'હમણાં કૉલ કરો',
      wa: 'વોટ્સએપ',
      directions: 'રસ્તો જુઓ',
      mapTitle: 'ચામુંડા અર્થમૂવર્સ સ્થળ નકશો — સુપાસી, વેરાવળ',
    },
    faq: {
      eyebrow: 'પ્રશ્નો',
      title: 'સામાન્ય પ્રશ્નો.',
      sub: 'સાઇટ પર જેમ વાત થાય તેમ — સીધા જવાબ.',
      items: [
        { q: 'તમારા ભાડાના દર કેટલા છે?', a: 'દર મશીન, કલાક અને અંતર પ્રમાણે નક્કી થાય છે. કૉલ કે વોટ્સએપ કરો — કામની વિગત આપો, એ જ દિવસે સ્પષ્ટ ક્વોટ મળશે.' },
        { q: 'કલાકાળું કે દૈનિક — શું સારું?', a: 'નાના કામ માટે કલાકાળું સારું. આખો દિવસ (૮–૧૦ કલાક) માટે દૈનિક દર કલાક પ્રમાણે સસ્તો પડે. જે તમારા પૈસા બચાવે તે અમે જ સૂચવીશું.' },
        { q: 'પહેલાં બુકિંગ કરવું જરૂરી છે?', a: 'બિઝી સીઝનમાં ૨–૩ દિવસ પહેલાં બુકિંગ સારું. વેરાવળ પાસે એ જ દિવસે મશીન મળી શકે — કૉલ કરો, અમે પાકું કરીએ.' },
        { q: 'મશીન સાથે ઓપરેટર મળે?', a: 'હા. દરેક મશીન સાથે તાલીમ પામેલો, અનુભવી ઓપરેટર આવે છે. ફ્યુઅલની શરત બુકિંગ સમયે સ્પષ્ટ કરીએ છીએ.' },
        { q: 'સરકારી ટેન્ડર કામ લો છો?', a: 'હા. સરકારી રોડ, નહેર અને વિકાસનાં કામોમાં વર્ષોનો અનુભવ છે — પૂરા દસ્તાવેજ અને માપણી બુક સાથે.' },
        { q: 'કયા વિસ્તારમાં સેવા આપો છો?', a: 'મુખ્ય કચેરી સુપાસી, વેરાવળ (ગીર સોમનાથ). આખું ગુજરાત — સોમનાથથી અમદાવાદ સુધી અને આગળ.' },
      ],
    },
    finalCta: {
      title: 'આજે મશીન જોઈએ છે?',
      sub: 'હમણાં કૉલ કરો — જવાબ ઝટથી, મશીન ઝટથી.',
      call: 'કૉલ કરો +91 99099 55243',
      call2: 'કૉલ કરો +91 99091 83312',
      wa: 'વોટ્સએપ કરો',
    },
    contact: {
      eyebrow: 'ક્વોટ મેળવો',
      title: 'તમારું કામ જણાવો.',
      sub: 'ફોર્મ ભરો — તમારી વિગતો સાથે વોટ્સએપ ખૂલશે.',
      infoTitle: 'સીધો સંપર્ક કરો',
      addrTitle: 'મુખ્ય કચેરી',
      hours: 'સોમ – રવિ · સવારે ૭ – રાત્રે ૮',
      name: 'તમારું નામ', namePh: 'દા.ત. રમેશ પટેલ',
      phone: 'મોબાઈલ નંબર', phonePh: 'દા.ત. 98765 43210',
      service: 'જરૂરી સેવા', servicePh: 'સેવા પસંદ કરો',
      location: 'સાઇટનું સ્થળ', locationPh: 'ગામ / શહેર / પ્લોટ નં.',
      message: 'મેસેજ', messagePh: 'મશીન, સમય, અન્ય વિગત…',
      send: 'વોટ્સએપ પર મોકલો',
      viaWa: 'ઈમેલની જરૂર નથી — મેસેજ વોટ્સએપમાં ખૂલશે.',
    },
    footer: {
      tagline: 'ધરતી ખસેડીએ, ગુજરાત બનાવીએ.',
      linksTitle: 'ઝડપી લિંક',
      contactTitle: 'સંપર્ક',
      servicesTitle: 'સેવાઓ',
      addr: 'સુપાસી, વેરાવળ, ગીર સોમનાથ, ગુજરાત, ભારત',
      follow: 'અમને ફોલો કરો',
      rights: 'સર્વ હક અમારી પાસે.',
      est: '૨૦૧૧થી · વેરાવળ, ગુજરાત',
      serviceAreasTitle: 'સેવા વિસ્તાર',
      serviceAreasText: 'અમે વેરાવળ, જૂનાગઢ, કેશોદ અને સુપાસીમાં JCB ભાડે આપીએ છીએ. ખોદકામ, રોડ બાંધકામ અને અર્થમૂવિંગ માટે JCB, હિટાચી એક્સકેવેટર, લોડર અને હાઇડ્રોલિક બ્રેકર તાલીમ પામેલા ઓપરેટર સાથે ભાડે મળે છે — ૨૦૧૧થી ગીર સોમનાથ જિલ્લા અને આખા ગુજરાતમાં સેવા.',
      serviceAreasCities: ['વેરાવળ', 'જૂનાગઢ', 'કેશોદ', 'સુપાસી', 'સોમનાથ', 'ઉના', 'કોડીનાર', 'માંગરોળ', 'તાલાળા', 'ગીર સોમનાથ'],
    },
    float: { wa: 'વોટ્સએપ પર વાત કરો', call: 'કૉલ કરો' },
    wa: {
      general: 'નમસ્તે ચામુંડા અર્થમૂવર્સ! મને મશીન જોઈએ છે. દર અને ખાલી સમય જણાવશો.',
      machine: 'નમસ્તે ચામુંડા અર્થમૂવર્સ! મને {machine} બુક કરવું છે. ખાલી સમય અને દર જણાવશો.',
      formIntro: 'નમસ્તે ચામુંડા અર્થમૂવર્સ!',
      formLabels: { name: 'નામ', phone: 'મોબાઈલ', service: 'સેવા', location: 'સ્થળ', message: 'મેસેજ' },
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Language context — choice lives in React memory state (not localStorage).
// ─────────────────────────────────────────────────────────────────────────────

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.classList.toggle('lang-gu', lang === 'gu')
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggle: () => setLang(l => (l === 'en' ? 'gu' : 'en')) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
