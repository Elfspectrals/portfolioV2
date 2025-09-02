import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import ShareDrinkImage from "../assets/ShareDrink.png";
import Badge from "../components/Badge/Badge";

const HomePagePartThree = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("homepage.partThreeTitle")}</h2>
      <p>{t("homepage.partThreeText")}</p>
      
      {/* SharedDrinks Project */}
      <div className={styles.projectCard}>
        <h3 className={styles.projectTitle}>{t("homepage.sharedDrinks.title")}</h3>
        
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <img
              src={ShareDrinkImage}
              alt={t("homepage.sharedDrinks.imageAlt")}
              className={styles.projectScreenshot}
            />
          </div>
          
          <div className={styles.projectInfo}>
            <p className={styles.projectDescription}>
              {t("homepage.sharedDrinks.description")}
            </p>
            
            <div className={styles.projectBadges}>
              <Badge text="React Native" />
              <Badge text="JavaScript" />
              <Badge text="OpenStreetMap" />
              <Badge text="CocktailAPI" />
            </div>
            
            <div className={styles.projectSummary}>
              <h4>{t("homepage.sharedDrinks.summaryTitle")}</h4>
              <p>{t("homepage.sharedDrinks.summary")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePartThree;
