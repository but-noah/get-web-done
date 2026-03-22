---
name: "web:fix"
description: "Auto-apply fixes from QA findings. Re-runs affected audits to verify fixes."
disable-model-invocation: true
---

<command>
  <objective>
    Automatically apply fixes for issues identified during QA, then re-run affected audits to verify the fixes resolve the problems.
  </objective>

  <execution_context>
    Phase: 7 — Quality Assurance (Fix cycle)
    Requires: QA results, Built pages
    Agents: Orchestrator, Fix Agent, QA Agent (verification)
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 5 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
