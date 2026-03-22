<!-- ================================================================
  GWD Reference: Psychological Design Principles
  Loaded by: web-strategist, web-ia-architect, web-copywriter, web-layout-architect
  Constraint: <300 lines (hard limit)
  Sources: GWD spec sections 11-12, Perplexity research, UX research canon
  ================================================================ -->

# Psychological Design Principles

Apply these principles when making decisions about strategy, content structure,
information architecture, and layout. Every rule includes a practical directive.

---

## Hick's Law

Decision time increases logarithmically with the number of options.
Every additional choice adds ~log2 to the decision time.

### Rules

- Max 3-4 CTAs per page. Exactly one must be visually primary.
- Primary navigation: 5-7 items max (crossover with Miller's Law).
- Pricing tables: max 3-4 tiers. Always highlight the recommended tier.
- Forms: use progressive disclosure. Show fields as needed, never all at once.
- Dropdown menus: if a select has >10 options, use search/filter or group them.
- Mobile: reduce choices further. One primary CTA per viewport.

### Anti-Patterns

- Mega-menus with 30+ ungrouped links.
- Landing pages with equal-weight "Learn More," "Sign Up," "Contact," "Download," "Watch Demo" all in the hero.
- Footer navs treated as site maps (keep footers functional, not exhaustive).

---

## Miller's Law

Working memory holds 7 plus or minus 2 chunks of information.

### Rules

- Group navigation items into categories: max 7 top-level items.
- Chunk content into scannable sections. No walls of text.
- Feature lists: group into 3-4 categories of 3-4 features each (not 12 flat items).
- Phone numbers and codes: chunk into groups of 3-4 digits (e.g., 089 123 4567).
- Step-by-step processes: max 5-7 steps visible at once. If more, use pagination or stages.
- Dashboard metrics: group into logical clusters of 3-4 KPIs.

### Practical Test

Count the distinct information chunks on any screen. If the count exceeds 9, restructure or group.

---

## Fogg Behavior Model

Behavior = Motivation x Ability x Trigger. All three must be present simultaneously.

### Motivation Drivers

- Pleasure / pain
- Hope / fear
- Social acceptance / rejection

### Ability (Reduce Friction)

- Fewer steps to complete action
- Less thinking required (clear labels, obvious next step)
- Less effort (pre-filled forms, smart defaults, single sign-on)
- Lower cost (free trials, money-back guarantees remove financial friction)

### Trigger (CTA Placement)

- Place CTAs after proof sections where motivation is highest.
- Make the triggered action one click (ability is high).
- Repeat the primary CTA at natural decision points (after testimonials, after pricing, at page end).
- Match trigger urgency to motivation level: "Start Free Trial" after feature proof, "Get a Quote" after case study.

### Anti-Patterns

- CTA in hero before visitor understands the product (trigger before motivation).
- "Buy Now" with no social proof, pricing, or product explanation above it.
- Long forms as the only conversion path (kills ability).

---

## Information Scent

Users follow "scent" -- they predict where links lead based on labels, context, and visual cues. Weak scent causes abandonment.

### Rules

- Strong scent: "View pricing plans" -- user knows exactly what they will see.
- Weak scent: "Learn more" -- user has no idea what they will learn. Avoid this.
- Navigation labels must match the heading of the page they link to (label = page heading).
- Breadcrumbs reinforce scent for structures deeper than 2 levels.
- Headings are the primary scent carriers. Users scan headings, not body text.
- Link text must describe the destination, not the action: "Pricing" not "Click here."

### Copywriter Rule

Every heading on a page must answer: "What will I learn or get in this section?" If the heading does not answer that, rewrite it.

---

## Progressive Disclosure

Show primary information first. Provide detail on demand.

### Patterns and When to Use Them

| Pattern            | Use For                          | Example                              |
|--------------------|----------------------------------|--------------------------------------|
| Accordions         | FAQ, technical specs, changelogs | FAQ section with 8+ questions        |
| Conditional forms  | Enterprise lead gen              | Fields appear based on prior input   |
| Staged processes   | Onboarding, pricing calculators  | Multi-step wizard (3-5 steps)        |
| Tooltips / modals  | Glossary terms, feature details  | "What is SSO?" tooltip on pricing    |
| Tabs               | Feature categories, plan details | "Features / Integrations / Security" |
| "Show more" toggle | Long lists, testimonials         | Show 3 testimonials, reveal 6 more   |

### Rules

- If a section has >5 items, consider progressive disclosure.
- B2B conversion insight: progressive disclosure significantly increases conversion by preventing cognitive overload.
- Never hide primary CTAs or core value propositions behind disclosure.
- Default-open the most important accordion item (e.g., most common FAQ).

---

## Fitts's Law

Larger, closer targets are faster to click. Time to target = f(distance / size).

### Rules

- CTAs: minimum 44x44px touch target (also a WCAG 2.5.5 requirement).
- Primary CTA must be the largest clickable element in its section.
- Place CTAs near the content that motivates the click (proximity matters).
- Mobile: place primary actions in the thumb zone (bottom-center of screen).
- Sticky headers with CTA: keep the primary action always reachable.
- Do not place destructive actions (delete, cancel) near primary actions.

---

## Von Restorff Effect (Isolation Effect)

Distinctive elements are noticed and remembered. The item that breaks the pattern wins attention.

### Rules

- Primary CTA must be visually unique: different color, size, or weight from secondary actions.
- Pricing: add a "Most Popular" or "Recommended" badge on the target tier.
- Use visual contrast (color, border, scale) to isolate the preferred option.
- Do not make everything bold or distinctive. If everything stands out, nothing does.
- Limit distinctive elements to 1-2 per viewport. More dilutes the effect.

---

## Scanning Patterns

Users do not read web pages. They scan. Layout must support the dominant scan pattern.

### Z-Pattern

Eye moves: top-left -> top-right -> diagonal to bottom-left -> bottom-right.

- Use for: CTA-focused landing pages, hero sections, simple layouts.
- Place logo/brand top-left, key message top-right, supporting content bottom-left, primary CTA bottom-right.
- Works best with minimal content and clear visual hierarchy.

### F-Pattern

Eye scans the left edge for headings, then reads selectively right.

- Use for: blog posts, documentation, SaaS feature pages, content-heavy pages.
- Place headings and key terms on the left edge.
- Front-load sentences: put the important word first in each line.
- Use bold, subheadings, and bullet points to create scan anchors.

---

## Page Type Decision Matrix

Use this table to select scanning pattern and primary psychological principles per page type.

| Page Type              | Scan Pattern | Primary Principles                          | Key Action                        |
|------------------------|--------------|---------------------------------------------|-----------------------------------|
| Performance LP         | Z-Pattern    | Hick's (1 CTA), Von Restorff, Fogg          | Single conversion CTA             |
| Homepage               | Z then F     | Information Scent, Miller's, Hick's         | Navigate to key section           |
| Pricing page           | F-Pattern    | Hick's (max 4 tiers), Von Restorff          | Select plan                       |
| SaaS feature page      | F-Pattern    | Progressive Disclosure, Miller's            | Explore features, then CTA        |
| Blog / article         | F-Pattern    | Information Scent, Miller's (chunking)      | Read, then internal link / CTA    |
| Contact / lead gen     | Z-Pattern    | Fogg (reduce friction), Fitts's             | Submit form                       |
| Documentation          | F-Pattern    | Information Scent, Progressive Disclosure   | Find answer                       |
| Case study             | F-Pattern    | Fogg (build motivation), Information Scent  | Read proof, then CTA              |
| About / team page      | F-Pattern    | Miller's (chunk bios), Von Restorff         | Build trust                       |
| E-commerce product     | F then Z     | Fitts's, Von Restorff, Hick's              | Add to cart                       |

---

## Quick Reference Checklist

Apply to every page before finalizing layout and content:

- [ ] Count CTAs. Is there exactly one primary? Are total CTAs <= 4?
- [ ] Count top-level nav items. Are they <= 7?
- [ ] Check information chunks per screen. Are they <= 9?
- [ ] Verify CTA placement follows Fogg: is it after motivation-building content?
- [ ] Test information scent: does every link/heading clearly predict its destination?
- [ ] Check for progressive disclosure: are sections with >5 items collapsed?
- [ ] Verify primary CTA is >= 44x44px and visually distinct (Von Restorff).
- [ ] Confirm scanning pattern matches page type (see decision matrix above).
- [ ] Mobile: is the primary CTA in the thumb zone?
