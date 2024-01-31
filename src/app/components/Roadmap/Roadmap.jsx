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
                Setting up our project’s mission, vision, goals and outline. Including website and token development for the people of Palestine.

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
                  Building a community and initiatives around efforts to bring awareness, aid, facilitate banking assistance, and support of the Palestinian civilians affected by the ongoing genocide. 

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
                  Support
                </div>
                <div className={style.rmscRightStepRightDescription}>
                Showing support and aid for Palestinian civilians affected by the ongoing occupation, providing a financial system to civilians in the ongoing war, sending out aid, donations, medical supplies, water, food, and shelter. Providing community that stands with Palestine 🇵🇸.
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
