# The Frameworks

Updated: 2026-11-17.

**Ten tools for the decisions a founder makes every week. Each one teaches you the method and sets up your agent to run it with you.**

> Frameworks · The course toolbox · Each one links to the lecture slides that teach it, and those slides link back

## The ten

| # | Framework | Use it when | Taught in |
|---|---|---|---|
| 01 | [The Mom Test](01_Mom_Test.md) | You are about to talk to a customer | Finding ideas (M02), The problem space (M03) |
| 02 | [The Validation Hierarchy](02_Validation_Hierarchy.md) | You wonder what your evidence proves and what to test next | Kickoff (M00), Validating problems (M04) |
| 03 | [Build, Measure, Learn](03_Build_Measure_Learn.md) | You plan the next loop, or must decide go, pivot or kill | Kickoff (M00), The kill decision (M07) |
| 04 | [Default Alive or Default Dead?](04_Default_Alive_Calculator.md) | You want to know whether the money lasts | Fundraising and Demo Day (M12) |
| 05 | [The Playbook](05_AI_Startup_Playbook.md) | You want the whole path, step by step, with your time split | Every module |
| 06 | [Product-Market Fit](06_PMF_Measurement_Engine.md) | People use and pay, and you must decide what to build next | Prototyping (M06), Product management and growth (M10) |
| 07 | [The 10x Test](07_10x_Test.md) | You pick the one thing your solution does ten times better | The solution space (M05) |
| 08 | [The Innovator's Dilemma in the Age of AI](08_Innovators_Dilemma.md) | You ask why the big player won't simply copy you | Related slides in Kickoff (M00), Finding ideas (M02), Prototyping (M06) and From prototype to product (M09) |
| 09 | [Co-Founder Fit](09_Co-Founder_Fit.md) | You form a team or something between founders feels off | Team and foundations (M01) |
| 10 | [Accountability Groups](10_Accountability_Groups.md) | You work at your own pace and want peers who see your numbers | Kickoff (M00), Team and foundations (M01) |

Every framework has the same parts. The idea, how to run it, what good looks like next to what is weak, the records it keeps, the skills for your agent, the slides that teach it, and where to go deeper. Most examples follow one made-up venture, three founders, Ana, Jonas and Mia, who help recruiters notice when a finalist goes quiet. Where a lecture slide shows its own example, the framework keeps it.

## Run the frameworks with your agent

A skill is a short instruction file that turns a general AI assistant into one that does a task your way. Each framework holds the skills its lecture slides show, in full, ready to copy. They are plain Markdown in the open Agent Skills format, a folder named after the skill with a file `SKILL.md` inside.

| Your tool | What to do |
|---|---|
| Claude Code | Save each skill as `.claude/skills/<name>/SKILL.md` in your project, or in `~/.claude/skills/<name>/` for every project. It loads the skill when the task fits. |
| The Claude apps | Zip the skill's folder and upload it in the app's skills settings. |
| Codex and other agents | Agents that read the open Agent Skills format load the same folder. Check your tool's documentation for the folder it reads. |
| Any chat (ChatGPT, Gemini, Mistral …) | Paste the skill at the start of the chat, or into a project's instructions, a custom GPT or a Gem. |

The fastest way is to let your agent do it. Point it at this repository and say "Install the skills from frameworks 01 and 03 into this project."

**Make them yours.** Change the examples to your segment and your words, keep the rules. When an output is wrong, don't fix the output. Add the rule the skill broke, so it never breaks it again. Keep your skills next to your work, in your repository or your team drive, and improve them every week. This is how you work on the system instead of in it.

**Keep people safe.** Take names and personal data out of transcripts before any AI tool sees them. Ask before you record. What a founder writes about themselves in Founder health (M11) never goes into a record or an AI tool.

## Your records

Your team keeps its evidence in its own sheets, the ones your startup keeps using after the course. Your agent creates and fills them. Each framework defines the records it needs, with columns your agent can set up in any spreadsheet, Notion table or file.

| Record | What goes in | Defined in |
|---|---|---|
| Interview Log, Pain Map | One row per conversation, one row per segment | [01 The Mom Test](01_Mom_Test.md#your-records) |
| Test card, Traffic Sources | One test with its line, one row per traffic source | [02 The Validation Hierarchy](02_Validation_Hierarchy.md#your-records) |
| Kill Criteria Log, Assumptions, Verdict | One row per loop, per assumption, per decision | [03 Build, Measure, Learn](03_Build_Measure_Learn.md#your-records) |
| Ideas, Pipeline | One row per idea, one row per person asked to pay | [05 The Playbook](05_AI_Startup_Playbook.md#your-records) |
| Use Log, KPI Tracker, Bets | One row per user, per driver, per request | [06 Product-Market Fit](06_PMF_Measurement_Engine.md#your-records) |
| Team | Who owns which decisions, and the agreement | [09 Co-Founder Fit](09_Co-Founder_Fit.md#your-records) |
| Group goals | One row per team and two-week cycle | [10 Accountability Groups](10_Accountability_Groups.md#your-records) |

Together these records are your evidence. Show them, not your opinion, when you present, pitch or decide.
