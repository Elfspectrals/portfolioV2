import React from 'react'
import styles from './HomePage.module.scss'
import videoUE5 from '../assets/gluttonyfighter.mp4'

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
            Description <span className={styles.chevron} aria-hidden>▾</span>
          </summary>
          <div className={styles.descriptionBody}>
            <p>
              <strong>Gluttony Eater</strong> is an <span className={styles.badge}><span className={styles.label}>Unreal Engine 5</span></span> under-project
              where you play a fighter who <em>eats</em> different aliments to unlock contextual superpowers.
              Each food grants a short-lived boost — from explosive dashes to iron-stomach shields —
              encouraging creative combos and resource management during fights.
            </p>
            <ul className={styles.bullets}>
              <li>Eat to power up: stack effects and time your snacks mid-battle.</li>
              <li>Situational abilities tied to food types (movement, defense, burst).</li>
              <li>Arcade feel with modern VFX and responsive controls.</li>
            </ul>
            <div className={styles.meta}>
              <span className={styles.tag}>#UE5</span>
              <span className={styles.tag}>#IndieDev</span>
              <span className={styles.tag}>#FightingGame</span>
              <span className={styles.tag}>#Prototype</span>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}

export default HomePagePartTwo
