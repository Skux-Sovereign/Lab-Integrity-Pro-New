import styles from './FlowDiagram.module.css'

/*
 * The review flow, drawn in the style of the original
 * "How We Transform Your Data" flowchart: glowing nodes joined by a line.
 */

export type FlowStep = {
  title: string
  body: string
  details?: string[]
  visual: 'entry' | 'validation' | 'signoff' | 'record'
}

export const REVIEW_FLOW: FlowStep[] = [
  {
    title: 'Digital entry',
    body: 'Results are captured digitally at the point of work, with nothing to transcribe later.',
    details: ['Structured fields, not free text', 'Every entry time-stamped and attributed'],
    visual: 'entry',
  },
  {
    title: 'Real-time validation',
    body: 'Each entry is checked against your acceptance criteria and procedures as it happens.',
    details: ['Run acceptance and QC performance', 'Audit-trail events that need a reason'],
    visual: 'validation',
  },
  {
    title: 'Reviewer sign-off',
    body: 'A qualified reviewer confirms every flag and signs off. Nothing is auto-approved.',
    details: ['Every flag resolved with a documented reason', 'Electronic signatures with full audit trail'],
    visual: 'signoff',
  },
  {
    title: 'Audit-ready record',
    body: 'A complete record with its audit trail, ready for QA review and inspection.',
    details: ['Who, what, when and why for every change', 'Ready when QA or an inspector asks'],
    visual: 'record',
  },
]

export default function FlowDiagram({
  steps = REVIEW_FLOW,
  showDetails = false,
}: {
  steps?: FlowStep[]
  showDetails?: boolean
}) {
  return (
    <ol className={styles.flow}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step} data-last={i === steps.length - 1}>
          <div className={styles.node}>
            <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
            <Visual kind={step.visual} />
          </div>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.body}>{step.body}</p>
          {showDetails && step.details && (
            <ul className={styles.details}>
              {step.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

/* ---------- Step illustrations (160×120) ---------- */

const C = {
  panel: '#0f172a',
  line: 'rgba(148,163,184,0.22)',
  soft: 'rgba(148,163,184,0.14)',
  text: 'rgba(232,238,247,0.55)',
  green: '#34d399',
  greenSoft: 'rgba(52,211,153,0.18)',
  teal: '#2dd4bf',
  amber: '#fcd34d',
  dark: '#022c22',
}

function Visual({ kind }: { kind: FlowStep['visual'] }) {
  return (
    <svg className={styles.visual} viewBox="0 0 160 120" fill="none" aria-hidden="true">
      {kind === 'entry' && (
        <>
          <rect x="22" y="12" width="116" height="96" rx="10" fill={C.panel} stroke={C.line} />
          <rect x="34" y="24" width="44" height="6" rx="3" fill={C.text} />
          <rect x="34" y="38" width="92" height="14" rx="4" stroke={C.line} />
          <rect x="40" y="43.5" width="30" height="3" rx="1.5" fill={C.soft} />
          <rect x="34" y="58" width="92" height="14" rx="4" stroke={C.green} fill={C.greenSoft} />
          <rect x="40" y="63.5" width="40" height="3" rx="1.5" fill={C.green} />
          <path d="M84 61.5v9" stroke={C.green} strokeWidth="1.5" />
          <rect x="34" y="78" width="92" height="14" rx="4" stroke={C.line} />
          <rect x="40" y="83.5" width="22" height="3" rx="1.5" fill={C.soft} />
        </>
      )}

      {kind === 'validation' && (
        <>
          <rect x="22" y="12" width="116" height="96" rx="10" fill={C.panel} stroke={C.line} />
          {[0, 1, 2].map((i) => {
            const y = 26 + i * 26
            const flag = i === 1
            return (
              <g key={i}>
                <rect
                  x="30"
                  y={y - 4}
                  width="100"
                  height="20"
                  rx="5"
                  fill={flag ? 'rgba(252,211,77,0.06)' : 'transparent'}
                  stroke={flag ? 'rgba(252,211,77,0.35)' : 'transparent'}
                />
                <rect x="38" y={y + 2} width={flag ? 46 : 54} height="4" rx="2" fill={C.text} />
                <rect x="38" y={y + 9} width="30" height="3" rx="1.5" fill={C.soft} />
                <circle cx="118" cy={y + 6} r="6.5" fill={flag ? C.amber : C.green} />
                {flag ? (
                  <path d={`M118 ${y + 2.5}v4M118 ${y + 9.2}v.1`} stroke={C.dark} strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d={`m115 ${y + 6} 2.2 2.2 4-4.4`} stroke={C.dark} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </g>
            )
          })}
        </>
      )}

      {kind === 'signoff' && (
        <>
          <rect x="30" y="12" width="92" height="96" rx="10" fill={C.panel} stroke={C.line} />
          <rect x="42" y="24" width="48" height="6" rx="3" fill={C.text} />
          <rect x="42" y="38" width="68" height="3" rx="1.5" fill={C.soft} />
          <rect x="42" y="46" width="60" height="3" rx="1.5" fill={C.soft} />
          <rect x="42" y="54" width="64" height="3" rx="1.5" fill={C.soft} />
          <path d="M44 84c5-9 8-9 9-2s3 7 7-1 6-6 7 0 4 3 10-3" stroke={C.green} strokeWidth="2" strokeLinecap="round" />
          <path d="M42 92h66" stroke={C.line} />
          <circle cx="122" cy="88" r="14" fill={C.green} stroke="#05080f" strokeWidth="3" />
          <path d="m115.5 88 4.5 4.5 8-9" stroke={C.dark} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {kind === 'record' && (
        <>
          <rect x="44" y="8" width="84" height="92" rx="10" fill={C.panel} stroke={C.soft} />
          <rect x="36" y="16" width="84" height="94" rx="10" fill={C.panel} stroke={C.line} />
          <rect x="48" y="28" width="40" height="6" rx="3" fill={C.text} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="52" cy={50 + i * 14} r="3" fill={i === 3 ? C.green : C.teal} opacity={i === 3 ? 1 : 0.6} />
              <rect x="62" y={48.5 + i * 14} width={i % 2 ? 36 : 46} height="3" rx="1.5" fill={C.soft} />
            </g>
          ))}
          <path d="M52 53v31" stroke={C.teal} strokeOpacity="0.35" />
          <path
            d="M120 62l12 4.5v7.5c0 7-5 11.5-12 14-7-2.5-12-7-12-14v-7.5Z"
            fill={C.green}
            stroke="#05080f"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="m115.2 75 3.3 3.3 6.3-6.6" stroke={C.dark} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  )
}
