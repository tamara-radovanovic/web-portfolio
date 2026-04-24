import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={styles.section}
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.accentLine} />
        </div>

        <motion.div variants={gridVariants} className={styles.grid}>
          {projects.map(project => (
            <motion.div key={project.id} variants={cardVariants} className={styles.card}>

              <h3 className={styles.cardTitle}>{project.title}</h3>

              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.tags}>
                {project.techStack.map(tech => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  ↗ GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    ↗ Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}
