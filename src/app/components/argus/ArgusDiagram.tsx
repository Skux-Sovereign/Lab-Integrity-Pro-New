'use client'

import { useEffect, useRef, useState } from 'react'
import s from './ArgusDiagram.module.css'

/**
 * "What is Argus" diagram: three source exports → Argus (method on file)
 * → reviewer summary. Draws in once when scrolled into view; never loops.
 * Without JS (or before hydration) the finished diagram is shown.
 * Two layouts: horizontal (desktop/tablet) and vertical (phones).
 */

type Phase = 'idle' | 'armed' | 'drawn'

const SOURCES = [
  { title: 'Instrument raw data', sub: 'Plate reader file', glyph: 'grid' },
  { title: 'ELN bench sheet', sub: 'Bench sheet export', glyph: 'sheet' },
  { title: 'LIMS report', sub: 'Run report export', glyph: 'report' },
] as const

type Glyph = (typeof SOURCES)[number]['glyph']

/** Small line icon drawn inside a 20×20 box at (x, y). */
function SourceGlyph({ kind, x, y }: { kind: Glyph; x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} className={s.glyph}>
      <rect width="20" height="20" rx="5" className={s.glyphTile} />
      {kind === 'grid' &&
        [5, 10, 15].flatMap((cx) => [5, 10, 15].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />))}
      {kind === 'sheet' && (
        <>
          <path d="M6 6.5h8M6 10h8M6 13.5h5" />
        </>
      )}
      {kind === 'report' && <path d="M5.5 15V11M10 15V6M14.5 15V9" />}
    </g>
  )
}

function SourceCard({ x, y, w, h, i }: { x: number; y: number; w: number; h: number; i: number }) {
  const src = SOURCES[i]
  return (
    <g className={`${s.piece} ${s.source}`} style={{ ['--i' as string]: i }}>
      <rect x={x} y={y} width={w} height={h} rx="12" className={s.card} />
      <SourceGlyph kind={src.glyph} x={x + 14} y={y + h / 2 - 10} />
      <text x={x + 44} y={y + h / 2 - 3} className={s.title}>
        {src.title}
      </text>
      <text x={x + 44} y={y + h / 2 + 14} className={s.sub}>
        {src.sub}
      </text>
    </g>
  )
}

function ArgusNode({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const cx = x + w / 2
  return (
    <g className={`${s.piece} ${s.node}`}>
      <rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx="22" className={s.nodeHalo} />
      <rect x={x} y={y} width={w} height={h} rx="18" className={s.nodeBox} />
      <text x={cx} y={y + h / 2 - 2} textAnchor="middle" className={s.nodeTitle}>
        Argus
      </text>
      <text x={cx} y={y + h / 2 + 20} textAnchor="middle" className={s.sub}>
        Checks every run
      </text>
    </g>
  )
}

/** Method card pinned to the Argus node, joined by a short dashed tether. */
function MethodPin({ x, y, w, h, tether }: { x: number; y: number; w: number; h: number; tether: string }) {
  return (
    <g className={`${s.piece} ${s.method}`}>
      <path d={tether} className={s.tether} />
      <rect x={x} y={y} width={w} height={h} rx="10" className={s.methodBox} />
      <g transform={`translate(${x + 12} ${y + h / 2 - 8})`} className={s.pin}>
        <path d="M6 1h4l-.5 4 2.5 2.5H4L6.5 5 6 1Z" />
        <path d="M8 7.5V15" />
      </g>
      <text x={x + 34} y={y + h / 2 - 2} className={s.methodLabel}>
        METHOD ON FILE
      </text>
      <text x={x + 34} y={y + h / 2 + 13} className={s.methodValue}>
        Approved version
      </text>
    </g>
  )
}

function SummaryCard({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const pad = 18
  const barW = w - pad * 2
  return (
    <g className={`${s.piece} ${s.output}`}>
      <rect x={x} y={y} width={w} height={h} rx="14" className={s.card} />
      <text x={x + pad} y={y + 30} className={s.title}>
        Reviewer summary
      </text>
      <circle cx={x + pad + 4} cy={y + 58} r="4" className={s.okDot} />
      <text x={x + pad + 16} y={y + 63} className={s.okText}>
        42 checks passed
      </text>
      <circle cx={x + pad + 4} cy={y + 84} r="4" className={s.warnDot} />
      <text x={x + pad + 16} y={y + 89} className={s.warnText}>
        3 flagged
      </text>
      <rect x={x + pad} y={y + h - 26} width={barW * (42 / 45)} height="6" rx="3" className={s.okBar} />
      <rect x={x + pad + barW * (42 / 45) + 3} y={y + h - 26} width={barW * (3 / 45) - 3} height="6" rx="3" className={s.warnBar} />
    </g>
  )
}

function Flow({ d, order }: { d: string; order: number }) {
  return (
    <g className={s.flow} style={{ ['--i' as string]: order }}>
      <path d={d} className={s.flowGlow} pathLength={1} />
      <path d={d} className={s.flowLine} pathLength={1} />
    </g>
  )
}

/* ---------- Horizontal layout (viewBox 640 × 400) ---------- */

function Horizontal() {
  const card = { x: 0, w: 196, h: 68 }
  const ys = [44, 166, 288]
  const node = { x: 262, y: 168, w: 132, h: 96 }
  const nodeMidY = node.y + node.h / 2
  const out = { x: 456, y: 144, w: 184, h: 144 }
  return (
    <svg viewBox="0 0 640 400" className={`${s.svg} ${s.horizontal}`} role="img" aria-labelledby="argus-diagram-h">
      <title id="argus-diagram-h">
        Instrument raw data, ELN bench sheet and LIMS report exports flow into Argus, which checks them against the
        method on file and produces a reviewer summary: 42 checks passed, 3 flagged.
      </title>
      {ys.map((y, i) => (
        <Flow
          key={i}
          order={i}
          d={`M${card.x + card.w} ${y + card.h / 2} C ${card.x + card.w + 40} ${y + card.h / 2}, ${node.x - 40} ${nodeMidY + (i - 1) * 22}, ${node.x} ${nodeMidY + (i - 1) * 22}`}
        />
      ))}
      <Flow order={8} d={`M${node.x + node.w} ${nodeMidY} H ${out.x}`} />
      {ys.map((y, i) => (
        <SourceCard key={i} x={card.x} y={y} w={card.w} h={card.h} i={i} />
      ))}
      <MethodPin
        x={node.x - 22}
        y={64}
        w={node.w + 44}
        h={48}
        tether={`M${node.x + node.w / 2} ${64 + 48} V ${node.y}`}
      />
      <ArgusNode {...node} />
      <SummaryCard {...out} />
    </svg>
  )
}

/* ---------- Vertical layout for phones (viewBox 360 × 600) ---------- */

function Vertical() {
  const card = { x: 20, w: 276, h: 60 }
  const ys = [4, 76, 148]
  const node = { x: 196, y: 290, w: 144, h: 92 }
  const out = { x: 120, y: 452, w: 220, h: 140 }
  const cx = node.x + node.w / 2
  const mid = node.y + node.h / 2
  return (
    <svg viewBox="0 0 360 600" className={`${s.svg} ${s.vertical}`} role="img" aria-labelledby="argus-diagram-v">
      <title id="argus-diagram-v">
        Instrument raw data, ELN bench sheet and LIMS report exports flow into Argus, which checks them against the
        method on file and produces a reviewer summary: 42 checks passed, 3 flagged.
      </title>
      {ys.map((y, i) => {
        const yc = y + card.h / 2
        const lane = card.x + card.w + 14 + (2 - i) * 12
        const tx = cx + 22 * (1 - i)
        return (
          <Flow
            key={i}
            order={i}
            d={`M${card.x + card.w} ${yc} H ${lane} V ${node.y - 34} C ${lane} ${node.y - 14}, ${tx} ${node.y - 20}, ${tx} ${node.y}`}
          />
        )
      })}
      <Flow order={8} d={`M${cx} ${node.y + node.h} V ${out.y}`} />
      {ys.map((y, i) => (
        <SourceCard key={i} x={card.x} y={y} w={card.w} h={card.h} i={i} />
      ))}
      <MethodPin x={20} y={mid - 26} w={152} h={52} tether={`M${20 + 152} ${mid} H ${node.x}`} />
      <ArgusNode {...node} />
      <SummaryCard {...out} />
    </svg>
  )
}

export default function ArgusDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
      // Already on screen: draw in right away.
      setPhase('armed')
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase('drawn')))
      return
    }
    setPhase('armed')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('drawn')
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={s.wrap} data-phase={phase}>
      <Horizontal />
      <Vertical />
    </div>
  )
}
