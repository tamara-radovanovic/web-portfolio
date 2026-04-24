import { personal } from '../data/personal'
import profileImage from '../assets/profile-pic.jpg'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left column — text */}
        <div className={styles.content}>
          <p className={`${styles.greeting} ${styles.animGreeting}`}>Hello, I'm</p>
          <h1 className={`${styles.name} ${styles.animName}`}>{personal.name}</h1>
          <h2 className={`${styles.title} ${styles.animTitle}`}>{personal.title}</h2>

          <div className={`${styles.actions} ${styles.animActions}`}>
            <a
              href={personal.cvUrl}
              download
              className={styles.btnPrimary}
            >
              Download CV
            </a>
            <a
              href="#projects"
              className={styles.btnSecondary}
            >
              View Projects
            </a>
          </div>

          <div className={`${styles.links} ${styles.animLinks}`}>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              ↗ GitHub
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              ↗ LinkedIn
            </a>
          </div>
        </div>

        {/* Right column — image */}
        <div className={`${styles.imageWrapper} ${styles.animImage}`}>
          <img
            src={profileImage}
            alt="Tamara Radovanović"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  )
}