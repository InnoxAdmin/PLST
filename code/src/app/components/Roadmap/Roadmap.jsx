"use client";
import { useState } from "react";
import style from "./Roadmap.module.css";
import LeftImage from "../../assets/images/roadmapleft.svg";
import Image from "next/image";

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState();
  return (
    <div className={style.roadmapSectionWrap} id="home-roadmap-section">
      <div className={style.roadmapSectionTitle}>Our Plan</div>
      <div className={style.roadmapSectionHeading}>$PALI ROADMAP</div>
      <div className={style.roadmapSectionContent}>
        <div className={style.rmsContentLeft}>
          <Image src={LeftImage} alt="" className={style.rmsContentLeftImg} />
        </div>
        <div className={style.rmsContentRight}>
          <div
            className={style.rmscRightSteps}
            onMouseLeave={() => setActiveStep(0)}
          >
            <div
              className={`${style.rmscRightStep} ${
                activeStep === 1 ? style.rmscRightStepActive : ""
              }`}
              onMouseEnter={() => setActiveStep(1)}
            >
              {" "}
              <div className={style.rmscRightStepLeft}>Step 1</div>
              <div className={style.rmscRightStepRight}>
                <div className={style.rmscRightStepRightHeading}>
                  Planning & Implementation of $PALI coin{" "}
                </div>
                <div className={style.rmscRightStepRightDescription}>
                  Setting up project’s mission, vision, goals and project
                  outline. Including website adn token development
                </div>
              </div>
            </div>
            <div
              className={`${style.rmscRightStep} ${
                activeStep === 2 ? style.rmscRightStepActive : ""
              }`}
              onMouseEnter={() => setActiveStep(2)}
            >
              {" "}
              <div className={style.rmscRightStepLeft}>Step 2</div>
              <div className={style.rmscRightStepRight}>
                <div className={style.rmscRightStepRightHeading}>
                  Awareness Creation
                </div>
                <div className={style.rmscRightStepRightDescription}>
                  Community building process and initiating marketing efforts to
                  bring awareness and support to the project
                </div>
              </div>
            </div>
            <div
              className={`${style.rmscRightStep} ${
                activeStep === 3 ? style.rmscRightStepActive : ""
              }`}
              onMouseEnter={() => setActiveStep(3)}
            >
              {" "}
              <div className={style.rmscRightStepLeft}>Step 3</div>
              <div className={style.rmscRightStepRight}>
                <div className={style.rmscRightStepRightHeading}>
                  Planning Donations and Logistics with Partners
                </div>
                <div className={style.rmscRightStepRightDescription}></div>
              </div>
            </div>
            <div
              className={`${style.rmscRightStep} ${
                activeStep === 4 ? style.rmscRightStepActive : ""
              }`}
              onMouseEnter={() => setActiveStep(4)}
            >
              {" "}
              <div className={style.rmscRightStepLeft}>Step 4</div>
              <div className={style.rmscRightStepRight}>
                <div className={style.rmscRightStepRightHeading}>
                  Sending out donations to set partners
                </div>
                <div className={style.rmscRightStepRightDescription}>
                  Sending medical supplies, water, food and shelter.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
