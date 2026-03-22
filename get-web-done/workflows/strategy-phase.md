<workflow name="strategy-phase">
  <purpose>
    Develop brand positioning, messaging framework, audience personas, and conversion
    strategy. This transforms the brief into an actionable strategic foundation.
    Runs in the main context (interactive conversation with the user).
  </purpose>

  <prerequisites>
    <required_files>
      <file>.webdesign/BRIEF.md</file>
    </required_files>
    <required_phase_status>
      <phase name="intake" status="complete"/>
    </required_phase_status>
    <pre_check>
      Verify BRIEF.md has status APPROVED. If not:
      "Your brief hasn't been approved yet. Run /web:new to complete the briefing."
    </pre_check>
  </prerequisites>

  <steps>
    <step name="load-context">
      Read .webdesign/BRIEF.md — the complete brief.
      Read .webdesign/PROJECT.md — project overview.
      Read @get-web-done/references/design/psychology.md — cognitive principles.
      Read @get-web-done/references/seo-geo/geo-optimization.md — GEO strategy.
      Read .webdesign/AUDIT.md if exists (redesign projects).
      Read .webdesign/INSPIRATION.md if exists.
      Read all files in .webdesign/research/ if directory has content.
    </step>

    <step name="audit-brief">
      Identify all low-confidence items in BRIEF.md.
      Categorize: critical (ICP, differentiator, primary conversion),
      important (objections, competitors), nice-to-have (reference sites, micro-conversions).
      Present to user: what's strong, what needs work.
    </step>

    <step name="resolve-gaps">
      For critical gaps:
        - Reason from available information where possible.
        - Spawn web-researcher (@agents/web-researcher.md) via Agent tool if needed.
        - Ask user targeted questions for gaps that need human input.
      Must resolve all critical gaps before proceeding.
    </step>

    <step name="deep-discovery">
      MANDATORY — DO NOT SKIP. Collect unique, client-specific material
      before any positioning work. Category knowledge produces category-level slop.

      Adapt questions to project type (freelancer/startup/B2B/SaaS/personal).
      Ask about: specific projects, processes, what they refuse, what clients say.

      COMPLETION CRITERIA (all three required):
        1. At least ONE specific story/fact unique to this client
        2. At least ONE attitude/belief/principle shaping how they work
        3. At least ONE explicit "not this" — what they reject or refuse

      See @agents/web-strategist.md deep_discovery section for question templates.
    </step>

    <step name="develop-positioning">
      Draft positioning internally. Run Self-Review Gate:
        CHECK 1 — Competitor Test: could a competitor say this?
        CHECK 2 — Anchor Test: is every claim anchored in Deep Discovery material?
        CHECK 3 — Recognition Test: will the client say "that's exactly me"?
      Iterate internally up to 3 times. Then present to user.
      If multiple viable angles: use AskUserQuestion single-select (2-3 options).
      Get user confirmation before proceeding.
    </step>

    <step name="develop-messaging">
      Build messaging hierarchy:
      Value Proposition (6-10 words), Supporting Messages (3-5 with proof),
      Objection Handling table.
      Present to user. Ask: "How does this resonate?"
      Iterate if needed.
    </step>

    <step name="develop-conversion-strategy">
      Define: Primary CTA (text, placement, friction reducers),
      Secondary CTA, Trust Architecture (above fold, mid-page, pre-CTA),
      User Journey Map, Content Tone & Voice rules, SEO/GEO approach.
      Present to user. Ask: "Shall I finalize this into STRATEGY.md?"
    </step>

    <step name="write-strategy" type="gate">
      Write .webdesign/STRATEGY.md following @get-web-done/templates/strategy.md exactly.
      Set status to DRAFT.
      Present summary to user. Ask for approval.

      If changes requested: update, re-present.
      If approved: set status to APPROVED, set date.
    </step>

    <step name="update-state">
      Update .webdesign/STATE.md: Phase 1 Strategy complete.
      Regenerate .webdesign/PROGRESS.md: Phase 1 = Complete.
      Update .webdesign/BRIEF.md: change resolved low-confidence items.
      Update .webdesign/PROJECT.md: add key decisions from strategy.
    </step>

    <step name="commit">
      Stage and commit:
        .webdesign/STRATEGY.md
        .webdesign/STATE.md
        .webdesign/PROGRESS.md
        .webdesign/BRIEF.md (if updated)
        .webdesign/PROJECT.md (if updated)
        .webdesign/research/*.md (if researcher was spawned)
      Commit message: "strategy: complete positioning and messaging framework"
    </step>

    <step name="next-step-routing">
      ✅ Strategy complete. STRATEGY.md created and approved.

      Resolved: [X] of [Y] low-confidence items from the brief.
      Positioning: "[short positioning statement]"
      Primary CTA: [CTA text] → [action]
      Personas: [N] defined

      Your options:
        /web:sitemap       → [RECOMMENDED] Plan information architecture — pages, sections, navigation
        /web:revise strategy → Adjust positioning or messaging
        /web:progress       → View full project status

      Tip: The sitemap translates your strategy into structure.
           Every page needs a clear purpose tied to your conversion goals.
    </step>
  </steps>
</workflow>
