import style from "./Contribution.module.css";
import Image from "next/image";
import MedicalSupply from "../../assets/images/medicalsupply.svg";
import ShelterImage from "../../assets/images/shelter.svg";
import WaterBottleImage from "../../assets/images/water.svg";
import RightImage from "../../assets/images/contribright.png";
import RightImageOverlay from "../../assets/images/contribrightoverlay.png";
const Contribution = () => {
  return (
    <div
      className={style.contributionSectionWrap}
      id="home-contribution-section"
    >
      <div className={style.contributionSectionTitle}>Contribution</div>
      <div className={style.contributionSectionHeading}>
        $PALI CONTRIBUTION SO FAR
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
            In response to the ongoing challenges faced by our brothers and
            sisters, we believe that even the smallest contribution from the
            cryptocurrency community can make a significant impact. With a
            commitment to digital solidarity, PLSTN channels funds directly to
            initiatives that aid Palestinian relief efforts, fostering hope and
            rebuilding lives. Join us in transforming concern into meaningful
            change – together, our crypto contributions can make a world of
            difference for Palestine
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
