'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { CONSULT_HREF, CONSULT_LABEL, NAV_LINKS } from '../lib/site'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setIsMobileMenuOpen(false), [pathname])
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMobileMenuOpen])

  return (
    <nav className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`} aria-label="Main">
      <div className="nav-container">
        <Logo />
        <div id="primary-nav" className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={pathname === href ? 'page' : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={CONSULT_HREF} className="button button-primary button-sm">
            {CONSULT_LABEL}
          </Link>
        </div>
        <button
          type="button"
          className="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
