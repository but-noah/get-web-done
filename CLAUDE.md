# Get Web Done (GWD)

A structured, agentic web design and development system for Claude Code. From briefing to deployed, agency-quality websites — reproducible, strategic, optimized. The "GSD for web design."

## What This Project Is

GWD is an open-source system of commands, agents, workflows, hooks, and reference files that guide Claude Code through the complete web design agency process: Intake → Strategy → Information Architecture → Design System → Content → Layout → Code → QA. It is architecturally inspired by Get Shit Done (GSD, 38K+ stars) but domain-specific for web development.

The full specification lives in `specs/gwd-spec.md` — this is the single source of truth for all architecture decisions, phase definitions, agent designs, template structures, and integration points. **Read this file before making any structural decisions.**

The research foundation (three independent deep-research reports + base guidelines) lives in `specs/research/`. These documents contain the evidence behind every design decision documented in the spec.

## Project Status

**Phase: Milestone 3 — Strategy + IA Complete**

Milestones 1-3 are complete. The full workflow from `/web:new` → `/web:strategy` → `/web:sitemap` is implemented with all agents, workflows, templates, and 7 reference files (psychology, geo-optimization, anti-slop, typography, color-systems, layout-patterns, navigation-patterns). Implementation continues with Milestone 4 (Design System + Content).

## Build Roadmap

### Milestone 1: Skeleton ✅
- [x] Create full repo directory structure per spec §4
- [x] Create package.json with npm metadata
- [x] Create bin/install.js (basic installer that copies files to .claude/)
- [x] Create all command files as stubs (correct frontmatter, placeholder body)
- [x] Create all agent files as stubs (correct XML structure, placeholder content)
- [x] Create hooks.json with correct matchers
- [x] Create all skill SKILL.md files with correct frontmatter
- [x] Verify: `/web:help` lists all commands after install
- [x] Goal: Installable skeleton, all commands registered, nothing functional yet

### Milestone 2: Core Workflow — Intake ✅
- [x] Implement `/web:new` command with full workflow
- [x] Implement web-orchestrator agent (STATE.md reading, routing)
- [x] Implement web-intake agent (briefing conversation, guided questions)
- [x] Implement web-researcher agent (industry/competitor research)
- [x] Implement BRIEF.md template
- [x] Implement PROJECT.md template
- [x] Implement STATE.md and PROGRESS.md auto-generation
- [x] Implement config.json creation during `/web:new`
- [x] Implement `/web:progress` command
- [x] Implement `/web:next` command
- [x] Implement `/web:help` command
- [x] Implement next-step routing after intake completion
- [x] Goal: User can start a new project and get a complete BRIEF.md

### Milestone 3: Strategy + Information Architecture ✅
- [x] Implement `/web:strategy` command with workflow
- [x] Implement web-strategist agent with full prompt
- [x] Implement STRATEGY.md template
- [x] Implement `/web:sitemap` command with workflow
- [x] Implement web-ia-architect agent with full prompt
- [x] Implement SITEMAP.md template
- [x] Implement PAGE-SPEC.md template (per page generation)
- [x] Write reference files: psychology.md, navigation-patterns.md, geo-optimization.md
- [x] Goal: From briefing through complete IA with page specs

### Milestone 4: Design System + Content
- [ ] Implement `/web:design-system` command with workflow
- [ ] Implement web-design-system agent with full prompt
- [ ] Implement DESIGN-SYSTEM.md, tokens.css, COMPONENTS.md templates
- [ ] Implement `/web:content` command with per-page workflow
- [ ] Implement web-copywriter agent with full prompt
- [ ] Implement CONTENT.md template (per page)
- [x] Write reference files: anti-slop.md, typography.md, color-systems.md, layout-patterns.md (completed pre-M3)
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

## Source of Truth Hierarchy

When implementation files and the spec disagree, follow this priority:
1. **Agent files** (`agents/*.md`) — the actual agent behavior
2. **Workflow files** (`get-web-done/workflows/*.md`) — the actual phase logic
3. **Template files** (`get-web-done/templates/*.md`) — the actual output formats
4. **Reference files** (`get-web-done/references/**/*.md`) — the actual domain knowledge
5. **specs/gwd-spec.md** — the architectural intent (may lag behind implementation)

The spec is v1.2 and reflects the architecture. Implementation files are the current truth. If you find a conflict, update the spec to match implementation, not the other way around.

## Important Constraints

- Agent prompts must stay under 200 lines including XML structure
- Reference files must stay under 300 lines each
- PROJECT.md (in user's .webdesign/) must stay under 50 lines
- STATE.md must stay under 50 lines
- Per agent: maximum 3-4 reference files loaded (context budget)
- Commands use `disable-model-invocation: true` (only user triggers phases)
- Background skills use `user-invocable: false` (Claude loads them automatically)
- External skill dependencies: marketingskills, designer-skills, web-quality-skills (Tier 1 — recommended, not required)

## Design Principles

Core principles that govern all GWD agents and outputs. Full list in specs/gwd-spec.md §24.

1. **The complexity is in the system, not in the workflow.** Users see simple commands. Behind the scenes: context engineering, agent orchestration, state management.
2. **Every phase has clear inputs, defined outputs, and human approval gates.** No ambiguity about what happens when.
3. **Fresh contexts prevent quality degradation.** Heavy work in sub-agents with clean 200K windows. Main session stays lean.
4. **Files are the communication medium.** No in-memory state. Everything persists to `.webdesign/`. Sessions can crash and resume.
5. **Deterministic enforcement beats prompting.** Hooks always execute. Skills are suggestions. Use hooks for non-negotiable quality gates.
6. **Strategy before pixels.** No code is generated before the strategic foundation exists.
7. **Every command ends with clear next-step routing.** The user is never lost.
8. **Specifics before claims, discovery before positioning.** Distributional convergence applies to strategy and copy, not just design. Every claim must be anchored in something specific to THIS project. First drafts are raw material, not deliverables.
9. **Never position from category knowledge alone.** Collect client-specific stories, processes, beliefs before writing any positioning.
10. **Never present first-draft positioning.** All positioning must pass the Self-Review Gate before the user sees it.

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