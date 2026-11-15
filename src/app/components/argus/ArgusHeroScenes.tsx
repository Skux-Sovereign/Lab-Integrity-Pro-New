'use client'

import s from './ArgusWalkthrough.module.css'
import h from './ArgusHero.module.css'
import { useSceneClock } from './clock'
import { PanelHead, Plate, RUN, SourceBox, d } from './ArgusScenes'

/*
 * Simplified three-scene walkthrough for the home page hero:
 * Load → Check → Result. All identifiers are invented placeholders.
 */

const HERO_CHECKS = 31
const HERO_FLAGS = 3

/* ------------------------------------------------------------------ */
/* Pinned method reference strip                                       */
/* ------------------------------------------------------------------ */

const LIMITS = [
  { k: 'Regression', v: '4PL · 1/y²' },
  { k: 'Cal %CV', v: '≤ 20%' },
  { k: 'Cal %RE', v: '±20%' },
  { k: 'Sample incubation', v: '60 ± 5 min' },
  { k: 'Det Ab incubation', v: '30 ± 5 min' },
]

function MethodStrip() {
  return (
    <div className={h.strip}>
      <div className={h.stripId}>
        <span className={h.pin} aria-hidden="true">
          <svg viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 2h4l-.5 4 2.5 2.5H4L6.5 6 6 2Z" strokeLinejoin="round" />
            <path d="M8 8.5V14" strokeLinecap="round" />
          </svg>
        </span>
        <span className={h.stripText}>
          <span className={s.label}>Method on file</span>
          <b>{RUN.method}</b>
        </span>
      </div>
      <ul className={h.limits}>
        {LIMITS.map((l) => (
          <li key={l.k}>
            <span>{l.k}</span>
            <b>{l.v}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 1: Load                                                       */
/* ------------------------------------------------------------------ */

const REAGENTS = [
  { name: 'Capture Ab', lot: 'CA-3318', exp: '14-Feb-2027' },
  { name: 'Detection Ab', lot: 'DA-2904', exp: '09-Mar-2027' },
  { name: 'Substrate', lot: 'SB-0751', exp: '09-Jan-2027' },
]

const ELN_FIELDS = [
  { label: 'Sample incubation', value: '68 min' },
  { label: 'Det Ab incubation', value: '31 min' },
  { label: 'Plate reader', value: 'PR-07' },
  { label: 'Plate washer', value: 'PW-03' },
  { label: 'Plate map', value: '96-B' },
  { label: 'Run date', value: RUN.date },
]

export function LoadScene() {
  return (
    <div className={h.load}>
      <MethodStrip />
      <div className={h.records}>
        <section className={`${s.panel} ${h.drop}`} style={d(0.2)}>
          <PanelHead kind="TXT" name={`${RUN.id}_plate1.txt`} title="Raw data file" done={2.6} status="Loaded" />
          <div className={s.rawMeta} style={d(0.7)}>
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
          <Plate start={0.8} />
          <div className={s.legend} style={d(2.2)}>
            <span>
              <i data-k="cal" />
              Calibrators
            </span>
            <span>
              <i data-k="qc" />
              QCs
            </span>
            <span>
              <i data-k="sample" />
              Study samples
            </span>
            <span className={s.mono}>96 / 96 wells</span>
          </div>
        </section>

        <section className={`${s.panel} ${h.drop}`} style={d(1.3)}>
          <PanelHead kind="ELN" name={`${RUN.notebook} · export`} title="ELN bench sheet" done={3.6} status="Loaded" />
          <div className={s.reagents} style={d(1.7)}>
            <span className={s.label}>Reagent</span>
            <span className={s.label}>Lot</span>
            <span className={s.label}>Exp</span>
            {REAGENTS.map((r, i) => (
              <ReagentRow key={r.lot} {...r} delay={1.8 + i * 0.15} />
            ))}
          </div>
          <div className={h.elnFields}>
            {ELN_FIELDS.map((f, i) => (
              <div key={f.label} className={s.field} style={d(2.3 + i * 0.15)}>
                <span className={s.label}>{f.label}</span>
                <span className={s.value}>{f.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function ReagentRow({ name, lot, exp, delay }: { name: string; lot: string; exp: string; delay: number }) {
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

/* ------------------------------------------------------------------ */
/* Scene 2: Check                                                      */
/* ------------------------------------------------------------------ */

type Side = { label: string; value: string; limit: string; flag?: boolean }
type Row =
  | { kind: 'limits'; left: Side; right: Side; phone?: boolean }
  | { kind: 'cross'; left: { label: string; value: string }; right: { label: string; value: string }; flag?: boolean; phone?: boolean }

const ROWS: Row[] = [
  {
    kind: 'limits',
    phone: true,
    left: { label: 'Sample incubation', value: '68 min', limit: '60 ± 5 min', flag: true },
    right: { label: 'Calibrator %CV', value: '24.0% · Cal 7', limit: '≤ 20%', flag: true },
  },
  {
    kind: 'limits',
    phone: true,
    left: { label: 'Det Ab incubation', value: '31 min', limit: '30 ± 5 min' },
    right: { label: 'Calibrator %RE', value: '12.4% max', limit: '±20%' },
  },
  {
    kind: 'limits',
    phone: true,
    left: { label: 'Substrate incubation', value: '15 min', limit: '15 ± 2 min' },
    right: { label: 'QC %CV', value: '8.1% max', limit: '≤ 20%' },
  },
  {
    kind: 'limits',
    left: { label: 'Incubation temp', value: '23 °C', limit: '20–25 °C' },
    right: { label: 'Curve fit', value: '4PL · 1/y²', limit: '4PL · 1/y²' },
  },
  {
    kind: 'cross',
    phone: true,
    flag: true,
    left: { label: 'Plate reader', value: 'PR-07' },
    right: { label: 'Instrument ID', value: 'PR-11' },
  },
  {
    kind: 'cross',
    phone: true,
    left: { label: 'Run date', value: RUN.date },
    right: { label: 'Read date', value: RUN.date },
  },
  {
    kind: 'cross',
    left: { label: 'Plate map', value: '96-B' },
    right: { label: 'Wells read', value: '96 / 96' },
  },
]

const START = 0.3
const STEP = 0.3
/** Each visible check, in the order it runs, with its flag state. */
const ORDER: boolean[] = ROWS.flatMap((r) => (r.kind === 'limits' ? [!!r.left.flag, !!r.right.flag] : [!!r.flag]))
const resolveAt = (i: number) => START + i * STEP + 0.5
const DONE = resolveAt(ORDER.length - 1) + 0.3

export function CheckScene() {
  const t = useSceneClock(DONE)
  const p = Math.min(1, Math.max(0, (t - START) / (DONE - START)))
  const checks = Math.round(HERO_CHECKS * p)
  const flagged = ORDER.filter((f, i) => f && t >= resolveAt(i)).length

  let n = 0
  return (
    <div className={h.check}>
      <MethodStrip />
      <div className={s.counterBar}>
        <span className={s.counter}>
          <b>{checks}</b>
          <span>/ {HERO_CHECKS} checks</span>
        </span>
        <span className={s.tally}>
          <span className={s.ok}>● {checks - flagged} passed</span>
          <span className={s.warn}>● {flagged} flagged</span>
        </span>
      </div>

      <div className={h.grid}>
        <div className={h.gridHead} aria-hidden="true">
          <span className={h.headLeft}>
            ELN bench sheet <em>vs method</em>
          </span>
          <span className={h.headRight}>
            Raw data <em>vs method</em>
          </span>
        </div>
        {ROWS.map((r, i) => {
          if (r.kind === 'limits') {
            const a = n++
            const b = n++
            return (
              <div key={i} className={h.row} data-phone={r.phone ? 'true' : undefined}>
                <LimitCheck side="left" src="ELN" {...r.left} delay={START + a * STEP} />
                <LimitCheck side="right" src="Raw" {...r.right} delay={START + b * STEP} />
              </div>
            )
          }
          const c = n++
          return (
            <div
              key={i}
              className={`${h.row} ${h.cross}`}
              data-phone={r.phone ? 'true' : undefined}
              data-flag={r.flag ? 'true' : undefined}
              style={d(START + c * STEP)}
            >
              <Rec className={h.recLeft} src="ELN" {...r.left} />
              <span className={`${h.line} ${h.crossLine}`} aria-hidden="true">
                <span className={h.crossTag}>ELN ↔ Raw data</span>
              </span>
              <Rec className={h.recRight} src="Raw" {...r.right} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LimitCheck({
  side,
  src,
  label,
  value,
  limit,
  flag,
  delay,
}: Side & { side: 'left' | 'right'; src: string; delay: number }) {
  return (
    <div className={`${h.side} ${side === 'left' ? h.sideLeft : h.sideRight}`} data-flag={flag ? 'true' : undefined} style={d(delay)}>
      <Rec src={src} label={label} value={value} />
      <span className={h.line} aria-hidden="true" />
      <span className={`${h.chip} ${h.limit}`}>
        <span className={h.chipLabel}>Method</span>
        {limit}
      </span>
    </div>
  )
}

function Rec({ src, label, value, className = '' }: { src: string; label: string; value: string; className?: string }) {
  return (
    <span className={`${h.chip} ${h.rec} ${className}`}>
      <span className={h.chipLabel}>
        <span className={h.chipSrc}>{src} · </span>
        {label}
      </span>
      {value}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Scene 3: Result                                                     */
/* ------------------------------------------------------------------ */

const HERO_FLAGS_LIST = [
  {
    pair: 'ELN vs Method',
    title: 'Incubation outside window',
    detail: 'Sample incubation ran 3 min past the method’s upper limit.',
    a: { src: 'ELN', where: `${RUN.notebook} · Incubations`, value: '68 min', note: 'Recorded 10:12 → 11:20' },
    b: { src: 'Method', where: `${RUN.method} · §7.4`, value: '60 ± 5 min', note: 'Allowed window' },
  },
  {
    pair: 'Raw data vs Method',
    title: 'Calibrator %CV over limit',
    detail: 'One calibrator level is less precise than the method allows.',
    a: { src: 'Raw data', where: 'Cal 7 · wells G1/G2', value: '24.0%', note: 'Calibrator %CV' },
    b: { src: 'Method', where: `${RUN.method} · §9.2`, value: '≤ 20%', note: 'Calibrator %CV limit' },
  },
  {
    pair: 'ELN vs Raw data',
    title: 'Plate reader ID mismatch',
    detail: 'The bench sheet names a different reader than the one in the data file.',
    a: { src: 'ELN', where: `${RUN.notebook} · Equipment`, value: 'PR-07', note: 'Reader on bench sheet' },
    b: { src: 'Raw data', where: `${RUN.id}_plate1.txt · header`, value: 'PR-11', note: 'Instrument in data file' },
  },
]

export function ResultScene() {
  const passed = HERO_CHECKS - HERO_FLAGS
  return (
    <div className={h.result}>
      <div className={`${s.summary} ${h.summary}`} style={d(0.1)}>
        <div className={s.summaryNums}>
          <span className={s.bigOk}>
            <b>{passed}</b> checks passed
          </span>
          <span className={s.bigWarn}>
            <b>{HERO_FLAGS}</b> flagged
          </span>
        </div>
        <div className={s.meter} aria-hidden="true">
          <span className={s.meterOk} style={{ flexGrow: passed }} />
          <span className={s.meterWarn} style={{ flexGrow: HERO_FLAGS }} />
        </div>
        <span className={s.awaiting}>Awaiting reviewer</span>
      </div>

      <div className={h.cards}>
        {HERO_FLAGS_LIST.map((f, i) => (
          <article key={f.title} className={`${s.flagCard} ${h.card}`} style={d(0.5 + i * 0.5)}>
            <header className={s.flagHead}>
              <span className={s.flagNo}>
                Flag {i + 1}/{HERO_FLAGS}
              </span>
              <span className={`${s.badge} ${s.badgeAmber}`}>{f.pair}</span>
            </header>
            <h4 className={s.flagTitle}>{f.title}</h4>
            <p className={s.flagDetail}>{f.detail}</p>
            <div className={h.compare}>
              <SourceBox {...f.a} />
              <span className={s.neq} aria-label="does not match">
                ≠
              </span>
              <SourceBox {...f.b} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


