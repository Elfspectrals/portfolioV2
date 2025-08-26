import styles from "./HomePage.module.scss";
import videoUE5 from "../assets/gluttonyfighter.mp4";

const HomePagePartTwo = () => {
  return (
    <section className={styles.homepagePartTwo}>
      <h2 className={styles.title}>Gluttony Eater</h2>

      <div className={styles.contentRow}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            aria-label="Gluttony Eater prototype gameplay video"
          >
            <source src={videoUE5} type="video/mp4" />
          </video>
        </div>

        <details className={styles.description} open>
          <summary className={styles.descriptionSummary}>
            Description{" "}
            <span className={styles.chevron} aria-hidden>
              ▾
            </span>
          </summary>
          <div className={styles.descriptionBody}>
            <p>
              <strong>Gluttony Eater</strong> est un{" "}
              <span className={styles.badge}>
                <span className={styles.label}>
                  jeu créé avec Unreal Engine 5
                </span>
              </span>
              {" "}où vous incarnez un combattant qui <em>mange</em> différents
              aliments pour débloquer des super-pouvoirs contextuels. Chaque
              nourriture accorde un bonus temporaire — allant de dashs explosifs
              à des boucliers « estomac de fer » — encourageant les combos
              créatifs et la gestion des ressources en plein combat.
            </p>
            <ul className={styles.bullets}>
              <li>
                Mangez pour gagner en puissance : cumulez les effets et
                choisissez le bon timing pour vos encas en pleine bataille.
              </li>
              <li>
                Compétences situationnelles liées aux types d’aliments
                (mouvement, défense, explosion).
              </li>
              <li>
                Un esprit arcade avec des effets visuels modernes et des
                contrôles réactifs.
              </li>
            </ul>
            <div className={styles.meta}>
              <span className={styles.tag}>#UE5</span>
              <span className={styles.tag}>#IndieDev</span>
              <span className={styles.tag}>#JeuDeCombat</span>
              <span className={styles.tag}>#Prototype</span>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default HomePagePartTwo;
