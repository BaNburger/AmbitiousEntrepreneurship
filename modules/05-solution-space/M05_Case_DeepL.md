# CASE 6: DeepL: The Translator's Dilemma
## Teaching Case (HBS-style) — written for this course

## Introduction

In late 2016, Jaroslaw Kutylowski stood at a crossroads that would define his next decade. He had built something remarkable—a machine translation engine that, by his team's own blind tests, produced more natural and accurate translations than Google Translate. It was nearly invisible to the market. And he faced a choice that would terrify any product founder: launch a new product into a market Google had locked up, against a free competitor with 500 million users.

Kutylowski was not a startup founder in the traditional sense. He was the CTO of Linguee — hired in 2012 as an engineer by founder Gereon Frahling, an ex-Google researcher — a successful bilingual dictionary platform that had quietly become one of the most-visited translation websites in the world, generating healthy revenue and profitable operations. Linguee was not sexy. It did not seek venture capital. It was a machine that worked.

But Linguee had also become, by accident, the perfect research platform for something bigger: machine translation. Linguee's corpus of over a billion translated sentence pairs from the web—English paired with German, Spanish, French, and dozens of other languages—had become a training ground for neural networks.

Kutylowski and his team had spent years applying machine learning to the dictionary — and, since early 2016, building a neural translation system that leveraged Linguee's unique data advantage. In internal blind tests with professional translators, DeepL (as he wanted to call it) beat Google Translate on every metric that mattered: fluency, accuracy, handling of idioms, and consistency.

The question was not whether the technology was better. The data proved it was. The question was brutal and immediate: **How do you convince people to switch from free to a new product they've never heard of?**

---

## How this case ties into Module 05

This module asks: of all the ways to solve this problem, why this one? DeepL is the cleanest 10x story in the course. Work three connections as you read: (1) **Idea 2 — the 10x Test:** run all four gates — value in under 10 words, ONE dimension, the Switch Test, the 60-second demo — live on DeepL versus a FREE Google Translate. It is the exact scoring you'll do on your own solution in the 10x-or-Die workshop, against the hardest status quo there is: free. (2) **Gate 2 in particular:** DeepL chose to be 10x on ONE dimension — translation quality for European professionals — instead of 10% better on ten. (3) **The Weekend Build ethos:** DeepL shipped a focused wedge — one web page, seven languages — not a platform.

## Background

### Linguee: The Unsexy Gold Mine (2007-2014)

Linguee was founded in Cologne in 2008 by Gereon Frahling, a mathematician who left a research post at Google in New York to build it with co-founder Leonard Fink; the site went live in 2009. Frahling wanted to build something simple: a parallel corpus search engine. If you typed a phrase in English, Linguee would find that phrase in actual translated documents (EU proceedings, patents, books, websites) and show you the translation alongside the original. It was a tool for translators and language learners.

There was no venture capital. No explosive growth narrative. Linguee grew slowly, organically, by being useful. By 2010, it was getting millions of visitors. By 2014, it was profitable — with a team of dozens, not hundreds.

The business model was straightforward:
- Free search on linguee.com (supported by advertising)
- SEO as the growth engine: anyone googling a phrase in two languages landed on Linguee's result pages
- No subscriptions, no sales team — advertising carried the company

The financial picture was healthy but modest:

*Illustrative reconstruction for classroom use — Linguee never published financials; individual numbers are teaching estimates.*
- Estimated annual revenue: ~$15-20 million
- Estimated profitability: ~$3-5 million annually
- Growth rate: 20-30% YoY (steady, not explosive)
- Usage: billions of dictionary queries answered since 2009

For a bootstrapped company, this was success. For a venture-backed startup founder, it would have been a disappointment. But Frahling and his team had built a sustainable machine, and it came with an unfair advantage: an enormous bilingual corpus.

### The Neural Networks Revolution (2014-2016)

Between 2014 and 2016, the machine translation landscape shifted seismically. Neural machine translation (NMT)—using deep learning instead of rule-based systems—went from academic papers to production systems practically overnight.

Google announced its switch from phrase-based statistical machine translation to neural machine translation in September 2016, rolling it out to the first major language pairs that November. The improvement was significant: Google's system became noticeably more fluent and context-aware.

But Google's advantage, for the first time, was not insurmountable. NMT systems required massive parallel text data for training, but the data existed: books, news archives, legal documents, patent filings, all publicly translated into multiple languages. Anyone with the right talent and infrastructure could build a competitive system.

Linguee had used machine learning for years on tasks around the dictionary; in 2016, Kutylowski's team began building a full neural translation system in earnest. They had one extraordinary advantage: Linguee's database of over a billion translated sentence pairs from real-world documents—EU proceedings, patents, books, legal contracts—carefully extracted, aligned, and quality-scored over eight years.

### The Birth of DeepL (2016)

Through 2016, Kutylowski's small research team built a neural translation system using Linguee's corpus as the primary training data. The results, by late 2016, were stunning:

*Illustrative reconstruction for classroom use — modeled on the company-run blind tests DeepL published at launch; individual numbers are teaching estimates.*

A test conducted with professional translators showed:
- **DeepL vs. Google Translate (September 2016 test)**
  - Blind evaluation: 100 sentences in German, Spanish, and French, translated to English
  - 14 professional translators evaluated both systems (double-blind)
  - DeepL was rated superior in 58% of comparisons
  - Google Translate was rated superior in 22% of comparisons
  - No clear winner in 20% of comparisons

For Kutylowski, this was validation of years of work. His hunch—that Linguee's unique data advantage could be converted into a better translation engine—had been proved correct.

But the test also surfaced a hard question: **If this technology is better, why would anyone use it if Google Translate is free?**

### Market Dynamics in Machine Translation (2016)

The translation market in 2016 was fragmented:

| Segment | Primary Use | Primary User | Primary Competitor |
|---|---|---|---|
| Consumer/Casual | "I want to understand a French article" | Students, travelers, casual language learners | Google Translate (free) |
| Professional/Business | "I need high-quality translations for business" | Companies, translators, law firms | Professional humans + CAT tools (Trados) |
| Accessibility | "I need real-time captions/subtitles" | Video platforms, social media | Google/Microsoft/Amazon APIs |

**Google's Dominance (2016)**:
- 500+ million users, 100 billion words translated per day (Google's own 2016 figures)
- Free, integrated into search
- "Good enough" quality for casual users
- Owned by the world's most powerful tech company
- No reason to switch for 95% of users

**The Professional Segment**:
- Worth ~$40 billion globally (industry estimates for language services)
- But dominated by *human translators* (not machine translation)
- Machine translation was a supplementary tool, not a replacement
- Most professionals used Google Translate alongside human expertise

The uncomfortable truth: **The market where DeepL was significantly better (professional translation) was not the market where volume (and advertising revenue) lived. And the mass market where Google dominated didn't care about quality differences that were "good enough."**

---

## The Situation

It's October 2016. Kutylowski has just finished reading the team's internal evaluation report on DeepL's performance. The internal data is unambiguous: his system is better than Google's. The small team of engineers is proud. The business question is thorny.

### The Constraints

1. **You Don't Have Google's User Base**
   - Google Translate: 500M+ users, integrated into search, Gmail, Android
   - DeepL: Zero users (not yet launched)
   - Your advantage: better quality. Your disadvantage: nobody knows you exist.

2. **You Don't Have Google's Trust or Distribution**
   - Google: nearly two decades of brand trust, proven security
   - DeepL: A new name from a company nobody has heard of (Linguee is famous among language learners, not general users)
   - Risk: Privacy concerns about sending text to a new service

3. **You Can't Compete on Price (Google Is Free)**
   - Unless you're willing to operate at a loss like Google does, you need revenue
   - The consumer market is price-sensitive: free wins against "better but paid"
   - The professional market might pay, but they already have workflows built around Google

4. **Your Resources Are Limited**
   - Linguee generates an estimated $15-20M in revenue but doesn't throw off massive cash for R&D
   - You're not VC-backed. You can't afford $50M in marketing
   - Your whole company is a few dozen people. Google can put more engineers on Translate than you have employees

5. **Timing Pressure**
   - Google just announced its switch to neural translation (September 2016)
   - Other competitors (Microsoft, Amazon, Apple) will follow
   - Your window to differentiate on quality may close
   - Your data advantage (Linguee's corpus) is sustainable, but technology will commoditize eventually

### The Strategic Questions

**Question 1: Do You Launch at All?**

The conservative answer: No. Linguee is profitable. You could continue optimizing the dictionary, keep the business stable, and avoid the risk of burning cash on a doomed translation product. Many smart people launch products that fail.

But the data says something different. You have a better product. Market conditions are shifting toward neural translation. Waiting means your advantage—being first with a quality neural system—atrophies over time.

**Question 2: Free or Paid?**

- **Free model (like Google)**: Dominates consumer market, requires massive scale, relies on ads or enterprise sales. But you don't have Google's scale or ad network.
- **Freemium model**: Free tier for consumers (to gain users), paid tier for power users. But most users won't upgrade.
- **Paid-only model**: Targets professionals and businesses. Smaller market, but defensible. You can charge because you're significantly better. But adoption is slower.
- **API-only model**: Sell to enterprises and developers. High margin, but no consumer presence.

Each model has a different narrative:
- Free/Freemium: "We're building the next Google Translate. We'll worry about monetization later."
- Paid: "We're a professional translation tool. We serve businesses, not casual users."
- API: "We're an infrastructure company. We power other platforms."

**Question 3: Which Languages First?**

DeepL's advantage over Google was highest in:
- English ↔ German (best data, closest cultural proximity)
- English ↔ French (strong data)
- English ↔ Spanish (strong data)
- English ↔ Italian (decent data)
- English ↔ Dutch (good data)

DeepL's advantage was weakest in:
- English ↔ Mandarin (limited parallel data)
- English ↔ Arabic (limited parallel data)
- English ↔ Japanese (decent data, but different script/grammar)
- English ↔ Korean (limited data)
- English ↔ African languages (almost no data)

**The dilemma**: Google Translate supports 100+ languages. Linguee data is strongest in European languages. Do you launch with the languages you're best at (limiting addressable market but maximizing quality advantage), or do you spread thin across more languages and dilute your advantage?

**Question 4: Go-to-Market Strategy**

If you decide to launch, how do you get users?

- **Direct consumer**: Build a website, launch on Product Hunt, hope for viral adoption. But free Google will win.
- **B2B/Enterprise**: Target translation companies, law firms, tech companies that do international business. Requires a sales team you don't have.
- **Integration strategy**: Approach browsers, messaging apps, productivity tools. "We'll be the translation layer in your platform." But this requires partnerships and revenue-sharing.
- **Professional community**: Linguee users (translators, language learners) might migrate. But they're a small slice.
- **Narrow vertical**: Pick one use case (e.g., "translation for e-commerce companies") and dominate it. Then expand.

---

## The Exhibits

### Exhibit A: Translation Quality Benchmarks (October 2016 Test)

*Illustrative reconstruction for classroom use — directionally faithful to DeepL's company-run blind tests, individual numbers are teaching estimates.*

**Test Setup**: 100 sentences in three languages (German, Spanish, French), randomly drawn from diverse sources (news, books, technical documents, casual writing). Translated to English. Evaluated by 14 professional translators who specialize in each language pair. Double-blind (translators didn't know which system produced which translation). Evaluated on: fluency, accuracy, completeness, consistency.

| Dimension | DeepL Better | Google Better | Tie |
|---|---|---|---|
| Fluency (natural-sounding) | 64% | 18% | 18% |
| Accuracy (correct meaning) | 61% | 21% | 18% |
| Idiom handling (cultural expressions) | 72% | 12% | 16% |
| Technical term consistency | 58% | 24% | 18% |
| **Overall (combined)** | **58%** | **22%** | **20%** |

**Professional translator comments**:
- "DeepL understands context better. It doesn't just translate words; it translates meaning."
- "Google Translate is faster to post-edit. But DeepL requires fewer corrections."
- "For German-to-English, DeepL is noticeably better. It handles compound nouns better."

### Exhibit B: Use Case Analysis: Who Would Switch to DeepL?

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

| Use Case | User Type | Willingness to Switch | Primary Objection | Revenue Model |
|---|---|---|---|---|
| **Casual web browsing** | Consumer | Low | "Google is already there" | Ad-supported (doesn't work without scale) |
| **Language learning** | Student | Medium | "Free is free" | Freemium possible, but competes w/ Duolingo |
| **Translation for business docs** | Translator/PM | High | "Privacy concerns + workflow integration" | Paid tier ($10-50/month) |
| **In-app translation** | App developer | High | "API costs + reliability" | API pricing ($0.01-0.10 per request) |
| **Accessibility (captions/subtitles)** | Platform (YouTube, Netflix) | High | "Volume + SLA requirements" | Enterprise deal |
| **International customer support** | E-commerce/SaaS | High | "ROI of better translations" | Per-translation or per-usage pricing |

**Insight**: The market where DeepL has highest switching probability (professional/business users) is much smaller than consumer market, but more defensible and profitable.

### Exhibit C: Competitive Landscape (October 2016)

*Illustrative teaching summary — competitor characterizations compressed for classroom use.*

| Competitor | Strength | Weakness | Focus |
|---|---|---|---|
| **Google Translate** | Scale, distribution, free, trust | Quality inconsistent, improvement slow | Consumer/casual |
| **Microsoft Translator** | Integration with Office/Azure, B2B focus | Lower quality, smaller user base | Enterprise |
| **Bing Translator** | Okay quality, smaller user base | Lower adoption, less innovation | Consumer (declining) |
| **Amazon Translate (expected)** | AWS distribution, API-driven | Not yet launched (arrived late 2017) | Enterprise/API |
| **Professional translation** (human) | Highest quality | Expensive ($50-200/hour), slow, limited availability | High-value business documents |
| **CAT Tools** (Trados, SDL, memoQ) | Established workflows, glossaries, TM | Expensive ($2K+/year), slow innovation | Professional translators |
| **DeepL (planned)** | Superior quality (proven), unique data advantage, better for European languages | Zero user base, small company, unproven operationally, no distribution | TBD |

### Exhibit D: Financial Scenario Planning (Illustrative Internal Models)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**Scenario 1: Free/Freemium Consumer Play**
- Launch free translation website + app
- Target: 10M monthly active users in Year 2
- Monetization: Ads + optional $9.99/month premium tier
- Projected Year 2 revenue: ~$2-5M (10M users * 2% conversion * $10/month)
- Projected Year 2 costs: ~$8-10M (servers, operations, minimal marketing)
- **Verdict**: Cash burn. Would require VC funding.

**Scenario 2: API-First Enterprise Play**
- Launch API; target developers and companies
- Pricing: $0.015 per 100,000 characters translated
- Target: 100 enterprise customers by Year 2, translating 50B characters/month
- Projected Year 2 revenue: ~$9M (50B / 100,000 * $0.015)
- Projected Year 2 costs: ~$4-5M (servers, support, sales team)
- **Verdict**: Profitable. Smaller market, but defensible.

**Scenario 3: Hybrid (Consumer + Freemium + API)**
- Launch all three channels simultaneously
- Complex to execute, dilutes focus
- Could target all segments but resources stretched thin
- **Verdict**: Risky without additional capital.

**Scenario 4: Do Nothing (Stay Private/Bootstrap)**
- Keep Linguee growing at 20-30% YoY
- Spin up DeepL as internal research project
- Launch if/when market conditions improve or VC funding found
- **Verdict**: Safe, but risks ceding market leadership to competitors.

### Exhibit E: Timeline Pressure: When Will Competitors Match Your Quality?

*Illustrative reconstruction for classroom use — a forecast written from the 2016 vantage point for teaching.*

**NMT Technology Progress (2016-2018 outlook)**:
- **Sept 2016**: Google switches to NMT; quality improves broadly
- **2017**: Microsoft, Amazon, Apple will upgrade their systems
- **2017-2018**: NMT becomes commoditized; large training datasets become available
- **2018+**: Your unique data advantage erodes; everyone can build a good NMT system

**Window of Opportunity**:
- **Late 2016 - mid 2017**: You have a quality advantage. Move fast.
- **Mid 2017 - 2018**: Advantage narrows as competitors improve. You need market presence.
- **2018+**: If you haven't launched and built a user base, you're just another me-too NMT system.

**Implication**: Launching in 2017 is time-sensitive. Waiting until 2018 means you've wasted your window.

---

## The Decision

It's November 2016. The engineering team is ready to launch. Linguee's business is running smoothly. You, Jaroslaw Kutylowski, have to make four interlocked decisions:

**Decision 1: Do You Launch DeepL Independently, or Keep It Inside Linguee?**
- **Independent**: DeepL launches as a separate product/company. You hire a new team. You raise money. You go all-in.
- **Inside Linguee**: DeepL is a feature/product line within Linguee. Linguee brand might confuse users. But you leverage existing user base.
- **Hybrid**: Separate product, but Linguee users get free access as a perk.

**Decision 2: What's Your Primary Market and Pricing Model?**

You can't serve everyone equally. Choose:
- **Consumer (free/freemium)**: Bet that you can win via word-of-mouth and integration with products. Requires the most resources and patience. Monetization is hard.
- **Enterprise/B2B (paid API + premium tier)**: Bet that businesses will pay for quality. Smaller market, but revenue comes faster. Requires sales and partnerships.
- **Hybrid**:
  - Free/freemium for consumer adoption
  - Premium tier ($5-10/month) for power users
  - Enterprise API for businesses
  - Phased launch: Start with API, move to consumer later

**Decision 3: Which Languages to Launch?**

- **Tier 1 (Best data, clear advantage)**: English ↔ German, French, Spanish, Italian
- **Tier 2 (Good data)**: English ↔ Dutch, Polish
- **Tier 3 (Okay data)**: English ↔ Portuguese, Russian
- **Tier 4 (Limited data)**: English ↔ Asian languages

Do you launch with Tier 1 only (showcasing quality but limiting market) or all four tiers (casting a wider net but diluting your advantage)?

**Decision 4: How Do You Convince Users to Switch?**

Whatever you decide above, you need a distribution/marketing strategy:
- **Word of mouth?** (Slow, requires product so good users evangelize)
- **Sales team?** (Expensive, slow to hire, but effective for enterprise)
- **Partnerships?** (Approach browsers, messaging apps, SaaS tools; propose integration)
- **PR/community?** (Launch on Product Hunt, target language learner communities, get press)
- **Acquisition?** (Pay for users; unsustainable long-term, but can jumpstart growth)
- **Linguee's existing base?** (Leverage Linguee's massive dictionary traffic to promote DeepL)

---

## Study Questions for Class Discussion

1. **Why does Kutylowski have an unfair advantage (Linguee's corpus) but Google still dominates?** What doesn't superior technology guarantee in a market?

2. **If you were Kutylowski, would you launch at all?** What would make you more confident? What would make you more hesitant?

3. **Which go-to-market strategy (consumer vs. enterprise vs. API-first) would you choose?** Why? What's your fallback if your first choice fails?

4. **How do you price a product that is "better" than free?** Can you win on quality alone, or do you need to add convenience (speed, privacy, integration) to justify a price?

5. **Does launching with only European languages limit your potential, or is it actually a smart narrowing of focus?** When is specialization a strength vs. a weakness?

6. **Google will likely improve its system to match yours within 12-18 months.** Does that mean you have to move fast now? Or does it mean the game is unwinnable regardless of speed?

7. **Linguee is profitable and growing. Is launching DeepL a good use of Kutylowski's resources, or is he risking what he's built?** When is diversification smart vs. distraction?

---

## Epilogue (read after class)

*Spoiler warning: this section gives away what DeepL actually did. Read it after the class discussion, not before.*

**What actually happened** (public record):
- DeepL Translator launched on August 28, 2017 — not as a separate startup, but out of Linguee, which renamed itself DeepL GmbH the same year. Kutylowski, the CTO who led the project, became CEO in 2019 and is the company's founder-CEO today; Linguee founder Gereon Frahling stepped back and left the company in 2019
- Initial launch: 7 languages (English ↔ German, French, Spanish, Italian, Dutch, Polish — 42 combinations), free, on a single web page
- The launch pitch was quality: blind tests in which professional translators preferred DeepL over Google, Microsoft, and Facebook. Label those claims for what they were — company-run benchmarks — though independent press reviews (TechCrunch, Le Monde, heise) broadly agreed
- Monetization followed the wedge: DeepL Pro — subscriptions plus a usage-priced API and CAT-tool integrations — arrived in March 2018; Portuguese and Russian followed in December 2018
- First notable outside investors came only after launch traction: Benchmark and btov (2018)
- Google improved its system, but DeepL kept its quality reputation in its core European languages
- January 2023: $100M+ round led by IVP (with Bessemer, Atomico, WiL) at a ~$1B valuation — a unicorn on a reported ~$50M revenue run-rate, roughly break-even
- May 2024: $300M led by Index Ventures (ICONIQ Growth and Teachers' Venture Growth participating) at a $2B valuation; 100,000+ business customers; 900+ employees
- DeepL was never acquired. It remains an independent company headquartered in Cologne

**Teaching Points**:
1. **Timing of Launch**: The team shipped in August 2017 — almost a year after Google's neural switch — launching only once quality was consistent across all seven languages. That cost them the "first-mover" claim in neural translation, but made the quality gap undeniable at launch. Students should discuss whether speed or quality matters more in this case.

2. **Free-First Strategy**: The free web translator (capped per text, not paywalled) was critical to growth — anyone could experience the quality gap in 60 seconds. DeepL Pro (from March 2018) then monetized the users who needed volume, privacy, and integrations. This is classic wedge design.

3. **Bundled Decisions**: Kutylowski's choices (which languages, which markets, which pricing model) were interdependent. Choosing European languages first made the quality claim defensible. Launching web-first and adding Pro + API in 2018 sequenced the segments instead of splitting resources.

4. **Competitive Dynamics**: Google improved its quality over time, but didn't abandon Google Translate to consumers. The market could support both. DeepL won by being better, not by being free.

5. **Data as Moat**: Linguee's bilingual corpus was a defensible advantage for a time, but eventually commoditized. By 2019-2020, competitors had built similar corpora. The question is: what do you do after your data advantage erodes? (DeepL's answer: keep improving quality, add more languages, focus on user experience.)

**Debate Points**:
- Should Kutylowski have gone all-in with VC funding, or is the bootstrap approach (slower but profitable) better for DeepL?
- Was the freemium model the right choice, or should he have gone API-first (enterprise-only)?
- Did choosing European languages first limit growth, or was it the right strategic focus?

**Follow-up Case** (for advanced students):
What happened to DeepL after 2019? Google improved its quality. Amazon and Microsoft launched competitive services. But DeepL maintained its premium position. Why? What's the lesson about competitive advantage and defensibility?

---

*Teaching case written for this course from public sources. Exhibits marked as illustrative are reconstructions for classroom use.*
