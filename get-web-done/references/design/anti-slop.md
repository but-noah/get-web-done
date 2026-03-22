# Anti-Slop Design Reference

<!-- Loaded by: web-design-system, web-layout-architect, web-builder agents -->
<!-- Max 300 lines. Last updated: 2026-03-22 -->

## What Is Slop

"Slop" was Merriam-Webster's 2025 Word of the Year. It describes AI-generated content
that is technically functional but creatively bankrupt.

Three defining properties:
1. **Superficial competence** -- it looks "professional" at first glance
2. **Asymmetric effort** -- trivial to produce, tedious to distinguish from quality work
3. **Mass producibility** -- every instance looks like every other instance

In web design, slop emerges from **distributional convergence**: LLMs gravitate toward
the most common patterns in their training data. The result is a recognizable template:

- Inter font everywhere
- Purple-to-blue gradient hero section
- Centered everything, top to bottom
- Identical card grids with gray box-shadows
- "Learn more" buttons with no specificity
- Generic stock photos
- Uniform section padding throughout

If a visitor can't tell which company a website belongs to, it's slop.

---

## The Four Pillars of Anti-Slop Design

### Pillar 1 -- Typography

**Hard rules:**
- NEVER use Inter, Roboto, or system-ui as the primary font without documented justification
- Base font size minimum: 16-18px (1rem-1.125rem)
- Max line length: 60-75 characters (use `max-width: 65ch`)
- Line height: 1.5 for body, 1.1-1.2 for headings

**What to do instead:**
- Choose distinctive typefaces: Playfair Display for serif headlines, Bricolage Grotesque
  for body text, JetBrains Mono for code blocks
- Use variable fonts: a single 300-500KB file gives infinite weight/width variation vs
  1MB+ for multiple static font files
- Apply fluid scaling with `clamp()` -- eliminates breakpoint jumps entirely
- Use mathematical modular scales: ratio 1.25 for data-dense UI, 1.333 for marketing

See `typography.md` for the full type scale system and CSS implementation.

### Pillar 2 -- Color

**Hard rules:**
- NEVER use pure `#000000` or `#ffffff` -- always use brand-tinted neutrals
- NEVER use a purple-to-blue gradient as a hero background
- NEVER hard-code color values in components -- always reference design tokens
- Define semantic names: `--color-primary`, `--color-surface-*`, `--color-text-*`

**What to do instead:**
- Define ONE brand hue in OKLCH, then derive the entire palette mathematically
- Use `color-mix()` for derived shades -- one real project condensed 900 lines of
  color declarations down to 80
- Use P3 gamut for vivid accents via `oklch()` with `@media (color-gamut: p3)` fallback
- Tint your neutrals toward the brand hue (warm brand = warm grays, cool brand = cool grays)

### Pillar 3 -- Motion

**Hard rules:**
- ALWAYS respect `prefers-reduced-motion` -- this is a hard accessibility requirement,
  not a suggestion. Wrap all animations in `@media (prefers-reduced-motion: no-preference)`
- Motion must enhance understanding, never merely decorate

**What to do instead:**
- CSS scroll-driven animations (`animation-timeline: view()`) -- runs off the main thread,
  requires zero JavaScript
- Staggered reveals: elements appear in sequence on scroll, not all at once
- View Transitions API for page navigation (cross-document transitions in modern browsers)
- Hover states: combine subtle scale (1.02-1.05), color shift, and cursor change
- Entrance animations: fade + slight translateY (8-16px), not dramatic fly-ins

### Pillar 4 -- Depth and Texture

**Hard rules:**
- NEVER use generic gray `box-shadow` -- tint shadows toward the element's background color
- NEVER rely on a single flat gradient for visual interest

**What to do instead:**
- Multi-layer gradients: stack 2-3 subtle gradients at different angles
- Subtle grid patterns or noise textures as section backgrounds (use SVG or CSS patterns)
- Glassmorphism (`backdrop-filter: blur()`) used sparingly -- one or two elements per page max
- Brand-tinted shadows: `box-shadow: 0 4px 24px oklch(0.3 0.05 var(--brand-hue) / 0.15)`
- Layered sections with intentional overlap or bleed between them
- Goal: each section should feel like a considered composition, not a card in a stack

---

## The "Never Do" List

These patterns are immediate indicators of AI slop. Agents must actively avoid all of them:

1. Never center every section identically (hero + features + testimonials all centered = slop)
2. Never use identical card layouts across the entire page -- vary card sizes, orientations,
   or use alternative patterns (masonry, staggered, asymmetric grids)
3. Never use "Learn more" as CTA text -- specify what the user will learn or do
4. Never use stock photos that don't match the brand's specific visual tone and subject matter
5. Never use inline styles (this is enforced by the build pipeline pre-commit hook)
6. Never hard-code colors or spacing values -- always reference design tokens
7. Never apply the same section padding/margin throughout -- vary vertical rhythm intentionally
   (e.g., 6rem between major sections, 3rem between subsections, 1.5rem within groups)
8. Never stack more than two sections with the same background color consecutively
9. Never use the same border-radius value on every element -- match radius to element scale
10. Never default to a 3-column card grid -- consider if the content actually warrants it

---

## The "Handmade Web" Movement

Design philosophy that every GWD site should embody:

- **IndieWeb principles:** intentional imperfection, personality, visible craft
- **Creative Process over Corporate Polish:** sites should feel authored, not assembled
- **Specificity test:** each website must feel like it was designed for THIS particular client
- Introduce at least one layout break or unexpected element per page
- Allow asymmetry -- not everything needs to be centered or evenly distributed
- Use whitespace as a design element, not just padding

**The litmus test:** Look at any section and ask: "Could this section belong to any other
website?" If the answer is yes, redesign it until the answer is no.

---

## Anti-Slop Checklist

Agents MUST verify every item before finalizing a design or build:

### Typography
- [ ] Primary font is NOT Inter, Roboto, or system-ui (or has documented justification)
- [ ] Font sizes use `clamp()` fluid scaling, not fixed `px` values
- [ ] Body text line-height is 1.5; heading line-height is 1.1-1.2
- [ ] No text container exceeds 75ch width
- [ ] At least 2 distinct type sizes are visible in the hierarchy (not counting nav/footer)

### Color
- [ ] No raw `#000` or `#fff` appears anywhere in the output
- [ ] No purple-to-blue gradient used as a hero/section background
- [ ] All colors reference design tokens, not hard-coded values
- [ ] Shadows are brand-tinted, not generic gray

### Layout
- [ ] At least two sections use different layout patterns (not all centered single-column)
- [ ] No more than two consecutive sections share the same background color
- [ ] Vertical spacing varies between sections (not uniform throughout)
- [ ] Card grids, if used, are not all identical 3-column layouts

### Motion
- [ ] All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
- [ ] No animation exists purely for decoration -- each has a functional purpose
- [ ] Hover states are defined for all interactive elements

### Content
- [ ] No CTA reads "Learn more" without specificity (e.g., "See pricing plans" instead)
- [ ] No generic stock photography -- images match brand tone
- [ ] Section headings are specific to the client, not generic ("Our Services", "Why Choose Us")

### Code Quality
- [ ] Zero inline styles in the final output
- [ ] All spacing uses design tokens or CSS custom properties
- [ ] Font loading includes `font-display: swap` and preload for critical fonts

---

## Quick Reference: Slop vs. Craft

| Slop Pattern | Craft Alternative |
|---|---|
| Inter 400/700 | Bricolage Grotesque with variable weight |
| `#000` on `#fff` | Brand-tinted dark on brand-tinted light |
| `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` | `box-shadow: 0 4px 24px oklch(... / 0.12)` |
| Purple-blue gradient hero | Single brand color with layered texture |
| 3x identical cards, centered | Asymmetric grid with varied card sizes |
| "Learn more" button | "Explore the case study" button |
| Same 80px padding on every section | 6rem / 3rem / 1.5rem varied rhythm |
| `font-size: 48px` | `font-size: clamp(2rem, 1.5rem + 2vw, 3.5rem)` |
| Fade-in on every element | Staggered reveal on key content only |

---

## Strategy & Copy Slop — Distributional Convergence in Messaging

AI slop is not just a visual problem. The same three properties (superficial competence,
asymmetric effort, mass producibility) apply equally to positioning, messaging, and copy.

### How to Detect Strategy Slop

**Hygiene factors disguised as differentiators:**
- "Alles aus einer Hand" / "End-to-end solution" — every full-service provider says this
- "Schnell und zuverlässig" / "Fast and reliable" — every freelancer/agency claims this
- "Maßgeschneidert" / "Tailored solutions" — meaningless without specifying how
- "Innovative Lösungen" / "Innovative solutions" — most overused phrase in B2B
- "Erstklassige Ergebnisse" / "Best-in-class results" — superlative without proof

**Category-level messaging:**
- Positioning that describes the CATEGORY not the COMPANY ("We do AI consulting")
- Benefits true for any competitor ("Save time and money")
- Differentiators based on tech stack rather than outcomes
- Personas based on demographics rather than behaviors and motivations

**Missing anchors:**
- Claims without specific stories, facts, or examples behind them
- Proof points that say "case studies" without naming specific results
- Process descriptions that could describe any consultancy ("we listen, then we build")

### How to Fix Strategy Slop

**The Anchor Principle:** Every positioning claim must be anchored in something
only this specific client has — a story, a decision, a belief, a number, a process.

| Weak (Slop) | Strong (Anchored) |
|---|---|
| "We deliver fast results" | "Prototyp in einer Woche — nicht weil wir hetzen, sondern weil wir mit dem einfachsten lösbaren Problem starten" |
| "Customer-centric approach" | "Manchmal sage ich dir: Dafür brauchst du keine KI. Nimm Squarespace." |
| "Experienced team of experts" | "15 Jahre C-Level in der Luftfahrt + Gründer-DNA = Beratung die versteht wie Konzerne UND Startups ticken" |

The pattern: specific > general. Stories > claims. Outcomes > features.
Attitudes > capabilities. What you refuse > what you offer.

### The "First Draft Is Raw Material" Rule

From the Gemini research: "Versende niemals den ersten Entwurf."
Applies to every text-producing agent:
1. **Strategist:** First positioning draft tested against Self-Review Gate before user sees it
2. **Copywriter:** First headline checked against Strategy's anchors before user sees it
3. **IA Architect:** Section descriptions must be project-specific, not generic names

### The Brand Map Concept

Instead of telling agents "be unique," provide constraints so specific that generic
output becomes structurally impossible:
- **Voice anchors:** 3-5 specific phrases that sound like this brand (from Strategy)
- **Anti-voice:** 3-5 phrases that must never appear (from Strategy Do/Don't)
- **Story anchors:** Specific stories/examples from Deep Discovery
- **Belief anchors:** Principles/attitudes that drive this business
- **Proof anchors:** Specific facts/numbers/results that back claims

When every agent has this map, they can't produce generic output because their
constraints are too specific. This is the structural solution to strategy slop.
