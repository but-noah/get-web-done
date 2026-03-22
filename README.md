# GET WEB DONE

**A structured, agentic web design and development system for Claude Code.**

**Agency-quality websites. Structured AI process. Zero AI slop.**

[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

---

> *"GSD makes Claude Code reliable for software. GWD makes it reliable for websites."*

---

## The Problem

Claude Code can generate websites. But without structure, it produces **AI slop**: generic layouts, purple gradients, Inter font, hollow copy, no strategy, no accessibility, no performance optimization. Every AI-generated site looks the same.

You describe what you want, AI generates code, and you get inconsistent output that falls apart under scrutiny — no conversion strategy, no information architecture, no design system, no accessibility compliance, no SEO optimization.

## The Solution

Get Web Done (GWD) is the **context engineering layer** that makes Claude Code produce agency-quality websites. It encodes the complete web design agency process as commands, agents, workflows, and reference files:

**Intake → Strategy → Information Architecture → Design System → Content → Layout → Code → QA**

Every phase has clear inputs, outputs, quality gates, and human touchpoints. Nothing is left to chance. Nothing is generic.

```
npx get-web-done-cc@latest
```

**Works on Mac, Windows, and Linux.**

---

## How It Works

### 1. Start a New Project

```
/web:new
```

GWD asks: New website or redesign? Then guides you through a structured briefing — company, audience, goals, brand, competitors. If you give thin answers, it researches your industry and asks smarter follow-up questions.

**Creates:** `BRIEF.md` — your complete project foundation.

### 2. Develop Strategy

```
/web:strategy
```

A specialized strategist agent develops positioning, messaging framework, target personas, conversion strategy, and SEO/GEO approach — all grounded in your brief.

**Creates:** `STRATEGY.md` — the strategic foundation every other phase builds on.

### 3. Plan Information Architecture

```
/web:sitemap
```

Pages, sections, navigation structure, user flows, internal linking — all planned before a single line of code is written.

**Creates:** `SITEMAP.md`, per-page specifications.

### 4. Generate Design System

```
/web:design-system
```

OKLCH color tokens, fluid typography scales via `clamp()`, spacing system, component inventory — output as real CSS and Tailwind config, not just documentation.

**Creates:** `tokens.css`, `DESIGN-SYSTEM.md`, `COMPONENTS.md`

### 5. Write Content

```
/web:content
```

Copy for every section of every page, following your messaging framework. No jargon, no filler. Every headline includes a rationale for why it exists.

**Creates:** Per-page `CONTENT.md` files.

### 6. Define Layouts

```
/web:layout
```

Section order, component choices, CSS Grid structure, responsive behavior, scroll-driven animations — wireframes in prose, detailed enough to code from.

**Creates:** Per-page `LAYOUT.md` files, shared component specs.

### 7. Generate Code

```
/web:build
```

Parallel sub-agents generate code in your chosen stack (Astro, Next.js, SvelteKit + Tailwind v4 + shadcn/ui). Each page built in a fresh context window. Atomic git commits per component.

**Creates:** Production-ready source code.

### 8. Quality Audit

```
/web:qa
```

Parallel audits: Lighthouse performance, WCAG 2.2 AA accessibility, technical SEO, German/EU compliance (BFSG, Impressum, DSGVO), anti-slop check, sustainability score.

```
/web:fix
```

Auto-apply fixes from QA findings.

**Creates:** Audit reports with actionable fixes.

---

## Key Features

### Structured Agency Process
8 predefined phases mirror how the best web agencies work. Every phase has defined inputs, outputs, and human approval gates.

### Anti-AI-Slop by Design
Built-in hooks and reference files enforce distinctive design: no generic fonts, no purple gradients, no identical card layouts, no hollow copy. Based on Anthropic's own `frontend-design` skill plus extensive research-backed design principles.

### Fresh Context Per Task
Heavy work (research, copywriting, code generation) runs in isolated sub-agent contexts with the full 200K token window. Your main session stays lean. Quality doesn't degrade over long projects.

### Multi-Page Management
Track progress per page across all phases. Add or remove pages mid-project. Each page has its own content, layout, and build status.

### Revision Support
Change your strategy mid-project? GWD marks all affected downstream artifacts as "potentially stale" and guides you through updating them in the right order.

### German/EU Compliance
BFSG accessibility law, TDDDG cookie rules (VG Hannover ruling), §5 DDG Impressum requirements, DSGVO privacy — automated into the QA phase.

### GEO Optimization
Generative Engine Optimization for AI search visibility: answer-first content, structured data, llms.txt, entity authority — built into the content and SEO strategy.

### Inspiration Analysis
```
/web:inspire https://example.com
```
Analyze reference websites via Playwright: extract color palettes, typography, layout patterns, visual tone. Use real data instead of vague descriptions.

### Redesign Auditing
```
/web:audit https://existing-site.com
```
Crawl and score existing websites across performance, accessibility, SEO, content, and design before planning the redesign.

---

## Commands

### Core Workflow

| Command | What it does |
|---------|-------------|
| `/web:new` | Start new project (new or redesign) |
| `/web:audit <url>` | Audit existing site for redesign |
| `/web:inspire <url>` | Analyze reference websites |
| `/web:strategy` | Develop positioning and messaging |
| `/web:sitemap` | Plan information architecture |
| `/web:design-system` | Generate design tokens and system |
| `/web:content [page]` | Write copy per page |
| `/web:layout [page]` | Define layout structure per page |
| `/web:build [page]` | Generate code |
| `/web:qa [page]` | Run quality audits |
| `/web:fix` | Auto-apply QA fixes |

### Navigation

| Command | What it does |
|---------|-------------|
| `/web:progress` | Full project status overview |
| `/web:next` | Auto-detect and run next step |
| `/web:help` | Show all commands |

### Iteration

| Command | What it does |
|---------|-------------|
| `/web:revise <phase>` | Return to a previous phase, mark downstream as stale |
| `/web:add-page <name>` | Add a new page mid-project |
| `/web:quick` | Ad-hoc change with quality guards |
| `/web:tweak` | Minimal change without planning |

---

## Tech Stack Support

GWD is opinionated but flexible:

| Decision | Default | Alternatives |
|----------|---------|-------------|
| Framework | Astro 5 | Next.js 16, SvelteKit |
| Styling | Tailwind CSS v4 | Any CSS approach |
| Components | shadcn/ui | Custom components |
| Hosting | Cloudflare Pages | Vercel, Netlify, Hetzner |
| Analytics | Plausible | PostHog, Matomo, Umami |

---

## Requirements

- **Claude Code** (Claude Pro, Max, or Team subscription)
- **Node.js 18+**
- **Playwright MCP** (for audits, inspiration analysis, QA)
- **Context7 MCP** (for live framework documentation during build)

### Recommended External Skills

These enhance GWD but are not required:

```bash
# Marketing skills (copywriting, CRO, SEO, GEO)
npx skills add coreyhaines31/marketingskills

# Design skills (research, systems, UI, interaction, testing)
/plugin marketplace add Owl-Listener/designer-skills

# Web quality skills (performance, accessibility, SEO)
npx skills add addyosmani/web-quality-skills
```

---

## Installation

```bash
npx get-web-done-cc@latest
```

The installer prompts for runtime (Claude Code) and location (global or local), then copies all commands, agents, workflows, and references.

Verify with:
```
/web:help
```

### MCP Setup

GWD needs Playwright and Context7 MCP servers. Add to your `.mcp.json`:

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
    }
  }
}
```

---

## Architecture

GWD is built entirely from Markdown files and shell scripts — no TypeScript, no build step. Inspired by [Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done), the most effective spec-driven development system for Claude Code.

```
Commands (user-facing /web:* triggers)
    ↓ reference via @path
Workflows (detailed phase orchestration)
    ↓ dispatch
Agents (specialized sub-agents in fresh contexts)
    ↓ follow
Templates (exact output formats)
    ↓ consult
References (domain knowledge, loaded on demand)

Hooks (deterministic pre/post-action enforcement)
Skills (auto-loading background knowledge)
```

All project state persists to `.webdesign/` — sessions can crash and resume. Communication between agents happens exclusively via files.

---

## Acknowledgments

- **[Get Shit Done (GSD)](https://github.com/gsd-build/get-shit-done)** by TÂCHES — architectural inspiration for the command/workflow/agent layer model
- **[marketingskills](https://github.com/coreyhaines31/marketingskills)** by Corey Haines — CRO, copywriting, and SEO skills
- **[designer-skills](https://github.com/Owl-Listener/designer-skills)** by MC Dean — comprehensive design process skills
- **[web-quality-skills](https://github.com/addyosmani/web-quality-skills)** by Addy Osmani — performance and accessibility quality gates
- **[frontend-design](https://github.com/anthropics/claude-code)** by Anthropic — anti-AI-slop design guidance
- **[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — design intelligence database

---

## Contributing

Contributions welcome! This project is in active development. If you want to help:

1. Read `specs/gwd-spec.md` to understand the architecture
2. Check the milestone roadmap in `CLAUDE.md`
3. Open an issue to discuss before submitting a PR
4. Follow the existing patterns (Markdown commands, XML agent structure, reference file format)

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

**Claude Code is powerful. GWD makes it build websites like an agency.**