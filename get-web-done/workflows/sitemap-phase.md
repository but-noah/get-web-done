<workflow name="sitemap-phase">
  <purpose>
    Plan information architecture: page inventory, section structure, navigation,
    and user flows. Translates strategy into buildable structure.
    Runs in the main context (interactive conversation with the user).
  </purpose>

  <prerequisites>
    <required_files>
      <file>.webdesign/STRATEGY.md</file>
      <file>.webdesign/BRIEF.md</file>
    </required_files>
    <required_phase_status>
      <phase name="strategy" status="complete"/>
    </required_phase_status>
    <pre_check>
      Verify STRATEGY.md has status APPROVED. If not:
      "Strategy hasn't been approved yet. Run /web:strategy first."
    </pre_check>
  </prerequisites>

  <steps>
    <step name="load-context">
      Read .webdesign/STRATEGY.md — personas, conversion strategy, messaging.
      Read .webdesign/BRIEF.md — scope, compliance, market.
      Read .webdesign/PROJECT.md — project overview.
      Read @get-web-done/references/design/psychology.md — cognitive principles.
      Read @get-web-done/references/design/navigation-patterns.md — nav conventions.
      Read .webdesign/AUDIT.md if exists (redesign: existing page structure).
    </step>

    <step name="determine-pages">
      Based on STRATEGY.md personas and conversion paths, determine page inventory.
      Apply minimum viable site principle.
      Present proposed pages as table: name, URL path, purpose, persona, CTA.
      Use AskUserQuestion multiSelect for additional pages.
      Confirm final page list with user.
    </step>

    <step name="design-navigation">
      Design primary nav (5-7 items), mobile nav, footer nav, breadcrumbs.
      Present to user. Confirm or adjust.
    </step>

    <step name="define-sections">
      For each page, define section structure using page-type patterns.
      Present homepage structure in detail (section-by-section with rationale).
      Present other pages as summary tables.
      Confirm with user.
    </step>

    <step name="map-user-flows">
      Define primary conversion flow, secondary flow, information gathering flow.
      Define internal linking strategy.
    </step>

    <step name="write-sitemap" type="gate">
      Write .webdesign/SITEMAP.md following @get-web-done/templates/sitemap.md.
      Set status to DRAFT.
      Present summary. Ask for approval.

      If changes: update, re-present.
      If approved: set status to APPROVED.
    </step>

    <step name="write-page-specs">
      For each page in the inventory:
        Create directory: .webdesign/pages/[page-name]/
        Write .webdesign/pages/[page-name]/SPEC.md following @get-web-done/templates/page-spec.md.
        Include: page meta, all sections with purpose/content type/pattern/CTA/notes,
        acceptance criteria.
    </step>

    <step name="update-state">
      Update .webdesign/STATE.md: Phase 2 IA complete.
      Regenerate .webdesign/PROGRESS.md: Phase 2 = Complete, page status table populated.
      Update .webdesign/PROJECT.md: add page count and page list to Scope.
    </step>

    <step name="commit">
      Stage and commit:
        .webdesign/SITEMAP.md
        .webdesign/pages/*/SPEC.md (all page specs)
        .webdesign/STATE.md
        .webdesign/PROGRESS.md
        .webdesign/PROJECT.md
      Commit message: "ia: complete information architecture — [N] pages, [total sections] sections"
    </step>

    <step name="next-step-routing">
      ✅ Information Architecture complete.

      Pages planned: [N] — [list page names]
      Navigation: [N] primary nav items
      Sections: [total sections across all pages]

      Page specs created:
        .webdesign/pages/homepage/SPEC.md
        .webdesign/pages/[...]/SPEC.md

      Your options:
        /web:design-system   → [RECOMMENDED] Create color tokens, typography, spacing system
        /web:add-page <name> → Add another page
        /web:revise sitemap  → Change page structure or sections
        /web:progress        → View full project status

      Tip: The design system defines the visual language before any content is written.
           It ensures every page looks like it belongs to the same brand.
    </step>
  </steps>
</workflow>
