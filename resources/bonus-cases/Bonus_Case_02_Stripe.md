# Case Study: Stripe
*How a 19-year-old saw what every developer felt but nobody fixed*

---

## The Chokepoint This Illustrates
**Finding the real problem by being the user + technical insight as moat**
Relevant for: Modules 3, 5-6 (Problem Space → Solution Space → Prototyping)

---

## The Problem Nobody Named (2009-2010)

Patrick Collison was 19. He and his brother John were building web projects and kept hitting the same wall: accepting payments online was absurdly hard.

The existing options (PayPal, Authorize.net) required:
- Merchant accounts (weeks to set up)
- Gateway agreements (more paperwork)
- PCI compliance documentation
- 7+ API calls to process a single payment
- Terrible documentation, written for enterprise finance teams, not developers

Every developer hated it. But everyone assumed this was just how payments worked. The problem was so pervasive that people stopped seeing it as a problem — they saw it as a fact of life.

**What this teaches:** The biggest startup opportunities hide in things everyone has accepted as "just the way it is." Patrick saw the problem because he was the user (a developer trying to accept payments), not because he did market research.

---

## The Insight (Why This, Why Now?)

Patrick's key insight had two parts:

**Part 1: The API is the product.** Every payment company thought of themselves as a financial services company that happened to have an API. Stripe thought of themselves as a developer tools company that happened to process payments.

This single reframing changed everything:
- Documentation became a core product, not an afterthought
- The API was designed for developer experience, not financial compliance
- Integration could be done in 7 lines of code, not 7 API calls

**Part 2: The timing.** Two things had changed that made Stripe possible:
- The rise of web startups (2008-2010) created millions of new businesses that needed payments, and these businesses were run by developers, not finance people.
- Cloud infrastructure (AWS) meant a startup could handle the technical requirements of payment processing without building their own data centers.

**What this teaches:** "Why now?" is the most important question for any startup. If the answer is "no reason, I just had this idea," the idea probably isn't ready. Stripe worked because the world had changed in a way that created a new kind of customer (developer-founders) with a new expectation (simple APIs).

---

## The "Collison Installation" (2010-2011)

The Collisons had a legendary sales technique. When talking to a potential user, instead of saying "you should check out Stripe sometime," they would say:

> "Give me your laptop. I'll set it up for you right now."

They'd sit down, integrate Stripe into the person's app in 5 minutes, and hand the laptop back. The person would have a working payment system before the conversation ended.

**Why this worked:**
1. **Eliminated activation friction.** The gap between "interested" and "using" was reduced to zero.
2. **Provided immediate social proof.** Seeing it work in YOUR code is more convincing than any demo.
3. **Generated instant feedback.** They could watch developers interact with the API in real-time and see where they got stuck.

**What this teaches:** If you can deploy your product for a customer in under 10 minutes, do it live. Don't send them a link and hope they'll get around to it. The Collison Installation is the ultimate "do things that don't scale" move.

---

## The Decision to Say No

Stripe made several deliberate decisions about what NOT to build:

| They were asked for... | They said no because... |
|----------------------|----------------------|
| Invoicing features | Would dilute the core value prop (simple payments) |
| A merchant dashboard | Developers don't want dashboards, they want APIs |
| Enterprise sales team (early on) | Would shift focus from product to relationships |
| International expansion (early on) | US developer market was large enough to prove the model |

**What this teaches:** The discipline of saying "no" is harder than saying "yes." Every feature you add makes your product harder to explain and slower to integrate. Stripe's power came from doing ONE thing perfectly.

---

## The Metrics That Mattered

Stripe tracked: **total payment volume processed per week.**

Not signups. Not API calls. Not developer satisfaction scores. The dollars flowing through their system — because that's the metric that proved developers trusted them with real money.

By 2012, they were processing millions of dollars per month. By 2014, billions.

---

## What Students Should Take Away

1. **Be the user.** The best problem to solve is one you have yourself. Patrick didn't do customer discovery interviews about payment pain — he felt the pain every time he tried to add payments to a project.

2. **The API (interface) is the product.** For any technical product, the user experience of integration IS the product. Not the backend, not the algorithms — the 7 lines of code the developer copy-pastes.

3. **"Why now?" must have a crisp answer.** Stripe worked in 2010 because of AWS + developer-led startups. If they'd tried in 2005, they would have failed.

4. **Do the Collison Installation.** Whatever your version is — set it up live, on their device, in their workflow. Reduce the distance between "sounds interesting" and "I'm using it" to zero.

5. **Say no to features.** Your product should be explainable in one sentence. If you need two sentences, you've probably built too much.
