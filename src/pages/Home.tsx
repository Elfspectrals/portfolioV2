import styles from "./Home.module.scss";

import HomePagePartOne from "./HomePagePartOne";
import HomePagePartTwo from "./HomePagePartTwo";
// import HomePagePartThree from "./HomePagePartThree";

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.snapSection}>
        <HomePagePartOne />
      </section>
      <section className={styles.snapSection}>
        <HomePagePartTwo />
      </section>
      {/* <section className={styles.snapSection}>
        <HomePagePartThree />
      </section> */}
    </main>
  );
};

export default Home;
