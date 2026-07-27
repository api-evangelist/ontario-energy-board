# Ontario Energy Board (ontario-energy-board)

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

The Ontario Energy Board's Open Data programme, launched September 2022 under Ontario's Digital and Data Directive (2021) and expanded in October 2023 ("Open Data 2.0") and August 2024. It publishes 18 datasets as directly downloadable, anonymous, key-free files — no registration, no application, no rate limit and no terms click-through — under the Open Government Licence – Ontario. This is not a query API: there is no base path, no parameters, no pagination and no machine-readable contract of any kind. It is a set of stable, anonymously fetchable files with a published guide for importing the XML into Excel.

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
| **Market data open** | Yes — 18 datasets, anonymous, key-free, Open Government Licence – Ontario |
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
