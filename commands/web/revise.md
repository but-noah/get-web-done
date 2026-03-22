---
name: "web:revise"
description: "Return to a previous phase and update its artifact. Marks downstream artifacts as potentially stale. Usage: /web:revise <phase> [page]"
disable-model-invocation: true
---

<command>
  <objective>
    Return to a previous phase to update its artifact, automatically marking all downstream artifacts as potentially stale and requiring re-validation.
  </objective>

  <execution_context>
    Phase: Any (always available)
    Requires: STATE.md, target phase artifact
    Agents: Orchestrator, phase-specific Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 4 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
