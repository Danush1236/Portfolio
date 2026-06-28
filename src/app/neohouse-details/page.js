'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";

export default function NeohouseDetails() {
  useEffect(() => {
    // Close mobile menu on page load
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger) hamburger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NEO House Website — Project Details | Danushka Wickramasinghe</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <nav id="navbar">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img
              src="/image/dilan.jpg"
              alt="Danushka Wickramasinghe"
              className="nav-profile-img"
            />
            Danushka Wickramasinghe
          </a>
          <ul className="nav-links">
            <li><a href="/#about">About</a></li>
            <li><a href="/#tools">Tools</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#education">Education</a></li>
            <li><a href="/#contact" className="nav-cta">Contact</a></li>
          </ul>
          <div className="hamburger" id="hamburger" onClick={() => toggleMenu()}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <a href="/#about" onClick={() => closeMenu()}>About</a>
        <a href="/#tools" onClick={() => closeMenu()}>Tools</a>
        <a href="/#projects" onClick={() => closeMenu()}>Projects</a>
        <a href="/#gallery" onClick={() => closeMenu()}>Gallery</a>
        <a href="/#education" onClick={() => closeMenu()}>Education</a>
        <a href="/#contact" onClick={() => closeMenu()}>Contact</a>
      </div>

      <section className="project-details-section">
        <div className="container">
          <div className="project-details-header">
            <Link href="/" className="header-back-icon">
              <img src="/image/icon/arrow left.svg" alt="Back to Projects" width={24} height={24} />
              <span>Back</span>
            </Link>
            <div>
              <h1 className="project-details-title">NEO House Website</h1>
              <p className="project-details-subtitle">
                A sleek real estate website concept featuring property listings, virtual tours, and an intuitive search and filter interface.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/developer.gif" alt="Project Type" width={40} height={40} />
              </div>
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Website</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/verified.gif" alt="Status" width={40} height={40} />
              </div>
              <span className="meta-label">Status</span>
              <span className="meta-value">Completed</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/presentation.gif" alt="Role" width={40} height={40} />
              </div>
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/december-31.gif" alt="Year" width={40} height={40} />
              </div>
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
          </div>

          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              NEO House is a premium real estate website design concept showcasing modern property listings with advanced search capabilities and virtual tour features.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Property Listings</h4><p>Comprehensive property database with detailed descriptions and specifications.</p></div>
              <div className="feature-card"><h4>Advanced Search</h4><p>Powerful filters for location, price, size, and amenities.</p></div>
              <div className="feature-card"><h4>Virtual Tours</h4><p>3D virtual tours and photo galleries for each property.</p></div>
              <div className="feature-card"><h4>Agent Directory</h4><p>Connect with professional real estate agents directly through the platform.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">Real Estate</span>
              <span className="tech-badge">Web Design</span>
            </div>
          </div>
          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              {/* <a
                href="/project/babyroom/Smart baby room.pdf"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a> */}
              <a href="https://www.figma.com/design/3gOHbDxLZEIP49Y3RFYVNI/Untitled?node-id=0-1&t=wxRiC4nDxAY1laG0-1" className="doc-btn">
                <img
                  src="/image/icon/solar_figma-broken.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Figma Design
              </a>
            </div>
              </div>
        </div>
      </section>

      <Script src="/script.js"></Script>
    </>
  );
}
