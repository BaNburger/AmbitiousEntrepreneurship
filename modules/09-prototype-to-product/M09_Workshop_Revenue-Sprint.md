# Workshop 09: Revenue Sprint

Updated: 2026-10-20.

> Module 09 · From Prototype to Product · Workshop · [Goals M09-LG1 to LG4](README.md)

![Price from value](media/price-from-value.png "Step 1 places your test price.")

![Payment webhook](media/payment-webhook.png "Step 2 builds this, in test mode.")

By the start of Module 10, your team sells one offer at a price you tested, customers pay for it inside your live product without a founder in the sale, and the same offer sells again without custom work. Today you price it, build it and send people to it. Examples are made up, a tool nudging recruiters about quiet finalists.

**Bring.** Laptops, your repository and coding agent, your Module 08 records, and a team payment account. Live mode may need your trade registration.

## The 90 minutes

| Time | Step | You leave with |
|---|---|---|
| 20′ | 1 · Price it | A unit, a test price, a dated line |
| 50′ | 2 · Build the checkout | A test payment in your deployed product |
| 20′ | 3 · Go live, then commit | A live ask, first people sent, targets |

### Step 1 · Price it (20′)

**Goal.** One price to test.

1. **Name the unit (4′)** that grows with their value. Seat, use, outcome or once.
2. **Price from value (6′),** what the problem costs them and what they pay today. Cost is only the floor.
3. **Pick the price to test (5′)** from your Module 08 price. Survey answers can pick it, only payments test it.
4. **Log your line (5′)** in the Kill Criteria Log with your midweek date, before anyone sees the price. A kill line is a result you count, a date, and what you do if you cross it, written down before the data comes in. Or adopt the homework's.

| Good | Weak |
|---|---|
| "Per recruiter seat. A lost finalist costs a placement. We test €99 a month." | "Our AI costs €3, so €9 is fair." |

**Output.** A unit, a test price, a dated line.

### Step 2 · Build the checkout (50′)

**Goal.** A test payment lands in your product's records.

1. **Count the steps from yes to paid (5′),** then cut some.
2. **Brief your coding agent (5′),** ask and webhook, in small steps.
3. **Build in test mode (30′).** A hosted checkout, then a webhook that checks the signature and records each payment once. Stripe's test card is 4242 4242 4242 4242.
    - Watch out. Secret keys live on the server. Never in the code, the chat or a public variable.
    - Watch out. Builder takes payments? Keep it till it stops you.
    - Selling B2B? An order form that issues the numbered invoice counts.
4. **Deploy from your repository (10′).** Pay again there, still in test mode.

| Good | Weak |
|---|---|
| "Go Pro" sits where the nudge goes out, three clicks to paid. | A link in the email footer. |

**Output.** A test payment recorded in your deployed product.

### Step 3 · Go live, then commit (20′)

**Goal.** Real people see your price.

1. **Check the plumbing (4′).** Money lands on the team's account. Invoices carry a number and, under €25,000, the § 19 line ([Legal Basics](../../resources/LEGAL_BASICS.md)).
2. **Switch to live (4′).** Not verified yet? Invoice meanwhile.
3. **Send the first people (7′)** to the product, Module 08's "not now" first.
4. **Commit to the bar (5′).** "Run your price test, let customers pay inside your live product without a founder in the sale, and reach €1,000 cumulative revenue from outside your social graph, with the same offer bought by more than one customer. The learning floor is €500 cumulative, with at least one payment made inside your product." Each founder names a count. Set your midweek euros.

| Good | Weak |
|---|---|
| Line logged 10:31, live 11:40, nine sent. | "We'll go live once the pricing page looks nicer." |

**Output.** A live ask, first people sent, targets.

## Arrived empty-handed?

- **No price?** Price your concierge offer, build a page that charges for it.
- **No contacts?** Send it to your interviewees and your segment's groups.
- **No repository or account?** Builder payments and a sandbox.

## Bring and use

The [Objection Log exemplar](../../resources/exemplars/Exemplar_Objection_Log.md) (made up) and the [Student Toolkit](../../resources/Student_Toolkit.xlsx). The [lecture](M09_Lecture_Prototype-to-Product.pdf) is background.
