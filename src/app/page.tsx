"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <header className={`lab-header ${scrolled ? 'scrolled' : ''}`} style={{ marginTop: 0 }}>
        <div className="nav-container">
          <div className="nav-logo-wrapper">
            
            <Link href="/" className="nav-logo-text"><img src="/assets/logo.png" alt="Lab Integrity Pro Logo" className="nav-logo-img" /></Link>
          </div>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <span className="hamburger-close">✕</span>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </button>
        </div>
      </header>

      <div>
        <section className="hero">
          <img
            src="/assets/scientist-lab.jpg"
            alt="Scientist in lab using pipette – GLP compliance work"
            loading="eager"
          />
          <section className='section'>
          <div className="hero-text">
            <h1>Empowering Labs to Meet Regulatory Excellence</h1>
            <p>Your partner in GLP/GMP compliance, quality systems, and regulatory readiness for biotech and pharmaceutical success.</p>
          </div>
          <div className="hero-fade"></div>
          </section>
        </section>

        <section id="services" className="section">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/lab-notebook.jpg" alt="Compliance consulting" style={{ width: '600px', height: 'auto' }} />
            </div>
            <div className="section-text">
              <h2>Our Services</h2>
              <ul>
                <li>GLP/GMP Audit Readiness Assessments</li>
                <li>SOP Development & Review</li>
                <li>Data Integrity Compliance</li>
                <li>QA/QC Process Optimization</li>
                <li>Mock Inspections & Gap Analysis</li>
              </ul>
              <hr className="section-hr" />
            </div>
          </div>
        </section>

        <section id="about" className="section reverse">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/scientist-woman.jpg" alt="About Lab Integrity Pro" style={{ width: '600px', height: 'auto' }} />
            </div>
            <div className="section-text">
              <h2>About Us</h2>
              <p>
                Lab Integrity Pro is led by a seasoned Quality Control professional with over 10 years of experience in GLP compliance,
                laboratory data review, and regulatory readiness for pharma and biotech clients. We help labs build reliable
                systems that pass inspections and protect scientific integrity.
              </p>
              <hr className="section-hr" />
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/smiling-scientist.jpg" alt="Contact Lab Integrity Pro" style={{ width: '600px', height: 'auto' }} />
            </div>
            <div className="section-text">
              <h2>Get in Touch</h2>
              <p>Email us at <a href="mailto:info@labintegritypro.com">info@labintegritypro.com</a></p>
            </div>
          </div>
        </section>

        <footer>
          &copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
