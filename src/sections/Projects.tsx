import React from 'react'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.section} fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.card}
              style={{ '--card-delay': `${index * 0.15}s` } as React.CSSProperties}
              onAnimationEnd={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.animation = 'none'
              }}
            >

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

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}