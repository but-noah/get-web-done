---
name: "web:progress"
description: "Show full project overview: current phase, page statuses, what's next, stale artifacts. Always available."
disable-model-invocation: true
---
<objective>
Display the full project dashboard. Read STATE.md and PROGRESS.md, regenerate
PROGRESS.md if needed, present an intelligent summary with highlighted issues
and recommended next action.

Output should feel like a project dashboard, not a raw file dump.
</objective>

<execution_context>
Phase: Any (always available)
Requires: .webdesign/STATE.md, .webdesign/PROGRESS.md, .webdesign/PROJECT.md
Agent: web-orchestrator (main context)
Agent definition: @agents/web-orchestrator.md
</execution_context>

<process>
Follow the orchestrator's progress_command logic:

1. Read .webdesign/STATE.md and .webdesign/PROGRESS.md.
   If STATE.md doesn't exist: "No GWD project found. Run /web:new to start."
2. Regenerate PROGRESS.md if stale (check if phase status changed since last generation).
3. Present the Phase Overview table (all 8 phases with status emoji + detail).
4. Present the Page Status table (if pages exist — per-page, per-phase completion).
5. Highlight issues prominently:
   - ⚠️ Blockers from STATE.md
   - ⚠️ Stale artifacts with cause
   - Low-confidence items still unresolved from BRIEF.md
6. Show recommended next action with explanation.
7. Show statistics: pages planned, pages with content, pages built,
   git commits, project started date, last activity date.
8. Update STATE.md to record this command was run.
</process>
