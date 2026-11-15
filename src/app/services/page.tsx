import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './services.module.css'
import Icon, { type IconName } from '../components/Icon'
import FlowDiagram from '../components/FlowDiagram'
import ArgusDetailed from '../components/argus/ArgusDetailed'
import CtaBand from '../components/CtaBand'
import ScopeDiagram from './ScopeDiagram'
import { CONSULT_HREF, CONSULT_LABEL } from '../lib/site'

export const metadata: Metadata = {
  title: { absolute: 'QC data review automation and GLP/GMP consulting | Lab Integrity Pro' },
  description:
    'Automated QC data review for regulated bioanalytical labs, plus GLP/GMP compliance consulting, inspection readiness, SOP templates, LIMS/ELN support and training.',
  alternates: { canonical: '/services' },
}

const ON_THIS_PAGE = [
  { href: '#automation', label: 'QC review automation' },
  { href: '#consulting', label: 'GLP/GMP consulting' },
  { href: '#more', label: 'Also available' },
]

const CONSULTING: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'search',
    title: 'cGLP/cGMP data review',
    body: 'Independent review of PK, ADA and NAb study data, method validation and batch records against FDA, EMA and ICH M10 expectations.',
  },
  {
    icon: 'shield',
    title: 'Inspection readiness',
    body: 'Compliance audits, gap assessments and direct support during FDA and EMA inspections.',
  },
  {
    icon: 'layers',
    title: 'Quality systems',
    body: 'Review practices, SOPs, deviation handling and CAPA that hold up under scrutiny.',
  },
]

const MORE: { icon: IconName; title: string; body: string; href: string; cta: string }[] = [
  {
    icon: 'document',
    title: 'SOP template packages',
    body: 'Ready-to-adapt GLP/GMP SOPs that work with any lab size and can be customized to your systems.',
    href: '/contact?interest=sop-templates',
    cta: 'Ask about SOP templates',
  },
  {
    icon: 'database',
    title: 'LIMS & ELN support',
    body: 'Configuration, optimization and validation of laboratory information systems, including 21 CFR Part 11 and data migration.',
    href: '/contact?interest=lims-eln',
    cta: 'Ask about LIMS & ELN',
  },
  {
    icon: 'users',
    title: 'Training',
    body: 'Data integrity, cGLP/cGMP practice and QC data review training for your team.',
    href: '/contact?interest=training',
    cta: 'Ask about training',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero grid-bg">
        <div className="container">
          <div className={styles.heroText}>
            <p className="pill">Services</p>
            <h1 className="display-1">
              Automation and expertise for <span className="highlight">regulated data review.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              Two core services, built for QA/QC teams in bioanalytical and quality control labs. Use them together or
              on their own.
            </p>
            <div className="actions">
              <Link href={CONSULT_HREF} className="button button-primary button-lg">
                {CONSULT_LABEL}
              </Link>
            </div>
            <nav className={styles.jump} aria-label="On this page">
              {ON_THIS_PAGE.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Core 01: automation */}
      <section className="section" id="automation">
        <div className={`container ${styles.split}`}>
          <div className={styles.splitText}>
            <p className="eyebrow">Core service 01</p>
            <h2 className="display-2">Automated lab compliance for QC review</h2>
            <p className="lead">
              AI-supported review that checks data as it is entered, so lab data integrity issues surface while they
              can still be fixed.
              Your reviewers stay in charge of every decision.
            </p>
            <Link href="/contact?interest=automation" className="text-link">
              Talk about automation <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ul className={`card check-list ${styles.automationPoints}`}>
            <li>
              <Icon name="check" size={16} /> Checks run acceptance, QC performance and audit-trail events in real
              time
            </li>
            <li>
              <Icon name="check" size={16} /> Flags go to a qualified reviewer; nothing is auto-approved
            </li>
            <li>
              <Icon name="check" size={16} /> Designed around 21 CFR Part 11 and ALCOA+ principles
            </li>
            <li>
              <Icon name="check" size={16} /> Runs inside your secure environment
            </li>
          </ul>
        </div>
      </section>

      {/* How Argus works: detailed walkthrough */}
      <section className="section section-alt" id="how-argus-works">
        <div className="container">
          <header className="section-header centered">
            <p className="eyebrow">How Argus works</p>
            <h2 className="display-2">
              Three sources of truth. <span className="highlight">One reconciled run.</span>
            </h2>
            <p className="lead">
              Argus is a lab data integrity platform. It reads the method, the raw data file and the ELN bench sheet
              for a run, reconciles them, and flags every disagreement for your reviewer.
            </p>
          </header>
          <div className={styles.argusWrap}>
            <ArgusDetailed />
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="section section-navy grid-bg">
        <div className="container">
          <header className="section-header centered">
            <p className="eyebrow">How data moves through review</p>
            <h2 className="display-2">
              Four steps. <span className="highlight">One continuous record.</span>
            </h2>
          </header>
          <FlowDiagram showDetails />
        </div>
      </section>

      {/* Core 02: consulting */}
      <section className="section" id="consulting">
        <div className={`container ${styles.split} ${styles.splitReverse}`}>
          <div className={styles.splitText}>
            <p className="eyebrow">Core service 02</p>
            <h2 className="display-2">GLP/GMP compliance consulting</h2>
            <p className="lead">
              Expert support from someone who has worked inside regulated labs and knows what inspectors look for.
            </p>
            <ul className={styles.consultList}>
              {CONSULTING.map((c) => (
                <li key={c.title}>
                  <span className="icon-tile">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <h3 className={styles.itemTitle}>{c.title}</h3>
                    <p className="body-2">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/contact?interest=consulting" className="text-link">
              Talk about consulting <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ScopeDiagram />
        </div>
      </section>

      {/* Also available */}
      <section className="section section-alt" id="more">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Also available</p>
            <h2 className="display-2">Support around the core.</h2>
          </header>
          <div className={styles.moreGrid}>
            {MORE.map((m) => (
              <article key={m.title} className={`card card-hover ${styles.moreCard}`}>
                <span className="icon-tile">
                  <Icon name={m.icon} />
                </span>
                <h3 className="h3">{m.title}</h3>
                <p className="body-2">{m.body}</p>
                <Link href={m.href} className={`text-link ${styles.moreLink}`}>
                  {m.cta} <Icon name="arrow" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.ctaSpacer} />
      <CtaBand
        title={
          <>
            Not sure where to start? <span className="highlight">Start with a call.</span>
          </>
        }
        body="30 minutes on your lab, your review process and where it slows down. We’ll tell you honestly what would help."
      />
    </>
  )
}
