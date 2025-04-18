import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1>Hi, I'm <span className={styles.fading}>
      <span>S</span><span>t</span><span>e</span><span>w</span><span>a</span><span>r</span><span>d </span>
      <span> </span> <span> S </span><span>.</span> <span> </span><span> H</span><span>u</span><span>m</span><span>i</span><span>w</span><span>a</span><span>t</span>
    </span>
    </h1>
        <p className={styles.description}>
          I'm a 2nd year IT student at Asian College - Dumaguete Campus
        </p>
        <a href="mailto:stewardhumiwat@email.com" className={styles.contactBtn}>
          Email Me
        </a>
      </div>
      <img
        src={getImageUrl("IMG_4816.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};