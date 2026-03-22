<!--
  TEMPLATE: PROJECT.md — Ultra-Compact Project Summary

  Created by:  web-intake agent during Phase 0, after BRIEF.md is approved
  Updated by:  web-orchestrator agent after each phase completion
  Consumed by: Every agent at session start — loaded EVERY session
  Constraint:  MUST stay under 50 lines when filled. If it exceeds 50, compress.

  This is the "business card" of the project. Just enough for the orchestrator
  to know what it's working on without loading the full brief.

  Rules for agents:
  - Created during /web:new after BRIEF.md is approved
  - Status section updated by orchestrator after each phase completion
  - Key Decisions grow as the project progresses — max 5-7 items, replace older ones if needed
  - References section grows as artifacts are created
  - Total must NEVER exceed 50 lines
-->

# [Project Name]

[One-sentence description of the project]

## Stack
- **Framework:** [astro/nextjs/sveltekit]
- **Styling:** [tailwind-v4/custom]
- **Components:** [shadcn-ui/custom]
- **Hosting:** [cloudflare/vercel/other]
- **Analytics:** [plausible/posthog/none]

## Scope
- **Type:** [new/redesign]
- **Market:** [de/dach/eu/international]
- **Language:** [de/en/multilingual]
- **Pages:** [number] — [list: homepage, about, pricing, blog]
- **Compliance:** [bfsg, tdddg, dsgvo] or [none specified]

## Status
- **Current phase:** [Phase N: Name]
- **Last action:** [what was completed last]
- **Next step:** [recommended next command]

## Key Decisions
<!-- Max 5-7 items. Replace older ones if needed. These are major decisions that affect multiple phases. -->
[2-5 bullet points of major decisions made during the project. Example:]
- Positioning: "affordable alternative to enterprise tools for mid-market"
- Visual direction: warm, minimal, serif headlines + sans body
- Primary CTA: "Start free trial" → signup page

## References
<!-- Grows as artifacts are created. Always use @path format. -->
- Full brief: @.webdesign/BRIEF.md
- Strategy: @.webdesign/STRATEGY.md
- Design system: @.webdesign/design-system/DESIGN-SYSTEM.md
