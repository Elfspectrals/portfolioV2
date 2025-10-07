import jeromeProfilePic from "../assets/jerome.jpg";
import styles from "./HomePage.module.scss";
import Badge from "../components/Badge/Badge";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// tes imports logos
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript-1.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/reactlogo.svg";
import nodeLogo from "../assets/nodejs.svg";
import cypressLogo from "../assets/cypress-1.svg";
import jiraLogo from "../assets/jira-1.svg";
import ghaLogo from "../assets/github-icon.svg"; // GitHub Actions → j'utilise ton github-icon
import sqlLogo from "../assets/mysql-logo-pure.svg"; // SQL → MySQL logo
import mongoLogo from "../assets/mongodb-icon-2.svg";
import dockerLogo from "../assets/docker.svg";
import figmaLogo from "../assets/figma-icon.svg";
import blenderLogo from "../assets/blender.svg";
import threeLogo from "../assets/threej.svg";
import ue5Logo from "../assets/unreal.svg";
import googleLogo from "../assets/google.svg";

interface Technology {
  text: string;
  svgLogo?: string;
}

interface SoftSkill {
  text: string;
  svgLogo?: string;
}

// Tableau technologies
const technologies: Technology[] = [
  { text: "HTML5", svgLogo: htmlLogo },
  { text: "CSS3", svgLogo: cssLogo },
  { text: "JavaScript", svgLogo: jsLogo },
  { text: "TypeScript", svgLogo: tsLogo },
  { text: "React", svgLogo: reactLogo },
  { text: "Node.js", svgLogo: nodeLogo },
  { text: "Cypress", svgLogo: cypressLogo },
  { text: "Jira", svgLogo: jiraLogo },
  { text: "GitHub", svgLogo: ghaLogo },
  { text: "SQL", svgLogo: sqlLogo },
  { text: "MongoDB", svgLogo: mongoLogo },
  { text: "Docker", svgLogo: dockerLogo },
  { text: "Figma", svgLogo: figmaLogo },
  { text: "Blender", svgLogo: blenderLogo },
  { text: "Three.js", svgLogo: threeLogo },
  { text: "Unreal Engine 5", svgLogo: ue5Logo },
  { text: "Google + Gemini", svgLogo: googleLogo },
];

const HomePagePartOne = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  const [softVisible, setSoftVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const techTimer = setTimeout(() => setTechVisible(true), 500);
    const softTimer = setTimeout(() => setSoftVisible(true), 1000);
    
    return () => {
      clearTimeout(techTimer);
      clearTimeout(softTimer);
    };
  }, []);

  // Soft skills with translations
  const softSkills: SoftSkill[] = [
    { text: t("homepage.softSkills.teamwork") },
    { text: t("homepage.softSkills.communication") },
    { text: t("homepage.softSkills.rigor") },
    { text: t("homepage.softSkills.autonomy") },
    { text: t("homepage.softSkills.curiosity") },
    { text: t("homepage.softSkills.productSense") },
  ];

  return (
    <div className={styles.container}>
      <header className={`${styles.hero} ${isVisible ? styles.heroVisible : ''}`}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={jeromeProfilePic}
            alt={t("homepage.avatarAlt")}
            loading="eager"
            width="128"
            height="128"
            decoding="async"
          />
          <div className={styles.avatarGlow} aria-hidden="true"></div>
        </div>

        <div className={styles.titleBlock}>
          <h1 className={styles.heroTitle}>
            <span className={styles.greeting}>{t("homepage.heroGreeting")}</span>
            <span className={`${styles.highlight} ${styles.roleText}`}>
              {t("homepage.heroRole")}
            </span>
          </h1>
          <h3 className={styles.heroSubtitle}>
            {t("homepage.heroSubtitle1")}
            <br />
            {t("homepage.heroSubtitle2")}
          </h3>

          {/* CTA and Social badges row */}
          <div className={styles.ctaRow}>
            <a
              href="#soft-skills"
              className={`${styles.badge} ${styles.ctaBadge}`}
              aria-label={t("homepage.ctaSoftSkillsAria")}
            >
              <span className={styles.label}>
                {t("homepage.ctaSoftSkills")}
              </span>
            </a>

            {/* Social badges */}
            <a
              href="https://www.linkedin.com/in/jerome-neupert/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBadge}
              aria-label="LinkedIn Profile"
            >
              <Badge text="LinkedIn" />
            </a>
            <a
              href="https://github.com/elfspectrals/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBadge}
              aria-label="GitHub Profile"
            >
              <Badge text="GitHub" />
            </a>
          </div>
        </div>
      </header>

      <section className={`${styles.section} ${techVisible ? styles.sectionVisible : ''}`}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleText}>{t("homepage.techTitle")}</span>
          <div className={styles.titleUnderline}></div>
        </h2>
        <ul className={styles.chips} aria-label={t("homepage.techAria")}>
          {technologies.map((tech, index) => (
            <li 
              key={tech.text} 
              role="listitem"
              className={styles.techItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge text={tech.text} svgLogo={tech.svgLogo} />
            </li>
          ))}
        </ul>
      </section>

      {/* Ajout d'un id pour l'ancre */}
      <section className={`${styles.section} ${softVisible ? styles.sectionVisible : ''}`} id="soft-skills">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleText}>{t("homepage.softTitle")}</span>
          <div className={styles.titleUnderline}></div>
        </h2>
        <ul className={styles.chips} aria-label={t("homepage.softAria")}>
          {softSkills.map((skill, index) => (
            <li 
              key={skill.text} 
              role="listitem"
              className={styles.softItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge text={skill.text} svgLogo={skill.svgLogo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePagePartOne;
