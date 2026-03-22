---
name: "web:add-page"
description: "Add a new page to the project. Creates page spec, runs phases 2-6 for this page. Usage: /web:add-page <name>"
disable-model-invocation: true
---

<command>
  <objective>
    Add a new page to the project by creating its page spec and running phases 2 through 6 (IA, design system integration, content, layout, build) for that page.
  </objective>

  <execution_context>
    Phase: Any (post-initialization)
    Requires: SITEMAP.md, DESIGN-SYSTEM.md, STRATEGY.md
    Agents: Orchestrator, IA Agent, Content Agent, Layout Agent, Build Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 4 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
