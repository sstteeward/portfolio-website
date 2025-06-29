import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <a className={styles.title} href="/">
          <img src="sstteward.png" alt="" />
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:stewardhumiwat@gmail.com">stewardhumiwat@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/steward-humiwat-a7a324334/">Steward S. Humiwat</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sstteeward">sstteeward</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("social-facebook-box-white-icon.png")} alt="Facebook icon" />
          <a href="https://www.facebook.com/steward.humiwat">Steward Sarong Humiwat</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("instagram-icon.png")} alt="IG icon" />
          <a href="https://www.instagram.com/iring__sungkaban/">iring__sungkaban</a>
        </li>
      </ul>
    </footer>
  );
};