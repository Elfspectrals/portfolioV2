import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero/Hero';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import styles from "./Home.module.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <Hero t={t} />
      <TechStack />
      <Projects />
      <Contact t={t} />
    </main>
  );
};

export default Home;
