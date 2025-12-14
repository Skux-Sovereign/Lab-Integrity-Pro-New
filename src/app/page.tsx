'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import './page.css'
import scientistLab from './assets/scientist-lab.jpg';
import inspection from './assets/inspection.jpg';
import labNotebook from './assets/lab-notebook.jpg';
import antibody from './assets/antibody.jpg';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // Animated counter state
  const [countersVisible, setCountersVisible] = useState(false)
  const [counts, setCounts] = useState({ years: 0, audit: 0, sops: 0, labs: 0 })
  const statsRef = useRef<HTMLDivElement>(null)
  
  // Target values for counters
  const targetCounts = { years: 10, audit: 100, sops: 500, labs: 40 }
  
  // Intersection Observer to trigger animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersVisible) {
          setCountersVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
    return () => observer.disconnect()
  }, [countersVisible])
  
  // Animate counters when visible
  useEffect(() => {
    if (!countersVisible) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepTime = duration / steps
    
    let currentStep = 0
    
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setCounts({
        years: Math.round(targetCounts.years * easeOut),
        audit: Math.round(targetCounts.audit * easeOut),
        sops: Math.round(targetCounts.sops * easeOut),
        labs: Math.round(targetCounts.labs * easeOut)
      })
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targetCounts) // Ensure we hit exact targets
      }
    }, stepTime)
    
    return () => clearInterval(timer)
  }, [countersVisible])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/manrkqoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          _subject: 'New inquiry from Lab Integrity Pro homepage'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - AI Focused */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-tagline">AI-Powered Compliance Solutions</p>
            <h1>The Future of Laboratory Compliance is Here</h1>
            <p>Combining decade-deep pharmaceutical expertise with cutting-edge AI to transform how labs manage data integrity, regulatory compliance, and quality operations.</p>
            <div className="hero-buttons">
              <Link href="/contact?interest=automation-pilot" className="btn btn-primary">Start Your AI Journey</Link>
              <Link href="/products" className="btn btn-secondary">Explore Solutions</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-stats-float">
              <div className="float-stat">
                <span className="float-number">50%</span>
                <span className="float-label">Time Saved</span>
              </div>
              <div className="float-stat">
                <span className="float-number">100%</span>
                <span className="float-label">Audit Ready</span>
              </div>
              <div className="float-stat">
                <span className="float-number">24/7</span>
                <span className="float-label">AI Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
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
            When you work with Lab Integrity Pro, you&apos;re partnering with someone who&apos;s lived these challenges inside 
            real laboratories — and knows exactly how to solve them.
          </p>
        </div>
      </section>

      {/* Services Section - Enhanced with Wave */}
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
              <p>Transform your laboratory&apos;s efficiency with intelligent automation solutions that reduce manual work while maintaining GxP compliance.</p>
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

        {/* Organic Wave SVG */}
        <svg 
          className="services-wave" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="servicesWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="50%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#065f73" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#servicesWaveGradient)"
            opacity="0.3"
            d="M0,120 C180,180 360,100 540,120 C720,140 900,180 1080,140 C1260,100 1380,130 1440,120 L1440,200 L0,200 Z"
          />
          <path 
            fill="url(#servicesWaveGradient)"
            opacity="0.6"
            d="M0,140 C240,100 360,160 600,130 C840,100 960,150 1200,120 C1320,105 1400,140 1440,130 L1440,200 L0,200 Z"
          />
          <path 
            fill="url(#servicesWaveGradient)"
            d="M0,160 C144,140 288,180 432,150 C576,120 720,160 864,140 C1008,120 1152,150 1296,130 C1368,120 1416,145 1440,150 L1440,200 L0,200 Z"
          />
        </svg>
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
            <div className="stats" ref={statsRef}>
              <div className="stat">
                <div className="stat-number">{counts.years}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counts.audit}%</div>
                <div className="stat-label">Audit Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counts.sops}+</div>
                <div className="stat-label">SOPs Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counts.labs}+</div>
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
          
          {submitStatus === 'success' && (
            <div style={{ 
              background: '#d4edda', 
              color: '#155724', 
              padding: '1rem', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 500
            }}>
              ✓ Thank you for your message! We&apos;ll be in touch soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{ 
              background: '#f8d7da', 
              color: '#721c24', 
              padding: '1rem', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 500
            }}>
              ✕ There was an error sending your message. Please try again or email us at info@labintegritypro.com
            </div>
          )}
          
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
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
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