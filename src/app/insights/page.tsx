import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './insights.module.css'
import Icon from '../components/Icon'
import CtaBand from '../components/CtaBand'
import { formatDate, getArticles } from '../lib/insights'

export const metadata: Metadata = {
  title: { absolute: 'Insights on lab data integrity and GLP/GMP review | Lab Integrity Pro' },
  description:
    'Practical articles on QC data review, lab data integrity and GLP/GMP inspection readiness for bioanalytical and quality control labs.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  const articles = getArticles()
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="container">
          <div className={styles.heroText}>
            <p className="pill">Insights</p>
            <h1 className="display-1">
              Notes from <span className="highlight">regulated data review.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              Practical writing on QC review, data integrity and staying inspection-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <p className="body-2">New articles are on the way.</p>
          ) : (
            <ol className={styles.list}>
              {articles.map((a) => (
                <li key={a.slug}>
                  <article className={styles.item}>
                    <time dateTime={a.date} className={`mono-label ${styles.date}`}>
                      {formatDate(a.date)}
                    </time>
                    <div>
                      <h2 className={`h3 ${styles.title}`}>
                        <Link href={`/insights/${a.slug}`} className={styles.link}>
                          {a.title}
                        </Link>
                      </h2>
                      <p className="body-2">{a.description}</p>
                    </div>
                    <span className={styles.arrow}>
                      <Icon name="arrow" size={18} />
                    </span>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
