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
        <div className="hero">
          <img
            src="/assets/scientist-lab.jpg"
            alt="Scientist in lab using pipette – GLP compliance work"
            loading="eager"
          />
          <div className="hero-text">
            <h1>Advance Your Lab with Confidence</h1>
            <p>
              Expert GLP/GMP solutions to strengthen your lab’s regulatory readiness and data integrity.
            </p>
            <a href="#services" className="hero-cta">Learn more about our services ›</a>
          </div>
          <div className="hero-fade"></div>
        </div>

        <section id="main-header" className="section">
          <div className="section-content">
            <h3> Improve data integrity, simplify SOP development, and ensure audit readiness with expert-led quality system support.
            </h3>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/team-of-scientists.jpg" alt="Compliance consulting" className="responsive-image" />
            </div>
            <div className="section-text styled-section-text">
              <h4 className="section-subtitle">End-to-End Quality Support</h4>
              <h2 className="section-title">Quality Strategies That Grow With Your Lab</h2>
              <p>
                Improve data integrity, simplify SOP development, and ensure audit readiness with expert-led quality system support.
              </p>
              <hr className="section-divider" />
              <a href="#contact" className="section-link">
                Let's Optimize Your Systems ›
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section reverse">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/lab-notebook2.jpg" alt="About Lab Integrity Pro" className="responsive-image" />
            </div>
            <div className="section-text styled-section-text">
              <h4 className="section-subtitle">Data Integrity Consulting</h4>
              <h2 className="section-title">Audit-Ready Data Review for Pharma and Biotech</h2>
              <p>
                Ensure your lab’s data stands up to regulatory scrutiny. With deep experience in GLP/GMP environments, we provide thorough, inspection-ready reviews that identify gaps, enhance traceability, and uphold scientific integrity.
              </p>
              <hr className="section-divider" />
              <a href="#contact" className="section-link">
                Schedule a Data Review ›
              </a>
            </div>
          </div>
        </section>

          <section id="contact" className="section">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/lab-inspection.jpg" alt="Contact Lab Integrity Pro" className="responsive-image" />
            </div>
            <div className="section-text styled-section-text">
              <h4 className="section-subtitle">Regulatory Expertise</h4>
              <h2 className="section-title">GLP and GMP Compliance Without the Guesswork</h2>
              <p>
                We simplify complex regulations into clear, actionable steps. From SOPs to audit prep, our expertise helps your lab stay compliant and inspection-ready with confidence.
              </p>
              <hr className="section-divider" />
              <a href="#contact" className="section-link">
                Prepare for Your Next Inspection ›
              </a>
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
