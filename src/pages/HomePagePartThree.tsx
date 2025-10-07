import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import ShareDrinkImage from "../assets/ShareDrink.png";
import Badge from "../components/Badge/Badge";
import { useEffect, useState } from "react";

const HomePagePartThree = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.projectsSection} ${isVisible ? styles.sectionVisible : ''}`}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleText}>{t("homepage.partThreeTitle")}</span>
        <div className={styles.titleUnderline}></div>
      </h2>
      <p className={styles.sectionDescription}>{t("homepage.partThreeText")}</p>
      
      {/* SharedDrinks Project */}
      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{t("homepage.sharedDrinks.title")}</h3>
          <div className={styles.projectStatus}>
            <span className={styles.statusBadge}>Projet Personnel</span>
          </div>
        </div>
        
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <div className={styles.imageContainer}>
              <img
                src={ShareDrinkImage}
                alt={t("homepage.sharedDrinks.imageAlt")}
                className={`${styles.projectScreenshot} ${imageLoaded ? styles.imageLoaded : ''}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                decoding="async"
              />
              {!imageLoaded && (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.loadingSpinner}></div>
                </div>
              )}
            </div>
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

            <div className={styles.projectActions}>
              <a href="#" className={styles.actionButton}>
                Voir le code
              </a>
              <a href="#" className={styles.actionButtonSecondary}>
                Détails
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePartThree;
