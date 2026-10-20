# Langfuse: What Stays Borrowed When Strangers Arrive?

Updated: 2026-10-20.

> Module 06 · Prototyping with AI · Case, read before class

Case for Module 06, Prototyping with AI, of Ambitious Entrepreneurship. Prepared by Bastian Burger from public sources as a basis for class discussion. The case does not judge whether any decision was right or wrong. Licensed under CC BY-NC-SA 4.0 except third-party material as marked.
{: .byline }

On 29 August 2023, at 16:14 UTC, Marc Klingen posted "Show HN: Langfuse – Open-source observability and analytics for LLM apps" to Hacker News, a forum where software developers discuss and vote on new projects.[^post] The post linked the code on GitHub, a two-minute video and a live demo. Langfuse recorded what happens inside applications built on large language models, each request and its steps as a trace, so that developers could see and improve them.[^post] Behind the post stood 15 weeks of work by Klingen, Max Deichmann and Clemens Rawert, the three founders of Langfuse, and 300 commits, saved changes to the code, since the repository's first day, 18 May 2023.[^log] [^gh0829]

Not everything a stranger from Hacker News would find was built by the founders. Every user saw the app's own pre-built dashboards.[^post] [^looker] The analytics page, which the post called the "analytics MVP", ran on a report in Looker Studio, Google's tool for building reports, embedded in the app and shown only to users whose account carried a flag in the database.[^post] [^looker] Every other user saw a notice that analytics were "in closed alpha".[^looker] In the post itself, Klingen named the database and Looker Studio as the "two engineering decisions we've felt uncertain about".[^post] The question in front of the founders was which of the parts they had borrowed or kept behind a flag to replace first, and what to build next.

## Logging Prompts to the Production Database

According to the company's handbook, the three founders had started working together in 2022 on Finto, a product for usage-based billing, with which they joined the Winter 2023 batch of Y Combinator, the startup accelerator in San Francisco, from January to April 2023.[^handbook] Klingen recalled in 2025 that they decided in the first weeks of the batch to drop it.[^unicorn]

During the batch the founders built applications on large language models. "When GPT-4 dropped, we started building LLM apps – a lot of them!", Klingen wrote on 29 August 2023, and linked one of them, learn-from-ai.com.[^post] By the founders' later accounts, they tried several such ideas, most for less than two weeks each, among them AI-generated courses and a bot that turned GitHub issues, the bug reports and requests on a code repository, into pull requests, proposed code changes.[^handbook] [^cerebral] The founders told an interviewer in 2024, "We realized our demos were cool, but back then it was hard to make this useful in practice."[^cerebral]

Every one of these applications, Klingen wrote, "suffered from the same issue: it's hard to assure quality in 100% of cases and even to have a clear view of user behavior."[^post] "Initially, we logged all prompts/completions to our production database to understand what works and what doesn't," he continued. "We soon realized we needed more context, more data and better analytics to sustainably improve our apps. So we started building a homegrown tool."[^post] In November 2023 the founders added that they had first worked on a test framework for the outputs of language models and had "quickly realized that tests give a false sense of security".[^seed] When that happened is not documented.

The batch's habit, as the founders recalled it in 2024, was to ask "why not try building it in two days instead of a week?"[^cerebral]

## Fifteen Weeks of Building

Max Deichmann created the repository on 18 May 2023 at 17:47 UTC, after the batch.[^repo] [^handbook] Its first commit held a template for several apps, whose README carried another name. A commit called "kill all" deleted 51 of its files, and an "init" commit 81 minutes after the first one started a single web app named "langfuse".[^first] Why the founders started over that evening is not documented. Within 24 hours the log showed a database schema, a "trace api", "observations", a frontend and "sdks" (Exhibit 1).[^log]

Klingen recalled in 2025 that the first prototype was a hack of about a week. The founders sent it to a few companies they knew from the batch as a page in Notion, the note-taking tool, used as a website, with a link to the code on GitHub to try it.[^unicorn] Between two and five users tried it, by his account, and the founders spent two more weeks asking them why they used it, since, as he put it, if it took the founders a week, it might take the customers two.[^unicorn] In their November 2023 account the founders wrote that they "tested it with other founders", and "After very positive initial feedback, we decided to open-source the project".[^seed] The repository was public by 10 June 2023 at the latest.[^forks]

A commit named "v1" landed on 26 May, day 9. That day's README stated the goal as "Debug and improve your LLM-based application by logging/analyzing all user interactions, backend traces, and explicit/implicit user feedback", offered a local start with Docker, a tool that packages software to run on any machine, and put the code under the MIT licence, except one folder.[^readme0526] Accounts, projects and a hosted cloud version followed on 1 June.[^cloud] A README of 8 June marked four features as "coming soon".[^readme0608]

The founders described their tools on 29 August. "Under the hood, we use the T3 stack (Typescript, NextJs, Prisma, tRPC, Tailwind, NextAuth), which allows us to move fast + it means it's easy to contribute to our repo," Klingen wrote. The software development kits (SDKs), the small libraries developers add to their own code to send data to Langfuse, were "heavily influenced by the design of the PostHog SDKs", an analytics company's open-source libraries. For converting the API description into Python code the founders used Fern, a code generator, and for tables and dashboards ready-made components.[^post] The cloud version ran its database on Supabase, a hosted Postgres service, and the app on Vercel, a hosting platform.[^post] The marketing page ran on Framer, a website builder, until 20 August.[^framer]

Klingen and Deichmann wrote almost all of the code. Of the 300 commits before the post, Klingen authored 159, Deichmann 130, Rawert 9 and outside contributors 2, and commits fell on 68 of the 104 days.[^log] The website and documentation lived in a second repository with 317 commits by the morning of 29 August (Exhibit 2).[^docslog] A build pipeline was added on 28 May. The first automated tests came on 10 August and ran in that pipeline from 17 August, day 92.[^log] [^tests]

## From a Call with a Founder to a Stranger on Their Own

On 7 June the "No account yet?" link in the app led to an external sign-up form, and the "Sign up for early access" button on the website led to a page where visitors booked a call with a founder.[^june7] On 26 June the founders opened sign-up to everyone. The app's start screen then offered two cards. One read "Get started by yourself. You can always reach out to us later or get help in the discord community." The other, "Guided onboarding", read "If you prefer 1:1 support, we are happy to help" and offered a call with a founder.[^june26] Discord, named on the first card, was a chat platform on which the founders ran a community server.[^readme0526] Both cards, and a third that opened the demo project, stood on the start screen on 27 August.[^index0827] Klingen recalled in 2025 that the batch had ended with only a prototype and that about two months later "we felt like, okay, now, like a team that doesn't know us can pick this up."[^dash0]

Around the product the founders added ways to see what users did. From 23 June a feedback button in the app sent comments to the founders' error tracker and to their Slack.[^feedback] From 18 July PostHog, a product analytics tool, recorded use of the web interface.[^posthogui] From 29 July cloud users saw a support chat, because, as Klingen wrote in the change, "we want to offer them support proactively while setting up their project."[^chat] From 14 August every new user got view-only access to a demo project with live data.[^demo] The data in that project came from a chatbot that answered questions about the documentation. Klingen had built it in July after "A user was surprised when I (a human) answered his/her question. It's 2023, a bot was expected."[^qabot]

An open issue of 21 August stated that "Users cannot change or reset the password."[^password] Exhibit 3 lists what a new user met on 29 August.

## What Users Did With It

The founders told an interviewer in 2024 that "One big unlock of YC for us was actually finding that first set of users".[^cerebral] The company's undated handbook describes the first customers as teams from the batch who spent much time in the product and referred others.[^handbook] On 29 August the landing page listed five teams under "Teams building complex LLM apps rely on Langfuse", Fastgen, Langdock, Alphawatch, Berry and Nucleus.[^users]

The founders reported what users asked for. Their July update said that most users integrated through the Python or JavaScript SDKs and that many wanted to score outputs by hand in the interface, which shipped on 31 July.[^july] In a reply in the Hacker News thread after the post on 29 August, about the use they had seen, Deichmann wrote that one user had described the difference to other tools this way, that "they use observability usually to know that nothing is going wrong whereas they use Langfuse many hours per day to understand how to best improve the application".[^reply1] No figure for sign-ups, active users or returning users before 29 August was published.

What counted as a launch varied. Sign-up opened on 26 June, the founders' post on Y Combinator's launch page described Langfuse on 19 July as "open-source product analytics (think ‘Mixpanel’) for LLM apps", and on 20 August Langfuse was the day's top product on Product Hunt, a site where makers present new products.[^yc] [^ph] Fifteen minutes after the Hacker News post, the GitHub page showed 370 stars, the bookmarks GitHub users give a repository, and 21 copies made by others.[^gh0829]

## Borrowed and Behind a Flag

The analytics page had embedded the Looker Studio report since 17 July. Users with the flag "analytics-alpha" saw it. The flag sat in a column of the users table, and the change that added it added no screen in the app to set it.[^looker] [^flag] "Currently we are working with a small group of alpha users to test our analytics features," the July update said, and "We are onboarding new users every week."[^july] The banner for alpha users read "If you cannot access the Looker-powered dashboards, please sign into your Google Account in another tab and try again. A version for smaller screens is not yet available."[^looker] Every user, flagged or not, saw the app's own dashboards with traces, token usage, scores and per-user views, which Klingen showed in the two-minute video.[^video] [^looker] [^demo] Token usage was the amount of text a model processed, counted in tokens.

The documentation explained the alpha. "We rely on some closed source software to make this work in order to move fast and focus on what's most interesting for most of you. We'll soon bring these features to all users since we currently plan a migration to an OLAP database and flexible modeling structure to power these features."[^analytics] An OLAP database is one built for fast analytical queries over large amounts of data.

In the post Klingen wrote, "Integrating Looker Studio got us to first analytics charts in half a day. As it is not open-source and does not work with our UI/UX, we are looking to switch it out for an OSS solution to flexibly generate charts and dashboards." He named Lightdash, an open-source tool, as one they had looked at.[^post] About the database he wrote that "Supabase performs well at our scale and integrates seamlessly into our tech stack."[^post]

The SDKs were the founders' own. The post did not mention OpenTelemetry, an open standard for tracing software. In a reply later that day, about the state at the time, Deichmann wrote that they had "aligned our domain language to OpenTelemetry" and that "Currently users add lots of metadata and configuration details to the trace by manually instrumenting it using the SDKs (or via Langchain integration)." He added, "We are thinking about integrating OpenTelemetry, as this would be a step function on making integrations with apps easier. However, hadn't had the time yet to figure out how capture all the metadata that's relevant as context to the trace."[^reply2] In another reply he explained the choice of their own SDKs. "We wanted to have a product out there fast and liked the experience of e.g. Posthog SDKs."[^reply3]

## 16:14 UTC

The post ended with the founders' plan. "Next, we're going deep on analytics. For quality specifically, we will build out model-based evaluations and labeling to be able to cluster traces by scores and use cases."[^post]

Two engineers had built a working product in 15 weeks, partly from parts they had not built. A borrowed report carried the analytics behind a flag that no screen in the app could set. A call with a founder still sat next to self-sign-up. The SDKs were their own, built fast. Strangers were about to arrive. Which of these parts should the founders replace first, and what should they build next?

## Exhibit 1: Langfuse from First Commit to Show HN, 18 May to 29 August 2023

| Date (2023) | Day | Event |
|---|---|---|
| 18 May | 1 | Repository created, first commit, "kill all", a fresh "init", database schema |
| 19 May | 2 | "trace api", "observations", frontend, "sdks" |
| 25 May | 8 | Website and documentation repository, first commits and "publish" |
| 26 May | 9 | Commit "v1", README states the goal, local start with Docker, MIT licence |
| 28 May | 11 | Build pipeline added |
| 1 June | 15 | Accounts, projects and a hosted cloud version |
| 7 June | 21 | Sign-up through an external form, website button books a call with a founder |
| By 10 June | 24 | Repository public (oldest surviving outside copy) |
| 23 June | 37 | Feedback button and error tracking |
| 26 June | 40 | Public sign-up, start screen with "Get started by yourself" and "Guided onboarding" |
| 17 July | 61 | Analytics page with the Looker Studio report for flagged users |
| 18 July | 62 | PostHog records use of the web interface |
| 19 July | 63 | Y Combinator launch page |
| 29 July | 73 | Support chat for cloud users |
| 31 July | 75 | Manual scoring in the interface, documentation chatbot |
| 10 August | 85 | First automated tests |
| 14 August | 89 | Demo project for every new user |
| 17 August | 92 | Tests run in the build pipeline |
| 20 August | 95 | Landing page moved off Framer, top product of the day on Product Hunt |
| 29 August | 104 | Show HN at 16:14 UTC |

Source: compiled by the case writer from the commit logs and changes of both repositories, the founders' posts and the Product Hunt record, see notes [^log], [^docslog], [^first], [^readme0526], [^cloud], [^june7], [^forks], [^feedback], [^june26], [^looker], [^posthogui], [^yc], [^chat], [^july], [^qabot], [^tests], [^demo], [^framer], [^ph] and [^post].
{: .source }

## Exhibit 2: Commits per Week, 18 May to 29 August 2023

| Week (2023) | App repository | Website and documentation repository |
|---|---|---|
| 15 to 21 May (from 18 May) | 34 | 0 |
| 22 to 28 May | 63 | 5 |
| 29 May to 4 June | 25 | 45 |
| 5 to 11 June | 6 | 15 |
| 12 to 18 June | 5 | 11 |
| 19 to 25 June | 28 | 17 |
| 26 June to 2 July | 20 | 12 |
| 3 to 9 July | 11 | 4 |
| 10 to 16 July | 13 | 12 |
| 17 to 23 July | 19 | 17 |
| 24 to 30 July | 12 | 34 |
| 31 July to 6 August | 16 | 34 |
| 7 to 13 August | 11 | 27 |
| 14 to 20 August | 19 | 50 |
| 21 to 27 August | 18 | 27 |
| 28 to 29 August (to 16:14 UTC) | 0 | 7 |
| **Total** | **300** | **317** |

Source: case writer's count from the commit logs of the main branches of langfuse/langfuse and langfuse/langfuse-docs, author dates in UTC, weeks Monday to Sunday. Merged changes count once, so the numbers understate the work. See notes [^log] and [^docslog].
{: .source }

## Exhibit 3: What a New User Met on 29 August 2023

| What | State on 29 August 2023 | Since |
|---|---|---|
| Website | Landing page in the documentation site, five named teams | 20 August (off Framer) |
| Sign-up | Public, with email and password | 26 June |
| Start screen | "Create new project" (get started by yourself), "View demo project" and "Guided onboarding" (a call with a founder) | 26 June, as on 27 August |
| Demo project | View-only, live data from the documentation chatbot | 14 August |
| Documentation | Quickstarts for cloud, local and self-hosted use, Python and JavaScript SDKs, a Langchain integration ("full integration in 5 minutes", Langchain being a code library for building such applications), a public API | By 29 August |
| Traces | A viewer for each request and its nested steps, with user feedback | Since the first weeks, nested view 24 July |
| Dashboards | Traces, token usage by model, scores, per-user views, for every user | By 27 August (video) |
| Manual scoring | Scores set by hand in the interface | 31 July |
| Analytics (Looker Studio) | For users with the flag "analytics-alpha" only. Others saw "Analytics is in closed alpha" and an invitation to get in touch | 17 July |
| Support | Feedback button, support chat offered while setting up a project, a Discord community | 23 June, 29 July |
| Account | No way to change or reset the password | Open issue of 21 August |

Source: compiled by the case writer from the app's code changes, the documentation site as committed on the morning of 29 August 2023 and the two-minute video, see notes [^framer], [^users], [^june26], [^index0827], [^demo], [^docs], [^video], [^july], [^looker], [^feedback], [^chat] and [^password].
{: .source }

## Every Application Ever {: .exhibit }

![Every application ever, a user, an interface, logic, a database and external services through APIs](media/every-application-ever.png "Every application ever")

[^post]: Marc Klingen, "Show HN: Langfuse – Open-source observability and analytics for LLM apps", Hacker News, 29 August 2023, 16:14 UTC, <https://news.ycombinator.com/item?id=37310070>, accessed 2026-10-19.
[^log]: GitHub, commit log of langfuse/langfuse, main branch, 18 May to 29 August 2023, <https://github.com/langfuse/langfuse/commits/main/>, read through the GitHub API, accessed 2026-10-19. Counts by the case writer.
[^gh0829]: GitHub page of langfuse/langfuse, Internet Archive capture of 29 August 2023, 16:29 UTC, <https://web.archive.org/web/20230829162925/https://github.com/langfuse/langfuse/>, accessed 2026-10-19.
[^looker]: Langfuse, code change 0d4cc76, "Analytics" page with the Looker Studio embed and the alpha banner, 17 July 2023, <https://github.com/langfuse/langfuse/commit/0d4cc76>, accessed 2026-10-19.
[^handbook]: Langfuse, handbook, "How did we get here?", undated, read 2026-10-19, <https://langfuse.com/handbook/chapters/story>. A later account written with hindsight.
[^unicorn]: Fabian Tausch with Marc Klingen, "Iterieren, Verkaufen, Skalieren", Unicorn Bakery podcast, 4 February 2025, at 25:55 to 26:03 and 28:29 to 29:09, <https://audio.podigee-cdn.net/2536590-m-fa0abaedc8437ab28311a1e18a4c2850.mp3>, accessed 2026-10-19. Paraphrased from German by the case writer from a machine transcript.
[^cerebral]: Cerebral Valley, "Langfuse (YC W23), the open-source LLM engineering platform", interview with Marc Klingen and Clemens Rawert, 14 June 2024, <https://cerebralvalley.beehiiv.com/p/langfuse-yc-w23-opensource-llm-engineering-platform>, accessed 2026-10-19.
[^seed]: Clemens Rawert, Max Deichmann and Marc Klingen, "Langfuse raises $4M", Langfuse blog, 7 November 2023, <https://langfuse.com/blog/announcing-our-seed-round>, accessed 2026-10-19. Used here only for the founders' account of events before 29 August 2023.
[^repo]: GitHub, repository record of langfuse/langfuse, created 18 May 2023, 17:47 UTC, <https://api.github.com/repos/langfuse/langfuse>, accessed 2026-10-19.
[^first]: Langfuse, code changes 5c8ff5b (first commit), e0f126a ("kill all") and 0659928 ("init"), 18 May 2023, <https://github.com/langfuse/langfuse/commit/e0f126a>, accessed 2026-10-19.
[^forks]: GitHub, oldest surviving forks of langfuse/langfuse, the first dated 10 June 2023, <https://api.github.com/repos/langfuse/langfuse/forks?sort=oldest>, accessed 2026-10-19. Deleted forks do not show, so the date is a latest bound.
[^readme0526]: Langfuse, README at commit af5f855 ("v1"), 26 May 2023, <https://github.com/langfuse/langfuse/blob/af5f855/README.md>, accessed 2026-10-19.
[^cloud]: Langfuse, code change 763147b, accounts, projects and cloud version, 1 June 2023, <https://github.com/langfuse/langfuse/commit/763147b>, accessed 2026-10-19.
[^readme0608]: Langfuse, README at commit fc5747b, 8 June 2023, <https://github.com/langfuse/langfuse/blob/fc5747b/README.md>, accessed 2026-10-19.
[^framer]: Langfuse, website repository, code change 634e770c23, "Move landingpage off of framer (#39)", 20 August 2023, <https://github.com/langfuse/langfuse-docs/commit/634e770c23>, accessed 2026-10-19.
[^docslog]: GitHub, commit log of langfuse/langfuse-docs, first commits from 25 May 2023, 317 commits before 29 August 2023, 16:14 UTC, <https://github.com/langfuse/langfuse-docs/commits/main/>, read through the GitHub API, accessed 2026-10-19. Counts by the case writer.
[^tests]: Langfuse, pull requests #3 "added pipeline" (28 May 2023), #76 "add tests" (10 August 2023) and #87 "Run tests in GH Actions" (17 August 2023), <https://github.com/langfuse/langfuse/pull/3>, <https://github.com/langfuse/langfuse/pull/76>, <https://github.com/langfuse/langfuse/pull/87>, accessed 2026-10-19.
[^june7]: Langfuse, code change 097c02b, sign-up link to an external form, <https://github.com/langfuse/langfuse/commit/097c02b>, and website change 1da665697b, early-access button to a booking page, <https://github.com/langfuse/langfuse-docs/commit/1da665697b>, both 7 June 2023, accessed 2026-10-19.
[^june26]: Langfuse, code changes 4239e07 and fa51245, public sign-up and the start screen, 26 June 2023, <https://github.com/langfuse/langfuse/commit/fa51245>, accessed 2026-10-19.
[^index0827]: Langfuse, start screen `src/pages/index.tsx` at commit 4022cf4, 27 August 2023, <https://github.com/langfuse/langfuse/blob/4022cf4/src/pages/index.tsx>, accessed 2026-10-19.
[^dash0]: Mirko Novakovic with Marc Klingen, "Engineering Intelligence: How to Build LLM Applications at Scale", Code RED podcast, Dash0, 17 April 2025, chapter 3, publisher's transcript, <https://www.dash0.com/podcast/23-engineering-intelligence-how-to-build-llm-applications-at-scale-with-marc-klingen-of-langfuse>, accessed 2026-10-19.
[^feedback]: Langfuse, code change 66f0654, feedback button and error tracking, 23 June 2023, <https://github.com/langfuse/langfuse/commit/66f0654>, accessed 2026-10-19.
[^posthogui]: Langfuse, code change 3cc183f, product analytics on the web interface, 18 July 2023, <https://github.com/langfuse/langfuse/commit/3cc183f>, accessed 2026-10-19.
[^chat]: Marc Klingen, pull requests #64 "Support chat for cloud.langfuse.com" and #65 "Add chat message trigger", 29 July 2023, <https://github.com/langfuse/langfuse/pull/64>, <https://github.com/langfuse/langfuse/pull/65>, accessed 2026-10-19.
[^demo]: Langfuse, code change e9ec39e, "Assign demo project to new users (#84)", 14 August 2023, <https://github.com/langfuse/langfuse/commit/e9ec39e>, and the documentation page "Demo" as committed at f685a29, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
[^qabot]: Marc Klingen, "Q&A Chatbot for Langfuse Docs", Langfuse blog, 31 July 2023, as committed at f685a29, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
[^password]: Marc Klingen, issue #92, "feat: Add "change password" flow to user settings", 21 August 2023, <https://github.com/langfuse/langfuse/issues/92>, accessed 2026-10-19.
[^users]: Langfuse, landing page component "Users", website repository at f685a29, 29 August 2023, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
[^july]: Marc Klingen, "Langfuse Update — July 2023", Langfuse blog, 2 August 2023, as committed at f685a29, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
[^reply1]: Max Deichmann, reply in the Show HN thread, 29 August 2023, 19:00 UTC, <https://news.ycombinator.com/item?id=37312299>, accessed 2026-10-19. Written after the post, about use seen before it.
[^yc]: Langfuse founders, "Langfuse - Open-source product analytics for LLM apps", Launch YC, 19 July 2023, <https://www.ycombinator.com/launches/J2s-langfuse-open-source-product-analytics-for-llm-apps>, accessed 2026-10-19.
[^ph]: Product Hunt, "Langfuse", launch of 20 August 2023 with its daily badge, <https://www.producthunt.com/posts/langfuse>, accessed 2026-10-19.
[^flag]: Langfuse, code change e759754, feature flags on the users table, 17 July 2023, <https://github.com/langfuse/langfuse/commit/e759754>, accessed 2026-10-19.
[^video]: Marc Klingen, two-minute demo video linked in the README by 27 August 2023, <https://github.com/langfuse/langfuse/assets/2834609/6041347a-b517-4a11-8737-93ef8f8af49f>, at 0:53 to 1:27, accessed 2026-10-19. Machine transcript by the case writer.
[^analytics]: Langfuse, documentation page "Analytics (alpha)", "Why is this an alpha program?", as committed at f685a29 on 29 August 2023, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
[^reply2]: Max Deichmann, reply in the Show HN thread, 29 August 2023, 20:37 UTC, <https://news.ycombinator.com/item?id=37313654>, accessed 2026-10-19. Written after the post, about the state that day.
[^reply3]: Max Deichmann, reply in the Show HN thread, 29 August 2023, 21:52 UTC, <https://news.ycombinator.com/item?id=37314638>, accessed 2026-10-19. Written after the post, about a choice made earlier.
[^docs]: Langfuse, documentation index and get-started pages as committed at f685a29 on 29 August 2023, <https://github.com/langfuse/langfuse-docs/tree/f685a29fce>, accessed 2026-10-19.
