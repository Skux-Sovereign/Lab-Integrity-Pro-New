"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import './products.css';

// Import benefit card images
import fdaApproved from '../assets/FDA-approved.jpg';
import monoclonalAntibody from '../assets/monoclonal-antibody.jpg';
import labNotebook from '../assets/lab-notebook.jpg';
import scientistDataReview from '../assets/scientist-data-review.jpg';

export default function Products() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <>
      <Navigation />

      {/* Hero Section - Updated */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>cGLP & cGMP Solutions That Actually Ship</h1>
          <p>Expert data review, AI-supported automation, and custom LIMS/ELN solutions.</p>
          <div className="hero-buttons">
            <Link href="/contact?intent=strategy-call" className="btn btn-primary">
              Book a Strategy Call
            </Link>
            <a href="#services" className="btn btn-secondary">
              See Service Options
            </a>
          </div>
        </div>
      </section>

      {/* Three Primary Service Cards - Full Width Dark Section */}
      <section className="primary-services-section" id="services">
        {/* Animated Particles - like particles floating in solution */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="section-header">
          <h2>Core Services</h2>
          <p>Solutions designed for pharmaceutical laboratories that need results</p>
        </div>

        <div className="primary-services-grid">
          
          {/* GLP/GMP Data Review */}
          <div className="primary-service-card">
            <div className="service-icon">📊</div>
            <h3>cGLP/cGMP Data Review</h3>
            <p>Expert QC review with over 10 years of experience in bioanalytical laboratories</p>
            <ul className="service-highlights">
              <li>Raw data and report review</li>
              <li>CAPA recommendations</li>
              <li>Pre-inspection checks</li>
            </ul>
            <button 
              className="expand-btn"
              onClick={() => toggleService('data-review')}
            >
              Learn More →
            </button>
          </div>

          {/* AI-Supported Automation */}
          <div className="primary-service-card featured">
            <div className="service-badge">POPULAR</div>
            <div className="service-icon">🤖</div>
            <h3>AI-Supported Automation</h3>
            <p>Transform paper-based QC processes with cutting-edge automation</p>
            <ul className="service-highlights">
              <li>AI-assisted QC checks</li>
              <li>Workflow automation design</li>
              <li>Data package assembly</li>
            </ul>
            <button 
              className="expand-btn"
              onClick={() => toggleService('automation')}
            >
              Learn More →
            </button>
          </div>

          {/* LIMS & ELN Solutions */}
          <div className="primary-service-card">
            <div className="service-icon">💻</div>
            <h3>LIMS & ELN Solutions</h3>
            <p>Custom laboratory information management tailored to your workflow</p>
            <ul className="service-highlights">
              <li>Requirements capture</li>
              <li>Configuration and validation</li>
              <li>Migration and optimization</li>
            </ul>
            <button 
              className="expand-btn"
              onClick={() => toggleService('lims')}
            >
              Learn More →
            </button>
          </div>

        </div>
      </section>

      {/* Deep-Dive Service Sections */}
      
      {/* Data Review Deep Dive */}
      <div className={`service-deep-dive ${expandedService === 'data-review' ? 'expanded' : ''}`}>
        <div className="deep-dive-content">
          <h3>cGLP/cGMP Data Review Services</h3>
          <div className="deep-dive-grid">
            <div className="deep-dive-col">
              <h4>What's Included</h4>
              <ul>
                <li>Comprehensive raw data review</li>
                <li>Study report verification</li>
                <li>Audit trail analysis</li>
                <li>Bioanalytical method assessment</li>
                <li>Data review for stability, in-process, finished product, raw materials testing</li>
                <li>PK/ADA/nAb data evaluation for nonclinical and clinical trials</li>
                <li>Regulatory compliance check</li>
              </ul>
            </div>
            <div className="deep-dive-col">
              <h4>Pricing</h4>
              <div className="pricing-options">
                <div className="pricing-tier">
                  <strong>Monthly Retainer</strong>
                  <span className="price">Starting at $2,500/month</span>
                  <p>Ongoing review support with priority access</p>
                </div>
                <div className="pricing-tier">
                  <strong>Per-Study Review</strong>
                  <span className="price">$1,500 - $5,000</span>
                  <p>Based on study complexity and data volume</p>
                </div>
              </div>
            </div>
            <div className="deep-dive-col">
              <h4>Ideal For</h4>
              <ul>
                <li>CROs/CMOs preparing for audits</li>
                <li>Biotech companies without dedicated QA/QC</li>
                <li>Labs needing independent verification</li>
                <li>Pre-submission data review</li>
              </ul>
            </div>
          </div>
          <Link href="/contact?service=data-review" className="deep-dive-cta">
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* Automation Deep Dive */}
      <div className={`service-deep-dive ${expandedService === 'automation' ? 'expanded' : ''}`}>
        <div className="deep-dive-content">
          <h3>AI-Supported Automation Services</h3>
          <div className="deep-dive-grid">
            <div className="deep-dive-col">
              <h4>What's Included</h4>
              <ul>
                <li>Handwritten notebook digitization</li>
                <li>AI-assisted compliance checks</li>
                <li>Automated workflow design</li>
                <li>Custom script development</li>
                <li>21 CFR Part 11 compliance</li>
                <li>Integration with existing systems</li>
              </ul>
            </div>
            <div className="deep-dive-col">
              <h4>Pilot Program</h4>
              <div className="pilot-highlight">
                <span className="pilot-badge">LIMITED SPOTS</span>
                <strong>Automation Pilot</strong>
                <span className="price">$5,000 - $15,000</span>
                <p>4-6 week proof of concept with your actual data</p>
                <ul>
                  <li>Process analysis</li>
                  <li>Prototype development</li>
                  <li>ROI calculation</li>
                  <li>Implementation roadmap</li>
                </ul>
              </div>
            </div>
            <div className="deep-dive-col">
              <h4>Expected Results</h4>
              <ul>
                <li>50% reduction in review time</li>
                <li>Zero transcription errors</li>
                <li>Complete audit trails</li>
                <li>Instant compliance reporting</li>
              </ul>
            </div>
          </div>
          <Link href="/contact?service=automation" className="deep-dive-cta">
            Join Pilot Program
          </Link>
        </div>
      </div>

      {/* LIMS/ELN Deep Dive */}
      <div className={`service-deep-dive ${expandedService === 'lims' ? 'expanded' : ''}`}>
        <div className="deep-dive-content">
          <h3>LIMS & ELN Solutions</h3>
          <div className="deep-dive-grid">
            <div className="deep-dive-col">
              <h4>What's Included</h4>
              <ul>
                <li>Requirements gathering workshops</li>
                <li>Vendor selection guidance</li>
                <li>Custom configuration</li>
                <li>System validation (IQ/OQ/PQ)</li>
                <li>Data migration strategy</li>
                <li>User training programs</li>
              </ul>
            </div>
            <div className="deep-dive-col">
              <h4>Pricing</h4>
              <div className="pricing-options">
                <div className="pricing-tier">
                  <strong>Configuration Project</strong>
                  <span className="price">$15,000 - $50,000</span>
                  <p>Full system setup and validation</p>
                </div>
                <div className="pricing-tier">
                  <strong>Consulting Hourly</strong>
                  <span className="price">$200/hour</span>
                  <p>Optimization and troubleshooting</p>
                </div>
              </div>
            </div>
            <div className="deep-dive-col">
              <h4>Platforms We Work With</h4>
              <ul>
                <li>Watson LIMS</li>
                <li>LabWare</li>
                <li>LabVantage</li>
                <li>Benchling</li>
                <li>Custom solutions</li>
              </ul>
            </div>
          </div>
          <Link href="/contact?service=lims" className="deep-dive-cta">
            Discuss Your Needs
          </Link>
        </div>
      </div>

      {/* SOP Packages Section - Repositioned as Accelerators */}
      <section className="sop-accelerators">
        <div className="section-header">
          <h2>Documentation Accelerators</h2>
          <p>Pre-built SOP templates to fast-track your compliance efforts</p>
        </div>

        {/* GxP Packages */}
        <h3 className="package-category">GxP SOP Packages</h3>
        <div className="accelerator-grid">
          
          <div className="accelerator-card">
            <h3>Essential GxP</h3>
            <div className="price">$197</div>
            <p className="description">Core documentation for small labs</p>
            <ul className="features-list">
              <li>5 Essential SOPs</li>
              <li>Basic templates</li>
              <li>Email support</li>
              <li>Quarterly updates</li>
            </ul>
            <a href="https://grozzy.gumroad.com/l/hphtg" className="accelerator-cta" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </div>

          <div className="accelerator-card">
            <h3>Professional GxP</h3>
            <div className="price">$497</div>
            <p className="description">Complete GxP framework</p>
            <ul className="features-list">
              <li>15 Comprehensive SOPs</li>
              <li>Advanced templates</li>
              <li>Priority support</li>
              <li>Monthly updates</li>
              <li>Training materials</li>
            </ul>
              <a href="https://grozzy.gumroad.com/l/ugvpte" className="accelerator-cta" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
          </div>

          <div className="accelerator-card">
            <h3>Enterprise GxP</h3>
            <div className="price">$997</div>
            <p className="description">Full organizational solution</p>
            <ul className="features-list">
              <li>25+ SOPs</li>
              <li>Custom branding</li>
              <li>Phone support</li>
              <li>Weekly updates</li>
              <li>On-site training option</li>
            </ul>
              <a href="https://grozzy.gumroad.com/l/oplcf" className="accelerator-cta" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
          </div>

        </div>
      </section>

      {/* AI Transformation Flowchart Section */}
      <section className="ai-transformation-section">
        <div className="section-header">
          <h2>How We Transform Your Data</h2>
          <p>From handwritten notebooks to AI-verified digital records in four seamless steps</p>
        </div>

        <div className="flowchart-container">
          <div className="flowchart-steps">
            {/* Step 1: Paper Input */}
            <div className="flowchart-step">
              <div className="step-icon-container">
                <span className="step-number">1</span>
                <div className="step-visual">
                  <div className="paper-visual"></div>
                </div>
              </div>
              <div className="step-content">
                <h3>Paper Records</h3>
                <p>Handwritten lab notebooks, batch records, and raw data sheets</p>
              </div>
            </div>

            {/* Arrow */}
            <span className="flow-arrow">→</span>

            {/* Step 2: Scanning/Digitization */}
            <div className="flowchart-step">
              <div className="step-icon-container">
                <span className="step-number">2</span>
                <div className="step-visual">
                  <div className="scanning-visual">
                    <div className="doc-preview"></div>
                  </div>
                </div>
              </div>
              <div className="step-content">
                <h3>Smart Capture</h3>
                <p>AI-powered OCR extracts and interprets handwritten data accurately</p>
              </div>
            </div>

            {/* Arrow */}
            <span className="flow-arrow">→</span>

            {/* Step 3: Digital Structured Data */}
            <div className="flowchart-step">
              <div className="step-icon-container">
                <span className="step-number">3</span>
                <div className="step-visual">
                  <div className="digital-visual">
                    <div className="data-row">
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                    </div>
                    <div className="data-row">
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                    </div>
                    <div className="data-row">
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                    </div>
                    <div className="data-row">
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                    </div>
                    <div className="data-row">
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                      <div className="data-cell"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-content">
                <h3>Structured Data</h3>
                <p>Clean, organized digital records ready for analysis</p>
              </div>
            </div>

            {/* Arrow */}
            <span className="flow-arrow">→</span>

            {/* Step 4: AI QC Review */}
            <div className="flowchart-step">
              <div className="step-icon-container">
                <span className="step-number">4</span>
                <div className="step-visual">
                  <div className="ai-review-visual">
                    <div className="checkmark-circle">
                      <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="compliance-badges">
                      <span className="compliance-badge">21 CFR 11</span>
                      <span className="compliance-badge">ALCOA+</span>
                      <span className="compliance-badge">GxP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-content">
                <h3>AI-Verified</h3>
                <p>Automated compliance checks and audit-ready documentation</p>
              </div>
            </div>
          </div>

          {/* Results Stats */}
          <div className="transformation-stats">
            <div className="stat-box">
              <span className="stat-value">50%</span>
              <span className="stat-label">Time Saved</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">100%</span>
              <span className="stat-label">Audit Ready</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">24hr</span>
              <span className="stat-label">Turnaround</span>
            </div>
          </div>

          {/* CTA */}
          <div className="transformation-cta">
            <Link href="/contact?service=automation-demo" className="btn">
              See It In Action →
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Training Programs */}
      <section className="training-programs">
        <div className="section-header">
          <h2>Professional Training Programs</h2>
          <p>Build expertise across your entire laboratory team</p>
        </div>
        
        <div className="training-grid">
          <div className="training-card">
            <div className="training-icon">📚</div>
            <h3>Data Integrity Fundamentals</h3>
            <p>Master ALCOA+ principles and 21 CFR Part 11</p>
            <div className="price">$1,200/session</div>
            <Link href="/contact?training=Data Integrity" className="training-cta">
              Book Training
            </Link>
          </div>
          
          <div className="training-card">
            <div className="training-icon">🔬</div>
            <h3>cGLP/cGMP Best Practices</h3>
            <p>Comprehensive compliance training for lab staff</p>
            <div className="price">$1,500/session</div>
            <Link href="/contact?training=GLP/GMP" className="training-cta">
              Book Training
            </Link>
          </div>
          
          <div className="training-card">
            <div className="training-icon">📊</div>
            <h3>QC Data Review Mastery</h3>
            <p>Advanced techniques for bioanalytical data review</p>
            <div className="price">$1,800/session</div>
            <Link href="/contact?training=QC Review" className="training-cta">
              Book Training
            </Link>
          </div>
          
          <div className="training-card">
            <div className="training-icon">🚀</div>
            <h3>Laboratory Automation</h3>
            <p>Transform manual processes with smart automation</p>
            <div className="price">$2,000/session</div>
            <Link href="/contact?training=Automation" className="training-cta">
              Book Training
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Lab Integrity Pro */}
      <section className="why-choose">
        <h2>Why Choose Lab Integrity Pro?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <Image 
                src={fdaApproved}
                alt="FDA regulatory compliance"
                width={300}
                height={200}
                className="benefit-image"
              />
            </div>
            <h3>Regulatory Expertise</h3>
            <p>In-depth knowledge of FDA, EMA, and ICH regulations</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Image 
                src={monoclonalAntibody}
                alt="Antibody drug conjugates"
                width={300}
                height={200}
                className="benefit-image"
              />
            </div>
            <h3>Large Molecule Specialization</h3>
            <p>Deep expertise in monoclonal antibodies and antibody drug conjugates</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Image 
                src={scientistDataReview}
                alt="Proven laboratory expertise"
                width={300}
                height={200}
                className="benefit-image"
              />
            </div>
            <h3>Proven Track Record</h3>
            <p>10+ years GxP experience with 100% audit success rate</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Image 
                src={labNotebook}
                alt="Practical laboratory solutions"
                width={300}
                height={200}
                className="benefit-image"
              />
            </div>
            <h3>Practical Solutions</h3>
            <p>Templates and processes that work in real laboratory settings</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Updated */}
      <section className="final-cta">
        <h2>Not Sure Where to Start?</h2>
        <p>Let's discuss your specific challenges and find the right solution for your laboratory</p>
        <Link href="/contact?intent=strategy-call" className="btn btn-primary btn-large">
          Book a Strategy Call
        </Link>
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