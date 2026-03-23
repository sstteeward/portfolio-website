import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? "108,99,255" : "0,212,255";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Ambient blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.content}>
        <div className={styles.textSide}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </div>

          <h1 className={styles.heading}>
            Hi, I'm{" "}
            <span className={styles.gradientName}>
              Steward S. Humiwat
            </span>
          </h1>

          <p className={styles.subtitle}>
            IT Student · Frontend Developer · UI Designer
          </p>

          <p className={styles.description}>
            A passionate 3rd-year IT student at{" "}
            <span className={styles.highlight}>Asian College – Dumaguete Campus</span>,
            crafting clean and modern digital experiences with React, HTML, CSS, Wordpress, and more.
          </p>

          <div className={styles.actions}>
            <a href="mailto:stewardhumiwat@gmail.com" className={styles.primaryBtn}>
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              View Work
            </a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/sstteeward" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/steward-humiwat-a7a324334/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.facebook.com/steward.humiwat" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageRing} />
            <img
              src="IMG_4816.JPG"
              alt="Steward S. Humiwat"
              className={styles.photo}
            />
            <div className={styles.imageGlow} />
          </div>

          {/* Floating cards */}
          <div className={styles.floatCard1}>
            <span className={styles.floatIcon}>⚡</span>
            <span>React Developer</span>
          </div>
          <div className={styles.floatCard2}>
            <span className={styles.floatIcon}>🎨</span>
            <span>UI Designer</span>
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down">
        <div className={styles.scrollDot} />
      </a>
    </section>
  );
};