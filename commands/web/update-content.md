---
name: "web:update-content"
description: "Quick content update without full workflow. Updates CONTENT.md, marks downstream as stale. Usage: /web:update-content [page]"
disable-model-invocation: true
---

<command>
  <objective>
    Perform a quick content update without running the full workflow, updating CONTENT.md and marking downstream artifacts as stale for re-processing.
  </objective>

  <execution_context>
    Phase: Any (post-content)
    Requires: CONTENT.md, STATE.md
    Agents: Orchestrator, Content Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 4 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
