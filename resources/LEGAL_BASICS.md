# Just Enough to Keep You Out of Jail

Updated: 2026-10-20.

**This is not legal advice.** We are not lawyers. This is the short list of things student teams actually trip over — the 20% that prevents 80% of the mess. When real money or real personal data starts flowing, buy one hour with a real lawyer (the startup legal office hours are free — book them).

## 1. Recording interviews

Ask BEFORE you hit record. Recordings may be spot-checked in class, so the question covers the course staff too. One sentence is enough:

> *"Dürfen wir das Gespräch aufnehmen? Es ist für unser Team und die Kursleitung, die Aufnahmen stichprobenartig prüfen kann."* / *"May we record this for our team and the course staff, who may spot-check it?"*

Get a yes on the recording. Store recordings privately (team drive, not public), share them only with your team and the course staff, delete if someone asks. Before raw notes, transcripts or recordings go into an AI tool or a shared read-out, take out names, contact details and anything else that identifies the person. That's it.

## 2. Your landing page

You're collecting emails in Germany. Three things, thirty minutes:

- **Impressum** — legally required on German websites, even test pages (§ 5 DDG, which replaced the TMG in May 2024). Use a generator (e.g. e-recht24), paste, done.
- **Privacy line** near the form: *"We store your email only to contact you about [product]. No sharing, unsubscribe anytime, contact: [email]."* If your form tool offers double opt-in, turn it on.
- **Don't** buy email lists, scrape addresses, or import your interviewees into a mailing tool without asking them.

Analytics: a cookieless EU tool such as Plausible needs no cookie banner (paid after a 30-day trial). Tools that set cookies, such as Microsoft Clarity (free) or Google Analytics, need a consent banner. Since 31 October 2025, Clarity sets no cookies for visitors from the EEA, the UK and Switzerland until your page passes their consent, and § 25 TDDDG asks for consent before anything non-essential is stored on a visitor's device. Read your per-source numbers knowing they count only visitors who accepted.

## 3. Your live MVP

Real users now type real data into your product. Collect only what the feature needs. Say in the privacy line where it is stored (your sheet, the builder's database) and which AI service sees it, and use that service's API or business terms, not a consumer chat app. Keys stay in the builder's secrets or an environment variable, never in the page, with a spending limit at the provider. Session recordings and screen shares are recordings, see section 1.

## 4. Taking money

*Not legal advice, see the top.* The survival version for your first sale in Module 08. Module 09 covers checkout in your product, invoices in depth and company setup.

- **You're already a GbR.** Selling together makes you one, no paperwork needed. Every founder is personally liable for every team debt. Fine for a pilot, revisit when real risk shows up.
- **Selling means registering.** A trade registers with the Gewerbeamt when it starts (about €20–30 per founder), a liberal profession only with the tax office. Both file the ELSTER tax questionnaire within a month. Module 09 walks you through it.
- **One shared team account.** A payment link or a numbered invoice, paid to the team. Never a founder's private account, never PayPal "friends and family" (PayPal forbids it for sales).
- **No VAT while you're small.** The Kleinunternehmer rule applies by default up to €25,000 turnover last year and €100,000 this year (€25,000 in your first year). Every invoice says *"Steuerbefreiung für Kleinunternehmer nach § 19 UStG"*.
- **Invoice fields.** Both names and addresses, your Steuernummer, date, what you sold, total, the § 19 line. Up to €250 gross, you may drop the buyer and the Steuernummer. Number from 001 anyway. The course counts numbered invoices.
- **E-invoices can wait.** You must be able to receive them, and an email inbox counts. Under § 19 or up to €250, paper or a PDF the buyer accepts is always fine.

**When money flows through your product (Module 09).**

- **Accounts in the team's name.** Bank account and payment account. Payment providers must check who you are before they pay out (anti-money-laundering rules), and live mode may ask for your trade registration. Start early, test mode works before.
- **Card data stays with the provider.** Use its hosted checkout. Card numbers never touch your server, which keeps you out of most of the card industry's security standard (PCI DSS).
- **Invoices.** Numbered from 001, with your tax number once you have it, and the § 19 line while you're under the limits. An order form in your product may issue them.
- **Keep every receipt for 8 years**, invoices in and out and bank statements, in one folder from the first euro.
- **Company form.** You stay a GbR, liable with private money, until real liability, IP to pool or investors show up. Then book an hour with a lawyer and look at a UG (from €1, a quarter of each year's profit kept as a reserve) or a GmbH (€25,000, at least €12,500 paid in before registration). Registering as an eGbR is optional and keeps personal liability.

## 5. The email list after the course

The consents you collected are for THIS product. If you kill the idea: delete the list. If you pivot: ask again ("we've changed direction — still want updates?"). Don't carry lists into your next project like furniture.

## 6. Other people's stuff

Don't paste competitor screenshots into your product, don't use unlicensed images/fonts on your landing page (use Unsplash/Pexels-style licensed sources), don't copy someone's pricing page word-for-word. Code is protected like a written text. Whoever writes it holds the rights, and code written together belongs to all its authors jointly. Copyright itself can't be transferred, only the rights to use it, so every founder grants the team those rights in writing, ideally now. Code written on a university job or in a paid job may belong to the employer. Ask your university's IP office before you sell it.

## When to actually get help

Any of these = book the (free) legal office hour BEFORE proceeding: handling health or financial data · customers demanding a signed contract you don't understand · first employee or intern · incorporation (UG/GmbH) · anyone threatening you with anything.

---

*Checklist, not counsel.*
