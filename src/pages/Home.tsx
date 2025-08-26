import styles from "./Home.module.scss";

import HomePagePartOne from "./HomePagePartOne";
import HomePagePartTwo from "./HomePagePartTwo";
import HomePagePartThree from "./HomePagePartThree";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={`${styles.section}`}>
        <HomePagePartOne />
      </section>

      <section className={`${styles.section} `}>
        <HomePagePartTwo />
      </section>

      <section className={`${styles.section}`}>
        <HomePagePartThree />
      </section>
    </div>
  );
};

export default Home;
