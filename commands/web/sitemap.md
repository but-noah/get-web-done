---
name: "web:sitemap"
description: "Plan information architecture: pages, sections, navigation, user flows. Creates SITEMAP.md and per-page SPEC files."
disable-model-invocation: true
---
<objective>
Plan the complete information architecture — page inventory, section structure,
navigation, and user flows. Translate strategy into buildable structure where
every page has a clear purpose tied to the conversion goals.
</objective>

<execution_context>
Phase: 2 — Information Architecture
Requires: .webdesign/STRATEGY.md (status: APPROVED)
Agent: web-ia-architect (main context — interactive conversation)
Workflow: @get-web-done/workflows/sitemap-phase.md
Agent definition: @agents/web-ia-architect.md
References loaded: @get-web-done/references/design/psychology.md, @get-web-done/references/design/navigation-patterns.md
</execution_context>

<process>
Follow the workflow defined in @get-web-done/workflows/sitemap-phase.md:

1. Load context: STRATEGY.md, BRIEF.md, references.
2. Determine page inventory based on personas and conversion paths.
3. Present pages to user, confirm (AskUserQuestion for additional pages).
4. Design navigation: primary (5-7 items), mobile, footer, breadcrumbs.
5. Define section structure per page using page-type patterns.
6. Map user flows: primary conversion, secondary, information gathering.
7. Write SITEMAP.md + per-page SPEC.md files. Get user approval (gate).
8. Update STATE.md, PROGRESS.md, PROJECT.md. Commit.
9. Next-step routing: /web:design-system recommended.
</process>
