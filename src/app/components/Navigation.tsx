'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-link" onClick={closeMenu}>
          <img src="/logo.svg" alt="Lab Integrity Pro" className="logo-image" />
        </Link>
        <ul id="primary-nav" className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMenu}>{label}</Link>
            </li>
          ))}
        </ul>
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
