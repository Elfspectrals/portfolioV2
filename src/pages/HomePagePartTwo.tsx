import styles from "./HomePage.module.scss";
import videoUE5 from "../assets/gluttonyfighter.mp4";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const HomePagePartTwo = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.homepagePartTwo} ${isVisible ? styles.sectionVisible : ''}`}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleText}>{t("homepage.gameTitle")}</span>
        <div className={styles.titleUnderline}></div>
      </h2>

      <div className={styles.contentRow}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <video
              className={`${styles.video} ${videoLoaded ? styles.videoLoaded : ''}`}
              controls
              playsInline
              preload="metadata"
              aria-label={t("homepage.gameVideoAria")}
              onLoadedData={() => setVideoLoaded(true)}
              poster=""
            >
              <source src={videoUE5} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
            {!videoLoaded && (
              <div className={styles.videoPlaceholder}>
                <div className={styles.loadingSpinner}></div>
                <p>Chargement de la vidéo...</p>
              </div>
            )}
          </div>
        </div>

        <details className={styles.description} open>
          <summary className={styles.descriptionSummary}>
            {t("homepage.gameSummary")}{" "}
            <span className={styles.chevron} aria-hidden>
              ▾
            </span>
          </summary>
          <div className={styles.descriptionBody}>
            <p dangerouslySetInnerHTML={{ __html: t("homepage.gameParagraph") }} />
            <ul className={styles.bullets}>
              <li dangerouslySetInnerHTML={{ __html: t("homepage.gameBullet1") }} />
              <li dangerouslySetInnerHTML={{ __html: t("homepage.gameBullet2") }} />
              <li dangerouslySetInnerHTML={{ __html: t("homepage.gameBullet3") }} />
            </ul>
            <div className={styles.meta}>
              <span className={styles.tag}>{t("homepage.tagUE5")}</span>
              <span className={styles.tag}>{t("homepage.tagIndie")}</span>
              <span className={styles.tag}>{t("homepage.tagFighting")}</span>
              <span className={styles.tag}>{t("homepage.tagPrototype")}</span>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default HomePagePartTwo;
