# AI and LLMs in Programming

**Large Language Models (LLMs)** have rapidly changed how software is written. Tools like GitHub Copilot, ChatGPT, Claude, and Cursor can generate code, explain errors, write tests, and review pull requests. Understanding what these tools are, how they work, and how to use them responsibly is increasingly important for any programmer.

:::tip
If you're using LLMs on a VERSO project, also read the [VERSO AI Usage Standards](/verso-standards/ai-use) page, which covers the project's specific policies.
:::

## What Is a Large Language Model?

A **Large Language Model** is a type of AI trained on enormous amounts of text — code, books, websites, academic papers — to predict what text comes next. When you ask it a question, it generates a response token by token, each time predicting the most plausible next word given everything before it.

"Large" refers to the number of parameters (weights) in the model — modern LLMs have billions to trillions of parameters. More parameters generally means better reasoning, but also more compute and memory required to run.

LLMs are a type of **neural network**, specifically built on a design called the **Transformer** architecture, introduced in 2017.

## How LLMs Work (High Level)

Understanding the basics helps you use LLMs more effectively and recognize their limitations.

### Tokenization

LLMs don't read words — they read **tokens**, which are chunks of text (roughly 3–4 characters on average). The sentence "Hello, world!" might become tokens like `["Hello", ",", " world", "!"]`. This matters because:

- LLMs have a **context window** — a limit on how many tokens they can process at once
- Code with long files may need to be split or summarized before sending

### Training

LLMs are trained in stages:

1. **Pre-training** — the model reads massive amounts of text and learns to predict the next token. This is where general knowledge comes from.
2. **Fine-tuning** — the model is further trained on specific data (e.g., code, instructions, conversations) to specialize its behavior.
3. **RLHF (Reinforcement Learning from Human Feedback)** — human raters evaluate model outputs, and the model is trained to produce outputs humans prefer. This is how models learn to be helpful, harmless, and honest.

### Context Window

The context window is the total amount of text (input + output) a model can handle at once. Early models had windows of a few thousand tokens. Modern models handle 100,000 to over 1,000,000 tokens — enough to fit an entire codebase.

### What LLMs Are Not

- They are **not databases** — they don't look things up; they generate text based on patterns learned during training
- They are **not always correct** — they can confidently produce wrong answers ("hallucinations")
- They are **not reasoning engines** — they generate statistically likely text, which often resembles reasoning but can fail on novel problems
- They have a **training cutoff** — they don't know about events after their training data was collected

## Timeline of Major Models

The field has moved extremely fast. Here are the most significant milestones.

### 2017 — The Transformer

**"Attention Is All You Need"** — a paper from Google researchers introduced the **Transformer** architecture, which became the foundation for virtually every major LLM since. Key insight: an "attention" mechanism allows the model to relate any word to any other word in a sequence, regardless of distance.

- [Vaswani et al., 2017 (original paper)](https://arxiv.org/abs/1706.03762)

### 2018 — BERT

**BERT** (Bidirectional Encoder Representations from Transformers) by Google. First model to read text in both directions simultaneously, dramatically improving tasks like question answering and text classification. Widely used in search engines.

### 2019 — GPT-2

**GPT-2** (OpenAI, 1.5B parameters). Generated coherent paragraphs and sparked early discussion about AI-generated text. OpenAI initially withheld the full model out of misuse concerns — an early moment in the AI safety conversation.

### 2020 — GPT-3

**GPT-3** (OpenAI, 175B parameters). A qualitative leap in capability — it could write essays, answer questions, translate, and generate code with just a few examples in the prompt ("few-shot learning"), without any fine-tuning. Access was via API only.

### 2021 — Codex and GitHub Copilot

**Codex** (OpenAI) — GPT-3 fine-tuned specifically on code from GitHub. Powered the first version of **GitHub Copilot**, which launched as a technical preview for developers. Copilot could autocomplete entire functions from a comment or function signature.

### 2022 — ChatGPT and the Public AI Moment

**InstructGPT** — OpenAI showed that RLHF made models dramatically more useful and safer for conversation.

**ChatGPT** launched on **November 30, 2022**, built on GPT-3.5. It reached 1 million users in 5 days and 100 million in two months — the fastest-growing product in history at the time. It made LLMs accessible to the general public.

**GitHub Copilot** became generally available (no longer in preview).

### 2023 — The Model Explosion

- **February** — **Llama** (Meta): a family of open-weights models released for research. Being open-weights meant anyone could run them locally or fine-tune them.
- **February** — **Bing Chat** (Microsoft, powered by GPT-4): conversational search.
- **March** — **GPT-4** (OpenAI): multimodal (text + images), significantly more capable and reliable than GPT-3.5. Powers ChatGPT Plus.
- **March** — **Claude 1** (Anthropic): designed with a focus on safety and long context windows.
- **May** — **Google Bard** (now Gemini): Google's conversational AI, powered by PaLM 2.
- **July** — **Llama 2** (Meta): improved open-weights model, released for commercial use.
- **August** — **Code Llama** (Meta): Llama 2 fine-tuned specifically for code generation.
- **September** — **Mistral 7B**: a highly efficient open-weights model from French startup Mistral AI, competitive with much larger models.
- **GitHub Copilot Chat** added conversational AI assistance inside VS Code and other IDEs.

### 2024 — Capabilities Leap and New Paradigms

- **February** — **Gemini 1.5 Pro** (Google): introduced a 1 million token context window — enough to process hours of video or an entire large codebase.
- **March** — **Claude 3** family (Anthropic): three tiers — Haiku (fast/cheap), Sonnet (balanced), Opus (most capable). Set new benchmarks on many tasks.
- **April** — **Llama 3** (Meta): major quality jump in open-weights models; 8B and 70B parameter versions.
- **May** — **GPT-4o** (OpenAI, "omni"): multimodal across text, image, and audio in a single model; faster and cheaper than GPT-4.
- **June** — **Claude 3.5 Sonnet** (Anthropic): surpassed Claude 3 Opus on most benchmarks while being faster. Introduced **Artifacts** (Claude can generate interactive web pages, documents, code).
- **September** — **o1** (OpenAI): a new paradigm — the model "thinks" before answering by generating an internal chain-of-thought. Dramatically better at math, science, and complex reasoning.
- **October** — **Claude 3.5 Haiku** (Anthropic): fastest Claude model, competitive with larger models.
- **December** — **Gemini 2.0 Flash** (Google): fast, capable, multimodal model with tool use.
- **Cursor** emerged as a leading AI-powered code editor, built on VS Code with deep model integration.
- **Amazon Q Developer** (formerly CodeWhisperer): AI coding assistant integrated into AWS and IDEs.

### 2025 — Reasoning Models and Open Source Convergence

- **January** — **DeepSeek R1** (DeepSeek, China): open-weights reasoning model competitive with o1, released for free. Caused significant discussion about the cost of training frontier models.
- **February** — **Claude 3.7 Sonnet** (Anthropic): introduced **extended thinking** — Claude can show its reasoning process and spend more time on hard problems.
- **February** — **GPT-4.5** (OpenAI): improved emotional intelligence and instruction following.
- **March** — **Gemini 2.5 Pro** (Google): strong reasoning capabilities, competitive on coding benchmarks.
- **April** — **o3 and o4-mini** (OpenAI): more powerful reasoning models with tool use (web search, code execution, image analysis).
- **April** — **Llama 4** (Meta): multimodal open-weights models with a mixture-of-experts architecture.
- **2025** — **Claude 4 series** (Anthropic): the current generation, with Sonnet 4 and Opus 4, focused on agentic tasks — models that can take sequences of actions to complete complex goals.

## AI Tools for Programmers

### Code Completion and Chat

| Tool | Made By | Description |
| --- | --- | --- |
| **GitHub Copilot** | GitHub/OpenAI | In-editor code completion and chat; integrates with VS Code, JetBrains, and more |
| **ChatGPT** | OpenAI | General-purpose chat; excellent at explaining code, debugging, and generating examples |
| **Claude** | Anthropic | Strong at reasoning through code, large context (can read entire files), nuanced explanations |
| **Gemini** | Google | Integrated into Google products; strong on Python and data science tasks |
| **Codeium** | Codeium | Free AI code completion for many IDEs |
| **Amazon Q Developer** | Amazon | AWS-integrated coding assistant; good for cloud infrastructure code |
| **Tabnine** | Tabnine | AI completion focused on privacy; can run locally |

### AI-Powered IDEs

| Tool | Description |
| --- | --- |
| **Cursor** | Fork of VS Code with deep AI integration — model can edit code, run commands, and understand your full project |
| **Windsurf** (by Codeium) | AI-native IDE similar to Cursor |
| **VS Code + Copilot** | Official GitHub Copilot extension adds chat and inline suggestions to VS Code |

### CLI and Agentic Tools

| Tool | Description |
| --- | --- |
| **Claude Code** | Anthropic's CLI agent (this tool!) — understands and modifies entire codebases, runs commands |
| **OpenAI Codex CLI** | OpenAI's terminal agent |
| **Aider** | Open source CLI tool that works with any LLM to edit code via chat |

## Using LLMs Effectively for Coding

### What LLMs Are Good At

- **Boilerplate code** — writing repetitive setup code, config files, and standard patterns
- **Explaining code** — "what does this function do?" is often answered well
- **Debugging** — paste an error message and stack trace; LLMs often identify the cause immediately
- **Writing tests** — generating unit tests for a given function
- **Translating code** — converting between languages (Python to JavaScript, etc.)
- **Refactoring** — suggesting cleaner ways to write something
- **Learning a new API** — "show me how to use the GitHub REST API to list pull requests"

### What LLMs Are Not Good At

- **Novel algorithms** — if the answer isn't in training data, performance drops significantly
- **Very long, complex tasks** — quality degrades over long interactions; break tasks into pieces
- **Up-to-date information** — they have a training cutoff and may not know about recent library versions
- **Knowing your codebase** — unless you provide context, the model doesn't know how your project is structured
- **Always being right** — they can produce plausible-looking but incorrect code with confidence

### Prompting for Code

Better prompts produce better results. Be specific:

```text
# Vague (produces generic result)
"write a function to parse data"

# Specific (produces useful result)
"Write a Python function that reads a CSV file using pandas,
filters rows where the 'status' column equals 'active',
and returns a list of dictionaries. The CSV has columns:
id, name, email, status."
```

Useful prompting strategies:

- **Provide context** — paste the relevant function, class, or error message
- **Specify constraints** — language version, libraries to use or avoid, style conventions
- **Ask for explanation** — "explain each step" helps you understand and verify the output
- **Iterate** — if the first answer isn't right, describe what's wrong and ask for a revision
- **Ask for alternatives** — "what are two other ways to do this?"

### The Golden Rule: Understand What You Commit

Never commit code you don't understand. If an LLM generates a solution, read it carefully before using it. Ask the model to explain any part you don't understand. You are responsible for every line of code with your name on it — in code review, debugging, and maintenance.

See the [VERSO AI Usage Standards](/verso-standards/ai-use) for more guidance on this.

## Limitations and Risks

### Hallucinations

LLMs sometimes generate confident, convincing, and completely wrong answers. This is called a **hallucination**. Common forms in programming:

- Fabricated function names or API methods that don't exist
- Outdated syntax or deprecated APIs
- Logically flawed algorithms that look correct
- Security vulnerabilities in generated code

Always test generated code. Don't trust output you haven't verified.

### Security Risks

LLM-generated code has been found to contain security vulnerabilities at higher rates than human-written code in some studies. Common issues include:

- SQL injection vulnerabilities
- Hardcoded secrets
- Insufficient input validation
- Use of deprecated or insecure cryptographic functions

Run generated code through a linter and security scanner. See [Security Basics](/concepts/security_basics).

### Copyright and Licensing

Models trained on code from GitHub may reproduce code from that training data. The legal status of this is actively debated. If you're working on a project with strict license requirements, be aware of this possibility.

### Privacy

Do not paste sensitive data, passwords, proprietary code, or personal information into public LLM tools like ChatGPT or Claude.ai. Inputs may be used for training or logged. For sensitive work, use tools that offer data privacy guarantees or run models locally.

## Running Models Locally

If privacy or cost is a concern, you can run open-weights models on your own hardware:

- **[Ollama](https://ollama.com)** — the easiest way to run models like Llama, Mistral, and Gemma locally
- **[LM Studio](https://lmstudio.ai)** — graphical app for downloading and running models locally

```sh
# Install and run Llama 3 locally with Ollama
ollama run llama3
```

Local models are smaller and less capable than frontier models, but they're free, private, and work offline.

## Important Resources

### Learning and Understanding

- [3Blue1Brown: But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk) — excellent visual introduction to neural networks
- [Andrej Karpathy: Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY) — builds a mini GPT in Python; deeply educational
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) — visual explanation of the Transformer architecture
- [Attention Is All You Need (original paper)](https://arxiv.org/abs/1706.03762)

### Coding Tools

- [GitHub Copilot](https://github.com/features/copilot) — free for students via [GitHub Education](https://education.github.com/pack)
- [Claude](https://claude.ai) — Anthropic's AI assistant
- [ChatGPT](https://chatgpt.com) — OpenAI's assistant
- [Cursor](https://cursor.com) — AI-native code editor
- [Ollama](https://ollama.com) — run LLMs locally
- [Aider](https://aider.chat) — open source CLI coding assistant

### Benchmarks and Comparisons

- [LMSYS Chatbot Arena](https://lmarena.ai) — crowdsourced model rankings based on human preference
- [HumanEval](https://github.com/openai/human-eval) — OpenAI's benchmark for code generation
- [SWE-bench](https://www.swebench.com) — benchmark for AI agents solving real GitHub issues

### Staying Current

The field moves fast. Good ways to keep up:

- [Hugging Face Blog](https://huggingface.co/blog) — announcements and technical posts on open source AI
- [Andrej Karpathy's YouTube](https://www.youtube.com/@AndrejKarpathy) — deep technical content
- [The Batch (DeepLearning.AI newsletter)](https://www.deeplearning.ai/the-batch/) — weekly AI news digest
