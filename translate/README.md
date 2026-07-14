# translate

**Buyer job:** translate a string of text between 100+ languages, with
source-language auto-detect, without standing up a translation API account.

Calls `POST https://x402.agentutility.ai/translate` — 0.005 USDC per call.
Input is `{ text, target_language, source_language?, formality? }`; `text`
and `target_language` are required. Markdown, code blocks, and URLs in the
input are preserved in the output.

## Run

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
node index.mjs
```

## Expected output shape

```json
{
  "translated_text": "El envío está retrasado hasta el jueves.",
  "target_language": "es",
  "detected_source_language": "en",
  "input_chars": 39,
  "output_chars": 41,
  "model": "..."
}
```

Related endpoints in the same cluster cover the same call shape for
specific document types: `contract-translate`, `invoice-translate`,
`customer-review-translate`, `marketing-copy-translate`, and more — same
`{ text, target_language }` input, tuned prompts per document type.
