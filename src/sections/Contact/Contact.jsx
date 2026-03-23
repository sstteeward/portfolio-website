import React, { useState } from "react";
import styles from "./Contact.module.css";

const contactLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "stewardhumiwat@gmail.com",
    href: "mailto:stewardhumiwat@gmail.com",
    color: "#6c63ff",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    ),
    label: "LinkedIn",
    value: "Steward S. Humiwat",
    href: "https://www.linkedin.com/in/steward-humiwat-a7a324334/",
    color: "#0077b5",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
    ),
    label: "GitHub",
    value: "sstteeward",
    href: "https://github.com/sstteeward",
    color: "#e0e0e0",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    ),
    label: "Facebook",
    value: "Steward Sarong Humiwat",
    href: "https://web.facebook.com/sstteward",
    color: "#1877f2",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    value: "@sho__ess",
    href: "https://www.instagram.com/sho__ess/",
    color: "#e1306c",
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("stewardhumiwat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.glow} />
      <div className={styles.container}>
        {/* CTA block */}
        <div className={styles.cta}>
          <span className={styles.tag}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.desc}>
            I'm open to internship opportunities, freelance projects, and collabs.
            Feel free to reach out — I'd love to connect!
          </p>
          <div className={styles.emailBar}>
            <span className={styles.emailText}>stewardhumiwat@gmail.com</span>
            <button className={styles.copyBtn} onClick={copyEmail}>
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Links grid */}
        <div className={styles.linksGrid}>
          {contactLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer" className={styles.linkCard}>
              <div className={styles.linkIcon} style={{ color: link.color, background: `${link.color}18` }}>
                {link.icon}
              </div>
              <div>
                <p className={styles.linkLabel}>{link.label}</p>
                <p className={styles.linkValue}>{link.value}</p>
              </div>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          ))}
        </div>

        <div className={styles.bottom}>
          <img src="sstteward.png" alt="Steward Humiwat logo" className={styles.logoImg} />
          <p className={styles.copy}>
            © {new Date().getFullYear()} Steward S. Humiwat. Portfolio Website.
          </p>
        </div>
      </div>
    </footer>
  );
};
