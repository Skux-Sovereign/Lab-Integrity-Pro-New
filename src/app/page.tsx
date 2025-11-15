'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from './components/Navigation'
import './page.css'
import labNotebook from './assets/lab-notebook2.jpg';
import scientistLab from './assets/scientist-lab.jpg';

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    // Send to your contact page with form data
    const params = new URLSearchParams()
    params.append('name', formData.get('name') as string)
    params.append('email', formData.get('email') as string)
    params.append('message', 'Quick contact from homepage')
    
    window.location.href = `/contact?${params.toString()}`
  }

  return (
    <>
      {/* Navigation - Now using the shared component */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Excellence in Laboratory Compliance</h1>
            <p>Expert GLP/GMP consulting services for bioanalytical laboratories. Ensuring data integrity, regulatory compliance, and operational excellence.</p>
            <div className="hero-buttons">
              <Link href="/products" className="btn btn-primary">Get Started</Link>
              <Link href="/products" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <svg className="lab-graphic" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.1}} />
                </linearGradient>
              </defs>
              <path d="M150 100 L150 180 L100 280 L200 280 Z" fill="url(#grad1)" stroke="white" strokeWidth="3"/>
              <rect x="140" y="80" width="20" height="30" fill="white" opacity="0.8"/>
              <path d="M140 200 L120 250 L180 250 Z" fill="rgba(255,255,255,0.4)"/>
              <path d="M250 120 L250 200 L220 260 L280 260 Z" fill="url(#grad1)" stroke="white" strokeWidth="2"/>
              <rect x="245" y="100" width="10" height="25" fill="white" opacity="0.8"/>
              <circle cx="300" cy="150" r="8" fill="white" opacity="0.6"/>
              <circle cx="320" cy="140" r="6" fill="white" opacity="0.5"/>
              <circle cx="310" cy="165" r="5" fill="white" opacity="0.7"/>
              <line x1="300" y1="150" x2="320" y2="140" stroke="white" strokeWidth="2" opacity="0.5"/>
              <line x1="300" y1="150" x2="310" y2="165" stroke="white" strokeWidth="2" opacity="0.5"/>
              <rect x="80" y="320" width="240" height="2" fill="white" opacity="0.3"/>
              <rect x="100" y="300" width="4" height="20" fill="white" opacity="0.6"/>
              <rect x="120" y="290" width="4" height="30" fill="white" opacity="0.6"/>
              <rect x="140" y="295" width="4" height="25" fill="white" opacity="0.6"/>
              <rect x="160" y="285" width="4" height="35" fill="white" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with Automation Focus */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for laboratory compliance and data integrity</p>
        </div>
        <div className="services-grid">
          <Link href="/products#automation" className="service-card-link">
            <div className="service-card featured">
              <div className="service-badge">NEW</div>
              <div className="service-icon">🤖</div>
              <h3>Data Review Automation</h3>
              <p>Transform paper-based QC processes with our cutting-edge automation solution designed for pharmaceutical laboratories.</p>
              <ul className="service-features">
                <li>Handwritten notebook digitization</li>
                <li>Automated compliance checks</li>
                <li>80% time reduction</li>
                <li>21 CFR Part 11 compliant</li>
              </ul>
              <span className="service-cta">See Demo →</span>
            </div>
          </Link>
          <Link href="/products#sop-packages" className="service-card-link">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>SOP Packages</h3>
              <p>Customizable standard operating procedures tailored to your laboratory&apos;s specific needs.</p>
              <ul className="service-features">
                <li>Regulatory compliant templates</li>
                <li>Best practice workflows</li>
                <li>Version control systems</li>
                <li>Implementation support</li>
              </ul>
              <span className="service-cta">Learn More →</span>
            </div>
          </Link>
          <Link href="/products#consulting" className="service-card-link">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Data Review Consulting</h3>
              <p>Expert QA/QC data review services with over 10 years of experience in GLP and GMP environments.</p>
              <ul className="service-features">
                <li>Bioanalytical assay review</li>
                <li>PK/PD and ADA analysis</li>
                <li>Audit trail analysis</li>
                <li>Training and mentoring</li>
              </ul>
              <span className="service-cta">Learn More →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Expertise You Can Trust</h2>
            <p>With over a decade of experience as a QC Supervisor in bioanalytical laboratories at leading CROs including PPD and QPS, Lab Integrity Pro brings unparalleled expertise to your compliance needs.</p>
            <p>Specializing in large molecule antibody drug conjugate treatments for cancer, we understand the unique challenges of maintaining data integrity and regulatory compliance in fast-paced, high-stakes laboratory settings.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Data Reviews</div>
              </div>
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Major CROs</div>
              </div>
              <div className="stat">
                <div className="stat-number">ADC</div>
                <div className="stat-label">Specialization</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="100" width="300" height="200" rx="10" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2"/>
              <rect x="70" y="120" width="260" height="30" fill="#0891b2" opacity="0.2"/>
              <text x="200" y="140" textAnchor="middle" fill="#0891b2" fontWeight="bold" fontSize="16">Quality Certificate</text>
              <circle cx="100" cy="200" r="30" fill="#14b8a6" opacity="0.3"/>
              <path d="M85 200 L95 210 L115 185" stroke="#14b8a6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="150" y="180" width="150" height="8" fill="#cbd5e1" rx="4"/>
              <rect x="150" y="200" width="120" height="8" fill="#cbd5e1" rx="4"/>
              <rect x="150" y="220" width="140" height="8" fill="#cbd5e1" rx="4"/>
              <rect x="150" y="240" width="100" height="8" fill="#cbd5e1" rx="4"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What QC Professionals Are Saying</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>&ldquo;Finally, someone who understands the pain of reviewing handwritten PCR notebooks day after day. This automation solution is exactly what our industry needs.&rdquo;</p>
            <cite>— QC Manager, Top 5 CRO</cite>
          </div>
          <div className="testimonial-card">
            <p>&ldquo;The SOP templates saved us weeks of documentation work. They&apos;re comprehensive, compliant, and easy to customize for our specific needs.&rdquo;</p>
            <cite>— Quality Director, Biotech Startup</cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Ready to Ensure Compliance?</h2>
          <p>Let&apos;s discuss how Lab Integrity Pro can support your laboratory&apos;s success</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="company" placeholder="Company" />
              <input type="tel" name="phone" placeholder="Phone" />
            </div>
            <textarea name="message" placeholder="Tell us about your needs..." required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <ul className="footer-links">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
          <p>&copy; 2024 Lab Integrity Pro. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}