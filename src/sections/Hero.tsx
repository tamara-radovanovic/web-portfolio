import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { personal } from '../data/personal'
import profileImage from '../assets/profile-pic.jpg'
import styles from './Hero.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
}

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left column — text */}
        <div className={styles.content}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className={styles.greeting}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className={styles.name}
          >
            {personal.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className={styles.title}
          >
            {personal.title}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className={styles.actions}
          >
            <a href={personal.cvUrl} download className={styles.btnPrimary}>
              Download CV
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className={styles.links}
          >
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              ↗ GitHub
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              ↗ LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right column — image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className={styles.imageWrapper}
        >
          <img
            src={profileImage}
            alt="Tamara Radovanović"
            className={styles.image}
          />
        </motion.div>

      </div>
    </section>
  )
}