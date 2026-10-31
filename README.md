# Ontario Energy Board

<!-- API-EVANGELIST-PROVENANCE:BEGIN -->
> ### About this repository
>
> **This is not our API.** This repository is an independent, third-party profile of a company's
> **publicly available** API surface, maintained by [API Evangelist](https://apievangelist.com).
> API Evangelist does not operate, host, resell, or support this company's APIs, and is not
> affiliated with or endorsed by the company unless stated on the profile.
>
> **Where the information came from.** Everything here is assembled from material a member of the
> public can reach with a browser and no credentials — the company's own website, developer portal
> and documentation, the specifications it publishes for public use (OpenAPI, AsyncAPI, JSON Schema,
> `apis.json`, `llms.txt` and similar), its public repositories, and its public status, pricing and
> changelog pages. **Nothing here is obtained by breaching a system, defeating an access control, or
> using credentials of any kind.**
>
> **The rating is an independent assessment.** The Kin Score and Agent Readiness rating are
> independently calculated scores of a company's *public* API artifacts, produced by API Evangelist
> against a published rubric. They are not certifications, endorsements, security assessments, or
> audits, and they score published artifacts — not the quality, safety, or security of the software.
>
> **Corrections, re-scores, and removal are free.** No partnership, contract, or purchase is
> required, and you do not need to justify the request.
>
> - **Something wrong?** Open an issue on this repository, or email
>   [info@apievangelist.com](mailto:info@apievangelist.com).
> - **Published something new?** Ask for a re-score and we will re-run the rating.
> - **Want the listing taken down?** Say so and we will honor it. The profile is reduced to your
>   company name, a factual description, and a link to your own site, and the company is recorded as
>   **unrated** — never scored zero for having asked.
>
> **Response times.** Acknowledgement within **one business day**; removal or restriction within
> **two business days**; corrections and re-scores within **five business days**.
>
> **Not from the company, and here with a question?** You are welcome here — we would rather be the
> front line and point you the right way than have a good report go nowhere. What this repository
> can answer is narrow, though, so it is worth knowing who you are actually looking for:
>
> - **A question about how the API works, an account, billing, or a bug in the service** — that is
>   the company's own support, not us. We profile this API; we do not operate it and cannot see
>   your account.
> - **A bug in an open-source project we only catalog** — file it on that project's own repository.
>   This has happened with a real and correct bug report that reached us instead of the people who
>   could fix it, which helped nobody.
> - **Anything about this listing itself** — the description, the tags, the rating, a missing or
>   wrong artifact — is ours. Open an issue here.
> - **Not sure, or something general about API Evangelist or APIs.io** — open an issue on the
>   [APIs.io Inbox](https://github.com/api-search/inbox) and we will route it.
>
> **This repository contains no software, and we will never ask you to download anything.** There is
> no build, release, installer, or binary here — only text and machine-readable API descriptions, so
> there is nothing here that can be "corrupt" or need "repairing". Any issue, comment, or email
> claiming otherwise and offering a download link is not from us and is hostile. Do not follow the
> link; it is a lure. Report it to GitHub and, if you like, tell us at
> [info@apievangelist.com](mailto:info@apievangelist.com) so we can take it down.
>
> **On a security or compliance team?** Email
> [info@apievangelist.com](mailto:info@apievangelist.com) with *security* in the subject line and
> you will get a person, not a form. We will tell you exactly which public URLs this profile was
> built from so your team can see the same surface we did, and we will take the listing down on
> request while you work through it.
>
> Full detail: **[Where this data comes from](https://apievangelist.com/about/where-our-data-comes-from)**
<!-- API-EVANGELIST-PROVENANCE:END -->

The Ontario Energy Board (OEB) is the independent regulator of Ontario's electricity and natural gas sectors, licensing and rate-regulating roughly 60 electricity distributors, the province's transmitters, storage and generation licensees, unit sub-meter providers, energy retailers and gas marketers, and Enbridge Gas. It sits above the wires-and-pipes layer of Canada's largest provincial energy market — it does not own assets, does not run the wholesale market (that is IESO) and holds no customer meter data — so everything it publishes is regulatory, rate and utility-performance data rather than consumption data. Its API posture is the sharpest consumer-versus-market split this series has recorded in Canada. On market data it is genuinely open — an Open Data programme launched September 2022 under Ontario's Digital and Data Directive publishes 40 datasets - 198 individual files, verified by crawl on 2026-07-27; the programme's own earlier count was 18 - as anonymous, key-free XML, XLSX and GIS files under the Open Government Licence – Ontario, covering every open application before the Board (updated daily), current electricity and natural gas rates, distributor service-territory boundaries, the distributor performance scorecard, consumer complaints, and thirteen Reporting and Record-keeping Requirements (RRR) filings series going back to 2015. On consumer data it publishes nothing at all, because it holds nothing — it is instead the supervisor of the consumer-data mandate. Ontario is the only Canadian jurisdiction with a compulsory energy-data-sharing rule — O. Reg. 633/21 (Energy Data) under the Electricity Act, 1998 required rate-regulated electricity and natural gas utilities to implement Green Button Download My Data and Connect My Data to NAESB REQ.21 ESPI v3.3 by 1 November 2023 — and the OEB is the body that ran the consultation (EB-2021-0183), amended the Retail Settlement Code, collected quarterly progress reports and publishes the implementation status register naming 54 confirmed distributors and 6 extensions. There is no developer portal, no OpenAPI, no API key and no signup — just files, plus an undocumented but live JSON output on the regulatory document search.

**Areas:** Energy · Canada · Ontario · Utilities · Electricity · Gas · Green Button · Smart Metering · Energy Markets · Regulator · Open Data · Grid

## Ontario Energy Board on APIs.io

Everything profiled for Ontario Energy Board is published on APIs.io rather than in this repository. Start at the provider page — **[apis.io/providers/ontario-energy-board/](https://apis.io/providers/ontario-energy-board/)** — or go straight to one of the APIs or properties below.

### APIs (12)

- [Ontario Energy Board Applications before the OEB API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-applications-before-the-oeb-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/applications-oeb
- [Ontario Energy Board Current Electricity Rates (General Service < 50 kW Rate Class) API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-current-electricity-rates-general-service-50-kw-rate-class-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/current-electricity-rates-general-service-50-kw-rate-class
- [Ontario Energy Board Current Electricity Rates (Residential Rate Class) API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-current-electricity-rates-residential-rate-class-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/current-electricity-rates-residential-rate-class
- [Ontario Energy Board Current Natural Gas Rates (Residential Rate Classes) API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-current-natural-gas-rates-residential-rate-classes-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/current-natural-gas-rates-residential-rate-classes
- [Ontario Energy Board Electricity and Natural Gas Distributors - Service Areas API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-electricity-and-natural-gas-distributors-service-areas-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/electricity-and-natural-gas-distributors-service-areas
- [Ontario Energy Board Electricity Distributor Complaints Received by the OEB API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-electricity-distributor-complaints-received-by-the-oeb-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/electricity-distributor-complaints-received-oeb
- [Ontario Energy Board Electricity Distributor Performance – Scorecard API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-electricity-distributor-performance-scorecard-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/electricity-distributor-performance-scorecard
- [Ontario Energy Board Electricity Reporting & Record Keeping Requirements (RRR): Section ... API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-electricity-reporting-record-keeping-requirements-rrr-section-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/electricity-reporting-record-keeping-requirements-rrr-section-2142-system-reliability
- [Ontario Energy Board Historical Regulated Price Plan Electricity Rates API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-historical-regulated-price-plan-electricity-rates-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/historical-regulated-price-plan-electricity-rates
- [Ontario Energy Board Licensed Market Participants API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-licensed-market-participants-api/) — OEB Open Data dataset landing page: https://www.oeb.ca/open-data/licensed-market-participants
- [Ontario Energy Board Records API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-records-api/) — Search and retrieve records (filings, decisions, orders, licences, correspondence) in the OEB case record.
- [Ontario Energy Board Search Metadata API](https://apis.io/apis/ontario-energy-board/ontario-energy-board-search-metadata-api/) — The machine-readable query vocabulary the RDS search form itself loads.

### Published properties

Each property below is a page on APIs.io carrying the machine-readable artifact and what it says.

#### MCP servers (1)

Model Context Protocol servers that expose the API to agents.

- [ontario-energy-board](https://apis.io/servers/ontario-energy-board/ontario-energy-board/)

#### JSON Schema (1)

The data models the API reads and writes.

- [OEB RDS record search response](https://apis.io/schemas/ontario-energy-board/ontario-energy-board-rds-record-search-response/)

#### Examples (3)

Example requests and responses.

- [Ontario Energy Board Rds Error 500 Access Denied](https://apis.io/examples/ontario-energy-board/ontario-energy-board-rds-error-500-access-denied/)
- [Ontario Energy Board Rds Error Unknown Search Method](https://apis.io/examples/ontario-energy-board/ontario-energy-board-rds-error-unknown-search-method/)
- [Ontario Energy Board Rds Record Search Response](https://apis.io/examples/ontario-energy-board/ontario-energy-board-rds-record-search-response/)

#### Collections (2)

Postman and Open Collection request collections.

- [OEB Open Data](https://apis.io/collections/ontario-energy-board/open-ontario-energy-board-open-data/)
- [OEB Regulatory Document Search (RDS)](https://apis.io/collections/ontario-energy-board/open-ontario-energy-board-rds/)

#### Overlays (2)

OpenAPI overlays, including conversational phrasing for each operation.

- [Ontario Energy Board Open Data Overlay](https://apis.io/overlays/ontario-energy-board/ontario-energy-board-open-data-overlay/)
- [Ontario Energy Board Rds Overlay](https://apis.io/overlays/ontario-energy-board/ontario-energy-board-rds-overlay/)

#### Security (2)

Authentication, trust centre, and vulnerability disclosure.

- [Ontario Energy Board Authentication](https://apis.io/security/ontario-energy-board/ontario-energy-board-authentication/)
- [Ontario Energy Board Domain Security](https://apis.io/security/ontario-energy-board/ontario-energy-board-domain-security/)

## Where to find this API

Links to the company's own pages. This repository publishes no copy of their specifications — the canonical document is theirs and lives at the URLs below.

- [Website](https://www.oeb.ca/)
- [Documentation](https://www.oeb.ca/open-data)
- [Support](https://www.oeb.ca/contact-ontario-energy-board)
- [Blog](https://www.oeb.ca/newsroom)
- [Privacy policy](https://www.oeb.ca/legal-privacy-statements)

## API Evangelist rating

**Kin Score 43.8** — developing · rubric 0.25.0 · scored 2026-10-23

| Facet | Score |
|---|---|
| Discoverability | 57.1 |
| Contract quality | 51.6 |
| Contract governance | 33.3 |
| Operational transparency | 15.8 |
| Developer ergonomics | 58.9 |
| Access clarity | 28.6 |

**Agent readiness 27.5** — agent-aware

| Agent-readiness dimension | Result |
|---|---|
| Spec Presence | yes |
| Agentic Access | — |
| Reversibility Documented | na |
| MCP Server | — |
| Auth Clarity | bearer (partial credit) |
| Idempotency | na |
| Error Semantics | derived (partial credit) |
| OpenAPI Examples | partial |
| Rate Limit Signal | — |
| Event Surface Described | — |
| Agent Skills | derived (partial credit) |
| Well Known Catalog | — |
| Consent Identity | — |
| Agent Card | — |
| Dry Run Mode | na |
| Delegated Identity | — |
| Protected Resource Metadata | — |
| Dynamic Client Registration | — |
| Agentic Commerce | — |
| Pagination Ratio | paginated |
| Operation Distinctiveness | distinct |

**Regulatory alignment 23.8** — Energy & Utilities

The rubric is published at [github.com/api-evangelist/kin-score](https://github.com/api-evangelist/kin-score). The per-check breakdown behind these numbers — which checks were earned, partial or missed — along with score history and how this provider compares to its peers, is available at [apis.io/providers/ontario-energy-board/](https://apis.io/providers/ontario-energy-board/).

## How this profile is made

API Evangelist profiles a company's public API surface the way a developer would find it: the website, developer portal and documentation, the specifications it publishes, its public repositories, and its pricing, status and changelog pages. From that it derives the properties above — contracts split per API, workflows, schemas, collections, governance rules, plans and rate limits — and scores them against the published [Kin Score rubric](https://github.com/api-evangelist/kin-score).

The artifacts are published on [APIs.io](https://apis.io), not in this repository. This repository is the public record for Ontario Energy Board: the place to say something is wrong, missing or out of date, and to ask for a re-score or a removal.

## Open an issue

- **Something about this listing** — a wrong description, a missing API, a stale artifact or a question about the rating: [open an issue on this repository](https://github.com/api-evangelist/ontario-energy-board/issues/new).
- **A new API, or one that is not in the catalog yet** — [submit it on APIs.io](https://apis.io/add/).
- **Anything else** — [the APIs.io inbox](https://github.com/api-search/inbox/issues/new) or [info@apievangelist.com](mailto:info@apievangelist.com).
