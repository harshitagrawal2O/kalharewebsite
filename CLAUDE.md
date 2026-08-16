# LayerForge — Project Context

Next.js (App Router) + Tailwind + shadcn/ui marketing & storefront site for LayerForge, a 3D printing service.

## Brand Guidelines

### Colour palette

| Role | Name | HEX | RGB | HSL (Tailwind token) | CMYK | Pantone | Use |
|---|---|---|---|---|---|---|---|
| Primary · Logo | Teal Blue | `#033B55` | 3, 59, 85 | `201 93% 17%` | 96, 31, 0, 67 | 302 C | Structure, authority |
| Primary · Logo | Blaze Orange | `#F86400` | 248, 100, 0 | `24 100% 49%` | 0, 60, 100, 3 | 1505 C | Energy, CTAs |
| Supporting | Steel Grey | `#2C3E50` | 44, 62, 80 | `210 29% 24%` | 45, 23, 0, 69 | 5395 C | Body copy, docs |
| Neutral | Slate | `#8FA3B1` | 143, 163, 177 | `204 16% 63%` | 19, 8, 0, 31 | 5415 C | Dividers, icons |
| Surface | Off-White | `#F5F4F0` | 245, 244, 240 | `50 20% 95%` | 0, 0, 2, 4 | 9183 C | Backgrounds |

Rules:
- Teal Blue and Blaze Orange are the two logo colours — never substitute or tint them in the mark itself.
- Blaze Orange is the CTA colour. Use it sparingly so it stays a signal, not decoration.
- Slate is for dividers and icons only — it is too low-contrast for body text.
- Page backgrounds are Off-White, not pure white.

Accessibility notes (verify before shipping):
- White on Blaze Orange is ~3.1:1 — passes WCAG AA for **large text only** (≥24px, or ≥18.66px bold). For normal-size text on an orange fill, use Teal Blue text or darken the orange.
- Slate on Off-White is ~2.4:1 — decorative use only.
- Teal Blue and Steel Grey on Off-White both clear AA comfortably.

### Typography
- **Primary — Lufga** (Adam Ladd): geometric sans, 18 weights thin→black, large x-height, low contrast, diagonal terminals, stylistic alternates. Use for headings and the logo wordmark.
- **Secondary — Outfit**: geometric sans, weights 100–900. Use for body, UI, and long-form text.

Licensing gap: **Lufga is a commercial font and is not on Google Fonts**, so the files are not in the repo and headings currently render in Outfit. It is served by `@font-face` from `public/fonts/lufga/` rather than `next/font/local` — a missing file then degrades silently instead of failing the build. **Those rules ship commented out**; see [the README there](public/fonts/lufga/README.md) to enable them once you have the licence. Outfit *is* on Google Fonts (`next/font/google`).

## Headings

Headings are **solid colour, never gradient**. The base heading colour is Teal Blue (applied to `h1`–`h6` in `globals.css`); the highlighted word or phrase within a heading gets `text-cta` (Blaze Orange). The old `.text-gradient` utility was removed on purpose — don't reintroduce it.

```jsx
<h2 className="text-4xl font-extrabold tracking-display">
  Why Choose <span className="text-cta">LayerForge</span>
</h2>
```

## The logo

One component owns every placement: [src/components/layout/Logo.tsx](src/components/layout/Logo.tsx). Nothing else in the codebase should reference a logo file path.

To swap the artwork: save the source export anywhere, then run

```
npm run logo -- path/to/source.png
```

It trims the export's padding, resamples to 3× the largest display size (180 CSS px → 540 px), and writes `public/images/logo-wordmark.{png,webp}`. Because the output path is fixed, re-running it updates the whole site with no code change — only edit `WORDMARK`'s `width`/`height` if the script reports different numbers. SVG sources are copied through untouched, which is the better option when the brand team can supply one.

Two constraints worth remembering:

- **The wordmark cannot sit directly on Teal Blue.** "Forge." and the "BUILT WITH PRECISION" tagline are set in `#033B55`, which is the footer's own background. `<Logo onDark />` puts it on an Off-White plate. A proper white/knockout variant of the logo would be better — if one gets supplied, add it as a second source rather than keeping the plate.
- **Always pass `sizes`.** Without it Next serves the full-size original: the previous navbar shipped a 2752×996 / 3.44 MB PNG to paint a 140 px logo.

## Builds vs. the dev server

**Never run `npm run build` while `npm run dev` is running.** They share `.next`, and the production manifests overwrite the dev server's chunk map — the symptom is `ChunkLoadError: Loading chunk app/layout failed (timeout: …/_next/static/chunks/app/layout.js)`, which looks like a code bug but isn't. Recovery: stop dev, delete `.next`, restart dev.

Use `npm run build:check` to verify a build while dev is up. It sets `NEXT_DIST_DIR=.next-check` (see [next.config.ts](next.config.ts) and [scripts/build-check.mjs](scripts/build-check.mjs)) so the build lands in its own directory. Deploys are unaffected — the var is unset in CI, so `.next` is used.

Also note the dev server falls back to **port 3001** when 3000 is taken by a stale process. Check which port the log actually printed before debugging what the browser shows.

## How the brand is wired into the code

The palette lives **only** in [globals.css](src/app/globals.css) as HSL triples, surfaced through [tailwind.config.ts](tailwind.config.ts). Never hardcode a hex in a component — add or use a token.

### Tokens

Raw palette (`--brand-*` → `bg-brand-teal`, `text-brand-orange`, …). Reach for these only when no semantic token fits: logo marks, scrims over media, illustration fills.

Semantic tokens carry the actual work:

| Token | Maps to | Use for |
|---|---|---|
| `background` | Off-White | every page ground — never `bg-white` |
| `foreground` | Steel Grey | body copy |
| `card` | white | raised surfaces on the Off-White ground |
| `primary` | Teal Blue | headings, structural actions, footer ground |
| `cta` | Blaze Orange | the single most important action per view |
| `cta-strong` | `#C24E00` | orange that clears AA with white text; also `cta`'s hover |
| `secondary` / `muted` | Slate tints | section grounds, icon wells |
| `muted-foreground` | darkened Slate | secondary copy (real Slate is too light for text) |
| `accent` | orange wash | hover states, eyebrows, active nav |
| `border` / `input` | Slate | dividers and hairlines — Slate's designated role |
| `ring` | Blaze Orange | focus rings |

Extras: `shadow-brand` / `shadow-brand-lg` (Teal-tinted depth), `shadow-cta` (orange glow), `tracking-display` (−0.03em, for Lufga at display sizes), `font-heading` / `font-sans`.

Component classes in globals.css: `.eyebrow` (orange pill label above a heading), `.rule`, `.text-gradient` (Teal→Orange, display sizes only), `.bg-brand-gradient`, `.link-underline`.

### Conventions

- Headings get `font-heading` automatically via a base rule, plus `text-primary`. Override with a utility class when a heading sits on a dark ground.
- `Button` has a `cta` variant — that is the Blaze Orange button. `default` is Teal Blue. One `cta` per view.
- Buttons are set in Lufga; body and form copy in Outfit.
- Filament colour swatches in [custom-print](src/app/custom-print/page.tsx) (`#EF4444`, `#3B82F6`, …) are **product data, not brand colours**. Leave them alone.

### Known deviation

`cta` (`#F86400`) with white text is ~3.1:1 — AA for large text only. It ships that way because Blaze Orange is the brand's stated CTA colour, matching how orange CTAs work in practice elsewhere. `bg-cta-strong` is the AA-passing alternative and is one class away wherever it matters.

`src/components/ui/typewriter-effect.old.tsx` is an unused backup and was left off-brand deliberately.
