import { personal } from '../data/personal'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <p className={styles.copyright}>
          © {year} {personal.name}
        </p>

        <div className={styles.links}>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className={styles.link}
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}