import React from "react";
import jeromeProfilePic from "../assets/jerome.jpg";
import styles from "./HomePage.module.scss";

const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Cypress",       // CV
  "Jira",          // CV
  "GitHub Actions" // CV
];

const softSkills = [
  "Esprit d'équipe",
  "Communication",
  "Rigueur (QA mindset)",
  "Autonomie",
  "Curiosité",
  "Résolution de problèmes",
  "Sens du produit"
];

const HomePagePartOne = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <img
          className={styles.avatar}
          src={jeromeProfilePic}
          alt="Portrait de Jérôme Neupert"
          width={240}
          height={240}
          loading="eager"
        />

        <div className={styles.titleBlock}>
          <h1>
            Salut, je suis Jérôme — <span className={styles.highlight}>Développeur full-stack</span> & créateur d'expériences numériques
          </h1>
          <h3>
            Vous retrouverez ici certains de mes projets et réalisations.
            <br />
            Je vous laisse vous amuser en découvrant mon portfolio !
          </h3>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Technologies que je maîtrise</h2>
        <ul className={styles.chips} aria-label="Technologies">
          {technologies.map((tech) => (
            <li key={tech} className={styles.chip} role="listitem">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Soft skills</h2>
        <ul className={styles.chips} aria-label="Soft skills">
          {softSkills.map((skill) => (
            <li key={skill} className={styles.chip} role="listitem">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePagePartOne;
