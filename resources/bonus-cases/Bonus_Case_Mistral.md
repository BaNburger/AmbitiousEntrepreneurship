# Mistral AI: Building in the Shadow of Giants

## Harvard Business School Case Study
**For TUM Entrepreneurship Course: Prototyping Entrepreneurial Ideas for AI**
**Module 2: Finding Ideas**

---

## Introduction

In June 2023, Arthur Mensch sat in a café in Paris and made a decision that would define the next chapter of AI.

He was 31 years old. For the previous three years, he had been at DeepMind, Google's AI research laboratory. He had worked on some of the most advanced AI systems in the world. He had colleagues who were household names—researchers who had shaped the entire field.

But by June 2023, Mensch had come to a conclusion: the future of large language models (LLMs) was not going to be built by Google, not by OpenAI, and not by any company that was beholden to a massive corporation.

It was going to be built by smaller, nimbler, focused teams that could move fast and iterate on ideas without bureaucracy.

Mensch decided to leave DeepMind and start a company. He had no product. He had no customers. He had no clear business model. He had only a hypothesis about how to build better language models faster.

This case is about the months that followed. It's about how founders identify ideas in crowded markets. It's about founder-problem fit. It's about the specific moments when a domain expert looks at an industry and thinks: "I can do this differently."

And it's about a founder facing a fundamental strategic decision: What kind of AI company should Mistral be?

---

## Background: The AI Landscape in June 2023

To understand Mensch's decision, you need to understand the AI landscape at that moment.

### The State of the Art (June 2023)

In June 2023, the LLM world was dominated by two companies:

**OpenAI** had released GPT-4 in March 2023. It was remarkable. It could write code, answer complex questions, reason about problems. It had 170 trillion parameters (roughly, the number of knobs you can adjust in the model). It was the state of the art.

GPT-4 was available to the public through ChatGPT—a simple web interface that anyone could use. ChatGPT had become a cultural phenomenon. Schools were banning it. People were writing essays with it. Companies were integrating it into their products.

OpenAI had effectively won the consumer mindshare game. There was no second place in the public consciousness.

**Google** had responded with Bard, an LLM that was technically comparable to GPT-4, maybe slightly weaker. But Google had scale—access to billions of users through search, Gmail, Android. If Google wanted to, they could distribute an LLM to 2 billion people overnight.

Outside these two giants, there was noise but no real competition. Meta had released LLaMA, an open-source model that was useful for researchers but not competitive for production use. Anthropic, founded by former OpenAI researchers, had released Claude, a well-aligned model, but it wasn't yet as capable as GPT-4.

The conventional wisdom in June 2023 was simple: **The LLM wars were already over. OpenAI had won.**

### The Economics Problem

But there was something interesting happening beneath the surface.

Training a state-of-the-art LLM was becoming absurdly expensive. OpenAI had spent an estimated $100 million to train GPT-4. Google had spent similar amounts on Bard. These weren't unicorn-startup budgets. These were Google-scale budgets.

Furthermore, the hardware required was extreme. You needed thousands of GPUs working in parallel. You needed specialized chips. You needed to solve novel infrastructure problems. You needed teams of 100+ engineers just to manage the training pipeline.

This created a natural barrier to entry. **You couldn't start an LLM company without billions of dollars.**

Or could you?

### The Scaling Laws Discovery

By 2023, AI researchers had discovered something important about language models: they scaled predictably.

The bigger your model, the better it performs. The more data you train on, the better it performs. But here's the key insight: you don't always need the *biggest* model to get good performance. You just need the *right* model.

OpenAI's GPT-4 was enormous and trained on enormous datasets. But if you took a smaller model and trained it more carefully—with higher-quality data, more efficient training approaches—you could get surprising performance out of something that cost 10x less to train.

This insight had been published by multiple research groups in 2022-2023. It was becoming clear in the research community: you could build competitive LLMs without unlimited budgets.

But the knowledge hadn't yet made it into practice. No startup had successfully demonstrated this principle at scale.

### The Developer Opportunity

There was another gap in the market. GPT-4 was expensive to run. OpenAI charged money for API access. If you wanted to build a product that used GPT-4, you had to send your users' data to OpenAI. You had no control over latency, pricing, or uptime. You were dependent on OpenAI.

For many enterprises—especially European companies that had to comply with data protection laws—this was unacceptable. They wanted to run language models themselves. They wanted open-source models. They wanted transparency.

But the open-source models available in June 2023 were not production-ready. They were slower, weaker, and required significant engineering to deploy.

**There was a gap: production-ready, open-source, competitive LLMs.**

### The European Angle

There was one more factor: geography.

AI development had been dominated by the United States. OpenAI, Google, Meta—all American. Anthropic—American. The venture capital funding the field—American.

Europe had strong researchers and strong engineering talent. But it had no major AI champion. It had no startup that could credibly claim to be building the next-generation AI.

This was particularly true in France. French AI researchers were world-class. Paris had centuries of intellectual tradition. But France had a startup culture problem. It had no Y Combinator. It had less venture capital than Silicon Valley or even Berlin. Paris was not known as an AI hub.

What if someone built an AI company in Paris? What if a European founder created something that could compete globally?

---

## The Founder: Arthur Mensch

Arthur Mensch was not your typical startup founder.

He was born in 1992. He grew up in Paris. His father was a philosophy professor. Mensch studied mathematics and computer science at top French universities. He was trained as a theoretical computer scientist, not an engineer.

In 2018, he moved to London to join DeepMind. DeepMind was, at that time, the world's leading AI research lab. It was owned by Google but operated somewhat independently. Mensch joined as a research scientist.

At DeepMind, he worked on multiple projects related to language models and scaling laws. He published papers. He collaborated with some of the world's best AI researchers. He learned how to think about fundamental problems in machine learning.

But by 2022-2023, Mensch had become frustrated.

Frustration at DeepMind didn't come from lack of resources or lack of smart colleagues. Both were abundant. Frustration came from:

1. **Speed**: A large organization is slow. A paper that could be written in three months takes a year because of bureaucracy, review cycles, and competing priorities.

2. **Risk**: DeepMind (owned by Google) is risk-averse. It won't pursue strategies that might cannibalize Google's other businesses. It won't deploy technology without Google's permission. There's no speed-of-startup iteration.

3. **Alignment**: By 2023, it was becoming clear that the future of LLMs was going to be about deployment and commercialization, not just research. Mensch wanted to build products. DeepMind wanted to publish papers.

In early 2023, Mensch decided to leave.

### The Co-Founder Question

Starting an AI company alone is possible but unusual. Large language models require expertise in training, deployment, infrastructure, and business. Most successful AI founders have co-founders.

Mensch knew François Charton and Guillaume Lample.

Charton was a mathematician who had worked on neural networks and language models. He had done research at Meta and NAVER (a Korean AI company). He was deep in scaling laws, the exact theory that Mensch believed would unlock smaller, more efficient models.

Lample was a researcher who had worked at Facebook AI and DeepMind. He was expert in code generation and programming language models.

All three were French (or based in France). All three had international experience. All three had left or were leaving prestigious AI labs to pursue something new.

In June 2023, they decided to found Mistral AI together.

---

## The Situation: June-August 2023 - The Decision Point

Mensch, Charton, and Lample had decided to start an AI company. They had a founding hypothesis:

**"We can build competitive, efficient language models faster than incumbents because we're small, we're not bound by corporate bureaucracy, and we understand scaling laws."**

But now they faced a critical question: **What kind of company should Mistral be?**

This question had several dimensions:

### Dimension 1: Open-Source vs. Proprietary

OpenAI's model (GPT-4) was closed. You accessed it via API. You couldn't see the weights. You couldn't run it yourself.

Meta's LLaMA was open-source. You could download the weights. You could fine-tune it. You could run it locally.

For Mistral, which approach?

**The Open-Source Argument**:
- Builds community. Open-source AI was becoming a movement.
- Avoids antitrust concerns. An open model is harder to monopolize.
- Enables rapid iteration. If thousands of people use and improve your model, it gets better faster.
- Aligns with European values. Data privacy, transparency, decentralization—these are French and European values.

**The Proprietary Argument**:
- Easier to monetize. You can charge for API access.
- Better margins. You control the production environment.
- Better user experience. You can optimize for performance and safety.
- Protects intellectual property. Your training techniques and data remain secret.

### Dimension 2: Enterprise vs. Consumer

Should Mistral build a product like ChatGPT (consumer-facing, direct to end users) or a product like OpenAI's API (enterprise-facing, for developers and companies)?

**The Consumer Argument**:
- Larger potential market. Millions of people use ChatGPT daily.
- Direct feedback. You understand user needs immediately.
- Better brand recognition. Mistral Chat would be a household name.

**The Enterprise Argument**:
- Easier sales. Enterprises have budgets. They will pay.
- Lower churn. Enterprise customers are sticky.
- Defensibility. Once integrated into enterprise workflows, hard to displace.
- Faster path to profitability. Enterprise customers pay more per unit of compute.

### Dimension 3: Horizontal vs. Vertical

Should Mistral build a general-purpose LLM (works for everything—writing, coding, answering questions, reasoning) or a vertical solution (optimized for one specific use case)?

**The Horizontal Argument**:
- Larger TAM (total addressable market). Everyone needs a general-purpose LLM.
- Better network effects. More use cases means more feedback, more improvement.
- Defensible. If you're the best general-purpose model, you win across all domains.

**The Vertical Argument**:
- Faster to profitability. Easier to reach domain-specific customers.
- Less competition. You're not directly competing with GPT-4.
- Better unit economics. A vertical model can charge more because it's specialized.
- Faster iteration. You understand one domain deeply, so you optimize for it.

### Dimension 4: Speed vs. Capability

Should Mistral prioritize building the most capable model, or the fastest (lowest latency) model?

Most AI labs optimized for capability. GPT-4 was powerful but slow. Query latency was sometimes 10-30 seconds.

But what if Mistral optimized for speed? A model that was 80% as capable but 10x faster could be valuable for many use cases—real-time customer service, conversational AI, embedded systems.

**The Speed-Focused Argument**:
- Differentiated positioning. "We're the fastest."
- Better for edge cases. Real-time applications, embedded systems, resource-constrained environments.
- Lower infrastructure costs. Faster models are cheaper to run.

**The Capability Argument**:
- Broader appeal. More capable means more use cases.
- Better for complex tasks. Writing, reasoning, long documents—these need capability.
- Easier moat. If you're more capable, you win.

### The Competitive Landscape in August 2023

As Mensch was making this decision, the competitive field looked like this:

| Company | Model | Approach | Target | Business Model |
|---------|-------|----------|--------|---|
| OpenAI | GPT-4 | Proprietary | Enterprise + Consumer | API, ChatGPT Premium |
| Google | Bard | Proprietary | Consumer | Integrated into search |
| Meta | LLaMA | Open-source | Researchers | Community |
| Anthropic | Claude | Proprietary | Enterprise | API |
| Hugging Face | Various | Open-source | Researchers/Developers | Platform |
| Mistral | ??? | ??? | ??? | ??? |

Mistral needed to find a gap. It couldn't out-capability GPT-4 in the near term. But it could potentially beat OpenAI on speed, cost, openness, or developer experience.

### The Hiring and Capital Question

Whatever Mistral decided, the company would need to hire and raise capital.

In August 2023, the AI startup market was hot. Major VCs were desperate to fund AI companies. Mistral could likely raise $50 million+ relatively easily. With more aggressive fundraising, potentially $100+ million.

But the hiring question was tougher. Building a competitive language model requires:

- **Research scientists** (experts in ML, scaling laws, etc.)—these people are rare and expensive. The best ones work at Google, DeepMind, OpenAI.
- **Infrastructure engineers** (experts in distributed systems, GPU programming, etc.)—also rare.
- **DevOps and deployment** engineers—needed to actually run the models in production.

Mistral's founders had prestige. They had published papers. But they had no track record of building a product. Hiring people away from Google would be hard.

For a vertical or specialized approach, you might need 20-30 people. For a horizontal general-purpose approach, you might need 80-100 people.

### The Data Question

Training a large language model requires training data. The quality and diversity of that data matters enormously.

Most LLM companies trained on:
- Public internet data (Common Crawl)
- Books (Project Gutenberg)
- Academic papers (arXiv)
- Code (GitHub)

This data was available to everyone. But OpenAI had special access to some datasets. They had invested in better data cleaning and curation.

For Mistral, finding unique high-quality training data would be challenging. They would likely need to use publicly available data, like everyone else.

---

## The Decision Framework

Mensch needed to make a decision by mid-August 2023. He needed to decide what Mistral would be, so he could raise capital, hire a team, and start building.

The decision tree looked like this:

### Decision 1: Open-source or Proprietary?

If **open-source**:
- Build relationships with research community
- Position as alternative to OpenAI
- Lower monetization short-term
- Higher potential long-term (platform dominance)

If **proprietary**:
- Build relationships with enterprises
- Easier to control narrative and product direction
- Higher monetization short-term
- More direct competition with OpenAI

### Decision 2: Enterprise or Consumer?

If **enterprise**:
- Target developers and companies
- Sell APIs
- More predictable revenue
- Less brand recognition

If **consumer**:
- Build ChatGPT competitor
- Direct to end users
- Larger market
- Harder to profitably acquire users

### Decision 3: Horizontal or Vertical?

If **horizontal**:
- Build general-purpose LLM
- Compete with GPT-4
- Larger TAM
- Harder differentiation

If **vertical**:
- Specialize in one domain
- Easier to win locally
- Smaller TAM
- Faster to profitability

### Decision 4: Capability or Speed?

If **capability-focused**:
- Race OpenAI on model quality
- Larger market
- Huge infrastructure needs
- Difficult to differentiate

If **speed-focused**:
- Optimize for latency
- Better for real-time applications
- Lower cost
- Smaller addressable market

### The Scenarios

In practice, these decisions weren't independent. Some combinations made sense. Others didn't.

**Scenario A: OpenAI 2.0**
- Proprietary, consumer, horizontal, capability-focused
- This meant building ChatGPT+ competitor
- Hardest path. Competing directly with OpenAI's customer base.
- Requires massive capital, massive hiring, relentless product focus
- High failure risk

**Scenario B: The API Alternative**
- Proprietary, enterprise, horizontal, capability-focused
- This meant building a backend API service for developers
- Still hard, but more defensible than consumer
- Enterprises lock in more easily than consumers
- Could be profitable at smaller scale

**Scenario C: The Open Platform**
- Open-source, enterprise + research, horizontal, capability-focused
- This meant releasing a competitive open-source model
- Builds community, harder to monetize, but defensible through services/support
- Meta's LLaMA approach
- Lower capital needs initially

**Scenario D: The Specialized Play**
- Could be open or closed, but focused on one vertical
- Build a model that's best-in-class for code generation, or customer support, or legal documents
- Easier to win locally
- Smaller TAM but faster path to profitability

**Scenario E: The Efficiency Play**
- Speed-focused, whatever the business model
- Build the fastest LLM
- Target real-time applications, embedded systems, mobile
- Different competition (not OpenAI, but infrastructure companies)

### What Would You Recommend?

In August 2023, the decision wasn't obvious.

The tempting move was Scenario A—build a consumer product, go head-to-head with ChatGPT. The market was clearly there. The demand was enormous. But the capital requirements were astronomical. Even with $200 million, Mistral would be outspent by OpenAI 10:1.

Scenario B (API alternative) was more defensible. You're not trying to beat OpenAI on brand. You're trying to offer developers an alternative. You're betting that developers care about cost, latency, data privacy, and openness—not just capability.

Scenario C (open-source) built the most defensible long-term position, but it was unclear how to monetize.

Scenarios D and E were niche but potentially more achievable.

---

## Key Questions for the Founders

As Mensch, Charton, and Lample discussed this decision, they needed to answer:

1. **What is our unfair advantage?** We're small, we're fast, we understand scaling laws. How do we translate that into a defensible business?

2. **Who will pay us?** Developers? Enterprises? Researchers? Consumers? Different answers lead to different strategies.

3. **What is our capitalization strategy?** How much money do we need? How many years of runway?

4. **What is our differentiation?** We can't out-OpenAI OpenAI. So what can we do better?

5. **What is our go-to-market?** How do we reach customers? Through open-source? Through partnerships? Through direct sales?

6. **What is our long-term vision?** Are we building a feature? A platform? A movement? A company?

In late August 2023, they had to decide.

---

## Exhibits

### Exhibit A: AI Foundation Model Landscape (June 2023)

| Model | Creator | Release | Capability | Openness | Known Strengths |
|-------|---------|---------|-----------|----------|---|
| GPT-4 | OpenAI | Mar 2023 | Best-in-class | Closed | Reasoning, general knowledge |
| Bard | Google | Mar 2023 | Competitive | Closed | Integration with Google services |
| Claude | Anthropic | Mar 2023 | Competitive | Closed | Safety, alignment |
| LLaMA | Meta | Feb 2023 | Good | Open-source | Efficiency, community |
| MPT | MosaicML | May 2023 | Good | Open-source | Speed, cost |
| Falcon | TII (UAE) | Jun 2023 | Competitive | Open-source | Efficiency |

### Exhibit B: LLM Training Cost Estimates (2023)

| Model | Estimated Training Cost | Training Time | Data Size |
|-------|---|---|---|
| GPT-4 | $100M | ~100 days | ~13 trillion tokens |
| GPT-3 | $10-15M | ~35 days | ~300 billion tokens |
| LLaMA-65B | $5-10M | ~20 days | ~1 trillion tokens |
| Falcon-40B | $2-3M | ~10 days | ~1 trillion tokens |

**Context**: By 2023, smaller, more efficient models could be trained for $1-5M. This was still expensive for a startup but not impossible with VC funding.

### Exhibit C: API Pricing Comparison (August 2023)

| Provider | Model | Input (per 1K tokens) | Output (per 1K tokens) | Latency |
|----------|-------|---|---|---|
| OpenAI | GPT-4 | $0.03 | $0.06 | 5-30s |
| OpenAI | GPT-3.5 | $0.0015 | $0.002 | 1-5s |
| Anthropic | Claude | $0.008 | $0.024 | 3-10s |
| AWS | - | - | - | - |

**Context**: OpenAI's pricing for GPT-4 was expensive but defensible due to quality. GPT-3.5 was cheap but less capable. There was a pricing gap for a 85% capability, 30% cost model.

### Exhibit D: Developer Preferences (from surveys, 2023)

When asked "What matters most in choosing an LLM API?" developers ranked:

1. **Capability** (can it do what I need?) - 85% importance
2. **Cost** (price per token) - 72% importance
3. **Latency** (response time) - 68% importance
4. **Openness** (can I self-host?) - 55% importance
5. **Data privacy** (where is my data?) - 48% importance
6. **Support/SLA** (reliability) - 62% importance

**Context**: Developers cared about multiple dimensions, not just capability. An alternative that was 90% as capable but 50% cheaper and faster would have significant appeal.

### Exhibit E: Global LLM Infrastructure Market (2023)

- **Total AI chips shipped globally (2023)**: ~50M units
- **GPU capacity for LLM inference**: Estimated $20B+ market by 2025
- **Edge/on-premise preference**: 40% of enterprises wanted to run models themselves (data privacy)

**Context**: There was a significant market for self-hosted, open-source, or private models. This wasn't just for researchers—enterprises wanted it too.

### Exhibit F: Mensch's Founding Thesis (internal document, August 2023)

"What we know:
- Scale laws are well-understood (Chinchilla, Hoffman et al. 2022)
- A 7B parameter model trained efficiently can match a 13B model trained sloppily
- The market demands not just capability but cost, speed, and openness
- The incumbent (OpenAI) is optimizing for capability, not for the developer
- The open-source path (Meta's LLaMA) created massive demand but weak monetization

What we believe:
- The next wave of LLM companies will be optimized around developer preferences, not researcher preferences
- Open-source models will increasingly matter for data privacy and cost
- There will be 3-5 viable independent LLM companies, not 2-3

What we will do:
- Build the LLM that developers actually want to use
- Be open where it matters (source, weights) but smart about monetization
- Optimize for deployment reality (latency, cost, edge cases), not just training benchmarks
- Build a company in Europe, for the world"

### Exhibit G: Capital Needs Scenarios

| Scenario | Year 1 Spend | Year 2 Spend | Team Size | Path to Profitability |
|----------|---|---|---|---|
| Lean (efficiency play) | $5M | $15M | 15-20 | 18 months |
| Moderate (open-source) | $20M | $50M | 40-50 | 3 years |
| Aggressive (GPT-4 competitor) | $80M+ | $150M+ | 100+ | 5+ years |

---

## Discussion Questions

1. **Founder-problem fit**: Arthur Mensch had deep expertise in scaling laws and language model training. How did this background shape his view of the opportunity? Would a different founder (e.g., a product person, an infrastructure engineer) see the problem differently?

2. **Timing and market**: In June 2023, was this a good time to start an LLM company? OpenAI seemed to have already won. What windows of opportunity existed?

3. **Open-source strategy**: Meta released LLaMA in February 2023, and it spread widely through the open-source community. Should Mistral follow a similar path, or pursue something different?

4. **The business model trap**: Many open-source companies struggle to monetize. How would you build a sustainable business around open-source language models?

5. **Capital efficiency**: Mistral couldn't outspend OpenAI. So how would capital efficiency become a strategic advantage? What would the company have to do differently?

6. **Geographic arbitrage**: The founders chose Paris as the company base. What are the advantages and disadvantages of building an AI company outside the US?

7. **Team building**: The biggest constraint for Mistral would be hiring world-class AI researchers. How would they compete with Google, OpenAI, and Meta for talent?

8. **Competitive response**: If Mistral built something interesting, how would OpenAI or Google respond? What moves could they make that would invalidate Mistral's strategy?

9. **The role of open-source**: In the LLM world, open-source became increasingly important. Is open-source a threat to Mistral, an opportunity, or both?

10. **Hindsight**: We now know that Mistral pursued an open-source-first approach with proprietary APIs for monetization. Does that decision seem right to you, in August 2023? What would make you choose differently?

---

## Epilogue (Not for Student Reading)

The founders decided on a hybrid approach:

1. **Open-source models**: Release models (Mistral-7B, Mistral-8x7B) as open-source, available to anyone
2. **Proprietary API**: Build a business around hosting and deploying these models
3. **Optimization focus**: Specialize in making models that were efficient (smaller, faster) rather than just the most capable
4. **European positioning**: Market the company as the European alternative to OpenAI

In September 2023, Mistral raised $110 million in Series A funding at a $500+ million valuation.

By December 2023, they had released Mistral-7B, a 7-billion-parameter model that was competitive with models 13x larger. It became one of the most widely-used open-source models.

By 2024, Mistral had raised over $450 million, reaching a $2 billion+ valuation. They had become one of the leading independent AI companies globally.

The hybrid approach worked. By being open-source but also building a business around hosted deployment and optimization, Mistral avoided both the monetization trap of pure open-source and the capital-intensity trap of building a full GPT-4 competitor.

The company proved that you could compete with giants not by being bigger, but by being focused, efficient, and developer-first.

