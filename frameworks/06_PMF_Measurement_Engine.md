# Product-Market Fit Measurement Engine

Updated: 2026-10-20.

*Based on Superhuman's framework (First Round Review) + Sean Ellis's PMF Survey + Sequoia Arc*

---

## The Problem

Everyone talks about product-market fit. Almost nobody can measure it. "You'll know it when you feel it" is terrible advice. This framework gives you a number to steer by, a verdict from what customers do, and an improvement loop.

---

## Step 1: The Sean Ellis Survey

Ask users who have experienced the core of your product (used it at least twice in the past two weeks) this question:

> **"How would you feel if you could no longer use [product]?"**
> - A) Very disappointed
> - B) Somewhat disappointed
> - C) Not disappointed

**Read it as a compass.** Sean Ellis suggested that at least 40% answering "Very disappointed" signals product-market fit. He defined the line "after comparing results across nearly 100 startups" and called it "a bit arbitrary" himself (Ellis, *The Startup Pyramid*, 2009). No peer-reviewed study has tested it. The answers predict a future, so on the [Validation Hierarchy](02_Validation_Hierarchy.md) they count as opinion. Use them to find who would miss you most and which benefit to sharpen. Decide with retention, below.

---

## Step 2: Three More Questions

After the first question, ask:

**Q2: "What type of people do you think would most benefit from [product]?"**
This reveals your real target audience (often different from who you think).

**Q3: "What is the main benefit you receive from [product]?"**
This reveals your actual value proposition (often different from what you're marketing).

**Q4: "How can we improve [product] for you?"**
This reveals the roadmap — but filter it (see Step 4).

---

## Step 3: Segment and Score

Don't look at the aggregate. Segment your responses:

1. **Who are your "Very Disappointed" users?** Profile them. This is your ideal customer persona — not who you assumed, but who the data says.

2. **What do the "Very Disappointed" users say the main benefit is?** This is your positioning. Use their words, not yours.

3. **Where do the "Somewhat Disappointed" users overlap with the "Very Disappointed" users?** This is your expansion opportunity. The "Somewhat" users are almost there — what would tip them over?

---

## Step 3b: Retention Is the Verdict

Count from what your product records, never from what people say. For each paying customer, the date of the first payment, and whether they used the outcome again or paid again within 14 days, with dates. Read each cohort (everyone who first paid in the same week) on its own. Under 20 people, write counts ("4 of 6"), not percentages. At 20 answers a 40% share could be anywhere from about 22% to 61% (95% Wilson interval). A retention line belongs in the Kill Criteria Log before you look ([Validation Hierarchy](02_Validation_Hierarchy.md), the Kill Question).

---

## Step 4: The Improvement Loop

This is Superhuman's actual process (repeated every 2-4 weeks):

### A. Categorize the Q4 feedback
Split Q4 responses into two buckets:
- Feedback from "Very Disappointed" users. **Do this.** These people already love you. Make them love you more.
- Feedback from "Not Disappointed" users. **Ignore this.** They were never your customer. Building for them dilutes your product.

### B. Prioritize the roadmap
For every feature request from "Very Disappointed" users, ask:
- Does this deepen the core benefit? High priority.
- Does this add a new benefit? Medium priority.
- Does this fix a minor annoyance? Low priority.

### C. Re-measure every 2-4 weeks
Run the survey again. Track the % over time. Your goal: move from wherever you are toward 40%.

| Week | "Very disappointed" | How to read it |
|---|---|---|
| 1 | 28% | Not there yet |
| 4 | 32% | Getting warmer |
| 8 | 38% | Almost |
| 10 | 42% | Ask why, then check retention |

---

## Step 5: Sequoia's Four "Terrifying Questions"

Once you have early signal, stress-test it with Sequoia's Arc framework. Before you scale, answer these honestly:

### 1. "Do I have Hair-on-Fire PMF, Hard-Fact PMF, or Future-Vision PMF?"
- **Hair-on-Fire:** Users have an urgent problem and your product is the fire extinguisher. They'll tolerate a bad product because the pain is so acute.
- **Hard-Fact:** Users switch because of measurably superior economics or performance. They need proof, not promises.
- **Future-Vision:** Users believe in a new way of doing things and adopt early despite friction. Hardest to achieve, highest ceiling.

### 2. "Who is my desperate customer — and can I find 100 of them?"
Not "who might want this" but "who MUST have this." If you can't name 100 specific people or companies, your market understanding is too vague.

### 3. "What's my magic moment — and do users reach it?"
The single moment where a user first experiences the core value. For Superhuman: sending their first email and feeling the speed. For Airbnb: seeing the first professional photos of an apartment. Measure what percentage of new users reach this moment. Optimize ruthlessly for it.

### 4. "Would my best users riot if I took this away?"
Not "be sad" — riot. If the answer is no, you have a nice-to-have, not a must-have.

---

## For Student Teams: The Lightweight Version

You probably don't have enough users yet for a statistically significant survey. That's OK. Use this adaptation:

**Ask everyone who used the core at least twice in the last two weeks, from your first 20 users on.** Superhuman found results directionally useful from about 40 respondents (Vohra, 2018). Under that, write counts. Don't wait for 1,000.

---

## Common Mistakes

**Surveying too broadly.** Only survey people who've actually used the core product, at least twice. New signups who haven't activated don't count.

**Ignoring the "Somewhat Disappointed" group.** These aren't failures — they're your best clue. Half of them are one feature or one positioning change away from "Very Disappointed."

**Building for "Not Disappointed" users.** This is the most seductive trap. They give specific, articulate feedback. It sounds smart. But they were never your customer, and building for them pulls you away from your actual value.

**Measuring once and moving on.** PMF isn't binary. It's a score that moves. Measure it every 2-4 weeks and track the trajectory.

---

## Sources & Further Reading
- [Sean Ellis, The Startup Pyramid (2009)](https://seanellis.substack.com/p/the-startup-pyramid)
- [Superhuman's PMF Engine — First Round Review](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)
- [Sean Ellis PMF Survey Tool](https://pmfsurvey.com/)
- [Sequoia Arc PMF Framework](https://sequoiacap.com/article/pmf-framework/)
- [Sequoia Arc Terrifying Questions](https://sequoiacap.com/article/pmf-framework-2/)
