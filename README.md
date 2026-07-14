# x402 recipes

Runnable examples for the agentutility x402 API portfolio. Each recipe is a
single Node script that calls a live, paid HTTP endpoint and prints the
result.

## What x402 is

x402 is an HTTP payment protocol: a server replies `402 Payment Required`
with a price, the client signs a USDC payment and retries the same request,
and the server returns the result. There's no account, no API key, and no
subscription — each call is metered and paid for on the spot.

## How pay-per-call works here

1. Your script sends a normal HTTP POST to an endpoint.
2. The server replies `402` with payment details in the `payment-required`
   response header (a bare `{}` body is expected, not an error).
3. A wrapped `fetch` signs a USDC transfer authorization (Base or Solana,
   your choice of wallet), attaches it, and retries.
4. The server settles the payment and returns the actual JSON response.

All of this is handled by `@x402/fetch` — your code only needs a private
key and a URL.

## Flagship endpoints

Base URL: `https://x402.agentutility.ai/<slug>`

| slug | price (USDC) | what it does |
|---|---|---|
| `image-generate` | 0.01 | Text-to-image, four style tiers, returns a hosted PNG URL |
| `exchange-rates` | 0.002 | Latest or historical FX rates from the European Central Bank |
| `translate` | 0.005 | Translate text between 100+ languages, auto-detects source |
| `answer-web` | 0.04 | Answers a question with live web search + cited sources |
| `article-brief` | 0.04 | Scrapes a news URL and returns summary + entities + sentiment in one call |

Full catalog, exact schemas, and current prices: `https://agentutility.ai/registry.json`.

## Running the examples

Each `recipes/<flow>/` directory has one dependency-free-to-read script,
`index.mjs`, using `@x402/fetch`.

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX   # EVM wallet with USDC on Base
node recipes/image-generate/index.mjs
```

The wallet needs USDC on Base (chain 8453) but no ETH — payments settle
through EIP-3009 `transferWithAuthorization`, which is gasless for the buyer.

## The canonical snippet

This is the pattern every recipe in this repo follows:

```bash
npm i @x402/fetch @x402/evm viem
```

```js
import { wrapFetchWithPayment, x402Client } from "@x402/fetch";
import { ExactEvmScheme, toClientEvmSigner } from "@x402/evm";
import { privateKeyToAccount } from "viem/accounts";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const account = privateKeyToAccount(process.env.X402_PRIVATE_KEY);
const signer = toClientEvmSigner(
  account,
  createPublicClient({ chain: base, transport: http("https://mainnet.base.org") }),
);
const client = new x402Client().register("eip155:8453", new ExactEvmScheme(signer));
const paidFetch = wrapFetchWithPayment(fetch, client);

const res = await paidFetch("https://x402.agentutility.ai/cve", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ cve_id: "CVE-2021-44228" }),
});
console.log(await res.json());
```

## Errors

- A bare `402` response with `{}` as the body is normal — it means payment
  is required, not that something broke. The actual price and accepted
  payment methods are base64-encoded in the `payment-required` header.
- A `402` that keeps recurring after `@x402/fetch` should have paid usually
  means the wallet ran out of USDC.
- A `4xx` after settlement means the request body was rejected, not the
  payment. Check the endpoint's schema in `registry.json`.

## MCP instead of raw HTTP

See `recipes/mcp.md` for calling the same endpoints through
`@agentutility/mcp-*` npm packages inside Claude Code or Cursor.
