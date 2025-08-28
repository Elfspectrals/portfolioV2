import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";

const HomePagePartThree = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2>{t("homepage.partThreeTitle")}</h2>
      <p>{t("homepage.partThreeText")}</p>
    </section>
  );
};

export default HomePagePartThree;
