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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check URL params for pre-filled data
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    const packageType = params.get('package');
    const service = params.get('service');
    const product = params.get('product');
    const training = params.get('training');
    const intent = params.get('intent');
    
    if (interest) {
      setFormData(prev => ({
        ...prev,
        service: interest === 'automation-pilot' ? 'automation-pilot' : 
                 interest === 'pilot-program' ? 'pilot-program' : 
                 interest
      }));
    }
    
    // Handle product links from products page (SOP packages)
    if (product) {
      const productMap: Record<string, string> = {
        'Essential GLP': 'sop-essential',
        'Professional GLP': 'sop-professional', 
        'Enterprise GLP': 'sop-enterprise'
      };
      
      setFormData(prev => ({
        ...prev,
        service: productMap[product] || 'other',
        message: `I'm interested in the ${product} package.`
      }));
    }

    // Handle service links from products page
    if (service) {
      const serviceMap: Record<string, string> = {
        'data-review': 'data-review-study',
        'automation': 'automation-pilot',
        'lims': 'lims-config',
        'Compliance Audit': 'compliance-audit',
        'Custom SOP Development': 'custom-sop',
        'Regulatory Support': 'regulatory-support'
      };
      
      setFormData(prev => ({
        ...prev,
        service: serviceMap[service] || service.toLowerCase().replace(/\s+/g, '-'),
        message: `I'm interested in learning more about ${service.replace(/-/g, ' ')} services.`
      }));
    }

    // Handle training links from products page
    if (training) {
      const trainingMap: Record<string, string> = {
        'Data Integrity': 'training-data-integrity',
        'GLP/GMP': 'training-glp-gmp',
        'QC Review': 'training-qc-review',
        'Automation': 'training-automation'
      };
      
      setFormData(prev => ({
        ...prev,
        service: trainingMap[training] || 'other',
        message: `I'm interested in ${training} training for our team.`
      }));
    }

    // Handle strategy call intent
    if (intent === 'strategy-call') {
      setFormData(prev => ({
        ...prev,
        service: 'strategy-call',
        message: `I'd like to schedule a strategy call to discuss our laboratory needs.`
      }));
    }

    // Legacy support for old package parameter format
    if (packageType) {
      setFormData(prev => ({
        ...prev,
        service: `sop-${packageType}`,
        message: `I'm interested in the ${packageType} SOP package.`
      }));
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but if provided, check format)
    if (formData.phone) {
      const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using Formspree for email handling
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Sign up at https://formspree.io to get your form ID
      const response = await fetch('https://formspree.io/f/manrkqoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Lab Integrity Pro Contact: ${formData.service || 'General Inquiry'}`,
        })
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
        setErrors({});
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
      answer: "Our clients typically see 50-60% reduction in manual review time, especially for handwritten laboratory notebooks and PCR data sheets. This translates to hours saved daily for QA and QC teams."
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
      answer: "Yes! We offer streamlined SOP packages from $197-$997 that work with any lab size and can be customized to your systems. Instant download available."
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
                  There was an error sending your message. Please try again or email us directly at info@labintegritypro.com.
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="John Smith"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="john@company.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
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
                      className={errors.phone ? 'error' : ''}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                    
                    <optgroup label="Quick Actions">
                      <option value="strategy-call">Book a Strategy Call</option>
                      <option value="automation-demo">See Automation Demo</option>
                      <option value="pilot-program">Join Automation Pilot Program ($5K-$15K)</option>
                    </optgroup>
                    
                    <optgroup label="Core Services">
                      <option value="data-review-monthly">cGLP/cGMP Data Review - Monthly Retainer ($2,500+/month)</option>
                      <option value="data-review-study">cGLP/cGMP Data Review - Per Study ($1,500-$5,000)</option>
                      <option value="automation-pilot">AI-Supported Automation - Pilot Program</option>
                      <option value="automation-custom">AI-Supported Automation - Custom Solution</option>
                      <option value="lims-config">LIMS & ELN Configuration ($15K-$50K)</option>
                      <option value="lims-assessment">LIMS & ELN Assessment ($5K)</option>
                      <option value="lims-optimization">LIMS & ELN Optimization ($10K-$25K)</option>
                    </optgroup>
                    
                    <optgroup label="SOP Packages">
                      <option value="sop-essential">Essential GxP Package - 5 SOPs ($197)</option>
                      <option value="sop-professional">Professional GxP Package - 15 SOPs ($497)</option>
                      <option value="sop-enterprise">Enterprise GxP Package - 25+ SOPs ($997)</option>
                    </optgroup>
                    
                    <optgroup label="Consulting Services">
                      <option value="compliance-audit">Compliance Audit ($5,000)</option>
                      <option value="custom-sop">Custom SOP Development ($1,500+)</option>
                      <option value="regulatory-support">Regulatory Support (Custom Quote)</option>
                    </optgroup>
                    
                    <optgroup label="Training Programs">
                      <option value="training-data-integrity">Data Integrity Fundamentals ($1,200/session)</option>
                      <option value="training-glp-gmp">cGLP/cGMP Best Practices ($1,500/session)</option>
                      <option value="training-qc-review">QC Data Review Mastery ($1,800/session)</option>
                      <option value="training-automation">Laboratory Automation ($2,000/session)</option>
                    </optgroup>
                    
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'error' : ''}
                    rows={6}
                    placeholder="Tell us about your needs and how we can help..."
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
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
                  <li>Blending scientific expertise with software, automation, and AI innovation</li>
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
              <a href="#contact" className="btn btn-secondary">Contact Form ↑</a>
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