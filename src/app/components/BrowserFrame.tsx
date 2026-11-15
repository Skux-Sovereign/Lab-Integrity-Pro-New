import Image, { type StaticImageData } from 'next/image'
import styles from './BrowserFrame.module.css'

/**
 * A browser window that holds a product screenshot.
 *
 * Until a real screenshot exists, it renders a coded wireframe of the
 * review interface. To add a screenshot later:
 *
 *   import reviewShot from '../assets/screens/review.png'
 *   <BrowserFrame src={reviewShot} alt="Run review with two flagged items" />
 *
 * Screenshots look best at a 16:10 ratio, at least 1600px wide.
 */
export default function BrowserFrame({
  src,
  alt = '',
  address = 'app.labintegritypro.com/review',
  priority = false,
  className = '',
  viewportClassName = '',
  tag,
  children,
}: {
  src?: StaticImageData
  alt?: string
  address?: React.ReactNode
  priority?: boolean
  className?: string
  /** Extra class for the 16:10 viewport, e.g. to change its ratio on phones. */
  viewportClassName?: string
  /** Small label shown at the right of the browser bar, e.g. "Product preview". */
  tag?: React.ReactNode
  /** Custom coded content (such as an animated walkthrough) instead of a screenshot. */
  children?: React.ReactNode
}) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <div className={styles.chrome}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.address}>{address}</span>
        {tag && <span className={styles.chromeTag}>{tag}</span>}
      </div>
      <div className={`${styles.viewport} ${viewportClassName}`}>
        {children ??
          (src ? (
            <Image src={src} alt={alt} fill sizes="(max-width: 1160px) 100vw, 1100px" priority={priority} />
          ) : (
            <Placeholder />
          ))}
      </div>
    </figure>
  )
}

function Placeholder() {
  const rows = [
    { w: '62%', status: 'pass' },
    { w: '48%', status: 'pass' },
    { w: '70%', status: 'flag' },
    { w: '55%', status: 'pass' },
    { w: '66%', status: 'flag' },
    { w: '44%', status: 'pass' },
  ]
  return (
    <div className={styles.placeholder} role="img" aria-label="Product preview">
      <div className={styles.sidebar}>
        <span className={styles.sideBrand} />
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={styles.sideItem} data-active={i === 1} />
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.toolbar}>
          <span className={styles.titleBar} />
          <span className={styles.statusChip}>2 flags</span>
        </div>
        <div className={styles.table}>
          {rows.map((r, i) => (
            <div key={i} className={styles.row} data-status={r.status}>
              <span className={styles.dot} />
              <span className={styles.bar} style={{ width: r.w }} />
              <span className={styles.barShort} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.panel}>
        <span className={styles.panelTitle} />
        <span className={styles.panelLine} />
        <span className={styles.panelLine} style={{ width: '70%' }} />
        <span className={styles.panelButton} />
      </div>
      <span className={styles.tag}>Product preview</span>
    </div>
  )
}
