# Stripe: The Collison Installation
## Teaching Case (HBS-style) — written for this course

**Prepared for:**
TUM Entrepreneurship Course: Prototyping Entrepreneurial Ideas for AI

**Decision Point:**
Spring 2011 — 20 Users, a Profitable Incumbent, 3-Month Product Gap

---

## How this case ties into Module 08

This module asks who your first ten customers are — by name; Stripe answered with laptops instead of landing pages. Work three connections as you read: (1) **The Collison installation IS today's workshop:** on a "yes," the brothers walked to the user's laptop and set Stripe up on the spot — today you run the message version, sending 10 real outreach messages live in class. (2) **Idea 1 — do things that don't scale:** at fewer than 100 users, hand-installing beats any scalable marketing; at each decision point in the case, ask what the unscalable move would be. (3) **Name 10 specific humans:** Stripe's first users were named YC founders the brothers knew — the first was 280 North's Ross Boucher — and your Module 06 outreach list is the same move.

## Introduction

By spring 2011, Patrick and John Collison had cracked something fundamental about early customer acquisition: **people don't download and install software anymore — you install it for them.**

While other Y Combinator founders worried about signup flows and onboarding funnels, the Irish brothers were walking over to fellow founders' laptops and setting up working Stripe integrations in real time. No sales pitch. No email sequence. Just: *Here's a working payment system. It works right now.*

Stripe, founded in 2010 and still in invite-only private beta, had grown to roughly 20 paying customers in its first year — tiny by any measure. But those 20 customers generated thousands of dollars in transaction volume, each integrated more seamlessly than competitors could manage. The core product was elegant: an API so simple that a developer could take payments live in a single sitting instead of weeks.

By 2011, the market smelled the opportunity. Braintree — founded in 2007, profitable, four years into building payments infrastructure, and weeks away from a $34 million Series A from Accel — was courting the same developers with its own API. Google Checkout was still on the board. The window for Stripe to establish market position was measured in months, not years.

Standing in that window, Patrick Collison faced a stark decision that would define not just Stripe's strategy, but his philosophy of how startups should grow.

---

## Background

### The Problem Stripe Solved (2008-2010)

Before Stripe, accepting credit card payments online required three separate integrations:

1. **A merchant account** (from a bank or PayPal)
2. **A payment gateway** (to process transactions)
3. **PCI compliance** (a regulatory nightmare that made many small businesses give up entirely)

The process took weeks. A small business owner might spend more time on forms than actually building their company.

The Collisons were not first-time founders. In 2007, Patrick — an MIT student who had won Ireland's Young Scientist competition at sixteen — and his younger brother John, still in secondary school in Ireland, started a software company called Shuppa in Limerick. When Irish state funding didn't materialize but Y Combinator showed interest, they moved to California, merged with two Oxford graduates (Harjeet and Kulveer Taggar), and the company became Auctomatic, building tools for eBay sellers.

In March 2008, they sold Auctomatic to Canada's Live Current Media for a reported ~$5 million. Patrick was 19; John was 17. The sale made them teenage millionaires — and left them with a lesson from their own side projects: **accepting money on the internet was absurdly, needlessly hard.** Even for two people who could build almost anything, taking payments meant weeks of forms, banks, and gateways.

Patrick returned to MIT; John headed to Harvard. In late 2009, they started building a payment system specifically for developers — working name: "/dev/payments" — something so simple that a programmer could integrate it in one sitting.

Y Combinator, which had backed Auctomatic, backed them again (YC's directory lists Stripe in its Summer 2009 batch; the seed money arrived in early 2010). By Stripe's own account, the first live transaction ran two weeks into the prototype — for 280 North, a fellow YC company whose founder Ross Boucher became Stripe's first user and, later, one of its first employees.

### The First Year: Manual Customer Acquisition (2010-2011)

The story of Stripe's first year is almost surreal to modern ears. The Collisons didn't have a sales team. They didn't have a customer acquisition budget. They had two very young founders, a private beta, and one unfair advantage: a network full of named potential users — the other Y Combinator founders they already knew.

But word-of-mouth only works if people try it.

So Patrick and John did something that doesn't scale: **when a founder said yes, they didn't send a signup link — they took the laptop and installed Stripe on the spot.** Paul Graham described the move — and named it — in his essay "Do Things That Don't Scale" (July 2013):

> "At YC we use the term 'Collison installation' for the technique they invented. More diffident founders ask 'Will you try our beta?' and if the answer is yes, they say 'Great, we'll send you a link.' But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot."

This was not a sustainable go-to-market strategy. But it was *efficient*. Each conversion cost founder time — one conversation, one live setup, done before the interest could cool. Each customer was deeply integrated — they'd seen it work, asked live questions, and had buy-in from a founder personally walking them through it.

By the end of 2010, Stripe had on the order of 20 paying customers.

By early 2011, this number had grown to perhaps 30-40 customers, mostly YC startups, small e-commerce shops, and indie software makers.

Most crucially: **churn was extremely low.** The customers who watched a Stripe integration happen on their own laptop didn't leave. They became evangelists.

### The Competitive Landscape Shifts (Spring 2011)

Stripe's window began to close in 2011. Braintree — a Chicago payments processor founded in 2007 that had bootstrapped its way to profitability — was pushing hard for the same developer audience with its own API, and in June 2011 it raised its first outside capital: a $34 million Series A from Accel.

**Braintree's Advantages (Spring 2011):**
- Profitability and real revenue (compared to Stripe's ~$2 million seed round and beta product)
- Four years of hardened payment processing infrastructure
- Relationships with major banks and acquiring partners
- A sales team and customer success organization
- Brand recognition among larger merchants

**Stripe's Advantages (Spring 2011):**
- An API that was 10x simpler to integrate
- Product-market fit with early developers
- The Collisons' obsessive focus on developer experience
- No legacy baggage or product cruft
- Something approaching religious fervor among its small user base

The question was not whether Stripe could out-spend Braintree. It could not. The question was whether Stripe could prove that its simple API was so much better that developers would choose it, even with a smaller company and fewer resources behind it.

---

## The Situation

*The decision scenario below is a stylized reconstruction for classroom use. The constraints are historical — Stripe served only US businesses until September 2012, Braintree was ahead internationally, and YC batch-mates were Stripe's core early users — but "Company X," the quoted dialogue, and the specific estimates are illustrative.*

### The Offer: YC Batch Mates in International Expansion

In spring 2011, another company in Stripe's Y Combinator cohort approached Patrick Collison with an offer.

This company — let's call them Company X to preserve anonymity — was operating in multiple countries: the US, UK, Canada, and Australia. They'd chosen Stripe as their payment processor. But they were hitting a hard constraint: **Stripe only worked for US businesses charging in US dollars — international support didn't exist.**

Company X needed to accept payments from customers globally, including in the UK, Australia, and Canada. Not someday. Now.

They came to Patrick with a proposal:

> "We love your product. It's 10x better than anything else. But you only do US cards. If you can support international cards, we'll integrate immediately — and we'll be an anchor customer for your international expansion."

### The Technical Challenge: 3 Months of Engineering Work

Adding international card processing was not trivial. Each country's payment system had different requirements:

- **UK cards** required different merchant acquiring and routing
- **Canadian cards** had different chargeback rules and acquiring relationships
- **Australian cards** required compliance with Australian regulations
- Each integration required banking relationships and testing

Stripe's engineering team (small, intensely focused on API design) estimated this work at 3 months of full-time effort — during which the team couldn't do much else.

### The Competitive Pressure: Braintree Is Ahead Internationally

Making this decision urgent: Braintree was *already* ahead internationally — multi-currency processing was live, and a launch for European merchants was in the works.

If Stripe didn't move quickly on international expansion, the narrative would calcify:
- **Braintree:** The global payments platform
- **Stripe:** The nice API that only works in the US

### The Opportunity Cost: What Else Could Be Built?

Over the same 3 months, Stripe could:

- **Improve the dashboard** — let developers see real-time transaction data
- **Build payment sources** — accept more payment methods (ACH, Bitcoin, Apple Pay as these emerged)
- **Expand the API surface** — add dispute resolution, refund workflows, advanced routing
- **Optimize performance and reliability** — make the API even faster, more reliable
- **Land 50+ more US customers** through continued personal outreach and word-of-mouth

In other words: **3 months of international work meant 3 months of not getting better at serving US developers.**

### Company X's Alternative: The Manual Workaround

Company X also proposed a short-term workaround:

> "If you can't build international support in the next 30 days, we could manually workaround it. You could process our international cards through a partner processor temporarily, and we'd route them through Stripe's US infrastructure. It would be a hack, but it would work until you have full support."

This workaround would:
- ✓ Keep Company X operational immediately
- ✓ Give Stripe another 60 days before a full rebuild was necessary
- ✓ Generate revenue and case studies (Company X's use could be marketing)
- ✗ Be unreliable (manual routing, higher error rates, hard to maintain)
- ✗ Not scale beyond this one customer
- ✗ Distract the team with operational overhead

### The Market Context: Blitzscaling Vs. Focus

By 2011, startup strategy was beginning to split into two camps:

**Camp A: Blitzscale**
- Raise large rounds
- Expand internationally fast
- Build features to address every market need
- (Example: Braintree after its June 2011 Accel round)

**Camp B: Focus**
- Stay small and well-capitalized
- Dominate one geography deeply
- Build the best product, not the broadest
- (Example: Stripe's implicit model)

Patrick Collison had to decide which camp Stripe would join.

### The Financial Picture: How Much Capital Was Enough?

Stripe had just raised roughly $2 million in seed funding (spring 2011) from Sequoia Capital, Andreessen Horowitz, SV Angel, and PayPal co-founders Peter Thiel and Elon Musk. The team was still in the single digits.

Adding 3 months of focused engineering work would cost:
- ~$150k in salaries (sunk cost, but still real)
- ~$30k in acquiring infrastructure and banking relationship costs
- $0 in additional runway — the company had enough capital

The company was not in danger of running out of money. The decision was purely strategic: *which customer segment should we serve first?*

---

## The Decision Point

It is **April 2011**. Patrick Collison sits with John Collison and their small founding team. Company X is waiting for an answer.

The clock is running on multiple fronts:

1. **Braintree is expanding aggressively** — they have the capital and the team to own international payments
2. **Other YC companies are onboarding to competing platforms** — each one that doesn't choose Stripe is both lost revenue and lost word-of-mouth
3. **The US market is not infinite** — the team's personal laptop-to-customer approach won't scale to 1000s of businesses

Patrick must choose:

### Option A: Say Yes to the 3-Month Build
Build full international card support now. This means:
- ✓ Landing Company X as an anchor customer and case study
- ✓ Positioning Stripe as a truly global payment platform
- ✓ Potentially opening doors to European, Asian, and other non-US markets
- ✗ Pausing other product development for 3 months
- ✗ Betting that global expansion is the right strategic move when the company's data and expertise is entirely US-based
- ✗ Possibly losing momentum in the US market to Braintree's faster feature velocity

### Option B: Say No and Stay Focused on the US
Decline the 3-month international build and recommend the manual workaround (or passing) to Company X. This means:
- ✓ Continuing rapid iteration on the core US product
- ✓ Landing 50+ more US customers through continued personal outreach
- ✓ Building features that delight existing US customers (dashboard, webhooks, etc.)
- ✓ Maintaining the team's velocity and focus on API simplicity
- ✗ Ceding the international market to Braintree *now*, possibly permanently
- ✗ Passing on a strategic customer relationship
- ✗ Risking the narrative that Stripe is a "US-only" product

### Option C: Split the Difference (The Hybrid)
Build partial international support — say, the UK first (smallest lift, largest market). This means:
- ✓ Landing Company X (partially) and showing progress on global ambitions
- ✓ Proving the international expansion can work without 3 full months
- ✓ Learning about the operational and regulatory challenges
- ✗ Still losing 6-8 weeks of US-focused engineering time
- ✗ Building half-solutions that might feel incomplete
- ✗ Getting stuck in a prolonged "not quite ready" mode

### The Subtext: What Is Stripe's Identity?

Underneath each option is a deeper question about Stripe's strategy:

**Is Stripe a global payments platform that happens to start in the US?**
(Then Option A makes sense — build globally now, capitalize on first-mover advantage in developer APIs)

**Or is Stripe the simplest, best payment API for developers, which happens to be global?**
(Then Option B makes sense — build in the US first, expand internationally when you truly understand each market)

The difference is not semantic. It determines hiring, product roadmap, fundraising, everything for the next 5 years.

### The Decision Moment

Patrick Collison must decide: **Say yes to international expansion now, or stay focused on the US and risk Braintree eating the global market?**

What would you do? And why?

---

## Exhibits

### Exhibit A: Market Size and Competitive Positioning (2011)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

| Metric | Stripe | Braintree | PayPal | Square |
|--------|--------|-----------|--------|--------|
| **Customers (est.)** | 20-40 | Thousands | 100,000+ | 50,000+ |
| **Funding raised** | ~$2M seed | $0 VC (bootstrapped; $34M in June 2011) | eBay subsidiary | ~$38M (a $100M round followed mid-2011) |
| **Supported markets** | US only | US + multi-currency | 100+ countries | US only |
| **API maturity** | New (private beta) | Mature, developer-focused | Legacy SOAP | New, retail-focused |
| **Developer sentiment** | High | Medium | Low | Medium |
| **Revenue per customer (est.)** | $300+/mo | $100/mo | $50/mo | $500/mo |

*Note: teaching estimates based on public information and industry reports. Stripe's higher revenue per customer reflects a small base of real, transacting businesses rather than dormant signups.*

### Exhibit B: Feature Parity Comparison (Spring 2011)

*Illustrative reconstruction for classroom use — directionally faithful, individual entries are teaching estimates.*

| Feature | Stripe | Braintree | Notes |
|---------|--------|-----------|-------|
| REST API | Yes | Yes | Stripe's was ~10x simpler per developer feedback |
| US card processing | Yes | Yes | |
| International support | No (US businesses, USD only) | Ahead — multi-currency | The key gap |
| Webhooks | No | Yes | Real-time notifications for developers |
| Dashboard | Basic (early version) | Yes | Transaction visibility |
| Monthly billing / subscriptions | No (planned) | Yes | Increasingly important |
| 3D Secure support | No | Yes | Fraud protection, expected by EU merchants |
| ACH/Bank transfers | No | No | Neither offered bank transfers yet |

### Exhibit C: Engineering Team and Capacity

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**Stripe Engineering (Spring 2011):**
- **Patrick Collison** (CEO, Co-founder) — API design, architecture decisions
- **John Collison** (President, Co-founder) — Customer relationships, ops
- **2-4 early engineers** — API reliability, payment processing, integrations
- **Everyone** — Testing, documentation, support

**Estimated Capacity:**
- 3 months of 100% focus = 1 major feature (international support)
- 3 months of 70% focus = 2-3 smaller features (dashboard improvements, webhooks, subscription API)
- 3 months of 40% focus = continuous iteration but no major launches

### Exhibit D: Timeline of Competitive Moves (2011-2013)

*Dates below are verified from public reporting (not estimates).*

| Date | Company | Move |
|------|---------|------|
| Spring 2011 | Stripe | ~$2M seed from Peter Thiel, Elon Musk, Sequoia, Andreessen Horowitz, SV Angel |
| Q2 2011 | Stripe | **[This is where the decision is made]** |
| June 2011 | Braintree | First outside capital: $34M Series A from Accel |
| Sept 29, 2011 | Stripe | Public launch after extensive private beta — US businesses only |
| Feb 2012 | Stripe | $18M Series A led by Sequoia at a ~$100M valuation |
| Aug 2012 | Braintree | Acquires Venmo for $26.2M |
| Sept 2012 | Stripe | First market outside the US: Canada |
| Aug 2013 | Stripe | UK launch — first European market |
| Aug 2013 | Shopify | **Shopify Payments launches — powered by Stripe** |
| Late 2013 | Braintree | Acquired by eBay's PayPal for ~$800M |

### Exhibit E: Customer Acquisition Cost and Retention (Stripe's First Year)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

| Metric | Value |
|--------|-------|
| **CAC (manual outreach)** | ~$50-100 per customer (2 founders' time) |
| **Lifetime value (first 12 months)** | ~$3,600-5,000 (estimated transaction fees) |
| **Churn rate** | ~2-3% monthly (very low) |
| **Expansion revenue** | ~20% of cohort increases transaction volume >50% in Y2 |
| **NPS score (inferred from case studies)** | 60+ (among software developers) |

*Note: These are reconstructions from available sources. Stripe did not publish detailed financial data until much later.*

### Exhibit F: The "Do Things That Don't Scale" Philosophy

Paul Graham's essay "Do Things That Don't Scale" (July 2013) later canonized what Stripe had been doing since 2010 — and named the technique after the brothers.

From the essay:

> "Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition."

The essay also records the manual layer beneath the magic: the way Stripe delivered "instant" merchant accounts to its first users was that the founders signed them up for traditional merchant accounts by hand, behind the scenes.

**Applied to Stripe in 2011:**

The laptop-installation approach:
- Does not scale to millions of merchants
- Is expensive in founder time
- But generates disproportionate value and loyalty
- Creates a bias toward *simplicity* (if you have to set it up live on someone else's laptop, it needs to be simple)

The question for the decision point: **Does saying "no" to Company X align with this philosophy, or violate it?**

If saying no means losing a key customer, it violates it.
If saying yes means distracting the team from serving existing customers well, it also violates it.

---

## Questions for Class Discussion

1. **Customer-driven vs. product-driven strategy:** Company X is asking for features. Does saying yes mean you're *listening to customers* (good) or *letting customers dictate your roadmap* (bad)?

2. **The churn risk:** If Company X leaves to use Braintree instead, how much damage is done? Is one large customer worth 3 months of engineering time?

3. **The brand risk:** If Stripe stays US-only while Braintree expands globally, does the "US-only" label become permanent? Can Stripe rebrand later?

4. **The founder bet:** Is this a decision that depends on what Patrick Collison personally believes is the right strategy — or is there an analytically "right" answer?

5. **The timing question:** If the answer is "yes, build international support, but not now," *when* would be the right time? What would change?

6. **Design your own Collison installation:** Stripe's version of the move was five words — "Right then, give me your laptop." For your product, what is the equivalent gesture that turns a polite "yes" into a live user before the conversation ends? Name the 10 specific humans from your Module 06 outreach list you would run it on this week — that list is exactly what today's workshop sends against.

---

## Epilogue (read after class)

*Spoiler warning: this section gives away what Stripe actually did. Read it after the class discussion, not before.*

For historical context, Stripe's actual path was closest to Option B — Option A's ambition arrived later, on Stripe's own clock:

The Collisons stayed focused on making the product excellent for US developers and kept recruiting users by hand. Stripe launched publicly on September 29, 2011 — after an extensive private beta — serving US businesses only. International expansion came deliberately, one market at a time: Canada in September 2012, the United Kingdom in August 2013. By then the sequencing question had answered itself. Developers had made Stripe their default, and the platforms followed — Shopify Payments launched in August 2013 "powered by Stripe."

Braintree took the other path. It raised $34 million from Accel in June 2011, pushed internationally, acquired Venmo in 2012 — and was bought by eBay's PayPal in late 2013 for roughly $800 million. A fine outcome, but the independent contender was gone just as Stripe's compounding started to show: $18 million from Sequoia at a ~$100 million valuation in February 2012, then round after round as Stripe's API became the developer standard for internet payments.

The long arc: the hand-installed beta grew into the world's most valuable private fintech company. A February 2025 tender offer valued Stripe at $91.5 billion; a February 2026 tender raised that to $159 billion, alongside $1.9 trillion in payment volume processed in 2025. Stripe is still private — and still run by the two brothers whose opening move was "Right then, give me your laptop."

The case illustrates that "do things that don't scale" is not the opposite of scale — done right, it is the route to it.

---

*Teaching case written for this course from public sources. Exhibits marked as illustrative are reconstructions for classroom use.*
