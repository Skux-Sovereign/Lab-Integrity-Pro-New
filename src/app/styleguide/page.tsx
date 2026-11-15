import type { Metadata } from 'next'
import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Instrument_Serif,
  Geist,
  Geist_Mono,
} from 'next/font/google'
import PairingSwitcher from './PairingSwitcher'
import styles from './styleguide.module.css'

export const metadata: Metadata = {
  title: 'Style guide v2 (proposal) | Lab Integrity Pro',
  robots: { index: false, follow: false },
}

/* ---------- Fonts (both pairings load here only) ---------- */

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const fontVars = [spaceGrotesk, plexSans, plexMono, instrumentSerif, geist, geistMono]
  .map((f) => f.variable)
  .join(' ')

/* ---------- Content ---------- */

const GREENS = [
  { token: '--green-300', hex: '#6EE7B7', note: 'Highlights on dark' },
  { token: '--green-400', hex: '#34D399', note: 'Gradient start' },
  { token: '--green-500', hex: '#10B981', note: 'Core emerald' },
  { token: '--teal-400', hex: '#2DD4BF', note: 'Links, focus' },
  { token: '--teal-500', hex: '#14B8A6', note: 'Gradient end' },
  { token: '--teal-700', hex: '#0F766E', note: 'Deep accents' },
]

const SURFACES = [
  { token: '--bg-0', hex: '#05080F', note: 'Page background' },
  { token: '--bg-1', hex: '#0A1020', note: 'Alternate sections' },
  { token: '--bg-2', hex: '#101B33', note: 'Navy feature sections' },
  { token: '--surface', hex: '#0F172A', note: 'Cards' },
  { token: '--line', hex: '#1E293B', note: 'Borders, dividers' },
]

const TEXT = [
  { token: '--text', hex: '#E8EEF7', note: 'Headings, body · 17.2:1' },
  { token: '--text-2', hex: '#B4C0D3', note: 'Secondary · 10.9:1' },
  { token: '--muted', hex: '#7D8AA3', note: 'Captions · 5.8:1' },
]

const PAIRINGS = [
  {
    id: 'A',
    name: 'Precision',
    display: 'Space Grotesk',
    body: 'IBM Plex Sans',
    mono: 'IBM Plex Mono',
    className: 'pairA',
    why: 'Technical and engineered. Space Grotesk’s squared details read as instrument-grade; Plex was designed for science and engineering and stays legible in dense compliance copy.',
  },
  {
    id: 'B',
    name: 'Editorial',
    display: 'Instrument Serif',
    body: 'Geist',
    mono: 'Geist Mono',
    className: 'pairB',
    why: 'Premium consultancy. A refined serif for headlines (with italic highlights) gives authority and polish; Geist keeps the body crisp and modern.',
  },
]

const STEPS = [
  { title: 'Raw data', body: 'Instrument output, notebooks, audit trails' },
  { title: 'Capture', body: 'Structured into reviewable records' },
  { title: 'Automated checks', body: 'Acceptance criteria, QC, audit trail' },
  { title: 'Reviewer sign-off', body: 'A qualified reviewer confirms every flag' },
]

const LOGOS = [
  {
    file: '/logo-concepts/hex-check.svg',
    name: 'A · Verified Hex',
    idea: 'A molecular ring with a check inside: chemistry, verified. The bond node adds a single point of light.',
  },
  {
    file: '/logo-concepts/element-tile.svg',
    name: 'B · Element Tile',
    idea: 'A periodic-table tile spelling “Li” for Lab Integrity. Memorable, ownable, and it works as an app icon.',
  },
  {
    file: '/logo-concepts/signal-shield.svg',
    name: 'C · Signal Shield',
    idea: 'An assay peak protected by a shield: your data, inspection-ready. The most literal of the three.',
  },
]

/* ---------- Small pieces ---------- */

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  )
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className={styles.sectionLabel}>
      <span>{n}</span>
      {children}
    </p>
  )
}

function Wordmark({ mark }: { mark?: string }) {
  return (
    <span className={styles.wordmark}>
      {mark && <img src={mark} alt="" width={32} height={32} />}
      <span>
        Lab Integrity <em>Pro</em>
      </span>
    </span>
  )
}

/* ---------- Page ---------- */

export default function StyleguidePage() {
  return (
    <PairingSwitcher
      className={`${styles.root} ${fontVars}`}
      brand={
        <p className={styles.toolbarTitle}>
          Lab Integrity Pro <span>Visual system v2 · proposal</span>
        </p>
      }
    >
      {/* 01 — Mood */}
      <section className={styles.mood}>
        <div className={styles.container}>
          <SectionLabel n="01">Mood: how a page opens</SectionLabel>

          <div className={styles.previewFrame}>
            <div className={styles.previewNav}>
              <Wordmark />
              <div className={styles.previewNavLinks}>
                <span>Services</span>
                <span>About</span>
                <span>Contact</span>
                <span className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}>Book a consultation</span>
              </div>
            </div>

            <div className={styles.previewHero}>
              <p className={styles.pill}>
                <span className={styles.pillDot} />
                GLP/GMP data review &amp; compliance
              </p>
              <h1 className={styles.display1}>
                Get data review right.{' '}
                <span className={styles.highlight}>Stay inspection&#8209;ready.</span>
              </h1>
              <p className={styles.lead}>
                AI-supported QC review automation and expert GLP/GMP consulting for pharma and biotech labs.
              </p>
              <div className={styles.actions}>
                <span className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>Book a consultation</span>
                <span className={styles.textLink}>
                  See how it works <Arrow />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Color */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel n="02">Color</SectionLabel>
          <h2 className={styles.display2}>
            Emerald into teal, on <span className={styles.highlight}>deep navy</span>.
          </h2>
          <p className={styles.sectionLead}>
            One gradient carries the brand: buttons, headline highlights and soft background glows. Everything else
            stays quiet.
          </p>

          <div className={styles.gradientSwatch}>
            <div>
              <p className={styles.mono}>--brand-gradient</p>
              <p className={styles.swatchMeta}>linear-gradient(120deg, #34D399 → #10B981 → #14B8A6)</p>
            </div>
            <p className={styles.swatchNote}>Used sparingly: one primary button per view, one highlight per headline.</p>
          </div>

          <div className={styles.swatchGroups}>
            <div>
              <h3 className={styles.groupTitle}>Brand greens</h3>
              <ul className={styles.swatchGrid}>
                {GREENS.map((s) => (
                  <li key={s.token} className={styles.swatch}>
                    <span className={styles.chip} style={{ background: s.hex }} />
                    <span className={styles.mono}>{s.token}</span>
                    <span className={styles.swatchMeta}>
                      {s.hex} · {s.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.groupTitle}>Surfaces</h3>
              <ul className={styles.swatchGrid}>
                {SURFACES.map((s) => (
                  <li key={s.token} className={styles.swatch}>
                    <span className={`${styles.chip} ${styles.chipOutlined}`} style={{ background: s.hex }} />
                    <span className={styles.mono}>{s.token}</span>
                    <span className={styles.swatchMeta}>
                      {s.hex} · {s.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.groupTitle}>Text (contrast on --bg-0)</h3>
              <ul className={styles.swatchGrid}>
                {TEXT.map((s) => (
                  <li key={s.token} className={styles.swatch}>
                    <span className={styles.chip} style={{ background: s.hex }} />
                    <span className={styles.mono}>{s.token}</span>
                    <span className={styles.swatchMeta}>
                      {s.hex} · {s.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Typography */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <SectionLabel n="03">Typography</SectionLabel>
          <h2 className={styles.display2}>Two pairings to choose from.</h2>
          <p className={styles.sectionLead}>
            Each card is set in its own pairing. The switch at the top applies the selected pairing to the rest of
            this page.
          </p>

          <div className={styles.pairingGrid}>
            {PAIRINGS.map((p) => (
              <article key={p.id} className={`${styles.card} ${styles.pairingCard} ${styles[p.className]}`}>
                <div className={styles.pairingHead}>
                  <span className={styles.pairingBadge}>{p.id}</span>
                  <span className={styles.mono}>{p.name}</span>
                </div>
                <p className={styles.pairingSpecimen}>
                  Data you can <span className={styles.highlight}>defend.</span>
                </p>
                <p className={styles.pairingH3}>Inspection readiness, without the scramble</p>
                <p className={styles.pairingBody}>
                  We review PK, ADA and NAb data against your acceptance criteria and audit trails, so findings are
                  resolved before an inspector ever sees them.
                </p>
                <p className={styles.pairingMono}>RUN 0412 · QC 3/3 PASS · AUDIT TRAIL 2 FLAGS</p>
                <dl className={styles.pairingSpec}>
                  <div>
                    <dt>Display</dt>
                    <dd>{p.display}</dd>
                  </div>
                  <div>
                    <dt>Body</dt>
                    <dd>{p.body}</dd>
                  </div>
                  <div>
                    <dt>Data</dt>
                    <dd>{p.mono}</dd>
                  </div>
                </dl>
                <p className={styles.pairingWhy}>{p.why}</p>
              </article>
            ))}
          </div>

          <div className={styles.scale}>
            <h3 className={styles.groupTitle}>Type scale (selected pairing)</h3>
            <div className={styles.scaleRow}>
              <span className={styles.mono}>Display 1 · 64/1.05</span>
              <p className={styles.display1}>Stay inspection&#8209;ready</p>
            </div>
            <div className={styles.scaleRow}>
              <span className={styles.mono}>Display 2 · 44/1.1</span>
              <p className={styles.display2}>From first call to sign-off</p>
            </div>
            <div className={styles.scaleRow}>
              <span className={styles.mono}>Heading 3 · 22/1.3</span>
              <p className={styles.h3}>QC review automation</p>
            </div>
            <div className={styles.scaleRow}>
              <span className={styles.mono}>Body · 17/1.65</span>
              <p className={styles.body}>
                Expert data review and quality support from someone who has worked inside regulated labs.
              </p>
            </div>
            <div className={styles.scaleRow}>
              <span className={styles.mono}>Label · 12 mono caps</span>
              <p className={styles.eyebrow}>GLP/GMP data review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Buttons */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel n="04">Buttons &amp; links</SectionLabel>
          <h2 className={styles.display2}>One primary action.</h2>
          <p className={styles.sectionLead}>
            The gradient button is reserved for “Book a consultation”. Everything else is secondary or a text link.
          </p>

          <div className={styles.buttonBoard}>
            <div className={styles.buttonCol}>
              <p className={styles.groupTitle}>Primary</p>
              <button type="button" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                Book a consultation
              </button>
              <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>
                Book a consultation
              </button>
              <button type="button" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}>
                Book a consultation
              </button>
            </div>
            <div className={styles.buttonCol}>
              <p className={styles.groupTitle}>Secondary</p>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLg}`}>
                Explore services
              </button>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
                Explore services
              </button>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} disabled>
                Disabled
              </button>
            </div>
            <div className={styles.buttonCol}>
              <p className={styles.groupTitle}>Text link</p>
              <span className={styles.textLink}>
                See how it works <Arrow />
              </span>
              <span className={styles.textLink}>
                Talk about automation <Arrow />
              </span>
              <p className={styles.swatchMeta}>Hover a button to see the glow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Cards & components */}
      <section className={`${styles.section} ${styles.sectionNavy}`}>
        <div className={styles.container}>
          <SectionLabel n="05">Cards &amp; components</SectionLabel>
          <h2 className={styles.display2}>Depth without clutter.</h2>
          <p className={styles.sectionLead}>
            Glass-like cards on navy, a gradient edge on hover, and the glowing step flow carried over from “How We
            Transform Your Data”.
          </p>

          <div className={styles.cardGrid}>
            <article className={`${styles.card} ${styles.featureCard}`}>
              <span className={styles.iconTile}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 3h6M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3" />
                  <path d="M7.5 15h9" />
                </svg>
              </span>
              <h3 className={styles.h3}>QC review automation</h3>
              <p className={styles.body}>
                Every run checked against your acceptance criteria and audit trail. Your reviewers confirm what gets
                flagged.
              </p>
              <ul className={styles.checkList}>
                <li>
                  <Check /> Never auto-approves
                </li>
                <li>
                  <Check /> Built around 21 CFR Part 11 and ALCOA+
                </li>
              </ul>
              <span className={styles.textLink}>
                Talk about automation <Arrow />
              </span>
            </article>

            <article className={`${styles.card} ${styles.featureCard} ${styles.featureCardActive}`}>
              <p className={styles.eyebrow}>Hover state</p>
              <h3 className={styles.h3}>GLP/GMP compliance consulting</h3>
              <p className={styles.body}>
                Data review, inspection readiness and quality support from someone who has worked inside regulated
                labs.
              </p>
              <span className={styles.textLink}>
                Talk about consulting <Arrow />
              </span>
            </article>

            <article className={`${styles.card} ${styles.statCard}`}>
              <p className={styles.statNumber}>10+</p>
              <p className={styles.body}>years inside regulated bioanalytical and QC laboratories</p>
            </article>
          </div>

          <div className={styles.flow}>
            <p className={styles.groupTitle}>Step flow</p>
            <ol className={styles.flowSteps}>
              {STEPS.map((s, i) => (
                <li key={s.title} className={styles.flowStep}>
                  <span className={styles.flowNode}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.flowTitle}>{s.title}</h3>
                  <p className={styles.flowBody}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.ctaPanel}>
            <div>
              <h3 className={styles.display3}>
                Talk to someone who has <span className={styles.highlight}>run these reviews.</span>
              </h3>
              <p className={styles.body}>30 minutes, no obligation.</p>
            </div>
            <span className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>Book a consultation</span>
          </div>
        </div>
      </section>

      {/* 06 — Logo */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel n="06">Logo concepts</SectionLabel>
          <h2 className={styles.display2}>Three marks to choose from.</h2>
          <p className={styles.sectionLead}>
            Shown large, as a lockup with the wordmark, and at favicon sizes. The current logo stays in place until you
            pick one.
          </p>

          <div className={styles.logoGrid}>
            {LOGOS.map((l) => (
              <article key={l.file} className={`${styles.card} ${styles.logoCard}`}>
                <div className={styles.logoStage}>
                  <img src={l.file} alt={`Logo concept ${l.name}`} width={128} height={128} />
                </div>
                <div className={styles.logoLockup}>
                  <Wordmark mark={l.file} />
                </div>
                <div className={styles.logoSizes}>
                  <img src={l.file} alt="" width={48} height={48} />
                  <img src={l.file} alt="" width={32} height={32} />
                  <img src={l.file} alt="" width={16} height={16} />
                  <span className={styles.lightTile}>
                    <img src={l.file} alt="" width={32} height={32} />
                  </span>
                </div>
                <h3 className={styles.h3}>{l.name}</h3>
                <p className={styles.body}>{l.idea}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.guideFooter}>
        <div className={styles.container}>
          <p className={styles.swatchMeta}>
            Proposal only. Not linked from the site and excluded from search engines.
          </p>
        </div>
      </footer>
    </PairingSwitcher>
  )
}
