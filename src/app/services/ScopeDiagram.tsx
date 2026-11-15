import styles from './services.module.css'

// What a consulting data review covers, drawn in the flowchart style.
const NODES = [
  { label: 'PK', x: 110, y: 64 },
  { label: 'ADA', x: 370, y: 64 },
  { label: 'NAb', x: 64, y: 180 },
  { label: 'Audit trails', x: 416, y: 180 },
  { label: 'Method validation', x: 110, y: 296 },
  { label: 'Batch records', x: 370, y: 296 },
]

export default function ScopeDiagram() {
  const cx = 240
  const cy = 180
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 480 360" role="img" aria-label="Consulting review scope: PK, ADA and NAb studies, audit trails, method validation and batch records">
        <defs>
          <linearGradient id="scope-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
          <radialGradient id="scope-glow">
            <stop offset="0" stopColor="rgba(16,185,129,0.35)" />
            <stop offset="1" stopColor="rgba(16,185,129,0)" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r="150" fill="url(#scope-glow)" />
        <ellipse cx={cx} cy={cy} rx="176" ry="116" stroke="rgba(148,163,184,0.12)" strokeDasharray="3 6" fill="none" />

        {NODES.map((n) => (
          <line
            key={`l-${n.label}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="url(#scope-line)"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
        ))}

        {NODES.map((n) => {
          const w = Math.max(64, n.label.length * 8.6 + 28)
          return (
            <g key={n.label}>
              <rect
                x={n.x - w / 2}
                y={n.y - 17}
                width={w}
                height="34"
                rx="17"
                fill="#0a1020"
                stroke="rgba(52,211,153,0.45)"
              />
              <circle cx={n.x - w / 2 + 15} cy={n.y} r="3.5" fill="#34d399" />
              <text x={n.x + 6} y={n.y + 4.5} textAnchor="middle" className={styles.diagramLabel}>
                {n.label}
              </text>
            </g>
          )
        })}

        <rect x={cx - 82} y={cy - 32} width="164" height="64" rx="16" fill="#0f172a" stroke="url(#scope-line)" strokeWidth="2" />
        <text x={cx} y={cy - 4} textAnchor="middle" className={styles.diagramKicker}>
          REVIEW SCOPE
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" className={styles.diagramTitle}>
          Your study data
        </text>
      </svg>
    </figure>
  )
}
