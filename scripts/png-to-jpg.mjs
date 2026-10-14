// One-off helper: convert a PNG photo to an optimized JPG for the site assets.
import { readFileSync, writeFileSync } from 'node:fs'
import { PNG } from 'pngjs'
import jpeg from 'jpeg-js'

const [src, dst, quality = '82'] = process.argv.slice(2)
const png = PNG.sync.read(readFileSync(src))

// flatten any alpha onto the site's dark ink color
const out = Buffer.alloc(png.width * png.height * 4)
for (let i = 0; i < png.data.length; i += 4) {
  const a = png.data[i + 3] / 255
  out[i] = png.data[i] * a + 11 * (1 - a)
  out[i + 1] = png.data[i + 1] * a + 11 * (1 - a)
  out[i + 2] = png.data[i + 2] * a + 12 * (1 - a)
  out[i + 3] = 255
}

const jpg = jpeg.encode({ data: out, width: png.width, height: png.height }, Number(quality))
writeFileSync(dst, jpg.data)
console.log(`done: ${png.width}x${png.height} -> ${dst} (${Math.round(jpg.data.length / 1024)} KB)`)
