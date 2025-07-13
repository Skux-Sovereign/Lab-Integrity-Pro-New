"use client";

import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export default function Contact() {
  return (
    <main>
      <header className="lab-header scrolled">
        <div className="nav-container">
          <div className="nav-logo-wrapper">
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
          </div>
          <nav className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/products">Products</Link>
          </nav>
        </div>
      </header>

      <div className="contact-page">
        <div className="contact-form-container">
          <h1>Talk to a Pro</h1>
          <p>
            A member of our team will discuss your requirements and our
            capabilities.
          </p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="firstName" placeholder="First Name *" required />
              </div>
              <div className="form-group">
                <input type="text" name="lastName" placeholder="Last Name *" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization *"
                  required
                />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone *" required />
              </div>
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email *" required />
            </div>

            <div className="form-group">
              <select name="industry" required>
                <option value="">Industry *</option>
                <option value="pharma">Pharma</option>
                <option value="biotech">Biotech</option>
                <option value="academic">Academic</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows={4}
                placeholder="How Can We Help? *"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <select name="referral" required>
                <option value="">Referral Source *</option>
                <option value="search">Search Engine</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="recaptcha-wrapper">
              <label>
                <input type="checkbox" required /> I&rsquo;m not a robot
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer>
        &copy; {new Date().getFullYear()} Lab Integrity Pro. All rights reserved.
      </footer>
    </main>
  );
}
