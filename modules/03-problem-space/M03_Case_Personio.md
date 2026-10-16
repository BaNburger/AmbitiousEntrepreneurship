# Personio: Listening to Munich's HR Managers

## Teaching Case (HBS-style) — written for this course
**For TUM Entrepreneurship Course: Prototyping Entrepreneurial Ideas for AI**
**Module 3: The Problem Space**

---

## How this case ties into Module 03

Three threads to pull as you read. (1) **The Mom Test in the wild:** Renner's café conversations did what no survey ever could — they surfaced what HR managers actually did last week ("show me how you ran payroll"), not what they politely claim they would do ("sure, I'd buy that"). Watch how every good question in this case is about past behavior. (2) **Hair-on-fire segmentation:** not every SMB hurt equally. The real work below is figuring out WHICH companies hurt enough to pay — exactly what your pain-map homework asks of you this week. (3) **Budget authority:** the HR manager feels the pain, but the founder or CEO signs the invoice. Pain and purchasing power sit in different chairs. Add the budget column to your pain map this week — a pain without a budget holder is a hobby, not a business.

## Introduction

In 2015, Hanno Renner was a graduate student in Munich, and he had a problem.

He wasn't trying to solve humanity's grand challenges. He wasn't pursuing an ambitious technical vision. He was sitting in cafés and offices across Munich, talking to HR managers at small companies.

What he heard was almost monotonous in its consistency: "We manage everything with Excel. It's terrible. We waste hours on recruiting, onboarding, time tracking, payroll. Someone's going to build a better solution, but it won't be us."

Renner wasn't a deep technologist. He wasn't an AI researcher. He wasn't a McKinsey consultant or an HR insider. He was a master's student at TUM, finishing the Honours Degree at CDTM — the Center for Digital Technology and Management, the joint TUM/LMU program — and he had paid for his studies by working as a professional sailing skipper. He thought like a skipper: read the conditions first, then set the course.

But what he was discovering in those conversations was something more valuable than technology: he was discovering a problem space that venture capitalists didn't yet believe in.

This case is about discovering and validating a problem before you build the solution. It's about the Jobs-to-be-Done framework. It's about the Mom Test—how to ask questions that get at truth, not just validation. It's about founder-problem fit: why Renner was the right person to see this problem, and what it meant for the company he would build.

And it's about a decision that would shape Personio for the next decade: after discovering the problem, how do you carve out a wedge in the market?

---

## Background: The HR Software Problem

To understand why this problem mattered, you need to understand HR software in 2015.

### The Enterprise Landscape (2015)

Large companies (1,000+ employees) had sophisticated HR systems. They used SAP SuccessFactors, Workday, or Cornerstone OnDemand. These were enterprise-grade, expensive ($100,000+ annually), and required implementation teams to deploy.

They handled everything: recruiting, onboarding, performance management, payroll, benefits administration, compliance.

They were bloated, slow, and required an army of HR administrators to maintain. But they worked, and for large enterprises, the investment was worthwhile.

### The Small-to-Medium Enterprise Problem

But what about companies with 10-200 employees?

These were the so-called SMEs (small and medium enterprises). In Europe, they were incredibly common. Germany, France, and the UK had hundreds of thousands of SMEs. They employed perhaps 50+ million people across Europe.

For SMEs, enterprise HR software was unaffordable. A €50,000 implementation cost was too much for a company with 50 people. The complexity was unnecessary. The features were overkill.

So what did SMEs do?

They used Excel.

**Recruiting**: A spreadsheet with candidate names, contact info, status (applied, interviewed, rejected).

**Onboarding**: A checklist in Excel. New hire started, HR person moved them from "not started" to "completed" columns. Probably manual.

**Time tracking**: A spreadsheet. Employees entered their hours. HR totaled them up. Payroll calculated based on those totals.

**Payroll**: Another spreadsheet. Or sometimes a printed paycheck register that someone hand-calculated.

**Performance management**: Maybe a spreadsheet of last-year's feedback. Maybe just emails archived somewhere.

It was chaos. It was inefficient. It was error-prone. And it was ubiquitous.

**This was the problem space Hanno Renner discovered.**

### Why Had This Problem Persisted?

If the problem was so obvious, why hadn't anyone solved it?

The answer is economics. Building HR software is expensive. Selling HR software is hard. The market for 10-200 person companies is fragmented and low-margin. For decades, venture investors had avoided this space.

The standard VC view was: "You can either target enterprise (high price, long sales, complex implementation) or consumer (low price, high churn, hard to monetize). HR software for SMEs is the worst of both worlds—they can't pay enterprise prices but they're not consumers."

So SMEs remained stuck with Excel, and nobody tried to fix it.

---

## The Founders: Hanno Renner and the CDTM Crew

Hanno Renner did not take the standard founder path. He did his bachelor's in industrial engineering at HTWG Konstanz, spent an exchange semester at the University of Auckland, and paid his way through his studies working as a professional skipper — earning his yachtmaster's license and sailing paying guests through the Caribbean and the Mediterranean during semester breaks.

For his master's in Management and Technology, he came to TUM. In 2015, he completed the Honours Degree in Technology Management at CDTM — the Center for Digital Technology and Management, the joint program of TUM and LMU, a short walk from the TUM main campus. If you are sitting in this course, this story starts in your neighborhood.

At CDTM, Renner met three fellow students: **Roman Schumacher**, **Arseniy Vershinin**, and **Ignaz Forstmeier**. The four would found Personio together in 2015.

The skipper experience shaped how Renner thought about problems:

1. **Observe first**: Read the wind and the water before you touch the helm
2. **Data-driven**: Ask questions, get evidence, don't assume
3. **Systemic thinking**: A problem rarely exists in isolation—it's connected to other problems
4. **Responsibility for the whole boat**: A great insight means nothing if the crew can't execute it

The spark, in the company's own telling, came from a friend: the CTO of a roughly 100-person company who complained that he had no proper software for recruiting and payroll and was drowning in the resulting chaos.

The four didn't immediately jump to hiring and fundraising. Instead, they did something that most startup founders skip: they talked to potential customers for months.

### Talking to HR Managers

Starting in late 2014, while still at CDTM, Renner and his co-founders began meeting with HR managers and business owners at small companies across Munich — dozens of them, in the company's telling; this origin story has since become Personio lore. They didn't pitch anything. They didn't have a product. They just asked questions.

"How do you manage recruiting?" "How do you track hours?" "What problems do you face?" "What would you pay to fix this?"

They were systematically mapping the problem space.

What they found was striking: **the problem was universal, but it was fragmented.**

Different companies had slightly different pain points:
- Manufacturing companies cared about time tracking and payroll
- Tech startups cared about recruiting and onboarding
- Service companies cared about shift scheduling
- All of them used Excel in slightly different ways

But the underlying problem was the same: **manual, error-prone processes that wasted time and created compliance risks.**

### Listening Pattern: The Mom Test

Renner was practicing something that's often called "the Mom Test"—a framework from entrepreneur Rob Fitzpatrick for getting genuine feedback.

The Mom Test is simple: ask questions that you can't fake answers to. Instead of asking "Would you use a product that solved your Excel problem?", you ask "What did you do yesterday to handle recruiting?" or "Show me your current system for time tracking."

Renner asked specific questions:
- "How long does it take to process payroll each month?"
- "How many times a year do you have errors in employee data?"
- "If a new employee asked about benefits on day one, what would happen?"
- "How much do you spend annually on HR software?"
- "Who complains most about the current system?"

The answers to these questions were revealing. (The figures below are reconstructed for teaching — trust the pattern, not the decimal points.)

**Payroll processing time**: 3-5 hours per month (for a 20-50 person company)

**Data errors**: Roughly one error per 50-100 employees annually (name typo, duplicate entry, salary mismatch)

**Benefits question on day one**: Usually, the HR person doesn't have an answer. They have to dig through files or email someone.

**Current spending on HR software**: Typically €0. The company used free tools or spreadsheets.

**Who complains**: The HR person, always. They were spending 10-15 hours weekly on manual HR tasks.

### The Hiring Question

Over the course of his interviews, Renner asked one question repeatedly: "What would you pay for a better solution?"

Most SME HR managers said: "I'd pay something, but not much. Maybe €50-100 per month?"

But when pressed harder—when Renner asked "If you could avoid 5 hours of work per week, what's that worth?"—companies said: "Maybe €500-1,000 per month. That's worth it."

This was the crucial insight: **The HR person's time was the value, not the software itself.**

If you could automate 5-10 hours of work per week, companies would pay for that value.

In 2015, this was not a common realization. But it was obvious once Renner saw it.

### The Evidence Base

By late 2015, the founders had — as they tell it — conducted dozens of interviews with HR managers, business owners, and employees at SMEs in Munich and beyond.

They had also looked at comparable markets:

**In the US**, BambooHR (founded 2008) had been quietly building HR software for SMBs for years, and Zenefits (founded 2013) had just become the fastest-growing SaaS company anyone had seen. The category was real.

**In Germany**, there was no comparable modern solution. German SMEs were either using Excel, running older on-premise tools like HRworks, or handing payroll to a tax advisor working in DATEV.

**The timing seemed right**:
- Cloud software was now mainstream (2015)
- Mobile access was expected
- Integration with payroll and tax software was possible (and legally required in Germany)
- Smartphones meant employees could access information anywhere

The founders had discovered a market that satisfied three criteria for a good startup opportunity:

1. **Real problem**: HR managers spent significant time on manual tasks
2. **Underserved market**: No modern solution for SMEs
3. **Willingness to pay**: Companies would pay €500-1,500 per month to save time

---

## The Situation: Late 2015 - The Product Decision

By late 2015, the four had decided to build the company. There was no outside funding — they were students, pooling savings, building the first version wherever they could find free desks around the university. (Institutional money came later: a €2.1 million seed round in July 2016 from Global Founders Capital, Picus Capital, and angel investors — by which point, Renner later told CNBC, the company account had been down to a few hundred euros.)

But first they faced a critical decision: **Which problem should they solve first?**

The interviews had surfaced multiple pain points:

### The Recruiting Problem
Small companies spend 5-10 hours per week on recruiting. They post on multiple job boards, receive CVs in email, manually track candidates through interviews and hiring.

A recruiting tool could:
- Aggregate job applications into one place
- Track candidate pipeline
- Collaborate with hiring managers
- Schedule interviews
- Send offer letters

**Estimated market pain**: High. Every company recruits.

**Estimated revenue**: Companies pay €200-500/month for recruiting tools

**Competitive landscape**: Lever, Greenhouse exist but are expensive. No German competitor.

### The Time Tracking Problem
Employees need to log hours. HR needs to approve and total them. Payroll needs accurate data.

A time tracking tool could:
- Allow employees to log hours on mobile
- Auto-calculate totals
- Route to manager for approval
- Feed into payroll

**Estimated market pain**: Very high. Every company tracks time.

**Estimated revenue**: Companies pay €100-300/month for time tracking

**Competitive landscape**: Toggl exists but is for freelancers. No SME-focused solution in Germany.

### The Onboarding Problem
New hires come in. They need paperwork, IT setup, benefits forms, training. It's chaotic and manual.

An onboarding tool could:
- Create an onboarding checklist
- Assign tasks to different people
- Track completion
- Centralize documents

**Estimated market pain**: Moderate. Recruiting companies care. Others less so.

**Estimated revenue**: Lower. Probably €100-200/month as an add-on.

### The All-in-One Solution
Renner could build a platform that did everything: recruiting, time tracking, onboarding, payroll, performance management.

**Advantages**: One integrated system, network effects (more data makes it better), defensible (hard to compete with)

**Disadvantages**: Hugely complex, requires deep partnerships with payroll providers, regulatory compliance across multiple domains, enormous engineering challenge, slow to market

### Sizing the Opportunities

The founders had talked to enough companies to sketch market size. (Napkin math of the kind every founding team scribbles — illustrative, not audited:)

**Germany**:
- Roughly 350,000-400,000 companies with 10-250 employees — the core of the Mittelstand
- Nearly all of them running HR on spreadsheets or aging on-premise tools
- Call it ~400,000 potential customers in Germany alone, before counting the rest of Europe

**Recruiting tools**: Capture 5% = 20,000 customers. At €300/month average = €72M annual revenue at scale.

**Time tracking tools**: Capture 5% = 20,000 customers. At €150/month = €36M annual revenue.

**All-in-one HR platform**: Capture 3% = 12,000 customers. At €800/month = €115M annual revenue. But higher risk.

### Customer Research on the Wedge

Renner had learned enough about the problem space to know that launching an all-in-one solution was risky. Getting one piece right was hard. Trying to get everything right simultaneously was a recipe for failure.

So they asked their customer contacts: "If we could only build one thing, what would you want first?"

The answers were split (reconstructed for teaching):
- 40% said recruiting
- 35% said time tracking
- 15% said payroll/compliance
- 10% said something else

The largest cluster wanted **recruiting** first. The reasoning: "Recruiting is painful and important. Time tracking is painful but less important. Get recruiting right, then expand."

There was a counter-argument inside the founding team: "Time tracking is more universal. Every company does it. Recruiting is episodic—most companies recruit a few times per year. Time tracking is daily."

And underneath both, a third answer kept surfacing in the interviews, more unsettling than any percentage split: "Honestly? Another tool is the problem. I already juggle too many. I want ONE system."

### The Framework for Deciding

The team weighed several criteria:

1. **Customer frequency**: How often do companies use this? (Time tracking wins—daily. Recruiting loses—episodic.)

2. **Pain intensity**: How much do companies suffer from this problem? (Recruiting and time tracking tied—both create significant pain.)

3. **Market size**: How many companies care? (Time tracking larger—universal. Recruiting smaller—episodic.)

4. **Competition**: What does the landscape look like? (Recruiting more competitive—tools exist. Time tracking less competitive.)

5. **Technical complexity**: How hard is this to build well? (Time tracking simpler—integrations with payroll. Recruiting more complex—AI for matching?)

6. **Path to additional features**: Once you own this wedge, what else can you sell? (Recruiting customers want onboarding and time tracking. Time tracking customers want payroll.)

7. **Unit economics**: What revenue can you generate? (Recruiting higher per-customer. Time tracking lower but more customers.)

### The Decision Options

**Option A: Recruiting-first**
- Build the best recruiting tool for SMEs
- Solve the hardest problem first
- Smaller initial market (episodic use)
- But recruiting customers highly value efficiency

**Option B: Time tracking-first**
- Build the best time tracking tool
- Largest initial market (daily use)
- More universal adoption
- But time tracking is commoditized and lower-margin

**Option C: All-in-one from day one**
- Build a complete HR platform
- Harder, slower, riskier
- But potentially defensible if done well

**Option D: Payroll-first**
- Start with payroll (closely tied to regulatory requirements)
- Sticky with customers (hard to switch)
- Complex (requires accounting software integrations)
- Highest value proposition (saves most time)

### The Competitive Dynamics

The team also thought about what would happen once they chose a wedge.

If Personio chose recruiting-first:
- Competitors would probably also target recruiting first
- Recruiting customers would eventually want time tracking
- The market would reward who solved recruiting best

If Personio chose time tracking-first:
- Personio would face competition from existing time tracking tools
- But time tracking was a lower-margin business
- Personio would need to expand into recruiting to achieve scale

If Personio chose all-in-one:
- Nobody would do this at the same time (too risky)
- But if Personio pulled it off, it would be defensible
- Takes longer to get to first revenue, but higher total market value

### What the Founders Actually Decided

In late 2015, the team decided: **Personio would launch as an all-in-one system — recruiting AND core HR in one product — built for small SMBs.**

The reasoning, reconstructed from how the founders have told the story since:

"Every point solution we could build already exists somewhere. What does NOT exist is one system for the companies nobody is building for. The interviews keep saying the same thing: the pain isn't recruiting or time tracking or payroll in isolation — the pain is that everything lives in five places and none of them talk to each other. The HR manager's job isn't 'recruit better.' It's 'stop being the human interface between Excel files.'

If we build recruiting only, we become one more tool on the pile. If we build the system of record — the place where the employee data lives — every other function follows naturally."

On paper, it was the riskiest option on the table. Conventional startup wisdom said: focus, build one wedge feature, expand later. The founders' answer: for this segment, **all-in-one WAS the wedge.** The focus was the segment — 10-to-200-person companies stuck in Excel — and the product scope was simply what that segment demanded.

The first product combined applicant tracking with core HR administration in one system; from the seed round onward, the company described itself as an "HR and Recruiting" solution.

---

## The Deeper Question: Why All-in-One?

But there was something else in the founders' decision that's worth understanding.

They were thinking about what jobs-to-be-done researchers call the "job the customer is hiring the product to do."

For an SMB HR manager, the job wasn't just "find the right candidate" or "track hours correctly." The job was deeper. When an HR manager went looking for software, they were trying to:

1. **Feel less stressed**: HR is high-stakes. One bad hire, one payroll error, one compliance slip is expensive.
2. **Not drop the ball**: Keep track of every candidate, contract, and absence so nothing falls through the cracks.
3. **Move faster**: Get new hires from application to productive day one, quickly.
4. **Collaborate easily**: Get input from hiring managers without email chaos.
5. **Look professional**: Present the company well — to candidates and to employees.

Excel didn't do any of this well. And a patchwork of disconnected point tools didn't either — it just moved the chaos into more browser tabs.

This was the founders' insight: **the job goes deeper than the feature set.**

They weren't just building a database of candidates or a digital time clock. They were building the system that let HR managers feel organized, professional, and effective — across the entire employee lifecycle.

That was the real value proposition.

### The Team at Launch

By late 2015, the founding team stood — four CDTM students:

- **Hanno Renner**: CEO, co-founder (strategy, customers, and a skipper's calm)
- **Roman Schumacher**: co-founder, product (later Personio's Chief Product Officer)
- **Arseniy Vershinin**: co-founder, engineering (later CTO)
- **Ignaz Forstmeier**: co-founder, business side (later leading marketing)

The team was tiny — the first employees joined in 2016, and by the seed round in mid-2016 the company counted about ten people. But the skills were complementary. Renner brought customer understanding and drive. Vershinin brought technical credibility. Schumacher shaped the product. Forstmeier built the commercial engine.

Critically: none of them were HR software experts. They didn't come from SAP or Workday. This was actually an advantage—they weren't constrained by how "HR software should work."

---

## Key Decisions Before Launch

*The tactical detail in this section is an illustrative reconstruction for classroom use — directionally faithful to how Personio launched, individual numbers are teaching estimates.*

Before launching the first product in early 2016, the founders had to make several tactical decisions:

### How many teams should recruit simultaneously?

In a recruiting tool, you could have one HR person managing recruiting, or you could have multiple hiring managers involved (hiring manager for engineering, hiring manager for sales, etc.).

Personio chose: **multi-team recruiting**. The tool would let different departments manage their own hiring, with HR overseeing everything.

This was more complex to build but more valuable to customers. It also meant more people at each customer company would use the tool, creating stickiness.

### What integrations matter?

Recruiting tools live in an ecosystem:
- Job boards (LinkedIn, Indeed, local German job boards)
- Email clients (Gmail, Outlook)
- Calendar (Google Calendar, Outlook)
- HRIS systems (if customers already had them)

Personio chose: **start with email and calendar, then expand to job boards.**

This was the minimum viable set of integrations that would make the tool truly better than email + spreadsheet.

### What's the pricing?

Most recruiting software priced per user: €10-50 per recruiting user per month.

But the founders decided differently. Personio would price by **company**, not per software seat:

- Packages tied to company size: several hundred euros per month, unlimited recruiting users and unlimited hiring managers
- All features included
- No per-seat overage charges

Why? Because SMEs buy differently than enterprises. An SME doesn't want to think about how many users they have. They want to know the total cost for the whole company.

This pricing model meant:
- Higher revenue per customer (fewer customers needed to reach profitability)
- Better customer psychology (all-you-can-eat feels better than per-seat)
- Easier expansion (adding time tracking, onboarding, payroll without repricing each new feature)

### How to get the first customers?

The founders didn't have a sales team. They had themselves.

Strategy: **Direct outreach to the network of HR managers from the interviews.**

They called the people they'd interviewed: "We built something based on what you told us. Want to try it?"

They didn't ask for money initially. They asked for feedback. Offer the tool free for the first months, then a paid package.

This approach meant:
- Low customer acquisition cost (their own network)
- High feedback quality (customers who had talked to them in research)
- Early reference customers who could vouch for the product
- A proof of concept that the market existed

---

## The Bigger Strategic Question

But underneath all these tactical decisions, there was a bigger strategic question the founders were still wrestling with.

**Was "all-in-one for small SMBs" a wedge — or a lack of focus wearing a wedge costume?**

If point-solution-first:
- Personio would optimize to be the best single tool possible — say, recruiting
- Deep integrations with job boards, candidate assessment, AI matching
- Recruiting specialists on the team
- This path led to a €500M-1B company that's a great recruiting tool

If all-in-one-as-wedge:
- Personio would optimize to own the HR relationship — the system of record
- Each module good, not best-in-class; the integration itself is the product
- The roadmap would run through time tracking, onboarding, payroll, performance
- This path led to a multi-billion-euro company that owns the whole HR workflow

The tension wasn't resolved in December 2015. It would play out over the next few years as the product evolved.

But the founders had already chosen their logic: the wedge was the segment, not a feature. They weren't trying to build the best recruiting tool in the world. They were trying to be the first system that solved the entire HR manager's problem for companies of 10 to 200 people.

---

## Exhibits

### Exhibit A: Customer Research Summary (Founders' Notes, Fall 2015)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**Sample of 30 HR managers at SMEs (10-200 employees) in Munich/Bavaria**

**Current systems used**:
- Excel: 85%
- SAP/older HRIS: 10%
- Pen and paper: 5%

**Time spent on recruiting monthly**: 20-40 hours (avg. 28 hours)

**Time spent on time tracking monthly**: 8-15 hours (avg. 11 hours)

**Estimated monthly errors from manual data entry**: 1.5-3 errors per 50 employees (misdated hours, duplicate entries, salary miscalculation)

**Willingness to pay for recruiting solution**: €300-800/month

**Willingness to pay for time tracking solution**: €100-300/month

**Biggest frustration**: "I spend 30% of my time on data entry and paperwork. I could hire another HR person if I could automate half of it."

### Exhibit B: Competitive Landscape (December 2015)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

| Tool | Target Market | Features | Pricing | German Presence |
|------|---|---|---|---|
| Lever | Enterprise recruiting | Recruiting + CRM | €500/month+ | Minimal |
| Greenhouse | Enterprise recruiting | Full suite | €€€ | Minimal |
| Workable | SME recruiting | Recruiting + job board | €100-300 | Some |
| BambooHR | SME HR | Recruiting + time tracking + onboarding | $300+ | Minimal |
| HRworks | German SME HR | Multiple modules (older) | €50-200 | Strong |
| DATEV (via tax advisors) | German payroll | Payroll/accounting-focused | Varies | Dominant |

**Gap**: No modern, all-in-one tool built for German SMEs with good UX.

### Exhibit C: Jobs-to-be-Done Analysis (Recruiting Module)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**The job customers are hiring the recruiting tool to do:**

When an HR manager evaluates recruiting software, they're trying to:

1. **Capture candidates effectively** (not lose applications to spam/junk folder)
2. **Track status transparently** (know where every candidate is in pipeline)
3. **Collaborate without chaos** (get input from multiple hiring managers)
4. **Speed up decisions** (reduce time from application to offer)
5. **Appear professional** (automated emails, branded career pages)
6. **Comply with regulations** (equal opportunity, data protection)

**Current system (email + spreadsheet) failure modes:**

- Emails get lost or misdirected
- No single source of truth (different people use different spreadsheets)
- Collaboration requires endless email threads
- No history of decisions or feedback
- Looks unprofessional to candidates
- Hard to audit for compliance

**The recruiting tool solves these by being the system of truth for the hiring process.**

### Exhibit D: Early Product Wireframes (Recruiting Module, January 2016)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**The core features**:

1. **Job posting creation** (write job description, publish to board)
2. **Candidate pipeline** (applications → screening → interviews → offer → hired)
3. **Collaboration** (hiring managers add feedback, HR sees everything)
4. **Candidate communication** (automated emails at each stage)
5. **Analytics** (time to hire, rejection reasons, diversity metrics)

**Intentional exclusions**:
- No AI matching (too complex for MVP)
- No advanced assessment (not in 2016)
- No direct integration with job boards (would add months)
- No onboarding module (separate phase)

### Exhibit E: Financial Projections (Founders' deck, January 2016)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**Conservative forecast**:

| Year | Customers | Revenue per Customer | MRR | Annual Revenue |
|------|-----------|---|---|---|
| 2016 | 50 | €600 | €30k | €360k |
| 2017 | 200 | €650 | €130k | €1.56M |
| 2018 | 600 | €700 | €420k | €5.04M |
| 2019 | 1,500 | €750 | €1.1M | €13.2M |

**Assumptions**:
- Customer acquisition cost: €400-600 (direct sales to SMEs)
- Gross margin: 80% (SaaS model)
- Churn: 2% monthly (high, but expected for SMEs)
- Growth: 50% YoY (achievable with sales team)

**Cash burn**: €50k/month in 2016, declining to break-even by 2018 with €500k seed capital

### Exhibit F: The Pricing Decision Template

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**Options considered**:

| Model | Per-seat | Per-recruiter | Per-company | Freemium |
|------|------|------|------|------|
| Revenue per customer | €200-400/m | €300-600/m | €500-1000/m | €0-300/m |
| Simplicity | Medium | High | High | Low |
| Expansion path | Hard | Medium | Easy | Medium |
| Customer psychology | "Uh, how many users?" | "Fair" | "All-inclusive" | "Upgrade risk" |
| Comparable | Slack, Zoom | - | Dropbox, Calendly | - |

**Chosen: Per-company flat-rate** because it aligns with SME buying behavior and creates path to bundling additional features.

### Exhibit G: Go-to-Market Timeline (2016)

*Illustrative reconstruction for classroom use — directionally faithful, individual numbers are teaching estimates.*

**January-March 2016**: MVP launch
- Beta with 10-15 design partners (free, high feedback)
- Interview customers weekly
- Iterate on core recruiting experience

**April-June 2016**: General availability
- Pricing finalized (€500-1000/month tiers)
- Customer outreach (direct sales)
- Target: 20-30 paying customers

**July-December 2016**: Acquire first 100 customers
- Hire 2-3 sales people
- Build case studies
- Prepare for additional features (time tracking)

---

## Discussion Questions

1. **Problem discovery vs. solution invention**: Renner spent months discovering the problem before building anything. In your experience, how important is this phase? What would happen if he skipped it and just started building?

2. **The wedge strategy**: Personio's wedge was a segment (small SMBs drowning in Excel) served with an all-in-one system — not a single feature. Why did the interviews push the founders there? What would have happened with a classic feature wedge — recruiting-only, time-tracking-only, or payroll-first?

3. **Jobs-to-be-Done framework**: The case emphasizes that the real job isn't "manage recruiting" but something deeper (feel organized, appear professional, collaborate effectively). How does understanding this difference shape product decisions?

4. **Pricing psychology**: Renner chose per-company pricing instead of per-seat. How does pricing affect customer perception, expansion, and business model?

5. **Competitive positioning**: There were existing recruiting tools (Lever, Greenhouse) and existing SME tools (BambooHR). How does Personio compete without being better at everything?

6. **Customer feedback and the Mom Test**: Renner asks specific questions ("How long does payroll take?") rather than hypothetical questions ("Would you use this?"). Why is this so important?

7. **Founder-problem fit**: Why were four CDTM students (a sailing skipper among them — and not one HR specialist) the right people to see this problem? What is the value of an outsider perspective?

8. **The platform vs. point-solution dilemma**: Should Personio optimize for recruiting excellence or HR platform coverage? What are the trade-offs?

9. **European context**: Personio is built for German SMEs with specific needs (payroll compliance, German labor laws, German job boards). How does localization create defensibility?

10. **Hindsight**: We now know Personio became one of Europe's most valuable private software companies (last priced at $8.5 billion in June 2022 — still private, no IPO). How much of that success was baked into the original problem discovery process vs. subsequent execution and luck?

---

## Epilogue (read after class)

Personio's first product — applicant tracking and core HR in one system — went live with its first customers in early 2016. No glamour: four graduates pooling savings, and (as Renner later told CNBC) a company account that was down to a few hundred euros before the first institutional money arrived.

What actually happened:

**2016**: More than 100 companies onboarded in the first year. In July, a €2.1 million seed round from Global Founders Capital, Picus Capital, and angel investors.

**2017**: Series A — $12 million (€10.5 million), led by Northzone. The pitch was exactly what the interviews had shaped: a one-stop HR and recruiting solution for European SMEs.

**2019**: Series B — $40 million, led by Index Ventures.

**2020**: Series C — $75 million, led by Accel. Personio was becoming the reference HR platform for the European SMB market.

**January 2021**: Series D — $125 million at a **$1.7 billion valuation**. Unicorn.

**October 2021**: Series E — $270 million led by Greenoaks, at **$6.3 billion**.

**June 2022**: A $200 million second closing of the Series E, again led by Greenoaks, valued Personio at **$8.5 billion** — among the most valuable private software companies in Europe.

**Since then**: Personio remains **private — there has been no IPO**. In 2023 it converted to a European stock corporation (SE), a structure that keeps a future listing possible, and by 2024 it served more than 12,000 SMB customers across Europe from its Munich headquarters — a short walk from CDTM, where the story began.

The founders' original insight—that European SMEs were stuck on Excel and would pay to escape—proved correct. But the path to value ran through deep customer listening and understanding the jobs customers were hiring the software to do. By owning the employee data — the system of record — Personio could expand into every HR function its customers needed next, from workflow automation to payroll.

And notice what the wedge actually was. It was never a feature on a roadmap. It was a segment — small SMBs that every serious software company ignored — served with the all-in-one HR operating system those companies kept asking for. **The wedge was chosen from the interviews, not from a whiteboard.** What four CDTM students heard in Munich cafés in 2014 and 2015 became an $8.5 billion company. The value didn't come from the technology itself. It came from understanding that most companies don't want a recruiting tool, or a time-tracking tool, or any tool. They want to never think about HR administration again. That insight, discovered through customer listening, changed everything.

---

*Teaching case written for this course from public sources (company announcements, CNBC, TechCrunch, Sifted, Contrary Research, TUM/CDTM materials). Exhibits marked as illustrative are reconstructions for classroom use; dialogue and interview figures in the narrative are likewise reconstructed for teaching.*

