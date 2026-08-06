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
  "width": 1024,
  "height": 1024,
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

For a second pass, keep the returned `seed`, `width`, `height`, and `tier`.
Change the part of the prompt you are testing, then send those values again.
That gives an agent a controlled variation instead of a fresh, unrelated image.

```js
const nextRequest = {
  prompt: "the same red bicycle, now parked outside a corner bakery at dusk",
  tier: data.tier,
  width: data.width,
  height: data.height,
  seed: data.seed,
};
```

If the first response has `seed: null`, pick and record an integer seed before
starting the next pass. The endpoint returns the hosted URL for each result, so
store the selected URL with the prompt that produced it.

## Choosing the next paid pass

Keep using `image-generate` when the work is still a draft or a controlled
prompt iteration. If the next pass needs a specific premium model, start a new
baseline with `image-generate-pro` ($0.06): `balanced` for Flux 2 Pro,
`recraft` for design and illustration work, `seedream` for photoreal creative,
`grok`, or `qwen`.

Use `image-generate-ultra` ($0.22) only when the job calls for its flagship
model family, such as Nano Banana Pro or Grok SOTA. Don't carry a seed across a
tier change and call it a controlled comparison. Record the endpoint, tier,
model, canvas, and seed with each selected image, then compare the new baseline
with the draft it replaced.

## Hand off a selected draft

Once a draft is approved, keep the prompt and canvas in the job record with the
chosen `image_url`. The next agent can then ask a narrow question: revise the
same asset, make a new draft, or pay for a premium baseline. That prevents a
later call from becoming an untraceable fresh prompt.

For a premium baseline, send the selected prompt and dimensions to
`image-generate-pro` with the model tier that fits the job. Treat that output as
a new candidate, not a guaranteed refinement of the fast draft. Compare its
hosted URL, model, and dimensions against the saved draft before replacing the
asset in the workflow.

```js
const productionBrief = {
  endpoint: "image-generate-pro",
  prompt: approvedDraft.prompt,
  width: approvedDraft.width,
  height: approvedDraft.height,
  tier: "balanced",
  replaces_image_url: approvedDraft.image_url,
};
```

Keep the selected result and its request together. It gives the next paid pass
a clear starting point and makes the image choice reviewable.
