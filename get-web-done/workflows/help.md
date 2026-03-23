<purpose>
Display the complete GWD command reference. Output ONLY the reference content. Do NOT add project-specific analysis, git status, next-step suggestions, or any commentary beyond the reference.
</purpose>

<reference>
# GWD Command Reference

**GWD** (Get Web Done) is a structured, phase-driven web design and development system for Claude Code. From briefing to deployed, agency-quality websites.

## Quick Start

1. `/web:new` — Start a new project (guided briefing)
2. `/web:strategy` — Develop positioning and messaging
3. `/web:sitemap` — Plan information architecture
4. `/web:design-system` — Create design tokens and visual system
5. `/web:content` — Write copy per page
6. `/web:layout` — Define layout structure per page
7. `/web:build` — Generate code in chosen stack
8. `/web:qa` — Run quality audits

## Core Workflow

```
/web:new → /web:strategy → /web:sitemap → /web:design-system
→ /web:content → /web:layout → /web:build → /web:qa
```

### Phase 0: Intake

**`/web:new`**
Start a new web project. Asks: New or Redesign? Runs guided briefing conversation.

- Captures: company, product, audience, competitors, goals, brand, tech preferences
- Helps with thin info — researches industry, asks probing follow-ups
- Redesign path: auto-runs `/web:audit` on existing URL
- Optional: asks for reference sites → runs `/web:inspire`

Creates: `BRIEF.md`, `PROJECT.md`, `STATE.md`, `PROGRESS.md`, `config.json`

Usage: `/web:new`

**`/web:audit <url>`**
Audit an existing website via Playwright.

- Scores across 6 dimensions: performance, accessibility, SEO, content, design, compliance
- Extracts specific findings with actionable recommendations
- Used automatically during redesign path of `/web:new`

Creates: `AUDIT.md`

Usage: `/web:audit https://example.com`

**`/web:inspire <url> [url2] [url3]`**
Analyze reference websites for design intelligence.

- Extracts: color palettes, typography, layout patterns, visual tone, navigation
- Up to 3 URLs per invocation
- Findings feed into Strategy and Design System phases

Creates: `INSPIRATION.md`, `research/inspiration/*.md`

Usage: `/web:inspire https://stripe.com https://linear.app`

### Phase 1: Strategy

**`/web:strategy`**
Develop brand positioning, messaging framework, personas, and conversion strategy.

- Audits BRIEF.md for low-confidence items, categorizes gaps by criticality
- Resolves critical gaps through reasoning, research (spawns web-researcher), or user questions
- **Deep Discovery (mandatory):** Collects client-specific stories, processes, and beliefs
  before positioning. Adapts questions to project type (freelancer/startup/B2B/SaaS).
- Develops positioning with **Self-Review Gate** — internal quality check ensuring
  no generic, category-level messaging reaches the user
- Produces: positioning statement, messaging framework, 2-3 personas, conversion strategy,
  tone guide with Do/Don't examples, SEO/GEO approach, resolved low-confidence items table

Creates: `STRATEGY.md`

Usage: `/web:strategy`

### Phase 2: Information Architecture

**`/web:sitemap`**
Plan information architecture: pages, sections, navigation, user flows.

- Reads STRATEGY.md for page purpose alignment
- Plans section structure per page (Hero, Problem, Solution, Proof, CTA, FAQ, etc.)
- Defines navigation structure and internal linking strategy
- Creates initial page spec skeletons

Creates: `SITEMAP.md`, `pages/*/SPEC.md`

Usage: `/web:sitemap`

### Phase 3: Design System

**`/web:design-system`**
Create design tokens: colors (OKLCH), fluid typography, spacing, component inventory.

- Derives color palette mathematically from brand hue
- Generates fluid type scale via clamp()
- Creates spacing and sizing tokens
- Documents component inventory with specs

Creates: `design-system/DESIGN-SYSTEM.md`, `design-system/tokens.css`, `design-system/COMPONENTS.md`

Usage: `/web:design-system`

### Phase 4: Content & Copy

**`/web:content [page]`**
Write copy per page section. Follows messaging framework and CRO patterns.

- Without argument: runs for all pages
- With argument: runs for specified page only
- Each page runs in a fresh agent context
- Follows tone, messaging, and conversion strategy from STRATEGY.md

Creates: `pages/*/CONTENT.md`

Usage: `/web:content` or `/web:content pricing`

### Phase 5: Layout & Components

**`/web:layout [page]`**
Define layout structure per page. Section order, components, responsive behavior.

- Without argument: runs for all pages
- Maps content sections to component choices
- Defines grid structure, responsive breakpoints
- Creates shared component specs

Creates: `pages/*/LAYOUT.md`, `components/*.md`

Usage: `/web:layout` or `/web:layout homepage`

### Phase 6: Code Generation

**`/web:build [page]`**
Generate code in chosen tech stack. Wave execution with parallel sub-agents.

- Without argument: builds all pages
- Sub-agents per page/component run in fresh contexts
- Each sub-agent gets only: page SPEC, CONTENT, LAYOUT, design tokens, stack reference
- Atomic git commits per completed component/page

Creates: Source code + git commits

Usage: `/web:build` or `/web:build homepage about`

### Phase 7: Quality Assurance

**`/web:qa [page]`**
Run quality audits: Lighthouse, WCAG, SEO, compliance, anti-slop.

- Parallel audit sub-agents for each dimension
- Without argument: audits everything
- Produces scored results with specific findings and fix plans

Creates: `qa/LIGHTHOUSE.md`, `qa/WCAG-AUDIT.md`, `qa/SEO-CHECK.md`, `qa/COMPLIANCE.md`, `QA-REPORT.md`

Usage: `/web:qa` or `/web:qa homepage`

**`/web:fix`**
Auto-apply fixes from QA findings. Re-runs affected audits to verify.

- Reads QA reports and generates fix plans
- Applies fixes with atomic commits
- Re-runs relevant audits to confirm resolution

Usage: `/web:fix`

## Navigation & Status

**`/web:progress`**
Full project overview: current phase, page statuses, what's next, stale artifacts.

- Always available at any point in the workflow
- Shows phase completion table with per-page tracking
- Highlights stale artifacts from revisions

Usage: `/web:progress`

**`/web:next`**
Auto-detect and run the next logical step.

- Reads STATE.md and PROGRESS.md
- Determines what phase/page needs attention next
- Runs it automatically

Usage: `/web:next`

**`/web:status [phase]`**
Detailed status of a specific phase or page. More granular than `/web:progress`.

Usage: `/web:status strategy` or `/web:status homepage`

## Iteration & Revision

**`/web:revise <phase> [page]`**
Return to a previous phase and update its artifact.

- Marks downstream artifacts as potentially stale
- Dependency propagation ensures nothing is missed
- `/web:next` guides through updating stale artifacts in order

Usage: `/web:revise strategy` or `/web:revise content homepage`

**`/web:update-content [page]`**
Quick content update without full workflow.

- Updates CONTENT.md directly
- Marks LAYOUT.md and source code as potentially stale

Usage: `/web:update-content pricing`

**`/web:add-page <name>`**
Add a new page to the project.

- Creates page spec from IA architect
- Updates SITEMAP.md and navigation
- Marks phases 4-6 as needed for this page

Usage: `/web:add-page case-studies`

**`/web:remove-page <name>`**
Remove a page from the project.

- Updates SITEMAP.md, navigation components, internal links
- Cleans up page directory

Usage: `/web:remove-page blog`

## Quick Mode

**`/web:quick`**
Ad-hoc change with quality guards. Plans, executes, verifies in mini-workflow.

- For medium-sized changes outside the main phase flow
- Tracked in `.webdesign/quick/`

Usage: `/web:quick`

**`/web:tweak`**
Minimal change without planning. Direct execution with anti-slop check.

- For tiny changes only (color, text, spacing)
- No planning overhead

Usage: `/web:tweak`

## Utility

**`/web:settings`**
Configure tech stack, model profiles, workflow toggles, MCP servers.

- Updates `.webdesign/config.json`
- Set framework (Astro/Next.js/SvelteKit), styling, components, hosting

Usage: `/web:settings`

**`/web:export`**
Export design system as Figma-compatible JSON tokens, style guide, or deployment-ready bundle.

Usage: `/web:export`

**`/web:help`**
Show this command reference.

## Project State

All artifacts live in `.webdesign/` in the user's project:

```
.webdesign/
├── PROJECT.md              # Project vision (compact, <50 lines)
├── BRIEF.md                # Complete briefing
├── STRATEGY.md             # Positioning, messaging, personas
├── SITEMAP.md              # Information architecture
├── STATE.md                # Current phase, decisions, blockers
├── PROGRESS.md             # Phase status with per-page tracking
├── config.json             # Stack, preferences, model profiles
├── design-system/          # Tokens, typography, colors, components
├── pages/                  # Per-page artifacts (SPEC, CONTENT, LAYOUT)
├── components/             # Shared component specifications
├── qa/                     # Quality audit results
├── research/               # Competitor, industry, keyword research
└── quick/                  # Ad-hoc task tracking
```

## Common Workflows

**New website from scratch:**

```
/web:new                    # Guided briefing → BRIEF.md
/web:strategy               # Positioning & messaging → STRATEGY.md
/web:sitemap                # Pages & navigation → SITEMAP.md
/web:design-system          # Colors, type, spacing → tokens.css
/web:content                # Copy for all pages
/web:layout                 # Layout structure for all pages
/web:build                  # Code generation
/web:qa                     # Quality audits
```

**Redesign an existing site:**

```
/web:new                    # Select "Redesign" → auto-audits existing URL
/web:inspire https://...    # Analyze reference sites you admire
/web:strategy               # Strategy informed by audit findings
# ...continue as above
```

**Resume after a break:**

```
/web:progress               # See where you left off
/web:next                   # Continue with next logical step
```

**Client changed their mind about positioning:**

```
/web:revise strategy        # Update STRATEGY.md
/web:progress               # See which artifacts are now stale
/web:next                   # Update stale artifacts in dependency order
```

**Add a page mid-project:**

```
/web:add-page case-studies  # Creates spec, queues content/layout/build
/web:content case-studies   # Write copy for new page
/web:layout case-studies    # Define layout
/web:build case-studies     # Generate code
```
</reference>
