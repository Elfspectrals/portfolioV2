import jeromeProfilePic from "../assets/jerome.jpg";
import styles from "./HomePage.module.scss";
import Badge from "../components/Badge/Badge";

// tes imports logos
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg"; 
import jsLogo from "../assets/javascript-1.svg";
import tsLogo from "../assets/typescript.svg";
import reactLogo from "../assets/reactlogo.svg";
import nodeLogo from "../assets/nodejs.svg";
import cypressLogo from "../assets/cypress-1.svg";
import jiraLogo from "../assets/jira-1.svg";
import ghaLogo from "../assets/github-icon.svg"; // GitHub Actions → j’utilise ton github-icon
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

// Tableau soft skills
const softSkills: SoftSkill[] = [
  { text: "Esprit d'équipe" },
  { text: "Communication" },
  { text: "Rigueur (QA mindset)" },
  { text: "Autonomie" },
  { text: "Curiosité" },
  { text: "Résolution de problèmes" },
  { text: "Sens du produit" },
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
            Salut, je suis Jérôme —{" "}
            <span className={styles.highlight}>Développeur full-stack</span> &
            créateur d'expériences numériques
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
            <li key={tech.text} role="listitem">
              <Badge text={tech.text} svgLogo={tech.svgLogo} />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Soft skills</h2>
        <ul className={styles.chips} aria-label="Soft skills">
          {softSkills.map((skill) => (
            <li key={skill.text} role="listitem">
              <Badge text={skill.text} svgLogo={skill.svgLogo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePagePartOne;
