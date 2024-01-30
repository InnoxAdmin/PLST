import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
const Hero = () => {
  return (
    <div className={styles.headerWrap} id="home-hero-section">
      <div className={styles.headerContent}>
        <Navbar />
        <div className={styles.headerInnerContent} >
          
          <div className={styles.headerInnerContentheading}>
            Digital Solidarity:{" "}
          </div>
          <div className={styles.headerInnerContentheading}>
            A Crypto Initiative for Palestinian Relief
          </div>
          <div className={styles.headerInnerContentdesc}>
            THE PALICOIN ($PALI) IS A CRYPTO INITIATIVE DEDICATED TO SUPPORTING
            AND PROVIDING RELIEF FOR THE PALESTINIAN COMMUNITY
          </div>
          <div className={styles.headerInnerContentbtn}> Buy $PALI and show your support</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
