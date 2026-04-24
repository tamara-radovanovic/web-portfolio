import { skills } from '../data/skills';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

export function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.section} fade-in-section ${inView ? 'is-visible' : ''}`}
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
    </section>
  );
}
