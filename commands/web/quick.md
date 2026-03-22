---
name: "web:quick"
description: "Ad-hoc change with quality guards. Plans, executes, verifies in mini-workflow. Tracked in .webdesign/quick/."
disable-model-invocation: true
---

<command>
  <objective>
    Execute an ad-hoc change with quality guards using a mini-workflow that plans, executes, and verifies the change, tracked in .webdesign/quick/.
  </objective>

  <execution_context>
    Phase: Any (post-build)
    Requires: Built pages, STATE.md
    Agents: Orchestrator, Quick Agent, QA Agent (verification)
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 5 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
