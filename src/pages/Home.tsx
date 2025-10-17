import { useTranslation } from "react-i18next";
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import ProjectsAndExtensions from "../components/ProjectsAndExtensions/ProjectsAndExtensions";
import Contact from "../components/Contact/Contact";
import styles from "./Home.module.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <Hero t={t} />
      <TechStack />
      <ProjectsAndExtensions />
      <Contact />
    </main>
  );
};

export default Home;
