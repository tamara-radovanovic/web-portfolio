import { motion } from 'motion/react'
import { skills } from '../data/skills';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={styles.section}
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <ul className={styles.skillList}>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
