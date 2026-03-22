---
name: "web:next"
description: "Auto-detect and run the next logical step. Reads STATE.md and PROGRESS.md to determine what comes next."
disable-model-invocation: true
---

<command>
  <objective>
    Automatically detect and execute the next logical workflow step by reading STATE.md and PROGRESS.md to determine what comes next.
  </objective>

  <execution_context>
    Phase: Any (always available)
    Requires: STATE.md, PROJECT.md
    Agents: Orchestrator
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 2 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
