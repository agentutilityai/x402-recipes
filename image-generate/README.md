# image-generate

**Buyer job:** get an image from a text prompt without hosting a model or
holding an API key for one.

Calls `POST https://x402.agentutility.ai/image-generate` — 0.01 USDC per
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
  "image_url": "https://...permanent fal-hosted PNG URL...",
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

`image_url` is a permanent, publicly reachable PNG — no follow-up download
step or expiring signed URL to manage.
