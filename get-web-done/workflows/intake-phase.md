<workflow name="intake-phase">
  <purpose>
    Entry point for all new GWD projects. Conducts a structured briefing conversation
    with the user, produces BRIEF.md, and initializes all project state files.
    This workflow runs in the main context (interactive) — not as a sub-agent.
  </purpose>

  <prerequisites>
    <required_files>
      <!-- None — this is the entry point. No prior files needed. -->
    </required_files>
    <required_phase_status>
      <!-- None — this is Phase 0. -->
    </required_phase_status>
  </prerequisites>

  <steps>
    <step name="init-directory">
      Create .webdesign/ directory if it doesn't exist.
      If .webdesign/STATE.md already exists, read it — this may be a resumed session.
      If .webdesign/BRIEF.md exists and status is DRAFT, offer to resume or start fresh.
    </step>

    <step name="load-templates">
      Read @get-web-done/templates/brief.md — the agent must follow this format exactly.
      Read @get-web-done/templates/project.md — for PROJECT.md generation.
      Read @get-web-done/templates/state.md — for STATE.md generation.
      Read @get-web-done/templates/progress.md — for PROGRESS.md generation.
    </step>

    <step name="project-type">
      Ask the user: New website or Redesign?
      Use AskUserQuestion with single-select, two options.

      If Redesign:
        Ask for the current website URL.
        Note the URL — the audit will run later via /web:audit, not during this conversation.
        Explain: "I'll analyze [URL] later with /web:audit. For now, let's focus on
        your goals and vision for the new version."
        Set project type = "redesign" for BRIEF.md and config.json.

      If New:
        Set project type = "new" for BRIEF.md and config.json.
        Continue to the opening question.
    </step>

    <step name="briefing-conversation">
      Run the web-intake agent's conversation flow (Phases 1-7 from agent definition).

      The agent follows these rules:
        - Block-by-block: one topic area at a time, summarize, confirm, move on.
        - 3-5 questions per block maximum.
        - Use AskUserQuestion for structured choices (2-4 options, single or multi-select).
        - Use conversational messages for open-ended discovery and when more than 4 options needed.
        - Skip questions already answered by the user's earlier responses.
        - Set confidence markers based on answer specificity.
        - Never leave fields blank — use [TO BE DETERMINED] for unknowns.
        - Detect simple projects early and compress the briefing accordingly.
        - Mirror the user's language for values; keep field names in English.

      Block sequence:
        1. Opening question — one big free-text question, parse response thoroughly
        2. Company and Product — delivery model, pricing, differentiator
        3. Audience and Goals — ICP, decision makers, primary CTA, objections
        4. Brand and Tone — assets, adjectives, anti-adjectives, reference sites
        5. Competition — direct competitors, alternatives (offer research if unknown)
        6. Technical and Compliance — stack, market, compliance auto-derivation, integrations
        7. Timeline and Constraints — deadline, budget, content availability

      Each block ends with a summary and confirmation before moving to the next.
    </step>

    <step name="optional-research">
      If during the briefing the user couldn't name competitors or industry details:
        Offer to spawn web-researcher agent (@agents/web-researcher.md) in a fresh
        sub-agent context using the Agent tool.

        Pass to the researcher agent:
          - Task: "competitor" or "industry" research (see agent's research_types)
          - Company name, industry, product description, target audience
          - Any partial info the user already provided

        The researcher writes to .webdesign/research/:
          - research/competitors.md (for competitor research)
          - research/industry.md (for industry/audience research)

        After the researcher completes:
          Read the output files.
          Discuss findings with the user: "I found these main competitors: [list].
          Does this match your understanding?"
          Incorporate findings into BRIEF.md with appropriate confidence markers.
    </step>

    <step name="generate-brief-draft">
      Generate .webdesign/BRIEF.md following @get-web-done/templates/brief.md exactly.
      Set brief status to DRAFT.

      Present a SUMMARY VIEW to the user (NOT the full file):
        📋 PROJECT: [Company] — [one-line description]
        🏢 COMPANY: [industry], [size], [location]
        🎯 PRODUCT: [core offering] for [audience]
        👥 AUDIENCE: [ICP description]
        🎯 PRIMARY CTA: [primary conversion]
        🎨 BRAND TONE: [5 adjectives]
        ⚙️ STACK: [framework] + [styling] + [components]
        🌍 MARKET: [target market] → [compliance items]
        📄 PAGES: [estimated number based on project type]

        ⚠️ LOW-CONFIDENCE ITEMS (need investigation):
        - [list each confidence: low field]

        "The full brief has been saved to .webdesign/BRIEF.md."

      Ask: "Does this look right? Any changes before I mark it as approved?"
      Wait for the user's response.

      If changes requested:
        Update BRIEF.md with corrections.
        Re-present summary.
        Ask again. Repeat until approved.
    </step>

    <!-- CRITICAL: This step runs IMMEDIATELY after the user approves the brief. -->
    <!-- Do NOT stop after approval. Do NOT wait for another user message. -->
    <!-- The approval IS the trigger for all of the following steps. -->

    <step name="finalize-brief">
      IMMEDIATELY after the user says the brief looks good / approves:

      1. Update .webdesign/BRIEF.md:
         - Change "Brief status: DRAFT" to "Brief status: APPROVED"
         - Set approval date to today
         - Set "Approved by" to the user
    </step>

    <step name="generate-project-md">
      2. Write .webdesign/PROJECT.md following @get-web-done/templates/project.md:
         - Project name and one-sentence description
         - Stack section from user's choices
         - Scope section (type, market, language, pages estimate, compliance)
         - Status: Phase 0 Intake complete, next step /web:strategy
         - Key Decisions: 2-3 initial decisions from the briefing
         - References: link to BRIEF.md
         - MUST stay under 50 lines
    </step>

    <step name="generate-state-md">
      3. Write .webdesign/STATE.md following @get-web-done/templates/state.md:
         - Phase: 0 — Intake (complete)
         - Sub-task: briefing finished
         - Mode: workflow
         - Last Completed: BRIEF.md approved
         - Active Decisions: key decisions from briefing
         - Blockers: none
         - Stale Artifacts: count 0
         - MUST stay under 50 lines
    </step>

    <step name="generate-progress-md">
      4. Write .webdesign/PROGRESS.md following @get-web-done/templates/progress.md:
         - Phase 0 Intake: ✅ Complete
         - All other phases: ⬜ Not Started
         - Page Status table: empty (pages defined in Phase 2)
         - Low-Confidence Items: carried from BRIEF.md
         - Recommended Next Action: /web:strategy
         - Statistics: project started today, 0 pages planned
    </step>

    <step name="generate-config-json">
      5. Write .webdesign/config.json:
         {
           "project": { "name": "[name]", "type": "[new/redesign]",
                        "market": "[market]", "compliance": ["bfsg","tdddg","dsgvo"] },
           "stack":   { "framework": "[choice]", "styling": "tailwind-v4",
                        "components": "shadcn-ui", "cms": null,
                        "hosting": "[choice]", "analytics": "plausible" },
           "models":  { "profile": "balanced", "overrides": {} },
           "workflow": { "mode": "interactive", "auto_research": true,
                         "auto_advance": false },
           "quality": { "performance_budget_kb": 500, "lighthouse_min_score": 90,
                        "wcag_level": "AA", "co2_budget_grams": 1.0 },
           "git":     { "commit_artifacts": true, "branching_strategy": "none" },
           "mcp":     { "playwright": true, "context7": true,
                        "figma": false, "github": false }
         }
    </step>

    <step name="commit-artifacts">
      6. Stage and commit ALL .webdesign/ files together:
         git add .webdesign/BRIEF.md .webdesign/PROJECT.md .webdesign/STATE.md
                 .webdesign/PROGRESS.md .webdesign/config.json
         Also add .webdesign/research/*.md if researcher was spawned.

         Commit message: "intake: complete project brief for [project name]"
    </step>

    <step name="next-step-routing">
      7. IMMEDIATELY after the commit, present this completion message:

      ✅ Brief approved. Project initialized.

      Files created:
        .webdesign/BRIEF.md      — Complete project brief
        .webdesign/PROJECT.md    — Project summary
        .webdesign/STATE.md      — Session state
        .webdesign/PROGRESS.md   — Progress dashboard
        .webdesign/config.json   — Stack and workflow configuration

      Your options:
        /web:strategy      → [RECOMMENDED] Develop positioning, messaging and conversion strategy
        /web:inspire <url> → Analyze reference websites before strategy
        /web:audit <url>   → [REDESIGN: audit URL] Audit your existing site
        /web:progress      → View project status
        /web:revise intake → Make changes to the brief

      Tip: Strategy is where your website's purpose crystallizes.
           A 30-minute strategy phase saves hours of rework later.

      If reference URLs were mentioned during briefing, include them in the /web:inspire line.
      If this is a redesign, show the URL in the /web:audit line.
    </step>
  </steps>
</workflow>
