// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS CONFIG — edit everything about the business in this one file.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'Chamunda Earthmovers',
  nameGu: 'ચામુંડા અર્થમૂવર્સ',
  established: 2011,
}

export const PHONE1 = '+919909552435' // primary — used for WhatsApp + all CTAs
export const PHONE1_DISPLAY = '+91 99095 52435'
export const PHONE2 = '+919909183312'
export const PHONE2_DISPLAY = '+91 99091 83312'

export const tel1 = `tel:${PHONE1}`
export const tel2 = `tel:${PHONE2}`

export const waLink = (text) =>
  `https://wa.me/${PHONE1.replace('+', '')}?text=${encodeURIComponent(text)}`

export const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Supasi,+Veraval,+Gir+Somnath,+Gujarat&output=embed'
export const MAP_DIRECTIONS_SRC =
  'https://www.google.com/maps/dir/?api=1&destination=Supasi,+Veraval,+Gir+Somnath,+Gujarat'

// ─────────────────────────────────────────────────────────────────────────────
// IMAGES
// Every image slot first loads a client photo from  public/assets/photos/<slot>.jpg
// (e.g. /assets/photos/hero.jpg). If that file does not exist yet, the
// Unsplash placeholder below is shown instead — so to swap in a real photo
// you only add a file, no code change.
// ─────────────────────────────────────────────────────────────────────────────

const u = (id, w = 1000, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const PLACEHOLDER = {
  hero: u('1652303713917-2666b8bee507', 1920, 75),
  why: u('1649807479468-40011b31ee09', 1200, 74),
  'fleet-jcb': u('1583024011792-b165975b52f5', 900),
  'fleet-hitachi': u('1580901369227-308f6f40bdeb', 900),
  'fleet-loader': u('1629807473015-41699c4471b5', 900),
  'fleet-tractor': u('1675600360059-f5585f20e459', 900),
  'fleet-breaker': u('1606811883055-0d24f05c8bcd', 900),
  'fleet-bucket': u('1580901368855-059c4792ff22', 900),
  g1: u('1628645419184-26a1f2757340', 800),
  g2: u('1691052657402-90b45c0f6dca', 800),
  g3: u('1610477865545-37711c53144d', 800),
  g4: u('1646427154221-a4b57a921906', 800),
  g5: u('1664312616511-81fe2e745cb3', 800),
  g6: u('1612878100556-032bbf1b3bab', 800),
  g7: u('1649807533255-bbc9c9fb7d77', 800),
  g8: u('1675600360400-86f9ef8d9949', 800),
  footer: u('1637669886956-bf0e1cc4f0d3', 1600, 60),
  'service-road': u('1590674899484-d5640e854abe', 900, 65),
  'service-excavation': u('1630288214173-a119cf823388', 900, 65),
  'service-clearing': u('1637669886956-bf0e1cc4f0d3', 900, 65),
  'service-rock': u('1606811883055-0d24f05c8bcd', 900, 65),
  'service-transport': u('1646427154221-a4b57a921906', 900, 65),
  'service-demolition': u('1523848309072-c199db53f137', 900, 65),
  'service-pipeline': u('1612878100556-032bbf1b3bab', 900, 65),
  'service-rent': u('1629807473015-41699c4471b5', 900, 65),
  'services-bg': u('1523848309072-c199db53f137', 1600, 55),
  'fleet-bg': u('1523848309072-c199db53f137', 1600, 55),
}

// Service cards with a photo background: service id -> photo slot.
// The photo lives at /assets/photos/<slot>.jpg; drop a file there to enable one.
export const SERVICE_PHOTO_SLOTS = {
  road: 'service-road',
  excavation: 'service-excavation',
  clearing: 'service-clearing',
  rock: 'service-rock',
  transport: 'service-transport',
  demolition: 'service-demolition',
  pipeline: 'service-pipeline',
  rent: 'service-rent',
}

export const localPhoto = (slot) => `/assets/photos/${slot}.jpg`

// ── HERO VIDEO ────────────────────────────────────────────────────────────────
// The hero background video. It first tries the client's own file at
// public/assets/videos/hero.mp4 and falls back to the hosted Cloudinary video,
// exactly like the photo slots above.
export const HERO_VIDEO_REMOTE =
  'https://res.cloudinary.com/dbmcn289m/video/upload/v1791137804/IMG_7029_vqtksm.mp4'
export const localHeroVideo = '/assets/videos/hero.mp4'

// ── WHY-US VIDEO ─────────────────────────────────────────────────────────────
// Same pattern for the "Why Choose Us" media box: local file first, then the
// hosted Pinterest video.
export const WHY_VIDEO_REMOTE =
  'https://v1.pinimg.com/videos/iht/expMp4/73/7b/cc/737bcc3bcb86c8e75c78e6a95275ea12_720w.mp4'
export const localWhyVideo = '/assets/videos/why.mp4'

// Fleet order: id matches keys in translations (t.fleet.items) and photo slots
export const MACHINES = ['jcb', 'hitachi', 'loader', 'tractor', 'breaker', 'bucket']

// Services order: id matches keys in translations (t.services.items)
export const SERVICES = [
  'road', 'excavation', 'clearing', 'rock',
  'transport', 'demolition', 'pipeline', 'rent',
]
export const SERVICE_ICONS = {
  road: 'road', excavation: 'shovel', clearing: 'mountain', rock: 'hammer',
  transport: 'truck', demolition: 'demo', pipeline: 'waves', rent: 'clock',
}

export const GALLERY_SLOTS = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8']
