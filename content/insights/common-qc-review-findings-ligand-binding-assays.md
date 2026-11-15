---
title: Common QC review findings in ligand-binding assay runs
description: What a QC reviewer checks before a ligand-binding run is accepted, the ICH M10 criteria behind those checks, and five findings that regularly slip past a first read.
date: 2026-11-15
author: Andrew Grozdanov
authorBio: Andrew has spent more than ten years reviewing regulated bioanalytical data, including PK, ADA and NAb assays, at CROs and biotech companies. He is the founder of Lab Integrity Pro.
---

A ligand-binding run can pass every acceptance criterion and still carry a finding. Calibrators within limits and QCs in range tell you the assay performed. They say nothing about whether the reagent was in date, whether the plate was read on the instrument written on the bench sheet, or whether the incubation ran long.

Those questions are answered by reading three records against each other: the approved method, the instrument raw data and the bench sheet. This article covers what I check in each, and the findings I have learned to look for because they are easy to miss.

## Confirm the method version first

Every later check is measured against the method, so the first question is which version the run was performed under. Confirm that it was the approved, effective version on the run date, and that any amendment issued before that date was applied.

> If the method version is wrong, every downstream check is measured against the wrong criteria.

It takes a minute and it is rarely wrong. When it is wrong, nothing else in the review can be trusted.

## Run acceptance: the numbers

The method sets the acceptance criteria, and for most ligand-binding assays they follow ICH M10 (section 4.3.2):

- **Calibration standards** should back-calculate to within ±20% of nominal, or ±25% at the LLOQ and ULOQ. At least 75% of the standards, and a minimum of six concentration levels, must meet this. Anchor points sit outside the quantifiable range and carry no acceptance criteria.
- **QC samples** are run at a minimum of three levels (low, medium and high). At least two-thirds of all QCs, and at least 50% at each level, should be within ±20% of nominal.
- **Blanks** are not included in the curve fit. What the blank response has to look like is defined by the method.

M10 leaves some decisions to the lab. Variability between replicate wells is one of them: the limit has to be predefined in the protocol or SOP. Where a criterion comes from your SOP and not from the guideline, review against the SOP.

Passing these numbers is the start of the review. If a calibrator was excluded, I want to see which one, the reason recorded, and that the rule allowing it was written down before the run and applied the same way it is applied on every other run.

## Five findings that slip through

None of these show up in the run acceptance table. Each one requires opening a second record.

### 1. The right lot in the wrong place

The reagent lot on the bench sheet is correct, but the reference recorded beside it points to a location that does not hold that lot's certificate of analysis. A typical case is the correct client binder with the wrong section number. It gets missed because the lot number looks right and nobody opens the binder. An inspector who follows the reference and finds a different reagent will ask how the lot was verified at all.

### 2. An expiry date that does not match the certificate

The date on the bench sheet was copied by hand and differs from the certificate of analysis. Common causes are a transposed day and month, or a retest date entered as an expiry date. The written date is usually still in the future, so the entry passes a glance. The check that matters is whether the date on the certificate falls on or after the run date.

### 3. Equipment that was in calibration at review but not on the run date

A pipette or plate washer can be in calibration on the day of review and still have been out of service, or overdue, on the day of the run. Calibration records are usually checked for current status. They need to be checked against the run date.

### 4. An instrument ID that differs between records

The bench sheet names one plate reader and the raw data file header names another. Both instruments may be qualified, which is why this looks harmless. It still means the bench sheet does not describe what happened, and it raises the question of which other entries were written from habit.

### 5. An incubation outside its window with no deviation

The method allows 60 minutes plus or minus 5. The recorded start and stop times give 68. Each time looks reasonable alone, and the overrun only appears when someone subtracts one from the other and compares the result with the method. If no deviation was raised, the finding is the missing deviation as much as the eight minutes.

## What each record can tell you

| Record | What it tells you |
| --- | --- |
| Method | What should have happened |
| Raw data | What the instrument measured |
| Bench sheet | What the analyst recorded doing |

Every finding above sits between two of these records. That is why reading any one of them carefully is not enough.

## Audit trail review

For a plate-based assay, the events worth reading are re-regressions, calibrators or wells that were masked, edits to sample identifiers or dilution factors, and plates that were read more than once.

Each change should show who made it, when, and why. Pay attention to timing. A change made after results were reported needs a documented justification and a clear record of what was reported before and after.

## Where automation helps, and where it does not

Finding these mismatches is mechanical work. It means comparing a date with a date, an ID with an ID and a duration with a window, across dozens of fields on every run. Software does that reliably and does not get tired on the fortieth run of the week.

Deciding what a mismatch means is not mechanical. Whether an eight-minute overrun affected the data, or whether a run can stand with a calibrator excluded, is a judgment that belongs to a qualified reviewer.

That split is how I think review automation should work: the software surfaces every disagreement between the records, and the reviewer decides what to do about each one. You can see how Argus applies it on the [Services page](/services).