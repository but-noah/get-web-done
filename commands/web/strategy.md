---
name: "web:strategy"
description: "Develop brand positioning, messaging framework, personas, and conversion strategy. Run after /web:new completes the briefing phase."
disable-model-invocation: true
---
<objective>
Develop a sharp, actionable brand strategy that drives every design and content
decision downstream. Transform the brief (often with low-confidence items) into
specific positioning, messaging, personas, and conversion architecture.

This is the most intellectually demanding phase. The output (STRATEGY.md) is
the most-referenced artifact in the entire system.
</objective>

<execution_context>
Phase: 1 — Strategy
Requires: .webdesign/BRIEF.md (status: APPROVED)
Agent: web-strategist (main context — interactive conversation)
Sub-agents: web-researcher (optional, for competitor/industry/keyword research)
Workflow: @get-web-done/workflows/strategy-phase.md
Agent definition: @agents/web-strategist.md
References loaded: @get-web-done/references/design/psychology.md, @get-web-done/references/seo-geo/geo-optimization.md
</execution_context>

<process>
Follow the workflow defined in @get-web-done/workflows/strategy-phase.md:

1. Load context: BRIEF.md, research/*, references.
2. Audit brief: identify all low-confidence items, categorize by criticality.
3. Resolve critical gaps: reason, research (spawn web-researcher if needed), ask user.
4. Develop positioning: Category → Segment → Problem → Solution → Differentiator → Proof.
5. Build messaging: Value Proposition, Supporting Messages, Objection Handling.
6. Map conversion: Primary/Secondary CTA, Trust Architecture, User Journey.
7. Define tone, writing rules, SEO/GEO approach.
8. Write STRATEGY.md. Get user approval (gate).
9. Update STATE.md, PROGRESS.md, PROJECT.md. Commit.
10. Next-step routing: /web:sitemap recommended.
</process>
