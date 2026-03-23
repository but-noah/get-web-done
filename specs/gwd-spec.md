# GET WEB DONE — Complete System Specification v1.1

**A structured, agentic web design and development system for Claude Code.**
**From briefing to deployed, agency-quality websites — reproducible, strategic, optimized.**

---

## Table of Contents

1. [Vision & Identity](#1-vision--identity)
2. [Research Foundation & Decision Rationale](#2-research-foundation--decision-rationale)
3. [System Architecture Overview](#3-system-architecture-overview)
4. [Repository Structure](#4-repository-structure)
5. [Project State Directory (.webdesign/)](#5-project-state-directory-webdesign)
6. [Phases — The Agency Process](#6-phases--the-agency-process)
7. [Commands — Complete Reference with Next-Step Routing](#7-commands--complete-reference-with-next-step-routing)
8. [Agents — Specialized Sub-Agents](#8-agents--specialized-sub-agents)
9. [Workflows — Phase Logic](#9-workflows--phase-logic)
10. [Hooks — Deterministic Enforcement](#10-hooks--deterministic-enforcement)
11. [Reference Files — Embedded Domain Knowledge](#11-reference-files--embedded-domain-knowledge)
12. [Design Best Practices — The Anti-Slop Framework](#12-design-best-practices--the-anti-slop-framework)
13. [Cherry-Picking Map — External Skills Integration](#13-cherry-picking-map--external-skills-integration)
14. [Skill Invocation Architecture](#14-skill-invocation-architecture)
15. [Context Budget Management](#15-context-budget-management)
16. [Rücksprung-Mechanik — Revision & Dependency Propagation](#16-rücksprung-mechanik--revision--dependency-propagation)
17. [Multi-Page Management](#17-multi-page-management)
18. [MCP Server Integration](#18-mcp-server-integration)
19. [Configuration Schema (config.json)](#19-configuration-schema-configjson)
20. [Installer](#20-installer)
21. [Templates — All Output Formats Explained](#21-templates--all-output-formats-explained)
22. [Tech Stack Defaults & Framework Support](#22-tech-stack-defaults--framework-support)
23. [v1 Scope vs. v2 Roadmap](#23-v1-scope-vs-v2-roadmap)
24. [Design Principles & Anti-Patterns](#24-design-principles--anti-patterns)
25. [Testing & Quality Assurance of the System Itself](#25-testing--quality-assurance-of-the-system-itself)

---

## 1. Vision & Identity

### Name
**Get Web Done (GWD)**

### Tagline
"Agency-quality websites. Structured AI process. Zero AI slop."

### Command Namespace
`/web:` — all commands prefixed with `/web:`

### Project State Directory
`.webdesign/` — all project artifacts live here

### npm Package
`get-web-done-cc`

### GitHub Repository
`get-web-done`

### What GWD Is
A structured, phase-driven system that guides Claude Code through the complete web design and development process — from client briefing through strategy, information architecture, design system, copywriting, layout, code generation, and quality assurance. It mirrors how the best web agencies in the world work, encoded as commands, agents, workflows, and reference files.

### What GWD Is Not
- Not a theme generator or template engine
- Not a "vibe coding" tool — every decision is deliberate and documented
- Not a replacement for design judgment — it amplifies expertise, not replaces it
- Not locked to one tech stack — opinionated defaults with escape hatches

### Core Problem It Solves
Claude Code can generate websites, but without structure it produces "AI slop": generic layouts, purple gradients, Inter font, hollow copy, no strategy, no accessibility, no performance optimization. GWD eliminates this by enforcing a professional agency process where every phase has clear inputs, outputs, quality gates, and human touchpoints.

### Target Users
- Solo developers/designers delivering agency-quality websites
- Small agencies using AI to scale output
- Technical marketers building high-converting landing pages
- Anyone who wants reproducible, strategic, optimized web results from Claude Code

### Architectural Predecessor: GSD (Get Shit Done)

GWD's architecture is directly inspired by **Get Shit Done (GSD)** — an open-source meta-prompting and spec-driven development framework for Claude Code created by TÂCHES (Lex Christopherson). As of March 2026, GSD has 38,000+ GitHub stars, 3,100+ forks, and is trusted by engineers at Amazon, Google, Shopify, and Webflow. It is widely considered the most effective system for making Claude Code reliable for complex projects.

**What GSD does:** GSD solves "context rot" — the quality degradation that happens as Claude fills its 200K-token context window during long coding sessions. It does this by breaking projects into small, well-defined tasks, each executed by specialized sub-agents in fresh context windows. The main session stays lean (30-40% context) while heavy lifting happens in isolated, pristine environments.

**How GSD works technically:** GSD is built entirely from Markdown files and shell scripts — no TypeScript, no build step. Commands (in `commands/gsd/`) are thin XML-structured triggers that reference workflow files. Workflows (in `get-shit-done/workflows/`) contain detailed orchestration logic. Agents (in `agents/`) are Markdown files with XML sections defining role, philosophy, tool strategy, and output formats. Templates define exact output structures. Hooks fire deterministically at lifecycle events. All state persists to `.planning/` on disk — if a session crashes, `/gsd:progress` restores full awareness.

**GSD's core workflow:** `/gsd:new-project` (questions → research → requirements → roadmap) → `/gsd:discuss-phase N` (capture implementation preferences) → `/gsd:plan-phase N` (research + create task plans in XML) → `/gsd:execute-phase N` (parallel sub-agents in fresh contexts, atomic git commits per task) → `/gsd:verify-work N` (user acceptance testing) → Loop until done → `/gsd:complete-milestone`.

**Why GWD is separate from GSD:** GSD is tech-agnostic and process-generic — it works equally well for building an API, a CLI tool, or a mobile app. The user defines their own phases. GWD is domain-specific: it encodes the web design agency process as predefined phases (Intake → Strategy → IA → Design System → Content → Layout → Code → QA). GWD's agents are specialists (Copywriter, Strategist, Layout Architect) not generalists (Researcher, Planner, Executor). GWD includes domain knowledge (WCAG checklists, typography scales, German compliance rules) that GSD doesn't need.

**What GWD borrows from GSD:** The layer model (Commands → Workflows → Agents → Templates → References), XML prompt formatting, sub-agent orchestration in fresh contexts, state persistence via files, atomic git commits, hook-based enforcement, model profile system (Opus/Sonnet/Haiku per agent role), and the installer pattern (`npx` package that copies files to `.claude/`).

**What GWD adds beyond GSD:** Predefined domain phases, specialized web design agents, embedded design/accessibility/compliance knowledge, the audit/inspiration features (Playwright-based), multi-page management, revision/dependency propagation (Rücksprung-Mechanik), and integration with external marketing/design skill ecosystems.

For deep-dive on GSD: `https://github.com/gsd-build/get-shit-done`

---

## 2. Research Foundation & Decision Rationale

This specification is not based on assumptions. It is the synthesis of extensive research documented in the project knowledge base. Three independent deep-research reports were commissioned — from Claude, Gemini, and Perplexity — all answering the same prompt about modern, strategic, AI-assisted web development. Additionally, a comprehensive base guideline document was prepared covering web development standards, frameworks, and best practices.

### Source Documents (available in project knowledge)

**Document 1: "Gesamtbericht Web Design & Web Development 2025/2026"** — The comprehensive base guideline. Contains detailed specifications for WCAG compliance, Core Web Vitals optimization, CSS architecture (Grid/Flexbox/Container Queries/Subgrid), typography systems, color management, navigation patterns, performance budgets, SEO/GEO strategies, German legal compliance (BFSG, TDDDG, Impressum, DSGVO), and framework comparisons. This document is the primary reference for all technical standards encoded in GWD's reference files.

**Document 2: "#2 Claude — Claude Code & Google Products for Professional Web Development in 2026"** (~543 lines, English) — The most technically detailed report. Provides: concrete Claude Code version numbers and pricing, MCP server ecosystem details (5,800+ servers, specific URLs and configurations), the complete Skills 1.0/2.0 architecture, GSD framework analysis, framework comparison tables (Astro 5/6, Next.js 16, SvelteKit/Svelte 5), Tailwind v4 specifics, shadcn/ui CLI v4 details, modern CSS features with browser support data, SEO/GEO statistics (527% YoY growth in AI-referred sessions, 60% zero-click searches), German compliance specifics (VG Hannover ruling, §5 DDG, BFSG, ePrivacy withdrawal), and sustainability metrics (W3C WSG, CO2.js).

**Document 3: "#2 Gemini — Architekturen und Strategien für KI-gestützte, hochkonvertierende B2B-Web-Experiences im Jahr 2026"** (~128 lines, German) — The most intellectually deep report. Provides: the cognitive psychology foundations (Hick's Law, Miller's Law, Fogg Behavior Model, Information Scent), the Skills 1.0 vs. 2.0 comparison table (the clearest in all three), the "Forked Context Mode" concept for preventing context rot, the APCA algorithm for WCAG 3.0 preparation, Progressive Disclosure patterns with concrete B2B examples (accordions, conditional forms, staging, tooltips), Brand Maps as mathematical identity representations, and the "agency-web-builder" plugin blueprint with directory structure.

**Document 4: "#2 Perplexity — Research"** (~285 lines, German/English mix) — The most pragmatic report. Provides: the source-referenced methodology (45 numbered references to NNG, MDN, Smashing Magazine, web.dev), the page-type decision matrix (Performance Landing, SaaS Landing, Blog, B2B Site, Personal Site) with columns for Layout, Copy, Navigation, and Focus, the 7-phase workflow (Kickoff → Strategy Brief → Design System → Components → Copy → Code → QA → Learning Loop), and the MCP server setup recommendations.

### Key Decisions and Their Research Basis

**Why predefined phases instead of user-defined (like GSD):**
The Gemini report articulates that chaotic "vibe coding" must be replaced by "strict, immutable phases." The Perplexity report structures the same workflow into 7 phases backed by NNG and Baymard research. All three reports independently converge on the same sequence: Strategy → IA → Design → Content → Code → QA. This is how professional web agencies work universally — the process doesn't need to be invented per project, only customized.

**Why OKLCH for colors instead of HSL or Hex:**
The Claude report documents that oklch() with color-mix() condensed one case study's 900-line color system to 80 lines. OKLCH provides perceptual uniformity (equal lightness steps look equal to the human eye), P3 gamut support, and mathematical palette derivation from a single brand hue. The Gemini report confirms OKLCH as the modern standard for CSS-first design tokens.

**Why Container Queries over media queries for components:**
All three reports agree: Container Queries (@container) enable component-level responsiveness independent of viewport width. The Gemini report explains the paradigm shift most clearly — a pricing card uses the same CSS whether placed in a one-column hero or a three-column grid. The Perplexity report cites MDN and CSS working group recommendations confirming production readiness since 2024/2025.

**Why Subgrid is now production-ready:**
The Perplexity report specifically references MDN's removal of the "Firefox only" warning and cites the GitHub issue (#16863) where the community confirmed cross-browser support. Subgrid solves the perennial problem of feature grids and pricing tables with uneven content heights — elements align to parent grid lines automatically.

**Why Fluid Typography with clamp() instead of breakpoint-based:**
The Perplexity report cites Smashing Magazine and clampgenerator.com showing that clamp()-based type scales reduce media queries, maintain consistent visual hierarchy across viewports, and prevent the "brüllen auf Desktop / versumpfen auf Mobile" problem. The Gemini report provides the mathematical foundation: base 1rem, scale ratio 1.25 (data-dense) or 1.333 (marketing), calculated via CSS pow().

**Why GEO optimization is mandatory, not optional:**
The Claude report provides the most compelling data: 527% year-over-year growth in AI-referred sessions (first 5 months 2025), 60% of searches ending without a click (Bain, February 2025), 93% zero-click rate in Google's AI Mode. The paradox: users who DO click through show 23% lower bounce, 41% longer time on site. Fewer visitors but dramatically more qualified ones. All three reports converge on: answer-first content, statistics every 150-200 words, structured data (JSON-LD), llms.txt, freshness signals.

**Why German compliance is a dedicated system component:**
The Claude report is the only one covering this comprehensively, and the specifics are severe: BFSG effective June 28, 2025 with no transition period, VG Hannover ruling requiring equal "Reject All" button, Munich Court ruling that auto-reply email doesn't satisfy Impressum requirements, ePrivacy Regulation officially withdrawn. These rules are so specific and legally binding that manual compliance checking is insufficient — they must be automated into the QA phase.

**Why Playwright MCP for auditing and inspiration:**
The Gemini report explains that Playwright MCP allows the AI agent to "see" the rendered interface, test interactions, and measure network latencies. For audits, this means real rendering (not just HTML parsing). For inspiration analysis, this means extracting actual computed styles, colors, and typography from live sites — not guessing from screenshots.

**Why marketingskills, designer-skills, and web-quality-skills as Tier 1 dependencies:**
Extensive ecosystem research (March 2026) identified these three repositories as the highest-quality, most actively maintained skill collections in their respective domains. marketingskills (12,600+ stars, by Corey Haines/Conversion Factory) has battle-tested CRO, copywriting, and SEO skills with a product-marketing-context foundation pattern that aligns with our BRIEF.md approach. designer-skills (by MC Dean, 63 skills, 27 commands) covers the full UX process from research to handoff. web-quality-skills (by Addy Osmani/Google) focuses on performance, accessibility, and SEO quality gates. Together they cover our entire Phase 1-7 domain knowledge without us needing to write everything from scratch.

---

## 3. System Architecture Overview

### Layer Model

GWD follows the same proven layer model as GSD (see §1 for GSD explanation):

```
┌─────────────────────────────────────────────────────────────┐
│  COMMANDS  (User-facing, /web:* namespace)                  │
│  Thin triggers that reference workflows                     │
│  Format: XML <objective>, <execution_context>, <process>    │
├─────────────────────────────────────────────────────────────┤
│  WORKFLOWS  (Detailed step-by-step phase logic)             │
│  Orchestration instructions, gates, routing                 │
│  Referenced by commands via @path                           │
├─────────────────────────────────────────────────────────────┤
│  AGENTS  (Specialized sub-agents in fresh contexts)         │
│  Format: <role>, <philosophy>, <tool_strategy>, <outputs>   │
│  12 domain-specific agents                                  │
├─────────────────────────────────────────────────────────────┤
│  TEMPLATES  (Output format definitions)                     │
│  Exact structure for every generated artifact               │
│  BRIEF.md, STRATEGY.md, PAGE-SPEC.md, etc.                 │
├─────────────────────────────────────────────────────────────┤
│  REFERENCES  (Domain knowledge, loaded on demand)           │
│  WCAG checklists, typography patterns, compliance rules     │
│  Only loaded when relevant agent is active                  │
├─────────────────────────────────────────────────────────────┤
│  HOOKS  (Deterministic pre/post-action scripts)             │
│  Auto-format, accessibility checks, anti-slop guards        │
│  Always execute, unlike skills which are suggestions        │
├─────────────────────────────────────────────────────────────┤
│  SKILLS  (Auto-loading background knowledge)                │
│  External: designer-skills, marketingskills, web-quality    │
│  Internal: design-system-knowledge, css-patterns, etc.      │
└─────────────────────────────────────────────────────────────┘
```

### Why This Layer Model (Research Basis)

This architecture was chosen because research into GSD's internal structure revealed that its effectiveness comes from separating concerns: Commands are thin (just XML pointers), workflows contain the real logic, agents have focused expertise, and templates enforce output consistency. A codecentric.de deep-dive into GSD's anatomy confirmed: "Communication between agents happens exclusively via files" and "the orchestrator never does heavy lifting — it spawns agents, waits, integrates results." This separation is what prevents context rot and ensures reproducible quality.

### Communication Pattern
All communication between agents happens exclusively via files in `.webdesign/`. No in-memory state survives across sessions. The Orchestrator reads `STATE.md` at session start and knows exactly where the project stands.

### Context Management Strategy
Each phase runs its primary agent in a fresh sub-agent context window (200K tokens). The Orchestrator stays lean (30-40% context usage). Heavy lifting (research, writing, coding) happens in isolated contexts that receive only the files they need. This is the core insight from GSD that we adopt: "Every task gets the full power of Claude's 200K context window" because it runs in a pristine environment, not one polluted by prior conversation.

---

## 4. Repository Structure

```
get-web-done/
├── bin/
│   └── install.js                    # npx installer (Node.js)
│
├── commands/web/                     # User-facing slash commands
│   ├── new.md                        # /web:new
│   ├── audit.md                      # /web:audit
│   ├── inspire.md                    # /web:inspire
│   ├── strategy.md                   # /web:strategy
│   ├── sitemap.md                    # /web:sitemap
│   ├── design-system.md              # /web:design-system
│   ├── content.md                    # /web:content
│   ├── layout.md                     # /web:layout
│   ├── build.md                      # /web:build
│   ├── qa.md                         # /web:qa
│   ├── fix.md                        # /web:fix
│   ├── progress.md                   # /web:progress
│   ├── next.md                       # /web:next
│   ├── status.md                     # /web:status
│   ├── revise.md                     # /web:revise
│   ├── add-page.md                   # /web:add-page
│   ├── remove-page.md                # /web:remove-page
│   ├── update-content.md             # /web:update-content
│   ├── quick.md                      # /web:quick
│   ├── tweak.md                      # /web:tweak
│   ├── settings.md                   # /web:settings
│   ├── export.md                     # /web:export
│   └── help.md                       # /web:help
│
├── agents/                           # Specialized sub-agent definitions
│   ├── web-orchestrator.md           # Main routing agent
│   ├── web-intake.md                 # Briefing & audit agent
│   ├── web-strategist.md             # Positioning & messaging agent
│   ├── web-ia-architect.md           # Information architecture agent
│   ├── web-design-system.md          # Design tokens & system agent
│   ├── web-copywriter.md             # Content & copy agent
│   ├── web-layout-architect.md       # Layout & component structure agent
│   ├── web-builder.md                # Code generation agent
│   ├── web-qa-auditor.md             # Quality assurance agent
│   ├── web-researcher.md             # Domain & competitor research agent
│   ├── web-inspiration-analyst.md    # Reference site analysis agent
│   └── web-compliance-checker.md     # German/EU legal compliance agent
│
├── get-web-done/                     # Core system files
│   ├── workflows/                    # Detailed phase orchestration logic
│   │   ├── new-project.md            # Full new project flow
│   │   ├── redesign-project.md       # Redesign flow (with audit)
│   │   ├── intake-phase.md           # Briefing workflow
│   │   ├── audit-phase.md            # Playwright-based audit workflow
│   │   ├── inspiration-phase.md      # Reference site analysis workflow
│   │   ├── strategy-phase.md         # Strategy development workflow
│   │   ├── sitemap-phase.md          # IA planning workflow
│   │   ├── design-system-phase.md    # Token & system generation workflow
│   │   ├── content-phase.md          # Copywriting workflow (per page)
│   │   ├── layout-phase.md           # Layout definition workflow (per page)
│   │   ├── build-phase.md            # Code generation workflow (wave execution)
│   │   ├── qa-phase.md               # Quality audit workflow
│   │   ├── fix-phase.md              # Auto-fix from QA findings
│   │   ├── revision-phase.md         # Rücksprung/revision workflow
│   │   └── quick-mode.md             # Ad-hoc task workflow
│   │
│   ├── templates/                    # Output format definitions (see §21 for details)
│   │   ├── brief.md                  # BRIEF.md template
│   │   ├── audit-report.md           # AUDIT.md template
│   │   ├── inspiration-report.md     # INSPIRATION.md template
│   │   ├── strategy.md               # STRATEGY.md template
│   │   ├── sitemap.md                # SITEMAP.md template
│   │   ├── page-spec.md              # PAGE-SPEC template (per page)
│   │   ├── design-system.md          # DESIGN-SYSTEM.md template
│   │   ├── tokens-css.md             # tokens.css template
│   │   ├── content-page.md           # Content file template (per page)
│   │   ├── layout-page.md            # Layout file template (per page)
│   │   ├── component-spec.md         # Component specification template
│   │   ├── qa-report.md              # QA-REPORT.md template
│   │   ├── progress.md               # PROGRESS.md template
│   │   └── state.md                  # STATE.md template
│   │
│   └── references/                   # Domain knowledge files (see §11 for details)
│       ├── accessibility/
│       │   ├── wcag-2.2-aa-checklist.md
│       │   ├── wcag-3-preparation.md
│       │   └── bfsg-requirements.md
│       ├── performance/
│       │   ├── core-web-vitals.md
│       │   ├── performance-budgets.md
│       │   └── sustainability.md
│       ├── seo-geo/
│       │   ├── technical-seo.md
│       │   ├── geo-optimization.md
│       │   └── local-seo-germany.md
│       ├── compliance-de/
│       │   ├── impressum.md
│       │   ├── consent-management.md
│       │   └── dsgvo-web.md
│       ├── design/
│       │   ├── anti-slop.md
│       │   ├── typography.md
│       │   ├── color-systems.md
│       │   ├── layout-patterns.md
│       │   ├── psychology.md
│       │   └── navigation-patterns.md
│       └── stacks/
│           ├── astro.md
│           ├── nextjs.md
│           ├── sveltekit.md
│           ├── tailwind-v4.md
│           └── shadcn-ui.md
│
├── hooks/                            # Deterministic enforcement scripts
│   ├── hooks.json                    # Hook registration
│   ├── post-write-format.sh          # Auto-format after file write
│   ├── post-write-a11y-check.sh      # Basic accessibility lint after HTML/JSX write
│   ├── pre-write-anti-slop.sh        # Block generic patterns before write
│   └── pre-commit-quality.sh         # Pre-commit quality gate
│
├── skills/                           # Auto-loading background knowledge skills
│   ├── web-standards/
│   │   └── SKILL.md                  # WCAG, CWV, semantic HTML (user-invocable: false)
│   ├── design-intelligence/
│   │   └── SKILL.md                  # Anti-slop, visual hierarchy, typography (user-invocable: false)
│   ├── conversion-patterns/
│   │   └── SKILL.md                  # CRO patterns, psychology, information scent (user-invocable: false)
│   └── german-compliance/
│       └── SKILL.md                  # BFSG, TDDDG, Impressum, EU AI Act (user-invocable: false)
│
├── scripts/                          # Utility scripts
│   ├── lighthouse-runner.sh          # Run Lighthouse audit
│   ├── axe-runner.sh                 # Run axe-core accessibility audit
│   └── screenshot-pages.sh           # Screenshot all pages via Playwright
│
├── tests/                            # System tests
│   └── eval/                         # Evaluation harnesses per agent
│
├── .gitignore
├── CHANGELOG.md
├── LICENSE                           # MIT
├── package.json
├── package-lock.json
├── README.md
└── SECURITY.md
```

---

## 5. Project State Directory (.webdesign/)

Every GWD project stores all artifacts in `.webdesign/`. This is the single source of truth. Claude reads `STATE.md` and `PROGRESS.md` at every session start to know where the project stands. This mirrors GSD's `.planning/` directory but with web-design-specific semantics.

```
.webdesign/
├── PROJECT.md                  # Project vision — always loaded (compact, <50 lines)
├── BRIEF.md                    # Complete briefing from intake phase
├── AUDIT.md                    # [Redesign only] Analysis of existing site
├── INSPIRATION.md              # [Optional] Analysis of reference sites
├── STRATEGY.md                 # Positioning, messaging, personas, goals
├── SITEMAP.md                  # Information architecture, pages, navigation
├── STATE.md                    # Current position, decisions, blockers (session memory)
├── PROGRESS.md                 # Phase overview with status per page
├── config.json                 # Stack, preferences, model profiles, workflow toggles
│
├── design-system/
│   ├── DESIGN-SYSTEM.md        # Human-readable design system documentation
│   ├── tokens.css              # CSS Custom Properties (OKLCH colors, fluid type, spacing)
│   ├── tailwind.config.ts      # [If Tailwind] Generated config with @theme tokens
│   └── COMPONENTS.md           # Component inventory with specs
│
├── pages/                      # Per-page artifacts (one subdirectory per page)
│   ├── homepage/
│   │   ├── SPEC.md             # Page specification (merged IA + content + layout)
│   │   ├── CONTENT.md          # Copy: headlines, body, CTAs, microcopy
│   │   ├── LAYOUT.md           # Section order, components, responsive behavior
│   │   └── STATUS.md           # Page-level status tracking
│   ├── about/
│   │   ├── SPEC.md
│   │   ├── CONTENT.md
│   │   ├── LAYOUT.md
│   │   └── STATUS.md
│   └── pricing/
│       ├── SPEC.md
│       ├── CONTENT.md
│       ├── LAYOUT.md
│       └── STATUS.md
│
├── components/                 # Shared component specifications
│   ├── navbar.md
│   ├── footer.md
│   ├── hero.md
│   ├── cta-section.md
│   └── testimonial-strip.md
│
├── qa/                         # Quality audit results
│   ├── LIGHTHOUSE.md           # Performance audit results + fixes
│   ├── WCAG-AUDIT.md           # Accessibility audit results + fixes
│   ├── SEO-CHECK.md            # Technical SEO audit results + fixes
│   ├── COMPLIANCE.md           # BFSG, Impressum, Consent, DSGVO check
│   └── FIX-PLANS/              # Auto-generated fix plans from QA
│       ├── 001-lcp-optimization.md
│       └── 002-contrast-fixes.md
│
├── research/                   # All research artifacts
│   ├── competitors.md          # Competitor analysis
│   ├── industry.md             # Industry/market research
│   ├── tech-stack.md           # Stack decision documentation
│   ├── inspiration/            # Reference site analyses
│   │   ├── site-1.md
│   │   └── site-2.md
│   └── keywords.md             # SEO/GEO keyword research
│
└── quick/                      # Ad-hoc task tracking
    ├── 001-add-social-proof/
    │   ├── PLAN.md
    │   └── SUMMARY.md
    └── 002-update-hero-copy/
        ├── PLAN.md
        └── SUMMARY.md
```

### File Size Guidelines
Based on GSD research into where Claude's quality degrades — staying under these limits ensures consistent output quality:

- `PROJECT.md`: <50 lines (loaded every session)
- `BRIEF.md`: <200 lines
- `STRATEGY.md`: <150 lines
- `SITEMAP.md`: <100 lines
- `STATE.md`: <50 lines (compact session memory)
- `PROGRESS.md`: Auto-generated, variable length
- Per-page CONTENT.md: <150 lines each
- Per-page LAYOUT.md: <100 lines each
- Design System docs: <200 lines total across files
- Reference files: <300 lines each (loaded on demand only)

---

## 6. Phases — The Agency Process

GWD enforces a structured, sequential agency process. Phases are **predefined** (not user-defined like GSD) because the web design process is always the same sequence — as confirmed independently by all three research reports. However, phases can be **skipped** if not relevant (e.g., skip Audit for new projects, skip Inspiration if no reference sites).

### Phase Overview

```
┌──────────────────────────────────────────────────────────────────────┐
│  PHASE 0: INTAKE                                                     │
│  /web:new → New or Redesign? → Briefing → BRIEF.md                  │
│  [Redesign: /web:audit <url> → AUDIT.md]                            │
│  [Optional: /web:inspire <url> → INSPIRATION.md]                    │
│  User touchpoint: Answers questions, approves brief                  │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 1: STRATEGY                                                   │
│  /web:strategy → Positioning, Messaging, Personas → STRATEGY.md     │
│  User touchpoint: Reviews and approves strategy                      │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 2: INFORMATION ARCHITECTURE                                   │
│  /web:sitemap → Pages, Sections, Navigation → SITEMAP.md            │
│  User touchpoint: Approves IA before content begins                  │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 3: DESIGN SYSTEM                                              │
│  /web:design-system → Tokens, Typography, Colors → design-system/   │
│  User touchpoint: Approves visual direction                          │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 4: CONTENT & COPY                                             │
│  /web:content [page] → Copy per section → pages/*/CONTENT.md        │
│  User touchpoint: Reviews and edits copy                             │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 5: LAYOUT & COMPONENTS                                        │
│  /web:layout [page] → Wireframe descriptions → pages/*/LAYOUT.md   │
│  User touchpoint: Approves layout structure                          │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 6: CODE GENERATION                                            │
│  /web:build [page] → Actual code in chosen stack                    │
│  Sub-agents per page/component in fresh contexts (wave execution)   │
│  User touchpoint: Reviews generated code                             │
├──────────────────────────────────────────────────────────────────────┤
│  PHASE 7: QUALITY ASSURANCE                                          │
│  /web:qa [page] → Lighthouse, WCAG, SEO, Compliance → qa/          │
│  /web:fix → Auto-apply fixes from QA                                │
│  User touchpoint: Final review before launch                         │
└──────────────────────────────────────────────────────────────────────┘
```

### Phase 0: Intake — Detail

**Trigger:** `/web:new`

**Flow:**
1. System asks: "New website or redesign?"
2. **If New:**
   - Guided briefing conversation: Company, product/service, target audience (ICP), competitors, business goals, conversion goals, existing brand assets, budget constraints, timeline, geographic focus, compliance requirements
   - Claude actively helps if info is thin — researches the industry, asks probing follow-up questions, suggests gaps the user hasn't considered
   - User approves the complete brief
3. **If Redesign:**
   - User provides URL
   - System runs `/web:audit <url>` automatically (see Audit sub-flow)
   - Briefing conversation focuses on: What's wrong with current site? What should change? What should stay?
   - Audit findings feed into the brief
4. **Optional — Inspiration:**
   - System asks: "Do you have reference websites you like?"
   - If yes: `/web:inspire <url1> <url2> <url3>` analyzes them via Playwright
   - Extracts: Color palettes, typography choices, layout patterns, visual tone, navigation patterns, content density
   - Saved to `.webdesign/research/inspiration/`

**Agents involved:** web-intake, web-researcher (for industry research), web-inspiration-analyst (for reference sites)

**Input files:** None (fresh start) or existing URL (redesign)

**Output files:** `BRIEF.md`, optionally `AUDIT.md`, `INSPIRATION.md`, `research/competitors.md`, `research/industry.md`

**User touchpoints:** Answers briefing questions, approves final BRIEF.md

**Next-step routing after completion:**
```
✅ Intake complete. BRIEF.md created and approved.

Your options:
  /web:strategy     → [RECOMMENDED] Develop positioning, messaging and conversion strategy
  /web:inspire <url> → Analyze additional reference websites before strategy
  /web:progress      → View full project status
  /web:revise intake → Make changes to the brief

Tip: A strong strategy is the foundation for everything. Don't skip this phase.
```

### Phase 1: Strategy — Detail

**Trigger:** `/web:strategy`

**Flow:**
1. Strategist agent reads `BRIEF.md` (and `AUDIT.md`, `INSPIRATION.md` if they exist)
2. Audits brief for low-confidence items, categorizes by criticality
3. Resolves critical gaps through reasoning, research (spawns web-researcher), or user questions
4. **Deep Discovery (mandatory):** Collects client-specific stories, processes, beliefs, and decisions before any positioning work. Category knowledge alone produces generic output. Questions adapt to project type (freelancer/startup/B2B/SaaS/personal). Completion requires: one unique story/fact, one belief/principle, one explicit "not this."
5. Develops positioning with **Self-Review Gate** (internal quality check before user sees it):
   - Competitor Test: could a competitor say the same thing?
   - Anchor Test: is every claim anchored in Deep Discovery material?
   - Recognition Test: will the client say "that's exactly me"?
6. Builds:
   - **Positioning statement** (for whom, what, why different -- anchored in Deep Discovery)
   - **Messaging framework** (primary message, supporting messages with proof points)
   - **Target personas** (2-3 with goals, pain points, objections, decision criteria)
   - **Conversion strategy** (primary CTA, secondary CTAs, trust architecture)
   - **Content tone & voice** (specific adjectives, do/don't examples from this project)
   - **SEO/GEO strategy** (target keywords, GEO approach, content structure for AI citation)
7. User reviews and iterates

**Agents involved:** web-strategist, web-researcher (optional)

**Input files:** `BRIEF.md`, `AUDIT.md` (optional), `INSPIRATION.md` (optional), `research/*`

**Output files:** `STRATEGY.md`

**Referenced external skills:** `product-marketing-context` (marketingskills), `positioning` (BrianRWagner), `competitor-pages` (marketingskills), `geo-optimization` (marketingskills), designer-skills `/strategize` workflow logic

**Referenced internal references:** `seo-geo/geo-optimization.md`, `design/psychology.md`

**Next-step routing after completion:**
```
✅ Strategy complete. STRATEGY.md created and approved.

Your options:
  /web:sitemap       → [RECOMMENDED] Plan information architecture, pages and navigation
  /web:revise strategy → Make changes to the strategy
  /web:progress       → View full project status
  /web:quick          → Handle an ad-hoc task outside the main workflow

Tip: The sitemap defines what pages you'll build and what content goes where.
     Every page needs a clear purpose tied to your conversion strategy.
```

### Phase 2: Information Architecture — Detail

**Trigger:** `/web:sitemap`

**Flow:**
1. IA Architect reads `STRATEGY.md`
2. Plans:
   - **Page inventory** (all pages with purpose and priority)
   - **Section structure per page** (ordered sections with purpose: Hero, Problem, Solution, Proof, CTA, FAQ, etc.)
   - **Navigation structure** (primary nav, footer nav, mobile nav, breadcrumbs)
   - **User flows** (primary conversion path, secondary paths)
   - **Internal linking strategy** (information scent optimization)
   - **Z-pattern vs F-pattern** decision per page type (Z for CTA-focused landing pages, F for content-heavy pages — per Perplexity research)
3. Creates initial PAGE-SPEC.md files per page (skeleton)
4. User approves before content creation begins

**Agents involved:** web-ia-architect

**Input files:** `STRATEGY.md`, `BRIEF.md`

**Output files:** `SITEMAP.md`, `pages/*/SPEC.md` (initial skeletons)

**Referenced internal references:** `design/psychology.md` (information scent, progressive disclosure), `design/navigation-patterns.md`

**Next-step routing after completion:**
```
✅ Information Architecture complete. SITEMAP.md and page specs created.

Pages planned: homepage, about, pricing, blog (4 pages)

Your options:
  /web:design-system  → [RECOMMENDED] Create color tokens, typography, spacing system
  /web:add-page <name> → Add another page to the sitemap
  /web:revise sitemap  → Make changes to the information architecture
  /web:progress        → View full project status

Tip: The design system defines the visual language. It needs to be in place
     before content and layout can begin.
```

### Phase 3: Design System — Detail

**Trigger:** `/web:design-system`

**Flow:**
1. Design System agent reads `STRATEGY.md` (brand vibe, audience) and `INSPIRATION.md` (visual direction)
2. Generates (see §12 for detailed design best practices):
   - **Color tokens** in OKLCH with semantic naming (--color-primary, --color-surface, --color-text, etc.)
   - **Typography scale** using clamp() for fluid sizing (base 16-18px, ratio 1.25 or 1.333)
   - **Font selection** (max 2-3 fonts with specific weights, variable fonts preferred)
   - **Spacing scale** (mathematical, typically 4px or 8px base)
   - **Border radius tokens**
   - **Shadow/elevation tokens**
   - **Breakpoint definitions** (with container query sizes)
   - **Grid system** (12-column with subgrid support)
   - **Component inventory** (list of all needed components with basic specs)
   - **Light/dark mode strategy** (if applicable)
3. Outputs as both human-readable documentation AND real CSS/Tailwind config
4. Never uses pure #000 or #fff — always brand-tinted neutrals
5. User approves visual direction

**Agents involved:** web-design-system

**Input files:** `STRATEGY.md`, `INSPIRATION.md` (optional), `BRIEF.md`

**Output files:** `design-system/DESIGN-SYSTEM.md`, `design-system/tokens.css`, `design-system/tailwind.config.ts` (if Tailwind), `design-system/COMPONENTS.md`

**Referenced external skills:** `frontend-design` (Anthropic), `ui-ux-pro-max-skill` design database, `interface-design` memory pattern, designer-skills token/component skills

**Referenced internal references:** `design/anti-slop.md`, `design/typography.md`, `design/color-systems.md`

**Next-step routing after completion:**
```
✅ Design System complete. Tokens, typography, and component inventory created.

Generated: tokens.css (OKLCH colors, fluid type, spacing), COMPONENTS.md (14 components)
Font stack: [selected fonts]
Color direction: [primary color description]

Your options:
  /web:content         → [RECOMMENDED] Write copy for all pages
  /web:content homepage → Write copy for homepage only
  /web:revise design-system → Adjust colors, typography, or spacing
  /web:progress         → View full project status

Tip: Content should come before layout. The copy determines section length,
     which determines the layout structure. "Content first, design second."
```

### Phase 4: Content & Copy — Detail

**Trigger:** `/web:content [page-name]` (without argument: all pages sequentially)

**Flow per page:**
1. Copywriter agent reads `STRATEGY.md` (messaging framework, tone), page `SPEC.md` (sections), `design-system/DESIGN-SYSTEM.md` (constraints)
2. For each section defined in the page spec:
   - Writes headline, subheadline, body copy, CTA text, microcopy
   - Follows messaging framework from strategy
   - Applies information scent principles (clear, descriptive labels)
   - Uses progressive disclosure (primary info visible, detail behind interactions)
   - No marketing jargon, no filler, no "AI slop" phrases
   - Specific word counts per element (headline <10 words, subheadline <25 words, etc.)
3. Each copy element includes a brief rationale (why this message, which persona it targets)
4. User reviews and iterates per page

**Agents involved:** web-copywriter

**Input files:** `STRATEGY.md`, `pages/[page]/SPEC.md`, `design-system/DESIGN-SYSTEM.md`

**Output files:** `pages/[page]/CONTENT.md`

**Referenced external skills:** `copywriting` (marketingskills), `copy-editing` (marketingskills), `page-cro` (marketingskills), `ai-seo` (marketingskills)

**Referenced internal references:** `seo-geo/geo-optimization.md`, `design/psychology.md`

**Next-step routing after completion (per page):**
```
✅ Content complete for: homepage

Sections written: Hero, Problem, Solution, Features, Social Proof, CTA, FAQ (7 sections)

Your options:
  /web:content about    → [NEXT PAGE] Write copy for the about page
  /web:layout homepage  → Define layout structure for homepage
  /web:revise content homepage → Edit the homepage copy
  /web:progress          → View full project status

Tip: Review each headline against your positioning statement in STRATEGY.md.
     Does every section advance the conversion argument?

When all pages have content:
  /web:layout           → [RECOMMENDED] Define layouts for all pages
```

### Phase 5: Layout & Components — Detail

**Trigger:** `/web:layout [page-name]` (without argument: all pages sequentially)

**Flow per page:**
1. Layout agent reads page `SPEC.md`, `CONTENT.md`, `design-system/*`
2. For each section:
   - Defines component choice (Hero variant, Feature Grid, Testimonial Strip, etc.)
   - Specifies grid/flex structure (CSS Grid for page macro-layout, Flexbox for component internals, Container Queries for modularity, Subgrid for cross-card alignment)
   - Defines responsive behavior (desktop → tablet → mobile transitions)
   - Specifies scroll sequence and visual rhythm
   - Assigns design tokens to each element
   - Notes animation/interaction intentions (scroll-driven, hover states, view transitions)
3. Defines shared components (navbar, footer) that appear across pages
4. User approves layout structure before code generation

**Agents involved:** web-layout-architect

**Input files:** `pages/[page]/SPEC.md`, `pages/[page]/CONTENT.md`, `design-system/*`, `SITEMAP.md`

**Output files:** `pages/[page]/LAYOUT.md`, `components/*.md`

**Referenced external skills:** designer-skills `/layout` command, Vercel agent-skills `composition-patterns`, `web-design-guidelines`

**Referenced internal references:** `design/layout-patterns.md`, `design/anti-slop.md`, `design/navigation-patterns.md`

**Next-step routing after completion (per page):**
```
✅ Layout complete for: homepage

Components used: Hero (variant: split), FeatureGrid (3-col), TestimonialStrip,
                 PricingTeaser, FAQ (accordion), FooterCTA
Grid: 12-column CSS Grid, Subgrid for feature cards

Your options:
  /web:layout about      → [NEXT PAGE] Define layout for about page
  /web:build homepage     → Generate code for homepage
  /web:revise layout homepage → Change the layout structure
  /web:progress           → View full project status

When all pages have layouts:
  /web:build              → [RECOMMENDED] Generate code for the full site
```

### Phase 6: Code Generation — Detail

**Trigger:** `/web:build [page-name]` (without argument: full site)

**Flow:**
1. Builder agent reads all prior artifacts
2. If first build: Scaffolds project in chosen stack (Astro, Next.js, SvelteKit, etc.)
3. **Wave execution** (parallel where possible, like GSD's wave model):
   - **Wave 1:** Shared setup — design tokens, base layout, global CSS, font loading
   - **Wave 2:** Shared components — navbar, footer, CTA sections (parallel sub-agents)
   - **Wave 3:** Individual pages (parallel sub-agents per page, each in fresh 200K context)
   - **Wave 4:** Integration — connecting pages, internal links, navigation, sitemap generation
4. Each sub-agent gets: page SPEC, CONTENT, LAYOUT, design-system tokens, stack reference file
5. Uses Context7 MCP for up-to-date framework documentation
6. Each completed component/page gets its own atomic git commit
7. Code enforces (see §12 Design Best Practices for rationale):
   - CSS Grid for page layouts, Flexbox for component internals
   - Container Queries for component-level responsiveness
   - Subgrid for cross-element alignment
   - Semantic HTML (nav, main, article, section, aside)
   - `loading="lazy"` on all images except LCP image
   - `fetchpriority="high"` on LCP image
   - Proper `alt` attributes on all images
   - Fluid typography via clamp()
   - Design tokens from tokens.css (no magic numbers)

**Agents involved:** web-builder (orchestrator), multiple web-builder sub-agents (per page/component)

**Input files:** Everything in `.webdesign/`

**Output files:** Actual source code in the project directory

**Referenced external skills:** Context7 MCP (live framework docs), `frontend-design` (Anthropic)

**Referenced internal references:** `stacks/[chosen-stack].md`, `design/layout-patterns.md`, `performance/core-web-vitals.md`

**Next-step routing after completion:**
```
✅ Build complete. Site generated in Astro + Tailwind v4.

Pages built: homepage, about, pricing, blog (4 pages)
Components: Navbar, Footer, Hero, FeatureGrid, TestimonialStrip, PricingTable, FAQ, CTASection
Git commits: 12 atomic commits

Your options:
  /web:qa              → [RECOMMENDED] Run full quality audit (Lighthouse, WCAG, SEO, Compliance)
  /web:build pricing   → Rebuild a specific page
  /web:revise layout homepage → Go back to layout changes (will rebuild)
  /web:quick           → Make a quick ad-hoc change
  /web:progress        → View full project status

Tip: Always run /web:qa before considering the site done.
     Automated testing catches issues you won't see by eye.
```

### Phase 7: Quality Assurance — Detail

**Trigger:** `/web:qa [page-name]` (without argument: full site)

**Flow:**
1. QA agent runs multiple audit sub-agents in parallel:
   - **Performance audit:** Lighthouse via Playwright, Core Web Vitals targets (LCP <2.5s, INP <200ms, CLS <0.1), page weight budget (<1MB, ideal <500KB)
   - **Accessibility audit:** axe-core for WCAG 2.2 AA, focus order testing, color contrast verification, touch target sizes (min 44x44px per WCAG 2.2), keyboard navigation
   - **SEO audit:** Schema.org validation, meta tags, heading hierarchy (single H1), sitemap, robots.txt, canonical URLs, hreflang (if multilingual), OpenGraph tags
   - **GEO audit:** Answer-first content structure, statistics density, structured data completeness, llms.txt presence, freshness signals
   - **Compliance audit (Germany/EU):** Impressum completeness (§5 DDG), consent management setup (TDDDG §25, VG Hannover ruling), BFSG requirements, privacy policy, EU AI Act disclosure (if chatbot present)
   - **Anti-slop audit:** Checks for generic patterns (default Inter font, purple gradients, identical card layouts, stock placeholder text, "Learn more" without context)
   - **Sustainability check:** CO2 per page view estimate (target <1g), green hosting verification
2. Each audit produces a report with: Score/status, specific findings with severity (critical/major/minor), concrete fix suggestions with code changes
3. Findings are compiled into qa/ reports
4. `/web:fix` auto-applies fixes and re-runs affected audits

**Agents involved:** web-qa-auditor (orchestrator), parallel sub-agents for each audit type, web-compliance-checker

**Input files:** Built code, qa/ reports

**Output files:** `qa/LIGHTHOUSE.md`, `qa/WCAG-AUDIT.md`, `qa/SEO-CHECK.md`, `qa/COMPLIANCE.md`, `qa/FIX-PLANS/*.md`

**MCP servers used:** Playwright (for automated testing), Chrome DevTools (for live metrics)

**Referenced internal references:** `accessibility/wcag-2.2-aa-checklist.md`, `performance/core-web-vitals.md`, `compliance-de/*.md`, `seo-geo/technical-seo.md`

**Next-step routing after completion:**
```
✅ QA complete. Results:

  Performance:   92/100  (1 major: LCP image not preloaded)
  Accessibility: 96/100  (2 minor: missing aria-labels on icon buttons)
  SEO:           98/100  (1 minor: missing alt on decorative image)
  Compliance:    ✅ Pass  (Impressum, Consent, BFSG all verified)
  Anti-Slop:     ✅ Pass  (No generic patterns detected)
  Sustainability: 0.4g CO2/pageview ✅

3 fix plans generated in qa/FIX-PLANS/

Your options:
  /web:fix             → [RECOMMENDED] Auto-apply all fixes and re-run audits
  /web:qa homepage     → Re-run QA on specific page
  /web:revise content  → Go back and edit content if needed
  /web:progress        → View full project status
  /web:export          → Export deployment-ready bundle

🎉 When all audits pass: Your site is ready for deployment!
```

---

## 7. Commands — Complete Reference with Next-Step Routing

Every command, after completion, presents the user with clear options for what to do next. This ensures the user is never lost in the process. The routing pattern is:

```
✅ [Phase/Action] complete. [Summary of what was created.]

Your options:
  /web:[recommended]   → [RECOMMENDED] [What this does and why it's next]
  /web:[alternative1]  → [Alternative action with explanation]
  /web:[alternative2]  → [Another option]
  /web:progress        → View full project status (always available)
  /web:revise [phase]  → Go back and make changes (always available)

Tip: [Contextual advice for this stage of the project]
```

### Core Workflow Commands

| Command | Phase | Description | Agent(s) | Primary Output |
|---------|-------|-------------|----------|----------------|
| `/web:new` | 0 | Start new project. Asks: New or Redesign. Guided briefing. | web-intake, web-researcher | `BRIEF.md`, `PROJECT.md`, `config.json` |
| `/web:audit <url>` | 0 | Crawl existing site via Playwright. Score design, performance, SEO, accessibility, content. | web-intake, web-qa-auditor | `AUDIT.md` |
| `/web:inspire <url> [url2] [url3]` | 0 | Analyze reference sites: colors, typography, layout patterns, visual tone. | web-inspiration-analyst | `INSPIRATION.md`, `research/inspiration/*.md` |
| `/web:strategy` | 1 | Positioning, messaging framework, personas, conversion strategy, SEO/GEO plan. | web-strategist, web-researcher | `STRATEGY.md` |
| `/web:sitemap` | 2 | Information architecture: pages, sections, navigation, user flows. | web-ia-architect | `SITEMAP.md`, `pages/*/SPEC.md` |
| `/web:design-system` | 3 | Design tokens: colors (OKLCH), fluid typography, spacing, component inventory. | web-design-system | `design-system/*` |
| `/web:content [page]` | 4 | Copywriting per page. Without arg: all pages. | web-copywriter | `pages/*/CONTENT.md` |
| `/web:layout [page]` | 5 | Layout structure per page. Section order, components, responsive. | web-layout-architect | `pages/*/LAYOUT.md`, `components/*.md` |
| `/web:build [page]` | 6 | Code generation. Wave execution with parallel sub-agents. | web-builder (+ sub-agents) | Source code + git commits |
| `/web:qa [page]` | 7 | Quality audit: Lighthouse, WCAG, SEO, compliance, anti-slop. | web-qa-auditor (+ sub-agents) | `qa/*` |
| `/web:fix` | 7 | Auto-apply QA fixes, re-run affected audits. | web-builder | Updated code + qa/ updates |

### Navigation & Status Commands

| Command | Description | When to use |
|---------|-------------|-------------|
| `/web:progress` | Full project overview: current phase, page statuses, what's next, any stale artifacts. | At any time. Always available. Like GSD's `/gsd:progress`. |
| `/web:next` | Auto-detect next logical step and run it. Reads `STATE.md` and `PROGRESS.md`. | When you want to continue without remembering which phase is next. |
| `/web:status [phase]` | Detail status of a specific phase or page. | When you want to drill into one area. |
| `/web:help` | Show all commands with descriptions and examples. | When you need to see what's available. |

### Iteration & Revision Commands

| Command | Description | When to use |
|---------|-------------|-------------|
| `/web:revise <phase> [page]` | Return to a previous phase. Updates the artifact, marks downstream artifacts as "potentially stale". See §16. | When strategy, content, or design direction changes. |
| `/web:update-content [page]` | Quick content update without full workflow. Updates CONTENT.md, marks LAYOUT.md and code as potentially stale. | When only copy needs changing, not structure. |
| `/web:add-page <name>` | Add new page to project. Runs phases 2-6 for this page only. | When scope expands mid-project. |
| `/web:remove-page <name>` | Remove page. Updates SITEMAP.md, navigation components, and internal links. | When scope shrinks. |

### Quick Mode Commands

| Command | Description | When to use |
|---------|-------------|-------------|
| `/web:quick` | Ad-hoc change with quality guards. Plans, executes, verifies in mini-workflow. Tracked in `.webdesign/quick/`. | "Add a testimonial section to homepage." Medium changes. |
| `/web:tweak` | Minimal change without planning. Direct execution with anti-slop check. | "Change the CTA button color." Tiny changes. |

### Utility Commands

| Command | Description | When to use |
|---------|-------------|-------------|
| `/web:settings` | Configure: tech stack, model profiles, workflow toggles, MCP servers. Writes to `config.json`. | At project start or when changing preferences. |
| `/web:export` | Export design system as Figma-compatible JSON tokens, style guide as Markdown/PDF, or deployment-ready bundle. | When handing off to another team or deploying. |

---

## 8. Agents — Specialized Sub-Agents

Each agent is a Markdown file in `agents/` with XML-structured sections following the GSD pattern. GSD uses 12 agent definitions — we use 12 as well, but specialized for the web design domain.

### Agent File Format

```xml
<agent>
  <n>web-strategist</n>
  <role>
    You are a senior brand strategist and positioning expert. You develop 
    messaging frameworks, audience personas, and conversion strategies 
    for B2B websites, SaaS landing pages, and marketing sites.
  </role>
  
  <philosophy>
    - Strategy must be specific and actionable, not generic platitudes
    - Every positioning claim must be defensible with evidence
    - Personas must include real objections and decision criteria, not demographics alone
    - Messaging must pass the "so what?" test — every statement earns its place
    - Be opinionated: "Use X because Y" not "Options include X, Y, Z"
  </philosophy>
  
  <tool_strategy>
    - Read BRIEF.md and all research/ files before starting
    - Use web-researcher sub-agent for competitor deep-dives if needed
    - Use AskUserQuestion when brief is ambiguous on positioning
    - Write output following @templates/strategy.md format exactly
  </tool_strategy>
  
  <context_loading>
    Always load: BRIEF.md, PROJECT.md
    Load if exists: AUDIT.md, INSPIRATION.md, research/*
    Never load: design-system/*, pages/*, qa/*
  </context_loading>
  
  <output_formats>
    Primary: STRATEGY.md following @templates/strategy.md
    Must include: positioning statement, messaging framework, 2-3 personas, 
    conversion strategy, content tone guide, SEO/GEO approach
  </output_formats>
  
  <referenced_skills>
    @marketingskills/product-marketing-context
    @marketingskills/positioning (via competitor-pages)
    @marketingskills/geo-optimization
    @designer-skills/strategy/*
    @references/seo-geo/geo-optimization.md
    @references/design/psychology.md
  </referenced_skills>
</agent>
```

### Complete Agent Registry

| Agent | Role | Spawns Sub-Agents? | Fresh Context? |
|-------|------|-------------------|----------------|
| **web-orchestrator** | Main routing agent. Reads STATE.md, routes to correct phase/agent. | Yes — dispatches all other agents | No (runs in main context) |
| **web-intake** | Conducts briefing conversation. Helps with thin info. Manages redesign audit flow. | Yes — web-researcher, web-inspiration-analyst | No (main context — interactive) |
| **web-researcher** | Domain research: industry, competitors, tech stack decisions, keyword research. | No | Yes |
| **web-inspiration-analyst** | Analyzes reference URLs via Playwright. Extracts visual patterns, colors, typography, layouts. | No | Yes |
| **web-strategist** | Brand positioning, messaging framework, personas, conversion strategy. | Optional — web-researcher | No (main context — interactive) |
| **web-ia-architect** | Information architecture: sitemap, page sections, navigation, user flows. | No | No (main context — interactive) |
| **web-design-system** | Design tokens, typography scale, color system, component inventory. | No | Yes |
| **web-copywriter** | Writes copy per page section. Follows messaging framework and CRO patterns. | No | Yes (per page) |
| **web-layout-architect** | Defines layout structure per page. Component choices, grid, responsive. | No | Yes (per page) |
| **web-builder** | Code generation orchestrator. Manages wave execution. | Yes — sub-builders per page/component | Yes (sub-agents) |
| **web-qa-auditor** | Orchestrates quality audits: performance, a11y, SEO, compliance, anti-slop. | Yes — parallel audit sub-agents | Yes |
| **web-compliance-checker** | German/EU legal compliance: BFSG, TDDDG, Impressum, DSGVO, EU AI Act. | No | Yes |

**Note on context:** Agents marked "No (main context)" run in the user's active session because they need interactive conversation. Agents marked "Yes" are spawned as sub-agents in fresh 200K-token contexts. Agents marked "Yes (per page)" get a fresh context for each page they process.

### Model Profile Recommendations

| Profile | Strategy/Design | Content/Layout | Build/QA | Research |
|---------|----------------|----------------|----------|----------|
| **quality** | Opus | Opus | Sonnet | Sonnet |
| **balanced** (default) | Opus | Sonnet | Sonnet | Sonnet |
| **budget** | Sonnet | Sonnet | Sonnet | Haiku |

---

## 9. Workflows — Phase Logic

Each workflow file (in `get-web-done/workflows/`) contains the detailed orchestration logic for a phase. Workflows define:

- **Prerequisites** — what must exist before this phase can run
- **Gates** — approval points where the user must confirm
- **Agent dispatches** — which agents to spawn with which context files
- **Error handling** — what to do when agents produce insufficient output
- **Routing** — what to suggest as next step after completion (the next-step routing from §7)

### Example: Strategy Phase Workflow (simplified)

```xml
<workflow name="strategy-phase">
  <prerequisites>
    <required_files>
      <file>.webdesign/BRIEF.md</file>
    </required_files>
    <required_phase_status>
      <phase name="intake" status="complete"/>
    </required_phase_status>
  </prerequisites>

  <steps>
    <step name="load-context">
      Read @.webdesign/BRIEF.md
      Read @.webdesign/AUDIT.md if exists
      Read @.webdesign/INSPIRATION.md if exists
      Read all files in @.webdesign/research/ if directory exists
    </step>

    <step name="audit-and-resolve">
      Strategist reads BRIEF.md, identifies low-confidence items, categorizes gaps.
      Resolves critical gaps through reasoning, research (spawn web-researcher),
      or targeted user questions.
    </step>

    <step name="deep-discovery">
      MANDATORY. Collect client-specific stories, processes, beliefs, decisions.
      Adapt questions to project type. Must have 3 anchors before proceeding:
      one unique story/fact, one belief/principle, one "not this."
    </step>

    <step name="develop-positioning">
      Draft positioning internally. Run Self-Review Gate:
        - Competitor Test, Anchor Test, Recognition Test.
      Iterate internally up to 3 times. Present best version to user.
    </step>

    <step name="develop-messaging-and-conversion">
      Build messaging hierarchy, personas, conversion strategy, tone, SEO/GEO.
      Present block-by-block with user confirmation at each stage.
    </step>

    <step name="write-strategy" type="gate">
      Write STRATEGY.md following template. Present summary.
      If changes requested: update, re-present.
      If approved: mark phase complete.
    </step>

    <step name="update-state">
      Update STATE.md: strategy phase complete
      Update PROGRESS.md: mark phase 1 done
      Commit: "strategy: complete positioning and messaging framework"
    </step>

    <step name="next-step-routing">
      Present completion message with options (see §7 next-step routing for strategy phase)
    </step>
  </steps>
</workflow>
```

---

## 10. Hooks — Deterministic Enforcement

Hooks fire at specific Claude Code lifecycle events and **always execute** (unlike skills which are suggestions). The Gemini research report emphasized: "Mechanische Durchsetzung von Design-Prinzipien schlägt kontextuelles Prompting in jedem Fall" (Mechanical enforcement of design principles beats contextual prompting in every case).

### hooks.json

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write(*.html|*.astro|*.jsx|*.tsx|*.svelte)",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/post-write-a11y-check.sh \"$file\""
          },
          {
            "type": "command", 
            "command": "bash .claude/hooks/post-write-format.sh \"$file\""
          }
        ]
      },
      {
        "matcher": "Write(*.css|*.scss)",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/post-write-format.sh \"$file\""
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Write(*.html|*.astro|*.jsx|*.tsx|*.svelte)",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/pre-write-anti-slop.sh \"$file\""
          }
        ]
      }
    ]
  }
}
```

### Hook Descriptions

| Hook | Event | What it checks | Why (research basis) |
|------|-------|---------------|---------------------|
| `post-write-format.sh` | PostToolUse (Write) | Runs Prettier on written file | Consistent formatting prevents bikeshedding and improves readability |
| `post-write-a11y-check.sh` | PostToolUse (Write HTML/JSX) | Images have alt, links have text, buttons have accessible name, form inputs have labels, no tabindex >0 | BFSG requires WCAG 2.1 AA. Automated testing catches 30-57% of issues (Claude report). The remaining need manual testing, but catching the basics automatically is non-negotiable. |
| `pre-write-anti-slop.sh` | PreToolUse (Write HTML/JSX) | Warns if: inline styles detected, generic placeholder text ("Lorem ipsum", "Click here"), stock image URLs without project-specific alt text | The Gemini report's "Brand Maps" concept — the AI must never deviate from defined brand guidelines. Catching generic output before it's written is more efficient than cleaning up afterward. |
| `pre-commit-quality.sh` | Stop | Quick Lighthouse check, validates HTML semantics | Ensures no commit leaves the codebase in a degraded state. Per GSD's philosophy: "Every commit is surgical, traceable, and meaningful." |

---

## 11. Reference Files — Embedded Domain Knowledge

Reference files are the system's domain expertise. They load **on demand only** — when the relevant agent is active. Each file targets a specific knowledge area and stays under 300 lines. The content of these files is derived from the three research reports and the base guideline document (see §2).

### Accessibility References

**`wcag-2.2-aa-checklist.md`** — All 78 WCAG 2.2 AA success criteria, organized by principle (Perceivable, Operable, Understandable, Robust). Each criterion with: requirement summary, common failures, code examples for compliance, automated test possibility. Source: Base guideline document + Claude report's BFSG section. Why: BFSG mandates WCAG 2.1 AA for all B2C websites since June 2025 with no transition period.

**`wcag-3-preparation.md`** — APCA (Advanced Perceptual Contrast Algorithm) with Lc values. Bronze/Silver/Gold levels. Scoring system (0-4 per outcome). What to implement now for forward compatibility: centralized color tokens, APCA-aware contrast checking, outcome-based thinking. Source: Gemini report's detailed WCAG 2.2 vs. 3.0 comparison table. Why: WCAG 3.0 is in draft but the APCA algorithm changes how contrast is evaluated — projects built with centralized tokens can switch algorithmically when the standard is finalized.

**`bfsg-requirements.md`** — Barrierefreiheitsstärkungsgesetz specifics: effective since June 28, 2025. WCAG 2.1 AA as minimum. No transition period for websites. Microenterprise exemption (<10 employees AND <€2M). 78 success criteria mapping. Enforcement via Marktüberwachungsbehörden. Source: Claude report §9. Why: This is German law, not a guideline. Non-compliance exposes businesses to legal action.

### Performance References

**`core-web-vitals.md`** — LCP ≤2.5s (preload LCP image, fetchpriority="high"), INP ≤200ms (requestIdleCallback for analytics, defer non-critical JS), CLS ≤0.1 (explicit dimensions on images/embeds, aspect-ratio). Only 48% of mobile pages pass all three. Lab proxy: TBT for INP. Source: Claude report §4 + base guideline document. Why: Core Web Vitals are Google ranking factors and directly correlate with conversion rates — each second of delay reduces conversions by up to 20% (Gemini report).

**`performance-budgets.md`** — Target: <1MB total page weight (500KB ambitious), <100KB JavaScript, <200KB images (after compression). AVIF/WebP mandatory, JPEG/PNG only as fallback. Critical CSS inline, non-critical deferred. Font subsetting, max 2-3 font files. Source: Base guideline document + Claude report sustainability section. Why: Page weight directly determines load time and CO2 emissions. Astro's zero-JS default makes these budgets achievable.

**`sustainability.md`** — W3C Web Sustainability Guidelines (80+ guidelines, 225 success criteria). CO2.js for CI/CD integration. Target: <1g CO2 per page view. Hetzner as green hosting (TÜV-certified hydropower). Cloudflare CDN with renewable commitments. Dark mode for OLED energy savings. Shaving 1KB from a file on 2M sites reduces CO2 by ~2,950 kg/month. Source: Claude report §8. Why: Digital technology accounts for 3.7% of global carbon emissions — comparable to aviation. Sustainability is both ethical and increasingly a client requirement.

### SEO & GEO References

**`technical-seo.md`** — Schema.org JSON-LD (Article, Product, FAQPage, BreadcrumbList, LocalBusiness, HowTo). Sitemap generation. Meta tags (title <60 chars, description <160 chars). Canonical URLs. hreflang for multilingual. robots.txt. OpenGraph and Twitter Card tags. Source: Base guideline document + Claude report §7. Why: Technical SEO is the foundation that makes all content efforts visible to search engines and AI systems.

**`geo-optimization.md`** — Answer-first content (direct answer in first 40-60 words). Statistics every 150-200 words. llms.txt specification. Definite language over hedging. Freshness signals (last-updated dates). Entity authority via Schema.org. Structured data for AI parsing. Citation optimization per engine: ChatGPT favors encyclopedic content (Wikipedia = 47.9% of top cited sources), Perplexity favors recency within 90 days (Reddit = 46.7% of top sources). Source: Claude report §7 (Princeton research, up to 40% visibility boost) + Gemini report GEO section. Why: AI-referred sessions grew 527% YoY. 60% of searches end without a click. GEO is no longer optional — it's essential for visibility in 2026.

**`local-seo-germany.md`** — .de domain for trust. Google 87%+ market share in Germany. 60%+ mobile searches local intent. Native German keywords (compound words like "Ökostrom Anbieter"). Regional dialect awareness. Google Business Profile. Gelbe Seiten, Yelp Germany reviews. Consistent NAP. Sistrix as dominant German SEO tool. Source: Claude report §7. Why: German SEO has unique characteristics — translated English keywords don't work, compound nouns behave differently, and local trust signals differ from US markets.

### German/EU Compliance References

**`impressum.md`** — §5 DDG (since May 2024, replacing §5 TMG). Required: full name/company, complete postal address, functioning email (auto-reply to contact form does NOT comply per Munich Court Feb 2025), commercial register, VAT ID, ODR dispute link. Accessible within 2 clicks from any page. Source: Claude report §9. Why: Non-compliance can result in Abmahnungen (cease-and-desist letters) that cost €1,000-10,000 each.

**`consent-management.md`** — VG Hannover ruling (March 19, 2025): "Reject All" must be equally accessible as "Accept All". X close button does NOT constitute valid consent. GTM requires explicit consent before ANY script loading. Google Consent Mode 2.0 alone insufficient. Recommended: CCM19 (German hosting, open-source) or Real Cookie Banner. Six consent parameters: ad_storage, ad_user_data, ad_personalization, analytics_storage, functionality_storage, security_storage. Source: Claude report §9. Why: This ruling changed the German cookie landscape fundamentally — most existing implementations are now non-compliant.

**`dsgvo-web.md`** — Privacy policy requirements for German websites. Auftragsverarbeitungsvertrag (AVV) for all third-party services. Privacy-first analytics alternatives: Plausible (from €9/mo, no cookies), PostHog (free 1M events/mo, EU cloud), Matomo (free self-hosted), Umami (free self-hosted). EU AI Act: by August 2026, websites with chatbots/AI content must disclose AI interaction. ePrivacy Regulation withdrawn February 2025 — TDDDG §25 remains binding. Source: Claude report §9. Why: GDPR fines can reach €20M or 4% of global turnover. The EU AI Act adds new disclosure requirements by August 2026.

### Design References

**`anti-slop.md`** — Based on Anthropic's frontend-design skill plus extensions. Four dimensions for breaking free from distributional convergence: Typography (distinctive typefaces, variable fonts — never Inter as default), Color systems (OKLCH, brand-tinted neutrals — never pure #000 or #fff), Motion (CSS scroll-driven animations, staggered reveals — always respect prefers-reduced-motion), Layered depth (multi-layer gradients, glassmorphism, subtle grid patterns). "Handmade web" movement: IndieWeb principles, intentional imperfection, Creative Process aesthetic. The term "slop" was 2025 Word of the Year (Merriam-Webster). Three defining properties: superficial competence, asymmetric effort, mass producibility. Source: Claude report §6 + Anthropic's frontend-design skill. Why: AI coding tools gravitate toward the most common patterns. Without explicit anti-slop instructions, every AI-generated site looks the same. Additionally includes a "Strategy & Copy Slop" section covering distributional convergence in messaging and copywriting — detection patterns for category-level messaging (hygiene factors disguised as differentiators, missing anchors), the Anchor Principle (every claim anchored in client-specific material), the "First Draft Is Raw Material" rule, and the Brand Map concept for making generic output structurally impossible.

**`typography.md`** — Modular scales (1.25 for data-dense, 1.333 "Perfect Fourth" for marketing — per Gemini report). Fluid type via clamp(): `clamp(1rem, 0.875rem + 0.5vw, 1.125rem)` for body. Line height: 1.5 body, 1.2 headings. Variable fonts: single 300-500KB file vs 1MB+ for static files. Max 2-3 font families. Font pairing: contrast (serif headline + sans body), not conflict. Performance: preload critical fonts, font-display: swap, subset to needed characters. Base size minimum 16-18px (per all three research reports). Source: All three reports + base guideline document. Why: Typography is the strongest differentiator against AI slop (Claude report) and B2B decision-makers spend significant time reading technical arguments, making readability non-negotiable (Gemini report).

**`color-systems.md`** — OKLCH for perceptual uniformity. Semantic naming: --color-primary, --color-surface-*, --color-text-*. Define --brand-hue, derive palette mathematically. Light/dark via prefers-color-scheme + class strategy. Never pure #000/#fff — always brand-tinted. color-mix() for derived colors. P3 gamut via oklch(). One case study: 900-line color system condensed to 80 lines. Source: Claude report §5 + base guideline document. Why: OKLCH ensures equal lightness steps look equal to human perception — HSL does not. Mathematical derivation from a single hue ensures palette coherence.

**`layout-patterns.md`** — CSS Grid for page layouts (macro). Flexbox for component internals (micro). Container Queries for component-level responsiveness (@container with cqi/cqw units). Subgrid for cross-element alignment (feature cards, pricing tables — eliminates JS height equalization). Scroll-driven animations (animation-timeline: view(), off main thread, zero JS). Anchor positioning for tooltips/dropdowns (Baseline Newly Available since Firefox 147, January 2026). View transitions for page navigation (@view-transition { navigation: auto }). :has() pseudo-class for parent-aware styling. oklch() + color-mix() for 80-line color systems. Z-pattern for CTA-focused pages, F-pattern for content-heavy pages. Replacing JS scroll/positioning libraries with CSS typically removes 50-100KB JavaScript, reducing TTI by ~0.8s on mobile. Source: Claude report §5 + Gemini report CSS section + Perplexity report layout section. Why: All three reports independently converge on: Grid for macro, Flexbox for micro, Container Queries for components, Subgrid for alignment. This is the current consensus among web standards experts.

**`psychology.md`** — Hick's Law (decision time increases logarithmically with options — limit choices per screen). Miller's Law (7±2 information chunks — group navigation items, chunk content). Fogg Behavior Model (Motivation × Ability × Trigger = Action — simplify CTA paths, reduce friction). Information Scent (clear labels, consistent visual hierarchy, predictable navigation — users scan, they don't read). Progressive Disclosure (show primary info first, detail on demand: accordions, conditional forms, staged processes, tooltips — per the Gemini report's detailed table mapping UI patterns to B2B use cases). Fitts's Law (larger, closer targets are faster to click — size CTAs generously, min 44x44px). Von Restorff Effect (distinctive elements are remembered — make CTAs visually unique against the page). Source: Gemini report (deepest treatment), Perplexity report (NNG references), base guideline document. Why: The Gemini report argues persuasively that psychological design principles must come before aesthetics. "Progressive Disclosure signifikant steigert die Konversionsraten" because it prevents cognitive overload.

**`navigation-patterns.md`** — Logo top-left, CTA top-right. Primary nav: 5-7 items max (Miller's Law). Sticky nav on scroll (after hero). Mobile: visible/sticky nav preferred over hidden hamburger (Nielsen research: navigation is used even more on mobile than desktop). Breadcrumbs for deep structures. Active state indicators. Keyboard accessible (Tab, Enter, Escape, Arrow keys). Skip-to-content link. Mega menus for complex IA (B2B enterprise). Footer nav: secondary pages, legal, social. Source: Perplexity report (references to NNG mobile research) + base guideline document. Why: Navigation is where information scent is strongest or weakest. Poor navigation = high bounce rate. Users must be able to predict where a link goes before clicking.

### Stack References

One reference file per supported framework. Each contains: current version specifics, project scaffolding commands, routing patterns, data fetching, SSR/SSG configuration, deployment setup, common pitfalls, integration with Tailwind v4 and shadcn/ui. **Only the selected stack's reference loads during Build — never all of them.**

- **`astro.md`** — Astro 5/6, Content Layer API (5x faster builds), Server Islands (mixed static/dynamic), zero-JS default, Cloudflare integration, acquired by Cloudflare Jan 2026 (remains open-source). #1 in developer interest, satisfaction, and positivity (State of JS 2025). Source: Claude report §5.
- **`nextjs.md`** — Next.js 16 (stable March 2026), Turbopack default (2-5x faster builds, 10x faster Fast Refresh), Cache Components ('use cache'), proxy.ts replaces middleware.ts, agent-ready scaffolding. Source: Claude report §5.
- **`sveltekit.md`** — Svelte 5 Runes ($state, $derived, $effect), 15-30% smaller bundles vs Svelte 4, Remote Functions for type-safe server communication, no virtual DOM, compiles to vanilla JS. 40-60% smaller bundles than React. Source: Claude report §5.
- **`tailwind-v4.md`** — CSS-first config via @theme directive (no tailwind.config.js), Rust-powered Oxide engine (full builds 5x faster, incremental 100x+ faster), automatic content detection, native oklch() palette, built-in container queries, no need for postcss-import/autoprefixer/nesting plugins. Source: Claude report §5.
- **`shadcn-ui.md`** — CLI v4 (March 2026), `npx shadcn create` visual builder, Radix UI (default) or Base UI base, five style presets (Vega/Nova/Maia/Lyra/Mira), templates for Next.js/Vite/Astro/TanStack Start, --dry-run and --diff flags. Source: Claude report §5.

---

## 12. Design Best Practices — The Anti-Slop Framework

This section consolidates the design knowledge from all three research reports and the base guideline document into actionable rules that GWD agents enforce. It answers the question: "What makes a website agency-quality rather than AI slop?"

### The Four Pillars of Anti-Slop Design

**Pillar 1: Typography is the strongest differentiator.**
Replace Inter/Roboto with distinctive typefaces (Playfair Display for serif headlines, Bricolage Grotesque for body, JetBrains Mono for code). Use variable fonts — a single 300-500KB file provides infinite variation vs 1MB+ for multiple static files. Base size minimum 16-18px. Fluid scaling via clamp() eliminates breakpoint jumps. Mathematical modular scales (1.25 or 1.333 ratio) create professional rhythm. Line height: 1.5 for body, 1.2 for headings. Max line length: 60-75 characters.

**Pillar 2: Color systems must be mathematical, not aesthetic guesses.**
Define one brand hue in OKLCH. Derive the entire palette mathematically (lightness steps, saturation variants, complementary/analogous accents). Never use pure #000 or #fff — always brand-tinted neutrals. Semantic naming (--color-primary, --color-surface, --color-text) enables systematic light/dark theming. color-mix() for derived shades. P3 gamut for vivid accents on capable displays.

**Pillar 3: Motion creates the feeling of craftsmanship.**
CSS scroll-driven animations (animation-timeline: view()) run off the main thread with zero JavaScript. Stagger reveals (elements appearing in sequence as you scroll). View transitions for page navigation. Hover states that feel responsive (subtle scale, color shift, cursor change). ALWAYS respect prefers-reduced-motion. Motion should enhance understanding, not decorate.

**Pillar 4: Depth and texture replace flat sameness.**
Multi-layer gradients (not the single purple-to-blue AI default). Subtle grid patterns or noise textures as backgrounds. Glassmorphism effects (backdrop-filter: blur()) used sparingly. Brand-tinted shadows (not generic gray). Layered sections with intentional overlap or bleed. The goal: each section of the page feels like a considered composition, not a stack of identical cards.

### Layout Architecture Rules

All from the research consensus (all three reports + base guideline):

- **CSS Grid** for 2D page-level layouts (the macro structure — header, hero, content sections, footer)
- **Flexbox** for 1D component internals (navbars, card content, button groups)
- **Container Queries** for component-level responsiveness — components adapt to their container width, not the viewport. Essential for modular design systems where the same component appears in different layout contexts.
- **Subgrid** for perfect vertical alignment — feature grids, pricing tables, blog card lists where headers/bodies/CTAs must align across cards regardless of content length
- **Media Queries** only for global macro changes (e.g., switching from 3-column to 1-column at narrow viewports)

### Page Pattern Selection

Based on the Perplexity report's research-backed decision matrix:

| Page Type | Layout Pattern | Why |
|-----------|---------------|-----|
| Performance Landing (Ads) | Z-Pattern Hero, single primary CTA, minimal nav | Eye follows Z from headline → image → benefit → CTA. No distractions. |
| SaaS Landing | Grid sections (Hero → Features → Proof → Pricing → FAQ), F-Pattern for detail sections | Longer consideration cycle. Multiple stakeholders scan different sections. |
| Blog / Content Hub | F-Pattern, optional sidebar, clear typo hierarchy | Reading-heavy. Eye scans left edge for headings, then reads selectively. |
| B2B Corporate | Grid storyline (Who → What → For Whom → Proof → Contact), mega-menu nav | Multiple stakeholders. Trust and thought leadership matter more than speed. |
| Personal / Portfolio | Single-column Z or scroll-based, minimal nav | Person IS the brand. Focus on personality + clear positioning. |

### Progressive Disclosure Patterns

From the Gemini report's cognitive psychology analysis:

| Pattern | B2B Use Case | Cognitive Benefit |
|---------|-------------|-------------------|
| Accordions | FAQ, technical specs, changelogs | Prevents vertical information overload; user opens only relevant sections |
| Conditional Forms | Enterprise lead gen, complex checkout | Fields appear based on prior input ("Company size" only after selecting "B2B") |
| Staged Processes | SaaS onboarding, pricing calculators | Breaks complex decisions into linear, digestible steps |
| Tooltips / Modals | Glossary terms, detailed feature descriptions | Context "just-in-time" without leaving the main flow |

### What to Never Do

- Never use Inter, Roboto, or system-ui as the primary font without deliberate justification
- Never use purple-to-blue gradients as hero backgrounds
- Never center every section identically (hero, features, testimonials all centered = AI slop)
- Never use identical card layouts across the entire page
- Never use "Learn more" as CTA text without specifying what you'll learn
- Never use stock photos that don't match the brand's visual tone
- Never use inline styles (enforced by hook)
- Never hard-code colors or spacing — always use design tokens

---

## 13. Cherry-Picking Map — External Skills Integration

### Tier 1: Deep Integration (Referenced in agent prompts, loaded per phase)

| External Source | Skills Used | In Our Phases | Integration Method |
|----------------|-------------|---------------|-------------------|
| **Anthropic `frontend-design`** | Anti-slop aesthetics guidance | 3 (Design System), 5 (Layout), 6 (Build) | Embed core instructions in `design/anti-slop.md` reference + reference in agent prompts. Why: This is Anthropic's own answer to AI slop — ~400 tokens of creative direction that explicitly instructs Claude to avoid distributional convergence. |
| **`coreyhaines31/marketingskills`** (12.6K stars) | `copywriting`, `page-cro`, `ai-seo`, `geo-optimization`, `competitor-pages`, `product-marketing-context`, `copy-editing`, `ab-test-setup` | 1 (Strategy), 4 (Content), 7 (QA) | Install as skill dependency. Agents reference via `@marketingskills/[skill-name]`. Why: Battle-tested marketing skills by a conversion optimization expert. The `product-marketing-context` foundation pattern (every skill reads it first) directly parallels our BRIEF.md approach. |
| **`Owl-Listener/designer-skills`** (63 skills, 27 commands) | Research skills (personas, journey maps), strategy skills, design-system skills (tokens, components), UI design skills (layout grids, color systems, typography), testing skills (usability, heuristic evaluation), handoff skills | 1-5 (Strategy through Layout) | Install as plugin dependency. Agents reference relevant skills per phase. Why: The most comprehensive design process skill collection. Covers research → systems → strategy → UI → interaction → testing → handoff. MC Dean's insight: "Claude doesn't need theory paragraphs. It needs clear frameworks, decision criteria, and understanding of when to apply what." |
| **`addyosmani/web-quality-skills`** | Core Web Vitals, WCAG, SEO orchestrator, performance optimization | 6 (Build), 7 (QA) | Install as skill dependency. QA agent references as primary quality framework. Why: From Google's Addy Osmani — the authoritative source for web performance and quality metrics. |

### Tier 2: Selective Reference (Specific features cherry-picked)

| External Source | What We Take | How | Why |
|----------------|-------------|-----|-----|
| **`nextlevelbuilder/ui-ux-pro-max-skill`** (29.6K stars) | Design database (50+ styles, 97 palettes, 57 font pairings) | Extract relevant data into our `design/` reference files. Not full dependency — too heavy for context. | Provides a searchable design intelligence database that helps the Design System agent make informed choices instead of defaulting to generic options. |
| **`Dammyjay93/interface-design`** | Memory pattern (`.interface-design/system.md` persistence) | Adapt concept: our `design-system/` serves same purpose. Design System agent reads it every session. | Validates our architectural decision to persist design decisions in files that Claude reads at session start. |
| **`vercel-labs/agent-skills`** (19.5K stars) | `web-design-guidelines` (100+ rules), `composition-patterns` (component architecture) | Reference in Layout and Build agents. Install as lightweight dependency. | Covers accessibility, performance, and UX rules that experienced engineers check during code review. The composition-patterns skill specifically prevents boolean prop proliferation in React components. |
| **`BrianRWagner/ai-marketing-claude-code-skills`** | `positioning` skill, `ai-brand-perception` audit | Strategy agent references positioning. QA agent uses brand perception for GEO audit. | 15+ years of Fortune 500 marketing expertise encoded as executable skills with quick/standard/deep modes. |
| **`zubair-trabzada/ai-marketing-claude`** | Audit mechanism with parallel sub-agents and scoring | Adapt audit scoring model for our `/web:audit` command. Not dependency — adapt the pattern. | Their `/market audit <url>` runs 5 parallel agents and produces scored results — exactly the mechanism we need for redesign audits. |
| **`shinpr/claude-code-workflows`** | Dev-workflows recipe pattern (analyze → plan → execute → verify) | Study recipe pattern. Our phase workflow follows similar structure but domain-specific. | Validates the analyze → plan → execute → verify pattern that we apply to each phase. |

### Tier 3: Awareness (Know they exist, reference in docs, user can install separately)

| External Source | What It Offers | User Value |
|----------------|---------------|------------|
| **`kostja94/marketing-skills`** (160+ skills) | SEO, content, 40+ page types, paid ads, channels, strategies | User can install alongside GWD for deeper marketing coverage |
| **`alirezarezvani/claude-skills`** (192 skills) | Engineering, marketing, product, compliance, C-level advisory | Broad skill library user can cherry-pick from |
| **`daymade/claude-code-skills`** (43 skills) | `ui-designer` (extract design systems from reference images) | Complementary tool for inspiration phase |
| **GSD (Get Shit Done)** (38K stars) | Full spec-driven development workflow | User can optionally use GSD's execution pipeline during Phase 6 for extra rigor |

---

## 14. Skill Invocation Architecture

Claude Code distinguishes between user-invocable commands and auto-loading background skills. This distinction is architecturally important — getting it wrong means either Claude acts autonomously when it shouldn't, or it fails to apply knowledge when it should.

### User-Invokable Commands (disable-model-invocation: true)

All `/web:*` commands. The user explicitly triggers these. Claude never starts a phase autonomously. This prevents the system from deciding "the brief looks done, let me start strategy" without user approval.

```yaml
---
name: web:strategy
description: "Develop brand positioning, messaging framework, personas, and conversion strategy. Run after /web:new completes the briefing phase."
disable-model-invocation: true
---
```

### Auto-Loading Reference Skills (user-invocable: false)

Background knowledge that Claude loads automatically when relevant context is detected. The user never types `/web-standards` — Claude simply knows about WCAG when building UI.

```yaml
---
name: web-standards-knowledge
description: "WCAG 2.2 AA accessibility standards, Core Web Vitals performance targets, semantic HTML requirements. Loads automatically when building or reviewing any web UI component."
user-invocable: false
---
```

### Skills We Register (user-invocable: false)

| Skill | Auto-triggers when... | Why auto-load instead of manual? |
|-------|----------------------|----------------------------------|
| `web-standards` | Building any HTML/CSS/JSX component | Accessibility and performance must be baked in, never an afterthought. |
| `design-intelligence` | Making any visual/aesthetic decision | Anti-slop rules must apply to every design decision, not just when the user remembers. |
| `conversion-patterns` | Writing copy, designing CTAs, planning layouts | CRO patterns should inform all content and layout work automatically. |
| `german-compliance` | Project config indicates German/EU target market | Legal requirements are non-negotiable — they must be considered throughout, not just at QA. |

---

## 15. Context Budget Management

### The Problem
Claude Code limits skill descriptions to ~2% of context. Loading too many skills causes silent ignoring (confirmed by shinpr/claude-code-workflows documentation). Each agent spawn costs tokens. Reference files add to context load.

### Rules

1. **Per agent: maximum 3-4 reference files loaded.** Each agent's `<context_loading>` section specifies exactly which files to load and which to never load.
2. **PROJECT.md stays under 50 lines.** It's loaded every session. Keep it ultra-compact.
3. **STATE.md stays under 50 lines.** Just position, decisions, blockers.
4. **Reference files stay under 300 lines.** Split into focused topics rather than comprehensive tomes.
5. **Agent prompts stay under 200 lines.** Including XML structure.
6. **External skills: install only Tier 1 dependencies.** Tier 2 is reference-adapted. Tier 3 is user's choice.
7. **Wave execution in Build phase:** Each sub-agent gets ONLY: page SPEC, page CONTENT, page LAYOUT, design-system tokens, stack reference. Not the full `.webdesign/`.

---

## 16. Rücksprung-Mechanik — Revision & Dependency Propagation

### Why This Exists (and why GSD doesn't need it)

In software development (GSD's domain), going back to Phase 1 from Phase 4 is rare — you usually just fix forward. In web design, it's routine. A client sees the first page of copy and realizes the positioning is wrong. A designer sees the layout and wants to change the color palette. The content reveals that the sitemap needs an extra page. This is normal. The system must support it gracefully.

### Dependency Map

```
BRIEF.md ──→ STRATEGY.md ──→ SITEMAP.md ──→ pages/*/SPEC.md
                │                               │
                │                               ├──→ pages/*/CONTENT.md ──→ pages/*/LAYOUT.md
                │                               │                                    │
                ├──→ design-system/*             │                                    │
                │         │                      │                                    │
                │         └──────────────────────┼────────────────────────────────────┤
                │                                │                                    │
                └────────────────────────────────┼────────────────────────────────────┤
                                                 │                                    ▼
                                                 └──────────────────────────────→ SOURCE CODE
                                                                                      │
                                                                                      ▼
                                                                                    qa/*
```

### Revision Flow

When `/web:revise strategy` is called:

1. System opens `STRATEGY.md` for editing
2. User describes the change ("Target audience changed from Enterprise to Mid-Market")
3. Strategist agent updates `STRATEGY.md`
4. System scans dependency map and marks downstream files:
   - `SITEMAP.md` → ⚠️ POTENTIALLY STALE (strategy changed)
   - `pages/*/SPEC.md` → ⚠️ POTENTIALLY STALE
   - `pages/*/CONTENT.md` → ⚠️ POTENTIALLY STALE (messaging changed)
   - `pages/*/LAYOUT.md` → ⚠️ POTENTIALLY STALE
   - `design-system/*` → ✅ LIKELY UNAFFECTED (unless brand direction changed)
   - Source code → ⚠️ POTENTIALLY STALE
5. `PROGRESS.md` is updated showing affected files with warnings
6. `/web:next` will suggest updating each stale file in dependency order

### Stale Marking Format (in PROGRESS.md)

```markdown
## Stale Artifacts (Strategy revised 2026-03-22)
- [ ] SITEMAP.md — may need section restructuring for new audience
- [ ] pages/homepage/CONTENT.md — messaging needs Mid-Market adjustment
- [ ] pages/pricing/CONTENT.md — pricing tiers may need reframing
- [ ] pages/homepage/LAYOUT.md — depends on content changes
- [ ] Source code — rebuild after content/layout updates
```

### Next-step routing after revision:
```
✅ Strategy revised. STRATEGY.md updated.

⚠️ 5 downstream artifacts marked as potentially stale (see /web:progress)

Your options:
  /web:next             → [RECOMMENDED] Update the next stale artifact (SITEMAP.md)
  /web:progress         → See all affected artifacts
  /web:content homepage → Jump directly to updating homepage copy
  /web:revise strategy  → Make further strategy changes

The system will guide you through updating each affected artifact in dependency order.
```

---

## 17. Multi-Page Management

### The Problem
GSD builds one project. GWD builds a website with N pages. Phases 2-6 need to run per-page, not just globally.

### Solution: Page-Level Tracking

Each page has its own status in `PROGRESS.md`:

```markdown
## Phase Status

| Phase | Global Status | homepage | about | pricing | blog |
|-------|--------------|----------|-------|---------|------|
| 0 Intake | ✅ Complete | — | — | — | — |
| 1 Strategy | ✅ Complete | — | — | — | — |
| 2 IA/Sitemap | ✅ Complete | ✅ | ✅ | ✅ | ✅ |
| 3 Design System | ✅ Complete | — | — | — | — |
| 4 Content | 🔄 In Progress | ✅ | ✅ | 🔄 | ⬜ |
| 5 Layout | ⬜ Not Started | ⬜ | ⬜ | ⬜ | ⬜ |
| 6 Build | ⬜ Not Started | ⬜ | ⬜ | ⬜ | ⬜ |
| 7 QA | ⬜ Not Started | ⬜ | ⬜ | ⬜ | ⬜ |
```

### Commands with Page Arguments

`/web:content pricing` → Phase 4 for pricing page only.
`/web:build homepage about` → Build two pages.
`/web:qa` without argument → Audits everything.

### Page Addition Mid-Project

`/web:add-page case-studies` creates:
1. `pages/case-studies/SPEC.md` (from IA architect)
2. Updates `SITEMAP.md` with new page
3. Marks phases 4-6 as needed for this page
4. Next-step routing suggests: `/web:content case-studies`

---

## 18. MCP Server Integration

### Required MCP Servers

| MCP Server | Purpose in GWD | Used in Phases | Why Required |
|-----------|----------------|----------------|-------------|
| **Playwright** | Audit existing sites, screenshot pages, visual testing, automated a11y checks, inspiration analysis | 0 (Audit, Inspire), 7 (QA) | Cannot audit existing sites or run visual tests without browser automation. The Gemini report explains: Playwright allows the agent to "see" the rendered interface, not just parse HTML. |
| **Context7** | Live, version-specific framework documentation (Astro, Next.js, Tailwind, etc.) | 6 (Build) | LLM training data has a cutoff — framework APIs change frequently. Context7 injects current docs directly into the context, preventing hallucinated APIs. 46,978+ stars, 9,000+ libraries indexed. |

### Recommended MCP Servers

| MCP Server | Purpose | Used in Phases |
|-----------|---------|----------------|
| **Figma** | Extract design tokens, components from existing Figma files | 3 (Design System) |
| **GitHub** | Branch management, PRs, commit history | 6 (Build), all |
| **Sentry** | Error monitoring post-launch | Post-launch |
| **Chrome DevTools** | Live Core Web Vitals, runtime debugging | 7 (QA) |

### MCP Configuration (.mcp.json)

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    },
    "github": {
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

---

## 19. Configuration Schema (config.json)

```json
{
  "project": {
    "name": "Client Website",
    "type": "new",
    "market": "de",
    "compliance": ["bfsg", "tdddg", "dsgvo"]
  },
  "stack": {
    "framework": "astro",
    "styling": "tailwind-v4",
    "components": "shadcn-ui",
    "cms": null,
    "hosting": "cloudflare",
    "analytics": "plausible"
  },
  "models": {
    "profile": "balanced",
    "overrides": {}
  },
  "workflow": {
    "mode": "interactive",
    "auto_research": true,
    "auto_advance": false,
    "skip_phases": [],
    "inspiration_analysis": true
  },
  "quality": {
    "performance_budget_kb": 500,
    "lighthouse_min_score": 90,
    "wcag_level": "AA",
    "co2_budget_grams": 1.0
  },
  "git": {
    "commit_artifacts": true,
    "branching_strategy": "none"
  },
  "mcp": {
    "playwright": true,
    "context7": true,
    "figma": false,
    "github": false
  }
}
```

---

## 20. Installer

### Installation Command

```bash
npx get-web-done-cc@latest
```

### Installer Flow

1. **Prompt: Runtime** — Claude Code (default), other runtimes future
2. **Prompt: Location** — Global (`~/.claude/`) or Local (`./.claude/`)
3. **Copy files:**
   - `commands/web/*` → `{target}/commands/web/`
   - `agents/*` → `{target}/agents/`
   - `hooks/*` → `{target}/hooks/` (merge with existing hooks.json)
   - `skills/*` → `{target}/skills/`
   - `get-web-done/*` → `{target}/get-web-done/`
   - `scripts/*` → `{target}/scripts/`
4. **MCP check:**
   - Check if Playwright MCP is configured
   - Check if Context7 MCP is configured
   - If missing: show setup instructions, offer to auto-configure
5. **External skills check:**
   - Recommend installing marketingskills: `npx skills add coreyhaines31/marketingskills`
   - Recommend installing designer-skills: `/plugin marketplace add Owl-Listener/designer-skills`
   - Recommend installing web-quality-skills: `npx skills add addyosmani/web-quality-skills`
   - These are recommendations, not requirements
6. **Verify:** `/web:help` should list all commands

### Non-Interactive Install

```bash
npx get-web-done-cc --claude --global          # Global Claude Code
npx get-web-done-cc --claude --local           # Local project
npx get-web-done-cc --claude --global --uninstall  # Remove
```

---

## 21. Templates — All Output Formats Explained

Every artifact has a defined template that agents must follow exactly. Templates live in `get-web-done/templates/`. This section explains what each template produces, why it exists, and what it's used for.

### BRIEF.md — The Client Briefing

**What:** Complete project briefing capturing everything needed to make strategic decisions.
**Why:** Without a thorough brief, all downstream work is guesswork. This replaces the typical "build me a website" conversation with structured discovery.
**Used by:** Every subsequent phase — Strategy reads it for positioning, IA reads it for page planning, Design System reads it for brand direction.
**Created by:** web-intake agent during Phase 0.

Key sections: Company (name, industry, size), Product/Service (offering, audience, differentiator), Goals (primary conversion, secondary conversions, success metrics), Audience (ICP, decision makers, key objections), Brand (existing assets, tone adjectives, reference sites), Technical (preferred stack, integrations, hosting), Compliance (market, requirements), Timeline & Budget.

### AUDIT.md — Existing Site Analysis

**What:** Comprehensive audit of an existing website across 6 dimensions with scores and specific findings.
**Why:** Redesign projects need a baseline. Without knowing what's broken, you can't prioritize what to fix. The audit also preserves what works — not everything needs to change.
**Used by:** Strategy phase (knows what's wrong), Design System (knows what visual elements to keep/change), Content (knows what copy works/doesn't).
**Created by:** web-intake + web-qa-auditor agents via Playwright during Phase 0 (Redesign path only).

Key sections: Overall Score, Performance Score (Lighthouse results, CWV, page weight), Accessibility Score (WCAG compliance, specific violations), SEO Score (technical SEO, schema, meta), Content Score (messaging clarity, CTA effectiveness, copy quality), Design Score (visual coherence, typography, color, responsiveness), Recommendations (prioritized by impact).

### INSPIRATION.md — Reference Site Analysis

**What:** Visual and structural analysis of reference websites the client admires.
**Why:** Clients often communicate design preferences through examples rather than abstract descriptions. "I want something like that" is more useful than "I want something modern." Extracting concrete patterns from references eliminates guesswork.
**Used by:** Design System (colors, typography, visual tone to draw from), Layout (structural patterns to adapt), Strategy (competitive positioning context).
**Created by:** web-inspiration-analyst agent via Playwright during Phase 0 (optional).

Key sections per reference site: URL, Screenshot, Color Palette (extracted hex/oklch values), Typography (fonts, sizes, weights, pairings), Layout Patterns (grid structure, section types, responsive approach), Navigation (structure, mobile treatment), Visual Tone (descriptive adjectives: "minimal," "bold," "warm"), Content Density (text-heavy vs. visual-heavy), Differentiators (what makes this site distinctive), Relevance Notes (what to take, what to leave).

### STRATEGY.md — Brand & Conversion Strategy

**What:** The strategic foundation for the entire website. Positioning, messaging, audience understanding, and conversion approach.
**Why:** Without strategy, every design and content decision is arbitrary. Strategy answers: Who are we talking to? What do we say? Why should they care? What do we want them to do? This document is the most-referenced artifact in the entire system.
**Used by:** Every phase from 2 onwards — IA uses it for page purpose, Design System for brand vibe, Copywriter for messaging, Layout for conversion flow, QA for compliance with strategic intent.
**Created by:** web-strategist agent during Phase 1.

Key sections: Positioning Statement (format: "For [audience] who [need], [product] is a [category] that [benefit]. Unlike [alternatives], we [differentiator]."), Messaging Framework (primary message, 3-5 supporting messages, proof points for each), Target Personas (2-3 personas with: role, goals, pain points, objections, decision criteria, preferred content format), Conversion Strategy (primary CTA, secondary CTAs, funnel logic, micro-conversions), Content Tone & Voice (5 tone adjectives with examples, do/don't list, reading level target), SEO/GEO Strategy (primary keywords, GEO approach, content structure for AI citation, llms.txt plan).

### SITEMAP.md — Information Architecture

**What:** Complete page inventory with section structure, navigation, user flows, and content hierarchy.
**Why:** IA is the blueprint for the entire site. Without it, pages are created ad-hoc, navigation is inconsistent, and the user journey is accidental rather than designed. This is where strategy becomes structure.
**Used by:** Design System (knows how many page types exist), Content (knows what sections each page needs), Layout (knows section order and hierarchy), Build (knows routing structure).
**Created by:** web-ia-architect agent during Phase 2.

Key sections: Page Inventory (table: page name, URL path, purpose, priority, target persona, primary CTA), Section Structure per Page (ordered list of sections with: section name, purpose, content type, pattern choice (Z/F/linear)), Navigation Structure (primary nav items, mobile nav treatment, footer nav, breadcrumb logic), User Flows (primary conversion path step-by-step, secondary paths), Internal Linking Strategy (which pages link to which, information scent optimization).

### PAGE-SPEC.md — Per-Page Specification

**What:** Complete specification for a single page combining IA decisions, section definitions, and acceptance criteria.
**Why:** Each page needs a single-source-of-truth document that content and layout agents can work from independently. This is the "contract" for what the page delivers.
**Used by:** Content agent (knows what sections to write for), Layout agent (knows section structure and purpose), Build agent (knows acceptance criteria).
**Created by:** web-ia-architect agent during Phase 2 (initial skeleton), enriched during Phases 4-5.

Key sections: Page Purpose (one sentence), Target Persona, Primary CTA, Layout Pattern (Z/F/linear), Sections (ordered list with: name, purpose, content type, priority, progressive disclosure notes), SEO Target (primary keyword, meta title/description template), Acceptance Criteria (what constitutes "done" for this page).

### DESIGN-SYSTEM.md — Design System Documentation

**What:** Human-readable documentation of all design decisions: colors, typography, spacing, components.
**Why:** The design system is the visual language. It must be documented for consistency — both for Claude (who reads it every session) and for humans (who need to understand and potentially modify it).
**Used by:** Every agent from Phase 4 onwards. Content (typography constraints), Layout (grid, spacing, components), Build (implementation reference), QA (compliance checking).
**Created by:** web-design-system agent during Phase 3.

Key sections: Color System (primary, secondary, neutrals, semantic colors — all in OKLCH with CSS custom property names), Typography Scale (font families, fluid sizes via clamp(), line heights, font weights), Spacing Scale (mathematical base + scale), Grid System (columns, gutters, container widths, subgrid usage), Component Inventory (list of all components with: name, purpose, variants, states, accessibility requirements), Light/Dark Strategy (if applicable), Motion Guidelines (animation approach, scroll-driven patterns, reduced-motion behavior).

### tokens.css — CSS Custom Properties

**What:** The machine-readable design system. Real CSS that projects consume directly.
**Why:** Documentation alone isn't enough — the Build agent needs actual CSS it can import and use. This file ensures design tokens are code, not just prose.
**Used by:** Build agent directly imports this into the project.
**Created by:** web-design-system agent during Phase 3.

Format: CSS custom properties organized by category (colors, typography, spacing, breakpoints, shadows, radii) with OKLCH values, clamp() functions, and semantic naming.

### CONTENT.md (per page) — Page Copy

**What:** All text content for a single page, organized by section.
**Why:** Copy must be written against the strategy and reviewed by humans before layout begins. Separating content from layout allows iteration on messaging without touching structure.
**Used by:** Layout agent (determines section sizes and visual weight), Build agent (inserts into components).
**Created by:** web-copywriter agent during Phase 4.

Key sections per section: Section Name, Headline (with character count), Subheadline (with character count), Body Copy, CTA Text, Microcopy (labels, placeholders, error messages), Rationale (why this message, which persona it targets, which proof point it uses).

### LAYOUT.md (per page) — Layout Structure

**What:** Visual structure specification for a single page — which components, in what order, with what responsive behavior.
**Why:** Layout is the bridge between content (what we say) and code (how it renders). This document is a wireframe in prose — detailed enough for the Build agent to implement without guessing.
**Used by:** Build agent (primary implementation reference), QA agent (responsive behavior verification).
**Created by:** web-layout-architect agent during Phase 5.

Key sections per section: Section Name, Component (which component from COMPONENTS.md), Grid Structure (CSS Grid definition), Content Placement (what goes where within the grid), Responsive Behavior (desktop → tablet → mobile transitions, container query breakpoints), Design Token Usage (which tokens apply), Animation/Interaction (scroll-driven effects, hover states), Accessibility Notes (focus order, ARIA considerations).

### COMPONENTS.md — Component Inventory & Specs

**What:** Detailed specifications for all shared and page-specific components.
**Why:** Components are reused across pages. Without centralized specs, the same component (e.g., a CTA section) gets implemented differently on each page. This ensures consistency.
**Used by:** Layout agent (references available components), Build agent (implementation specs).
**Created by:** web-design-system agent (initial inventory in Phase 3), enriched by web-layout-architect (detailed specs in Phase 5).

Key sections per component: Name, Purpose, Variants (e.g., Hero: split, centered, full-bleed), Props/Slots (what content it accepts), Grid/Flex Structure, Responsive Behavior, States (default, hover, focus, active, disabled), Accessibility Requirements (ARIA roles, keyboard behavior, focus management), Design Tokens Used.

### QA Report Templates (LIGHTHOUSE.md, WCAG-AUDIT.md, SEO-CHECK.md, COMPLIANCE.md)

**What:** Structured audit results with scores, findings, and fix suggestions.
**Why:** QA must produce actionable output, not just pass/fail. Each finding includes the specific problem, its severity, and a concrete fix with code changes — enabling `/web:fix` to auto-apply solutions.
**Used by:** web-builder agent (applies fixes via `/web:fix`), user (reviews before launch).
**Created by:** web-qa-auditor and sub-agents during Phase 7.

Format per report: Overall Score, Findings Table (severity, description, affected element, fix suggestion with code snippet), Summary of Required Actions, Re-test Instructions.

### PROGRESS.md — Project Status Overview

**What:** Auto-generated overview of all phases, pages, and their completion status.
**Why:** This is what `/web:progress` renders. It's the project dashboard — anyone (human or Claude) can look at it and immediately understand where the project stands, what's done, what's in progress, and what's stale.
**Created by:** Auto-generated by the orchestrator after each phase completion or revision.

Format: Phase Status Table (phases × pages matrix with ✅/🔄/⬜/⚠️ indicators), Stale Artifacts section (if any revisions have occurred), Next Recommended Action.

### STATE.md — Session Memory

**What:** Ultra-compact file recording current position, key decisions made, and active blockers.
**Why:** Claude has no memory between sessions. STATE.md is the "where was I?" file that the orchestrator reads first. It must be under 50 lines to avoid wasting context on meta-information.
**Created by:** Auto-updated by the orchestrator at the end of each command execution.

Format: Current Phase, Current Page (if in a per-page phase), Last Completed Action, Active Decisions (key choices made that affect future phases), Blockers (anything waiting on user input), Stale Artifacts Count.

---

## 22. Tech Stack Defaults & Framework Support

### Opinionated Defaults (suggested if user has no preference)

| Decision | Default | Why (Research Basis) |
|----------|---------|---------------------|
| **Framework** | Astro 5 | Zero JS by default = best Lighthouse scores. #1 in developer satisfaction (State of JS 2025). Content-first architecture ideal for marketing sites. Acquired by Cloudflare Jan 2026, remains open-source. |
| **Styling** | Tailwind CSS v4 | CSS-first config via @theme (no JS config file). Oxide engine: 5x faster full builds, 100x+ incremental. Native OKLCH and container queries. |
| **Components** | shadcn/ui | Accessible (Radix UI base), customizable (not a component library you import — you own the code), Tailwind-native, five style presets. |
| **CMS** | None (static) | v1 scope. Payload CMS or Keystatic as v2 options. Static-first reduces complexity and improves performance. |
| **Hosting** | Cloudflare Pages | Free tier, global CDN, excellent DX. Hetzner for GDPR-sensitive backends (TÜV-certified hydropower). |
| **Analytics** | Plausible | GDPR-native, no cookies, no consent banner required. From €9/mo. Avoids the GA4 GDPR complexity (73% of GA4 implementations have silent misconfigurations per Claude report). |
| **Consent** | CCM19 | German hosting, open-source, free tier. VG Hannover compliant. Alternative: Real Cookie Banner (WordPress). |
| **Fonts** | Variable fonts, self-hosted | Performance (no Google Fonts dependency = no third-party request), privacy (no data sent to Google), control (subsetting to exact needed characters). |

### Framework Decision Guide

| Project Type | Recommended | Runner-Up | Reasoning |
|-------------|-------------|-----------|-----------|
| Marketing site / Landing page | Astro | SvelteKit | Zero JS = fastest load. Content collections for blog/docs. |
| Blog / Documentation | Astro (Starlight) | Next.js | Starlight is purpose-built for docs with search, i18n, versioning. |
| SaaS dashboard / App | Next.js | SvelteKit | App Router + RSC for complex data fetching. Enterprise ecosystem. |
| Real-time interactive | SvelteKit | Next.js | Smallest bundle sizes. Runes system for reactive state. |
| Enterprise platform | Next.js | SvelteKit | Largest ecosystem, most hiring pool, Vercel enterprise support. |

---

## 23. v1 Scope vs. v2 Roadmap

### v1 — Initial Release

**Included:**
- Complete phase system (0-7) with all commands and next-step routing
- All 12 agents with prompts and reference loading
- State management in `.webdesign/`
- Rücksprung/revision mechanism with dependency propagation
- Multi-page management with page-level status tracking
- Quick mode and tweak mode for ad-hoc changes
- Cherry-picked external skill integration (Tier 1 and adapted Tier 2)
- All reference files (accessibility, performance, SEO/GEO, compliance-de, design, stacks)
- All hooks (format, a11y check, anti-slop guard, pre-commit quality)
- Installer via npx with MCP setup assistance
- Playwright-based audit and inspiration analysis
- Framework support: Astro, Next.js, SvelteKit + Tailwind v4 + shadcn/ui
- German/EU compliance focus (BFSG, TDDDG, Impressum, DSGVO, EU AI Act)
- All templates with defined output formats

**Not included in v1 (v2 candidates):**
- CMS integration (Payload, Sanity, Contentful — writing content directly to headless CMS via MCP)
- Programmatic agent control (GSD v2 style TypeScript harness for true context clearing, cost tracking, crash recovery)
- Multi-language/i18n support within a single project (hreflang, translated content management)
- A/B testing integration (feature flags, experiment configs, auto-generated variants)
- Post-launch optimization loop (reading analytics/Search Console via MCP, identifying drop-offs, suggesting experiments)
- Cost tracking / token usage monitoring per phase
- Multi-runtime support (OpenCode, Gemini CLI, Codex, Cursor — only Claude Code in v1)
- Plugin marketplace distribution (registering as installable plugin via Claude Code marketplace)
- Deep Figma-to-code pipeline (beyond token extraction — full component translation)
- Email template generation
- E-commerce-specific flows (product pages, checkout optimization, cart recovery)

---

## 24. Design Principles & Anti-Patterns

### System Design Principles

1. **The complexity is in the system, not in the workflow.** (Borrowed from GSD's creator TÂCHES.) Users see simple commands. Behind the scenes: context engineering, agent orchestration, state management.
2. **Every phase has a clear purpose, defined inputs, and defined outputs.** No ambiguity about what happens when.
3. **The human is involved at the right moments.** Briefing, strategy approval, copy review, final QA. Not in the middle of code generation.
4. **Fresh contexts prevent quality degradation.** Heavy thinking happens in sub-agents with clean 200K windows. The main session stays lean. (Core insight from GSD.)
5. **Files are the communication medium.** No in-memory state. Everything persists to `.webdesign/`. Sessions can crash and resume.
6. **Deterministic enforcement beats prompting.** Hooks always execute. Skills are suggestions. Use hooks for non-negotiable quality gates. (Confirmed by Gemini report: "Mechanische Durchsetzung schlägt kontextuelles Prompting.")
7. **Opinionated defaults, not rigid requirements.** The system recommends best practices but lets users override with good reason.
8. **Strategy before pixels.** No code is generated before the strategic foundation exists. This is what separates GWD from "vibe coding."
9. **Every command ends with clear options.** The user is never lost. Next-step routing ensures the process feels guided, not overwhelming.
10. **Specifics before claims, discovery before positioning.** Distributional convergence applies to strategy, copy, and naming just as much as to visual design. Output that reads like it could apply to any company in the category is strategy-slop. Every positioning statement, headline, and section description must be anchored in something specific to THIS project — a story, a fact, a decision, a number, a belief. If you can't point to the specific anchor, the output is not ready. First drafts are raw material, not deliverables.

### Anti-Patterns to Avoid

1. **Never generate code before strategy exists.** Phase 6 (Build) requires Phases 0-5 complete (or explicitly skipped).
2. **Never use inline styles.** Pre-write hook catches this.
3. **Never use generic placeholder content.** "Lorem ipsum", "Click here", "Learn more" without context are blocked.
4. **Never use Inter as the default font without deliberate justification.** The anti-slop reference explicitly flags this.
5. **Never skip accessibility.** WCAG 2.2 AA is the minimum, not a nice-to-have. The QA phase is not optional.
6. **Never load all reference files at once.** Each agent specifies exactly what it needs. Context budget is a hard constraint.
7. **Never let the agent guess.** If information is missing, ask the user. The intake phase exists for this reason.
8. **Never deliver AI-generated copy without rationale.** Every headline, CTA, and body text in CONTENT.md includes WHY that message exists.
9. **Never treat the design system as optional.** Without tokens, every component invents its own colors and spacing. Consistency dies.
10. **Never position from category knowledge alone.** The strategist must collect client-specific stories, processes, beliefs, and decisions before writing any positioning. Category-level messaging ("we deliver innovative solutions") is the strategy equivalent of purple gradients and Inter font.
11. **Never present first-draft positioning.** All positioning must pass the internal Self-Review Gate (Competitor Test, Anchor Test, Recognition Test) before the user sees it. This is the "never ship the first draft" rule applied to strategy.

---

## 25. Testing & Quality Assurance of the System Itself

### Evaluation Approach

Each agent should be tested with a 20-query evaluation harness:
- 10 queries that should trigger the agent's skill correctly
- 10 queries that should NOT trigger the agent

### Test Project

Maintain a reference test project (e.g., "German B2B SaaS landing page for a project management tool") that exercises all phases. Use it to:
- Verify each phase produces correct output format (matches template)
- Verify dependency propagation works on revision (change strategy → correct files marked stale)
- Verify QA catches intentional quality issues (introduce contrast violation → audit catches it)
- Benchmark token consumption per phase (stay within context budget)
- Test with all three supported frameworks (Astro, Next.js, SvelteKit)
- Test next-step routing at every phase transition

### Metrics to Track

- **Phase completion rate:** Does each phase produce valid output matching its template?
- **Revision propagation accuracy:** Are the right files marked stale, and only the right ones?
- **QA detection rate:** Does the QA agent catch intentional issues (contrast, missing alt, performance regression)?
- **Token consumption per phase:** Does each agent stay within the context budget?
- **User touchpoint satisfaction:** Are the right questions asked at the right times? Is next-step routing helpful?
- **Anti-slop effectiveness:** Does generated code avoid generic patterns? (Visual review)
- **Cross-framework consistency:** Does the same brief produce equivalent quality across Astro/Next.js/SvelteKit?

---

## End of Specification

**This document is the single source of truth for building Get Web Done.**
**Every design decision, architectural choice, and integration point is documented here with its research rationale.**
**When this document is placed in a Claude Code context, it provides sufficient information to begin building the system phase by phase.**

**For additional technical depth on any topic, consult the research documents in the project knowledge:**
- Gesamtbericht Web Design & Web Development 2025/2026 (base guidelines)
- #2 Claude — Claude Code & Google Products (technical details, German compliance, framework specifics)
- #2 Gemini — Architekturen und Strategien (cognitive psychology, CSS architecture, WCAG 3.0)
- #2 Perplexity — Research (page-type matrix, source-referenced best practices)

---

*Version: 1.2*
*Date: March 23, 2026*
*Status: Updated with Deep Discovery, Self-Review Gate, Anti-Strategy-Slop*