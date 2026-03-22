---
name: "web:remove-page"
description: "Remove a page from the project. Updates SITEMAP.md, navigation, and internal links. Usage: /web:remove-page <name>"
disable-model-invocation: true
---

<command>
  <objective>
    Remove a page from the project, updating SITEMAP.md, navigation structure, and all internal links that referenced the removed page.
  </objective>

  <execution_context>
    Phase: Any (post-initialization)
    Requires: SITEMAP.md, built pages
    Agents: Orchestrator, IA Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 4 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
