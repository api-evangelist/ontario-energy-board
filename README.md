# Ontario Energy Board (ontario-energy-board)

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

The Ontario Energy Board (OEB) is the independent regulator of Ontario's electricity and natural gas sectors, licensing and rate-regulating roughly 60 electricity distributors, the province's transmitters, storage and generation licensees, unit sub-meter providers, energy retailers and gas marketers, and Enbridge Gas. It sits above the wires-and-pipes layer of Canada's largest provincial energy market — it does not own assets, does not run the wholesale market (that is IESO) and holds no customer meter data — so everything it publishes is regulatory, rate and utility-performance data rather than consumption data. Its API posture is the sharpest consumer-versus-market split this series has recorded in Canada: genuinely open, key-free market data, and no consumer data at all, from the very body that forced 54 utilities to open theirs.

**APIs.json:** [https://raw.githubusercontent.com/api-evangelist/ontario-energy-board/refs/heads/main/apis.yml](https://raw.githubusercontent.com/api-evangelist/ontario-energy-board/refs/heads/main/apis.yml)

## Tags

- Energy
- Canada
- Ontario
- Utilities
- Electricity
- Gas
- Green Button
- Smart Metering
- Energy Markets
- Regulator
- Open Data
- Grid

## Timestamps

- **Created:** 2026-07-27
- **Modified:** 2026-07-27

## APIs

### OEB Open Data

The Ontario Energy Board's Open Data programme, launched September 2022 under Ontario's Digital and Data Directive (2021) and expanded in October 2023 ("Open Data 2.0") and August 2024. It publishes 40 datasets linking 198 individual files (crawled and counted 2026-07-27; the earlier figure of 18 undercounted the natural gas RRR, yearbook and register series) as directly downloadable, anonymous, key-free files — no registration, no application, no rate limit and no terms click-through — under the Open Government Licence – Ontario. This is not a query API: there is no base path, no parameters, no pagination and no machine-readable contract of any kind. It is a set of stable, anonymously fetchable files with a published guide for importing the XML into Excel.

- **Human URL:** [https://www.oeb.ca/open-data](https://www.oeb.ca/open-data)

#### Tags

- Open Data
- Energy
- Electricity
- Gas
- Rates
- Utility Performance
- Regulatory
- XML
- GIS

#### Properties

- [Documentation](https://www.oeb.ca/open-data)
- [Getting Started](https://www.oeb.ca/sites/default/files/Open-Data-Guide-XML-Excel-20221215.pdf)
- [Content License](https://www.ontario.ca/page/open-government-licence-ontario) — Open Government Licence – Ontario
- [Reference](https://www.ontario.ca/page/ontarios-digital-and-data-directive-2021) — Ontario's Digital and Data Directive, 2021
- [Dataset](https://www.oeb.ca/_html/xml/all_open_appl_Cases_v2_reportFile.xml) — every open application before the Board, refreshed daily
- [Dataset](https://www.oeb.ca/_html/calculator/data/BillData.xml) — current residential electricity rates, monthly
- [Dataset](https://www.oeb.ca/_html/calculator/data/BillData_GS.xml) — current general service < 50 kW electricity rates, monthly
- [Dataset](https://www.oeb.ca/_html/calculator/data/GasBillData.xml) — current residential natural gas rates, quarterly
- [Dataset](https://www.oeb.ca/documents/opendata/open-data-electricity-map-20260429.zip) — electricity distributor service areas, GIS
- [Dataset](https://www.oeb.ca/documents/opendata/open-data-naturalgas-map-20260225.zip) — natural gas distributor service areas, GIS
- [Dataset](https://www.oeb.ca/_html/performance/data/scorecard_data_2024.xml) — electricity distributor performance scorecard, 2013–2024 series
- [Dataset](https://www.oeb.ca/_html/performance/data/complaints_data_2022.xml) — distributor complaints received by the OEB, 2013–2022 series
- [Dataset](https://www.oeb.ca/documents/opendata/rrr/2.1.4.2%20System%20Reliability%20Indicators.xml) — RRR 2.1.4.2 system reliability, one of thirteen RRR series

### OEB Regulatory Document Search (RDS)

The OEB's public regulatory document search, serving every filing, decision, order, licence, code amendment and piece of correspondence in the Board's case record. It runs on Micro Focus / OpenText Content Manager WebDrawer, and the OEB links parameterised query URLs to it from its own website. Fetched anonymously, it also honours a `format=json` parameter and returns a Content Manager `ServiceAPIModel` JSON payload. The OEB publishes **no** API reference, query-syntax documentation, base-URI statement, OpenAPI or terms for this interface — the JSON output is default behaviour of the underlying product, not a supported OEB offering. Recorded here because it was verified live and anonymous, not because it is an offered API.

- **Human URL:** [https://www.oeb.ca/rds](https://www.oeb.ca/rds)
- **Base URL:** `https://www.rds.oeb.ca/CMWebDrawer`

#### Tags

- Regulatory
- Document Search
- Filings
- Decisions
- Licences
- Undocumented

#### Properties

- [Documentation](https://www.oeb.ca/rds)
- [Reference](https://www.rds.oeb.ca/CMWebDrawer/Record?q=CaseNumber=EB-2021-0183&sortBy=recRegisteredOn-&pageSize=400) — the Green Button consultation case record, EB-2021-0183
- [Documentation](https://www.oeb.ca/ontarios-energy-sector/list-licensed-companies) — list of licensed companies, every entry linking into RDS

## Mandate

| | |
|---|---|
| **Regime** | `green-button-ontario` |
| **Instrument** | O. Reg. 633/21 (Energy Data) under the Electricity Act, 1998 (Ontario) |
| **Standard** | Green Button — NAESB REQ.21 ESPI v3.3, Green Button Alliance certified |
| **Deadline** | 1 November 2023 |
| **Applies to the OEB itself** | No — the OEB is the supervisor, not a data holder |
| **Status** | `live-implemented` — verified through the OEB's own published register: [54 distributors confirmed, 6 extensions granted](https://www.oeb.ca/sites/default/files/Green-Button-implementation-status-summary.pdf) |
| **Consumer data API** | No — the OEB holds no customer energy data |
| **Market data open** | Yes — 40 datasets / 198 files, anonymous, key-free, Open Government Licence – Ontario |
| **Access gate** | `self-serve` — no account, no key, no application, no terms click-through |
| **Auth model** | None; anonymous HTTP GET |
| **Home market** | Canada (Ontario) |

Ontario is the only Canadian jurisdiction with a compulsory energy-data-sharing rule. There is no federal equivalent — electricity is a provincial head of power in Canada, which is exactly why Australia's national CDR-for-energy has no Canadian twin.

## Findings

- **The regulator out-publishes the regulated.** The OEB gives away roughly sixty machine-readable files with no key and no signup, while every Ontario utility bound by the mandate it enforces keeps its consumer data behind application approval or a customer login.
- **A mandate is not an implementation — but Ontario is where the two can be told apart**, because the regulator publishes the register. That register is the single most useful artifact in the jurisdiction, and it is a PDF that is not part of the open data programme.
- **Open data without a contract is still a manual integration.** Every OEB dataset is a hand-fetched file with a bespoke, undocumented XML shape and no versioning scheme beyond the filename. No OpenAPI, no XSD, no JSON Schema, no DCAT.

## Review

See [review.yml](review.yml) for the full probe log, mandate evidence, and the consumer-versus-market-data split.
