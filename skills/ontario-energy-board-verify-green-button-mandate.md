---
name: ontario-energy-board-verify-green-button-mandate
description: Verify — rather than take on trust — whether an Ontario utility actually implemented the Green Button data-sharing mandate, using the OEB's own implementation register, licence register and case record.
api: ontario-energy-board:oeb-regulatory-document-search
generated: '2026-07-27'
method: generated
source: openapi/ontario-energy-board-rds-openapi.yml, openapi/ontario-energy-board-open-data-openapi.yml
operations:
  - searchRecords
  - downloadRecordDocument
  - getAllLicencesReportFile
---

# Verify the Green Button mandate for an Ontario utility

Ontario is the only Canadian jurisdiction with a compulsory energy-data-sharing rule. O. Reg. 633/21
(Energy Data) under the *Electricity Act, 1998* required rate-regulated electricity and natural gas
utilities to implement Green Button Download My Data and Connect My Data to NAESB REQ.21 ESPI v3.3 by
1 November 2023. The OEB is the **supervisor** of that mandate, not an obligated party — it holds no
customer meter, usage or billing data and implements no Green Button endpoint of its own.

That makes the OEB the best available evidence source in the jurisdiction for whether the mandate
produced real implementations, and this skill is how you use it instead of believing a utility's
marketing page.

## Steps

1. **Start with the register the OEB publishes.** The Green Button implementation status summary
   names confirmed distributors and extensions:
   `https://www.oeb.ca/sites/default/files/Green-Button-implementation-status-summary.pdf`
   (HTTP 200, `application/pdf`, 399,394 bytes on 2026-07-27). It is a PDF, not a feed — which is
   itself the finding worth recording about this organisation.

2. **Confirm the utility is an obligated party.** Fetch the licensed market participants register
   with `getAllLicencesReportFile`
   (`https://www.oeb.ca/_html/xml/all_Licences_report_File.xml`, 605 KB XML). If the utility does not
   hold a rate-regulated distribution licence, the regulation does not bind it.

3. **Pull the consultation record.** Call `searchRecords` with the Green Button proceeding:

   ```
   GET https://www.rds.oeb.ca/CMWebDrawer/Record
       ?q=CaseNumber=EB-2021-0183
       &sortBy=recRegisteredOn-
       &pageSize=400
       &format=json
   ```

   40 records on 2026-07-27 — the consultation, the Retail Settlement Code amendment, correspondence
   and cost-award decisions. Check `SearchTitle` on the response before trusting the count: a rejected
   query returns HTTP 200 with an empty `Results` array and the reason in that field.

4. **Find the utility's own filings.** Narrow by applicant or free text against the same record —
   `q=Applicant:<utility name>` or `q=anyWord:<utility name>` — and cross-reference `CaseNumber`
   against the Green Button proceeding. Valid clause names are in
   `vocabulary/ontario-energy-board-rds-search-clauses.yml`; there are 303 of them and an invalid one
   fails silently with HTTP 200.

5. **Download the evidence.** For each relevant record, call `downloadRecordDocument`
   (`GET /Record/{uri}/File/document`) and read the filing itself. Check `RecordExtension` on the hit
   first — correspondence is often `MSG`, not `PDF`.

6. **Record what you found, including what you could not verify.** The OEB publishes the register and
   the case record; it does not publish a per-utility machine-readable conformance flag, and the Green
   Button Alliance's certification announcement does not name individual utilities. "Named in the
   OEB's register" is a verified fact. "Certified" is usually not verifiable from public sources —
   record it as unverified rather than as absent or as true.

## Cross-references in this network

- `all/hydro-one/` — the mandated Connect My Data side: a live OAuth 2.0 ESPI authorization surface,
  no published spec, third-party onboarding gated behind approval.
- `all/toronto-hydro/` — the sharpest contrast: zero open data, mandated Green Button behind an
  application process.
- `conformance/ontario-energy-board-conformance.yml` — the OEB's own standards posture, including why
  every Green Button entry there is marked `not-applicable / role: regulator`.

A regulator publishing more open, more anonymous, more machine-readable data than the utilities it
supervises is the pattern this corpus keeps finding. In Ontario it is stark, and this skill is how you
prove it rather than assert it.
