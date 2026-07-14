// Buyer job: turn a news article URL into a summary, entities, and sentiment
// in one paid call, instead of chaining scrape + summarize + extract + sentiment
// as four separate requests.
// Endpoint: POST https://x402.agentutility.ai/article-brief (0.04 USDC)
//
//   npm i @x402/fetch @x402/evm viem
//   export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
//   node recipes/compose-workflow/index.mjs

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

const res = await paidFetch("https://x402.agentutility.ai/article-brief", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  }),
});

const data = await res.json();
console.log(data);
