'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './products.css'

// SOP Packages Configuration with Updated Pricing
const sopPackages = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '$197',
    originalPrice: null,
    badge: 'Great Start',
    description: 'Essential SOPs for laboratories beginning their compliance journey',
    features: [
      '5 Essential SOPs',
      'Equipment Qualification',
      'Sample Management',
      'Basic Data Review',
      'Document Control',
      'Essential Templates',
      'Quick Start Guide',
      '14-day Email Support'
    ],
    // Replace 'xxxxx' with your actual Gumroad product ID
    gumroadId: 'xxxxx', // e.g., 'starter-sop'
    featured: false
  },
  {
    id: 'essential',
    name: 'Essential Package',
    price: '$497',
    originalPrice: '$997',
    badge: 'Most Popular',
    description: 'Comprehensive foundation for small to mid-size laboratories',
    features: [
      '15 Core SOPs',
      'Everything in Starter',
      'Training Records Management',
      'Advanced Data Review Procedures',
      'Calibration & Maintenance',
      'Deviation Management',
      'Basic Templates & Forms',
      'Implementation Guide',
      '30-day Email Support'
    ],
    // Replace 'xxxxx' with your actual Gumroad product ID
    gumroadId: 'xxxxx', // e.g., 'essential-sop'
    featured: false
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: '$997',
    originalPrice: '$1,997',
    badge: 'Best Value',
    description: 'Complete solution for established laboratories',
    features: [
      '35 SOPs',
      'Everything in Essential',
      'Method Validation SOPs',
      'CAPA Procedures',
      'Change Control System',
      'Investigation Procedures',
      'Audit Trail Review',
      'Advanced Templates',
      'Customization Guide',
      '90-day Priority Support'
    ],
    // Replace 'xxxxx' with your actual Gumroad product ID
    gumroadId: 'xxxxx', // e.g., 'professional-sop'
    featured: true
  },
  {
    id: 'complete',
    name: 'Complete Package',
    price: '$1,997',
    originalPrice: '$3,997',
    badge: 'Enterprise',
    description: 'Full documentation suite for enterprise laboratories',
    features: [
      '50+ SOPs',
      'Everything in Professional',
      'Data Integrity Package',
      'Computer System Validation',
      'Vendor Qualification',
      'Risk Assessment Tools',
      'Regulatory Filing Support',
      'All Templates & Forms',
      'Custom Branding Options',
      '6-month Premium Support'
    ],
    // Replace 'xxxxx' with your actual Gumroad product ID
    gumroadId: 'xxxxx', // e.g., 'complete-sop'
    featured: false
  }
];

export default function Products() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMethodTab, setActiveMethodTab] = useState('general')
  const [activeRawDataTab, setActiveRawDataTab] = useState('chromatography')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Track purchase button clicks (optional - for analytics)
  const handlePurchaseClick = (pkg: typeof sopPackages[0]) => {
    // Open Gumroad in new tab
    window.open(`https://gumroad.com/l/${pkg.gumroadId}`, '_blank')
    
    // Google Analytics tracking (if you have it set up)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'USD',
        value: pkg.name === 'Starter Package' ? 197 :
               pkg.name === 'Essential Package' ? 497 : 
               pkg.name === 'Professional Package' ? 997 : 1997,
        items: [{
          item_name: pkg.name,
          item_category: 'SOP Package',
          quantity: 1
        }]
      });
    }
    
    // You can also add other tracking here (Facebook Pixel, etc.)
    console.log(`Purchase clicked: ${pkg.name}`);
  }

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
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Services & Solutions</h1>
          <p>Comprehensive laboratory compliance and validation services tailored to your needs</p>
        </div>
      </section>

      {/* Method Validation Services */}
      <section className="services">
        <div className="section-header">
          <h2>Method Validation Services</h2>
          <p>Comprehensive validation services ensuring your analytical methods meet regulatory requirements</p>
        </div>
        
        <div className="tab-section">
          <div className="tab-nav">
            <button 
              className={`tab-button ${activeMethodTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveMethodTab('general')}
            >
              General Methods
            </button>
            <button 
              className={`tab-button ${activeMethodTab === 'compendial' ? 'active' : ''}`}
              onClick={() => setActiveMethodTab('compendial')}
            >
              Compendial Methods
            </button>
            <button 
              className={`tab-button ${activeMethodTab === 'cleaning' ? 'active' : ''}`}
              onClick={() => setActiveMethodTab('cleaning')}
            >
              Cleaning Validation
            </button>
          </div>

          <div className="tab-content">
            {activeMethodTab === 'general' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🔬</div>
                  <h3>Full ICH Q2(R2) Validation</h3>
                  <p>Complete validation package following ICH guidelines</p>
                  <ul className="service-features">
                    <li>Specificity/Selectivity</li>
                    <li>Linearity & Range</li>
                    <li>Accuracy & Precision</li>
                    <li>Detection & Quantitation Limits</li>
                    <li>Robustness Testing</li>
                    <li>System Suitability</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">📄</div>
                  <h3>Method Transfer</h3>
                  <p>Seamless transfer of analytical methods between laboratories</p>
                  <ul className="service-features">
                    <li>Comparative Testing</li>
                    <li>Co-validation Studies</li>
                    <li>Complete Revalidation</li>
                    <li>Transfer Waiver Assessment</li>
                    <li>Gap Analysis</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">✅</div>
                  <h3>Method Verification</h3>
                  <p>Verification of compendial and validated methods</p>
                  <ul className="service-features">
                    <li>Compendial Method Verification</li>
                    <li>Specificity Confirmation</li>
                    <li>Accuracy & Precision</li>
                    <li>LOD/LOQ Verification</li>
                    <li>System Suitability</li>
                  </ul>
                </div>
              </div>
            )}

            {activeMethodTab === 'compendial' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🇺🇸</div>
                  <h3>USP Methods</h3>
                  <p>United States Pharmacopeia method validation</p>
                  <ul className="service-features">
                    <li>Assay Methods</li>
                    <li>Impurity Testing</li>
                    <li>Dissolution Testing</li>
                    <li>Content Uniformity</li>
                    <li>Related Substances</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🇪🇺</div>
                  <h3>EP/BP Methods</h3>
                  <p>European and British Pharmacopoeia compliance</p>
                  <ul className="service-features">
                    <li>Identification Tests</li>
                    <li>Purity Testing</li>
                    <li>Loss on Drying</li>
                    <li>Heavy Metals</li>
                    <li>Microbial Limits</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🇯🇵</div>
                  <h3>JP Methods</h3>
                  <p>Japanese Pharmacopoeia method implementation</p>
                  <ul className="service-features">
                    <li>Assay Procedures</li>
                    <li>Dissolution Testing</li>
                    <li>Uniformity of Dosage Units</li>
                    <li>Foreign Matter Testing</li>
                    <li>Specific Tests</li>
                  </ul>
                </div>
              </div>
            )}

            {activeMethodTab === 'cleaning' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🧪</div>
                  <h3>Cleaning Method Development</h3>
                  <p>Development of robust cleaning procedures</p>
                  <ul className="service-features">
                    <li>Worst-Case Product Selection</li>
                    <li>Sampling Method Development</li>
                    <li>Recovery Studies</li>
                    <li>Analytical Method Development</li>
                    <li>Limit Calculations (MACO/ADE)</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">📋</div>
                  <h3>Cleaning Validation</h3>
                  <p>Complete cleaning validation protocols</p>
                  <ul className="service-features">
                    <li>Protocol Development</li>
                    <li>Three Consecutive Batches</li>
                    <li>Swab & Rinse Sampling</li>
                    <li>Visual Inspection Criteria</li>
                    <li>Validation Report Writing</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🔍</div>
                  <h3>Cleaning Verification</h3>
                  <p>Ongoing verification and monitoring</p>
                  <ul className="service-features">
                    <li>Periodic Verification</li>
                    <li>Campaign Changeover</li>
                    <li>New Product Introduction</li>
                    <li>Process Change Assessment</li>
                    <li>Continuous Verification</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Raw Data Review Services */}
      <section className="services alt-background">
        <div className="section-header">
          <h2>Raw Data Review Services</h2>
          <p>Expert review and analysis of your laboratory data to ensure compliance and accuracy</p>
        </div>
        
        <div className="tab-section">
          <div className="tab-nav">
            <button 
              className={`tab-button ${activeRawDataTab === 'chromatography' ? 'active' : ''}`}
              onClick={() => setActiveRawDataTab('chromatography')}
            >
              Chromatography
            </button>
            <button 
              className={`tab-button ${activeRawDataTab === 'bioanalysis' ? 'active' : ''}`}
              onClick={() => setActiveRawDataTab('bioanalysis')}
            >
              Bioanalysis
            </button>
            <button 
              className={`tab-button ${activeRawDataTab === 'spectroscopy' ? 'active' : ''}`}
              onClick={() => setActiveRawDataTab('spectroscopy')}
            >
              Spectroscopy
            </button>
            <button 
              className={`tab-button ${activeRawDataTab === 'physical' ? 'active' : ''}`}
              onClick={() => setActiveRawDataTab('physical')}
            >
              Physical Testing
            </button>
          </div>

          <div className="tab-content">
            {activeRawDataTab === 'chromatography' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h3>HPLC/UPLC Data Review</h3>
                  <p>Comprehensive review of liquid chromatography data</p>
                  <ul className="service-features">
                    <li>Integration Review & Verification</li>
                    <li>System Suitability Compliance</li>
                    <li>Calculation Verification</li>
                    <li>Sequence Audit Trail Review</li>
                    <li>Method Parameter Compliance</li>
                    <li>Peak Purity Assessment</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🔥</div>
                  <h3>GC Data Review</h3>
                  <p>Gas chromatography data analysis and verification</p>
                  <ul className="service-features">
                    <li>Chromatogram Integration Check</li>
                    <li>Retention Time Verification</li>
                    <li>Internal Standard Calculations</li>
                    <li>Headspace Analysis Review</li>
                    <li>Method Compliance Check</li>
                    <li>Data Integrity Assessment</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>IC & CE Review</h3>
                  <p>Ion chromatography and capillary electrophoresis</p>
                  <ul className="service-features">
                    <li>Ion Chromatography Data</li>
                    <li>Capillary Electrophoresis</li>
                    <li>Peak Resolution Verification</li>
                    <li>Calibration Curve Review</li>
                    <li>Sample Preparation Check</li>
                    <li>Result Trending Analysis</li>
                  </ul>
                </div>
              </div>
            )}

            {activeRawDataTab === 'bioanalysis' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">💉</div>
                  <h3>Pharmacokinetics (PK)</h3>
                  <p>PK assay data review for drug concentration analysis</p>
                  <ul className="service-features">
                    <li>PK Parameter Calculations</li>
                    <li>Concentration-Time Profile Review</li>
                    <li>LLOQ/ULOQ Verification</li>
                    <li>Dilution Linearity Assessment</li>
                    <li>ISR (Incurred Sample Reanalysis)</li>
                    <li>Matrix Effect Evaluation</li>
                    <li>Stability Data Review</li>
                    <li>Cross-validation Between Methods</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🔬</div>
                  <h3>Anti-Drug Antibody (ADA)</h3>
                  <p>Immunogenicity assessment and ADA assay validation</p>
                  <ul className="service-features">
                    <li>Screening Cut Point Verification</li>
                    <li>Confirmatory Cut Point Analysis</li>
                    <li>Titer Cut Point Assessment</li>
                    <li>Drug Tolerance Review</li>
                    <li>Selectivity & Specificity</li>
                    <li>Sample Normalization Factors</li>
                    <li>False Positive Rate Analysis</li>
                    <li>Positive Control Tracking</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🛡️</div>
                  <h3>Neutralizing Antibody (nAb)</h3>
                  <p>Cell-based and competitive ligand binding nAb assays</p>
                  <ul className="service-features">
                    <li>Cell-Based Assay Performance</li>
                    <li>Neutralization Curve Analysis</li>
                    <li>IC50/EC50 Calculations</li>
                    <li>Cell Viability Assessment</li>
                    <li>Positive Control Monitoring</li>
                    <li>Signal-to-Noise Ratio</li>
                    <li>Assay Interference Testing</li>
                    <li>Cross-reactivity Evaluation</li>
                  </ul>
                </div>
              </div>
            )}

            {activeRawDataTab === 'spectroscopy' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>UV-Vis Spectroscopy</h3>
                  <p>UV-Visible spectroscopy data validation</p>
                  <ul className="service-features">
                    <li>Wavelength Accuracy Check</li>
                    <li>Absorbance Verification</li>
                    <li>Standard Curve Validation</li>
                    <li>Blank Correction Review</li>
                    <li>Dilution Factor Calculations</li>
                    <li>Beer&apos;s Law Compliance</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">📡</div>
                  <h3>IR/FTIR Analysis</h3>
                  <p>Infrared spectroscopy data review</p>
                  <ul className="service-features">
                    <li>Spectrum Quality Assessment</li>
                    <li>Peak Assignment Verification</li>
                    <li>Library Match Review</li>
                    <li>Background Correction</li>
                    <li>Sample Preparation Review</li>
                    <li>Quantitative Analysis Check</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🧬</div>
                  <h3>MS & NMR Data</h3>
                  <p>Mass spectrometry and NMR analysis</p>
                  <ul className="service-features">
                    <li>Mass Accuracy Verification</li>
                    <li>Fragmentation Pattern Review</li>
                    <li>NMR Peak Integration</li>
                    <li>Structure Elucidation Support</li>
                    <li>Purity Assessment</li>
                    <li>Isotope Pattern Analysis</li>
                  </ul>
                </div>
              </div>
            )}

            {activeRawDataTab === 'physical' && (
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">💊</div>
                  <h3>Dissolution Testing</h3>
                  <p>Dissolution profile analysis and verification</p>
                  <ul className="service-features">
                    <li>Dissolution Profile Review</li>
                    <li>f2 Similarity Calculations</li>
                    <li>Media Preparation Verification</li>
                    <li>Sampling Time Compliance</li>
                    <li>Apparatus Suitability</li>
                    <li>Result Acceptance Criteria</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">🔬</div>
                  <h3>Particle Analysis</h3>
                  <p>Comprehensive particle characterization</p>
                  <ul className="service-features">
                    <li>Particle Size Distribution</li>
                    <li>Laser Diffraction Data</li>
                    <li>Microscopy Image Analysis</li>
                    <li>Sieve Analysis Review</li>
                    <li>Surface Area (BET) Data</li>
                    <li>Zeta Potential Measurements</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">⚖️</div>
                  <h3>Physical Properties</h3>
                  <p>Physical property testing and verification</p>
                  <ul className="service-features">
                    <li>Karl Fischer Moisture</li>
                    <li>Loss on Drying Review</li>
                    <li>pH Measurement Verification</li>
                    <li>Viscosity Data Analysis</li>
                    <li>Density Determinations</li>
                    <li>Melting Point Verification</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Compliance & Quality Services</h2>
            <p>Ensure your laboratory meets the highest standards of regulatory compliance with our comprehensive quality services. We help you build robust systems that stand up to the most rigorous audits.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">ALCOA+</div>
                <div className="stat-label">Data Integrity</div>
              </div>
              <div className="stat">
                <div className="stat-number">21 CFR</div>
                <div className="stat-label">Part 11 Compliance</div>
              </div>
              <div className="stat">
                <div className="stat-number">EU GMP</div>
                <div className="stat-label">Annex 11</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Audit Success</div>
              </div>
            </div>
          </div>
          <div className="compliance-services">
            <div className="compliance-card">
              <h3>Data Integrity</h3>
              <ul className="service-features">
                <li>Audit Trail Review</li>
                <li>Electronic Records Compliance</li>
                <li>User Access Controls</li>
                <li>Data Lifecycle Management</li>
              </ul>
            </div>
            <div className="compliance-card">
              <h3>Quality Systems</h3>
              <ul className="service-features">
                <li>SOP Development & Review</li>
                <li>CAPA Management</li>
                <li>Change Control Processes</li>
                <li>Training Program Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOP Template Packages - Updated with New Pricing */}
      <section className="sop-packages">
        <div className="section-header">
          <h2>SOP Template Packages</h2>
          <p>Ready-to-implement Standard Operating Procedures tailored for GLP/GMP laboratories</p>
          <div className="pricing-notice">
            <span className="pricing-badge">🎉 Launch Pricing</span>
            <span className="pricing-text">Save up to 50% - Limited Time Offer</span>
          </div>
        </div>
        
        <div className="packages-grid">
          {sopPackages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              <div className="package-badge">{pkg.badge}</div>
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="original-price">{pkg.originalPrice}</span>
                  )}
                  <span className="price-period">one-time</span>
                </div>
              </div>
              <p className="package-description">{pkg.description}</p>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    {idx === 0 ? <strong>{feature}</strong> : feature}
                  </li>
                ))}
              </ul>
              
              {/* Value Proposition */}
              <div className="package-value">
                {pkg.id === 'starter' && '💰 Save 50+ hours of development'}
                {pkg.id === 'essential' && '💰 Save $5,000+ in consultant fees'}
                {pkg.id === 'professional' && '💰 Save $15,000+ in consultant fees'}
                {pkg.id === 'complete' && '💰 Save $30,000+ in consultant fees'}
              </div>
              
              {/* Gumroad Purchase Button - Opens in New Tab */}
              <button 
                className={`package-btn ${pkg.featured ? 'featured-btn' : ''}`}
                onClick={() => handlePurchaseClick(pkg)}
              >
                Purchase Package
              </button>
              <div className="package-trust">
                <span className="package-trust-item">
                  🔒 Secure Checkout
                </span>
                <span className="package-trust-item">
                  ⚡ Instant Download
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="security-badges">
          <div className="security-badge">
            <span className="security-badge-icon">🔒</span>
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="security-badge">
            <span className="security-badge-icon">💳</span>
            <span>Powered by Gumroad</span>
          </div>
          <div className="security-badge">
            <span className="security-badge-icon">📧</span>
            <span>Instant Email Delivery</span>
          </div>
          <div className="security-badge">
            <span className="security-badge-icon">✅</span>
            <span>30-Day Money Back Guarantee</span>
          </div>
        </div>

        <div className="custom-sop-section">
          <div className="custom-sop-content">
            <h3>Need Custom SOPs?</h3>
            <p>We can develop SOPs specifically tailored to your laboratory&apos;s unique processes and requirements</p>
            <p className="custom-pricing">Custom packages starting at $5,000</p>
            <Link href="/contact" className="btn btn-primary">Request Custom Quote</Link>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="training-section">
        <div className="section-header">
          <h2>Training & Development</h2>
          <p>Empower your team with comprehensive training programs</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📚</div>
            <h3>Technical Training</h3>
            <p>Hands-on training for laboratory personnel on analytical techniques and instrumentation</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Compliance Training</h3>
            <p>Comprehensive training on regulatory requirements and quality standards</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Best Practices</h3>
            <p>Industry best practices for method validation and data review processes</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Custom Programs</h3>
            <p>Tailored training programs designed to meet your specific organizational needs</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact">
        <div className="contact-content">
          <h2>Ready to Get Started?</h2>
          <p>Let&apos;s discuss how our services can support your laboratory&apos;s success</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/#contact" className="btn btn-secondary">Request Quote</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Services</Link></li>
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