"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import styles
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Update this if you add more slides


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
            <a href="/products">Services</a>
            <a href="#about">About</a>
            <a href="/contact">Contact</a>
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
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={6000}
        transitionTime={700}
        swipeable={false}
        emulateTouch={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <li
              key={index}
              onClick={onClickHandler}
              className={`custom-indicator ${isSelected ? 'selected' : ''}`}
              aria-label={`Slide ${index + 1}`}
              title={label}
            />
          );
        }}
      >
        <div className="hero-slide">
          <img src="/assets/scientist-at-bench.jpg" alt="Smiling laboratory scientist in GLP-compliant lab using microscope with access badge, representing data integrity and regulatory compliance services" />
          <div className="hero-text">
            <h1>Advance Your Lab with Confidence</h1>
            <p>
              Expert GLP/GMP solutions to strengthen your lab&rsquo;s regulatory readiness and data integrity.
            </p>
            <Link href="/products" className="cta-button-gradient">Talk to a Pro</Link>
            <div className="custom-indicator-wrapper">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={index}
                  className={`custom-indicator ${index === currentSlide ? 'selected' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

          </div>
          <div className="hero-fade"></div>
        </div>

        <div className="hero-slide">
          <img src="/assets/smiling-scientists.jpg" alt="Two scientists reviewing data on a tablet in a modern GMP laboratory, preparing for regulatory audit with Lab Integrity Pro's compliance consulting services" />
          <div className="hero-text">
            <h1>Built for Audit-Ready Results</h1>
            <p>
              Templates, training, and data review designed to help you meet regulatory expectations with confidence.
            </p>
            <Link href="/products" className="cta-button-gradient">Get Started</Link>
              <div className="custom-indicator-wrapper">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <span
                    key={index}
                    className={`custom-indicator ${index === currentSlide ? 'selected' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

          </div>
          <div className="hero-fade"></div>
        </div>

        <div className="hero-slide">
          <img src="/assets/lab-inspection.jpg" alt="Lab inspector reviewing records – compliance inspection" />
          <div className="hero-text">
            <h1>Simplify Your Compliance Strategy</h1>
            <p>
              Our expert services streamline SOPs, data integrity, and inspection readiness.
            </p>
            <Link href="/products" className="cta-button-gradient">Learn More</Link>
            <div className="custom-indicator-wrapper">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={index}
                  className={`custom-indicator ${index === currentSlide ? 'selected' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

          </div>
          <div className="hero-fade"></div>
        </div>
      </Carousel>


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
              <a href="/products" className="section-link">
                Let&rsquo;s Optimize Your Systems &gt;
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
                Ensure your lab&rsquo;s data stands up to regulatory scrutiny. With deep experience in GLP/GMP environments, we provide thorough, inspection-ready reviews that identify gaps, enhance traceability, and uphold scientific integrity.
              </p>
              <hr className="section-divider" />
              <a href="/contact" className="section-link">
                Schedule a Data Review &gt;
              </a>
            </div>
          </div>
        </section>

          <section id="contact" className="section">
          <div className="section-content">
            <div className="section-image">
              <img src="/assets/scientist-lab.jpg" alt="Contact Lab Integrity Pro" className="responsive-image" />
            </div>
            <div className="section-text styled-section-text">
              <h4 className="section-subtitle">Regulatory Expertise</h4>
              <h2 className="section-title">GLP and GMP Compliance Without the Guesswork</h2>
              <p>
                We simplify complex regulations into clear, actionable steps. From SOPs to audit prep, our expertise helps your lab stay compliant and inspection-ready with confidence.
              </p>
              <hr className="section-divider" />
              <a href="/products" className="section-link">
                Prepare for Your Next Inspection &gt;
              </a>
            </div>
          </div>
        </section>

        <section className="tile-grid">
          <Link href="/products" className="tile-link">
            <div className="tile" style={{ backgroundImage: "url('/assets/sop-template.jpg')" }}>
              <div className="tile-content">
                <h3>Template Packages</h3>
                <p>Ready-to-use SOP templates for immediate compliance support.</p>
              </div>
            </div>
          </Link>

          <Link href="/products" className="tile-link">
            <div className="tile" style={{ backgroundImage: "url('/assets/inspection.jpg')" }}>
              <div className="tile-content">
                <h3>Inspection Readiness</h3>
                <p>Checklists and gap analysis to help pass audits confidently.</p>
              </div>
            </div>
          </Link>

          <Link href="/products" className="tile-link">
            <div className="tile" style={{ backgroundImage: "url('/assets/data-review.jpg')" }}>
              <div className="tile-content">
                <h3>Data Review</h3>
                <p>Ensure traceability and accuracy in your scientific records.</p>
              </div>
            </div>
          </Link>

          <Link href="/products" className="tile-link">
            <div className="tile" style={{ backgroundImage: "url('/assets/training.jpg')" }}>
              <div className="tile-content">
                <h3>Quality Training</h3>
                <p>Workshops and guidance on GLP/GMP best practices.</p>
              </div>
            </div>
          </Link>
        </section>


        <footer>
          &copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
