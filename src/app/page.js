import Contribution from "./components/Contribution/Contribution";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Contribution />
      <Roadmap />
      <Tokenomics />
    </main>
  );
}
