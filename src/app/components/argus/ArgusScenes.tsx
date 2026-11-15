'use client'

import { type CSSProperties } from 'react'
import s from './ArgusWalkthrough.module.css'
import { useSceneClock } from './clock'

/*
 * Coded scenes for the Argus walkthrough. All identifiers below are invented
 * placeholders (project, method, notebook, lot and instrument IDs).
 */

export const RUN = {
  id: 'R-1186',
  project: 'KT-14',
  assay: 'PK · ELISA',
  method: 'BAM-2207 v3.1',
  notebook: 'ELN-2291 · p.44',
  date: '31-Oct-2026',
}

export const TOTAL_CHECKS = 46
export const FLAG_COUNT = 4

export type Vars = CSSProperties & Record<`--${string}`, string | number>
export const d = (seconds: number): Vars => ({ '--d': `${seconds}s` })

/* ------------------------------------------------------------------ */
/* App shell                                                           */
/* ------------------------------------------------------------------ */

const RAIL = ['◫', '≡', '⬡', '▶', '⊞']

export function ArgusShell({ stage, children }: { stage: string; children: React.ReactNode }) {
  return (
    <div className={s.app}>
      <aside className={s.rail} aria-hidden="true">
        <span className={s.logo}>A</span>
        {RAIL.map((g, i) => (
          <span key={g} className={s.railItem} data-active={i === 3}>
            {g}
          </span>
        ))}
      </aside>
      <div className={s.main}>
        <header className={s.topbar}>
          <span className={s.runId}>{RUN.id}</span>
          <span className={s.meta}>
            {RUN.project} · {RUN.assay} · {RUN.method}
          </span>
          <span className={s.stage}>{stage}</span>
          <span className={`${s.badge} ${s.badgeAmber}`}>Under-review</span>
        </header>
        <div className={s.body}>{children}</div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 1: Ingest                                                     */
/* ------------------------------------------------------------------ */

const METHOD_FIELDS = [
  { label: 'Regression model', value: '4PL · 1/y² weighting' },
  { label: 'Calibrator levels', value: '8 levels · 1.95–250 ng/mL' },
  { label: 'Acceptance · calibrators', value: '%CV ≤ 20% · %RE ±20%' },
  { label: 'Acceptance · QCs', value: '%CV ≤ 20% · %RE ±20%' },
  { label: 'Incubation · sample', value: '60 ± 5 min' },
  { label: 'Incubation · detection Ab', value: '30 ± 5 min' },
]

const ELN_REAGENTS = [
  { name: 'Capture Ab', lot: 'CA-3318', exp: '14-Feb-2027' },
  { name: 'Detection Ab', lot: 'DA-2904', exp: '28-Oct-2026' },
  { name: 'Substrate', lot: 'SB-0751', exp: '09-Jan-2027' },
]

const ELN_FIELDS = [
  { label: 'Sample incubation', value: '68 min' },
  { label: 'Det Ab incubation', value: '31 min' },
  { label: 'Plate reader', value: 'PR-07' },
  { label: 'Plate washer', value: 'PW-03' },
  { label: 'Plate map', value: '96-B' },
  { label: 'Run date', value: '31-Oct-2026' },
]

const ROWS = 'ABCDEFGH'

/** Deterministic pseudo-random 0..1 so server and client render the same plate. */
function noise(i: number) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

function wellLevel(row: number, col: number) {
  if (col < 2) return 1 - row / 8 // calibrators, high to low down the column
  if (col < 4) return [0.85, 0.5, 0.2, 0.05][row % 4] // QCs
  return 0.08 + noise(row * 12 + col) * 0.75 // study samples
}

export function Plate({ start }: { start: number }) {
  return (
    <div className={s.plate} aria-hidden="true">
      <span />
      {Array.from({ length: 12 }, (_, c) => (
        <span key={`h${c}`} className={s.plateHead}>
          {c + 1}
        </span>
      ))}
      {Array.from({ length: 8 }, (_, r) => (
        <PlateRow key={r} r={r} start={start} />
      ))}
    </div>
  )
}

function PlateRow({ r, start }: { r: number; start: number }) {
  return (
    <>
      <span className={s.plateHead}>{ROWS[r]}</span>
      {Array.from({ length: 12 }, (_, c) => {
        const v = wellLevel(r, c)
        return (
          <span
            key={c}
            className={s.well}
            style={{ ...d(start + c * 0.09 + r * 0.025), '--v': v.toFixed(2) } as Vars}
          />
        )
      })}
    </>
  )
}

export function IngestScene() {
  return (
    <div className={s.ingest}>
      <section className={s.panel} style={d(0)}>
        <PanelHead kind="PDF" name={`${RUN.method}.pdf`} title="Method" done={1.7} />
        <div className={s.fieldList}>
          {METHOD_FIELDS.map((f, i) => (
            <div key={f.label} className={s.field} style={d(0.3 + i * 0.22)}>
              <span className={s.label}>{f.label}</span>
              <span className={s.value}>{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={s.panel} style={d(1.3)}>
        <PanelHead kind="TXT" name={`${RUN.id}_plate1.txt`} title="Raw data" done={3.4} />
        <div className={s.rawMeta} style={d(1.5)}>
          <span>
            <span className={s.label}>Instrument ID</span> <b>PR-11</b>
          </span>
          <span>
            <span className={s.label}>Read</span> <b>{RUN.date}</b>
          </span>
          <span>
            <span className={s.label}>OD</span> <b>450 nm</b>
          </span>
        </div>
        <Plate start={1.7} />
        <div className={s.plateStats} style={d(2.9)}>
          {[
            ['Calibrators', '16 wells'],
            ['QCs', '16 wells'],
            ['Study samples', '64 wells'],
          ].map(([k, v]) => (
            <span key={k}>
              <span className={s.label}>{k}</span>
              <b>{v}</b>
            </span>
          ))}
        </div>
        <div className={s.legend} style={d(3)}>
          <span><i data-k="cal" />Calibrators</span>
          <span><i data-k="qc" />QCs</span>
          <span><i data-k="sample" />Study samples</span>
          <span className={s.mono}>96 / 96 wells</span>
        </div>
      </section>

      <section className={s.panel} style={d(2.9)}>
        <PanelHead kind="ELN" name={RUN.notebook} title="Bench sheet" done={4.9} />
        <div className={s.reagents} style={d(3.15)}>
          <span className={s.label}>Reagent</span>
          <span className={s.label}>Lot</span>
          <span className={s.label}>Exp</span>
          {ELN_REAGENTS.map((r, i) => (
            <Reagent key={r.lot} {...r} delay={3.3 + i * 0.25} />
          ))}
        </div>
        <div className={`${s.fieldList} ${s.fieldGrid}`}>
          {ELN_FIELDS.map((f, i) => (
            <div key={f.label} className={s.field} style={d(4.0 + i * 0.15)}>
              <span className={s.label}>{f.label}</span>
              <span className={s.value}>{f.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Reagent({ name, lot, exp, delay }: { name: string; lot: string; exp: string; delay: number }) {
  return (
    <>
      <span className={s.cellIn} style={d(delay)}>
        {name}
      </span>
      <span className={`${s.cellIn} ${s.mono}`} style={d(delay)}>
        {lot}
      </span>
      <span className={`${s.cellIn} ${s.mono}`} style={d(delay)}>
        {exp}
      </span>
    </>
  )
}

export function PanelHead({
  kind,
  name,
  title,
  done,
  status = 'Parsed',
}: {
  kind: string
  name: string
  title: string
  done: number
  status?: string
}) {
  return (
    <div className={s.panelHead}>
      <span className={s.fileKind}>{kind}</span>
      <span className={s.panelTitle}>
        <b>{title}</b>
        <span>{name}</span>
      </span>
      <span className={`${s.badge} ${s.badgeGreen} ${s.parsed}`} style={d(done)}>
        {status}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 2: Reconcile                                                  */
/* ------------------------------------------------------------------ */

type Src = 'M' | 'E' | 'R'
const COL: Record<Src, number> = { M: 2, E: 3, R: 4 }

const CHECKS: { label: string; cells: Partial<Record<Src, string>>; flag?: boolean }[] = [
  { label: 'Regression model', cells: { M: '4PL · 1/y²', R: '4PL fit · 1/y²' } },
  { label: 'Calibrator levels', cells: { M: '8 levels', R: '8 × 2 wells' } },
  { label: 'Calibrator %CV', cells: { M: '≤ 20%', R: 'Cal 7: 24.0%' }, flag: true },
  { label: 'Sample incubation', cells: { M: '60 ± 5 min', E: '68 min' }, flag: true },
  { label: 'Det Ab incubation', cells: { M: '30 ± 5 min', E: '31 min' } },
  { label: 'Capture Ab expiry', cells: { E: '14-Feb-2027', R: `Run ${RUN.date}` } },
  { label: 'Det Ab expiry', cells: { E: '28-Oct-2026', R: `Run ${RUN.date}` }, flag: true },
  { label: 'Plate reader ID', cells: { E: 'PR-07', R: 'PR-11' }, flag: true },
  { label: 'Plate layout', cells: { E: 'Map 96-B', R: '96 wells' } },
]

const SRC_NAME: Record<Src, string> = { M: 'Method', E: 'ELN', R: 'Raw data' }

const CHECK_START = 0.3
const CHECK_STEP = 0.36
const resolveAt = (i: number) => CHECK_START + i * CHECK_STEP + 0.55
const COUNT_END = resolveAt(CHECKS.length - 1) + 0.3

export function ReconcileScene() {
  const t = useSceneClock(COUNT_END)

  const p = Math.min(1, Math.max(0, (t - CHECK_START) / (COUNT_END - CHECK_START)))
  const checks = Math.round(TOTAL_CHECKS * p)
  const flagged = CHECKS.filter((c, i) => c.flag && t >= resolveAt(i)).length

  return (
    <div className={s.reconcile}>
      <div className={s.counterBar}>
        <span className={s.counter}>
          <b>{checks}</b>
          <span>/ {TOTAL_CHECKS} checks</span>
        </span>
        <span className={s.tally}>
          <span className={s.ok}>● {checks - flagged} matched</span>
          <span className={s.warn}>● {flagged} flagged</span>
        </span>
      </div>

      <div className={s.checkHead} aria-hidden="true">
        <span />
        <span>Method</span>
        <span>ELN bench sheet</span>
        <span>Raw data</span>
      </div>

      <div className={s.checks}>
        {CHECKS.map((c, i) => {
          const srcs = (Object.keys(c.cells) as Src[]).sort((a, b) => COL[a] - COL[b])
          const from = COL[srcs[0]]
          const to = COL[srcs[srcs.length - 1]] + 1
          const style = { ...d(CHECK_START + i * CHECK_STEP), '--from': from, '--to': to } as Vars
          return (
            <div key={c.label} className={s.check} data-flag={c.flag ? 'true' : undefined} style={style}>
              <span className={s.checkLabel}>
                <i className={s.statusDot} />
                {c.label}
              </span>
              {(['M', 'E', 'R'] as Src[]).map((k) =>
                c.cells[k] ? (
                  <span key={k} className={s.chip} style={{ gridColumn: COL[k] }}>
                    <span className={s.chipSrc}>{SRC_NAME[k]}</span>
                    {c.cells[k]}
                  </span>
                ) : null,
              )}
              <span className={s.link} aria-hidden="true" />
            </div>
          )
        })}
      </div>
      <p className={s.more}>+ more checks across all three sources</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 3: Flags                                                      */
/* ------------------------------------------------------------------ */

export const FLAGS = [
  {
    pair: 'Method vs ELN',
    title: 'Sample incubation outside window',
    detail: 'Recorded time is 3 min past the upper limit of the method window.',
    a: { src: 'Method', where: `${RUN.method} · §7.4`, value: '60 ± 5 min', note: 'Allowed window' },
    b: { src: 'ELN', where: RUN.notebook, value: '68 min', note: 'Recorded 10:12 → 11:20' },
  },
  {
    pair: 'ELN vs Raw data',
    title: 'Plate reader ID does not match',
    detail: 'The bench sheet names a different reader than the one that wrote the data file.',
    a: { src: 'ELN', where: `${RUN.notebook} · Equipment`, value: 'PR-07', note: 'Reader on bench sheet' },
    b: { src: 'Raw data', where: `${RUN.id}_plate1.txt · header`, value: 'PR-11', note: 'Instrument in data file' },
  },
  {
    pair: 'ELN vs Run date',
    title: 'Detection antibody lot expired',
    detail: 'Lot DA-2904 expired 3 days before the run date.',
    a: { src: 'ELN', where: 'Detection Ab · DA-2904', value: '28-Oct-2026', note: 'Lot expiration' },
    b: { src: 'Run date', where: RUN.id, value: RUN.date, note: '3 days after expiry' },
  },
  {
    pair: 'Raw data vs Method',
    title: 'Calibrator precision over limit',
    detail: 'One calibrator level exceeds the method %CV limit.',
    a: { src: 'Raw data', where: 'Cal 7 · 3.91 ng/mL', value: '%CV 24.0%', note: 'Duplicate wells G1/G2' },
    b: { src: 'Method', where: `${RUN.method} · §9.2`, value: '≤ 20%', note: 'Calibrator %CV limit' },
  },
]

export function FlagsScene() {
  return (
    <div className={s.flags}>
      {FLAGS.map((f, i) => (
        <article key={f.title} className={s.flagCard} style={d(0.2 + i * 0.7)}>
          <header className={s.flagHead}>
            <span className={s.flagNo}>
              Flag {i + 1}/{FLAG_COUNT}
            </span>
            <span className={`${s.badge} ${s.badgeAmber}`}>{f.pair}</span>
          </header>
          <h4 className={s.flagTitle}>{f.title}</h4>
          <p className={s.flagDetail}>{f.detail}</p>
          <div className={s.compare}>
            <SourceBox {...f.a} />
            <span className={s.neq} aria-label="does not match">
              ≠
            </span>
            <SourceBox {...f.b} />
          </div>
        </article>
      ))}
    </div>
  )
}

export function SourceBox({ src, where, value, note }: { src: string; where: string; value: string; note: string }) {
  return (
    <div className={s.source}>
      <span className={s.sourceName}>{src}</span>
      <span className={s.sourceRef}>{where}</span>
      <span className={s.sourceValue}>{value}</span>
      <span className={s.sourceNote}>{note}</span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 4: Review                                                     */
/* ------------------------------------------------------------------ */

export function ReviewScene() {
  const passed = TOTAL_CHECKS - FLAG_COUNT
  return (
    <div className={s.review}>
      <div className={s.summary} style={d(0.1)}>
        <div className={s.summaryNums}>
          <span className={s.bigOk}>
            <b>{passed}</b> checks passed
          </span>
          <span className={s.bigWarn}>
            <b>{FLAG_COUNT}</b> flagged
          </span>
        </div>
        <div className={s.meter} aria-hidden="true">
          <span className={s.meterOk} style={{ flexGrow: passed }} />
          <span className={s.meterWarn} style={{ flexGrow: FLAG_COUNT }} />
        </div>
        <span className={s.awaiting}>Awaiting reviewer disposition</span>
      </div>

      <div className={s.flagTable}>
        <div className={s.flagTableHead}>
          <span>#</span>
          <span>Flag</span>
          <span>Sources</span>
          <span>Disposition</span>
        </div>
        {FLAGS.map((f, i) => (
          <div key={f.title} className={s.flagRow} style={d(0.5 + i * 0.35)}>
            <span className={s.flagIdx}>F{i + 1}</span>
            <span className={s.flagRowTitle}>
              {f.title}
              <small>{f.detail}</small>
            </span>
            <span className={s.flagSources}>
              <span className={s.srcTag}>{f.a.src}</span>
              <span className={s.srcTag}>{f.b.src}</span>
            </span>
            <span className={s.disposition}>Reviewer to complete</span>
          </div>
        ))}
      </div>
    </div>
  )
}
