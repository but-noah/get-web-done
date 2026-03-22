---
name: "web:new"
description: "Start a new web project. Guides through structured briefing conversation (new site or redesign). Creates BRIEF.md, PROJECT.md, STATE.md, PROGRESS.md, config.json."
disable-model-invocation: true
---
<objective>
Guide the user through a structured briefing conversation to initialize a new
web project, producing all foundational project artifacts in .webdesign/.

This is the entry point for the entire GWD system. The intake agent runs in the
main context (interactive conversation, not a sub-agent).
</objective>

<execution_context>
Phase: 0 — Intake
Requires: None (this is the entry point)
Agent: web-intake (main context — interactive conversation with user)
Sub-agents: web-researcher (optional, if user needs competitor/industry research)
Workflow: @get-web-done/workflows/intake-phase.md
Agent definition: @agents/web-intake.md
</execution_context>

<process>
Follow the workflow defined in @get-web-done/workflows/intake-phase.md:

1. Create .webdesign/ directory if needed. Check for existing state (resume or fresh start).
2. Load templates: @get-web-done/templates/brief.md, project.md, state.md, progress.md.
3. Ask: New website or Redesign? (AskUserQuestion single-select)
4. Run the intake agent's block-by-block briefing conversation (Phases 1-7).
   - One topic area at a time, summarize, confirm, move on.
   - Use AskUserQuestion for structured choices, free text for open discovery.
   - Skip questions already answered. Set confidence markers.
5. Optionally spawn web-researcher if user needs help with competitors/industry.
6. Generate BRIEF.md following template. Present summary. Get user approval (gate).
7. Generate PROJECT.md, STATE.md, PROGRESS.md, config.json.
8. Commit all artifacts.
9. Present next-step routing with /web:strategy as recommended next action.
</process>
