import style from "./Contribution.module.css";
import Image from "next/image";
import MedicalSupply from "../../assets/images/medicalsupply.svg";
import ShelterImage from "../../assets/images/shelter.svg";
import WaterBottleImage from "../../assets/images/water.svg";
import RightImage from "../../assets/images/contribright.png";
import RightImageOverlay from "../../assets/images/contribrightoverlay.png";
import TwitterLogo from '../../assets/images/xlogo.png'; // Import the Twitter logo

const Contribution = () => {
  return (
    <div
      className={style.contributionSectionWrap}
      id="home-contribution-section"
    >
       {/* Twitter Follow Section */}
       <div className={style.twitterFollowSection}>
        <a href="https://twitter.com/PALICOINS" target="_blank" rel="noopener noreferrer">
          <Image
            src={TwitterLogo}
            alt="Follow us on Twitter"
            width={80}   // Adjust size as needed
            height={80}  // Adjust size as needed
          />
        </a>
        <p className={style.followText}>Follow Us on Twitter</p>
      </div>

      <div className={style.contributionSectionHeading}>
        Join the $PALI movement
      </div>
      <div className={style.contributionSectionContent}>
        <div className={style.contributionSecContentLeft}>
          {/* <div className={style.contributionSecContentLeftHeader}>
            <div className={style.contributionTypeItemsleft}>
              <div className={style.contributionTypeItem}>
                <div className={style.contributionTypeItemLeft}>
                  <Image
                    src={MedicalSupply}
                    width={22}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div className={style.contributionTypeItemRight}>
                  <div className={style.contributionTypeItemRightheading}>
                    1,489
                  </div>
                  <div className={style.contributionTypeItemRightsubheading}>
                    Medical supplies
                  </div>
                </div>
              </div>
              <div className={style.contributionTypeItem}>
                <div className={style.contributionTypeItemLeft}>
                  <Image
                    src={ShelterImage}
                    width={62}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div className={style.contributionTypeItemRight}>
                  <div className={style.contributionTypeItemRightheading}>
                    250
                  </div>
                  <div className={style.contributionTypeItemRightsubheading}>
                    Shelters
                  </div>
                </div>
              </div>
            </div>
            <div className={style.contributionTypeItem}>
              <div className={style.contributionTypeItemLeft}>
                <Image
                  src={WaterBottleImage}
                  width={22}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
              <div className={style.contributionTypeItemRight}>
                <div className={style.contributionTypeItemRightheading}>
                  300kg
                </div>
                <div className={style.contributionTypeItemRightsubheading}>
                  food & water
                </div>
              </div>
            </div>
          </div> */}
          <div className={style.contributionSecContentLeftDescription}>
          In response to the ongoing challenges faced by our brothers and sisters during the Israeli occupation, we believe in fostering a cryptocurrency community that can make a significant impact. With a commitment to digital solidarity, and access to banking for the Palestinian people, $PALI helps drive aid to impacted families, community, and support for the Palestinian people. By fostering hope and rebuilding lives, please join us in transforming concern into meaningful change.

Together, our Palestinian crypto community can make a difference for Palestine 🇵🇸 #FreePalestine
          </div>
        </div>
        <div className={style.contributionSecContentRight}>
          <div className={style.contributionSecContentRightImageWrap}>
            <Image
              src={RightImage}
              alt=""
              className={style.contributionSecContentRightImage}
            />
            <Image
              src={RightImageOverlay}
              alt=""
              className={style.contributionSecContentRightImageOverlay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
