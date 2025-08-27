import styles from "./Home.module.scss";

import HomePagePartOne from "./HomePagePartOne";
import HomePagePartTwo from "./HomePagePartTwo";
import HomePagePartThree from "./HomePagePartThree";

const Home = () => {
  return (
    <main className={`${styles.container} container grid-1 gap-5`}>
      <section className={`${styles.section} pad-4`}>
        <HomePagePartOne />
      </section>

      <section className={`${styles.section} pad-4`}>
        <HomePagePartTwo />
      </section>

      <section className={`${styles.section} pad-4`}>
        <HomePagePartThree />
      </section>
    </main>
  );
};

export default Home;
