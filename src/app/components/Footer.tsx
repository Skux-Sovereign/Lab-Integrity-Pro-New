import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.</p>
      </div>
    </footer>
  )
}
