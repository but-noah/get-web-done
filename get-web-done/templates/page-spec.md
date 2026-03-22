<!--
  TEMPLATE: PAGE-SPEC.md — Per-Page Specification

  Created by:  web-ia-architect agent during Phase 2 (/web:sitemap)
  Consumed by: Copywriter (section structure), Layout Architect (components),
               Builder (acceptance criteria), QA (verification)
  Location:    .webdesign/pages/[page-name]/SPEC.md

  Rules for the web-ia-architect agent:
  - One SPEC.md per page, stored in pages/[page-name]/
  - Every section has exactly one purpose — if you can't state it, remove the section
  - Progressive disclosure notes tell downstream agents what to hide vs show
  - Acceptance criteria are checkable — boolean pass/fail, not subjective
  - Meta title < 60 chars, meta description < 160 chars
-->

# Page Specification: [Page Name]

> Part of: [Project Name]
> Created by: /web:sitemap on [DATE]
> Spec status: [DRAFT / APPROVED]

## Page Meta
- **URL path:** /[path]
- **Purpose:** [one sentence — what this page achieves]
- **Target persona:** [which persona(s) from STRATEGY.md]
- **Primary CTA:** [action + button text]
- **Layout pattern:** [Z-pattern / F-pattern / Linear / Grid]
- **SEO target keyword:** [from STRATEGY.md keyword table]
- **Meta title template:** [max 60 chars]
- **Meta description template:** [max 160 chars]

## Sections

### Section 1: [Name — e.g., "Hero"]
- **Purpose:** [why this section exists]
- **Content type:** [headline + subheadline + CTA / visual + text / data + chart]
- **Key message:** [which supporting message from messaging framework]
- **Progressive disclosure:** [what's visible immediately vs. on interaction]
- **CTA:** [yes/no — which CTA, primary or secondary]
- **Notes:** [special considerations — animation, responsive behavior]

### Section 2: [Name]
[same structure — repeat for all sections]

## Acceptance Criteria
- [ ] Page has exactly one H1
- [ ] Primary CTA is visible above the fold (desktop and mobile)
- [ ] All sections follow the order defined above
- [ ] Progressive disclosure patterns implemented where noted
- [ ] Internal links connect to [specified pages]
- [ ] SEO: meta title and description match templates
- [ ] Schema.org: [required types for this page]
