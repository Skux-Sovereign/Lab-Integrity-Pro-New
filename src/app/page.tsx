import Link from 'next/link'
import styles from './home.module.css'
import Icon from './components/Icon'
import ArgusDiagram from './components/argus/ArgusDiagram'
import FlowDiagram from './components/FlowDiagram'
import CtaBand from './components/CtaBand'
import { CONSULT_HREF, CONSULT_LABEL } from './lib/site'

const CREDENTIALS = [
  '10+ years in regulated labs',
  'GLP · GCP · GMP',
  'PK / ADA / NAb',
  'FDA & EMA inspection support',
]

const ARGUS_POINTS = [
  'No integration project. Argus reads the files your systems already export.',
  'Checks every run against the method: acceptance criteria, incubation windows, reagent expiry, equipment IDs.',
  'Flags, never decides. Your reviewer dispositions every finding.',
]

const OFFERS = [
  {
    icon: 'flask' as const,
    title: 'QC review automation',
    body: 'AI-supported review that checks every entry against your acceptance criteria as it happens. Your reviewers confirm what gets flagged.',
    points: [
      'Real-time checks on run acceptance, QC and audit trails',
      'Flags go to a qualified reviewer, never auto-approved',
      'Designed around 21 CFR Part 11 and ALCOA+',
    ],
    href: '/services#automation',
    cta: 'How automation works',
  },
  {
    icon: 'shield' as const,
    title: 'GLP/GMP compliance consulting',
    body: 'Expert data review and quality support from someone who has worked inside regulated labs and knows what inspectors look for.',
    points: [
      'cGLP/cGMP data review for PK, ADA and NAb studies',
      'Inspection readiness and FDA/EMA inspection support',
      'Review practices, SOPs and quality systems',
    ],
    href: '/services#consulting',
    cta: 'How consulting works',
  },
]

const AUDIENCES = ['CROs', 'CMOs', 'Biotech companies', 'Clinical trial labs']

const REASONS = [
  {
    title: 'Real lab experience',
    body: 'Hands-on work inside top global CROs and biotech companies, not advice from the outside.',
  },
  {
    title: 'Inspection-tested',
    body: 'Direct support during FDA and EMA inspections, so recommendations hold up when it counts.',
  },
  {
    title: 'Large-molecule depth',
    body: 'Deep experience with large-molecule and ADC programs and PK/ADA/NAb workflows.',
  },
]

const ALSO = [
  { title: 'SOP template packages', body: 'Ready-to-adapt GLP/GMP SOPs.' },
  { title: 'LIMS & ELN support', body: 'Configuration, optimization, validation.' },
  { title: 'Training', body: 'Data integrity and QC review for your team.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`page-hero grid-bg ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroText}>
            <p className="pill">GLP/GMP data review &amp; compliance</p>
            <h1 className={`display-1 ${styles.heroTitle}`}>
              Get data review right.{' '}
              <span className="highlight">Stay inspection&#8209;ready.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              AI-supported QC review automation and expert GLP/GMP consulting for pharma and biotech labs.
            </p>
            <div className={`actions ${styles.heroActions}`}>
              <Link href={CONSULT_HREF} className="button button-primary button-lg">
                {CONSULT_LABEL}
              </Link>
              <a href="#how-it-works" className="text-link">
                See how it works <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>

          <ul className={styles.credentials}>
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What is Argus */}
      <section className={`section ${styles.argus}`} id="argus">
        <div className={`container ${styles.argusGrid}`}>
          <div className={styles.argusText}>
            <p className="eyebrow">Argus</p>
            <h2 className="display-2">A second set of eyes on every run.</h2>
            <p className="lead">
              Argus works alongside the LIMS and ELN you already use. It reads the exports they produce, checks each
              run against your method, and shows your reviewer every disagreement before the data moves on.
            </p>
            <ul className="check-list">
              {ARGUS_POINTS.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/services#how-argus-works" className="text-link">
              See how Argus works <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ArgusDiagram />
        </div>
      </section>

      {/* What we do */}
      <section className="section" id="services">
        <div className="container">
          <header className="section-header centered">
            <p className="eyebrow">What we do</p>
            <h2 className="display-2">Two ways we help your lab.</h2>
          </header>
          <div className={styles.offerGrid}>
            {OFFERS.map((o) => (
              <article key={o.title} className={`card card-hover ${styles.offerCard}`}>
                <span className="icon-tile">
                  <Icon name={o.icon} size={22} />
                </span>
                <h3 className="h3">{o.title}</h3>
                <p className="body-2">{o.body}</p>
                <ul className="check-list">
                  {o.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={o.href} className={`text-link ${styles.offerLink}`}>
                  {o.cta} <Icon name="arrow" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-navy grid-bg" id="how-it-works">
        <div className="container">
          <header className="section-header centered">
            <p className="eyebrow">How it works</p>
            <h2 className="display-2">
              From entry to <span className="highlight">audit&#8209;ready</span>, in one flow.
            </h2>
            <p className="lead">
              Problems are caught while the work happens, not weeks later during review.
            </p>
          </header>
          <FlowDiagram />
          <div className={styles.center}>
            <Link href="/services" className="button button-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2 className="display-2">Built for regulated bioanalytical and QC labs.</h2>
            <p className={`lead ${styles.splitLead}`}>
              We work with QA/QC managers and lab directors, the people accountable for data quality.
            </p>
          </div>
          <div>
            <ul className={styles.audience}>
              {AUDIENCES.map((a) => (
                <li key={a} className="card">
                  {a}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              <strong>Large-molecule specialists.</strong> PK, ADA and NAb assays, including ADC programs.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-alt">
        <div className={`container ${styles.why}`}>
          <div>
            <p className={styles.stat}>10+</p>
            <p className={styles.statLabel}>years inside regulated bioanalytical and QC laboratories</p>
          </div>
          <div className={styles.reasons}>
            {REASONS.map((r) => (
              <div key={r.title} className={styles.reason}>
                <h3 className="h3">{r.title}</h3>
                <p className="body-2">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also available */}
      <section className={styles.also}>
        <div className="container">
          <div className={styles.alsoHead}>
            <p className="mono-label">Also available</p>
            <Link href="/services#more" className="text-link">
              All services <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ul className={styles.alsoGrid}>
            {ALSO.map((a) => (
              <li key={a.title}>
                <Link href="/services#more" className={`card card-hover ${styles.alsoItem}`}>
                  <span className={styles.alsoTitle}>{a.title}</span>
                  <span className={styles.alsoBody}>{a.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
