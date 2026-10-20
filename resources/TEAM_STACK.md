# The Team Stack — fork this, then go sell

Updated: 2026-10-20.

Thirty minutes of setup, once. Every hour saved on plumbing is an hour of selling. Tool names checked October 2026 — tools rot, the pattern doesn't.

## 1. Landing page with measurement built in (20 min)

1. Build with Lovable / v0 / Framer — one promise, one CTA, headline = your sharpest interview quote (M04).
2. Analytics: **Plausible** (EU, cookieless — no banner needed) or GA4 if you must. Install before the first visitor.
3. UTM convention — every link you ever share, tagged: `?utm_source=linkedin|ads|email|direct&utm_campaign=m04test`. No UTM = traffic doesn't count (rubric rule).
4. Form appends each sign-up to a sheet (the builder's own integration). The sheet IS your lead list for M08.

## 2. Payment in 10 minutes (before your first sale in Module 08)

Tools and fees checked 19 October 2026.

1. One shared team account for money. Never someone's private PayPal.
2. Stripe: a Payment Link, no code. Test it in a sandbox first with card 4242 4242 4242 4242. Going live asks for team details and an IBAN, so start early. Standard EEA cards cost 1.5% + €0.25.
3. PayPal business account: a payment link as fallback, 2.99% + €0.39.
4. Put your offer's price on it. Send the link WHILE on the call.
5. B2B prefers a numbered invoice from 001, paid by bank transfer (fields in [Legal Basics](LEGAL_BASICS.md), section 4). Lexware Office or sevdesk fill them in.

## 2b. Checkout in your product (Module 09)

Checked 19 October 2026. Tools are examples.

1. Build in test mode first. Stripe's test card is 4242 4242 4242 4242.
2. Use the provider's hosted checkout. Your product only starts it.
3. Count a payment when the provider's webhook says so, never from the success page. Check the signature, record each event once.
4. Secret keys live on the server in environment variables. Never in the code, the chat or a variable the browser can read (`NEXT_PUBLIC_` and friends).
5. Deploy from your repository. Vercel, Netlify and Cloudflare Pages deploy every push to main and give each branch a preview link.

## 3. Interview capture that can't be faked (5 min)

1. Ask permission (the Legal Basics one-liner), then record a phone voice memo.
2. Transcribe with any Whisper-based tool; paste the 2-3 verbatim gold quotes into the Toolkit's Interview Log — with name and date, same day (they rot overnight).
3. Naming: `YYYY-MM-DD_firstname_segment.m4a` in the team drive.

## 4. The Toolkit is the single source of truth

Interview Log: feeds every check-in · Kill Criteria Log: thresholds BEFORE tests (M04+) · Experiment Tracker: one row per test · Revenue Ladder tab: the bars. If it's not in the Toolkit, it didn't happen.

## 5. Team ops (from Module 10, applies from week 1)

One North Star in the KPI Tracker, a few drivers with one owner each, read together once a week. Every change you ship is a bet with its expected effect written first, in the Bets sheet. One board with one card in progress per person. A chore you did twice gets written down, then handed to your product or to an agent you tested on your own cases (Module 09). Any spreadsheet, board or automation tool works. Pick the one your team already uses.
