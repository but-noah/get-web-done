<!--
  TEMPLATE: PROGRESS.md — Project Dashboard

  Created by:  web-orchestrator agent during Phase 0
  Updated by:  web-orchestrator agent — fully regenerated after every /web:* command execution
  Consumed by: /web:progress command renders this to the user
  Constraint:  Variable length (auto-generated, not hand-edited)

  Rules for the orchestrator:
  - Fully auto-generated — never hand-edited by user
  - Regenerated (not appended) after every /web:* command execution
  - Phase Overview table is static (always 8 rows, status changes)
  - Page Status table grows/shrinks as pages are added/removed via /web:add-page and /web:remove-page
  - Status emojis: ✅ Complete, 🔄 In Progress, ⬜ Not Started, ⚠️ Stale
  - Stale Artifacts section only appears after /web:revise has been used
  - Quick Tasks section only appears after /web:quick has been used
  - Low-Confidence Items carries items from BRIEF.md until they're resolved
  - Recommended Next Action is computed by reading STATE.md and Phase/Page status
  - Statistics are computed from git log and file existence checks
-->

# Project Progress

> Auto-generated. Last updated: [TIMESTAMP]

## Phase Overview

| Phase | Status | Details |
|-------|--------|---------|
| 0 Intake | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 1 Strategy | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 2 Information Architecture | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 3 Design System | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 4 Content | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 5 Layout | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 6 Build | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |
| 7 QA | [STATUS_EMOJI] [STATUS_TEXT] | [details or "—"] |

## Page Status

<!-- One row per page. Columns track per-page phase completion. -->

| Page | Spec | Content | Layout | Built | QA |
|------|------|---------|--------|-------|-----|
| [page-name] | [STATUS_EMOJI] | [STATUS_EMOJI] | [STATUS_EMOJI] | [STATUS_EMOJI] | [STATUS_EMOJI] |

## Stale Artifacts

<!-- [CONDITIONAL: only shown if /web:revise has been used and stale artifacts exist] -->

> [Phase] revised on [DATE]. The following artifacts may need updating:

- [ ] [artifact path] — [reason it may be stale]
- [x] [artifact path] — verified unaffected

## Quick Tasks

<!-- [CONDITIONAL: only shown if /web:quick has been used] -->

| # | Task | Status |
|---|------|--------|
| [NNN] | [task description] | [STATUS_EMOJI] [STATUS_TEXT] |

## Low-Confidence Items

<!-- Carried over from BRIEF.md — items that still need investigation. Remove items as they are resolved. -->

- [field name] `confidence: low` — [what needs to happen to resolve]

## Recommended Next Action

<!-- Computed from STATE.md + Phase/Page status. Show the single most important next step. -->

Based on current state:

```
/web:[command] → [RECOMMENDED] [what this does and why it's next]
```

## Statistics

- **Pages planned:** [N]
- **Pages with content:** [N]
- **Pages built:** [N]
- **Git commits:** [N]
- **Project started:** [DATE]
- **Last activity:** [DATE]
