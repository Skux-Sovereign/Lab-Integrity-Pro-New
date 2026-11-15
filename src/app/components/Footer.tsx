import Link from 'next/link'
import Logo from './Logo'
import { CONSULT_HREF, CONTACT_EMAIL, LINKEDIN_URL } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <Logo />
          <p className="footer-tagline">
            Data review and GLP/GMP compliance for regulated pharma and biotech labs.
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <p className="mono-label footer-heading">Company</p>
            <ul className="footer-links">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href={CONSULT_HREF}>Book a consultation</Link></li>
            </ul>
          </div>
          <div>
            <p className="mono-label footer-heading">Contact</p>
            <ul className="footer-links">
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>&copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.</p>
        <Link href="#">Privacy Policy</Link>
      </div>
    </footer>
  )
}
