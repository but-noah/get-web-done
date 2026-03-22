---
name: "web:next"
description: "Auto-detect and run the next logical step. Reads STATE.md and PROGRESS.md to determine what comes next."
disable-model-invocation: true
---
<objective>
Determine the next logical step in the project workflow and suggest it to the user.
Ask before executing — do NOT silently launch into the next phase.
Exception: if config.json → workflow.auto_advance = true, execute directly.
</objective>

<execution_context>
Phase: Any (always available)
Requires: .webdesign/STATE.md, .webdesign/PROGRESS.md, .webdesign/PROJECT.md
Agent: web-orchestrator (main context)
Agent definition: @agents/web-orchestrator.md
</execution_context>

<process>
Follow the orchestrator's next_command decision tree (first match wins):

1. Does STATE.md have blockers?
   → YES: Surface the blocker. "There's a blocker: [description]. Is this resolved?"
          If resolved → clear blocker from STATE.md, re-evaluate.
          If not → "This needs to be resolved before we continue. [help suggestion]"

2. Are there stale artifacts from a revision?
   → YES: Identify next stale artifact in dependency order.
          "After your [phase] revision, [artifact] needs updating."
          Suggest: /web:[appropriate command]

3. Is there an in-progress page in the current phase?
   → YES: "You were working on [page] in Phase [N]."
          Suggest: /web:[phase-command] [page]

4. Are all pages complete for the current phase?
   → YES: "Phase [N] is complete for all pages."
          Suggest: /web:[next-phase-command]

5. Are ALL phases complete?
   → YES: "🎉 All phases complete!"
          Suggest: /web:export or final review.

6. Fallback:
   → "Project is at Phase [N]. Ready to continue."
     Suggest: /web:[current-phase-command]

After the suggestion, always show the routing block:
  Your options:
    /web:[recommended]  → [RECOMMENDED] [explanation]
    /web:[alternative]  → [alternative explanation]
    /web:progress       → View full project status
    /web:quick          → Handle an ad-hoc task
    /web:help           → See all available commands

Update STATE.md to record this command was run.
</process>
