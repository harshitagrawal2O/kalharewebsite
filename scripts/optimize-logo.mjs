// Turns a raw logo export into a web-ready asset.
//
//   npm run logo -- public/images/logo-source.png
//
// The navbar renders the wordmark at ~180 CSS px. Shipping the raw export
// (the previous logo-2.png was 2752x996 / 3.44 MB) means downloading ~3.4 MB
// to paint 180 px. This trims the surrounding transparent margin, resamples to
// 3x the largest display size — enough for any retina screen — and writes both
// PNG and WebP.
//
// SVG sources are copied through untouched: a vector wordmark is already
// resolution-independent and rasterising it would be a downgrade.
import { existsSync, copyFileSync, statSync } from "node:fs";
import path from "node:path";

// sharp ships as an optional dependency of Next rather than a direct one here,
// so fail with something actionable instead of a raw module-not-found.
let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error(
    "sharp is not available. Install it with:\n  npm i -D sharp\n" +
      "(it is normally present as a Next.js optional dependency)",
  );
  process.exit(1);
}

const OUT_DIR = "public/images";
const OUT_BASE = "logo-wordmark";
// Largest CSS width the wordmark is rendered at, across all placements.
const MAX_DISPLAY_WIDTH = 180;
const TARGET_WIDTH = MAX_DISPLAY_WIDTH * 3;

const args = process.argv.slice(2);
const knockout = args.includes("--knockout");
const source = args.find((a) => !a.startsWith("--"));

if (!source) {
  console.error(
    "usage: npm run logo -- <path-to-source> [--knockout]\n" +
      "example: npm run logo -- public/images/logo-source.png\n\n" +
      "  --knockout  turn a flat white background transparent. Only for logos\n" +
      "              with no white *inside* the artwork — any white part of the\n" +
      "              mark itself would be knocked out too.",
  );
  process.exit(1);
}

if (!existsSync(source)) {
  console.error(`source not found: ${source}`);
  process.exit(1);
}

const kb = (p) => (statSync(p).size / 1024).toFixed(1) + " KB";

if (path.extname(source).toLowerCase() === ".svg") {
  const dest = path.join(OUT_DIR, `${OUT_BASE}.svg`);
  copyFileSync(source, dest);
  console.log(`vector source — copied to ${dest} (${kb(dest)})`);
  console.log(
    "\nSet WORDMARK in src/components/layout/Logo.tsx to:\n" +
      `  src: "/images/${OUT_BASE}.svg"\n` +
      "  (width/height can stay as the SVG's own viewBox ratio)",
  );
  process.exit(0);
}

const input = sharp(source);
const meta = await input.metadata();

// A logo exported on an opaque white card shows as a pale rectangle against
// the Off-White (#F5F4F0) page background. trim() strips the outer margin but
// cannot remove the white between letterforms — that needs a transparent
// export from the source file.
if (!meta.hasAlpha) {
  console.warn(
    "\n  warning: source has no transparency.\n" +
      "  The page background is Off-White (#F5F4F0), so an opaque white logo\n" +
      "  box will be faintly visible. Re-export as a transparent PNG or SVG.\n",
  );
}

/**
 * Derives an alpha channel from a flat white background.
 *
 * alpha = 255 - min(r,g,b), then the colour is un-premultiplied against
 * white. Antialiased edges keep partial alpha instead of picking up a halo:
 * a mid-edge pixel (251,177,127) resolves back to (247,100,0) at 50% alpha,
 * i.e. the original Blaze Orange.
 */
async function knockOutWhite(img) {
  const { data, info } = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const a = 255 - Math.min(r, g, b);
    if (a === 0) {
      data[i + 3] = 0;
      continue;
    }
    const k = a / 255;
    data[i] = Math.min(255, Math.round((r - (255 - a)) / k));
    data[i + 1] = Math.min(255, Math.round((g - (255 - a)) / k));
    data[i + 2] = Math.min(255, Math.round((b - (255 - a)) / k));
    data[i + 3] = a;
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}

const prepared = knockout ? await knockOutWhite(input) : input;
if (knockout) console.log("knocked out white background -> transparent");

// trim() removes the uniform transparent/white border around the artwork so
// the logo box is the logo, not the export's padding.
const trimmed = sharp(await prepared.trim().toBuffer());
const trimMeta = await trimmed.metadata();

const resized = trimmed.resize({
  width: TARGET_WIDTH,
  withoutEnlargement: true,
  fit: "inside",
});

const pngPath = path.join(OUT_DIR, `${OUT_BASE}.png`);
const webpPath = path.join(OUT_DIR, `${OUT_BASE}.webp`);

await resized.clone().png({ compressionLevel: 9, palette: true }).toFile(pngPath);
await resized.clone().webp({ quality: 92 }).toFile(webpPath);

const outMeta = await sharp(pngPath).metadata();

console.log(`source   ${meta.width}x${meta.height}  ${kb(source)}`);
console.log(`trimmed  ${trimMeta.width}x${trimMeta.height}  (removed export padding)`);
console.log(`png      ${outMeta.width}x${outMeta.height}  ${kb(pngPath)}  -> ${pngPath}`);
console.log(`webp     ${outMeta.width}x${outMeta.height}  ${kb(webpPath)}  -> ${webpPath}`);
console.log(
  "\nSet WORDMARK in src/components/layout/Logo.tsx to:\n" +
    `  src: "/images/${OUT_BASE}.png",\n` +
    `  width: ${outMeta.width},\n` +
    `  height: ${outMeta.height},`,
);
