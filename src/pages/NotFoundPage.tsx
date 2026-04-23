import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          Looks like this page doesn't exist. Let's get you back on track.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}