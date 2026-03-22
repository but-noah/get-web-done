<!-- ================================================================
  GWD Reference: Generative Engine Optimization (GEO)
  Loaded by: web-strategist, web-copywriter
  Constraint: <300 lines (hard limit)
  Sources: GWD spec section 11, Claude report section 7, Gemini report,
           Princeton GEO study, Bain 2025 search data, BrightEdge 2025
  ================================================================ -->

# Generative Engine Optimization (GEO)

GEO optimizes content for citation in AI-generated answers (ChatGPT, Perplexity,
Google AI Overviews, Claude). This is not a replacement for traditional SEO --
it is a complementary discipline. Apply both.

---

## Why GEO Matters

### The Data

- AI-referred sessions grew 527% year-over-year (first 5 months of 2025, BrightEdge).
- 60% of searches now end without a click to any website (Bain, February 2025).
- 93% zero-click rate in Google's AI Mode specifically.
- Princeton research: GEO-optimized content sees up to 40% visibility boost in AI answers.

### The Paradox

- Fewer total visitors from AI search -- but dramatically more qualified ones.
- Users who do click through from AI answers show 23% lower bounce rate and 41% longer time on site.
- Optimize for being cited, not just ranked. A citation in an AI answer is a trust endorsement.

---

## Content Structure Rules

These rules apply to every content page (landing pages, blog posts, service pages, case studies).

### Answer-First Writing

- Lead with the direct answer in the first 40-60 words of any section.
- No throat-clearing. Delete these openers:
  - "In today's world..."
  - "It's important to note that..."
  - "When it comes to..."
  - "As we all know..."
- Structure: Answer -> Evidence -> Context -> CTA.

### Statistical Density

- Include a specific statistic every 150-200 words.
- AI systems preferentially cite content with concrete numbers.
- Format: "[number] [metric] [timeframe] [source]" -- e.g., "40% reduction in load time (Cloudflare, 2025)."
- Use definite language: "reduces load time by 40%" not "may help improve performance."
- Hedging language ("might," "could," "potentially") reduces citation probability.

### Freshness Signals

- Add last-updated dates on all content pages (visible to users and crawlers).
- Use `dateModified` in structured data (Schema.org Article or WebPage).
- Update key pages at least quarterly. Perplexity heavily favors content updated within 90 days.
- Add a visible "Last updated: [date]" line near the top or bottom of content pages.

---

## Citation Optimization per AI Engine

Each AI engine has different source preferences. Optimize for all, but know the differences.

### ChatGPT

- Favors encyclopedic, authoritative content.
- Wikipedia accounts for 47.9% of its top cited sources.
- Write comprehensive, well-structured content with clear definitions.
- Include "What is [X]?" sections with concise, definition-style answers.
- Authoritative tone wins. Cite reputable sources.

### Perplexity

- Favors recency: content updated within 90 days gets priority.
- Reddit accounts for 46.7% of its top sources -- community validation matters.
- Fresh content with data and community proof wins.
- Update content frequently. Stale content loses citation rank fast.
- Include specific dates and version numbers in technical content.

### Google AI Overviews

- Favors structured content that precisely matches query intent.
- Use Schema.org markup extensively (JSON-LD).
- FAQ sections with clear question-answer format rank highest.
- Content must match the exact phrasing users search for.
- Featured snippet optimization translates directly to AI Overview citations.

### General Rules (All Engines)

- All engines prefer content with clear entity relationships.
- Structured data is a baseline requirement, not an advantage.
- Authoritative sourcing (cite studies, name experts) increases citation probability.
- Content that answers follow-up questions (depth) outperforms shallow overviews.

---

## Structured Data for AI Parsing

Schema.org JSON-LD is mandatory on every page. It is not optional.

### Priority Schema Types

| Schema Type      | Use On                        | Why It Matters for GEO                    |
|------------------|-------------------------------|-------------------------------------------|
| `FAQPage`        | Any page with Q&A content     | Direct mapping to AI answer format        |
| `HowTo`          | Process/tutorial pages        | Step-by-step content AI can cite directly  |
| `Article`        | Blog posts, case studies      | dateModified, author, publisher signals    |
| `Product`        | Product/service pages         | Feature, pricing, review structured data   |
| `BreadcrumbList` | All pages                     | Reinforces site hierarchy for AI crawlers  |
| `LocalBusiness`  | Location-specific pages       | Local entity recognition                   |
| `Organization`   | About page, footer            | Establishes entity identity                |

### Entity Authority

- Define what the company IS in Schema.org: `Organization` type with `sameAs` links to LinkedIn, social profiles, Wikipedia (if applicable).
- Interconnect entities: `Product` -> `Organization` -> `Person` (founder/team).
- This builds knowledge graph presence -- AI systems use entity graphs to determine authority.
- Every page must include `Organization` markup in the footer or site-wide template.

---

## llms.txt Specification

This is the robots.txt for AI. It tells AI crawlers what the site is and what matters.

### Implementation

- Place at domain root: `example.com/llms.txt`
- Plain text file, structured sections.
- Keep it concise: 50-100 lines max.

### Required Sections

```
# Company Name
> One-sentence description of what the company does.

## About
Brief company description (2-3 sentences). What you do, who you serve, what makes you different.

## Key Pages
- [Homepage](https://example.com/): Brief description
- [Products](https://example.com/products/): Brief description
- [Pricing](https://example.com/pricing/): Brief description
- [Blog](https://example.com/blog/): Brief description
- [Contact](https://example.com/contact/): Brief description

## Products / Services
- Product A: One-line description
- Product B: One-line description

## Contact
- Email: info@example.com
- Location: City, Country
```

### Rules

- Update llms.txt whenever site structure changes.
- Include only pages you want AI to cite. This is opt-in.
- Do not stuff keywords. Write for an AI that is reading, not matching patterns.

---

## Content Patterns That Get Cited

Use these structural patterns in body content. AI systems extract and cite these formats preferentially.

### Definition + Example

"[Term] is [clear definition]. For example, [concrete, specific example]."

Use this for every key concept introduced on a page.

### Comparison Tables

AI loves structured comparisons. Use for:
- Product vs. competitor features
- Plan/tier comparisons
- Technology comparisons (e.g., "React vs. Vue for enterprise")

Tables must have clear headers and consistent data in every cell.

### Step-by-Step Lists

Numbered steps with clear outcomes. Format:
1. **Action**: Result or explanation.
2. **Action**: Result or explanation.

### Statistics With Context

Never drop a naked number. Always provide context:
- "[Number] [metric] [timeframe] [source]"
- Example: "B2B sites using FAQ schema saw a 34% increase in AI citations (Semrush, Q1 2025)."

### FAQ Sections

- Use `<h3>` for questions, paragraph for answers.
- Answer in the first sentence. Expand after.
- Mark up with `FAQPage` schema.
- Include 5-8 questions per page. More dilutes; fewer misses opportunities.

---

## GEO vs. Traditional SEO

| Aspect               | Traditional SEO               | GEO                                      |
|-----------------------|-------------------------------|-------------------------------------------|
| Goal                  | Rank in blue links            | Get cited in AI-generated answers         |
| Success metric        | Position, CTR, traffic        | Citation frequency, referral quality      |
| Content format        | Keyword-optimized copy        | Answer-first, definition-rich, data-dense |
| Technical foundation  | Meta tags, sitemap, speed     | Schema.org, llms.txt, entity markup       |
| Freshness             | Important                     | Critical (90-day window for Perplexity)   |
| Link building         | Core strategy                 | Less direct impact; entity authority more  |
| Overlap               | Structured data, clear content, technical health, mobile-first  |

Do not sacrifice one for the other. They are complementary. Every SEO best practice
still applies. GEO adds answer-first structure, entity relationships, llms.txt,
and aggressive freshness signals on top.

---

## German Market GEO Specifics

- Use native German compound words, not translated English terms.
  - Correct: "Suchmaschinenoptimierung" not "Search Engine Optimization."
  - Correct: "Datenschutzerklaerung" not "Privacy Policy" (for German-facing content).
- AI training data has English-language bias. Compensate with stronger structured data in German content.
- Include German-language FAQ sections targeting common German search queries.
- Use `inLanguage: "de"` in Schema.org markup for German pages.
- For bilingual sites: `hreflang` tags are essential for AI to serve the right language version.

---

## GEO Checklist -- Apply to Every Page

### Content

- [ ] First 40-60 words contain a direct answer to the page's primary question.
- [ ] No throat-clearing openers. Answer first, context second.
- [ ] At least one specific statistic per 200 words, with source attribution.
- [ ] Definite language used (no "might," "could," "potentially" hedging).
- [ ] Key terms defined using "X is [definition]" pattern.
- [ ] FAQ section present with 5-8 questions (if applicable to page type).
- [ ] Comparison table included (if applicable to page type).

### Structured Data

- [ ] JSON-LD Schema.org markup present (not Microdata, not RDFa).
- [ ] `Organization` schema on every page (site-wide template).
- [ ] Page-specific schema applied (FAQPage, Article, Product, HowTo).
- [ ] `dateModified` field present and accurate.
- [ ] `sameAs` links to official social profiles in Organization schema.

### Technical

- [ ] `llms.txt` exists at domain root and is current.
- [ ] Last-updated date visible on page.
- [ ] `hreflang` tags present for multilingual content.
- [ ] `inLanguage` set correctly in Schema.org for German pages.

### Freshness

- [ ] Page content reviewed and updated within the last 90 days.
- [ ] `dateModified` in structured data matches actual last update.
- [ ] Stale statistics replaced with current data.
