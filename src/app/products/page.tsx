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
      image: '/assets/product-glp-sop.png',
      icon: '/assets/icons/icon-glp-hex.png',
    },
    {
      id: 2,
      title: 'GMP SOP Template Package',
      description: 'GMP-focused templates to support manufacturing compliance.',
      price: '$169',
      image: '/assets/product-gmp-sop.jpg',
      icon: '/assets/icons/icon-gmp-hex.png',
    },
    {
      id: 3,
      title: 'Audit Readiness Toolkit',
      description: 'Checklists, logs, and prep materials to help pass regulatory audits.',
      price: '$89',
      image: '/assets/product-audit-kit.jpg',
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

      <section className="section" style={{ paddingTop: '100px' }}>
        <div className="section-content" style={{ flexDirection: 'column' }}>
          <h1>Purchase SOP Templates</h1>
          <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Instantly downloadable SOP packages for GLP and GMP labs.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon-floating">
                  <img src={product.icon} alt={product.title + ' icon'} />
                </div>
                <img src={product.image} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="cta-button-gradient">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
      </footer>
    </main>
  );
}
