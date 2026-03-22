## Claude Code, Skills 2.0 und MCP kurz eingeordnet

Anthropic positioniert Skills explizit als „Rezepte“, die Claude beibringen, wie es bestimmte Workflows ausführt, während MCP‑Server die „Küche“ sind, also externe Datenquellen und Tools (APIs, Filesystem, Analytics etc.).[2][4]

Ein Skill liegt als Folder mit SKILL.md (+ Skripten/Assets) vor; Metadaten (~100 Tokens) entscheiden, wann Claude ihn überhaupt lädt, der Body definiert dann detailliert den Workflow und kann je nach Bedarf Scripts, Referenzen und Assets nachladen, wodurch du lange Prompts in wiederverwendbare, kontext‑sparende Skills überführst.[4][2]

Das Ökosystem wächst aggressiv: Das offizielle Skills‑Repo hat zehntausende Stars, MCP‑Server sind binnen eines Jahres von ~100 auf mehrere Tausend gewachsen, insbesondere für Growth‑ und Revenue‑Workflows.[1][2]

***

## Warum ein Web‑Skill 2.0 kein „AI‑Slop“ produzieren darf

Claude‑Best‑Practice‑Guides und Erfahrungsberichte betonen, dass der große Hebel nicht „mehr Autocomplete“, sondern strukturierte Reasoning‑Ketten, explizite Standards (in CLAUDE.md / Skills) und Tooling über MCP sind.[5][6][7]

Mayflower z.B. empfiehlt einen „Sequential Thinking MCP“, der Claude zwingt, erst Architekturoptionen, Trade‑offs und Annahmen explizit zu machen, bevor Code generiert wird – also genau der Anti‑„Code ohne Plan“‑Ansatz, den du willst.[5]

Auf Web‑Ebene zeigen seriöse Conversion‑/UX‑Analysen, dass High‑Converting‑Pages vor allem durch Klarheit, Informationsfluss, Geschwindigkeit und Vertrauen performen – nicht durch „clevere“ AI‑Texte; sie verbinden eine klare Promise, starke Informationsführung, reduzierte Formulare und echte Trust‑Signale.[8][9]

***

## UX‑Prinzipien: Informationsduft, Progressive Disclosure, Scannen

Nielsen Norman beschreibt Progressive Disclosure als Muster, bei dem du zuerst nur die wichtigsten Optionen/Infos zeigst und weiterführende Komplexität erst bei Bedarf einblendest; so reduzierst du Fehlbedienung und mentale Last, ohne Power‑User auszubremsen.[10]

„Information Scent“ bezeichnet, wie stark ein Link/Button bereits vor dem Klick erkennen lässt, ob er zum Ziel führt – klare, beschreibende Labels und konsistente Pfade erhöhen die Wahrscheinlichkeit, dass Nutzer ohne Anstrengung „dem Duft folgen“ und nicht abspringen.[11]

Für das Layout von Landingpages sind Z‑Pattern‑Layouts ideal für einfache, CTA‑fokussierte Seiten, während F‑Pattern‑Layouts besser für textreiche Seiten (Blogs, detaillierte Produktinfos) funktionieren; beide bauen auf dem natürlichen Scan‑Verhalten (Top‑Bereich, dann nach unten links/rechts) auf.[12][13]

***

## Spezifische Layout‑Standards: Grid, Flexbox, Container Queries, Subgrid

Aktuelle Artikel zu „CSS Grid vs Flexbox vs Container Queries“ argumentieren klar:  
- Grid für das 2D‑Seitenlayout (Rows/Columns der Seite).  
- Flexbox für 1D‑Komponenteninterna (Navbars, Cards, Button‑Groups).  
- Container Queries, damit Komponenten sich an ihre Containerbreite und nicht nur an die Viewport‑Breite anpassen – essenziell für modulare Design‑Systeme.[14][15]

MDN beschreibt „subgrid“ als Erweiterung von CSS Grid, bei der verschachtelte Elemente die Spalten-/Zeilenstruktur des Eltern‑Grids erben; das ist hervorragend für konsistente vertikale Rhythmik (z.B. Cards in einer Blog‑Übersicht, die Headlines exakt fluchten).[16][17]

Die Browserunterstützung für Subgrid ist seit 2024/2025 breit genug, dass Experten empfehlen, die alten Warnungen („nur Firefox“) zu vergessen und Subgrid produktiv für komplexe Layouts einzusetzen.[18][16]

***

## Typografie: Basisgrößen, Fluid Scales, Fonts

Moderne Typo‑Guides empfehlen, Body‑Text mindestens bei 16 px zu starten; mit 17–18 px erreichst du gerade auf hochauflösenden Screens bessere Lesbarkeit, solange Zeilenlänge und Zeilenhöhe passen (Material setzt z.B. Body‑Medium auf 1 rem bei 1.5 rem line‑height).[19][20]

Fluid Typography mit CSS `clamp()` erlaubt es, Schriftgrößen zwischen einem Minimum und Maximum anhand von `vw` fließend zu skalieren, statt hart an Breakpoints zu springen – ideal für Hierarchien mit H1–H6 und Lead‑Text, die auf Mobil nicht „brüllen“ und auf Desktop nicht „versumpfen“.[21][22][23]

Case‑Studies zeigen, dass eine moderne Typescale mit `clamp()` die Zahl der Media Queries reduziert, visuelle Hierarchie konsistent hält und besonders bei Landingpages ein ruhiges, aber adaptives Schriftbild erzeugt.[22][23]

Performance‑Analysen zu Google Fonts zeigen, dass 1–2 Fonts (plus sehr begrenzte Weights) deutlich bessere Ladezeiten und Web‑Vital‑Werte bringen; jede zusätzliche Variante (Weight/Style) addiert Latenz und Bytes, weshalb Experten klar zur Reduktion raten.[24][25]

***

## Farben, Tokens, Design‑System und Komponentenbibliothek

Design‑Token‑Guides empfehlen, alle Designentscheidungen (Farben, Typo, Spacing, Radius, Animation) als primitive und semantische Tokens in JSON oder ähnlichen Formaten zu kapseln; Komponenten‑Tokens sorgen dann z.B. dafür, dass ein Button‑Radius pro Brand variieren kann, ohne das System zu zerlegen.[26]

Diese Token‑Struktur fungiert als API deines Design‑Systems und ermöglicht es Entwicklern, aus einer Quelle sowohl Web, Mobile als auch andere Kanäle konsistent zu stylen.[26]

Moderne Figma‑UI‑Kits für Enterprise/SaaS (z.B. Voit, Untitled, Relume) setzen konsequent auf Token‑basierte Design‑Systeme mit tausenden Komponenten und klaren Dev‑Mode‑Beschreibungen, so dass Entwickler CSS/Tailwind‑Logik direkt aus dem System ableiten können.[27]

***

## Navigation: Muster, Informationsarchitektur und Mobile

Aktuelle UX‑Best‑Practice‑Zusammenfassungen empfehlen:  
- klare Navigation‑Hierarchie (oben grobe Cluster, darunter Detailseiten),  
- konsistente Position und Labels der Menüs auf allen Seiten,  
- limitierte Hauptnavigations‑Einträge (ca. 5–9) und Breadcrumbs für tiefe Strukturen.[28]

Für mobile Nutzung betont Nielsen‑basiertes Research, dass Navigation dort noch stärker genutzt wird als auf Desktop; Hamburger‑Menüs allein sind oft zu versteckt, weshalb sichtbare oder „sticky“ Navbars mit klarer Beschriftung auf Mobile bevorzugt werden.[29]

Keyboard‑Zugänglichkeit der Navigation, sichtbare Fokuszustände und klare aktuelle‑Seite‑Indikatoren gelten als Muss, um sowohl UX als auch WCAG‑Anforderungen zu erfüllen.[30][28]

***

## Performance: 1‑Sekunden‑Erlebnis und Core Web Vitals

Google hat Page‑Speed bereits vor Jahren als Ranking‑Faktor auch für Mobile eingeführt und betont, dass mehr als die Hälfte der Nutzer eine Seite verlassen, wenn sie auf Mobil länger als etwa 3 Sekunden lädt.[31]

Lighthouse kann synthetisch Core Web Vitals wie Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) und Total Blocking Time (Proxy für Input‑Delay) messen und gibt konkrete Optimierungshinweise (z.B. Lazy‑Loading nicht‑kritischer Bilder, Reduktion langer Main‑Thread‑Tasks).[3]

SEO‑ und Performance‑Guides empfehlen Full‑Page‑Caching/Edge Caching zur Reduktion von Server‑Response‑Zeit, geschickt eingesetztes Lazy Loading, Bildoptimierung und das Minimieren von JS‑Bündeln und Third‑Party‑Skripten als Kernhebel.[32][3]

Gezielte Optimierung von Google Fonts (wenige Fonts/Weights, nur auf Seiten laden, die sie brauchen, sinnvolles Preload) kann die Median‑Ladezeiten und die 95‑Perzentil‑Latenz signifikant senken und verbessert direkt FCP und LCP.[25][24]

***

## Accessibility: WCAG 2.2 AA und Vorbereitung auf WCAG 3

WCAG 2.2 AA ist seit Oktober 2023 der offizielle, breit adoptierte Standard und ergänzt WCAG 2.1 um neun neue Kriterien, vor allem für Fokus‑Sichtbarkeit, Touch‑Targets, Dragging‑Alternativen, konsistente Hilfe und redundante Eingaben.[33][34][30]

Zu den neuen Punkten gehören z.B. „Focus not obscured“, „Target Size (Minimum)“, „Dragging Actions“ und „Redundant Input“, die sicherstellen sollen, dass fokussierte Elemente sichtbar bleiben, klickbare Ziele ausreichend groß sind und Nutzer nicht dieselben Informationen mehrfach eingeben müssen.[34][30]

WCAG 3.0 (W3C Accessibility Guidelines) liegt als neuer Draft vor und verschiebt den Fokus von binären „Success Criteria“ hin zu „Outcomes“ mit Ratings von 0–4 sowie Bronze/Silver/Gold‑Levels, um Nutzerbedürfnisse besser und flexibler abzubilden.[35][36]

Damit ist klar: Ein modernes Skill‑Setup sollte heute WCAG 2.2 AA strikt prüfen und zugleich so strukturieren, dass künftige WCAG‑3‑Outcomes (z.B. per Scoring) integriert werden können.[36][33]

***

## SEO, SEA, GEO: Google‑Stack als Mess‑ und Optimierungs‑Backbone

Google betont, dass Landingpage‑Geschwindigkeit und Page Experience nicht nur Ranking, sondern auch Ads‑Qualität und Conversion‑Rates beeinflussen; hierfür werden Core Web Vitals, Mobile Friendliness und Stabilität herangezogen.[37][31]

Best‑Practice‑Guides zu Google Search Console raten dazu, Sitemaps schlank und aktuell zu halten, Page‑Experience‑ und Core‑Web‑Vitals‑Reports regelmäßig zu nutzen und das URL‑Inspection‑Tool und Performance‑Reports zu verwenden, um Keywords, Indexing‑Probleme und Seitengesundheit zu monitoren.[38][39]

Landingpage‑Playbooks zeigen: Hohe Konversion entsteht durch klare Botschaft mit Message‑Match zu Ads, reduzierte Friktion „above the fold“, mobile Geschwindigkeit und echte Social‑Proof‑Signale; Google Ads‑Dokumentation und UX‑Forschung werden hier explizit als Basis genannt.[8][37]

***

## Muster nach Seitentyp (Landing, SaaS, Blog, B2B, Personal)

| Seitentyp | Layout & Hierarchie | Copy & Struktur | Navigation | Besonderer Fokus |
| --- | --- | --- | --- | --- |
| Performance‑Landing (Ads) | Z‑Pattern‑Hero, eine primäre CTA, visuelle Linie von Headline → Benefit → CTA.[12][8] | Starke Promise + Subhead, Bullet‑Benefits, Social Proof, kurzes Formular, FAQs gegen Einwände.[8] | Sehr schlanke Top‑Nav oder ganz ohne; Fokus auf einer Aktion.[8][28] | Mobile‑Speed, Message‑Match zu Kampagne, Form‑Reibung minimal.[31][8] |
| SaaS‑Landing | Grid‑basiertes Layout mit Sektionen (Hero, Features, Proof, Pricing, FAQ), F‑Pattern bei längeren Erklärungen.[12][15] | Problem‑/Lösungs‑Story, Screenshots, Pricing‑Vergleich, Onboarding‑Versprechen.[8] | Sticky‑Nav mit 5–7 Items (Produkt, Pricing, Ressourcen, Login, CTA).[28][29] | Trial/Signup‑Optimierung, Feature‑Priorisierung, Produkt‑Screens ohne Unschärfe. |
| Blog / Content Hub | F‑Pattern für Lesbarkeit, Sidebar optional, klare Typo‑Hierarchie.[12][13][19] | Inhalte chunked mit H2/H3, Listen, Hervorhebungen; interne Verlinkung stärkt Scent.[11][8] | Vollständige IA mit Kategorien, Suche, Breadcrumbs.[28] | Lese‑Komfort, SEO‑Struktur, Autorität/Trust. |
| B2B‑Site | Grid mit klarer Storyline (Wer wir sind, Was wir tun, Für wen, Proof, Kontakt), häufig mehrere Stakeholder.[8][37] | Klarer Value für Entscheider, Case Studies, Risiken adressiert.[8] | Megamenü oder strukturierte Multi‑Level‑Nav; Breadcrumbs bei Tiefe.[28] | Thought‑Leadership, Vertrauen, Enterprise‑Compliance (WCAG, Privacy). |
| Persönliche Seite | Simpler Z‑ oder Single‑Column‑Flow, Fokus auf Person/Brand.[12] | Kurzprofil, Projekte, Links; sehr klare Selbstpositionierung.[8] | Minimalistische Nav; evtl. Sections im One‑Pager‑Scroll.[28] | Persönlichkeit + Fokus (z.B. „AI Architect für Voice Agents“), Performance, Lesbarkeit. |

***

## Claude‑Skill 2.0: Architektur für „High‑End Web Creation“

Die offizielle Skill‑Doku empfiehlt, Skills entlang klarer Phasen zu strukturieren und nur bei Bedarf tieferliegende Ressourcen zu laden; genau das kannst du für Landingpages nutzen.[2][4]

Ein Web‑Skill‑2.0‑Blueprint könnte so aussehen (konzeptionell):

1. **Skill‑Metadaten (Frontmatter)**  
   - `name`: „high-end-webpage-architect“  
   - `description`: „Entwirft und implementiert konversionsstarke, WCAG‑konforme Landingpages/SaaS/B2B‑Sites mit Grid/Typo/SEO‑Standards.“[2]
   - `site_types`: `["landing", "saas", "b2b", "blog", "personal"]`  
   - `required_inputs`: Ziel, Zielgruppe, Angebot, Traffic‑Quellen, GEO‑Fokus, Compliance‑Level (z.B. WCAG 2.2 AA), Tech‑Stack (Next/Remix/Plain).  

2. **Phase 1 – Research & Strategy (Analysis‑Only‑Modus)**  
   - Claude erstellt ein **UX Strategy Brief**: Goals, Nutzer‑Jobs, Einwände, zentrale Botschaft, Informationsarchitektur, Wettbewerbs‑Patterns.  
   - Nutzt bei Bedarf MCP‑Server zu Notion/Docs/CRM, um vorhandene Research‑Daten zu ziehen.[1][2]
   - Verankert Informationsduft und Progressive Disclosure explizit (Abschnitte, die „Basics vs. Details“ trennen).[10][11]

3. **Phase 2 – Design‑System‑Definition**  
   - Generiert Design‑Tokens (Farben, Typo‑Scale mit `clamp()`, Spacing, Radius) als JSON/TS‑Objekte; basiert auf z.B. Material‑Typ‑Scale und modernen Typescale‑Patterns.[20][23][19]
   - Erzwingt: max. 2–3 Fonts, definierte Font‑Weights, Basisgröße >= 16 px, line‑height > 1.4, responsive Fluid‑Scale.[21][22][24]
   - Legt Grid‑System (z.B. 12‑Spalten‑Grid mit Subgrid‑Unterstützung) und Container‑Widths fest.[14][16]

4. **Phase 3 – Struktur & Komponentenbibliothek**  
   - Erzeugt einen **Routen‑/Sections‑Plan** pro Seitentyp (siehe Tabelle), mit klaren Sektionen (Hero, Problem, Lösung, Proof, CTA etc.) und deren Priorität.  
   - Definiert Komponenten (Hero, Feature‑Row, Testimonial‑Strip, Pricing‑Table, Blog‑Card, Navbar, Footer) als wiederverwendbare React/HTML‑Snippets mit Grid/Flex/Container‑Query‑Logik.[15][40]
   - Jede Komponente erhält Accessibility‑Anforderungen (Rollen, ARIA, Fokus‑Reihenfolge, minimale Target‑Size) und SEO‑Hinweise (z.B. nur eine H1 je Page).[30][8]

5. **Phase 4 – Copy & Content (AI‑unterstützt, aber nicht generisch)**  
   - Nutzt den Strategy‑Brief, um erst **Messaging‑Frames** zu bauen (Value Proposition, Alternativen, Einwände) und validiert diese gegen bekannte UX‑/Conversion‑Muster.[9][8]
   - Erzwingt Stilrichtlinien (z.B. klare Verben, kein Marketing‑Jargon, konkrete Outcomes, maximal X Zeichen pro Headline) und variiert Ton nach Seitentyp.  
   - Optional: MCP zu z.B. Google Ads / Search Console, um real existierende Keywords und Queries für SEO/SEA‑Alignment einzubeziehen.[39][38]

6. **Phase 5 – Code‑Generation (Layout + Komponenten)**  
   - Skill generiert das Seitenlayout in deinem Ziel‑Stack (z.B. Next.js 15, Remix, Astro) mit CSS Grid + Subgrid für Makro‑Layout, Flexbox für Komponenten, Container Queries für modulare Responsivität.[15][16][14]
   - Typo wird per globaler Typescale (Tokens) und `clamp()` in `rem` umgesetzt; keine Inline‑Magic‑Numbers, sondern ausschließlich Token.[23][22][26]
   - Navigation folgt Best Practices (max. 7±2 Items, konsistente Position, Keyboard‑Fokus), Mobile‑Nav ist sticky und klar beschriftet, nicht nur Ikonographie.[28][29]

7. **Phase 6 – QA: Performance, Accessibility, SEO**  
   - Über MCP wird ein Lighthouse‑Run bzw. PageSpeed‑Insights‑Check gegen eine Dev‑URL ausgeführt und Claude bekommt die JSON‑Ergebnisse.[3][31]
   - Skill mappt Core‑Web‑Vitals‑Ergebnisse (LCP, CLS, TBT) auf konkrete Empfehlungen (Bildkomprimierung, Font‑Optimierung, JS‑Reduktion) und generiert direkt Fix‑PRs.[24][32][3]
   - Ein Accessibility‑Sub‑Workflow checkt gegen WCAG‑2.2‑AA‑Checklisten (Fokus, Targets, Kontrast, Keyboard‑Flow, Formular‑Fehlermeldungen) und markiert Abweichungen.[33][30]
   - Für SEO/GEO werden strukturierte Daten, saubere H‑Hierarchie, Meta‑Tags, hreflang (falls nötig) und Sitemaps geprüft und bei Bedarf generiert.[37][38]

8. **Phase 7 – Continuous Improvement Loop**  
   - Skill liest (über MCP) regelmäßig aus Analytics/Search Console: CTRs, Bounce/Scroll‑Tiefe, Conversion‑Rates und identifiziert Schwachstellen pro Sektion.[38][39]
   - Erstellt A/B‑Test‑Vorschläge (Varianten für Hero‑Copy, CTA‑Placement, Formulardichte) und kann sie – je nach Stack – direkt als Feature‑Flags oder Experiment‑Configs ausrollen.[9][8]

***

## Rolle von MCP‑Servern im Setup

MCP‑Artikel betonen, dass MCP der Standard ist, um Claude mit externen Daten/Tools (Datenbanken, CRMs, Filesystem, Web‑APIs) zu verbinden, ohne für jedes Tool manuell Prompt‑Protokolle schreiben zu müssen.[7][1]

Für dein Web‑Skill‑Setup wären sinnvolle MCP‑Server u.a.:  
- **Filesystem/Repo‑MCP** für Code‑Generierung, Refactoring, Tests.  
- **Analytics/Search‑MCPs** (GA4, Search Console, ggf. eigene Event‑DB), um echte Metriken in den Optimierungs‑Loop zu holen.[39][38]
- **Lighthouse/PageSpeed‑MCP** für automatisierte Performance‑ und SEO‑Checks.[31][3]
- **Docs/Notion‑MCP** zur Anbindung von Brand‑Guides, Content‑Strategie, Research‑Notizen, die der Skill in Phase 1 lesen kann.[1][2]

Gut argumentierte Claude‑Code‑Guides raten, MCP‑Server bewusst schlank und use‑case‑orientiert zu halten, damit Tool‑Definitionen den Kontext nicht aufblähen und der Agent fokussiert bleibt.[7][5]

***

## Claude Code Best Practices, die du fest „einbrennen“ solltest

Erfahrene Nutzer von Claude Code und ähnliche Guides empfehlen:[6][7]

- Eine **CLAUDE.md** bzw. Projekt‑Guideline, die Code‑Standards, Architekturprinzipien, Benennung, Accessibility‑Ziele und Performance‑Budgets definiert und in jedem Workspace liegt.[6]
- **Reasoning‑First‑Workflows**, die den Agenten zwingen, Alternativen und Annahmen explizit zu machen, bevor Code generiert wird (z.B. mit einem „Sequential Thinking“-Skill oder MCP).[5][7]
- Nutzung von **Sub‑Agents**, wenn komplexe Teilaufgaben (z.B. „nur IA und Copy“, „nur CSS Grid Layout“, „nur Lighthouse‑Analyse“) in separaten Kontexten bearbeitet werden sollen, bevor alles wieder zusammengeführt wird.[7][2]

Diese Patterns adressieren exakt das Problem „AI‑Slop statt Strategie“: Der Agent agiert wie ein Senior, der erst denkt, dann baut.[6][5]

***

## Beispiel‑Ablauf: Neue B2B‑SaaS‑Landing mit deinem Skill

1. **Kickoff‑Prompt**  
   - Du fütterst den Skill mit: Produkt, ICP, Haupt‑Use‑Cases, Differenzierung, Channel (z.B. Google Ads + Organic), GEO, Compliance‑Anforderungen.  
   - Skill bestätigt kurz die Ziele und stellt falls nötig gezielte Rückfragen (z.B. Sales‑Zyklus, ACV, primäre Conversion).  

2. **Strategy‑Brief & IA**  
   - Skill produziert einen kompakten Strategy‑Brief und eine IA‑Skizze mit Sektionen und Z‑/F‑Pattern‑Begründung für die Page.[12][8]
   - Du gibst ggf. Feintuning (z.B. „mehr Enterprise‑Proof“, „Ton etwas technischer“).  

3. **Design‑System & Komponenten‑Set**  
   - Skill generiert Tokens, Grid, Typo‑Scale (`clamp()`‑basiert) und Standard‑Komponenten als Code + Dokumentation.[22][23][26]
   - Optional kann ein Figma‑exportfreundliches Token‑Set generiert werden (JSON, das du in ein Plugin schiebst).[27][26]

4. **Copy‑Generation & Review**  
   - Claude erzeugt Vorschläge für Hero, Value‑Props, Sektionen und CTAs – jeweils mit kurzer Begründung auf Basis von Research‑Evidence (NNG/Baymard‑Patterns).[11][8]
   - Du kuratierst/überarbeitest, der Skill aktualisiert daraufhin die finalen Texte in den Komponenten.  

5. **Code‑Skelett & Styling**  
   - Skill legt die Pages/Routes und Komponenten im Repo an, inklusive CSS Grid/Subgrid‑Layout, Flex‑Interiors, Container‑Queries und Typo‑Tokens.[16][14][15]
   - Navigation + Footer halten AI/SEO/Accessibility‑Standards ein (max. Menü‑Items, sichtbarer Fokus, semantische Struktur).[28][30]

6. **Checks & Iteration**  
   - Über MCP wird ein Lighthouse‑Report gezogen; Skill markiert Probleme und generiert direkte Fixes (z.B. Font‑Optimierung, Bild‑Lazy‑Load, Reduktion JS).[32][3][24]
   - WCAG‑2.2‑Check wird durchgeführt; bei Verstößen werden Vorschläge inkl. Codeänderung erzeugt.[30][33]

7. **Launch & Learning Loop**  
   - Nach Go‑Live liest der Skill regelmäßig GA4/Search‑Console‑Daten, identifiziert Absprungraten/Drop‑Offs und schlägt abgeleitete Experimente vor.[9][38][39]

***

Wenn du möchtest, kann ich dir im nächsten Schritt ein konkretes SKILL.md‑Gerüst (Frontmatter + Abschnittsstruktur) für genau dieses „High‑End Webpage Skill 2.0“ aufsetzen, inkl. Beispiel‑Prompts für jede Phase und Vorschlag, welche MCP‑Server du wie andockst.

Sources
[1] The Complete Guide to Claude Code Skills and MCP Servers https://www.linkedin.com/pulse/complete-guide-claude-code-skills-mcp-servers-real-revenue-raza-xsl2f
[2] How to Build a Production-Ready Claude Code Skill https://towardsdatascience.com/how-to-build-a-production-ready-claude-code-skill/
[3] Optimizing Web Vitals using Lighthouse | Articles https://web.dev/articles/optimize-vitals-lighthouse
[4] The Complete Guide to Building Skills for Claude https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf
[5] Claude Code Must-Haves 2026 https://blog.mayflower.de/25215-claude-code-must-haves-2026.html
[6] 7 Claude Code Best Practices für 2026 (aus echten ... https://www.eesel.ai/de/blog/claude-code-best-practices
[7] A Guide to Claude Code 2.0 and getting better at using ... https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/
[8] The 7 Must-Have Elements of a High-Converting Landing ... https://www.brandvm.com/post/elements-high-converting-landing-page-design
[9] Blog | Our 10 Favourite Landing Page Designs in Fall 2025 ... https://www.orizon.co/blog/our-10-favourite-landing-page-designs-in-fall-2025-and-why-they-convert
[10] Progressive Disclosure https://www.nngroup.com/articles/progressive-disclosure/
[11] Information Scent: How Users Decide Where to Go Next https://www.nngroup.com/articles/information-scent/
[12] Z-Pattern vs F-Pattern | What's the Better Layout For Landing ... https://www.landingpageflow.com/post/z-pattern-vs-f-pattern
[13] Landing Page Patterns: How People Consume Web Content https://instapage.com/blog/landing-page-patterns/
[14] CSS Grid vs Flexbox vs Container Queries 2025 - iPixel Creative https://ipixel.com.sg/web-design/mastering-responsive-web-layouts-css-grid-vs-flexbox-vs-container-queries-2025/
[15] CSS Grid vs Flexbox vs Container Queries https://dev.to/smriti_webdev/building-a-responsive-layout-in-2025-css-grid-vs-flexbox-vs-container-queries-234m
[16] Subgrid - CSS - MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid
[17] Subgrid - CSS - MDN Web Docs https://developer.mozilla.org/de/docs/Web/CSS/Guides/Grid_layout/Subgrid
[18] Remove warning to not use Subgrid since it's only in Firefox https://github.com/mdn/content/issues/16863
[19] Material Design Type Scale https://www.usetools.design/tools/material-design-type-scale
[20] Typography https://material-web.dev/theming/typography/
[21] Fluid vs. responsive typography with CSS clamp https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/
[22] Modern Fluid Typography Using CSS Clamp https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
[23] Typescale for Modern CSS – Responsive Fluid Design ... https://clampgenerator.com/blog/fluid-typescale-modern-css-without-media-queries/
[24] 5 Tips To Make Google Fonts Faster - Request Metrics https://requestmetrics.com/web-performance/5-tips-to-make-google-fonts-faster/
[25] 4 Easy Steps to Optimize WordPress Google Fonts https://daan.dev/blog/wordpress/wordpress-google-fonts/
[26] Design tokens explained (and how to build a ... https://www.contentful.com/blog/design-token-system/
[27] Top 10 Figma UI Kits for Developers in 2025 https://www.voit.io/post/figma-ui-kit-for-developers-2025
[28] Website Best Practices 2025: Top UX Guidelines https://www.roastmyweb.com/blog/website-ux-best-practices
[29] Understanding Mobile First Design Strategy in 2026 https://slickplan.com/blog/understanding-mobile-first-design-strategy
[30] What's new in WCAG 2.2: What you need to know https://eye-able.com/es/blog/what-is-new-in-wcag-what-you-need-to-know
[31] Speed is now a landing page factor for Google Search and Ads https://developer.chrome.com/blog/search-ads-speed
[32] Google Core Web Vitals: The Complete Guide https://seosherpa.com/core-web-vitals/
[33] WCAG 2.2 aa Checklist: Summary and ... https://accessibilitypartners.ca/wcag-2-2-aa-checklist-for-website-owners/
[34] W3C Adds Nine New Requirements In WCAG 2.2 https://www.laborandemploymentlawcounsel.com/2023/12/w3c-adds-nine-new-requirements-in-wcag-2-2/
[35] WCAG 3.0 Public Working Draft: What to Expect https://www.deque.com/blog/first-public-working-draft-wcag-3/
[36] W3C Accessibility Guidelines (WCAG) 3.0 https://www.w3.org/TR/wcag-3.0/
[37] How Website Design Affects SEO – What Google Wants in ... https://xdesigns.com.au/x-designs-blog/how-web-design-impacts-seo-and-what-google-looks-for-in-2025/
[38] Google Search Console: Best Practices for Use in 2025 https://saleshive.com/blog/google-search-console-best-practices-use-2025/
[39] Essential Best Practices for Google Search Console SEO ... https://dev.to/corpcubite/essential-best-practices-for-google-search-console-seo-in-2025-read-the-full-article-13i1
[40] New patterns | Articles | web.dev https://web.dev/articles/new-patterns-july-2022
[41] Claude Code Setup Guide: Skills, MCP Servers, Agent ... https://automatedmarketer.net/claude-code-setup-master-development/
[42] Clean sheet: How to build your own boilerplate with Github ... https://stackoverflow.com/questions/48485369/clean-sheet-how-to-build-your-own-boilerplate-with-github-atom-jekyll-boots
[43] ngntrgduc/get-shit-done: No more procrastination https://github.com/ngntrgduc/get-shit-done
[44] Latest updates to WCAG 3.0 draft (16 May 2024) https://www.insuit.net/latest-updates-wcag-30/
[45] progressive-disclosure | Skills Mark... https://lobehub.com/skills/neversight-skills_feed-progressive-disclosure