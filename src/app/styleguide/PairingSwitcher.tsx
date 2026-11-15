'use client'

import { useEffect, useState } from 'react'
import styles from './styleguide.module.css'

export type Pairing = 'a' | 'b'

const OPTIONS: { id: Pairing; label: string; detail: string }[] = [
  { id: 'a', label: 'A', detail: 'Space Grotesk + IBM Plex Sans' },
  { id: 'b', label: 'B', detail: 'Instrument Serif + Geist' },
]

export default function PairingSwitcher({
  className,
  brand,
  children,
}: {
  className: string
  brand: React.ReactNode
  children: React.ReactNode
}) {
  const [pairing, setPairing] = useState<Pairing>('a')

  // Allow linking straight to a pairing: /styleguide?pairing=b
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('pairing')
    if (p === 'a' || p === 'b') setPairing(p)
  }, [])

  return (
    <div className={className} data-pairing={pairing}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarInner}>
          {brand}
          <div className={styles.switcher} role="radiogroup" aria-label="Type pairing">
            <span className={styles.switcherLabel}>Type pairing</span>
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={pairing === o.id}
                className={styles.switcherOption}
                data-active={pairing === o.id}
                onClick={() => setPairing(o.id)}
              >
                <strong>{o.label}</strong>
                <span>{o.detail}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
