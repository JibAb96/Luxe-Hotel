import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";
import styles from "./Hero.module.css";

const Hero = () => {
  const { isSignedIn } = useContext(ProfileContext);

  useEffect(() => {
    // Mark the start of component loading
    performance.mark('hero-start');

    // Preload the image with high fetchpriority
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '../../images/hero-image-TPNG.webp';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

    // Use Intersection Observer to detect when hero section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          performance.mark('hero-visible');
          performance.measure('hero-load', 'hero-start', 'hero-visible');
          observer.disconnect();
        }
      });
    });

    const heroElement = document.querySelector(`.${styles.wrapper}`);
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(preloadLink);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Inline critical background styles for faster initial paint */}
      <style>
        {`
          .${styles.container}::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to right bottom,
              rgba(40, 180, 133, 0.8),
              rgba(69, 93, 88, 0.5)
            );
            z-index: 1;
          }
        `}
      </style>
      
      <div 
        className={styles.container}
        role="banner"
      >
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span>Luxury</span>
            <span>Comfort</span>
          </h1>

          <Link 
            to={isSignedIn ? "/book" : "/signin"}
            className={styles.button}
          >
            Book a Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;