# Get Web Done (GWD)

A structured, agentic web design and development system for Claude Code. From briefing to deployed, agency-quality websites — reproducible, strategic, optimized. The "GSD for web design."

## What This Project Is

GWD is an open-source system of commands, agents, workflows, hooks, and reference files that guide Claude Code through the complete web design agency process: Intake → Strategy → Information Architecture → Design System → Content → Layout → Code → QA. It is architecturally inspired by Get Shit Done (GSD, 38K+ stars) but domain-specific for web development.

The full specification lives in `specs/gwd-spec.md` — this is the single source of truth for all architecture decisions, phase definitions, agent designs, template structures, and integration points. **Read this file before making any structural decisions.**

The research foundation (three independent deep-research reports + base guidelines) lives in `specs/research/`. These documents contain the evidence behind every design decision documented in the spec.

## Project Status

**Phase: Milestone 1 — Skeleton Complete**

The specification (v1.1) is complete and approved. The full repo directory structure has been created with all stub files. All 23 commands, 12 agents, 15 workflows, 14 templates, 23 reference files, 4 skills, 4 hooks, and 3 scripts are in place as stubs. Nothing is functional yet — implementation begins with Milestone 2.

## Build Roadmap

### Milestone 1: Skeleton ✅
- [x] Create full repo directory structure per spec §4
- [x] Create package.json with npm metadata
- [x] Create bin/install.js (basic installer that copies files to .claude/)
- [x] Create all command files as stubs (correct frontmatter, placeholder body)
- [x] Create all agent files as stubs (correct XML structure, placeholder content)
- [x] Create hooks.json with correct matchers
- [x] Create all skill SKILL.md files with correct frontmatter
- [ ] Verify: `/web:help` lists all commands after install
- [x] Goal: Installable skeleton, all commands registered, nothing functional yet

### Milestone 2: Core Workflow — Intake
- [ ] Implement `/web:new` command with full workflow
- [ ] Implement web-orchestrator agent (STATE.md reading, routing)
- [ ] Implement web-intake agent (briefing conversation, guided questions)
- [ ] Implement web-researcher agent (industry/competitor research)
- [ ] Implement BRIEF.md template
- [ ] Implement PROJECT.md template
- [ ] Implement STATE.md and PROGRESS.md auto-generation
- [ ] Implement config.json creation during `/web:new`
- [ ] Implement `/web:progress` command
- [ ] Implement `/web:next` command
- [ ] Implement `/web:help` command
- [ ] Implement next-step routing after intake completion
- [ ] Goal: User can start a new project and get a complete BRIEF.md

### Milestone 3: Strategy + Information Architecture
- [ ] Implement `/web:strategy` command with workflow
- [ ] Implement web-strategist agent with full prompt
- [ ] Implement STRATEGY.md template
- [ ] Implement `/web:sitemap` command with workflow
- [ ] Implement web-ia-architect agent with full prompt
- [ ] Implement SITEMAP.md template
- [ ] Implement PAGE-SPEC.md template (per page generation)
- [ ] Write reference files: psychology.md, navigation-patterns.md, geo-optimization.md
- [ ] Goal: From briefing through complete IA with page specs

### Milestone 4: Design System + Content
- [ ] Implement `/web:design-system` command with workflow
- [ ] Implement web-design-system agent with full prompt
- [ ] Implement DESIGN-SYSTEM.md, tokens.css, COMPONENTS.md templates
- [ ] Implement `/web:content` command with per-page workflow
- [ ] Implement web-copywriter agent with full prompt
- [ ] Implement CONTENT.md template (per page)
- [ ] Write reference files: anti-slop.md, typography.md, color-systems.md, layout-patterns.md
- [ ] Integrate marketingskills references (copywriting, page-cro, geo-optimization)
- [ ] Goal: Design system generated + copy for every page

### Milestone 5: Layout + Build
- [ ] Implement `/web:layout` command with per-page workflow
- [ ] Implement web-layout-architect agent with full prompt
- [ ] Implement LAYOUT.md template (per page)
- [ ] Implement component-spec.md template
- [ ] Implement `/web:build` command with wave execution
- [ ] Implement web-builder agent with sub-agent spawning
- [ ] Write stack reference files: astro.md, nextjs.md, sveltekit.md, tailwind-v4.md, shadcn-ui.md
- [ ] Implement Context7 MCP integration for live framework docs
- [ ] Goal: Actual code generation with atomic git commits

### Milestone 6: QA + Polish
- [ ] Implement `/web:qa` command with parallel audit agents
- [ ] Implement web-qa-auditor agent with sub-agent orchestration
- [ ] Implement web-compliance-checker agent
- [ ] Implement `/web:fix` command (auto-apply fixes)
- [ ] Implement all hooks (post-write-format, post-write-a11y, pre-write-anti-slop, pre-commit-quality)
- [ ] Write reference files: wcag-2.2-aa-checklist.md, core-web-vitals.md, bfsg-requirements.md, impressum.md, consent-management.md, dsgvo-web.md, technical-seo.md, sustainability.md, performance-budgets.md, local-seo-germany.md, wcag-3-preparation.md
- [ ] Implement QA report templates (LIGHTHOUSE.md, WCAG-AUDIT.md, SEO-CHECK.md, COMPLIANCE.md)
- [ ] Goal: Complete workflow from briefing to QA-validated code

### Milestone 7: Advanced Features
- [ ] Implement `/web:audit <url>` (Playwright-based site audit for redesigns)
- [ ] Implement web-inspiration-analyst agent
- [ ] Implement `/web:inspire <url>` (reference site analysis)
- [ ] Implement `/web:revise` with dependency propagation (Rücksprung-Mechanik)
- [ ] Implement `/web:add-page` and `/web:remove-page`
- [ ] Implement `/web:update-content`
- [ ] Implement `/web:quick` and `/web:tweak` (ad-hoc modes)
- [ ] Implement `/web:settings` and `/web:export`
- [ ] Implement auto-loading background skills (web-standards, design-intelligence, conversion-patterns, german-compliance)
- [ ] Goal: Full feature set as specified

## Architecture Summary

Read `specs/gwd-spec.md` for complete details. Quick overview:

- **Commands** (`commands/web/*.md`): Thin XML triggers with frontmatter. User types `/web:strategy`, Claude reads the command file.
- **Workflows** (`get-web-done/workflows/*.md`): Detailed step-by-step phase logic referenced by commands via `@path`.
- **Agents** (`agents/*.md`): XML-structured sub-agent definitions with `<role>`, `<philosophy>`, `<tool_strategy>`, `<context_loading>`, `<output_formats>`, `<referenced_skills>`.
- **Templates** (`get-web-done/templates/*.md`): Exact output formats that agents must follow.
- **References** (`get-web-done/references/**/*.md`): Domain knowledge loaded on demand per agent. Max 300 lines each.
- **Hooks** (`hooks/*`): Deterministic shell scripts that fire on PreToolUse/PostToolUse events.
- **Skills** (`skills/*/SKILL.md`): Auto-loading background knowledge with `user-invocable: false`.

All project state persists to `.webdesign/` in the user's project. Communication between agents is exclusively via files. Sub-agents run in fresh 200K-token context windows.

## Code Style & Conventions

- All system files are Markdown (commands, agents, workflows, templates, references, skills)
- Shell scripts for hooks (bash, POSIX-compatible)
- Node.js for the installer (bin/install.js)
- XML tags within Markdown for structured agent instructions (following GSD convention)
- No TypeScript build step — the system is pure Markdown + Shell + a Node.js installer
- Frontmatter in YAML format for skills and commands
- File references use `@path/to/file.md` syntax (Claude Code convention)

## Key Files

- `specs/gwd-spec.md` — **THE specification. Read this first for any structural question.**
- `specs/research/` — Research foundation documents (Claude, Gemini, Perplexity reports + base guidelines)
- `CLAUDE.md` — This file. Project context for Claude Code sessions.
- `README.md` — Public-facing documentation for GitHub.

## Important Constraints

- Agent prompts must stay under 200 lines including XML structure
- Reference files must stay under 300 lines each
- PROJECT.md (in user's .webdesign/) must stay under 50 lines
- STATE.md must stay under 50 lines
- Per agent: maximum 3-4 reference files loaded (context budget)
- Commands use `disable-model-invocation: true` (only user triggers phases)
- Background skills use `user-invocable: false` (Claude loads them automatically)
- External skill dependencies: marketingskills, designer-skills, web-quality-skills (Tier 1 — recommended, not required)

## GitHub Workflow

### Branch Strategy
- `main` — stable, milestone-complete code only
- `milestone/N-description` — milestone work branches
- `feature/description` — individual feature branches off milestone branches

### PR Review Criteria (for Claude as reviewer)
When reviewing a PR, check in this order:
1. **Spec compliance** — does it match the referenced spec sections (§)?
2. **Constraints** — agent < 200 lines? references < 300 lines? frontmatter valid?
3. **Layer separation** — commands thin, workflows have logic, agents have expertise?
4. **No scope creep** — only changes what the milestone/task requires?
5. **CLAUDE.md updated** — roadmap checkboxes checked for completed items?
6. **No leftover placeholders** — implemented files have real content (stubs for future milestones are fine)?

### Labels
Labels are defined in `.github/labels.yml` and organized by:
- `milestone/*` — which milestone the work belongs to
- `layer/*` — which architectural layer is affected (command, agent, workflow, etc.)
- `phase/*` — which user-facing phase is affected (0-intake through 7-qa)
- `type/*` — bug, feature, task, refactor, docs, spec-change
- `priority/*` — critical, high, medium, low

### Issue Templates
- **Bug Report** — command/agent/phase affected, repro steps, environment
- **Feature Request** — motivation, spec reference, milestone placement
- **Milestone Task** — roadmap item, spec sections, files to touch, acceptance criteria