# exchange-rates

**Buyer job:** convert an amount or look up an FX rate without an ongoing
data feed contract.

Calls `POST https://x402.agentutility.ai/exchange-rates` — 0.002 USDC per
call. Rates come from the European Central Bank via the Frankfurter API.
Input is `{ base?, quote?, date?, amount? }`; all fields are optional
(`base` defaults to `USD`, `date` defaults to `latest`).

## Run

```bash
npm i @x402/fetch @x402/evm viem
export X402_PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HEX
node index.mjs
```

## Expected output shape

```json
{
  "base": "USD",
  "date": "2026-07-11",
  "rates": { "EUR": 0.92 },
  "source": "European Central Bank (Frankfurter API)"
}
```

Pass a single `quote` currency and an `amount` to also get a converted
value back in the response; omit `quote` to get every available rate for
the base currency.
