# Layout Patterns

<!-- Reference file for CSS layout patterns. Loaded by web-layout-architect, web-builder agents. -->
<!-- Max 300 lines. -->

## Layout Technology Decision Tree

Pick the right tool for the job. Do not default to Flexbox for everything:

| Need | Technology | Example |
|------|-----------|---------|
| 2D page structure | **CSS Grid** | Header, hero, content sections, footer |
| 1D component internals | **Flexbox** | Navbar items, card content, button groups |
| Component-level responsiveness | **Container Queries** | Card adapts to its container, not viewport |
| Cross-element alignment | **Subgrid** | Feature cards with aligned headers/CTAs |
| Global macro breakpoints | **Media Queries** | 3-column to 1-column at narrow viewports |

## CSS Grid — Macro Layouts

### Page-Level Template with Named Areas

```css
.page {
  display: grid;
  grid-template-areas:
    "header"
    "hero"
    "content"
    "footer";
  grid-template-rows: auto auto 1fr auto;
  min-height: 100dvh;
}

.header  { grid-area: header; }
.hero    { grid-area: hero; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

### Full-Bleed with Contained Content

Content stays centered; backgrounds go edge-to-edge:

```css
.section {
  display: grid;
  grid-template-columns: 1fr min(70rem, 100% - 2rem) 1fr;
}

.section > * {
  grid-column: 2;
}

.section > .full-bleed {
  grid-column: 1 / -1;
}
```

### Asymmetric Layouts (Content + Sidebar)

```css
.content-area {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .content-area {
    grid-template-columns: 1fr;
  }
}
```

## Container Queries — Component Responsiveness

Components adapt to their container width, not the viewport. The same card component works in a 1-column hero AND a 3-column grid without modification:

```css
/* Parent declares itself as a container */
.card-wrapper {
  container-type: inline-size;
}

/* Card adapts to container width */
.card {
  display: grid;
  gap: 1rem;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}

@container (min-width: 600px) {
  .card {
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
  }
}
```

Container query units: `cqi` (inline), `cqw` (width), `cqmin`, `cqmax` — use these for fluid sizing within containers.

This is the paradigm shift: viewport-based design to container-based design. Prefer `@container` over `@media` for component-level responsiveness.

## Subgrid — Cross-Element Alignment

Align elements across sibling cards without JavaScript height-equalization:

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* header + description + CTA */
  gap: 1rem;
}
```

Use cases: feature grids with aligned headers/descriptions/CTAs, pricing tables with uneven content, blog card lists where titles/excerpts/dates align across cards.

## Page Pattern Selection

| Page Type | Layout Pattern | Why |
|-----------|---------------|-----|
| Performance Landing (Ads) | Z-Pattern Hero, single CTA, minimal nav | Fast scan, one conversion goal |
| SaaS Landing | Grid sections: Hero, Features, Proof, Pricing, FAQ | F-Pattern for detail scanning |
| Blog / Content Hub | F-Pattern, optional sidebar, clear type hierarchy | Reading-optimized |
| B2B Corporate | Grid storyline: Who, What, For Whom, Proof, Contact | Mega-menu for complex IA |
| Personal / Portfolio | Single-column Z or scroll-based, minimal nav | Narrative flow |

## Modern CSS Features to Use

### Scroll-Driven Animations (Zero JS)

```css
.reveal {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(2rem); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Runs off the main thread. Replaces scroll-based JS animation libraries.

### Anchor Positioning (Tooltips/Dropdowns)

```css
.trigger {
  anchor-name: --trigger;
}

.tooltip {
  position: absolute;
  position-anchor: --trigger;
  inset-area: top;
  margin-bottom: 0.5rem;
}
```

Baseline since Firefox 147 (Jan 2026). Replaces Floating UI / Popper.js.

### View Transitions (Page Transitions)

```css
@view-transition {
  navigation: auto;
}
```

Zero-JS cross-page transitions for multi-page sites.

### :has() — Parent-Aware Styling

```css
/* Style a card differently when it contains an image */
.card:has(img) {
  grid-template-rows: auto 1fr;
}

/* Style form group when input is invalid */
.form-group:has(:invalid) {
  --border-color: var(--color-error);
}
```

**Impact:** Replacing JS libraries for scroll animations, positioning, and DOM queries removes 50-100KB, reducing TTI by ~0.8s on mobile.

## Spacing System

Base unit: `0.25rem` (4px). Use this scale consistently:

```css
:root {
  --space-1: 0.25rem;  /* tight gaps: icon + label */
  --space-2: 0.5rem;   /* inline spacing */
  --space-3: 0.75rem;  /* compact padding */
  --space-4: 1rem;     /* default padding */
  --space-6: 1.5rem;   /* card padding */
  --space-8: 2rem;     /* section inner gaps */
  --space-12: 3rem;    /* section padding (small) */
  --space-16: 4rem;    /* section padding (medium) */
  --space-24: 6rem;    /* section padding (large) */
  --space-32: 8rem;    /* hero padding */
}
```

**Section spacing:** Vary intentionally between sections to create rhythm. Uniformity is monotonous. Use larger spacing around hero sections, tighter spacing between related content blocks.

**Component spacing:** Consistent within components (all cards use `--space-6` padding), varied between sections.

## Responsive Strategy

Mobile-first: start with single column, add complexity at wider viewports.

### Breakpoints

```css
/* sm  */ @media (min-width: 640px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
```

But prefer Container Queries over media queries for component-level responsiveness. Media queries are for macro layout shifts only (e.g., switching from stacked to sidebar layout).

### Responsive Grid with Auto-Fit (No Breakpoints Needed)

```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: var(--space-8);
}
```

Cards wrap naturally based on available space. `auto-fit` stretches items to fill the row; `auto-fill` preserves empty tracks. For explicit breakpoint control, use media queries with `grid-template-columns: repeat(2, 1fr)` at `768px` and `repeat(3, 1fr)` at `1024px`.
