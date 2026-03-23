import React from "react";
import styles from "./About.module.css";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Frontend Developer",
    desc: "I build responsive, pixel-perfect interfaces using React, HTML, and CSS, Wordpress, and Webflow. I care deeply about user experience and clean code.",
    color: "#6c63ff",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "Backend Developer",
    desc: "I have foundational knowledge in backend and I am actively expanding my skills in server-side development.",
    color: "#00d4ff",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    ),
    label: "UI Designer",
    desc: "I design clean, modern interfaces in Figma — focusing on aesthetics, usability, and consistent design.",
    color: "#a855f7",
  },
];

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Who I Am</span>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            A innovative IT student with a love for building things.
          </p>
        </div>

        <div className={styles.body}>
          {/* Profile photo */}
          <div className={styles.photoCol}>
            <div className={styles.photoFrame}>
              <img src="IMG_4816.JPG" alt="Steward Humiwat" className={styles.photo} />
              <div className={styles.photoBorder} />
            </div>
            <div className={styles.photoStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3rd</span>
                <span className={styles.statLabel}>Year IT Student</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>8+</span>
                <span className={styles.statLabel}>Skills</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </div>
            <a href="https://github.com/sstteeward" target="_blank" rel="noreferrer" className={styles.githubBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              View GitHub
            </a>
          </div>

          {/* Cards */}
          <div className={styles.cardsCol}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card} style={{ "--accent": card.color }}>
                <div className={styles.cardIcon} style={{ color: card.color, background: `${card.color}18` }}>
                  {card.icon}
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{card.label}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};