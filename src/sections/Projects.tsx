import { projects } from '../data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>

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
                {/* liveUrl je opciono — prikazujemo link samo ako postoji */}
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