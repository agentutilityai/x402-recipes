// Buyer job: get a cited answer to a question from live web search, in one call.
// Endpoint: POST https://x402.agentutility.ai/answer-web (0.04 USDC)
//
//   npm i @x402/fetch @x402/evm viem
//   export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
//   node recipes/web-answer/index.mjs

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

const res = await paidFetch("https://x402.agentutility.ai/answer-web", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    question: "What is the current base interest rate set by the US Federal Reserve?",
    max_sources: 3,
    recency: "month",
  }),
});

const data = await res.json();
console.log(data);
