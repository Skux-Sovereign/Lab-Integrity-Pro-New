import type { Metadata } from 'next'
import styles from './contact.module.css'
import Icon from '../components/Icon'
import ContactForm from './ContactForm'
import { BUSINESS_HOURS, CONTACT_EMAIL, LINKEDIN_URL } from '../lib/site'

export const metadata: Metadata = {
  title: 'Book a consultation',
  description:
    'Book a 30-minute consultation with Lab Integrity Pro about data review, QC automation or GLP/GMP compliance for your lab.',
}

const NEXT_STEPS = [
  { title: 'Send the form', body: 'A few lines about your lab and what you’d like to improve.' },
  { title: 'We reply within 24 hours', body: 'To find a time that works for your team.' },
  { title: '30-minute call', body: 'Your lab, your review process and where it slows down. No obligation.' },
]

const FAQS = [
  {
    q: 'What happens on the consultation call?',
    a: 'We talk through how data is reviewed in your lab today, where it slows down or creates risk, and which of our services, if any, would help. You leave with a clear next step either way.',
  },
  {
    q: 'Does the automation support 21 CFR Part 11?',
    a: 'Yes. It is designed around Part 11 and ALCOA+ principles, with complete audit trails and electronic signatures, and a qualified reviewer confirms every flag.',
  },
  {
    q: 'How do you handle data security?',
    a: 'All data processing happens within your secure environment. We never store or transmit your proprietary data outside your controlled systems.',
  },
  {
    q: 'Do you still offer SOP templates?',
    a: 'Yes. Our SOP packages work with any lab size and can be customized to your systems. Choose “SOP template packages” in the form and we’ll send the details.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={`page-hero grid-bg ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroText}>
            <p className="pill">Contact</p>
            <h1 className="display-1">
              Book a <span className="highlight">consultation.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              Tell us about your lab. We’ll reply within 24 hours to set up a 30-minute call.
            </p>
          </div>
        </div>
      </section>

      {/* Form + next steps */}
      <section className={styles.main}>
        <div className={`container ${styles.grid}`}>
          <div className={`card ${styles.formCard}`}>
            <ContactForm />
          </div>

          <aside className={styles.side}>
            <div>
              <p className="mono-label">What happens next</p>
              <ol className={styles.steps}>
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.stepNode}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h2 className={styles.stepTitle}>{s.title}</h2>
                      <p className={styles.stepBody}>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.direct}>
              <p className="mono-label">Prefer email?</p>
              <ul>
                <li>
                  <Icon name="mail" size={18} />
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <Icon name="link" size={18} />
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <Icon name="clock" size={18} />
                  <span>{BUSINESS_HOURS}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className={`container ${styles.faqWrap}`}>
          <header>
            <p className="eyebrow">FAQ</p>
            <h2 className="display-2">Questions before you book.</h2>
          </header>
          <div className={styles.faqs}>
            {FAQS.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
