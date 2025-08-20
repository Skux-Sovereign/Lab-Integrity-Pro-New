"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../page.css'; // Use the main page styles
import './products.css'; // Additional products-specific styles

// Static imports for product grid images
import monoclonal from '../assets/monoclonal-antibody.jpg';
import gmpPharma from '../assets/gmp-pharmaceuticals.jpg';
import auditReadiness from '../assets/audit-readiness.jpg';

// Static imports for detail section images
import glpSopPackage from '../assets/glp-sop-package.jpg';
import gmpSopPackage from '../assets/gmp-sop-package.jpg';
import auditToolkit from '../assets/audit-readiness-toolkit.jpg';

// Static imports for icons
import glpIcon from '../assets/icons/icon-glp-hex.png';
import gmpIcon from '../assets/icons/icon-gmp-hex.png';
import auditIcon from '../assets/icons/icon-audit-hex.png';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'GLP SOP Template Package',
      description: 'Comprehensive SOP templates tailored for GLP-compliant labs.',
      price: '$149',
      image: monoclonal,
      icon: glpIcon,
      features: [
        'General GLP SOP Framework',
        'Data Integrity Policy',
        'Equipment Calibration SOP',
        'Deviation Management SOP',
        'Download in Word format (.docx)'
      ]
    },
    {
      id: 2,
      title: 'GMP SOP Template Package',
      description: 'GMP-focused templates to support manufacturing compliance.',
      price: '$169',
      image: gmpPharma,
      icon: gmpIcon,
      features: [
        'Batch Record SOP',
        'Change Control SOP',
        'GMP Training SOP',
        'Quality Risk Management SOP',
        'Download in Word format (.docx)'
      ]
    },
    {
      id: 3,
      title: 'Audit Readiness Toolkit',
      description: 'Checklists, logs, and prep materials to help pass regulatory audits.',
      price: '$89',
      image: auditReadiness,
      icon: auditIcon,
      features: [
        'Audit Checklist (FDA/EMA)',
        'Inspection Log Template',
        'CAPA Tracking Sheet',
        'Document Control Flowchart',
        'Printable and digital formats included'
      ]
    },
  ];

  const consultingServices = [
    {
      id: 'essential',
      title: 'Essential Consulting Package',
      subtitle: 'Templates + Expert Guidance',
      description: 'Perfect for small labs needing templates with professional consultation',
      price: '$1,299',
      originalPrice: '$1,498',
      savings: 'Save $199',
      duration: '2-week delivery',
      popular: false,
      features: [
        'Choice of ONE template package (GLP, GMP, or Audit)',
        '2 hours of 1-on-1 consultation calls',
        'Custom template modifications (up to 3 SOPs)',
        'Email support for 30 days',
        'Implementation roadmap document',
        'Basic compliance checklist review',
        'Raw data review (up to 5 studies)'
      ],
      included: 'Templates + Consultation + Data Review',
      badge: 'Great Value'
    },
    {
      id: 'professional',
      title: 'Professional Consulting Package',
      subtitle: 'Complete Solution + Training',
      description: 'Comprehensive package for mid-size labs requiring full compliance setup',
      price: '$2,899',
      originalPrice: '$3,297',
      savings: 'Save $398',
      duration: '4-week delivery',
      popular: true,
      features: [
        'ALL three template packages included',
        '6 hours of expert consultation calls',
        'Complete SOP customization (up to 10 SOPs)',
        'Team training session (up to 6 people)',
        'Compliance gap analysis report',
        '60 days of email and phone support',
        'Mock audit preparation session',
        'Regulatory updates for 6 months',
        'Comprehensive raw data review (up to 15 studies)',
        'Data integrity assessment and recommendations'
      ],
      included: 'All Templates + Training + Support + Data Review',
      badge: 'Most Popular'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Consulting Package',
      subtitle: 'Full Implementation + Ongoing Support',
      description: 'Complete turnkey solution for large organizations and complex operations',
      price: '$5,499',
      originalPrice: '$6,294',
      savings: 'Save $795',
      duration: '6-week delivery',
      popular: false,
      features: [
        'ALL template packages + unlimited customization',
        '15 hours of senior consultant time',
        'On-site visit option (travel costs separate)',
        'Complete quality management system setup',
        'Staff training for unlimited employees',
        'Detailed compliance audit and recommendations',
        '6 months of ongoing support and updates',
        'Quarterly compliance check-ins',
        'Priority response (24-hour turnaround)',
        'Custom additional SOPs as needed',
        'Unlimited raw data review during engagement',
        'Complete data integrity overhaul and validation',
        'Electronic records and signatures review'
      ],
      included: 'Everything + On-site Support + Unlimited Data Review',
      badge: 'Complete Solution'
    }
  ];

  const rawDataServices = [
    {
      id: 'basic-review',
      title: 'Basic Raw Data Review',
      description: 'Essential data integrity check for individual studies',
      price: '$299',
      duration: '3-5 business days',
      studies: 'Up to 3 studies',
      features: [
        'Data completeness verification',
        'Basic data integrity assessment',
        'Compliance with original protocol',
        'Documentation review checklist',
        'Summary report with findings',
        'Basic recommendations for improvement'
      ]
    },
    {
      id: 'comprehensive-review',
      title: 'Comprehensive Data Review',
      description: 'Thorough analysis with detailed compliance assessment',
      price: '$699',
      duration: '7-10 business days',
      studies: 'Up to 8 studies',
      popular: true,
      features: [
        'Complete data integrity audit',
        'ALCOA+ compliance verification',
        'Electronic records validation',
        'Audit trail analysis',
        'Data reconstruction testing',
        'Detailed compliance report',
        'Corrective action recommendations',
        '1-hour consultation call included'
      ]
    },
    {
      id: 'ongoing-review',
      title: 'Ongoing Data Review Service',
      description: 'Monthly data review service for continuous compliance',
      price: '$1,299',
      duration: 'Monthly service',
      studies: 'Up to 20 studies/month',
      features: [
        'Monthly comprehensive data review',
        'Trending and pattern analysis',
        'Proactive compliance monitoring',
        'Quarterly detailed reports',
        'Priority email and phone support',
        'Data management training materials',
        'Annual compliance assessment',
        'Unlimited consultation calls'
      ]
    }
  ];

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

  return (
    <>
      {/* Navigation - matching main site */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="logo">Lab Integrity Pro</Link>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/products" className="active">Products</Link></li>
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

      {/* Hero Section for Products */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="products-hero-content">
          <h1>SOP Templates & Compliance Solutions</h1>
          <p>Instantly downloadable templates and expert consulting services designed by industry professionals</p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Template Packages</h2>
          <p>Professional templates that save you time and ensure compliance</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className="product-card enhanced" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="product-badge">
                {product.id === 1 && <span className="badge-popular">Most Popular</span>}
                {product.id === 2 && <span className="badge-premium">Premium</span>}
                {product.id === 3 && <span className="badge-essential">Essential</span>}
              </div>
              
              <div className="product-icon-wrapper">
                <Image 
                  src={product.icon} 
                  alt={`${product.title} icon`} 
                  width={60} 
                  height={60} 
                  quality={90} 
                />
              </div>
              
              <div className="product-image-wrapper">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  className="product-image" 
                  quality={90} 
                  sizes="(max-width: 768px) 100vw, 320px" 
                  placeholder="blur"
                />
                <div className="product-image-overlay"></div>
              </div>
              
              <div className="product-content">
                <h3>{product.title}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-price-section">
                  <span className="product-price">{product.price}</span>
                  <span className="price-label">one-time purchase</span>
                </div>
                
                <div className="product-actions">
                  <Link href={`/checkout/${product.id}`} className="btn-product-primary">
                    Buy Now
                  </Link>
                  <Link href={`#product-detail-${product.id}`} className="btn-product-secondary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Consulting Services Section */}
      <section className="consulting-section">
        <div className="section-header">
          <span className="section-badge">Premium Services</span>
          <h2>Expert Consulting + Templates</h2>
          <p>Get templates plus professional guidance to ensure perfect implementation and compliance</p>
        </div>
        
        <div className="consulting-grid">
          {consultingServices.map((service, index) => (
            <div key={service.id} className={`consulting-card ${service.popular ? 'popular' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              {service.popular && (
                <div className="popular-ribbon">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="consulting-badge">
                <span className={`badge-${service.id}`}>{service.badge}</span>
              </div>
              
              <div className="consulting-header">
                <h3>{service.title}</h3>
                <p className="consulting-subtitle">{service.subtitle}</p>
                <p className="consulting-description">{service.description}</p>
              </div>
              
              <div className="consulting-pricing">
                <div className="price-container">
                  <span className="consulting-price">{service.price}</span>
                  <span className="original-price">{service.originalPrice}</span>
                </div>
                <div className="savings-info">
                  <span className="savings">{service.savings}</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>
              
              <div className="consulting-features">
                <div className="included-badge">{service.included}</div>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="consulting-actions">
                <Link href={`/contact?service=${service.id}`} className={`btn-consulting ${service.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                </Link>
                <div className="consultation-note">
                  <svg className="phone-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Free consultation call included
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="consulting-guarantee">
          <div className="guarantee-content">
            <svg className="guarantee-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h4>100% Satisfaction Guarantee</h4>
              <p>Not satisfied with your consulting package? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Data Review Services Section */}
      <section className="raw-data-section">
        <div className="section-header">
          <span className="section-badge">Data Integrity</span>
          <h2>Raw Data Review Services</h2>
          <p>Professional data integrity assessment and compliance verification by experienced regulatory experts</p>
        </div>
        
        <div className="raw-data-grid">
          {rawDataServices.map((service, index) => (
            <div key={service.id} className={`raw-data-card ${service.popular ? 'popular' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              {service.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="raw-data-header">
                <h3>{service.title}</h3>
                <p className="raw-data-description">{service.description}</p>
              </div>
              
              <div className="raw-data-pricing">
                <span className="raw-data-price">{service.price}</span>
                <div className="service-details">
                  <div className="detail-item">
                    <svg className="clock-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{service.duration}</span>
                  </div>
                  <div className="detail-item">
                    <svg className="document-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span>{service.studies}</span>
                  </div>
                </div>
              </div>
              
              <div className="raw-data-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="raw-data-actions">
                <Link href={`/contact?service=raw-data-${service.id}`} className={`btn-raw-data ${service.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                </Link>
                <div className="compliance-note">
                  <svg className="shield-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  FDA/EMA compliance verified
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="raw-data-info">
          <div className="info-content">
            <div className="info-item">
              <svg className="expertise-icon" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4>Expert Review Team</h4>
                <p>Our data reviewers have 15+ years of regulatory experience across FDA, EMA, and ICH guidelines</p>
              </div>
            </div>
            <div className="info-item">
              <svg className="security-icon" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h4>Secure Data Handling</h4>
                <p>All data transfers use encrypted channels with signed confidentiality agreements</p>
              </div>
            </div>
            <div className="info-item">
              <svg className="speed-icon" width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <div>
                <h4>Fast Turnaround</h4>
                <p>Rapid review process with detailed findings and actionable recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="product-details-section">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            id={`product-detail-${product.id}`}
            className={`product-detail-wrapper ${index % 2 === 1 ? 'reverse' : ''} ${index % 2 === 1 ? 'gray-bg' : ''}`}
          >
            <div className="product-detail-container">
              <div className="product-detail-content">
                <div className="product-detail-text">
                  <span className="detail-label">Package Details</span>
                  <h2>{product.title}</h2>
                  <p className="detail-description">
                    {product.id === 1 && 'This downloadable package includes all the SOPs you need to ensure GLP compliance from day one.'}
                    {product.id === 2 && 'Designed for manufacturing operations, this package helps you build a robust, compliant GMP foundation.'}
                    {product.id === 3 && 'A practical kit for preparing your team, documents, and lab space for regulatory inspections.'}
                  </p>
                  
                  <div className="features-list">
                    <h4>What's Included:</h4>
                    <ul>
                      {product.features.map((feature, idx) => (
                        <li key={idx}>
                          <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-actions">
                    <Link href={`/checkout/${product.id}`} className="btn-gradient">
                      Purchase Now - {product.price}
                    </Link>
                    <div className="guarantee">
                      <svg className="guarantee-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      30-Day Money Back Guarantee
                    </div>
                  </div>
                </div>
                
                <div className="product-detail-image">
                  <Image 
                    src={
                      product.id === 1 ? glpSopPackage :
                      product.id === 2 ? gmpSopPackage :
                      auditToolkit
                    }
                    alt={`${product.title} preview`} 
                    quality={90} 
                    sizes="(max-width: 768px) 100vw, 500px" 
                    placeholder="blur"
                    className="detail-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="cta-content">
          <h2>Questions About Our Solutions?</h2>
          <p>Not sure which package is right for your lab? Schedule a free consultation to discuss your specific needs.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">Schedule Free Consultation</Link>
            <Link href="/#services" className="btn btn-secondary">View All Services</Link>
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