# x402 endpoint catalog

Every paid endpoint in the agentutility x402 portfolio, generated straight from the live registry. Call any of them at the URL in its row.

## ai

| Endpoint | Price | What it does |
|---|---|---|
| [`ai-content-detector`](https://x402.agentutility.ai/ai-content-detector) | $0.03 | Detect AI-generated writing with a calibrated probability score. |
| [`ai-to-human-text`](https://x402.agentutility.ai/ai-to-human-text) | $0.01 | Rewrite AI-generated text so it reads like a person wrote it. |
| [`arxiv-summarize`](https://x402.agentutility.ai/arxiv-summarize) | $0.04 | Turn an arXiv paper into a structured research summary without reading the PDF. |
| [`card-resolve`](https://x402.agentutility.ai/card-resolve) | $0.005 | Normalizes free-form graded card text into a canonical card object. |
| [`classify`](https://x402.agentutility.ai/classify) | $0.02 | Sort text into categories you define on the spot, no training run required. |
| [`classify-text`](https://x402.agentutility.ai/classify-text) | $0.02 | Sorts a piece of text into categories you define on the fly, no training or fixed label set required. |
| [`commit-message-from-diff`](https://x402.agentutility.ai/commit-message-from-diff) | $0.01 | Generates a git commit message from a diff in Conventional Commits format. |
| [`cron-explain`](https://x402.agentutility.ai/cron-explain) | $0.002 | Cron expression parser. |
| [`cron-next`](https://x402.agentutility.ai/cron-next) | $0.003 | Tells you exactly when a cron expression fires next. |
| [`cve`](https://x402.agentutility.ai/cve) | $0.005 | Looks up a CVE and returns the full NIST NVD vulnerability record. |
| [`cve-lookup`](https://x402.agentutility.ai/cve-lookup) | $0.005 | Looks up a CVE and returns its canonical NIST NVD record: description, CVSS v3.1 and v2 vectors plus numeric scores, severity bucket, CWE class, affected CPE list, NVD references, and a public-exploit-known boolean with reference URLs. |
| [`db-migration-risk`](https://x402.agentutility.ai/db-migration-risk) | $0.02 | Audits database migrations for risky SQL before deploy. |
| [`dep-risk-summary`](https://x402.agentutility.ai/dep-risk-summary) | $0.03 | Scores dependency risk for a whole repo from its manifests and lockfiles. |
| [`deploy-config-risk`](https://x402.agentutility.ai/deploy-config-risk) | $0.02 | Audits deploy configuration files for production risks. |
| [`describe-image`](https://x402.agentutility.ai/describe-image) | $0.02 | Describes images with a vision LLM across five modes: describe, alt_text (accessibility, <=125 chars), OCR (extract visible text), tags (8-15 keywords), and caption (single-sentence). |
| [`detect-language`](https://x402.agentutility.ai/detect-language) | $0.005 | Identifies what language a piece of text is written in and how confident the call is, returning an ISO 639-1 code, the full language name, and a 0-1 confidence score. |
| [`detect-pii`](https://x402.agentutility.ai/detect-pii) | $0.02 | Detects PII in text: emails, phones, SSNs, credit cards, addresses, names, IPs, and API tokens. |
| [`email-draft`](https://x402.agentutility.ai/email-draft) | $0.02 | Writes emails with AI: subject, body, salutation, and sign-off. 7 tones x 10 email types (cold_outreach, follow_up, decline, reply, internal_update, thank_you, intro, request, apology, general), with length controls. |
| [`extract`](https://x402.agentutility.ai/extract) | $0.02 | Pull structured entities out of raw text instead of hand-parsing it yourself. |
| [`extract-entities`](https://x402.agentutility.ai/extract-entities) | $0.005 | Pulls structured entities out of free text: people, organizations, locations, dates, email addresses, URLs, phone numbers, and monetary amounts, each returned verbatim as it appears in the source so you can locate it again. |
| [`github-repo-health`](https://x402.agentutility.ai/github-repo-health) | $0.03 | Score how healthy and maintained an open-source GitHub repo is. |
| [`hash-string`](https://x402.agentutility.ai/hash-string) | $0.005 | Computes cryptographic hash digests of any input string across five algorithms: sha1, sha256 (default), sha384, sha512, and md5. |
| [`humanize`](https://x402.agentutility.ai/humanize) | $0.01 | Rewrite AI-sounding text so it reads like a person wrote it. |
| [`image-expand`](https://x402.agentutility.ai/image-expand) | $0.15 | Extends a source photo onto a larger canvas, generating realistic new background and content beyond its original edges instead of just stretching or cropping it. |
| [`json-schema-validate`](https://x402.agentutility.ai/json-schema-validate) | $0.003 | Validates any JSON document against any JSON Schema, draft-07 or 2020-12. |
| [`logo-detect`](https://x402.agentutility.ai/logo-detect) | $0.03 | Brand logo detection / brand recognition in images. |
| [`moderate-content`](https://x402.agentutility.ai/moderate-content) | $0.02 | Moderates content for safety, scoring harassment, hate_speech, violence, sexual_content, self_harm, spam, phishing, doxing, illegal_activity, plus custom categories, and returning allow/review/block. |
| [`package-risk-npm`](https://x402.agentutility.ai/package-risk-npm) | $0.03 | Scores supply-chain risk for an npm package before you install it. |
| [`pr-description-from-diff`](https://x402.agentutility.ai/pr-description-from-diff) | $0.01 | Writes a review-ready pull request description from any unified git diff (up to 60k chars). |
| [`prompt-injection-surface`](https://x402.agentutility.ai/prompt-injection-surface) | $0.03 | Scans AI app source code for prompt injection risk at LLM call sites. |
| [`pypi-package-risk`](https://x402.agentutility.ai/pypi-package-risk) | $0.01 | Scores the supply-chain risk of a PyPI package before you install it. |
| [`regex-from-prompt`](https://x402.agentutility.ai/regex-from-prompt) | $0.01 | Builds a regular expression from a plain-English description, targeting PCRE, JavaScript, Python, Go, or RE2. |
| [`regex-test`](https://x402.agentutility.ai/regex-test) | $0.005 | Tests a JavaScript regex against sample inputs and shows exactly what matched. |
| [`remove-bg`](https://x402.agentutility.ai/remove-bg) | $0.08 | Removes the background from an image and returns a foreground cutout with alpha channel. |
| [`resume-scorer`](https://x402.agentutility.ai/resume-scorer) | $0.02 | AI resume scorer / ATS keyword analyzer. |
| [`rewrite-tone`](https://x402.agentutility.ai/rewrite-tone) | $0.02 | Rewrites text in a different tone or writing style. 12 tones: formal, casual, friendly, confident, empathetic, concise, playful, persuasive, apologetic, technical, simple, enthusiastic, with audience and length controls. |
| [`secrets-exposure-check`](https://x402.agentutility.ai/secrets-exposure-check) | $0.02 | Scans project config files for hardcoded secrets before you deploy. |
| [`sentiment`](https://x402.agentutility.ai/sentiment) | $0.01 | Score how positive, negative, or mixed a piece of text reads, down to the emotion level. |
| [`sentiment-analysis`](https://x402.agentutility.ai/sentiment-analysis) | $0.01 | Analyzes sentiment in arbitrary text, returning overall sentiment, a score (-1 to +1), per-emotion labels (joy/anger/sadness/fear/surprise/disgust), and optional aspect-based scoring. |
| [`slugify`](https://x402.agentutility.ai/slugify) | $0.005 | Turns any string into a URL- and identifier-safe slug. |
| [`speaker-diarize`](https://x402.agentutility.ai/speaker-diarize) | $0.10 | Transcribe audio or video and label who said what. |
| [`sql-from-prompt`](https://x402.agentutility.ai/sql-from-prompt) | $0.02 | Turns natural language into SQL for Postgres, MySQL, SQLite, BigQuery, Snowflake, MSSQL, DuckDB, or ANSI. |
| [`summarize`](https://x402.agentutility.ai/summarize) | $0.01 | Condense long text into a tighter summary in the shape you actually need. |
| [`summarize-text`](https://x402.agentutility.ai/summarize-text) | $0.01 | Condense long text into a shorter summary. |
| [`text-to-speech`](https://x402.agentutility.ai/text-to-speech) | $0.05 | Converts text to speech with 30+ voices and 5 audio formats. |
| [`transcribe`](https://x402.agentutility.ai/transcribe) | $0.10 | Convert spoken audio or video into text. |
| [`translate`](https://x402.agentutility.ai/translate) | $0.002 | Translate text between languages with native-sounding output instead of literal word-for-word conversion. |
| [`translate-text`](https://x402.agentutility.ai/translate-text) | $0.01 | Translate text into another language with native-level fluency. |
| [`upscale-image`](https://x402.agentutility.ai/upscale-image) | $0.02 | Upscales images 2x or 4x with AI super-resolution, best for photos and illustrations. |
| [`video-summarize`](https://x402.agentutility.ai/video-summarize) | $0.10 | Summarizes videos, podcasts, and lectures in one call: Whisper v3 transcribes, then Mistral summarizes. 5 styles (tldr, bullets, paragraph, executive, chapters); returns summary + transcript; 60 min max. |
| [`video-to-text`](https://x402.agentutility.ai/video-to-text) | $0.10 | Transcribe any video URL to text with Whisper v3 large. |
| [`voice`](https://x402.agentutility.ai/voice) | $0.05 | Turn written text into spoken audio you can drop straight into a player or app. |
| [`wikipedia`](https://x402.agentutility.ai/wikipedia) | $0.005 | Fetches Wikipedia articles with disambiguation-aware search across 300+ language editions. |
| [`wikipedia-lookup`](https://x402.agentutility.ai/wikipedia-lookup) | $0.005 | Fetches the canonical Wikipedia article for a query (page title or near-title) and returns title, canonical URL, page id, Wikidata Q-id, language, plain-text intro summary, short description, page type, thumbnail and lead-image URLs, geo coordinates, full table-of-contents (sections with level and anchor), and an optional ~25k-char extract of the article body. |

## data

| Endpoint | Price | What it does |
|---|---|---|
| [`building-permits`](https://x402.agentutility.ai/building-permits) | $0.03 | Searches building permits across six US cities for real-estate due diligence: NYC (DOB), San Francisco, Chicago, Los Angeles, Seattle, and Austin. |
| [`patent-search`](https://x402.agentutility.ai/patent-search) | $0.05 | Searches issued US patents and published applications through the USPTO Open Data Portal. |

## developer-tools

| Endpoint | Price | What it does |
|---|---|---|
| [`ipfs-fetch`](https://x402.agentutility.ai/ipfs-fetch) | $0.005 | Fetches IPFS content by CID through public gateways and returns it as base64, UTF-8 text, or parsed JSON. |

## finance

| Endpoint | Price | What it does |
|---|---|---|
| [`insider-form-4`](https://x402.agentutility.ai/insider-form-4) | $0.01 | Tracks SEC Form 4 insider transactions: recent officer, director, and 10%+ beneficial owner trades for a US-listed ticker (or CIK). |
| [`sec-filing`](https://x402.agentutility.ai/sec-filing) | $0.01 | Fetches, parses, and summarizes SEC EDGAR filings for any public company by ticker or CIK. |

## media

| Endpoint | Price | What it does |
|---|---|---|
| [`audio-loudnorm`](https://x402.agentutility.ai/audio-loudnorm) | $0.02 | Normalize audio loudness to a target LUFS level for podcasts, YouTube, and Spotify delivery. |
| [`compress-pdf`](https://x402.agentutility.ai/compress-pdf) | $0.005 | Shrink a PDF's file size without manually tuning compression settings. |
| [`html-to-pdf`](https://x402.agentutility.ai/html-to-pdf) | $0.08 | Render a live webpage as a PDF document. |
| [`image-convert`](https://x402.agentutility.ai/image-convert) | $0.01 | Convert an image from one format to another. |
| [`mp4-to-mp3`](https://x402.agentutility.ai/mp4-to-mp3) | $0.02 | Converts MP4, MOV, WebM, MKV, AVI, M4V, and FLV video files to MP3 via CloudConvert, with selectable bitrate (96/128/192 kbps). 60-min / 500MB max. |
| [`office-to-pdf`](https://x402.agentutility.ai/office-to-pdf) | $0.05 | Converts office documents and other file formats into PDF from a URL, no upload step required. |
| [`pdf-merge`](https://x402.agentutility.ai/pdf-merge) | $0.01 | Joins multiple PDF files, hosted at URLs, into a single ordered document, so you don't have to merge them by hand in a desktop PDF editor. |
| [`pdf-split`](https://x402.agentutility.ai/pdf-split) | $0.04 | Split a PDF into multiple files by page range or one file per page. |
| [`pdf-to-jpg`](https://x402.agentutility.ai/pdf-to-jpg) | $0.10 | Convert a PDF into page images for previews, thumbnails, or archiving. |
| [`screenshot`](https://x402.agentutility.ai/screenshot) | $0.04 | Turn any public URL into a PNG or JPG image on demand. |
| [`subtitles`](https://x402.agentutility.ai/subtitles) | $0.08 | Generate ready-to-use subtitle files from a video or audio URL. |
| [`video-thumbnail`](https://x402.agentutility.ai/video-thumbnail) | $0.03 | Pull a single still frame out of a video without transcoding the whole file. |
| [`video-to-subtitles`](https://x402.agentutility.ai/video-to-subtitles) | $0.02 | Generates subtitles from video with Whisper v3, word-wrapped and ready for VLC / Premiere / FFmpeg. |
| [`video-trim`](https://x402.agentutility.ai/video-trim) | $0.02 | Cuts a clip out of a source video by start and end point, so you don't need a video editor to pull a highlight or shorten a file. |
| [`watermark`](https://x402.agentutility.ai/watermark) | $0.02 | Adds a text or image watermark overlay to PDFs, PNG/JPG/GIF images, and MP4/MOV/WEBM videos. |
| [`website-screenshot`](https://x402.agentutility.ai/website-screenshot) | $0.04 | Capture a screenshot of any live URL and get back a hosted PNG or JPG. |

## security

| Endpoint | Price | What it does |
|---|---|---|
| [`production-readiness-score`](https://x402.agentutility.ai/production-readiness-score) | $0.10 | Composite: one call runs secrets-exposure-check, deploy-config-risk, db-migration-risk, dep-risk-summary, and prompt-injection-surface in parallel and rolls the results into one production-readiness verdict for a repo. |

## uncategorized

| Endpoint | Price | What it does |
|---|---|---|
| [`13f-deltas`](https://x402.agentutility.ai/13f-deltas) | $0.05 | Tracks what an institutional manager bought and sold each quarter by diffing their 13F filings, e.g. what did Buffett buy this quarter. |
| [`ability-check`](https://x402.agentutility.ai/ability-check) | $0.005 | Resolves a d20 ability check, skill check, attack roll, or saving throw for tabletop RPGs. |
| [`accounts-receivable-aging-score`](https://x402.agentutility.ai/accounts-receivable-aging-score) | $0.01 | Scores the health of an accounts receivable book from its aging profile, returning a weighted score and grade. |
| [`address-intel-pack`](https://x402.agentutility.ai/address-intel-pack) | $0.03 | Enriches a street address in one call: parse, geocode, timezone, and building permits. |
| [`address-parse`](https://x402.agentutility.ai/address-parse) | $0.005 | Parses a freeform US street address into components: number, street, unit, city, state, and zip. |
| [`agent-card-resolve`](https://x402.agentutility.ai/agent-card-resolve) | $0.005 | Resolves an ERC-8004 agentId to its on-chain owner, agentURI, and agent card JSON. |
| [`agent-input-guard`](https://x402.agentutility.ai/agent-input-guard) | $0.04 | One guardrail call an agent makes before trusting untrusted inbound text — a scraped webpage, an email, a tool result, or a user message. |
| [`agent-prelaunch-audit`](https://x402.agentutility.ai/agent-prelaunch-audit) | $0.08 | Ship-readiness check before you push an AI app live: agent due diligence and prelaunch audit in one call instead of six. |
| [`agent-run-review`](https://x402.agentutility.ai/agent-run-review) | $0.06 | Agent run review / trace cost evals / post-run analysis / agent debugging in one call: hand it a raw agent execution trace and get a readable brief of what happened, a cost estimate for the run, and a first draft of regression eval cases to catch the same failure next time. |
| [`agent-trace-brief`](https://x402.agentutility.ai/agent-trace-brief) | $0.02 | Turns a raw agent execution trace into a readable agent trace summary: an ordered step-by-step account of what the agent did, where it broke, and why. |
| [`ai-image-detector`](https://x402.agentutility.ai/ai-image-detector) | $0.02 | AI-generated image detector: send an image URL and get back a calibrated probability that the image is AI-generated or synthetic, plus the vision signals behind the score — anatomical artifacts (hands, teeth, eyes), garbled pseudo-text, over-smooth texture, lighting/shadow inconsistency, background incoherence, and an over-stylized 'AI look'. |
| [`air-quality`](https://x402.agentutility.ai/air-quality) | $0.005 | Returns current air quality readings and AQI category for any latitude/longitude, with optional hourly forecast rows for the next 1-72 hours. |
| [`airport-delays`](https://x402.agentutility.ai/airport-delays) | $0.02 | Reports live US airport delays, ground stops, and closures from the FAA National Airspace System Status feed. |
| [`answer-web`](https://x402.agentutility.ai/answer-web) | $0.04 | Answers natural-language questions with live web research, returning a synthesized answer with inline [N] citations and the source URLs. |
| [`app-store-rejection-explain`](https://x402.agentutility.ai/app-store-rejection-explain) | $0.02 | Explains App Store and Google Play rejections and turns them into a resubmission plan. |
| [`arbitrage-spread`](https://x402.agentutility.ai/arbitrage-spread) | $0.005 | Finds the cross-exchange arbitrage spread for any CoinGecko-listed coin. |
| [`article-brief`](https://x402.agentutility.ai/article-brief) | $0.04 | Analyzes a news article from its URL into a summary, named entities, and sentiment in one call. |
| [`arxiv-bibtex`](https://x402.agentutility.ai/arxiv-bibtex) | $0.005 | Turns an arXiv paper into a BibTeX entry: pulls title, authors, year, abstract, and DOI from the arXiv API and generates a properly-formatted BibTeX entry with an auto-derived cite key (or your own). |
| [`arxiv-search`](https://x402.agentutility.ai/arxiv-search) | $0.03 | Search arXiv's full paper catalog by query, author, category, or a specific id-list and get back structured results instead of scraping HTML. |
| [`asset-based-lending-score`](https://x402.agentutility.ai/asset-based-lending-score) | $0.01 | Scores the risk of an asset based lending (ABL) facility, returning a weighted score and grade. |
| [`astro-times`](https://x402.agentutility.ai/astro-times) | $0.005 | Sunrise sunset times. |
| [`audio-brief`](https://x402.agentutility.ai/audio-brief) | $0.07 | Transcribes and digests any audio URL in one call: transcript, summary, and sentiment. |
| [`audio-transcribe`](https://x402.agentutility.ai/audio-transcribe) | $0.01 | Transcribes audio to text with whisper-large-v3. |
| [`authentic-sentiment`](https://x402.agentutility.ai/authentic-sentiment) | $0.06 | Authentic sentiment API: send a topic, brand, handle, or phrase and get back sentiment from real humans, not bots or AI astroturf. |
| [`b2b-lead-enrich`](https://x402.agentutility.ai/b2b-lead-enrich) | $0.01 | Enriches B2B leads from caller-supplied email/name/domain/company into a public-data profile with inferred name, company, domain, MX records, and homepage context. |
| [`background-gen`](https://x402.agentutility.ai/background-gen) | $0.005 | Character background generator API / personality trait, ideal, bond, flaw generator for tabletop RPGs. |
| [`basename-resolve`](https://x402.agentutility.ai/basename-resolve) | $0.005 | Resolves Coinbase Basenames (.base.eth) to Ethereum addresses and back, reading the Base mainnet L2 Resolver on-chain (no gas, no wallet). |
| [`bestiary-random`](https://x402.agentutility.ai/bestiary-random) | $0.01 | Returns a random creature with a short encyclopedia entry and a fun fact. |
| [`blended-finance-score`](https://x402.agentutility.ai/blended-finance-score) | $0.01 | Scores a blended finance structure on how efficiently concessional capital mobilizes private money, returning a 0-100 structure score. |
| [`bls-occupational-stats`](https://x402.agentutility.ai/bls-occupational-stats) | $0.02 | Pull wage, employment level, and growth data straight from the Bureau of Labor Statistics Public Data API by series ID, covering formats like OEWS occupational wages (OEUM...), local-area unemployment (LAU...), and CES employment series. |
| [`brand-availability-sweep`](https://x402.agentutility.ai/brand-availability-sweep) | $0.06 | Brand availability sweep API for a name availability check before you commit to a startup, product, or project name: trademark signal, domain availability, X/Twitter handle availability, brandable alternative names, and a brandability score in one call. |
| [`brand-bootstrap`](https://x402.agentutility.ai/brand-bootstrap) | $0.01 | Bootstraps a brand kit for a new business or product in one call. |
| [`brand-clearance`](https://x402.agentutility.ai/brand-clearance) | $0.25 | Screens a candidate brand name across trademark, domain, and web-presence checks in a single composite signal. |
| [`brand-launch-brief`](https://x402.agentutility.ai/brand-launch-brief) | $0.01 | Generates a structured brand launch brief for a new company or product from name, concept, audience, and tone. |
| [`brand-name-generator`](https://x402.agentutility.ai/brand-name-generator) | $0.05 | Generates brand name candidates and returns ranked names, slugs, rationale, checked TLDs, and availability counts. |
| [`brand-name-score`](https://x402.agentutility.ai/brand-name-score) | $0.005 | Scores a candidate brand or startup name on quality and risk. |
| [`brand-positioning-brief`](https://x402.agentutility.ai/brand-positioning-brief) | $0.01 | Generates a brand positioning brief covering messaging pillars, taglines, launch channels, and a logo prompt. |
| [`brand-presence-report`](https://x402.agentutility.ai/brand-presence-report) | $0.10 | Screens a brand or startup name in one call: domain availability, social handle, clearance signals, and lookalike risk. |
| [`brand-tagline`](https://x402.agentutility.ai/brand-tagline) | $0.005 | Generates brand taglines and slogans for launch pages, X bios, email copy, and product cards. |
| [`brand-tagline-generate`](https://x402.agentutility.ai/brand-tagline-generate) | $0.005 | Generates tagline options for a brand or startup from its name, concept, audience, and tone. |
| [`break-even-calculator`](https://x402.agentutility.ai/break-even-calculator) | $0.01 | Calculates break-even units and contribution margin for a product's unit economics. |
| [`bridge-rates`](https://x402.agentutility.ai/bridge-rates) | $0.03 | Compares cross-chain bridge quotes to find the cheapest route between chains, powered by LiFi. |
| [`browser-flow-digest`](https://x402.agentutility.ai/browser-flow-digest) | $0.02 | Browser flow digest API that compresses a recorded trajectory or trace into reusable workflow memory: an ordered step list, the preconditions each step assumes, and failure hints for anything that broke or looked fragile. |
| [`browser-session`](https://x402.agentutility.ai/browser-session) | $0.03 | Loads a URL in a real headless browser with JavaScript executed, then returns the rendered HTML and page title, or a base64 screenshot. |
| [`browser-workflow-repair`](https://x402.agentutility.ai/browser-workflow-repair) | $0.06 | Browser workflow repair / self-healing automation / dom drift fix / flow memory in one call for agents whose CSS selectors broke after a page redeploy. |
| [`business-name-generator`](https://x402.agentutility.ai/business-name-generator) | $0.05 | Generates business name ideas: brainstorms short brandable candidates for a concept, checks TLD availability, and ranks by available domains plus brandability score. |
| [`caption-translate-pack`](https://x402.agentutility.ai/caption-translate-pack) | $0.07 | Generates translated subtitles from any video URL in one call. |
| [`character-gen`](https://x402.agentutility.ai/character-gen) | $0.005 | Generates a complete D&D 5e-style character, from ability scores to a procedurally generated name. |
| [`character-portrait`](https://x402.agentutility.ai/character-portrait) | $0.08 | Generates an RPG character portrait from structured inputs and returns a hosted PNG URL. |
| [`citation-verify`](https://x402.agentutility.ai/citation-verify) | $0.01 | Verifies whether a claim is actually supported by a source URL. |
| [`civic-meeting-brief`](https://x402.agentutility.ai/civic-meeting-brief) | $0.015 | Civic meeting brief for turning a raw council or board agenda or minutes document into a scannable summary of what actually happened. |
| [`claim-corroborate`](https://x402.agentutility.ai/claim-corroborate) | $0.05 | Fact check a claim and see exactly who agrees and who disagrees. |
| [`class-lookup`](https://x402.agentutility.ai/class-lookup) | $0.003 | Looks up a D&D 5e class by name for its SRD reference details. |
| [`clean-text-pack`](https://x402.agentutility.ai/clean-text-pack) | $0.03 | Sanitizes raw text in one call: Unicode normalization, homoglyph audit, PII detection, and PII redaction. |
| [`climate-data`](https://x402.agentutility.ai/climate-data) | $0.005 | Returns historical daily temperature, precipitation, humidity, wind, and solar radiation for any latitude/longitude. |
| [`commercial-real-estate-loan-score`](https://x402.agentutility.ai/commercial-real-estate-loan-score) | $0.01 | Scores a commercial real estate (CRE) loan for underwriting, returning a weighted score and grade. |
| [`commodity-brief`](https://x402.agentutility.ai/commodity-brief) | $0.05 | Market brief for a commodity: recency-scoped web search headlines on price/supply/demand plus a structured research brief with overview, key facts, and recent news with source citations, in one call. |
| [`company-dossier`](https://x402.agentutility.ai/company-dossier) | $0.05 | Builds a company research dossier in one call: firmographic profile, domain intelligence, WHOIS registration, TLS, and tech stack. |
| [`company-enrich`](https://x402.agentutility.ai/company-enrich) | $0.01 | Enrich a company from its domain or an email address. |
| [`company-intel-pack`](https://x402.agentutility.ai/company-intel-pack) | $0.08 | Company research bundle for B2B enrichment agents: firmographic profile, domain intelligence, WHOIS registration, TLS posture, tech stack, email authentication (DMARC/SPF/DKIM), and recent news in one call. |
| [`company-name-score`](https://x402.agentutility.ai/company-name-score) | $0.005 | Scores the quality of a company name before you commit to domain, handle, trademark, and launch work. |
| [`company-verify-pack`](https://x402.agentutility.ai/company-verify-pack) | $0.04 | Checks that a company exists and its public signals are consistent, in one call: profile, registrar, domain age, and TLS. |
| [`competitor-snapshot`](https://x402.agentutility.ai/competitor-snapshot) | $0.06 | Snapshots a company for competitive intelligence in one call: profile, recent news, and news sentiment. |
| [`condition-lookup`](https://x402.agentutility.ai/condition-lookup) | $0.003 | D&D 5e condition lookup API / SRD conditions reference (blinded, grappled, prone, stunned, etc.). |
| [`contact-enrich`](https://x402.agentutility.ai/contact-enrich) | $0.01 | Enriches a contact from email, name, domain, or company into a normalized public-data record with inferred display name, company/domain context, MX records, and optional homepage metadata. |
| [`contact-golden-record`](https://x402.agentutility.ai/contact-golden-record) | $0.06 | Turn 2-5 messy candidate contact records into one deduplicated golden record with per-field provenance. |
| [`contact-normalize-pack`](https://x402.agentutility.ai/contact-normalize-pack) | $0.03 | Normalizes a contact record in one call, generating stable match keys for email, name, phone, and address plus parsed US address components. |
| [`content-authenticity-report`](https://x402.agentutility.ai/content-authenticity-report) | $0.06 | Content authenticity report: send a URL (or raw text) and find out whether a page is AI-generated slop before your agent cites, summarizes, or acts on it. |
| [`content-quality-pack`](https://x402.agentutility.ai/content-quality-pack) | $0.04 | Runs the standard pre-publish content checks on text in one call: AI-detection, PII scan, moderation, and sentiment. |
| [`content-simhash`](https://x402.agentutility.ai/content-simhash) | $0.005 | Fingerprints text with a 64-bit SimHash for near-duplicate detection, computed entirely locally. |
| [`content-trust-check`](https://x402.agentutility.ai/content-trust-check) | $0.05 | Trust screen for a block of text in one call: is it AI-generated, is it safe (content moderation), and is it a near-duplicate of a reference page, plus a deterministic 0-100 trust score rolling all three up. |
| [`contract-source-verified`](https://x402.agentutility.ai/contract-source-verified) | $0.01 | Fetches verified contract source code and ABI for a deployed contract on Ethereum, Optimism, Polygon, Base, or Arbitrum. |
| [`contract-terms-brief`](https://x402.agentutility.ai/contract-terms-brief) | $0.05 | Pull SLA terms, named entities, PII flags, and a plain-language summary out of a contract or policy document in one call. |
| [`contract-trust-pack`](https://x402.agentutility.ai/contract-trust-pack) | $0.04 | Gathers smart-contract due-diligence data in one call: source verification, honeypot simulation, and LP lock check. |
| [`country-info`](https://x402.agentutility.ai/country-info) | $0.005 | Country info lookup. |
| [`country-risk-monitor`](https://x402.agentutility.ai/country-risk-monitor) | $0.08 | Re-runnable country monitor: recency-scoped web search headlines, any live Polymarket prediction markets referencing the country (data-only, no trading), and a structured research brief, in one call. |
| [`course-study-kit`](https://x402.agentutility.ai/course-study-kit) | $0.05 | Turn a course syllabus into a study kit in one call: a parsed outline, a sequenced reading/study plan, flashcards, and a bullet summary. |
| [`crates-io-stats`](https://x402.agentutility.ai/crates-io-stats) | $0.003 | Fetches the public crates.io API record for a Rust crate and returns description, license, repository, homepage, documentation, keywords, categories, latest stable version, total version count, recent versions with yanked flags + crate_size + Rust edition + MSRV, age in days, days_since_last_release, and all-time + recent-90d downloads. |
| [`creature-compare`](https://x402.agentutility.ai/creature-compare) | $0.01 | Compares any two creatures head-to-head and reasons out who would win. |
| [`creature-identify`](https://x402.agentutility.ai/creature-identify) | $0.01 | Identifies a creature from a description, set of clues, or half-remembered details. |
| [`creature-image`](https://x402.agentutility.ai/creature-image) | $0.08 | Renders any creature as an image and returns a hosted PNG URL. |
| [`creature-kit`](https://x402.agentutility.ai/creature-kit) | $0.09 | Generates a complete creature kit in one call: an original 5e-style stat block plus a rendered image of the creature. |
| [`creature-lore`](https://x402.agentutility.ai/creature-lore) | $0.01 | An encyclopedia of creatures, monsters, spirits, and beings from any world or source. |
| [`creature-statblock`](https://x402.agentutility.ai/creature-statblock) | $0.01 | Turns any creature from any world, book, film, game, myth, or song into an original, playable 5e-style stat block. |
| [`cron-pack`](https://x402.agentutility.ai/cron-pack) | $0.02 | Parses, explains, and forecasts a cron expression in one call. |
| [`cron-parse`](https://x402.agentutility.ai/cron-parse) | $0.005 | Cron parser. |
| [`cross-border-ops-brief`](https://x402.agentutility.ai/cross-border-ops-brief) | $0.05 | Cross-border operating brief for a country: the FX rate, country profile, visa requirements, upcoming public holidays, and current local time an agent needs before transacting or scheduling internationally. |
| [`cross-lingual-topic-monitor`](https://x402.agentutility.ai/cross-lingual-topic-monitor) | $0.06 | Monitor a topic across non-English sources in one call: search the open web and X, detect what language each hit is actually in, translate it into your target language, and score sentiment on the translated text. |
| [`crypto-news`](https://x402.agentutility.ai/crypto-news) | $0.005 | Crypto news API that searches recent cryptocurrency headlines for a topic, token, protocol, or market event. |
| [`crypto-news-brief`](https://x402.agentutility.ai/crypto-news-brief) | $0.03 | Daily crypto news digest for a topic: today's headlines plus a structured research brief with overview, key facts, and recent news with source citations, in one call. |
| [`crypto-signal-scan`](https://x402.agentutility.ai/crypto-signal-scan) | $0.05 | Structured, informational signal brief for a token or crypto topic: X/Twitter sentiment, recent web coverage, and (when a fiat quote currency is supplied) a current exchange-rate reference, in one call. |
| [`crypto-tx-explainer`](https://x402.agentutility.ai/crypto-tx-explainer) | $0.04 | Explain what actually happened in an on-chain transaction on Ethereum, Base, Arbitrum, Optimism, or Polygon by sending its tx_hash. |
| [`cyber-exposure-brief`](https://x402.agentutility.ai/cyber-exposure-brief) | $0.08 | External exposure summary for a domain: DNS records, the hosting network/ASN behind the resolved IP, TLS certificate posture, and a web search for public breach/exposure mentions, in one call. |
| [`dao-proposal-monitor`](https://x402.agentutility.ai/dao-proposal-monitor) | $0.03 | Monitors DAO governance proposals on Snapshot.org for any space. |
| [`dcf-valuation-calculator`](https://x402.agentutility.ai/dcf-valuation-calculator) | $0.01 | Runs a discounted cash flow (DCF) valuation to get enterprise value, equity value, and value per share. |
| [`defi-llama-protocol`](https://x402.agentutility.ai/defi-llama-protocol) | $0.02 | Looks up any DeFi protocol's TVL and metadata from DefiLlama. |
| [`defi-protocol-dossier`](https://x402.agentutility.ai/defi-protocol-dossier) | $0.04 | Profiles a DeFi protocol's TVL and yield pools in one call using DeFiLlama data. |
| [`defi-yield-pools`](https://x402.agentutility.ai/defi-yield-pools) | $0.005 | Filters and ranks thousands of DeFi yield-bearing pools by APY across every chain DeFiLlama tracks. |
| [`dependency-provenance`](https://x402.agentutility.ai/dependency-provenance) | $0.06 | Dependency risk and supply chain trust for one package in a single call: registry adoption stats, a package risk score, source repo health and star velocity, auto-routed to the right ecosystem. |
| [`destination-arrival-pack`](https://x402.agentutility.ai/destination-arrival-pack) | $0.05 | On-arrival brief for a city or airport: this is the arrival pack, destination brief, and local conditions check a travel agent pulls right after landing. |
| [`dex-liquidity-depth`](https://x402.agentutility.ai/dex-liquidity-depth) | $0.01 | Measures DEX liquidity depth by summing TVL across every DefiLlama-tracked yield pool holding a given ERC-20 on Ethereum, Base, Polygon, Arbitrum, or Optimism. |
| [`dice-roll`](https://x402.agentutility.ai/dice-roll) | $0.005 | Rolls dice from standard dice notation for tabletop RPGs. |
| [`dice-stats`](https://x402.agentutility.ai/dice-stats) | $0.005 | Calculates the probability distribution of a dice roll, anydice-style. |
| [`dictionary-define`](https://x402.agentutility.ai/dictionary-define) | $0.005 | Looks up English word definitions with pronunciation, part of speech, and synonyms. |
| [`doc-brief`](https://x402.agentutility.ai/doc-brief) | $0.05 | Digests a public PDF in one call: layout-aware markdown, an executive summary, and named entities. |
| [`doc-to-json`](https://x402.agentutility.ai/doc-to-json) | $0.10 | Converts any document (PDF, DOCX, PPT, XLSX, or image) into structured JSON matching a caller-supplied schema. |
| [`document-extract-suite`](https://x402.agentutility.ai/document-extract-suite) | $0.07 | Turn a PDF URL into structured data in one call: this pdf extraction suite pulls markdown text, tables, named entities, PII flags, and a summary without five separate requests. |
| [`dom-change-diff`](https://x402.agentutility.ai/dom-change-diff) | $0.01 | DOM diff for two HTML snapshots of the same page or component, built for browser-automation scripts whose CSS selectors quietly break after a site redesign. |
| [`domain-availability`](https://x402.agentutility.ai/domain-availability) | $0.005 | Checks whether a domain is registered and returns registrar, registration date, expiry date, days_until_expiry, and current EPP status flags. |
| [`domain-dossier`](https://x402.agentutility.ai/domain-dossier) | $0.04 | Builds a full domain report in one call: WHOIS, DNS, TLS, age, risk, and DMARC. |
| [`domain-enrich`](https://x402.agentutility.ai/domain-enrich) | $0.01 | Enrich any domain, website URL, or email into company facts. |
| [`domain-name-generator`](https://x402.agentutility.ai/domain-name-generator) | $0.05 | Generates domain name ideas: brainstorms domain-friendly names from a concept and checks RDAP availability across allowed TLDs. |
| [`domain-suggest`](https://x402.agentutility.ai/domain-suggest) | $0.05 | Suggests short brandable domain candidates for a concept and verifies which are actually available. |
| [`domain-threat-report`](https://x402.agentutility.ai/domain-threat-report) | $0.08 | Domain threat report API for a security investigation on any domain: is this a phishing domain, a lookalike squat, or a legitimate registration? |
| [`dungeon-room`](https://x402.agentutility.ai/dungeon-room) | $0.005 | Generates a random dungeon room for game masters: shape, contents, a notable feature, a hazard, an occupant, and the number of exits. |
| [`duplicate-ticket-detect`](https://x402.agentutility.ai/duplicate-ticket-detect) | $0.008 | Checks a new support ticket against a batch of existing ones and ranks which are likely the same issue, so you can merge or link duplicates before they get worked twice. |
| [`earnings-calendar`](https://x402.agentutility.ai/earnings-calendar) | $0.03 | Finds a company's next earnings date and its recent earnings-related SEC filings. |
| [`earnings-call-transcribe`](https://x402.agentutility.ai/earnings-call-transcribe) | $0.03 | Transcribes a company earnings call from its publicly posted investor-relations webcast or replay audio URL, then optionally turns that transcript into a structured summary. |
| [`earnings-transcript`](https://x402.agentutility.ai/earnings-transcript) | $0.03 | Earnings call transcript generator. |
| [`earthquakes-recent`](https://x402.agentutility.ai/earthquakes-recent) | $0.003 | Returns recent earthquakes from USGS for any time window (hour, day, week, month) above a magnitude threshold. |
| [`email`](https://x402.agentutility.ai/email) | $0.005 | Validates an email address end to end: syntax, MX reachability, disposable/temp-mail domains, role accounts, and SPF/DMARC/DKIM posture. |
| [`email-deliverability-check`](https://x402.agentutility.ai/email-deliverability-check) | $0.005 | Checks whether an email address is likely to be deliverable and how risky it looks. |
| [`email-trust-report`](https://x402.agentutility.ai/email-trust-report) | $0.03 | Vets an email address in one call: deliverability, disposable check, DMARC posture, and a dedupe key. |
| [`embedded-finance-score`](https://x402.agentutility.ai/embedded-finance-score) | $0.01 | Scores an embedded lending, payments, or wallet program on integration quality and risk, returning a 0-100 score. |
| [`embedding-similarity`](https://x402.agentutility.ai/embedding-similarity) | $0.005 | Measures how semantically similar two strings are: embeds both via Venice (default model: text-embedding-bge-m3) and returns the cosine similarity as a single float in [-1, 1]. |
| [`emergency-fund-calculator`](https://x402.agentutility.ai/emergency-fund-calculator) | $0.01 | Calculates your emergency fund target and how long reaching it will take at your current savings pace. |
| [`encounter-builder`](https://x402.agentutility.ai/encounter-builder) | $0.005 | Encounter builder / encounter difficulty calculator API for D&D 5e. |
| [`entity-knowledge-card`](https://x402.agentutility.ai/entity-knowledge-card) | $0.05 | Entity knowledge card API for entity resolution and entity enrich: send a name (person, place, organization, or concept) and get back a structured knowledge graph profile plus a readable summary in one call. |
| [`equipment-finance-score`](https://x402.agentutility.ai/equipment-finance-score) | $0.01 | Scores the risk of an equipment loan or lease, returning a weighted score and grade. |
| [`equipment-lookup`](https://x402.agentutility.ai/equipment-lookup) | $0.003 | Looks up D&D 5e weapons and armor from the SRD by name. |
| [`erc20-balance`](https://x402.agentutility.ai/erc20-balance) | $0.005 | Reads an ERC-20 token balance on-chain across any supported EVM chain, including Base, Ethereum, Arbitrum, Optimism, and Polygon. |
| [`erc20-metadata`](https://x402.agentutility.ai/erc20-metadata) | $0.005 | Reads ERC-20 token metadata: name(), symbol(), decimals(), and totalSupply() in parallel via public RPC on Base, Ethereum, Arbitrum, Optimism, Polygon, BSC, and Avalanche. |
| [`escalation-brief`](https://x402.agentutility.ai/escalation-brief) | $0.015 | Turns a messy support thread into a short handoff brief the next person can act on in seconds instead of re-reading the whole conversation. |
| [`esg-company-scan`](https://x402.agentutility.ai/esg-company-scan) | $0.08 | Summary of a company's publicly reported ESG posture: a web search scoped to sustainability/emissions/labor/governance coverage plus a structured research brief with overview, key facts, and recent news with source citations, in one call. |
| [`eth-logs`](https://x402.agentutility.ai/eth-logs) | $0.01 | Reads on-chain event logs with generic eth_getLogs queries across Base, Ethereum, Arbitrum, Optimism, Polygon, and BSC via public no-auth RPC. |
| [`eval-case-generate`](https://x402.agentutility.ai/eval-case-generate) | $0.02 | Eval case generator for an agent or LLM task: describe the task and get back a draft llm eval dataset of {input, expected, rubric} cases spanning typical, edge, and adversarial scenarios. |
| [`excel-to-csv`](https://x402.agentutility.ai/excel-to-csv) | $0.005 | Converts Excel workbooks (.xlsx / .xls) to CSV, TSV, or JSON with multi-sheet handling, returning each sheet by name. |
| [`exchange-rates`](https://x402.agentutility.ai/exchange-rates) | $0.002 | Exchange rates. |
| [`fda-calendar`](https://x402.agentutility.ai/fda-calendar) | $0.03 | Tracks upcoming FDA Advisory Committee (AdComm) meetings, a catalyst calendar for biotech. |
| [`fec-political-contributions`](https://x402.agentutility.ai/fec-political-contributions) | $0.04 | Searches FEC records of political donations to federal candidates, PACs, and super PACs to see who donated to whom. |
| [`filing-financials-brief`](https://x402.agentutility.ai/filing-financials-brief) | $0.07 | Get an SEC filing brief in one call instead of stitching three EDGAR lookups together: the filing itself, its XBRL financials, and a plain-language filing summary. |
| [`flight-brief`](https://x402.agentutility.ai/flight-brief) | $0.03 | Reports live flight status with FAA airport delays and airport info in one call. |
| [`flight-status`](https://x402.agentutility.ai/flight-status) | $0.01 | Tracks live aircraft positions from the OpenSky Network. |
| [`form-fill-plan`](https://x402.agentutility.ai/form-fill-plan) | $0.02 | Form fill plan API that turns an HTML form plus a plain-language goal into an ordered browser form automation plan: selector, field label, value, and action (fill/select/check/uncheck/click) for each step. |
| [`funding-rates`](https://x402.agentutility.ai/funding-rates) | $0.005 | Returns perp funding rates for any Binance USD-M futures symbol (BTCUSDT, ETHUSDT, SOLUSDT...): current funding %, mark + index price, next funding timestamp, and the last 24 funding intervals (default 24 x 1h-since-event). |
| [`game-preview-brief`](https://x402.agentutility.ai/game-preview-brief) | $0.05 | Neutral pregame brief for a matchup: recent results and upcoming schedule for the named teams from a major-league schedule feed, plus recent news/X coverage, in one call. |
| [`github-readme`](https://x402.agentutility.ai/github-readme) | $0.005 | Fetches the raw README markdown for any public GitHub repository via the official GitHub REST API, no auth required for public repos. |
| [`github-stars-history`](https://x402.agentutility.ai/github-stars-history) | $0.005 | Tracks GitHub stars history: current star count plus a sampled cumulative-stars-vs-date series for any public GitHub repo. |
| [`grant-finder`](https://x402.agentutility.ai/grant-finder) | $0.05 | Structured grant and funding-opportunity finder for a field and region: live federal opportunities from grants.gov's index plus a cited, synthesized web answer covering broader, international, or private funding grants.gov doesn't index, in one call. |
| [`grant-lookup`](https://x402.agentutility.ai/grant-lookup) | $0.015 | Grant lookup and federal funding opportunities search for agents scouting money on the table for nonprofits, small businesses, researchers, and local governments. |
| [`grounded-answer-check`](https://x402.agentutility.ai/grounded-answer-check) | $0.06 | Answer a question and grade how well the answer actually holds up against independent sources, in one call. |
| [`handle-availability`](https://x402.agentutility.ai/handle-availability) | $0.005 | Checks whether a social handle is available on X and returns public profile metrics when it is already claimed. |
| [`hn-search`](https://x402.agentutility.ai/hn-search) | $0.001 | Searches 30M+ Hacker News stories and comments via the public Algolia HN index. |
| [`holiday-lookup`](https://x402.agentutility.ai/holiday-lookup) | $0.005 | Holiday calendar. |
| [`html-to-markdown`](https://x402.agentutility.ai/html-to-markdown) | $0.005 | Convert HTML to Markdown. |
| [`hyperliquid-market`](https://x402.agentutility.ai/hyperliquid-market) | $0.001 | Looks up active Hyperliquid markets with mark price, size decimals, max leverage, and margin table id from Hyperliquid's public info API. |
| [`hyperliquid-perps`](https://x402.agentutility.ai/hyperliquid-perps) | $0.005 | Returns Hyperliquid perps market data: active markets, mark prices, size decimals, max leverage, and margin table ids. |
| [`iata-airport-info`](https://x402.agentutility.ai/iata-airport-info) | $0.005 | Looks up airport metadata from an IATA or ICAO code. |
| [`image-asset-pipeline`](https://x402.agentutility.ai/image-asset-pipeline) | $0.08 | Turns a text prompt into a production-ready image asset in one call: generate, sharpen, cut out the background. |
| [`image-caption-localize`](https://x402.agentutility.ai/image-caption-localize) | $0.04 | Captions an image and translates the caption into any of 100+ languages in one call. |
| [`image-edit`](https://x402.agentutility.ai/image-edit) | $0.02 | Edits an image from a plain-text instruction, mask-free: describe the change and the model applies it to the whole image. |
| [`image-format-convert`](https://x402.agentutility.ai/image-format-convert) | $0.01 | Image converter. |
| [`image-generate`](https://x402.agentutility.ai/image-generate) | $0.01 | Generate an image from text in under 5 seconds. |
| [`image-generate-localize`](https://x402.agentutility.ai/image-generate-localize) | $0.04 | Generates an image from a text prompt and returns a localized caption to go with it in one call. |
| [`image-generate-pro`](https://x402.agentutility.ai/image-generate-pro) | $0.06 | Premium text-to-image generation across margin-safe Venice models at a competitive $0.06/call. |
| [`image-generate-ultra`](https://x402.agentutility.ai/image-generate-ultra) | $0.22 | Flagship text-to-image generation for top proprietary Venice models that fit a $0.22 retail price. |
| [`image-inpaint`](https://x402.agentutility.ai/image-inpaint) | $0.02 | Inpaints an image by replacing the masked region with content matching a text prompt. |
| [`image-intel-pack`](https://x402.agentutility.ai/image-intel-pack) | $0.04 | Analyzes an image in one call: description, brand logo detection, and content moderation. |
| [`image-to-video`](https://x402.agentutility.ai/image-to-video) | $0.50 | Animates a still image into video via fal.ai Bytedance Seedance. |
| [`image-translate`](https://x402.agentutility.ai/image-translate) | $0.02 | Image translator. |
| [`image-upscale`](https://x402.agentutility.ai/image-upscale) | $0.02 | Upscales an image 2x or 4x via Venice's image/upscale endpoint (default model: venice-sd35). |
| [`inbound-message-firewall`](https://x402.agentutility.ai/inbound-message-firewall) | $0.06 | One call an agent makes before trusting an inbound message that also carries a claimed source link: an email with a link, a DM citing a URL, a tool result referencing a page. |
| [`initiative-roll`](https://x402.agentutility.ai/initiative-roll) | $0.005 | Initiative tracker / initiative order roller API for tabletop combat. |
| [`insider-trading`](https://x402.agentutility.ai/insider-trading) | $0.01 | Insider trading feed. |
| [`inventory-finance-score`](https://x402.agentutility.ai/inventory-finance-score) | $0.01 | Scores the risk of an inventory financing facility, returning a weighted score and grade. |
| [`invoice-discount-calculator`](https://x402.agentutility.ai/invoice-discount-calculator) | $0.01 | Calculates the true cost of an early payment discount or invoice factoring offer. |
| [`invoice-factoring-score`](https://x402.agentutility.ai/invoice-factoring-score) | $0.01 | Scores the risk and quality of an invoice factoring facility, returning a weighted score and grade. |
| [`ip-asn`](https://x402.agentutility.ai/ip-asn) | $0.001 | Looks up ASN and geolocation for any IPv4 or IPv6 address: ASN number, ASN org, ISP, country, region, city, postal, latitude/longitude, and timezone. |
| [`json-dev-pack`](https://x402.agentutility.ai/json-dev-pack) | $0.03 | Converts a JSON document to TypeScript types and YAML, with optional schema validation, in one call. |
| [`json-yaml`](https://x402.agentutility.ai/json-yaml) | $0.005 | Converts between JSON and YAML in either direction. |
| [`kalshi-markets`](https://x402.agentutility.ai/kalshi-markets) | $0.005 | Lists live Kalshi event contract markets from api.elections.kalshi.com, with filters for status, series ticker, event ticker, free-text query, and minimum volume. |
| [`keyword-suggest`](https://x402.agentutility.ai/keyword-suggest) | $0.002 | Keyword and autocomplete suggestions for any seed query. |
| [`lead-enrich`](https://x402.agentutility.ai/lead-enrich) | $0.01 | Enriches a lead from an email, name, domain, or company into a normalized public-data person record. |
| [`lead-qualify`](https://x402.agentutility.ai/lead-qualify) | $0.06 | Qualifies a lead in one call: email validity, disposable check, person enrichment, and company enrichment. |
| [`link-extract`](https://x402.agentutility.ai/link-extract) | $0.005 | Extracts every link from a webpage: fetches the HTML URL and returns each <a> link with its anchor text, rel attribute, and an is_external flag. |
| [`literature-landscape`](https://x402.agentutility.ai/literature-landscape) | $0.06 | Prior art search, literature review, and grant discovery in one call: search arXiv papers, PubMed biomedical literature, USPTO patents, and grants.gov funding opportunities for a single scholarly or IP query, then dedupe the same work across corpora and verify the top hit. |
| [`litigation-finance-score`](https://x402.agentutility.ai/litigation-finance-score) | $0.01 | Scores the investment merit of a litigation finance opportunity. |
| [`llm-cost-estimate`](https://x402.agentutility.ai/llm-cost-estimate) | $0.005 | LLM cost estimate API, token cost estimate endpoint, and token cost calculator for comparing inference cost across models before you run a prompt. |
| [`loan-amortization-calculator`](https://x402.agentutility.ai/loan-amortization-calculator) | $0.01 | Calculates a loan's amortization and shows how extra payments shorten payoff and cut interest. |
| [`localize-pack`](https://x402.agentutility.ai/localize-pack) | $0.05 | Localizes text in one call: detects the source language, translates, and optionally rewrites the translation in a chosen tone. |
| [`logo-prompt-generator`](https://x402.agentutility.ai/logo-prompt-generator) | $0.01 | Generates a ready-to-use logo prompt for a new brand. |
| [`loot-gen`](https://x402.agentutility.ai/loot-gen) | $0.005 | Loot generator / treasure generator API for D&D 5e. |
| [`lp-lock-check`](https://x402.agentutility.ai/lp-lock-check) | $0.01 | Checks whether an LP token's liquidity is locked, useful for detecting rug-pull risk before swapping into a new pair. |
| [`macro-snapshot`](https://x402.agentutility.ai/macro-snapshot) | $0.05 | Daily macro monitor: major-pair FX rates against USD, a recency-scoped web search for macro headlines (optionally scoped to a region), and a structured research brief on the macro backdrop, in one call. |
| [`magic-item-lookup`](https://x402.agentutility.ai/magic-item-lookup) | $0.003 | Looks up a D&D 5e magic item by name from the SRD. |
| [`market-mindshare-monitor`](https://x402.agentutility.ai/market-mindshare-monitor) | $0.05 | Re-runnable mindshare monitor for a topic: cross-platform social-mindshare (X, news, Hacker News), any live Polymarket prediction markets referencing the topic, and a general web search pass for recent coverage, in one call. |
| [`market-rates-pack`](https://x402.agentutility.ai/market-rates-pack) | $0.04 | Merges FX rates, perp funding, and Hyperliquid mark price into one call. |
| [`market-recap`](https://x402.agentutility.ai/market-recap) | $0.005 | Builds a short crypto market recap from recent GDELT crypto headlines with a GNews fallback when configured: lead headlines, top sources, sentiment distribution, tone, and a one-paragraph recap. |
| [`marketplace-notice-explain`](https://x402.agentutility.ai/marketplace-notice-explain) | $0.02 | Explains marketplace and payment-platform notices for sellers. |
| [`match-key-address`](https://x402.agentutility.ai/match-key-address) | $0.005 | Generates a match key for postal addresses with USPS-style standardization so equivalent addresses collide. |
| [`match-key-company`](https://x402.agentutility.ai/match-key-company) | $0.005 | Generates a deterministic similarity key for company names so different spellings of the same business collide. |
| [`match-key-email`](https://x402.agentutility.ai/match-key-email) | $0.005 | Normalizes email addresses into a match key so aliases of the same inbox collide. |
| [`match-key-name`](https://x402.agentutility.ai/match-key-name) | $0.005 | Generates a match key for person names so variants of the same person collide. |
| [`match-key-phone`](https://x402.agentutility.ai/match-key-phone) | $0.005 | Normalizes phone numbers into a canonical E.164 match key so formatting variants like '(415) 555-0100' and '+1 415-555-0100' collide. |
| [`match-score`](https://x402.agentutility.ai/match-score) | $0.003 | Scores how similar two values are on a 0-100 scale for fuzzy matching and dedup confidence. |
| [`materials-price-check`](https://x402.agentutility.ai/materials-price-check) | $0.05 | Supply/materials price check: shopping-intent retail listings with detected prices, a web search for bulk/wholesale pricing context, and (when a non-USD currency is requested) an fx reference rate, in one call. |
| [`mcp-server-safety-report`](https://x402.agentutility.ai/mcp-server-safety-report) | $0.06 | MCP server audit / mcp safety report / tool risk review / agent tool security in one call: point it at a live MCP server URL or hand it a tool manifest and get a risk read before an agent starts calling that server's tools. |
| [`mcp-tool-risk-score`](https://x402.agentutility.ai/mcp-tool-risk-score) | $0.02 | Heuristic MCP tool risk review for an MCP tool manifest before you wire it into an agent. |
| [`mcp-tools-list`](https://x402.agentutility.ai/mcp-tools-list) | $0.005 | Lists the tools exposed by any MCP (Model Context Protocol) server from its URL. |
| [`meeting-brief`](https://x402.agentutility.ai/meeting-brief) | $0.08 | Turns a meeting or call recording into speaker-labeled notes and a summary in one call. |
| [`mention-intel`](https://x402.agentutility.ai/mention-intel) | $0.06 | Mention intelligence API: send a handle, brand, ticker, or phrase and get back recent X/Twitter mentions with each author's follower count, verification status, and bot-likelihood score, plus an overall sentiment read across the mention text. |
| [`mentions`](https://x402.agentutility.ai/mentions) | $0.006 | Monitors public X mentions of a brand, handle, URL, ticker, or phrase by searching recent posts and returning matches with author and metric fields. |
| [`merchant-cash-advance-score`](https://x402.agentutility.ai/merchant-cash-advance-score) | $0.01 | Scores the risk of a merchant cash advance (MCA) deal, returning a weighted score and grade. |
| [`mindshare`](https://x402.agentutility.ai/mindshare) | $0.008 | Measures social mindshare by searching recent public X posts for a topic and returning tweet-level sentiment plus aggregate positive/neutral/negative distribution and average score. |
| [`model-route-recommend`](https://x402.agentutility.ai/model-route-recommend) | $0.01 | Model routing API that answers 'which model should I use' from plain task requirements. |
| [`model-selection-brief`](https://x402.agentutility.ai/model-selection-brief) | $0.05 | Model selection / route and cost brief / which model / prompt cost in one call: describe a task and get a recommended model tier, candidate models, and, when you pass a sample prompt, its token count, a projected cost across those candidates, and a compressed version of the prompt. |
| [`monster-lookup`](https://x402.agentutility.ai/monster-lookup) | $0.003 | Looks up a D&D 5e monster by name and returns a compact SRD stat block. |
| [`mortgage-payment-calculator`](https://x402.agentutility.ai/mortgage-payment-calculator) | $0.01 | Calculates a full monthly mortgage payment including principal, interest, taxes, insurance, HOA, and PMI. |
| [`movie-database`](https://x402.agentutility.ai/movie-database) | $0.01 | Finds movies or TV shows by title, with optional year and region, and returns release year, poster, overview, and language. |
| [`multilingual-doc-brief`](https://x402.agentutility.ai/multilingual-doc-brief) | $0.06 | Turn a foreign-language document into a plain-English brief in one call: send a PDF and get back extracted text, the detected source language, an English (or target-language) translation, a summary, and a PII risk flag. |
| [`music-generate`](https://x402.agentutility.ai/music-generate) | $0.05 | Generates music from a text prompt via Venice using the minimax-music-v26 model. |
| [`name-gen`](https://x402.agentutility.ai/name-gen) | $0.005 | Generates original fantasy names for RPG characters and NPCs, optionally flavored by race (Dwarf, Elf, Half-Orc, etc.). |
| [`naming-pack`](https://x402.agentutility.ai/naming-pack) | $0.06 | Runs a full startup naming workflow in one call: generates brandable candidates, then checks domains, brand score, and social handles. |
| [`ncbi-taxonomy-lookup`](https://x402.agentutility.ai/ncbi-taxonomy-lookup) | $0.01 | Taxonomy lookup for resolving a common or scientific organism name into its NCBI TaxID, rank, and full ancestor lineage. |
| [`new-company-brief`](https://x402.agentutility.ai/new-company-brief) | $0.01 | Builds a launch brief for a new company: positioning, taglines, messaging pillars, logo prompt, launch checklist, and channels. |
| [`news-content`](https://x402.agentutility.ai/news-content) | $0.05 | News-with-full-text API: send a topic and get back recent news articles with each article's cleaned page text already attached, instead of a headline list you have to fetch yourself. |
| [`news-digest`](https://x402.agentutility.ai/news-digest) | $0.05 | Summarizes the news on any topic in one call: ranked results, a bullet digest of the coverage, and the named entities (people, companies, places) driving the story. |
| [`nft-floor`](https://x402.agentutility.ai/nft-floor) | $0.01 | Returns an NFT collection's floor price and market stats from CoinGecko. |
| [`npc-gen`](https://x402.agentutility.ai/npc-gen) | $0.005 | Generates a quick NPC for game masters: name, race, occupation, personality trait, distinctive appearance, mannerism, and a hidden secret/plot hook. |
| [`npm-package-stats`](https://x402.agentutility.ai/npm-package-stats) | $0.003 | Fetches the public npm registry record for a package and returns description, license, repository, latest version, total version count, recent versions with publish timestamps and deprecation flags, age in days, days since last release, maintainer count + list, and downloads for the last day, week, month, year. |
| [`npm-trust-pack`](https://x402.agentutility.ai/npm-trust-pack) | $0.04 | Vets an npm package before install in one call: supply-chain risk score plus registry stats. |
| [`onchain-identity-pack`](https://x402.agentutility.ai/onchain-identity-pack) | $0.03 | Resolves an EVM address or name across ENS, Basenames, and known-wallet labels in one call. |
| [`outreach-pack`](https://x402.agentutility.ai/outreach-pack) | $0.05 | Drafts a cold email and verifies the recipient address in one call. |
| [`paper-brief`](https://x402.agentutility.ai/paper-brief) | $0.04 | Finds and digests an arXiv paper in one call: structured summary plus a ready-to-paste BibTeX citation. |
| [`paper-to-flashcards`](https://x402.agentutility.ai/paper-to-flashcards) | $0.015 | Turns a paper abstract or excerpt into study flashcards for spaced repetition. |
| [`patent-landscape-brief`](https://x402.agentutility.ai/patent-landscape-brief) | $0.08 | Approximate patent/prior-art landscape for a topic, built from published technical prior art rather than a patent-office filing search: arXiv full-text search results, a web search scoped to filings and patent news, and a research brief tying it together, in one call. |
| [`pdf-extract-tables`](https://x402.agentutility.ai/pdf-extract-tables) | $0.10 | Extracts every table from a PDF, digital or scanned, and returns row-by-column text matrices page-by-page. |
| [`people-enrich`](https://x402.agentutility.ai/people-enrich) | $0.01 | Enriches a person record from an email, name, domain, or company using public data only. |
| [`people-search`](https://x402.agentutility.ai/people-search) | $0.01 | Searches for a person from caller-supplied identifiers and returns a normalized public-data record. |
| [`person-dossier`](https://x402.agentutility.ai/person-dossier) | $0.05 | Researches a person from their email address in one call: enrichment, deliverability, disposable check, and social handle. |
| [`person-enrich`](https://x402.agentutility.ai/person-enrich) | $0.01 | Builds a normalized person profile from email, name, domain, or company inputs using public DNS and homepage metadata. |
| [`pii-redact`](https://x402.agentutility.ai/pii-redact) | $0.005 | Redacts PII from text: structural PII (email, phone, credit card, SSN, IBAN, IPv4/v6, URL) and residual PII (full names, street addresses, dates of birth). |
| [`polymarket-kalshi-arbitrage`](https://x402.agentutility.ai/polymarket-kalshi-arbitrage) | $0.02 | Scans for arbitrage between Polymarket and Kalshi prediction markets. |
| [`polymarket-leaderboard`](https://x402.agentutility.ai/polymarket-leaderboard) | $0.005 | Returns the Polymarket leaderboard: top accounts by realized profit OR notional volume over 1d/1w/1m/all-time windows. |
| [`polymarket-markets`](https://x402.agentutility.ai/polymarket-markets) | $0.005 | Lists live Polymarket prediction markets from gamma-api, with filters for category, tag, free-text query, and minimum liquidity. |
| [`polymarket-trades`](https://x402.agentutility.ai/polymarket-trades) | $0.005 | Recent trades from any Polymarket market (by slug or conditionId) or for a specific wallet. |
| [`pr-pack`](https://x402.agentutility.ai/pr-pack) | $0.05 | Turns a git diff into a commit message and PR description in one call. |
| [`prediction-market-snapshot`](https://x402.agentutility.ai/prediction-market-snapshot) | $0.04 | Searches Polymarket and Kalshi prediction markets with one query, returning both venues' open markets side by side. |
| [`price-impact`](https://x402.agentutility.ai/price-impact) | $0.005 | Estimates price impact and slippage for a DEX swap before you submit it on-chain. |
| [`product-describe`](https://x402.agentutility.ai/product-describe) | $0.01 | Writes conversion-focused product descriptions and listing copy from a product name and optional category, audience, and attributes. |
| [`product-listing-pack`](https://x402.agentutility.ai/product-listing-pack) | $0.06 | Preps an ecommerce product listing in one call: marketing copy, SEO keywords, and a product-name quality score. |
| [`product-name-score`](https://x402.agentutility.ai/product-name-score) | $0.005 | Scores product name quality for agents naming products, features, apps, tools, newsletters, and APIs. |
| [`product-purchase-brief`](https://x402.agentutility.ai/product-purchase-brief) | $0.05 | Product purchase brief API for a buy decision: send a raw product title (optionally with return-policy and warranty text) and get back normalized product attributes, extracted return and warranty terms, and a short description in one call. |
| [`product-search`](https://x402.agentutility.ai/product-search) | $0.02 | Searches shopping results for a product query (and optional retailer), returning ranked results with product title, buy link, retailer domain, snippet, and any detected price. |
| [`project-finance-score`](https://x402.agentutility.ai/project-finance-score) | $0.01 | Scores the bankability of a project finance structure for infrastructure deals, returning a 0-100 score. |
| [`prompt-compress`](https://x402.agentutility.ai/prompt-compress) | $0.005 | Compresses a long prompt down to a target ratio of its original length while preserving every instruction, constraint, and example's intent. |
| [`prompt-injection-detect`](https://x402.agentutility.ai/prompt-injection-detect) | $0.02 | Prompt injection detector for untrusted inbound text — a webpage, an email, a tool result, or a message an agent is about to read. |
| [`property-diligence-pack`](https://x402.agentutility.ai/property-diligence-pack) | $0.05 | Property diligence API for a street address: geocode, tax assessment, permit history, seismic hazard, and air quality in one call for real estate risk screening. |
| [`property-tax`](https://x402.agentutility.ai/property-tax) | $0.01 | Property tax lookup. |
| [`property-tax-assessment`](https://x402.agentutility.ai/property-tax-assessment) | $0.01 | Searches county assessor records by address or parcel ID for owner, assessed value, and property details. |
| [`pubmed-brief`](https://x402.agentutility.ai/pubmed-brief) | $0.04 | Searches PubMed and summarizes the matching biomedical literature in one call. |
| [`pubmed-search`](https://x402.agentutility.ai/pubmed-search) | $0.01 | Searches PubMed for biomedical literature by free-text query, with optional date range and sort (relevance / pub_date / first_author). |
| [`purchase-order-finance-score`](https://x402.agentutility.ai/purchase-order-finance-score) | $0.01 | Scores the risk of a purchase order (PO) financing deal, returning a weighted score and grade. |
| [`pypi-package-stats`](https://x402.agentutility.ai/pypi-package-stats) | $0.003 | Fetches the public PyPI JSON record for a Python package and returns summary, license, homepage, repository, documentation, issues URL, author, maintainer, classifiers, latest version, total version count, recent versions with publish timestamps and yanked flags, age in days, and days_since_last_release. |
| [`pypi-trust-pack`](https://x402.agentutility.ai/pypi-trust-pack) | $0.04 | Vets a Python package before pip install in one call: supply-chain risk score plus package stats. |
| [`qr-code-decode`](https://x402.agentutility.ai/qr-code-decode) | $0.005 | Reads QR codes out of any public image URL (PNG / JPG / GIF / BMP) and returns the decoded text strings. |
| [`qr-code-generate`](https://x402.agentutility.ai/qr-code-generate) | $0.005 | Generates a QR code from arbitrary text (URL, vCard, WiFi join string, plain text) and returns it as a base64-encoded PNG (default) or SVG. |
| [`quest-gen`](https://x402.agentutility.ai/quest-gen) | $0.005 | Generates a random quest hook for tabletop adventures: giver, objective, location, complication, and reward, plus a one-line ready-to-read hook. |
| [`race-lookup`](https://x402.agentutility.ai/race-lookup) | $0.003 | Looks up a D&D 5e race by name for its SRD racial traits. |
| [`random-table`](https://x402.agentutility.ai/random-table) | $0.005 | Rolls on any custom random table you provide, with optional weights or classic die ranges. |
| [`reading-plan-generate`](https://x402.agentutility.ai/reading-plan-generate) | $0.015 | Builds a sequenced reading plan for a topic so a learner or agent knows what to study first, next, and last. |
| [`receipt-ocr`](https://x402.agentutility.ai/receipt-ocr) | $0.01 | Receipt OCR. |
| [`receipt-parser`](https://x402.agentutility.ai/receipt-parser) | $0.01 | Receipt parser. |
| [`receipt-to-ledger`](https://x402.agentutility.ai/receipt-to-ledger) | $0.05 | Turn a receipt photo into a ledger entry in one call: line items, merchant and date entities, and a currency-normalized total, ready for a bookkeeping or expense system. |
| [`refinance-analysis-calculator`](https://x402.agentutility.ai/refinance-analysis-calculator) | $0.01 | Analyzes whether a mortgage refinance makes financial sense. |
| [`regex-pack`](https://x402.agentutility.ai/regex-pack) | $0.03 | Generates a regex from a natural-language prompt and live-tests it in one call. |
| [`repo-health-brief`](https://x402.agentutility.ai/repo-health-brief) | $0.05 | Assesses whether a public GitHub repo is safe to depend on, in one call: health score, README, and star history. |
| [`research-brief`](https://x402.agentutility.ai/research-brief) | $0.10 | Builds a structured research brief on a company, person, product, or topic as fixed-shape JSON: overview, key_facts, recent_news (with date hints), all with source-index citations. |
| [`research-radar`](https://x402.agentutility.ai/research-radar) | $0.05 | Re-runnable topic monitor: the latest arXiv papers sorted by most-recently-updated, recent (week-scoped) web coverage, and a structured research brief, in one call. |
| [`research-topic-scan`](https://x402.agentutility.ai/research-topic-scan) | $0.06 | Research scan API for a multi source search sweep: send one query and get back web results, recent news, an encyclopedia summary, academic papers, developer/Hacker News chatter, and X/Twitter chatter in a single call. |
| [`resume-review-pack`](https://x402.agentutility.ai/resume-review-pack) | $0.06 | Reviews a resume in one call: ATS fit score, PII exposure scan, and a summary polish. |
| [`retrieval-rerank`](https://x402.agentutility.ai/retrieval-rerank) | $0.005 | Reranks retrieval results: given a query and up to 30 candidate documents, scores each 0-100 for query relevance using Venice qwen3-5-35b-a3b in JSON-mode and returns sorted top-k. |
| [`return-policy-extract`](https://x402.agentutility.ai/return-policy-extract) | $0.015 | Turns a merchant's raw return policy text into structured refund terms an agent can act on before buying or returning something. |
| [`revenue-based-financing-score`](https://x402.agentutility.ai/revenue-based-financing-score) | $0.01 | Scores a revenue based financing (RBF) facility, returning a weighted score and grade. |
| [`rfp-requirements-extract`](https://x402.agentutility.ai/rfp-requirements-extract) | $0.03 | Extracts structured requirements from pasted RFP, grant, or local solicitation text: requirements, deadlines, attachment checklist, bid/no-bid flags, and missing organization-profile fields. |
| [`roi-calculator`](https://x402.agentutility.ai/roi-calculator) | $0.01 | Calculates return on investment from an initial investment plus final value or net profit. |
| [`saas-metrics-score`](https://x402.agentutility.ai/saas-metrics-score) | $0.01 | Scores a SaaS business on the rule of 40 and core operating metrics. |
| [`safe-multisig-status`](https://x402.agentutility.ai/safe-multisig-status) | $0.005 | Reads a Safe (Gnosis Safe) multisig's on-chain state: owners, threshold, and the pending transaction queue. |
| [`safe-tx-decode`](https://x402.agentutility.ai/safe-tx-decode) | $0.003 | Decodes a Gnosis Safe multisig transaction into its actual on-chain instructions: target contract, ETH value, calldata, call vs delegatecall operation, gas parameters, and signer count. |
| [`safe-tx-review`](https://x402.agentutility.ai/safe-tx-review) | $0.06 | Multisig preflight for a Gnosis Safe: this is the safe tx review, transaction review, and pre-signature check a treasury agent runs before an owner signs. |
| [`satellite-address`](https://x402.agentutility.ai/satellite-address) | $0.01 | Turns a street address into a cloud-free satellite image in one call. |
| [`satellite-bbox`](https://x402.agentutility.ai/satellite-bbox) | $0.02 | Builds a cloud-free Sentinel-2 mosaic over any bounding box and returns it as a single PNG composite. |
| [`satellite-change`](https://x402.agentutility.ai/satellite-change) | $0.05 | Renders before/after satellite images of the same area for change detection. |
| [`satellite-tile`](https://x402.agentutility.ai/satellite-tile) | $0.005 | Returns a recent cloud-free satellite image (Sentinel-2, 10m) as a PNG centered on a lat/lon at a slippy-map zoom level. |
| [`scrape-to-json`](https://x402.agentutility.ai/scrape-to-json) | $0.02 | Turn any webpage into structured JSON that matches your schema. |
| [`search`](https://x402.agentutility.ai/search) | $0.01 | Returns ranked Decodo Google web results. |
| [`search-content`](https://x402.agentutility.ai/search-content) | $0.05 | Search-with-contents API: send a query and get back ranked web results with each page's cleaned text already attached, instead of a link list you have to fetch yourself. |
| [`search-web`](https://x402.agentutility.ai/search-web) | $0.01 | Run a Decodo Google web search and get ranked results with no LLM summary. |
| [`semantic-chunk`](https://x402.agentutility.ai/semantic-chunk) | $0.005 | Splits long text into chunks for RAG pipelines, with three modes: 'fixed' (hard char-count windows with overlap), 'sentence' (greedy pack of sentences up to chunk_size), 'paragraph' (split on blank lines, never pack across paragraphs). |
| [`seo-snapshot`](https://x402.agentutility.ai/seo-snapshot) | $0.04 | Audits a page's on-page SEO in one call: head metadata, link profile, and keyword ideas. |
| [`serp-search`](https://x402.agentutility.ai/serp-search) | $0.01 | Pull ranked Decodo Google results for any query. |
| [`settlement-gen`](https://x402.agentutility.ai/settlement-gen) | $0.005 | Generates a random fantasy settlement: name, size category with a plausible population, government, primary trade, a notable feature, and a current problem the party could engage with. |
| [`site-forensics-pack`](https://x402.agentutility.ai/site-forensics-pack) | $0.06 | Site forensics pack API for a page capture and web investigation: pull a visual screenshot, an archive.org Wayback snapshot, the detected tech stack, page metadata, outbound links, and the sitemap in one call. |
| [`site-snapshot-pack`](https://x402.agentutility.ai/site-snapshot-pack) | $0.05 | Captures a website's screenshot, metadata, and SSL certificate in one call. |
| [`sitemap-fetch`](https://x402.agentutility.ai/sitemap-fetch) | $0.005 | Fetches and parses a site's sitemap.xml into a full website URL inventory. |
| [`sku-normalize`](https://x402.agentutility.ai/sku-normalize) | $0.01 | Turns a messy marketplace product title or SKU string into structured attributes for catalog matching: brand, model, variant, capacity, color, and a canonical key you can join against other catalogs. |
| [`sla-extract`](https://x402.agentutility.ai/sla-extract) | $0.015 | Pulls the actual service-level terms out of a contract, vendor agreement, or support policy so you don't have to hunt through pages of text for them. |
| [`slop-filtered-brief`](https://x402.agentutility.ai/slop-filtered-brief) | $0.06 | Research a topic without the AI-generated slop. |
| [`social-handle-check`](https://x402.agentutility.ai/social-handle-check) | $0.005 | Checks whether a proposed X/Twitter handle is claimed and returns public account metrics when it exists. |
| [`social-image-pack`](https://x402.agentutility.ai/social-image-pack) | $0.04 | Build a social-ready creative package, image, caption, and keyword ideas, in one paid call instead of three. |
| [`social-mindshare`](https://x402.agentutility.ai/social-mindshare) | $0.05 | Social mindshare API: send a term and get back how much space it occupies across X/Twitter, news, and Hacker News in one call, with an optional up-to-three-term comparison and a share-of-voice split. |
| [`social-profile-pack`](https://x402.agentutility.ai/social-profile-pack) | $0.04 | Snapshots an X (Twitter) account in one call: profile, recent tweets, and sentiment. |
| [`solana-flagged-tokens`](https://x402.agentutility.ai/solana-flagged-tokens) | $0.005 | Feed of recently active Solana tokens flagged for risk from DEX Screener market data. |
| [`solana-token-report`](https://x402.agentutility.ai/solana-token-report) | $0.04 | Screens a Solana SPL token in one call: safety score, authority checks, and flagged-list membership. |
| [`solana-token-safety`](https://x402.agentutility.ai/solana-token-safety) | $0.02 | Scores the safety of a Solana SPL token from on-chain security signals, returning a 0-100 safety score, grade, flags, and recommendation. |
| [`solana-token-watchlist`](https://x402.agentutility.ai/solana-token-watchlist) | $0.005 | Solana token price watchlist returns recently profiled and actively boosted tokens with public DEX market data. |
| [`solana-trending-tokens`](https://x402.agentutility.ai/solana-trending-tokens) | $0.005 | Ranks trending, actively boosted Solana tokens by liquidity, volume, 24h txns, boost amount, and price movement. |
| [`sound-effect-generate`](https://x402.agentutility.ai/sound-effect-generate) | $0.01 | Generates sound effects from a text prompt via Venice using elevenlabs-sound-effects-v2. |
| [`source-trust-envelope`](https://x402.agentutility.ai/source-trust-envelope) | $0.07 | Send a URL, get one verdict on whether your agent should trust and cite it. |
| [`spell-lookup`](https://x402.agentutility.ai/spell-lookup) | $0.003 | Looks up a D&D 5e spell by name and returns full SRD details. |
| [`spell-slots`](https://x402.agentutility.ai/spell-slots) | $0.005 | Looks up D&D 5e spell slots by class and level. |
| [`sports-schedule`](https://x402.agentutility.ai/sports-schedule) | $0.01 | Returns upcoming games and recent results for major sports leagues: MLB, NBA, NHL, NFL, WNBA, MLS, EPL, La Liga, Bundesliga, and Serie A. |
| [`sql-query-review`](https://x402.agentutility.ai/sql-query-review) | $0.04 | Turn a plain-English request into SQL and get a review of it before you run it. |
| [`stablecoin-health-report`](https://x402.agentutility.ai/stablecoin-health-report) | $0.04 | Reports stablecoin peg health and the largest stablecoin yield pools in one call. |
| [`stablecoin-monitor`](https://x402.agentutility.ai/stablecoin-monitor) | $0.005 | Stablecoin monitor. |
| [`startup-comparables`](https://x402.agentutility.ai/startup-comparables) | $0.08 | Structured comparables snapshot for a company/sector pair: a sector-scoped web search surfacing candidate peers plus a research brief on the company itself (overview, key facts, sources), in one call. |
| [`startup-launch-brief`](https://x402.agentutility.ai/startup-launch-brief) | $0.01 | Generates a startup launch brief with positioning, taglines, and a launch checklist. |
| [`startup-name-generator`](https://x402.agentutility.ai/startup-name-generator) | $0.05 | Generates candidate names for a startup concept and checks matching domain availability across common startup TLDs. |
| [`startup-runway-calculator`](https://x402.agentutility.ai/startup-runway-calculator) | $0.01 | Calculates a startup's cash runway and the burn cut needed to hit a target. |
| [`startup-slogan-generator`](https://x402.agentutility.ai/startup-slogan-generator) | $0.005 | Generates startup slogans and taglines for new-business launch copy, X bios, landing pages, and pitch decks. |
| [`stocks-news`](https://x402.agentutility.ai/stocks-news) | $0.005 | Fetches recent stock market news on equities, earnings, IPOs, the Fed, and macro from GDELT with a GNews fallback when configured, returning headline metadata with sentiment and source domains. |
| [`story-search`](https://x402.agentutility.ai/story-search) | $0.025 | Story and news search across Hacker News and the open web in one call. |
| [`structured-extract`](https://x402.agentutility.ai/structured-extract) | $0.01 | Extracts structured JSON from free-form text, conforming to a user-supplied JSON Schema. |
| [`sunrise-sunset`](https://x402.agentutility.ai/sunrise-sunset) | $0.005 | Sunrise sunset times. |
| [`supply-chain-finance-score`](https://x402.agentutility.ai/supply-chain-finance-score) | $0.01 | Scores the design quality of a supply chain finance (SCF) program from 0-100. |
| [`support-ticket-triage`](https://x402.agentutility.ai/support-ticket-triage) | $0.05 | Triage one inbound support ticket in a single call: language, sentiment, category, a duplicate check against tickets you already have open, and an escalation brief ready to hand off. |
| [`swap-preflight-check`](https://x402.agentutility.ai/swap-preflight-check) | $0.08 | Pre-swap safety check for a token pair before you sign: run this as the swap preflight, pre-swap safety, and price impact check an agent runs before it commits a trade. |
| [`syllabus-parse`](https://x402.agentutility.ai/syllabus-parse) | $0.015 | Turns a pasted course syllabus into a structured week-by-week outline an agent can schedule against: course name, and per week the topics, readings, assignments, and due dates. |
| [`tagline-generator`](https://x402.agentutility.ai/tagline-generator) | $0.005 | Generates short tagline options from a name, concept, audience, and tone. |
| [`tariff-duty-scenario`](https://x402.agentutility.ai/tariff-duty-scenario) | $0.02 | Calculates import duty what-if scenarios: current vs proposed duty and landed-cost deltas from caller-supplied values, rates, freight, insurance, quantity, origin, destination, and optional HTS code. |
| [`tavern-gen`](https://x402.agentutility.ai/tavern-gen) | $0.005 | Generates a random fantasy tavern: name, proprietor, the house drink and meal, a notable patron, and a rumor overheard inside. |
| [`text-classify`](https://x402.agentutility.ai/text-classify) | $0.005 | Text classifier. |
| [`text-embedding`](https://x402.agentutility.ai/text-embedding) | $0.005 | Embeds 1 to 100 strings into semantic vectors via Venice. |
| [`text-intel-pack`](https://x402.agentutility.ai/text-intel-pack) | $0.03 | Runs full text analysis in one call: language detection, sentiment, named entities, token count, and optional zero-shot classification. |
| [`text-normalize`](https://x402.agentutility.ai/text-normalize) | $0.005 | Text normalize. |
| [`text-to-video`](https://x402.agentutility.ai/text-to-video) | $0.50 | Generates video from a text prompt via fal.ai Bytedance Seedance. |
| [`thesaurus`](https://x402.agentutility.ai/thesaurus) | $0.005 | Returns synonyms, antonyms, and related words for any input word, configurable across five modes: 'synonyms' (rel_syn), 'antonyms' (rel_ant), 'sounds_like' (homophones / rhymes), 'similar_meaning' (semantically near), or 'related' (commonly co-occurring triggers). |
| [`ticket-backlog-digest`](https://x402.agentutility.ai/ticket-backlog-digest) | $0.05 | Turn a batch of support tickets into a backlog digest in one call: themed clusters, an aggregate sentiment read across the batch, a language-mix sample, and an executive summary. |
| [`ticket-cluster`](https://x402.agentutility.ai/ticket-cluster) | $0.02 | Groups a batch of raw support tickets into themed clusters so you can see what's actually driving volume without reading every ticket by hand. |
| [`timezone-convert`](https://x402.agentutility.ai/timezone-convert) | $0.005 | Converts a datetime from one IANA timezone to another with correct DST handling. |
| [`timezone-lookup`](https://x402.agentutility.ai/timezone-lookup) | $0.005 | Timezone lookup. |
| [`tld-info`](https://x402.agentutility.ai/tld-info) | $0.005 | Returns registry info for any top-level domain: registry operator, type (gTLD / ccTLD / sTLD), country (for ccTLDs), introduction year, and notes. |
| [`token-attention-report`](https://x402.agentutility.ai/token-attention-report) | $0.05 | Crypto attention snapshot API for a ticker: track token sentiment, mindshare, social volume, and crypto narrative in one call. |
| [`token-burn-stats`](https://x402.agentutility.ai/token-burn-stats) | $0.005 | Reports token burn stats for any ERC-20 on Ethereum, Base, Polygon, Arbitrum, or Optimism. |
| [`token-clearance-check`](https://x402.agentutility.ai/token-clearance-check) | $0.06 | Delivers a signed token safety verdict before a trade: honeypot, risk score, source verification, and LP lock in one call. |
| [`token-count`](https://x402.agentutility.ai/token-count) | $0.005 | Estimates LLM token counts entirely locally, with no external lookups. |
| [`token-dossier`](https://x402.agentutility.ai/token-dossier) | $0.05 | Runs due diligence on an EVM token in one call: metadata, risk score, honeypot simulation, LP lock, and burn stats. |
| [`token-honeypot`](https://x402.agentutility.ai/token-honeypot) | $0.05 | Detects whether an ERC-20 token is a honeypot by simulating a buy + sell via honeypot.is. |
| [`token-risk-score`](https://x402.agentutility.ai/token-risk-score) | $0.10 | Composite 0-100 security score for any EVM token, built from three independent signals pulled in parallel. |
| [`token-volatility`](https://x402.agentutility.ai/token-volatility) | $0.005 | Computes historical volatility for any CoinGecko-listed token: log-return standard deviation over the last N days (default 30), annualized by sqrt(365). |
| [`tool-call-diff`](https://x402.agentutility.ai/tool-call-diff) | $0.008 | Deterministic tool call diff between two agent run sequences. |
| [`tool-card-generate`](https://x402.agentutility.ai/tool-card-generate) | $0.005 | Generates an agent tool card from a tool name + plain-English description (and optional parameter hints): a strict OpenAI/A2A-compatible spec of { name, description, parameters: <JSON Schema> }. |
| [`topic-trend-brief`](https://x402.agentutility.ai/topic-trend-brief) | $0.05 | Topic trend brief API to check whether interest in a topic is rising: send a topic and window, get back Wikipedia pageview trend, recent news mention volume, Hacker News mention volume, and X/Twitter mention volume in one call. |
| [`trade-finance-risk-score`](https://x402.agentutility.ai/trade-finance-risk-score) | $0.01 | Scores the risk of a trade finance transaction from 0-100. |
| [`transition-finance-score`](https://x402.agentutility.ai/transition-finance-score) | $0.01 | Scores the credibility of a climate transition plan for financing, returning a 0-100 credibility score. |
| [`translation-qa-pack`](https://x402.agentutility.ai/translation-qa-pack) | $0.04 | Translate text and check the translation with a back-translation pass, all in one call. |
| [`travel-brief`](https://x402.agentutility.ai/travel-brief) | $0.05 | Pre-trip brief for a destination city: current weather, an fx rate from the traveler's home currency, and survival phrases translated into the destination language, plus an optional postcard illustration. |
| [`trip-conditions-pack`](https://x402.agentutility.ai/trip-conditions-pack) | $0.03 | Briefs a trip stop for any coordinates in one call: weather, air quality, sunrise/sunset, and timezone. |
| [`trip-readiness-brief`](https://x402.agentutility.ai/trip-readiness-brief) | $0.06 | Cross-border trip readiness for a route and date: the pre-travel check, visa and weather brief, and international travel readiness pack a booking agent runs before confirming an itinerary. |
| [`tweet-search`](https://x402.agentutility.ai/tweet-search) | $0.01 | Searches recent public X posts with author expansion and public metrics. |
| [`tweets`](https://x402.agentutility.ai/tweets) | $0.01 | Looks up X posts in bulk by ID with the read-only X API v2, using the exact buyer slug seen in market demand. |
| [`tweets-search`](https://x402.agentutility.ai/tweets-search) | $0.01 | Searches recent public X posts and returns post text, timestamps, metrics, and expanded author profile data. |
| [`twitter-search`](https://x402.agentutility.ai/twitter-search) | $0.01 | Searches recent public posts on X, excluding retweets by default and returning author profile fields and public metrics. |
| [`twitter-sentiment`](https://x402.agentutility.ai/twitter-sentiment) | $0.03 | Searches recent public X posts for a query and scores each tweet's sentiment, returning tweet-level scores plus aggregate positive/neutral/negative distribution and average score. |
| [`twitter-user-lookup`](https://x402.agentutility.ai/twitter-user-lookup) | $0.005 | Resolves a Twitter or X username to a public profile with a read-only X API v2 lookup; no account mutation. |
| [`twitter-x-api`](https://x402.agentutility.ai/twitter-x-api) | $0.01 | Read-only X API v2 wrapper for tweet search, tweet lookup, username lookup, bulk users lookup, and user timeline fetch. |
| [`tx-dossier`](https://x402.agentutility.ai/tx-dossier) | $0.04 | Decodes an EVM transaction and explains it in plain English, in one call. |
| [`tx-receipt-decode`](https://x402.agentutility.ai/tx-receipt-decode) | $0.02 | Decodes an EVM transaction receipt and every event log from a tx hash. |
| [`tx-simulate-swap`](https://x402.agentutility.ai/tx-simulate-swap) | $0.02 | Simulates a DEX swap before you trade: given (from_token, to_token, amount_in, chain), pulls a routed quote from a free DEX meta-aggregator and returns expected output, min-out at user-supplied slippage (default 1%), gas estimate, router address, and a would_succeed verdict. |
| [`type-inference-from-json`](https://x402.agentutility.ai/type-inference-from-json) | $0.005 | Infers type definitions from a JSON sample, converting JSON to TypeScript, Zod, or JSON Schema. |
| [`unicode-normalize`](https://x402.agentutility.ai/unicode-normalize) | $0.005 | Normalizes Unicode text and flags lookalike or hidden characters used in spoofing and phishing. |
| [`unit-economics-calculator`](https://x402.agentutility.ai/unit-economics-calculator) | $0.01 | Calculates SaaS unit economics: LTV, LTV to CAC, and CAC payback period. |
| [`url-dossier`](https://x402.agentutility.ai/url-dossier) | $0.05 | Profiles a webpage in one call: metadata, scraped content with a summary, outbound links, and tech stack. |
| [`url-metadata-extract`](https://x402.agentutility.ai/url-metadata-extract) | $0.003 | Extracts page metadata from any URL: title, description, Open Graph and Twitter Card tags, canonical link, and favicon. |
| [`user-agent-parse`](https://x402.agentutility.ai/user-agent-parse) | $0.005 | Parses a User-Agent string entirely locally with regex, no external lookups. |
| [`user-tweets`](https://x402.agentutility.ai/user-tweets) | $0.01 | Fetches the latest public tweets from any X username, with text, timestamps, metrics, pagination token, and author profile. |
| [`users`](https://x402.agentutility.ai/users) | $0.01 | Looks up X user profiles in bulk by usernames or IDs, using the read-only X API v2 users route matching market demand for bulk public profiles. |
| [`users-by-username`](https://x402.agentutility.ai/users-by-username) | $0.005 | Resolves an X handle to a public profile: id, username, display name, bio, verification fields, created_at, followers, following, tweet count, and listed count. |
| [`uspto-trademark-search`](https://x402.agentutility.ai/uspto-trademark-search) | $0.03 | Looks up the current status of a US trademark by serial number or registration number against the USPTO's own TSDR (Trademark Status and Document Retrieval) database. |
| [`vendor-questionnaire-draft`](https://x402.agentutility.ai/vendor-questionnaire-draft) | $0.08 | Drafts vendor security questionnaire answers from evidence you supply. |
| [`vendor-risk-brief`](https://x402.agentutility.ai/vendor-risk-brief) | $0.06 | Vendor risk brief API for supplier vetting and vendor onboarding checks: assess a vendor or supplier domain before you sign a contract or grant system access. |
| [`video-brief`](https://x402.agentutility.ai/video-brief) | $0.08 | Transcribes and summarizes any video URL in one call. |
| [`vin-decode`](https://x402.agentutility.ai/vin-decode) | $0.005 | Decodes a 17-character VIN into full vehicle details, backed by NHTSA's vPIC data (US Govt public domain). |
| [`visa-requirements`](https://x402.agentutility.ai/visa-requirements) | $0.005 | Checks visa requirements between any passport and destination country. |
| [`wallet-details`](https://x402.agentutility.ai/wallet-details) | $0.005 | Returns details for an EVM address on Base, Ethereum, Polygon, Arbitrum, or Optimism: best-effort label/category, EOA-vs-contract status, contract deployer, and creation transaction. |
| [`wallet-dossier`](https://x402.agentutility.ai/wallet-dossier) | $0.05 | Profiles an EVM wallet in one call: address label, ENS reverse lookup, ERC-20 balance, and FIFO token P&L. |
| [`wallet-intel-pack`](https://x402.agentutility.ai/wallet-intel-pack) | $0.08 | EVM wallet + contract risk pack for wallet and crypto agents deciding whether to interact with an address. |
| [`wallet-label`](https://x402.agentutility.ai/wallet-label) | $0.005 | Identifies well-known EVM addresses: CEX hot/cold wallets, DEX routers, NFT marketplaces, popular MEV bots, bridges, and stablecoins. |
| [`wallet-pnl`](https://x402.agentutility.ai/wallet-pnl) | $0.05 | Computes wallet token P&L with FIFO cost basis for any (wallet, ERC-20, chain) triple. |
| [`warranty-parse`](https://x402.agentutility.ai/warranty-parse) | $0.015 | Turns raw warranty terms text from a manual, warranty card, or manufacturer page into a structured coverage record an agent can check before a purchase or claim. |
| [`watch-page`](https://x402.agentutility.ai/watch-page) | $0.01 | Monitors a webpage for changes and remembers the state server-side: caller picks a watch_id and the server stores the page's hash + text in KV. |
| [`weather-current-city`](https://x402.agentutility.ai/weather-current-city) | $0.01 | Returns current weather for any city or place name, no coordinates needed. |
| [`weather-forecast`](https://x402.agentutility.ai/weather-forecast) | $0.002 | Returns current conditions, a 1-7 day daily forecast, and an optional hourly forecast for any latitude/longitude. |
| [`weather-gen`](https://x402.agentutility.ai/weather-gen) | $0.005 | Rolls a day's weather for a fantasy RPG campaign by climate (temperate, arid, cold, tropical), with conditions and wind. |
| [`weather-localize-pack`](https://x402.agentutility.ai/weather-localize-pack) | $0.03 | Get current weather for a city and a translated conditions brief in a single call. |
| [`web-search`](https://x402.agentutility.ai/web-search) | $0.006 | Ranked Google results for a query: title, URL, snippet, domain, and a recency filter, via Decodo Google Search. |
| [`webpage-change-report`](https://x402.agentutility.ai/webpage-change-report) | $0.04 | Detects changes to a webpage and explains them in plain language, in one call. |
| [`website-trust-report`](https://x402.agentutility.ai/website-trust-report) | $0.04 | Gathers site legitimacy signals for a URL in one call: TLS, domain risk, lookalike detection, metadata, and tech stack. |
| [`wiki-brief`](https://x402.agentutility.ai/wiki-brief) | $0.03 | Looks up a topic on Wikipedia and digests it in one call: canonical article, bullet brief, and named entities. |
| [`wikidata-resolve`](https://x402.agentutility.ai/wikidata-resolve) | $0.01 | Wikidata resolve for turning a name into a structured knowledge-graph identifier. |
| [`wikipedia-pageviews`](https://x402.agentutility.ai/wikipedia-pageviews) | $0.008 | Wikipedia pageviews trend for reading topic interest over time straight from real traffic data. |
| [`wikipedia-search`](https://x402.agentutility.ai/wikipedia-search) | $0.008 | Wikipedia search for full-text lookups across any Wikipedia language edition, built for agents that need a quick encyclopedia fact-check or background pass before answering. |
| [`win-prob`](https://x402.agentutility.ai/win-prob) | $0.003 | Estimates live in-game win probability for NFL, NBA, MLB, NHL, and soccer from the current score and time remaining. |
| [`working-capital-cycle`](https://x402.agentutility.ai/working-capital-cycle) | $0.01 | Calculates the cash conversion cycle and how much cash is tied up in working capital. |
| [`x-account-authenticity`](https://x402.agentutility.ai/x-account-authenticity) | $0.05 | Score whether an X/Twitter handle is a real person or a bot/impersonator before an agent trusts, follows, or replies to it. |
| [`x-account-slop-check`](https://x402.agentutility.ai/x-account-slop-check) | $0.05 | Account slop-check API: send an X/Twitter handle and get back how much of that account's recent output reads as AI-generated. |
| [`x-handle-availability`](https://x402.agentutility.ai/x-handle-availability) | $0.005 | Checks whether an X handle is available, using a read-only X API v2 user-by-username check. |
| [`x-kol-sentiment`](https://x402.agentutility.ai/x-kol-sentiment) | $0.05 | KOL sentiment API: send a topic and get back a follower-weighted sentiment read across recent X/Twitter posts from accounts big enough to move opinion, not noise accounts. |
| [`x-search`](https://x402.agentutility.ai/x-search) | $0.01 | Searches recent public X posts, wrapping the read-only X API v2 recent-search route. |
| [`x-topic-pulse`](https://x402.agentutility.ai/x-topic-pulse) | $0.05 | Takes the pulse of a topic on X (Twitter): tweet search, sentiment, and top voices in one call. |
| [`x-username`](https://x402.agentutility.ai/x-username) | $0.005 | Looks up a public X profile by username, wrapping the read-only X API v2 user-by-username route. |
| [`xbrl-financials`](https://x402.agentutility.ai/xbrl-financials) | $0.05 | Pulls company fundamentals as structured time-series straight from SEC XBRL filings. |
| [`xml-to-word`](https://x402.agentutility.ai/xml-to-word) | $0.05 | Converts an XML document into a Microsoft Word (.docx) file for delivery to systems that need Word format, not raw XML. |
| [`xp-level`](https://x402.agentutility.ai/xp-level) | $0.005 | Converts between XP and level using the D&D 5e experience table. |
| [`youtube-brief`](https://x402.agentutility.ai/youtube-brief) | $0.05 | Summarizes a YouTube video from its URL or ID: transcript, TLDR, and named entities in one call. |
| [`youtube-transcript`](https://x402.agentutility.ai/youtube-transcript) | $0.01 | Fetch the transcript of any YouTube video. |

## utilities

| Endpoint | Price | What it does |
|---|---|---|
| [`address-geocode`](https://x402.agentutility.ai/address-geocode) | $0.02 | Converts a free-form address, postal code, place name, or POI into latitude/longitude. |
| [`archive-snapshot`](https://x402.agentutility.ai/archive-snapshot) | $0.02 | Finds the closest archived snapshot of a public URL, like a Wayback Machine API. |
| [`bin-lookup`](https://x402.agentutility.ai/bin-lookup) | $0.02 | Looks up a credit card BIN: the first 6-8 digits resolve to issuer, country, brand, and card type via binlist.net. |
| [`csv-to-ics`](https://x402.agentutility.ai/csv-to-ics) | $0.01 | Converts a CSV of events into an RFC 5545 compliant ICS calendar file (VCALENDAR/VEVENT) for Google Calendar, Outlook, and Apple Calendar import. |
| [`csv-to-jsonl`](https://x402.agentutility.ai/csv-to-jsonl) | $0.02 | Converts CSV or TSV data into JSON, JSONL/NDJSON, or column-oriented arrays. |
| [`disposable-email-check`](https://x402.agentutility.ai/disposable-email-check) | $0.005 | Detects disposable and throwaway email addresses before they get through your signup form. |
| [`dmarc-check`](https://x402.agentutility.ai/dmarc-check) | $0.02 | Audits a domain's email authentication posture: DMARC, SPF, and DKIM in one check. |
| [`dns-lookup`](https://x402.agentutility.ai/dns-lookup) | $0.02 | Full DNS lookup over Cloudflare 1.1.1.1 DNS-over-HTTPS. |
| [`ens-resolve`](https://x402.agentutility.ai/ens-resolve) | $0.03 | Resolves ENS names in both directions: forward (vitalik.eth to address) and reverse (address to primary ENS). |
| [`expand-url`](https://x402.agentutility.ai/expand-url) | $0.02 | Expands shortened URLs by tracing the full redirect chain hop-by-hop. |
| [`gas-now-base`](https://x402.agentutility.ai/gas-now-base) | $0.02 | Real-time gas price oracle for Base, Ethereum, Optimism, Arbitrum, and Polygon. |
| [`homoglyph-check`](https://x402.agentutility.ai/homoglyph-check) | $0.003 | Detects Unicode lookalike characters that impersonate ASCII Latin letters, a common phishing-domain trick. |
| [`jwt-decode`](https://x402.agentutility.ai/jwt-decode) | $0.003 | Decodes a JWT and inspects its claims without needing the signing key. |
| [`password-strength`](https://x402.agentutility.ai/password-strength) | $0.02 | Measures password strength with a zxcvbn-style score and optional HIBP breach lookup. |
| [`pdf-to-markdown`](https://x402.agentutility.ai/pdf-to-markdown) | $0.0025 | Converts digital or scanned PDFs to clean Markdown with AI-powered, layout-aware extraction on the Datalab Marker engine. |
| [`pdf2md`](https://x402.agentutility.ai/pdf2md) | $0.20 | Convert a hosted PDF into clean Markdown, HTML, or structured JSON by sending its pdf_url. |
| [`reverse-geocode`](https://x402.agentutility.ai/reverse-geocode) | $0.02 | Converts latitude/longitude coordinates into a structured street address. |
| [`rss-from-anything`](https://x402.agentutility.ai/rss-from-anything) | $0.04 | Turn any webpage into an RSS feed, even sites that never published one. |
| [`scrape`](https://x402.agentutility.ai/scrape) | $0.04 | Scrape any webpage. |
| [`scrape-website`](https://x402.agentutility.ai/scrape-website) | $0.04 | Scrapes any webpage and pulls title, description, canonical URL, OpenGraph + Twitter card metadata, headings, and outbound links from a single URL. |
| [`ssl-cert-info`](https://x402.agentutility.ai/ssl-cert-info) | $0.03 | Inspects a domain's SSL/TLS certificate: issuer, subject, SAN list, validity dates, and days-until-expiry. |
| [`stablecoin-peg`](https://x402.agentutility.ai/stablecoin-peg) | $0.005 | Stablecoin peg monitor. |
| [`subdomain-enum`](https://x402.agentutility.ai/subdomain-enum) | $0.03 | Enumerates a domain's subdomains by mining Certificate Transparency logs (crt.sh). |
| [`tech-stack-detect`](https://x402.agentutility.ai/tech-stack-detect) | $0.01 | Tech stack detector. |
| [`webpage-diff`](https://x402.agentutility.ai/webpage-diff) | $0.04 | Detects changes on a webpage: fetches a URL, strips HTML to plain text, computes a SHA-256 hash, and (when given a previous hash or text) returns a changed flag plus added/removed line lists. |
| [`whois`](https://x402.agentutility.ai/whois) | $0.02 | Looks up a domain's WHOIS/RDAP registration record: age, expiry, registrar, and nameservers. |
| [`whois-lookup`](https://x402.agentutility.ai/whois-lookup) | $0.02 | Looks up WHOIS registration data for a domain via the IANA-mandated RDAP endpoint for its TLD. |

For runnable, commented examples, see the curated recipes in this repo. For the full portfolio site, see https://agentutility.ai.
