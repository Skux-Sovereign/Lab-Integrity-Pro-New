"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../page.css';
import './contact.css';

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
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
      icon: '📱',
      title: 'Phone',
      details: '1-800-LAB-INTG',
      action: 'tel:1-800-522-4684',
      actionText: 'Call Now'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Serving clients globally from the USA',
      action: '#',
      actionText: 'View Map'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM EST',
      action: '#',
      actionText: 'Schedule Call'
    }
  ];

  const faqs = [
    {
      question: "How quickly can you implement compliance solutions?",
      answer: "Our SOP templates are available for immediate download. Custom consulting projects typically begin within 1-2 weeks of initial contact, with implementation timelines varying based on scope."
    },
    {
      question: "Do you provide remote consulting services?",
      answer: "Yes, we offer both remote and on-site consulting services globally. Our remote services include virtual audits, training sessions, and implementation support via video conferencing."
    },
    {
      question: "Are your templates customizable?",
      answer: "Absolutely. All our SOP templates and toolkits are provided in editable formats (Word/Excel) and are designed to be easily customized to match your laboratory's specific needs and branding."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve pharmaceutical, biotechnology, CRO/CMO, clinical diagnostics, academic research, and government laboratories. Our expertise spans both small molecule and large molecule (biologics) environments."
    },
    {
      question: "Do you offer training with your products?",
      answer: "Yes, we provide comprehensive training options including implementation guides with our products, virtual training sessions, and on-site workshops tailored to your team's needs."
    },
    {
      question: "What makes Lab Integrity Pro different?",
      answer: "Our team brings over 10 years of hands-on experience in GxP environments, currently active in the industry, ensuring our solutions are practical, current, and immediately applicable."
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
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact" className="active">Contact</Link></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">Let's discuss how we can help elevate your laboratory's compliance</p>
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
                  <a href={method.action} className="method-link">
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
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <span className="alert-icon">✓</span>
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <span className="alert-icon">✕</span>
                  There was an error sending your message. Please try again.
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
                    <option value="">Select a service...</option>
                    <option value="data-review">Data Review Consulting</option>
                    <option value="sop-templates">SOP Templates</option>
                    <option value="audit-prep">Audit Preparation</option>
                    <option value="training">Training Services</option>
                    <option value="custom">Custom Solutions</option>
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
                <h3>Quick Response Time</h3>
                <p>We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
              </div>
              
              <div className="info-card">
                <h3>Consultation Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <span className="step-number">1</span>
                    <div>
                      <h4>Initial Contact</h4>
                      <p>Share your needs via form or phone</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">2</span>
                    <div>
                      <h4>Discovery Call</h4>
                      <p>30-minute consultation to understand your requirements</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">3</span>
                    <div>
                      <h4>Custom Proposal</h4>
                      <p>Tailored solution and implementation plan</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <span className="step-number">4</span>
                    <div>
                      <h4>Implementation</h4>
                      <p>Expert guidance through execution</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Connect on LinkedIn</h3>
                <p>Follow Lab Integrity Pro for industry insights, regulatory updates, and compliance tips.</p>
                <a href="#" className="linkedin-button">
                  <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Follow on LinkedIn
                </a>
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
              <a href="#contact-form" className="btn btn-secondary">Contact Form ↑</a>
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