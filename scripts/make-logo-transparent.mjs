// One-off helper: makes the background around the round logo transparent.
// Flood-fills from the image borders through near-white pixels only, so the
// white "EARTH MOVERS" text inside the black circle is untouched.
import { readFileSync, writeFileSync } from 'node:fs'
import { PNG } from 'pngjs'

const [src, dst] = process.argv.slice(2)
const png = PNG.sync.read(readFileSync(src))
const { width: W, height: H, data } = png

const idx = (x, y) => (y * W + x) * 4
const lum = (i) => 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]

// 1) flood fill from every border pixel through near-white pixels
const transparent = new Uint8Array(W * H)
const queue = []
for (let x = 0; x < W; x++) { queue.push([x, 0], [x, H - 1]) }
for (let y = 0; y < H; y++) { queue.push([0, y], [W - 1, y]) }

const NEAR_WHITE = 235
while (queue.length) {
  const [x, y] = queue.pop()
  if (x < 0 || y < 0 || x >= W || y >= H) continue
  const p = y * W + x
  if (transparent[p]) continue
  const i = idx(x, y)
  if (lum(i) < NEAR_WHITE) continue
  transparent[p] = 1
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

// 2) one dilation pass: soften the anti-aliased halo at the circle edge
const extra = []
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x
    if (transparent[p]) continue
    const i = idx(x, y)
    if (lum(i) > 180) continue
    const neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    if (neighbors.some(([dx, dy]) => {
      const nx = x + dx, ny = y + dy
      return nx >= 0 && ny >= 0 && nx < W && ny < H && transparent[ny * W + nx]
    })) extra.push([x, y, i])
  }
}
for (const [, , i] of extra) data[i + 3] = 0

// 3) apply
for (let p = 0; p < W * H; p++) {
  if (transparent[p]) data[p * 4 + 3] = 0
}

writeFileSync(dst, PNG.sync.write(png))
console.log(`done: ${W}x${H}, cleared ${transparent.filter(Boolean).length + extra.length} px`)
