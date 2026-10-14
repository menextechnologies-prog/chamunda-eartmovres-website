# Chamunda Earthmovers — Website

Premium single-page landing site for **Chamunda Earthmovers** (Veraval, Gujarat).
React + Vite + Tailwind CSS v4. Bilingual: English / ગુજરાતી.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173  (LAN access enabled)
```

Production build: `npm run build` → outputs to `dist/`, preview with `npm run preview`.

## Add the client's real assets (no code changes needed)

1. **Logo** → drop the logo file at `public/assets/logo.png`.
   It is used automatically in the navbar, footer and as favicon. Until then a
   "CE" monogram / placeholder favicon is shown.
2. **Hero video** → the hero background plays the Cloudinary video by default.
   To self-host it instead, save it as `public/assets/videos/hero.mp4` and it
   replaces the remote one automatically (the hero image below still acts as
   poster/fallback if no video can load).
   The **Why Us media box** video works the same way: save it as
   `public/assets/videos/why.mp4` to replace the hosted Pinterest video.
3. **Photos** → drop JPGs into `public/assets/photos/` using these names:

   | File | Used in |
   |---|---|
   | `hero.jpg` | Full-screen hero background (poster/fallback behind the video) |
   | `why.jpg` | "Why Choose Us" section image |
   | `fleet-jcb.jpg`, `fleet-hitachi.jpg`, `fleet-loader.jpg`, `fleet-tractor.jpg`, `fleet-breaker.jpg`, `fleet-bucket.jpg` | Fleet cards |
   | `g1.jpg` … `g8.jpg` | Projects gallery (lightbox) |
   | `footer.jpg` | Footer background photo (already added — replace with your own photo any time) |
   | `service-road.jpg` | Background of the "Road Construction & Levelling" service card. More cards can get photos: add a slot to `SERVICE_PHOTO_SLOTS` in `src/config.js` and drop `service-<id>.jpg` |

   Until a file exists, a matching Unsplash placeholder is shown automatically.
   The hero also appears as the Open Graph image — once the site is live, update
   `og:image` in `index.html` to your domain's hero photo URL.

## Edit content in two places

- **Business details, phone numbers, map links, image list** → `src/config.js`
- **All visible text, both languages** → `src/i18n.jsx` (single translations object)
- **Testimonials are placeholders** → replace the text inside `translations.en.testimonials`
  and `translations.gu.items` in `src/i18n.jsx`.

## Notes

- **Fonts**: headings use **Luckiest Guy** (Google Fonts, OFL — free commercial
  stand-in for the client's "Paper Hero" demo font, which is personal-use only);
  hero badge titles, section subtitles, card titles, FAQ questions and all
  CTA buttons use **Atavian** (`public/fonts/atavian-regular.otf`,
  SynType — **free commercial license**, no attribution needed) via the
  `font-badge` utility; **all other body text** (nav, labels, descriptions,
  footer — the site-wide body font) is **Bakly Cake**
  (`public/fonts/bakly-cake.otf`) with Inter as per-glyph fallback; **Gujarati
  text** uses the client-provided **Bhaskar Gujarati**
  (`public/fonts/bhaskar-guj.ttf`) with Noto Sans Gujarati as per-glyph
  fallback.
  ⚠️ **Bakly Cake** is a **personal-use-only demo** — purchase its commercial
  license at https://www.meisuseno.my.id/l/BaklyCake and replace the file
  (same filename), or ask for a free alternative, before launch.
  ⚠️ Verify the license of the **Bhaskar Gujarati** font (`bhaskar-guj.ttf`)
  allows commercial website use before launch — replace the file (same
  filename) if you obtain a licensed version.
  `public/fonts/dezonne.otf` and `public/fonts/vempera-semibold.otf` (both
  personal-use demos) are currently **not wired in** — Vempera remains only as
  a per-glyph fallback. Re-adding either takes one @font-face rule plus a
  font-family edit in `src/index.css`.
  To switch headings back to Oswald, edit `--font-display` in `src/index.css`.
- Language choice is kept in memory (React state) as requested — it resets on reload.
- The contact form opens WhatsApp (wa.me/919909552435) with the details prefilled; no backend needed.
- Google Map embed points to Supasi, Veraval, Gir Somnath (no API key required).
- Social links in the footer are placeholders (`#`) — set real URLs in `src/components/Footer.jsx`.
