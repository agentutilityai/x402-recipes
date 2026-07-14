# web-answer

**Buyer job:** ask a natural-language question and get back a synthesized
answer with inline citations, without wiring together a search API, a
scraper, and an LLM call yourself.

Calls `POST https://x402.agentutility.ai/answer-web` — 0.04 USDC per call.
Under the hood it runs a Google SERP lookup, scrapes the top results in
parallel, and synthesizes the answer with an LLM. Input is
`{ question, max_sources?, recency?, language? }`; only `question` is
required.

## Run

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
node index.mjs
```

## Expected output shape

```json
{
  "question": "What is the current base interest rate set by the US Federal Reserve?",
  "answer": "... answer text with [1][2] inline citations ...",
  "sources": ["https://...", "https://..."],
  "model": "llama-3.3-70b",
  "search_results_count": 8,
  "scraped_count": 3
}
```

`max_sources` caps how many pages get scraped and cited (default 3, max
5) — raise it for broader coverage at a slower response time.
