'use client';
import "./globals.css";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  useEffect(() => {
    // Reset scroll position when returning to home page
    window.scrollTo(0, 0);
    
    // Reset and re-trigger reveal animations
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
      });
      
      // Re-initialize observer for reveal animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('visible');
          }
        });
      }, { threshold: 0.15 });
      
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Danushka Wickramasinghe — UI/UX Designer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      {/* ─── NAV ─── */}
  <nav id="navbar">
    <div className="nav-inner">
      <a href="#" className="nav-logo">
        <img
          src="/image/dilan.jpg"
          alt="Danushka Wickramasinghe"
          className="nav-profile-img"
        />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </li>
      </ul>
      <a href="#contact" className="nav-contact-icon" onClick={() => closeMenu()}>
        <img src="/image/icon/contact.svg" alt="Contact" />
      </a>
      <div className="hamburger" id="hamburger" onClick={() => toggleMenu()}>
        <img src="/image/icon/menu.svg" alt="Menu" className="hamburger-icon" />
      </div>
    </div>
  </nav>
  {/* Mobile Menu */}
  <div className="mobile-menu" id="mobileMenu">
    <a href="#about" onClick={() => closeMenu()}>
      About
    </a>
    <a href="#tools" onClick={() => closeMenu()}>
      Tools
    </a>
    <a href="#projects" onClick={() => closeMenu()}>
      Projects
    </a>
    <a href="#gallery" onClick={() => closeMenu()}>
      Gallery
    </a>
    <a href="#education" onClick={() => closeMenu()}>
      Education
    </a>
    <a href="#contact" onClick={() => closeMenu()}>
      Contact
    </a>
  </div>
  {/* ─── HERO ─── */}
  <section id="hero">
    <div className="hero-bg">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
    </div>
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">Available for Work</div>
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="name">
              Danushka
              <br />
              Wickramasinghe
            </span>
          </h1>
          <div className="hero-role">UI/UX Designer</div>
          <p className="hero-sub">
            Passionate about creating intuitive digital experiences that bridge
            the gap between technology and human needs.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                <path d="M4 10h16M10 4v16" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <svg
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num counter" data-target={7}>
                0
              </div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div>
              <div className="hero-stat-num counter" data-target={1}>
                0
              </div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="hero-stat-num counter" data-target={10}>
                0
              </div>
              <div className="hero-stat-label">Certificates</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll down</div>
        <div className="scroll-mouse">
          <div className="mouse-wheel" />
        </div>
      </div>
    </div>
  </section>
  {/* ─── ABOUT ─── */}
  <section id="about">
    <div className="container">
      <div className="section-label">About Me</div>
      <div className="about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">
            Designing with <span>Purpose &amp; Clarity</span>
          </h2>
          <p>
            I’m a passionate UI/UX Designer based in Sri Lanka, dedicated to
            creating meaningful digital experiences that are both visually
            refined and effortlessly functional. I believe great design should
            feel natural - guiding users seamlessly without drawing attention to
            itself.
          </p>
          <p>
            My approach to design is rooted in empathy and problem-solving. I
            focus on understanding user behavior, business goals, and real-world
            challenges to craft intuitive interfaces that balance usability,
            accessibility, and modern aesthetics.
          </p>
          <p>
            From mobile applications and web platforms to scalable design
            systems, I pay close attention to every interaction, detail, and
            user journey. I enjoy transforming complex ideas into simple,
            engaging experiences that users genuinely enjoy.
          </p>
          <p>
            Beyond design, I continuously explore new tools, trends, and
            technologies - from advanced prototyping in Figma to bringing
            interfaces to life through front-end development. I’m driven by
            curiosity, continuous learning, and the desire to build products
            that make a real impact.
          </p>
        </div>
        <div className="skills-grid reveal reveal-delay-2">
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="/image/content-creator.gif"
                alt="User-Centered Design"
                width={52}
                height={52}
              />
            </div>
            <div className="skill-name">User-Centered Design</div>
            <div className="skill-desc">
              Putting people first in every design decision, from research to
              final product.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="/image/hand-with-light-bulb.gif"
                alt="Creative Problem Solving"
                width={52}
                height={52}
              />
            </div>
            <div className="skill-name">Creative Problem Solving</div>
            <div className="skill-desc">
              Turning complex challenges into elegant, intuitive solutions.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="/image/study.gif"
                alt="Continuous Learning"
                width={52}
                height={52}
              />
            </div>
            <div className="skill-name">Continuous Learning</div>
            <div className="skill-desc">
              Always evolving - staying ahead of design trends, tools, and
              techniques.
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="/image/clipboard.gif"
                alt="Attention to Detail"
                width={52}
                height={52}
              />
            </div>
            <div className="skill-name">Attention to Detail</div>
            <div className="skill-desc">
              Precision in spacing, typography, and interaction because
              details matter.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ─── TOOLS ─── */}
  <section id="tools">
    <div className="container">
      <div className="section-label">Tools &amp; Technologies</div>
      <h2 className="section-title">
        My <span>Toolkit</span>
      </h2>
      <div className="tools-group reveal">
        <div className="tools-group-title">Design Tools</div>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/figma.jpeg" alt="Figma" width={72} height={52} />
            </div>
            <div className="tool-name">Figma</div>
            <div className="tool-tooltip">Advanced · 2+ yrs</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/xd.webp" alt="Adobe XD" width={52} height={52} />
            </div>
            <div className="tool-name">Adobe XD</div>
            <div className="tool-tooltip">Intermediate · 1+ yr</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img
                src="/image/Balsamiq.png"
                alt="Balsamiq"
                width={72}
                height={52}
              />
            </div>
            <div className="tool-name">Balsamiq</div>
            <div className="tool-tooltip">Intermediate · Wireframing</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/canva.png" alt="Canva" width={52} height={52} />
            </div>
            <div className="tool-name">Canva</div>
            <div className="tool-tooltip">Intermediate · Editing</div>
          </div>
        </div>
      </div>
      <div className="tools-group reveal reveal-delay-2">
        <div className="tools-group-title">Development</div>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/html.png" alt="HTML" width={52} height={52} />
            </div>
            <div className="tool-name">HTML</div>
            <div className="tool-tooltip">Proficient · Frontend</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/css.png" alt="CSS" width={52} height={52} />
            </div>
            <div className="tool-name">CSS</div>
            <div className="tool-tooltip">Proficient · Frontend</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/js.png" alt="JavaScript" width={52} height={52} />
            </div>
            <div className="tool-name">JavaScript</div>
            <div className="tool-tooltip">Intermediate · Frontend</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/next.jpeg" alt="Next.js" width={52} height={52} />
            </div>
            <div className="tool-name">Next.js</div>
            <div className="tool-tooltip">Intermediate · Frontend</div>
          </div>
          <div className="tool-card">
            <div className="skill-icon">
              <img src="/image/iot.jpg" alt="Arduino" width={52} height={52} />
            </div>
            <div className="tool-name">Arduino</div>
            <div className="tool-tooltip">Beginner · IoT Projects</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ─── PROJECTS ─── */}
  <section id="projects">
    <div className="container">
      <div className="section-label">Portfolio</div>
      <h2 className="section-title">
        Selected <span>Projects</span>
      </h2>
      <div className="projects-grid">
        <div className="project-card reveal" onClick={() => window.open('https://aj-website-alpha.vercel.app/', '_blank')} style={{cursor: 'pointer'}}>
          <div className="project-img">
            <img
              src="/image/AJ_saloon.png"
              alt="AJ Saloon Web Application"
              className="project-image"
            />
            <div className="project-type">Website</div>
          </div>
          <div className="project-body">
            <div className="project-title">AJ Saloon Web Application</div>
            <div className="project-desc">
              A full-stack web application for AJ Salon featuring online appointment booking, customer management, and secure cloud-based booking management.
            </div>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React.js</span>
            </div>
            <div
              className="project-cta"
            >
              View Website →
            </div>
          </div>
        </div>
        <Link href="/eventstune-details">
          <div className="project-card reveal reveal-delay-1">
            <div className="project-img">
              <img
                src="/image/project/event tune.jpg"
                alt="Eventstune.lk"
                className="project-image"
              />
              <div className="project-type">Website</div>
            </div>
            <div className="project-body">
              <div className="project-title">Eventstune.lk</div>
              <div className="project-desc">
                An event discovery and ticketing platform for Sri Lanka - browse,
                book, and manage event listings seamlessly.
              </div>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PHP</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/safelink-details">
          <div className="project-card reveal reveal-delay-2">
            <div className="project-img">
              <img
                src="/image/project/safelink.jpg"
                alt="SafeLink App"
                className="project-image"
              />
              <div className="project-type">Mobile App</div>
            </div>
            <div className="project-body">
              <div className="project-title">SafeLink App</div>
              <div className="project-desc">
                An emergency response mobile application with automatic accident
                detection, satellite communication, and real-time emergency
                support.
              </div>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">UI/UX</span>
                <span className="tag">Mobile</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/apparel-details">
          <div className="project-card reveal">
            <div className="project-img">
              <img
                src="/image/project/apperal.jpg"
                alt="Apparel Printing Management System"
                className="project-image"
              />
              <div className="project-type">Web Application</div>
            </div>
            <div className="project-body">
              <div className="project-title">
                Apparel Printing Management System
              </div>
              <div className="project-desc">
                A comprehensive web-based management system to digitize and
                streamline business operations for an apparel printing company.
              </div>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">Dashboard</span>
                <span className="tag">System Design</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/smart-baby-room-details">
          <div className="project-card reveal reveal-delay-1">
            <div className="project-img">
              <img
                src="/image/project/baby room.png"
                alt="Smart Baby Room"
                className="project-image"
              />
              <div className="project-type">IoT</div>
            </div>
            <div className="project-body">
              <div className="project-title">Smart Baby Room</div>
              <div className="project-desc">
                An IoT system monitoring a baby's room environment - temperature,
                humidity, sound - with Telegram Bot alerts for parents.
              </div>
              <div className="project-tags">
                <span className="tag">Arduino</span>
                <span className="tag">Sensors</span>
                <span className="tag">Telegram Bot</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/gobus-details">
          <div className="project-card reveal reveal-delay-2">
            <div className="project-img">
              <img
                src="/image/project/gobus.png"
                alt="GO BUS Mobile App"
                className="project-image"
              />
              <div className="project-type">Mobile App</div>
            </div>
            <div className="project-body">
              <div className="project-title">GO BUS Mobile App</div>
              <div className="project-desc">
                A modern bus tracking and booking app for Sri Lanka - real-time
                routes, seat selection, and live arrival updates.
              </div>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">Mobile</span>
                <span className="tag">Transit</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/neohouse-details">
          <div className="project-card reveal">
            <div className="project-img">
              <img
                src="/image/project/airline.png"
                alt="Sri Lanka Airline Website"
                className="project-image"
              />
              <div className="project-type">Website</div>
            </div>
            <div className="project-body">
              <div className="project-title">Sri Lanka Airline Website</div>
              <div className="project-desc">
                A modern airline website concept with flight booking, check-in,
                and travel information features.
              </div>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">UI/UX Design</span>
                <span className="tag">Web Design</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
        <Link href="/carlos-publishers-details">
          <div className="project-card reveal">
            <div className="project-img">
              <img
                src="/image/project/apperal.jpg"
                alt="Carlos Publishers Website Redesign"
                className="project-image"
              />
              <div className="project-type">Website</div>
            </div>
            <div className="project-body">
              <div className="project-title">Carlos Publishers Website Redesign</div>
              <div className="project-desc">
                Redesigned the Carlos Publishers website to improve responsiveness,
                visual consistency, usability, and overall user experience with a
                modern, user-friendly interface.
              </div>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">UI/UX Design</span>
                <span className="tag">Responsive</span>
              </div>
              <div className="project-cta">
                View Details →
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
  {/* ─── UI DESIGN GALLERY ─── */}
  <section id="gallery">
    <div className="container">
      <div className="section-label">Inspiration</div>
      <h2 className="section-title">
        UI Design <span>Gallery</span>
      </h2>
      <div className="gallery-scroll-container" id="galleryScroll">
        <div className="gallery-scroll-track">
          <a href="https://www.figma.com/design/6jsjW5OI22Oz8kmwMuEYp4/Sri-Lankan-Airline?node-id=2-670&t=tUwe6rgEvZiRv6SW-1" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
          
           <img
            src="/image/airline.jpg"
            alt="Sri Lankan Airline Design"
            width={240}
            height={180}
            />
            <div className="gallery-scroll-label">Design 1</div>
          </a>
          <a href="https://www.figma.com/design/3gOHbDxLZEIP49Y3RFYVNI/Untitled?node-id=3-2&t=70vniSR3VwSP6Zze-1" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
             <img
            src="/image/project/neohouse.png"
            alt="Neo House Design"
            width={240}
            height={180}
            />
            <div className="gallery-scroll-label">Design 2</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
            <div className="gallery-scroll-label">Design 3</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}></div>
            <div className="gallery-scroll-label">Design 4</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
            <div className="gallery-scroll-label">Design 5</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'}}></div>
            <div className="gallery-scroll-label">Design 6</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}></div>
            <div className="gallery-scroll-label">Design 7</div>
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="gallery-scroll-item">
            <div className="gallery-scroll-image" style={{background: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'}}></div>
            <div className="gallery-scroll-label">Design 8</div>
          </a>
        </div>
      </div>
      <p style={{textAlign: 'center', marginTop: 32, color: 'var(--text-secondary)', fontSize: 14}}>
        Hover over any design to pause • Click to view in Figma
      </p>
    </div>
  </section>
  {/* ─── EDUCATION & CERTS ─── */}
  <section id="education">
    <div className="container">
      <div className="section-label">Background</div>
      <h2 className="section-title">
        Education &amp; <span>Certificates</span>
      </h2>
      <div className="edu-certs-grid">
        <div className="reveal">
          <h3
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              marginBottom: 28,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: 1
            }}
          >
            Education
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2025 – 2027 (Expected)</div>
              <div className="timeline-school">Coventry University UK</div>
              <div className="timeline-degree">
                BSc (Hons) Information Technology for Business
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024 – Present</div>
              <div className="timeline-school">
                National Institute of Business Management (NIBM)
              </div>
              <div className="timeline-degree">
                Higher National Diploma In Information Systems
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023 – 2024</div>
              <div className="timeline-school">
                National Institute of Business Management (NIBM)
              </div>
              <div className="timeline-degree">
                Diploma in Computer System Design
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018 – 2020</div>
              <div className="timeline-school">
                Sri Sanghabodhi Central College - Nittambuwa
              </div>
              <div className="timeline-degree">
                General Certificate of Education - Advanced Level (A/L)
              </div>
            </div>
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          <h3
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              marginBottom: 28,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: 1
            }}
          >
            Certificates
          </h3>
          <div className="certs-group">
            <div className="certs-group-title">Design</div>
            <div className="cert-item">
              <div>
                <div className="cert-name">Google UX Design Certificate</div>
                <div className="cert-issuer">Google / Coursera</div>
              </div>
              <span className="cert-badge design">Design</span>
            </div>
            <div className="cert-item">
              <div>
                <div className="cert-name">UI/UX Design Fundamentals</div>
                <div className="cert-issuer">Udemy</div>
              </div>
              <span className="cert-badge design">Design</span>
            </div>
            <div className="cert-item">
              <div>
                <div className="cert-name">
                  Figma — From Beginner to Advanced
                </div>
                <div className="cert-issuer">Figma Academy</div>
              </div>
              <span className="cert-badge design">Design</span>
            </div>
          </div>
          <div className="certs-group">
            <div className="certs-group-title">
              Agile &amp; Project Management
            </div>
            <div className="cert-item">
              <div>
                <div className="cert-name">
                  Agile Fundamentals: Scrum &amp; Kanban
                </div>
                <div className="cert-issuer">LinkedIn Learning</div>
              </div>
              <span className="cert-badge agile">Agile</span>
            </div>
            <div className="cert-item">
              <div>
                <div className="cert-name">Project Management Essentials</div>
                <div className="cert-issuer">Coursera</div>
              </div>
              <span className="cert-badge agile">Agile</span>
            </div>
          </div>
          <div className="certs-group">
            <div className="certs-group-title">Language</div>
            <div className="cert-item">
              <div>
                <div className="cert-name">English Proficiency Certificate</div>
                <div className="cert-issuer">British Council</div>
              </div>
              <span className="cert-badge lang">Language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ─── CONTACT ─── */}
  <section id="contact">
    <div className="container">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">
        Let's <span>Connect</span>
      </h2>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <p>
            Have a project in mind, a collaboration idea, or just want to say
            hello? I'd love to hear from you. Fill in the form and I'll get back
            to you within 24 hours.
          </p>
          <div className="contact-items">
            <div className="contact-item">
              {/* <div class="contact-item-icon"></div> */}
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">
                  dilandanushka345@gmail.com
                </div>
              </div>
            </div>
            <div className="contact-item">
              {/* <div class="contact-item-icon"></div> */}
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+94 763659342</div>
              </div>
            </div>
            <div className="contact-item">
              {/* <div class="contact-item-icon"></div> */}
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Sri Lanka</div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/danushka-wickramasinghe"
              target="_blank"
              className="contact-item"
            >
              {/* <div class="contact-item-icon"></div> */}
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">
                  www.linkedin.com/in/danushka-wickramasinghe
                </div>
              </div>
            </a>
          </div>
        </div>
        <form
          className="contact-form reveal reveal-delay-2"
          id="contactForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" placeholder=" " autoComplete="off" />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form-group textarea">
            <textarea id="message" placeholder=" " defaultValue={""} />
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" className="btn-submit">
            <svg
              width={16}
              height={16}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* Toast */}
  <div className="toast" id="toast">
    <div className="toast-icon" id="toastIcon" />
    <div>
      <div className="toast-title" id="toastTitle" />
      <div className="toast-sub" id="toastSub" />
    </div>
    <div className="toast-close" onClick={() => hideToast()}>
      ✕
    </div>
  </div>
{/* Floating Actions */}
<div className="floating-actions">

  {/* WhatsApp Button */}
<a
  href="https://wa.me/94763659342"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <div className="whatsapp-icon">
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.51 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.38-1.67a11.8 11.8 0 005.68 1.45h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.16-1.23-6.13-3.41-8.34zM12.07 21.5h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.6 9.6 0 01-1.47-5.1c0-5.3 4.31-9.6 9.61-9.6 2.57 0 4.98 1 6.8 2.83a9.57 9.57 0 012.8 6.78c0 5.3-4.31 9.6-9.6 9.6zm5.28-7.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.61.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.19 2.05 3.14 4.98 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.17-.55-.31z"/>
    </svg>
  </div>

  <span className="whatsapp-badge">WhatsApp</span>
</a>

{/* Chatbot Overlay */}
<div
  className={`chatbot-overlay ${chatOpen ? "show" : ""}`}
  onClick={closeChat}
/>

{/* Chatbot Modal */}
<div className={`chatbot-modal ${chatOpen ? "show" : ""}`}>

  {/* Header */}
  <div className="chatbot-header">
    <div className="chatbot-title-area">
      <img src="/image/icon/bot.svg" alt="Bot" className="chatbot-bot-icon" />
      <h3 className="chatbot-title">AI Assistant</h3>
    </div>

    <button className="chatbot-close" onClick={closeChat}>✕</button>
  </div>

 <div className="chatbot-body">
  
  {/* Coming Soon Banner */}
  <div className="chatbot-message">
    <h2>👋 Hello!</h2>
    <p>
      This chatbot is currently under development.<br />
      Full AI assistant will be available soon.
    </p>
  </div>

</div>

  {/* Input */}
  <div className="chatbot-input-area">
    <input
      type="text"
      className="chatbot-input"
      placeholder="Type a message..."
    />
    <button className="chatbot-send">Send</button>
  </div>

</div>
{/* Chatbot Icon */}
  <div className="chatbot-icon" id="chatbotIcon" onClick={() => openChat()}>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Robot head */}
      <rect x={5} y={8} width={14} height={12} rx={2} />
      {/* Left eye */}
      <circle cx={10} cy={11} r="1.5" fill="currentColor" />
      {/* Right eye */}
      <circle cx={14} cy={11} r="1.5" fill="currentColor" />
      {/* Antenna left */}
      <line x1={8} y1={8} x2={8} y2={4} />
      <circle cx={8} cy={3} r={1} fill="currentColor" />
      {/* Antenna right */}
      <line x1={16} y1={8} x2={16} y2={4} />
      <circle cx={16} cy={3} r={1} fill="currentColor" />
      {/* Mouth */}
      <path
        d="M10 15 Q12 16 14 15"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
    <span className="chat-badge">AI</span>
  </div>
  </div>

  <Script src="/script.js"></Script>
</>
  );
}