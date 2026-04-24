import { motion } from 'motion/react'
import { personal } from "../data/personal";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={styles.section}
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
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{personal.location}</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
