# Navigation Patterns

<!-- Reference file for navigation design. Loaded by web-ia-architect, web-layout-architect agents. -->
<!-- Max 300 lines. -->

## Primary Navigation Rules

1. **Logo:** Top-left (or center for single-page sites). Links to homepage.
2. **CTA button:** Top-right, visually distinct from nav links.
3. **Item count:** 5-7 items max in primary nav (Miller's Law). More causes decision paralysis.
4. **Label accuracy:** Nav labels must match destination page headings exactly (information scent). "Services" in nav must lead to a page titled "Services" — not "What We Do."
5. **Active state:** Clear indicator on current page (underline, color change, or font weight). Use `aria-current="page"`.
6. **Sticky nav:** Appears after scrolling past the hero section. Not fixed from page load (wastes vertical space on initial view).
7. **No dropdowns on mobile** for primary items — all items must be visible without interaction.

## Mobile Navigation

Nielsen research confirms navigation is used MORE on mobile than desktop. Never hide it behind a mystery icon.

### Preferred: Visible Bottom Nav

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: var(--space-2) var(--space-4);
  background: var(--color-surface-elevated);
  border-top: 1px solid var(--color-border-subtle);
  z-index: 100;
}
```

### If Hamburger Is Required

- Label it "Menu" — not just the icon. Icon-only hamburgers reduce discoverability.
- Full-screen overlay on open, not a slide-in panel that obscures content partially.
- Close button must be in the same position as the open button (spatial consistency).

### Touch Targets

- **Minimum size:** 44x44px (WCAG 2.2 target size requirement)
- **Minimum gap:** 8px between adjacent targets
- **Thumb zone:** Primary actions in the bottom 40% of the screen
- **Swipe gestures:** Secondary interaction only, never the primary way to navigate

## Desktop Navigation Patterns

### Simple (5-7 Items)

Horizontal bar with CTA right-aligned:

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-8);
}

.nav-links {
  display: flex;
  gap: var(--space-6);
  list-style: none;
}

.nav-cta {
  margin-left: auto;
}
```

### Medium (8-15 Items)

Grouped dropdowns with clear category headers. Trigger on click, not hover (hover requires precision and has no mobile equivalent).

```css
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 12rem;
  padding: var(--space-2) 0;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-md);
  display: none;
}

.dropdown[aria-expanded="true"] .dropdown-menu {
  display: block;
}
```

### Complex (Enterprise B2B, 15+ Items)

Mega menu with columns and visual grouping. Show all options at once, grouped by category. Optional images/icons per section.

## Secondary Navigation

- **Footer nav:** Legal pages (Impressum, Datenschutz for German sites), sitemap links, social media
- **Breadcrumbs:** Required for structures deeper than 2 levels. Use `<nav aria-label="Breadcrumb">` with `<ol>`.
- **In-page nav (TOC):** For long-form content. Sticky sidebar on desktop, floating button on mobile.
- **Related content links:** At end of page for contextual cross-linking.

## Accessibility Requirements (Non-Negotiable)

### Keyboard Navigation

```
Tab          → Move between nav items
Enter/Space  → Activate link or open dropdown
Escape       → Close open dropdown/menu
Arrow keys   → Navigate within dropdown items
```

### Skip Link (First Focusable Element)

```html
<a href="#main-content" class="skip-link">Skip to content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary);
  color: var(--color-text-inverted);
  z-index: 1000;
  border-radius: 0 0 0.25rem 0.25rem;
}

.skip-link:focus {
  top: 0;
}
```

### ARIA Requirements

- `role="navigation"` on the `<nav>` element (implicit, but explicit when multiple navs exist)
- `aria-label="Primary"` and `aria-label="Footer"` to distinguish multiple nav elements
- `aria-current="page"` on the active item
- `aria-expanded="true|false"` on dropdown triggers
- `aria-haspopup="true"` on dropdown triggers
- **Focus indicator:** Never set `outline: none` without providing a visible custom focus style
- **DOM order:** Logical DOM order must match visual order. Do not use CSS to visually reorder nav items while DOM order differs.

## Navigation Anti-Patterns

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| Hamburger on desktop without label | Hides navigation unnecessarily | Show horizontal nav; label hamburger "Menu" if unavoidable |
| Hover-triggered dropdowns | Requires precision; no mobile equivalent | Click/tap trigger with `aria-expanded` |
| Navigation changes between pages | Breaks consistency and spatial memory | Same nav structure on every page |
| "Creative" placements (side, bottom) | Users expect nav at top | Keep nav at top of page |
| Infinite scroll with no persistent nav | Users lose orientation | Sticky nav + back-to-top button |
| Icon-only nav items without labels | Ambiguous meaning; accessibility failure | Always include text labels |
| Dropdown on hover that closes on mouseout | Frustrating on imprecise input | Click trigger, close on outside click or Escape |

## Internal Linking Strategy

- **3-click rule:** Every page reachable within 3 clicks from homepage
- **Cross-link related pages:** Reinforces information scent ("If you liked Services, see Case Studies")
- **CTA destinations:** Link to conversion pages specifically, not generic "Contact"
- **Anchor links:** Use for long pages — jump-to-section navigation
- **Breadcrumbs + nav:** Both active simultaneously for deep IA structures

## Navigation Pattern Decision Table

| Project Complexity | Items | Recommended Pattern |
|-------------------|-------|-------------------|
| Single-page / portfolio | 3-5 | Scroll-based anchor nav, no hamburger |
| Simple business site | 5-7 | Horizontal bar, CTA right, sticky on scroll |
| SaaS / product site | 7-10 | Horizontal bar + 1-2 grouped dropdowns |
| Content-heavy / blog | 8-12 | Horizontal bar + category dropdowns + search |
| Enterprise B2B | 15+ | Mega menu with columns, search, sticky |
| E-commerce | 10-50+ categories | Mega menu + faceted sidebar on category pages |

## Sticky Nav Implementation

```css
.nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in oklch, var(--color-surface) 90%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-subtle);
}
```

Use `backdrop-filter` for a frosted glass effect. The nav stays readable while scrolling content remains subtly visible behind it.

## Nav HTML Structure

```html
<a href="#main-content" class="skip-link">Skip to content</a>

<header class="nav-wrapper">
  <nav aria-label="Primary">
    <a href="/" class="nav-logo">
      <img src="/logo.svg" alt="Company Name" width="120" height="32">
    </a>

    <ul class="nav-links" role="list">
      <li><a href="/services" aria-current="page">Services</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <a href="/get-started" class="nav-cta">Get Started</a>

    <button
      class="nav-toggle"
      aria-expanded="false"
      aria-controls="mobile-menu"
      aria-label="Menu"
    >
      <span>Menu</span>
    </button>
  </nav>
</header>

<main id="main-content">
  <!-- Page content -->
</main>
```
