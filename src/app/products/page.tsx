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
          <h1>SOP Templates & Compliance Tools</h1>
          <p>Instantly downloadable templates and toolkits designed by industry experts</p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Choose Your Package</h2>
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
          <h2>Need Custom Solutions?</h2>
          <p>Looking for tailored SOPs, compliance consulting, or bespoke solutions for your laboratory?</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">Get Custom Quote</Link>
            <Link href="/#services" className="btn btn-secondary">View Services</Link>
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