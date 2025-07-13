"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../globals.css';

// Static imports for product grid images (relative path from /src/app/products/page.tsx)
import monoclonal from '../assets/monoclonal-antibody.jpg';
import gmpPharma from '../assets/gmp-pharmaceuticals.jpg';
import auditReadiness from '../assets/audit-readiness.jpg';

// Static imports for detail section images
import glpSopPackage from '../assets/glp-sop-package.jpg';
import gmpSopPackage from '../assets/gmp-sop-package.jpg';
import auditToolkit from '../assets/audit-readiness-toolkit.jpg';

// Static imports for icons (assuming /src/app/assets/icons/ subfolder)
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
      image: monoclonal, // Static import
      icon: glpIcon, // Now a static import
    },
    {
      id: 2,
      title: 'GMP SOP Template Package',
      description: 'GMP-focused templates to support manufacturing compliance.',
      price: '$169',
      image: gmpPharma, // Static import
      icon: gmpIcon, // Static import
    },
    {
      id: 3,
      title: 'Audit Readiness Toolkit',
      description: 'Checklists, logs, and prep materials to help pass regulatory audits.',
      price: '$89',
      image: auditReadiness, // Static import
      icon: auditIcon, // Static import
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="product-page">
      <Head>
        <title>Buy SOP Templates & Toolkits | Lab Integrity Pro</title>
        <meta name="description" content="Downloadable GLP/GMP SOP templates and audit readiness tools for pharmaceutical and biotech labs." />
      </Head>

      <header className={`lab-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo-text">
            <Image 
              src="/assets/logo.png" 
              alt="Lab Integrity Pro Logo" 
              className="nav-logo-img" 
              width={150} 
              height={150} 
              priority 
              quality={100} 
              sizes="(max-width: 768px) 100px, 150px" 
              style={{ height: 'auto' }} // Ensures aspect ratio is maintained
              
            />
          </Link>
          <nav className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="section-content" style={{ flexDirection: 'column' }}>
          <h1>Purchase SOP Templates</h1>
          <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Instantly downloadable SOP packages for GLP and GMP labs.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon-floating">
                  <Image 
                    src={product.icon} 
                    alt={`${product.title} icon`} 
                    width={80} 
                    height={80} 
                    quality={90} 
                    loading="lazy" 
                  />
                </div>
                  <Image 
                    src={product.image} 
                    alt={`Product preview for ${product.title} – ${product.description}`} 
                    className="product-image" 
                    quality={90} 
                    sizes="(max-width: 768px) 100vw, 320px" 
                    loading="lazy" 
                    placeholder="blur" // Auto-works now
                  />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <Link href={`/checkout/${product.id}`} className="buy-now-button">Buy Now</Link>
                  <Link href={`#product-${product.id}`} className="whats-included-link">
                    What’s Included?
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-details section">
        <div className="product-detail-block" id="product-1">
          <div className="product-detail-text">
            <h2>GLP SOP Template Package</h2>
            <p>
              This downloadable package includes all the SOPs you need to ensure GLP compliance from day one.
            </p>
            <ul className="checklist">
              <li>General GLP SOP Framework</li>
              <li>Data Integrity Policy</li>
              <li>Equipment Calibration SOP</li>
              <li>Deviation Management SOP</li>
              <li>Download in Word format (.docx)</li>
            </ul>
            <Link href={`/checkout/1`} className="buy-now-button">Buy Now</Link>
          </div>
          <div className="product-detail-image">
            <Image 
              src={glpSopPackage} 
              alt="GLP SOP Template Package preview" 
              quality={90} 
              sizes="(max-width: 768px) 100vw, 500px" 
              loading="lazy" 
              placeholder="blur"
            />
          </div>
        </div>

        <div className="full-width-gray">
          <div className="section">
            <div className="product-detail-block reverse" id="product-2">
              <div className="product-detail-text">
                <h2>GMP SOP Template Package</h2>
                <p>
                  Designed for manufacturing operations, this package helps you build a robust, compliant GMP foundation.
                </p>
                <ul className="checklist">
                  <li>Batch Record SOP</li>
                  <li>Change Control SOP</li>
                  <li>GMP Training SOP</li>
                  <li>Quality Risk Management SOP</li>
                  <li>Download in Word format (.docx)</li>
                </ul>
                <Link href={`/checkout/2`} className="buy-now-button">Buy Now</Link>
              </div>
              <div className="product-detail-image">
                <Image 
                  src={gmpSopPackage} 
                  alt="GMP SOP Template Package preview" 
                  quality={90} 
                  sizes="(max-width: 768px) 100vw, 500px" 
                  loading="lazy" 
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-block" id="product-3">
          <div className="product-detail-text">
            <h2>Audit Readiness Toolkit</h2>
            <p>
              A practical kit for preparing your team, documents, and lab space for regulatory inspections.
            </p>
            <ul className="checklist">
              <li>Audit Checklist (FDA/EMA)</li>
              <li>Inspection Log Template</li>
              <li>CAPA Tracking Sheet</li>
              <li>Document Control Flowchart</li>
              <li>Printable and digital formats included</li>
            </ul>
            <Link href={`/checkout/3`} className="buy-now-button">Buy Now</Link>
          </div>
          <div className="product-detail-image">
            <Image 
              src={auditToolkit} 
              alt="Audit Toolkit preview" 
              quality={90} 
              sizes="(max-width: 768px) 100vw, 500px" 
              loading="lazy" 
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section className="more-info-section">
        <div className="more-info-content">
          <h2>Need Something More?</h2>
          <p>
            Looking for custom SOPs, compliance consulting, or tailored solutions? We’re here to help.
          </p>
          <Link href="/contact" className="cta-button-gradient">
            Contact Us
          </Link>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
      </footer>
    </main>
  );
}