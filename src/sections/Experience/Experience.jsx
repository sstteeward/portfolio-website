import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>What I Know</span>
          <h2 className={styles.title}>Skills & Experience</h2>
          <p className={styles.subtitle}>
            Technologies I work with and the experiences that have shaped my journey.
          </p>
        </div>

        <div className={styles.body}>
          {/* Skills grid */}
          <div className={styles.skillsSection}>
            <h3 className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              Tech Stack
            </h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, i) => (
                <div key={i} className={styles.skillCard}>
                  <div className={styles.skillImgWrap}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImg} />
                  </div>
                  <span className={styles.skillName}>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work history */}
          <div className={styles.historySection}>
            <h3 className={styles.sectionLabel}>
              <span className={styles.labelDot} style={{ background: "var(--color-secondary)" }} />
              Work History
            </h3>
            <div className={styles.timeline}>
              {history.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineLine} />
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.orgLogoWrap}>
                        <img
                          src={getImageUrl(item.imageSrc)}
                          alt={item.organisation}
                          className={styles.orgLogo}
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                      <div>
                        <h4 className={styles.role}>{item.role}</h4>
                        <p className={styles.org}>{item.organisation}</p>
                      </div>
                    </div>
                    <div className={styles.dateRange}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {item.startDate} – {item.endDate}
                    </div>
                    <ul className={styles.taskList}>
                      {item.experiences.map((exp, j) => (
                        <li key={j} className={styles.taskItem}>
                          <span className={styles.taskDot} />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};