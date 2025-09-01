import styles from "./HomePage.module.scss";
import videoUE5 from "../assets/gluttonyfighter.mp4";
import { useTranslation } from "react-i18next";

const HomePagePartTwo = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.homepagePartTwo}>
      <h2 className={styles.title}>{t("homepage.gameTitle")}</h2>

      <div className={styles.contentRow}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            aria-label={t("homepage.gameVideoAria")}
          >
            <source src={videoUE5} type="video/mp4" />
          </video>
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
