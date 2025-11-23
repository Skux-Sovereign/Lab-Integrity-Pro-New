'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import './page.css'
import scientistLab from './assets/scientist-lab.jpg';
import inspection from './assets/inspection.jpg';
import labNotebook from './assets/lab-notebook.jpg';
import antibody from './assets/antibody.jpg';

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
            <p>Expert cGLP/cGMP consulting services for pharmaceutical laboratories. Ensuring data integrity, regulatory compliance, and operational excellence.</p>
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
            </svg>
          </div>
        </div>
      </section>

      {/* Trust Section - New */}
      <section className="trust" id="trust">
        <div className="trust-content">
          <h2>Trusted Expertise Backed by Real-World Lab Experience</h2>
          <p className="trust-subtitle">
            With over a decade supporting regulated bioanalytical and QC laboratories, Lab Integrity Pro brings proven, 
            audit-ready expertise to high-stakes environments.
          </p>
          
          <div className="trust-pillars">
            <div className="trust-pillar">
              <div className="pillar-icon">
                <Image 
                  src={inspection}
                  alt="Industry Experience"
                  width={200}
                  height={200}
                  className="pillar-image"
                  quality={100}
                />
              </div>
              <h3>Industry Experience Across:</h3>
              <ul className="pillar-list">
                <li>Top 5 global CROs</li>
                <li>Biotech companies developing oncology and immunology therapies</li>
                <li>Clinical trial labs supporting Phase 1-3 programs</li>
              </ul>
            </div>
            
            <div className="trust-pillar">
              <div className="pillar-icon">
                <Image 
                  src={labNotebook}
                  alt="What Sets Us Apart"
                  width={200}
                  height={200}
                  className="pillar-image"
                  quality={100}
                />
              </div>
              <h3>What Sets Us Apart:</h3>
              <ul className="pillar-list">
                <li>1,000+ regulated data reviews completed</li>
                <li>Extensive GLP, GCP, and GMP quality system experience</li>
                <li>Hands-on expertise with large molecule & ADC programs</li>
                <li>Direct support during FDA and EMA inspections</li>
              </ul>
            </div>
            
            <div className="trust-pillar">
              <div className="pillar-icon">
                <Image 
                  src={antibody}
                  alt="Specialized Expertise"
                  width={200}
                  height={200}
                  className="pillar-image"
                  quality={100}
                />
              </div>
              <h3>Specialized Expertise</h3>
              <p>Deep experience in large molecule and ADC programs, PK/ADA/nAb workflows, and bioanalytical compliance challenges unique to fast-paced labs.</p>
            </div>
          </div>
          
          <p className="trust-footer">
            When you work with Lab Integrity Pro, you're partnering with someone who's lived these challenges inside 
            real laboratories — and knows exactly how to solve them.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-content">
          <h2>Comprehensive Laboratory Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>cGLP/cGMP Data Review</h3>
              <p>Expert review of bioanalytical and quality control data to ensure compliance with FDA, EMA, and ICH guidelines. From method validation to sample analysis.</p>
              <ul className="service-features">
                <li>PK/ADA/nAb Studies</li>
                <li>Batch Records & COAs</li>
                <li>Audit Trail Review</li>
              </ul>
              <Link href="/products#data-review" className="service-cta">Learn more →</Link>
            </div>
            <div className="service-card featured">
              <span className="badge">Most Popular</span>
              <div className="service-icon">🤖</div>
              <h3>AI-Supported Automation</h3>
              <p>Transform your laboratory's efficiency with intelligent automation solutions that reduce manual work while maintaining GxP compliance.</p>
              <ul className="service-features">
                <li>50% Time Reduction</li>
                <li>Built-in Compliance</li>
                <li>Secure Implementation</li>
              </ul>
              <Link href="/contact?interest=automation-pilot" className="service-cta">Join Pilot Program →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>LIMS & ELN Solutions</h3>
              <p>Configuration, optimization, and validation of laboratory information management systems. Streamline your workflows while ensuring data integrity.</p>
              <ul className="service-features">
                <li>Custom Configurations</li>
                <li>21 CFR Part 11 Compliance</li>
                <li>Data Migration</li>
              </ul>
              <Link href="/products#lims" className="service-cta">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Your Partner in Laboratory Excellence</h2>
            <p>
              Lab Integrity Pro specializes in bridging the gap between cutting-edge laboratory science 
              and stringent regulatory requirements. We bring over a decade of hands-on experience 
              in bioanalytical and quality control laboratories.
            </p>
            <p>
              Our expertise spans from small biotech startups to global CROs, ensuring your laboratory 
              meets the highest standards of data integrity and regulatory compliance.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Audit Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">SOPs Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">Labs Supported</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image 
              src={scientistLab} 
              alt="Laboratory scientist conducting data review" 
              className="about-photo"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials-content">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>&ldquo;Lab Integrity Pro transformed our data review process. What used to take days now takes hours, with better accuracy and full audit trails. This automation solution is exactly what our industry needs.&rdquo;</p>
              <cite>— QC Manager, Top 5 CRO</cite>
            </div>
            <div className="testimonial-card">
              <p>&ldquo;The SOP templates saved us weeks of documentation work. They&apos;re comprehensive, compliant, and easy to customize for our specific needs.&rdquo;</p>
              <cite>— Quality Director, Biotech Startup</cite>
            </div>
            <div className="testimonial-card">
              <p>&ldquo;The automation workflow reduced our QA review time from days to hours. It didn&apos;t just speed us up — it made our documentation more consistent and audit-ready. This is a game changer for busy labs.&rdquo;</p>
              <cite>— Senior QA Specialist, Mid-Sized Biopharma</cite>
            </div>
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
          <p>&copy; 2025 Lab Integrity Pro. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}