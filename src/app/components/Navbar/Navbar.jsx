import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarWrap}>
      <div className={styles.navbarBrand}>PALI COIN</div>
      <button className={styles.navbarBtnMobile}>Support</button>
      <div className={styles.navbarItems}>
        <div className={styles.navbarItem}>
          <a href="#home-hero-section" className={styles.navbarLink}>
            Home
          </a>
        </div>
        <div className={styles.navbarItem}>
          {" "}
          <a href="#home-contribution-section" className={styles.navbarLink}>
            Contribution
          </a>
        </div>
        <div className={styles.navbarItem}>
          {" "}
          <a href="#home-roadmap-section" className={styles.navbarLink}>
            Roadmap
          </a>
        </div>
        <div className={styles.navbarItem}>
          {" "}
          <a href="#" className={styles.navbarLink}>
            Whitepaper
          </a>
        </div>
      </div>
      <button className={styles.navbarBtn}>Support</button>
    </div>
  );
};

export default Navbar;
