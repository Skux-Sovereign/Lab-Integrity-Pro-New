import type { Metadata } from 'next'
import styles from './about.module.css'
import Icon from '../components/Icon'
import CtaBand from '../components/CtaBand'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lab Integrity Pro combines more than a decade of hands-on GLP/GMP laboratory experience with AI-supported automation for regulated data review.',
}

const EXPERIENCE = [
  'Top global CROs',
  'Biotech companies developing oncology and immunology therapies',
  'Clinical trial labs supporting Phase 1–3 programs',
]

const EXPERTISE = [
  {
    area: 'Regulatory compliance',
    items: ['FDA 21 CFR Parts 11, 58, 210, 211', 'EMA guidelines', 'ICH M10', 'ALCOA+ principles', 'GLP/GMP standards'],
  },
  {
    area: 'Data integrity',
    items: ['Audit trail review', 'Electronic records', 'Data lifecycle management', 'Metadata handling', 'System validation'],
  },
  {
    area: 'Quality systems',
    items: ['SOP development', 'CAPA management', 'Deviation handling', 'Change control', 'Risk assessment'],
  },
  {
    area: 'Laboratory operations',
    items: ['Method validation', 'Sample analysis', 'Equipment qualification', 'Training programs', 'Documentation practices'],
  },
]

const APPROACH = [
  { title: 'Assess', body: 'Understand your current state, challenges and compliance goals.' },
  { title: 'Design', body: 'Shape a solution around your workflows and requirements.' },
  { title: 'Implement', body: 'Put practical tools and processes in place with minimal disruption.' },
  { title: 'Support', body: 'Stay with you so compliance holds up over time and through inspections.' },
]

const INDUSTRIES = [
  'Pharmaceutical',
  'Biotechnology',
  'Contract research (CROs & CMOs)',
  'Clinical trial & diagnostic labs',
  'Academic research',
  'Government labs',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero grid-bg">
        <div className="container">
          <div className={styles.heroText}>
            <p className="pill">About</p>
            <h1 className="display-1">
              Built from inside <span className="highlight">regulated labs.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              Lab Integrity Pro combines more than a decade of hands-on GLP/GMP lab experience with AI-supported
              automation, so labs can get data review right without slowing down.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className={`container ${styles.mission}`}>
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="display-2">Make compliance faster without making it weaker.</h2>
            <div className={styles.prose}>
              <p>
                Labs face shrinking budgets, growing regulatory expectations and constant pressure to get therapies to
                patients sooner. Traditional review can’t keep pace.
              </p>
              <p>
                We bring the judgment of people who have done the review themselves, together with automation that
                catches problems while the work happens. The result is review that is quicker, more consistent and
                ready for inspection.
              </p>
            </div>
          </div>

          <aside className={`card ${styles.statCard}`}>
            <p className={styles.stat}>10+</p>
            <p className={styles.statLabel}>years of GxP experience inside regulated labs, across:</p>
            <ul className="check-list">
              {EXPERIENCE.map((e) => (
                <li key={e}>
                  <Icon name="check" size={16} />
                  {e}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Expertise */}
      <section className="section section-navy grid-bg">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Expertise</p>
            <h2 className="display-2">
              Depth where <span className="highlight">inspectors look.</span>
            </h2>
            <p className="lead">
              Including large-molecule and ADC programs, and PK, ADA and NAb workflows.
            </p>
          </header>
          <div className={styles.expertiseGrid}>
            {EXPERTISE.map((e) => (
              <article key={e.area} className={`card ${styles.expertiseCard}`}>
                <h3 className={styles.expertiseTitle}>{e.area}</h3>
                <ul>
                  {e.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Our approach</p>
            <h2 className="display-2">A simple method that lasts.</h2>
          </header>
          <ol className={styles.approach}>
            {APPROACH.map((a, i) => (
              <li key={a.title} className={styles.approachStep}>
                <span className={styles.approachNode}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{a.title}</h3>
                <p className="body-2">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className={`section-alt ${styles.industries}`}>
        <div className={`container ${styles.industriesInner}`}>
          <p className="mono-label">Industries we serve</p>
          <ul className={styles.chips}>
            {INDUSTRIES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.spacer} />
      <CtaBand />
    </>
  )
}
