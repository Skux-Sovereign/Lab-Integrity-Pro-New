"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../page.css';
import './about.css';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const values = [
    {
      icon: "🎯",
      title: "Precision & Accuracy",
      description: "Every template, every consultation, every solution is crafted with meticulous attention to detail and regulatory requirements."
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "We view ourselves as an extension of your team, invested in your success and committed to your laboratory's excellence."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "The regulatory landscape evolves constantly. We stay current so you can stay compliant."
    },
    {
      icon: "💡",
      title: "Practical Innovation",
      description: "We combine proven methodologies with innovative approaches to solve complex compliance challenges."
    }
  ];

  const expertise = [
    {
      category: "Regulatory Compliance",
      items: ["FDA 21 CFR Part 11/58", "EMA Guidelines", "ICH M10 2022", "ALCOA+ Principles", "GLP/GMP Standards"]
    },
    {
      category: "Data Integrity",
      items: ["Audit Trail Review", "Electronic Records", "Data Lifecycle Management", "Metadata Handling", "System Validation"]
    },
    {
      category: "Quality Systems",
      items: ["SOP Development", "CAPA Management", "Deviation Handling", "Change Control", "Risk Assessment"]
    },
    {
      category: "Laboratory Operations",
      items: ["Method Validation", "Sample Analysis", "Equipment Qualification", "Training Programs", "Documentation Practices"]
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="logo">Lab Integrity Pro</Link>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about" className="active">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-text-wrapper">
            <h1>About Lab Integrity Pro</h1>
            <p className="hero-subtitle">Your Partner in Laboratory Excellence</p>
            <p className="hero-description">
              Led by experts with over a decade of experience in GxP environments, 
              we specialize in data integrity, regulatory compliance, and quality systems 
              for bioanalytical laboratories worldwide.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years GxP Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Audit Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Labs Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p className="lead">
                To empower laboratories with the knowledge, tools, and expertise needed to achieve 
                and maintain the highest standards of data integrity and regulatory compliance.
              </p>
              <p>
                Lab Integrity Pro was founded on the principle that every laboratory, regardless of size 
                or resources, deserves access to expert-level compliance guidance. Our team brings together 
                decades of collective experience from leading pharmaceutical companies, CROs, and biotech 
                organizations to deliver practical, implementable solutions.
              </p>
              <p>
                We understand the challenges modern laboratories face: evolving regulations, complex 
                documentation requirements, and the constant pressure to maintain quality while meeting 
                deadlines. That's why we've developed streamlined solutions that don't just meet compliance 
                standards—they enhance your operational efficiency.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.2"/>
                  <circle cx="200" cy="200" r="100" fill="url(#grad1)" opacity="0.3"/>
                  <circle cx="200" cy="200" r="50" fill="url(#grad1)" opacity="0.4"/>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <text x="200" y="200" textAnchor="middle" fill="#0891b2" fontSize="48" fontWeight="bold" dy=".3em">LIP</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="differentiators-section">
        <div className="container">
          <div className="section-header">
            <h2>What Sets Us Apart</h2>
            <p>Real experience. Practical solutions. Proven results.</p>
          </div>
          
          <div className="differentiators-grid">
            <div className="diff-card">
              <div className="diff-icon">🏭</div>
              <h3>Industry Veterans</h3>
              <p>
                Our team consists of professionals with extensive experience at leading organizations 
                including major pharmaceutical companies, CROs, and biotech firms. We've been in your 
                shoes and understand your challenges.
              </p>
            </div>
            
            <div className="diff-card">
              <div className="diff-icon">📊</div>
              <h3>Data Integrity Specialists</h3>
              <p>
                With over 10 years focused specifically on GxP data integrity, we bring deep expertise 
                in ALCOA+ principles, electronic records management, and audit trail review that goes 
                beyond surface-level compliance.
              </p>
            </div>
            
            <div className="diff-card">
              <div className="diff-icon">🔬</div>
              <h3>Active Practitioners</h3>
              <p>
                Our team members maintain active roles in the industry, ensuring our knowledge stays 
                current with the latest regulations, guidelines, and best practices. We're not just 
                consultants—we're practitioners.
              </p>
            </div>
            
            <div className="diff-card">
              <div className="diff-icon">✅</div>
              <h3>Proven Track Record</h3>
              <p>
                Our solutions have helped laboratories achieve significant improvements: 80% reduction 
                in findings, 99% on-time delivery rates, and successful navigation of FDA and EMA 
                inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Areas of Expertise</h2>
            <p>Comprehensive knowledge across all aspects of laboratory compliance</p>
          </div>
          
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h3>{area.category}</h3>
                <ul className="expertise-list">
                  {area.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Supporting laboratories across diverse sectors</p>
          </div>
          
          <div className="industries-grid">
            <div className="industry-item">
              <div className="industry-icon">💊</div>
              <h3>Pharmaceutical</h3>
              <p>Drug development, manufacturing, and quality control laboratories</p>
            </div>
            
            <div className="industry-item">
              <div className="industry-icon">🧬</div>
              <h3>Biotechnology</h3>
              <p>Biologics, biosimilars, and advanced therapy development</p>
            </div>
            
            <div className="industry-item">
              <div className="industry-icon">🔬</div>
              <h3>Contract Research</h3>
              <p>CROs and CMOs supporting multiple clients and studies</p>
            </div>
            
            <div className="industry-item">
              <div className="industry-icon">🏥</div>
              <h3>Clinical Diagnostics</h3>
              <p>CLIA-certified and diagnostic testing laboratories</p>
            </div>
            
            <div className="industry-item">
              <div className="industry-icon">🧪</div>
              <h3>Academic Research</h3>
              <p>University and institutional research laboratories</p>
            </div>
            
            <div className="industry-item">
              <div className="industry-icon">🏛️</div>
              <h3>Government</h3>
              <p>Federal and state laboratory facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <p>A systematic methodology for sustainable compliance</p>
          </div>
          
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Assess</h3>
                <p>We begin by understanding your current state, challenges, and compliance goals</p>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design</h3>
                <p>Custom solutions are developed to address your specific needs and requirements</p>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implement</h3>
                <p>Practical tools and processes are deployed with minimal disruption to operations</p>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Support</h3>
                <p>Ongoing guidance ensures sustainable compliance and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Laboratory's Compliance?</h2>
            <p>Discover how Lab Integrity Pro can help you achieve excellence in data integrity and regulatory compliance</p>
            <div className="cta-buttons">
              <Link href="/products" className="btn btn-primary">Explore Our Solutions</Link>
              <Link href="/#contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <ul className="footer-links">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}