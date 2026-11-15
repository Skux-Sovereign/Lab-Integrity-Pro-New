import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './article.module.css'
import Icon from '../../components/Icon'
import CtaBand from '../../components/CtaBand'
import { formatDate, getArticle, getArticles } from '../../lib/insights'

type Props = { params: Promise<{ slug: string }> }

// Only the Markdown files in content/insights exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    authors: [{ name: article.author }],
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) notFound()

  const initials = article.author
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <>
      <article>
        <header className={`page-hero grid-bg ${styles.hero}`}>
          <div className={`container ${styles.column}`}>
            <Link href="/insights" className={styles.back}>
              <span className={styles.backIcon}>
                <Icon name="arrow" size={16} />
              </span>
              All insights
            </Link>
            <h1 className={`display-2 ${styles.title}`}>{article.title}</h1>
            <p className={`lead ${styles.dek}`}>{article.description}</p>
            <p className={`mono-label ${styles.meta}`}>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.author}</span>
            </p>
          </div>
        </header>

        <div className="section">
          <div className={`container ${styles.column}`}>
            {/* Trusted content: Markdown files committed to this repo. */}
            <div className={styles.prose} dangerouslySetInnerHTML={{ __html: article.html }} />

            <aside className={styles.author} aria-label="About the author">
              <span className={styles.avatar} aria-hidden="true">
                {initials}
              </span>
              <div>
                <p className="mono-label">Written by</p>
                <p className={styles.authorName}>{article.author}</p>
                <p className="body-2">{article.authorBio}</p>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBand
        title={
          <>
            Want a second opinion on <span className="highlight">your review process?</span>
          </>
        }
      />
    </>
  )
}
