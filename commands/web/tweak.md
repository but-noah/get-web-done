---
name: "web:tweak"
description: "Minimal change without planning. Direct execution with anti-slop check. For tiny changes only."
disable-model-invocation: true
---

<command>
  <objective>
    Apply a minimal change directly without planning overhead, running only an anti-slop check to ensure quality is maintained.
  </objective>

  <execution_context>
    Phase: Any (post-build)
    Requires: Built pages
    Agents: Orchestrator, Anti-Slop Sub-Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 5 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
