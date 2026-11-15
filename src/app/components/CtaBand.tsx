import Link from 'next/link'
import { CONSULT_HREF, CONSULT_LABEL } from '../lib/site'
import styles from './CtaBand.module.css'

export default function CtaBand({
  title = (
    <>
      Talk to someone who has <span className="highlight">run these reviews.</span>
    </>
  ),
  body = 'Tell us about your lab. We’ll set up a 30-minute consultation, no obligation.',
}: {
  title?: React.ReactNode
  body?: string
}) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.panel}>
          <div>
            <h2 className="display-3">{title}</h2>
            <p className={styles.body}>{body}</p>
          </div>
          <Link href={CONSULT_HREF} className="button button-primary button-lg">
            {CONSULT_LABEL}
          </Link>
        </div>
      </div>
    </section>
  )
}
