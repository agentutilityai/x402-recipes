# compose-workflow (article-brief)

**Buyer job:** hand over a URL and get a summary, named entities, and
sentiment back from one paid call, instead of running scrape,
summarize-text, extract-entities, and sentiment as four separate priced
requests.

Calls `POST https://x402.agentutility.ai/article-brief` — 0.04 USDC per
call. This is a composite: internally it scrapes the page once, then runs
summarize-text, extract-entities, and sentiment against that text in
parallel. Input is `{ url }` (any http/https URL, max 2048 chars).

## Run

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
node index.mjs
```

## Expected output shape

```json
{
  "url": "https://en.wikipedia.org/wiki/Artificial_intelligence",
  "title": "Artificial intelligence - Wikipedia",
  "description": "...",
  "text_chars": 48213,
  "summary": "- bullet one\n- bullet two\n...",
  "entities": { "people": [], "organizations": [], "locations": [], "dates": [] },
  "sentiment": { "label": "neutral", "score": 0.1 },
  "composed_of": ["scrape-website", "summarize-text", "extract-entities", "sentiment"],
  "degraded": false
}
```

`degraded: true` means one of the underlying calls failed and the response
is missing that section — check which fields came back before assuming
the whole brief is complete.
