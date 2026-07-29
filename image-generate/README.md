# image-generate

**Buyer job:** get an image from a text prompt without hosting a model or
holding an API key for one.

Calls `POST https://x402.agentutility.ai/image-generate`: 0.01 USDC per
call. Input is `{ prompt, tier? }`; `tier` picks the model (`fast` default,
plus `creative`, `anime`, `sd35`).

## Run

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
node index.mjs
```

## Expected output shape

```json
{
  "image_url": "https://...hosted PNG URL...",
  "model": "z-image-turbo",
  "width": "1024",
  "height": "1024",
  "tier": "fast",
  "prompt": "a red bicycle leaning against a brick wall, morning light",
  "seed": 123456,
  "elapsed_ms": 3200,
  "venice_request_id": "...",
  "source": "venice"
}
```

`image_url` is the hosted PNG returned for this generation. Save or copy it
where your workflow needs it; hosted URLs are provider output, not a storage
guarantee from this endpoint.

## Repeat-call choices

Start with `tier: "fast"` for drafts and routine prompt iteration. Use
`creative` when the job is a stylized campaign image, `anime` for illustration,
and `sd35` when you need a Stable Diffusion-style result. Set `seed` when you
want to repeat a prompt with the same starting point, then adjust the prompt or
dimensions deliberately.
