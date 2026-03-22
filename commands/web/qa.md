---
name: "web:qa"
description: "Run quality audits: Lighthouse, WCAG, SEO, compliance, anti-slop. Parallel audit sub-agents. Optional [page] argument."
disable-model-invocation: true
---

<command>
  <objective>
    Run comprehensive quality audits including Lighthouse, WCAG accessibility, SEO, compliance, and anti-slop checks using parallel audit sub-agents.
  </objective>

  <execution_context>
    Phase: 7 — Quality Assurance
    Requires: Built pages, Playwright MCP
    Agents: Orchestrator, QA Agent, Lighthouse Sub-Agent, WCAG Sub-Agent, SEO Sub-Agent, Anti-Slop Sub-Agent
  </execution_context>

  <process>
    <!-- TODO: Implement in Milestone 5 -->
    <step>Placeholder — not yet implemented</step>
  </process>
</command>
