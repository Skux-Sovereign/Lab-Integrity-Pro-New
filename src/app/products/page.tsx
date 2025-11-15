"use client";

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import './products.css';

export default function Products() {
  const [activeTab, setActiveTab] = useState('glp');

  const glpPackages = [
    {
      name: "Essential GLP",
      price: "$197",
      description: "Core documentation for small labs",
      features: [
        "5 Essential SOPs",
        "Basic templates",
        "Email support",
        "Quarterly updates"
      ]
    },
    {
      name: "Professional GLP",
      price: "$497",
      description: "Complete GLP framework",
      popular: true,
      features: [
        "15 Comprehensive SOPs",
        "Advanced templates",
        "Priority support",
        "Monthly updates",
        "Training materials"
      ]
    },
    {
      name: "Enterprise GLP",
      price: "$997",
      description: "Full organizational solution",
      features: [
        "25+ SOPs",
        "Custom branding",
        "Phone support",
        "Weekly updates",
        "On-site training option"
      ]
    }
  ];

  const consultingServices = [
    {
      title: "Data Review Services",
      price: "Starting at $2,500/month",
      description: "Expert QC review of your bioanalytical data",
      features: [
        "PK/PD data analysis",
        "ADA assay review",
        "Audit trail examination",
        "Monthly reports"
      ]
    },
    {
      title: "Compliance Audit",
      price: "$5,000",
      description: "Comprehensive laboratory compliance assessment",
      features: [
        "Full lab audit",
        "Gap analysis",
        "Action plan",
        "Follow-up consultation"
      ]
    },
    {
      title: "Custom SOP Development",
      price: "Starting at $1,500",
      description: "SOPs tailored to your specific processes",
      features: [
        "Process analysis",
        "Custom writing",
        "Staff training",
        "Implementation support"
      ]
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Products & Services</h1>
          <p>Comprehensive solutions for laboratory excellence</p>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="products-main">
        <div className="container">
          
          {/* Automation Pilot Program Alert */}
          <div className="pilot-alert">
            <span className="alert-badge">LIMITED AVAILABILITY</span>
            <h3>🚀 Data Review Automation Pilot Program</h3>
            <p>Be among the first to transform your paper-based QC processes. Only 5 spots remaining!</p>
            <Link href="/contact?service=automation" className="pilot-cta">
              Join Pilot Program →
            </Link>
          </div>

          {/* Tab Navigation */}
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'glp' ? 'active' : ''}`}
                onClick={() => setActiveTab('glp')}
              >
                GLP Packages
              </button>
              <button 
                className={`tab ${activeTab === 'gmp' ? 'active' : ''}`}
                onClick={() => setActiveTab('gmp')}
              >
                GMP Packages
              </button>
              <button 
                className={`tab ${activeTab === 'consulting' ? 'active' : ''}`}
                onClick={() => setActiveTab('consulting')}
              >
                Consulting Services
              </button>
              <button 
                className={`tab ${activeTab === 'training' ? 'active' : ''}`}
                onClick={() => setActiveTab('training')}
              >
                Training Programs
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            
            {/* GLP Packages */}
            {activeTab === 'glp' && (
              <div className="packages-section">
                <div className="section-header">
                  <h2>GLP SOP Packages</h2>
                  <p>Comprehensive templates designed for bioanalytical laboratories</p>
                </div>
                
                <div className="packages-grid">
                  {glpPackages.map((pkg, index) => (
                    <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                      {pkg.popular && <span className="popular-badge">MOST POPULAR</span>}
                      <h3>{pkg.name}</h3>
                      <div className="price">{pkg.price}</div>
                      <p className="description">{pkg.description}</p>
                      <ul className="features-list">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <Link href={`/contact?product=${pkg.name}`} className="package-cta">
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GMP Packages */}
            {activeTab === 'gmp' && (
              <div className="packages-section">
                <div className="section-header">
                  <h2>GMP SOP Packages</h2>
                  <p>Manufacturing-focused compliance documentation</p>
                </div>
                
                <div className="packages-grid">
                  <div className="package-card">
                    <h3>Essential GMP</h3>
                    <div className="price">$297</div>
                    <p className="description">Core GMP documentation</p>
                    <ul className="features-list">
                      <li>8 Essential SOPs</li>
                      <li>Basic templates</li>
                      <li>Email support</li>
                      <li>Quarterly updates</li>
                    </ul>
                    <Link href="/contact?product=Essential GMP" className="package-cta">
                      Get Started
                    </Link>
                  </div>
                  
                  <div className="package-card popular">
                    <span className="popular-badge">RECOMMENDED</span>
                    <h3>Professional GMP</h3>
                    <div className="price">$697</div>
                    <p className="description">Complete GMP framework</p>
                    <ul className="features-list">
                      <li>20 Comprehensive SOPs</li>
                      <li>Advanced templates</li>
                      <li>Priority support</li>
                      <li>Monthly updates</li>
                      <li>Validation templates</li>
                    </ul>
                    <Link href="/contact?product=Professional GMP" className="package-cta">
                      Get Started
                    </Link>
                  </div>
                  
                  <div className="package-card">
                    <h3>Enterprise GMP</h3>
                    <div className="price">$1,497</div>
                    <p className="description">Full manufacturing solution</p>
                    <ul className="features-list">
                      <li>35+ SOPs</li>
                      <li>Custom branding</li>
                      <li>Dedicated support</li>
                      <li>Weekly updates</li>
                      <li>On-site implementation</li>
                    </ul>
                    <Link href="/contact?product=Enterprise GMP" className="package-cta">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Consulting Services */}
            {activeTab === 'consulting' && (
              <div className="consulting-section">
                <div className="section-header">
                  <h2>Expert Consulting Services</h2>
                  <p>Leverage our decade of CRO experience for your success</p>
                </div>
                
                <div className="services-grid">
                  {consultingServices.map((service, index) => (
                    <div key={index} className="consulting-card">
                      <h3>{service.title}</h3>
                      <div className="price">{service.price}</div>
                      <p className="description">{service.description}</p>
                      <ul className="features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <Link href={`/contact?service=${service.title}`} className="service-cta">
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Training Programs */}
            {activeTab === 'training' && (
              <div className="training-section">
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
                    <h3>GLP/GMP Best Practices</h3>
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
              </div>
            )}
          </div>

          {/* Why Choose Lab Integrity Pro */}
          <section className="why-choose">
            <h2>Why Choose Lab Integrity Pro?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Active CRO Experience</h3>
                <p>Current QC Supervisor at PPD & QPS brings real-world insights</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>ADC Specialization</h3>
                <p>Deep expertise in antibody drug conjugates for cancer treatment</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Proven Track Record</h3>
                <p>10+ years GxP experience with 100% audit success rate</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Practical Solutions</h3>
                <p>Templates and processes that work in real laboratory settings</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="products-cta">
            <h2>Ready to Transform Your Laboratory Compliance?</h2>
            <p>Let's discuss which solution is right for your needs</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/#services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
          </section>
          
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