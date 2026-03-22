## Summary

<!-- 1-3 sentences: what this PR does and why -->

## Milestone & Spec Reference

- **Milestone:** <!-- e.g., Milestone 2: Core Workflow — Intake -->
- **Spec sections:** <!-- e.g., §7 Commands, §8 Agents, §9 Workflows -->

## Changes

<!-- Bullet list of what was added/changed/removed, grouped by layer -->

### Commands
<!-- - `commands/web/new.md` — implemented full workflow trigger -->

### Agents
<!-- - `agents/web-intake.md` — full prompt with briefing logic -->

### Workflows
<!-- - `get-web-done/workflows/intake-phase.md` — complete orchestration -->

### Templates
<!-- - `get-web-done/templates/brief.md` — BRIEF.md output format -->

### References
<!-- - `get-web-done/references/design/psychology.md` — Hick's Law, Fogg Model -->

### Hooks / Skills / Scripts
<!-- - N/A -->

### Other
<!-- - package.json, CLAUDE.md, etc. -->

## Constraints Checklist

- [ ] Agent prompts < 200 lines (including XML structure)
- [ ] Reference files < 300 lines each
- [ ] Templates match spec §21 structure
- [ ] Commands have `disable-model-invocation: true`
- [ ] Skills have `user-invocable: false`
- [ ] No hardcoded values that should be in config.json
- [ ] Frontmatter YAML is valid
- [ ] XML structure is well-formed

## Test Plan

<!-- How to verify this works. Be specific: -->
<!-- - [ ] Run `/web:new` and complete briefing → BRIEF.md created -->
<!-- - [ ] Run `/web:progress` → shows correct phase status -->

## Context for Reviewer

<!-- Anything the reviewer (Claude) should pay attention to: -->
<!-- - Tricky decisions made and why -->
<!-- - Known limitations or TODOs left intentionally -->
<!-- - Dependencies on other milestones -->
