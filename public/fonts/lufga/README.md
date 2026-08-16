# Lufga — primary brand typeface

Lufga is a **commercial typeface by Adam Ladd**. It is not on Google Fonts and
is not redistributable, so the font files are deliberately not committed here.

## Installing

Buy a webfont licence, convert/export the weights to `.woff2`, and drop them in
this directory with exactly these filenames:

```
Lufga-Light.woff2      (300)
Lufga-Regular.woff2    (400)
Lufga-Medium.woff2     (500)
Lufga-SemiBold.woff2   (600)
Lufga-Bold.woff2       (700)
Lufga-ExtraBold.woff2  (800)
Lufga-Black.woff2      (900)
```

Then **uncomment the `@font-face` block** in
[`src/app/globals.css`](../../../src/app/globals.css): delete the `/*` on the
line right after the `LUFGA` comment header, and the `*/` on the line marked
`END LUFGA`. Restart the dev server.

The rules are commented out by default on purpose — with no files present the
browser fires one failed request per weight on every page load.

You do not need all seven weights. Any weight whose file is missing simply falls
back; `600` and `700` cover most of the site, `800`/`900` are used by hero
display type. If you only license a few, delete the `@font-face` blocks for the
ones you don't have so they don't 404.

## Until then

Every heading resolves through the `font-heading` stack:

```
Lufga → Outfit → system geometric sans
```

Outfit is also a large-x-height geometric sans with similar metrics, so the
site renders correctly and layout does not shift when Lufga is added later.
