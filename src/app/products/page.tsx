"use client";

import Link from 'next/link';
import '../globals.css';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'GLP SOP Template Package',
      description: 'Comprehensive SOP templates tailored for GLP-compliant labs.',
      price: '$149',
      image: '/assets/monoclonal-antibody.jpg',
      icon: '/assets/icons/icon-glp-hex.png',
    },
    {
      id: 2,
      title: 'GMP SOP Template Package',
      description: 'GMP-focused templates to support manufacturing compliance.',
      price: '$169',
      image: '/assets/gmp-pharmaceuticals.jpg',
      icon: '/assets/icons/icon-gmp-hex.png',
    },
    {
      id: 3,
      title: 'Audit Readiness Toolkit',
      description: 'Checklists, logs, and prep materials to help pass regulatory audits.',
      price: '$89',
      image: '/assets/audit-readiness.jpg',
      icon: '/assets/icons/icon-audit-hex.png',
    },
  ];

  return (
    <main className="product-page">
      <header className="lab-header scrolled">
        <div className="nav-container">
          <Link href="/" className="nav-logo-text">
            <img src="/assets/logo.png" alt="Lab Integrity Pro Logo" className="nav-logo-img" />
          </Link>
          <nav className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '16em' }}>
        <div className="section-content" style={{ flexDirection: 'column' }}>
          <h1>Purchase SOP Templates</h1>
          <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Instantly downloadable SOP packages for GLP and GMP labs.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon-floating">
                  <img 
                    src={product.icon} alt={product.title + ' icon'} />
                </div>
                <img 
                  src={product.image} alt={`Product preview for ${product.title} – ${product.description}`} className="product-image"
                   />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <Link href="/" className="buy-now-button">Buy Now</Link>
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
            <Link href="/" className="buy-now-button">Buy Now</Link>
          </div>
          <div className="product-detail-image">
            <img src="/assets/glp-sop-package.jpg" alt="GLP SOP Template Package preview" />
          </div>
        </div>

        {/* Full-width gray background with centered content inside */}
        <div className="full-width-gray">
          <div className="section">
            <div className="product-detail-block reverse">
              <div className="product-detail-text" id="product-2">
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
                <Link href="/" className="buy-now-button">Buy Now</Link>
              </div>
              <div className="product-detail-image">
                <img src="/assets/gmp-sop-package.jpg" alt="GMP SOP Template Package preview" />
              </div>
            </div>
          </div>
        </div>



        <div className="product-detail-block">
          <div className="product-detail-text" id="product-3">
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
            <Link href="/" className="buy-now-button">Buy Now</Link>
          </div>
          <div className="product-detail-image">
            <img src="/assets/audit-readiness-toolkit.jpg" alt="Audit Toolkit preview" />
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
        &copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
      </footer>
    </main>
  );
}
