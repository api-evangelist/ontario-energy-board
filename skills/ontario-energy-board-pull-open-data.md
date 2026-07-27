---
name: ontario-energy-board-pull-open-data
description: Pull Ontario Energy Board open datasets — rates, distributor scorecards, complaints, licensed participants, open applications and GIS service areas — without breaking the host or reading a stale file.
api: ontario-energy-board:oeb-open-data
generated: '2026-07-27'
method: generated
source: openapi/ontario-energy-board-open-data-openapi.yml
operations:
  - getAllOpenApplCasesV2ReportFile
  - getAllLicencesReportFile
  - getBillData
  - getBillDataGS
  - getGasBillData
  - getScorecardData2024
  - getComplaintsData2022
  - getHistoricalRppPrices
  - getOpenDataElectricityMap20260429
  - getOpenDataNaturalgasMap20260225
---

# Pull OEB Open Data

The OEB's Open Data programme is 40 datasets and 198 published files, served anonymously as XML, XLSX
and GIS ZIP bundles under the Open Government Licence – Ontario. There is no query interface: no
parameters, no pagination, no filtering, no content negotiation. Every operation is a plain GET of a
whole file.

Two things will break a naive integration, and both are undocumented.

## Steps

1. **Resolve the current filename before every scheduled fetch.** Open Data is versioned by
   *filename*, not by URL. A refresh arrives as a new name — `scorecard_data_2024.xml`,
   `open-data-electricity-map-20260429.zip` — while the old URL usually keeps serving stale bytes.
   Fetch the dataset landing page (it is on every operation's tag `externalDocs`, e.g.
   `https://www.oeb.ca/open-data/electricity-distributor-performance-scorecard`), take the file link
   from it, then fetch. Never pin a dated filename permanently.

2. **Fetch serially.** There is no published rate limit, no `RateLimit-*` header, no `Retry-After` and
   no 429. What happens instead is that `www.oeb.ca` stops answering: connections time out with no
   HTTP status at all. On 2026-07-27 that took roughly 200 requests in 20 minutes at up to 20
   concurrent connections, and it recovered after a pause. One connection at a time, generous
   timeouts, back off completely on a timeout rather than retrying in parallel.

3. **Use conditional GET.** Every verified file returns `Last-Modified`. Store it and send
   `If-Modified-Since`. This is the only change signal that exists — there is no changelog feed, no
   webhook and no event surface.

4. **Pick the right poll interval per dataset.**

   | Dataset | Operation | Cadence |
   |---|---|---|
   | Open applications before the Board | `getAllOpenApplCasesV2ReportFile` | daily |
   | Licensed market participants | `getAllLicencesReportFile` | daily |
   | Current electricity rates (residential / GS <50 kW) | `getBillData`, `getBillDataGS` | monthly |
   | Current natural gas rates | `getGasBillData` | monthly |
   | Distributor performance scorecard | `getScorecardData2024` | annually |
   | Distributor complaints | `getComplaintsData2022` | annually |
   | Historical RPP prices | `getHistoricalRppPrices` | on change |
   | GIS service areas | `getOpenDataElectricityMap20260429`, `getOpenDataNaturalgasMap20260225` | on change (date-stamped filenames) |

5. **Parse XML, not JSON.** 27 of the 33 verified files are `text/xml`. There is no JSON
   representation of any dataset and no published schema, XSD or data dictionary — the element names
   are the documentation. The OEB's only guidance is a PDF explaining how to import the XML into
   Excel.

6. **Join on distributor name, and know that it is fragile.** No stable machine identifier for a
   distributor is published across the scorecard, complaints, RRR and GIS series. The name is the
   join key and it is free text. See `data-model/ontario-energy-board-data-model.yml`.

7. **Attribute the data.** The licence requires it:
   *"Contains information licensed under the Open Government Licence – Ontario."*

## Conventions that apply

- **Authentication:** none — no key, no signup, no terms click-through.
- **Idempotency:** not applicable; read-only surface, GETs only.
- **Errors:** a missing file is a real 404 with an HTML body. A throttled client gets no HTTP status
  at all. See `errors/ontario-energy-board-problem-types.yml`.
- **Coverage caveat:** this repo's spec carries 33 operations — the files verified live on
  2026-07-27. The OEB publishes ~165 more historical and current RRR files (the 2015-2021, 2023 and
  2024-2 series plus the natural gas GD series); the full inventory, verified or not, is in
  `data-model/ontario-energy-board-data-model.yml`.
