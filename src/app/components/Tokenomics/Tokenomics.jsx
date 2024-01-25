import Image from "next/image";
import style from "./Tokenomics.module.css";
import Chart from "../../assets/images/chart.svg";

const Tokenomics = () => {
  return (
    <div className={style.tokenomicsSection}>
      <div className={style.tokenomicsSectionTitle}>Distribution</div>
      <div className={style.tokenomicsSectionHeading}>Tokenomics</div>
      <div className={style.tokenomicsSectionBody}>
        <Image
          src={Chart}
          alt=""
          className={style.tokenomicsSectionChartImage}
        />
      </div>
    </div>
  );
};

export default Tokenomics;
