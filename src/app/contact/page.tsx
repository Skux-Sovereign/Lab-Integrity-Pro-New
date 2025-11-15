"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import '../page.css';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check URL params for pre-filled data
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    const packageType = params.get('package');
    
    if (interest) {
      setFormData(prev => ({
        ...prev,
        service: interest === 'automation-pilot' ? 'automation-demo' : 
                 interest === 'pilot-program' ? 'pilot-program' : 
                 interest
      }));
    }
    
    if (packageType) {
      setFormData(prev => ({
        ...prev,
        service: `sop-${packageType}`,
        message: `I'm interested in the ${packageType} SOP package.`
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      details: 'info@labintegritypro.com',
      action: 'mailto:info@labintegritypro.com',
      actionText: 'Send Email'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      details: 'Connect for quick responses',
      action: 'https://linkedin.com/company/lab-integrity-pro',
      actionText: 'Connect on LinkedIn'
    },
    {
      icon: '📅',
      title: 'Schedule a Demo',
      details: 'See our automation solution in action',
      action: 'https://calendly.com/labintegritypro/demo',
      actionText: 'Book Demo'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM EST',
      action: '#',
      actionText: 'Available Now'
    }
  ];

  const faqs = [
    {
      question: "How much time can automation save on data review?",
      answer: "Our clients typically see 60-80% reduction in manual review time, especially for handwritten laboratory notebooks and PCR data sheets. This translates to hours saved daily for QC teams."
    },
    {
      question: "Is your automation solution 21 CFR Part 11 compliant?",
      answer: "Yes, our solution maintains complete audit trails, electronic signatures, and data integrity throughout the automated review process, fully compliant with 21 CFR Part 11 requirements."
    },
    {
      question: "Can you automate our existing paper-based processes?",
      answer: "Absolutely. We specialize in digitizing and automating paper-based workflows, particularly handwritten notebooks that are common in PCR and bioanalytical teams."
    },
    {
      question: "What's included in the pilot program?",
      answer: "Pilot participants get hands-on implementation of our automation tools, customized to your specific workflows, with 30 days of support and optimization. Limited to 5 laboratories."
    },
    {
      question: "Do you still offer SOP templates?",
      answer: "Yes! We offer streamlined SOP packages from $197-$1,199 that work with any lab size and can be customized to your systems. Instant download available."
    },
    {
      question: "How do you handle data security?",
      answer: "All data processing happens within your secure environment. We never store or transmit your proprietary data outside your controlled systems."
    }
  ];

  return (
    <>
      {/* Navigation - Using shared component */}
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">Let&apos;s discuss how we can help elevate your laboratory&apos;s compliance</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.details}</p>
                {method.action !== '#' ? (
                  <a href={method.action} className="method-link" 
                     target={method.action.startsWith('http') ? '_blank' : undefined}
                     rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {method.actionText} →
                  </a>
                ) : (
                  <span className="method-link disabled">{method.actionText}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <span className="alert-icon">✓</span>
                  Thank you for your message! We&apos;ll be in touch soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <span className="alert-icon">✕</span>
                  There was an error sending your message. Please try again or email us directly.
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select area of interest...</option>
                    <option value="automation-demo">Data Review Automation Demo</option>
                    <option value="pilot-program">Join Pilot Program</option>
                    <option value="paper-to-digital">Paper-to-Digital Transition</option>
                    <option value="pcr-automation">PCR Data Automation</option>
                    <option value="sop-starter">SOP Starter Package ($197)</option>
                    <option value="sop-essential">SOP Essential Package ($449)</option>
                    <option value="sop-professional">SOP Professional Package ($899)</option>
                    <option value="sop-complete">SOP Complete Package ($1,199)</option>
                    <option value="consultation">Custom Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Additional Info */}
            <div className="contact-info-wrapper">
              <div className="info-card">
                <h3>🚀 Pilot Program Open</h3>
                <p className="pilot-alert">Only 3 spots remaining! Join our exclusive pilot program for hands-on implementation of our automation solution.</p>
                <Link href="/contact?interest=pilot-program" className="pilot-link">Apply Now →</Link>
              </div>
              
              <div className="info-card">
                <h3>Consultation Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <span className="step-number">1</span>
                    <div>
                      <h4>Pain Point Discovery</h4>
                      <p>15-min call to understand your challenges</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">2</span>
                    <div>
                      <h4>Workflow Analysis</h4>
                      <p>Identify automation opportunities</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">3</span>
                    <div>
                      <h4>Pilot Implementation</h4>
                      <p>Test with your actual data</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">4</span>
                    <div>
                      <h4>ROI Validation</h4>
                      <p>Measure time savings & compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Why Lab Integrity Pro?</h3>
                <ul className="benefits-list">
                  <li>Active QC Supervisor at major CROs</li>
                  <li>10+ years GxP experience</li>
                  <li>Specialization in ADC & biologics</li>
                  <li>Real-world automation solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Download our templates instantly or schedule a consultation to discuss custom solutions</p>
            <div className="cta-buttons">
              <Link href="/products" className="btn btn-primary">View Products</Link>
              <Link href="#contact-form" className="btn btn-secondary">Contact Form ↑</Link>
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
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}