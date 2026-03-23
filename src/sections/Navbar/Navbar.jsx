import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.logo} href="/">
        <img src="sstteward.png" alt="Steward Humiwat logo" className={styles.logoImg} />
      </a>

      {/* Desktop Nav */}
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="mailto:stewardhumiwat@gmail.com" className={styles.ctaBtn}>
            Contact Me
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:stewardhumiwat@gmail.com" onClick={() => setMenuOpen(false)} className={styles.mobileCta}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
