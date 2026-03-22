# Typography Reference

<!-- Loaded by: web-design-system agent -->
<!-- Max 300 lines. Last updated: 2026-03-22 -->

## Type Scale System

Use modular scales to generate mathematically consistent size steps.

**Ratios:**
- **1.25 (Major Third)** -- data-dense interfaces, dashboards, admin panels
- **1.333 (Perfect Fourth)** -- marketing sites, landing pages, content-heavy pages

Each step = previous step * ratio. Starting from a 1rem base with 1.333 ratio:

| Token | Calculation | rem | ~px at 16px base |
|---|---|---|---|
| `--text-xs` | base / 1.333^2 | 0.563 | 9 |
| `--text-sm` | base / 1.333 | 0.75 | 12 |
| `--text-base` | base | 1.0 | 16 |
| `--text-lg` | base * 1.333 | 1.333 | 21 |
| `--text-xl` | base * 1.333^2 | 1.777 | 28 |
| `--text-2xl` | base * 1.333^3 | 2.369 | 38 |
| `--text-3xl` | base * 1.333^4 | 3.157 | 51 |
| `--text-4xl` | base * 1.333^5 | 4.209 | 67 |

---

## Fluid Typography with clamp()

Formula: `clamp(minimum, preferred, maximum)`

The preferred value uses a viewport-relative calculation so type scales smoothly
between breakpoints with zero media queries.

**General pattern:**
```
clamp([min]rem, [basis]rem + [scale]vw, [max]rem)
```

Where `basis + scale * (viewport / 100)` yields a value between min and max.

**Concrete values for the 1.333 scale (copy-paste ready):**

```css
:root {
  /* Type scale -- Perfect Fourth (1.333) with fluid sizing */
  --text-xs:   clamp(0.5625rem,  0.5rem    + 0.15vw, 0.625rem);
  --text-sm:   clamp(0.75rem,    0.7rem    + 0.25vw, 0.875rem);
  --text-base: clamp(1rem,       0.875rem  + 0.5vw,  1.125rem);
  --text-lg:   clamp(1.125rem,   1rem      + 0.65vw, 1.333rem);
  --text-xl:   clamp(1.333rem,   1.15rem   + 0.9vw,  1.777rem);
  --text-2xl:  clamp(1.777rem,   1.5rem    + 1.2vw,  2.369rem);
  --text-3xl:  clamp(2.369rem,   1.8rem    + 1.8vw,  3.157rem);
  --text-4xl:  clamp(3.157rem,   2.2rem    + 2.5vw,  4.209rem);
}
```

**For the 1.25 scale (data-dense):**

```css
:root {
  /* Type scale -- Major Third (1.25) with fluid sizing */
  --text-xs:   clamp(0.64rem,    0.6rem    + 0.1vw,  0.7rem);
  --text-sm:   clamp(0.8rem,     0.75rem   + 0.2vw,  0.875rem);
  --text-base: clamp(1rem,       0.925rem  + 0.35vw, 1.0625rem);
  --text-lg:   clamp(1.125rem,   1.05rem   + 0.5vw,  1.25rem);
  --text-xl:   clamp(1.25rem,    1.1rem    + 0.7vw,  1.5625rem);
  --text-2xl:  clamp(1.5625rem,  1.3rem    + 1vw,    1.953rem);
  --text-3xl:  clamp(1.953rem,   1.6rem    + 1.3vw,  2.441rem);
  --text-4xl:  clamp(2.441rem,   1.9rem    + 1.8vw,  3.052rem);
}
```

**Key heading shortcuts:**
```css
h1 { font-size: var(--text-4xl); }  /* clamp(~2rem, ..., ~3.5rem)  */
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl);  }
h5 { font-size: var(--text-lg);  }
h6 { font-size: var(--text-base); font-weight: 600; }
```

Never use fixed `px` values for font sizes. The fluid approach prevents the
"screaming on desktop, drowning on mobile" problem (large headings that are either
too big on wide screens or too small on narrow ones).

---

## Font Selection Rules

**Constraints:**
- Maximum 2-3 font families per project (headline, body, optionally code)
- Pairing principle: **contrast** (serif + sans, geometric + humanist), not conflict
  (two similar sans-serifs fighting for attention)

**Anti-slop pairings (use these instead of defaulting to Inter/Roboto):**

| Headlines | Body | Character |
|---|---|---|
| Playfair Display | Source Sans 3 | Elegant, editorial |
| Bricolage Grotesque | Inter Tight | Modern, distinctive |
| Space Grotesk | Nunito Sans | Technical, approachable |
| DM Serif Text | DM Sans | Harmonious (same family) |
| Fraunces | Work Sans | Warm, crafted |
| Instrument Serif | Instrument Sans | Refined, cohesive |

Note: Inter Tight is acceptable as body text ONLY when paired with a distinctive
headline font. Using Inter/Inter Tight for both headlines and body = slop.

**Monospace (for code blocks, technical content):**
- JetBrains Mono (preferred -- ligatures, clear distinction between similar chars)
- Fira Code (alternative with ligatures)
- Source Code Pro (clean, no ligatures)

---

## Variable Fonts

A single variable font file (300-500KB) provides a continuous weight range (100-900)
and optionally width and slant axes. Static fonts would require 6-8 separate files
totaling 1MB+.

**Usage:**
```css
@font-face {
  font-family: 'BricolageGrotesque';
  src: url('/fonts/BricolageGrotesque-Variable.woff2') format('woff2-variations');
  font-weight: 200 800;
  font-display: swap;
}

/* Fine control via font-variation-settings */
.headline-bold {
  font-variation-settings: 'wght' 720, 'wdth' 105;
}
```

**Always define a fallback stack:**
```css
font-family: 'BricolageGrotesque', 'Helvetica Neue', Arial, sans-serif;
```

---

## Font Performance

**Loading strategy (in order of priority):**

1. **Self-host fonts** -- never load from Google Fonts CDN (DSGVO/GDPR compliance
   for the German market; Google Fonts transmits user IPs to Google servers)

2. **Preload critical fonts** (the ones visible above the fold):
   ```html
   <link rel="preload" href="/fonts/BricolageGrotesque-Variable.woff2"
         as="font" type="font/woff2" crossorigin>
   ```

3. **Use `font-display: swap`** -- shows text immediately in fallback font, swaps
   when the custom font loads. Prevents invisible text (FOIT).

4. **Subset to needed characters** -- strip unused glyphs. For German market, keep
   `latin` + `latin-ext` (covers umlauts: ae, oe, ue, sz). Use `pyftsubset` or
   `glyphhanger` to generate subsets.

5. **Use WOFF2 only** -- best compression, supported by all modern browsers.
   Drop WOFF/TTF/EOT entirely.

6. **Preconnect** if loading from any external CDN (rare, prefer self-hosting):
   ```html
   <link rel="preconnect" href="https://fonts.example.com" crossorigin>
   ```

---

## Line Height and Spacing

**Line height:**
- Body text: `line-height: 1.5` (WCAG 1.4.12 requirement for readability)
- Headings: `line-height: 1.1` to `1.2` (tighter for large text -- large line-height
  on big headings creates awkward gaps)

**Paragraph spacing:**
- `margin-bottom` on paragraphs should equal the body line-height value in rem
- Example: if body is 1rem at line-height 1.5, use `margin-bottom: 1.5rem`

**Measure (line length):**
- Target: 60-75 characters per line
- Implement with: `max-width: 65ch` on text containers
- The `ch` unit equals the width of the "0" character -- naturally scales with font size

**Letter-spacing:**
- Headings: `-0.02em` (slightly tighter -- large text has more natural spacing)
- Body: `0` or `normal` (do not adjust)
- ALL-CAPS text: `0.05em` to `0.1em` (increased tracking for legibility)
- Small text (captions, labels): `0.01em` slight increase

```css
h1, h2, h3 {
  letter-spacing: -0.02em;
  line-height: 1.15;
}

p, li, blockquote {
  line-height: 1.5;
  max-width: 65ch;
}

.all-caps {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## Base Size

- **Minimum: 16px (1rem)** -- all research reports agree on this floor
- **18px recommended** for marketing sites and content-heavy pages
- Never use `px` for `font-size` -- always `rem` or `clamp()`
- Root font-size must be `100%` (respects user browser settings for accessibility):

```css
html {
  font-size: 100%;          /* = 16px default, respects user preferences */
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
```

If the design calls for 18px base, do NOT set `html { font-size: 18px }`. Instead,
set `html { font-size: 112.5% }` so the user's browser zoom preference is preserved.

---

## Complete Starter Tokens

Copy-paste starting point for the design-system agent:

```css
:root {
  /* --- Type Scale (Perfect Fourth) --- */
  --text-xs:   clamp(0.5625rem, 0.5rem   + 0.15vw, 0.625rem);
  --text-sm:   clamp(0.75rem,   0.7rem   + 0.25vw, 0.875rem);
  --text-base: clamp(1rem,      0.875rem + 0.5vw,  1.125rem);
  --text-lg:   clamp(1.125rem,  1rem     + 0.65vw, 1.333rem);
  --text-xl:   clamp(1.333rem,  1.15rem  + 0.9vw,  1.777rem);
  --text-2xl:  clamp(1.777rem,  1.5rem   + 1.2vw,  2.369rem);
  --text-3xl:  clamp(2.369rem,  1.8rem   + 1.8vw,  3.157rem);
  --text-4xl:  clamp(3.157rem,  2.2rem   + 2.5vw,  4.209rem);

  /* --- Line Heights --- */
  --leading-tight:  1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* --- Letter Spacing --- */
  --tracking-tight:   -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.08em;

  /* --- Measure (Line Length) --- */
  --measure-narrow: 45ch;
  --measure-base:   65ch;
  --measure-wide:   80ch;

  /* --- Font Families (override per project) --- */
  --font-heading: 'BricolageGrotesque', 'Helvetica Neue', Arial, sans-serif;
  --font-body:    'SourceSans3', 'Helvetica Neue', Arial, sans-serif;
  --font-mono:    'JetBrainsMono', 'Fira Code', 'Consolas', monospace;
}

/* --- Base Application --- */
html { font-size: 100%; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
body { font-family: var(--font-body); font-size: var(--text-base);
       line-height: var(--leading-normal); letter-spacing: var(--tracking-normal); }
h1, h2, h3, h4, h5 { font-family: var(--font-heading);
                      line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); }
h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl);  }
h5 { font-size: var(--text-lg);  }
p, li, blockquote { max-width: var(--measure-base); }
code, pre { font-family: var(--font-mono); font-size: var(--text-sm); }
```
