import React from "react";
import styles from "./HomePage.module.scss";

const HomePagePartTwo = () => {
  return (
    <section className={styles.homepagePartTwo}>
      <h2>Animaux vs Zombie</h2>
      <iframe
        src="https://myges.fr/student/planning-calendar"
        title="Animaux vs Zombie"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default HomePagePartTwo;
