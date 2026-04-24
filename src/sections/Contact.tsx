import { personal } from "../data/personal";
import { useInView } from "../hooks/useInView";
import styles from "./Contact.module.css";

export function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.section} fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${personal.email}`} className={styles.value}>
              {personal.email}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Phone</span>
            <a href={`tel:${personal.phone}`} className={styles.value}>
              {personal.phone}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{personal.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
