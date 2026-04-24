import { personal } from '../data/personal'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.section} fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.grid}>

          {/* Left column - bio and education */}
          <div>
            <p className={styles.bio}>{personal.bio}</p>

            <div className={styles.timelineSection}>
              <h3 className={styles.timelineSectionTitle}>Education</h3>
              {personal.education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <p className={styles.timelineTitle}>{edu.degree}</p>
                  <p className={styles.timelineCompany}>{edu.institution}</p>
                  <p className={styles.timelinePeriod}>
                    {edu.period} · {edu.location}
                  </p>
                  {edu.thesis && (
                    <p className={styles.thesis}>
                      Thesis: "{edu.thesis}"
                    </p>
                  )}
                  <p className={styles.description}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right column - experience */}
          <div>
            <div className={styles.timelineSection}>
              <h3 className={styles.timelineSectionTitle}>Experience</h3>
              {personal.experience.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <p className={styles.timelineTitle}>{exp.title}</p>
                  <p className={styles.timelineCompany}>{exp.company}</p>
                  <p className={styles.timelinePeriod}>
                    {exp.period} · {exp.location}
                  </p>
                  <ul className={styles.timelineList}>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}