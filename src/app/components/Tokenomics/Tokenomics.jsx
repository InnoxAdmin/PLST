import Image from "next/image";
import style from "./Tokenomics.module.css";
import Palestine from "../../assets/images/freepalestine.png";
import TwitterLogo from '../../assets/images/xlogo.png'; // Updated path


const Tokenomics = () => {
  return (
    <div className={style.tokenomicsSection}>
      <div className={style.tokenomicsSectionBody}>

        <Image
          src={Palestine}
          alt=""
          className={style.tokenomicsSectionFreePalestineImage}
        />
          {/* Twitter Follow Section */}
        <div className={style.twitterFollowSection}>
          <a href="https://twitter.com/PALICOINS" target="_blank" rel="noopener noreferrer">
            <Image
              src={TwitterLogo}
              alt="Follow us on Twitter"
              width={80}   // Adjust size as needed
              height={80}  // Adjust size as needed
              className={style.twitterLogo}
            />
          </a>
          <p className={style.followText}>Follow Us on Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
