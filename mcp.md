# Using these capabilities via MCP

Every recipe in this repo also exists as an MCP tool. Instead of writing a
fetch call, you can run one of the `@agentutility/mcp-*` npm packages as a
stdio MCP server and let the payment happen inside the tool call.

Packages are one per cluster, e.g.:

- `@agentutility/mcp-web-probe` — `answer-web` and the rest of the web-probe
  cluster (DNS, WHOIS, scraping, archive lookups, arXiv, HN, Wikipedia)
- `@agentutility/mcp-synthforge` — `image-generate` and the image cluster
- `@agentutility/mcp-edge-finance` — `exchange-rates` and finance data
- `@agentutility/mcp-wordmint` — `translate` and the translation cluster
- `@agentutility/mcp-compose` — `article-brief` and other composite workflows

Full package list: `https://mcp.agentutility.ai`.

## Claude Code / Claude Desktop config

Add to `claude_desktop_config.json` (or your project's `.mcp.json`):

```json
{
  "mcpServers": {
    "agentutility-web-probe": {
      "command": "npx",
      "args": ["-y", "@agentutility/mcp-web-probe"],
      "env": { "X402_PRIVATE_KEY": "0xYOUR_PRIVATE_KEY_HEX" }
    }
  }
}
```

## Cursor config

Add the same block to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "agentutility-web-probe": {
      "command": "npx",
      "args": ["-y", "@agentutility/mcp-web-probe"],
      "env": { "X402_PRIVATE_KEY": "0xYOUR_PRIVATE_KEY_HEX" }
    }
  }
}
```

Restart the client after editing the config. Every tool in that cluster
(`answer-web` included) shows up in the tool palette — no separate API key
setup beyond the one wallet key.

## Funding the wallet

`X402_PRIVATE_KEY` is a hex-encoded EVM private key. Send USDC on Base
mainnet (chain 8453) to the address it derives; the MCP server spends from
that balance automatically as tools get called. No ETH is required —
payments settle through EIP-3009 `transferWithAuthorization`, which is
gasless for the buyer.

USDC on Base contract: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
