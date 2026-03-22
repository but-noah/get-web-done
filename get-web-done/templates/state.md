<!--
  TEMPLATE: STATE.md — Session Memory

  Created by:  web-orchestrator agent during Phase 0
  Updated by:  web-orchestrator agent at the END of every /web:* command execution
  Consumed by: web-orchestrator reads this FIRST at session start before doing anything
  Constraint:  MUST stay under 50 lines when filled

  This answers: "Where was I? What's happening? What needs attention?"

  Rules for the orchestrator:
  - Auto-updated at the END of every /web:* command execution
  - If STATE.md doesn't exist, this is a fresh project → suggest /web:new
  - Blockers section is critical — if non-empty, /web:next surfaces them before suggesting work
  - Context Notes are free-form for edge cases that don't fit elsewhere (max 3 lines)
  - Active Decisions are limited to max 5 items — most recent decisions only
-->

# Session State

> Last updated: [TIMESTAMP]
> Updated by: [command that last wrote this]

## Position
- **Phase:** [N] — [Phase Name]
- **Sub-task:** [specific activity within phase, e.g., "writing content for pricing page"]
- **Mode:** [workflow/quick/tweak]

## Last Completed
- [What was the last successfully completed action]
- [Committed as: "commit message"]

## Active Decisions
<!-- Decisions made in recent sessions that downstream phases need to know. Max 5 items. -->
- [Decision 1]
- [Decision 2]

## Blockers
<!-- Anything waiting on user input or external action. Empty if none. -->
- [ ] [Blocker description — what's needed to unblock]

## Stale Artifacts
- **Count:** [0 or number]
- **Cause:** [if >0: which revision triggered staleness]
- **Next stale:** [if >0: which artifact to update next]

## Context Notes
<!-- Important context from the last session that the next session needs. Max 3 lines. -->
- [e.g., User prefers German copy but English UI labels]
- [e.g., Client pushback on dark mode — removed from scope]
