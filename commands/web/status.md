---
name: "web:status"
description: "Show detailed status of a specific phase or page. More granular than /web:progress. Usage: /web:status [phase|page]"
disable-model-invocation: true
---
<objective>
Show detailed status for a specific phase or page. This is the drill-down view —
more granular than /web:progress which shows the full dashboard.
</objective>

<execution_context>
Phase: Any (always available)
Requires: .webdesign/STATE.md, .webdesign/PROGRESS.md, .webdesign/PROJECT.md
Agent: web-orchestrator (main context)
Agent definition: @agents/web-orchestrator.md
</execution_context>

<process>
Follow the orchestrator's status_command logic:

1. Parse the target argument from the user's command.

2. If target is a PHASE NAME (intake, strategy, sitemap, design-system, content,
   layout, build, qa):
   - Show phase-level detail: which pages are done, in progress, not started.
   - Show phase-specific artifacts and their status (exists? approved? stale?).
   - Show relevant low-confidence items or stale markers for this phase.
   - Show when this phase was started/completed (if applicable).

3. If target is a PAGE NAME (homepage, about, pricing, etc.):
   - Show cross-phase status for that page: which phases are done.
   - List all artifacts for this page:
     - pages/[name]/SPEC.md — exists? content summary?
     - pages/[name]/CONTENT.md — exists? word count?
     - pages/[name]/LAYOUT.md — exists? section count?
   - Show any stale markers on that page's artifacts.

4. If NO TARGET provided: fall back to /web:progress behavior.

5. If target doesn't match any known phase or page:
   "Unknown target '[target]'. Did you mean one of these?"
   List known phases and pages.

6. Update STATE.md to record this command was run.
</process>
