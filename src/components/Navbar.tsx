import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          TR
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={styles.themeBtn}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`flex md:hidden ${styles.menuBtn}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`flex md:hidden ${styles.mobileMenu}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className={styles.mobileThemeBtn}
          >
            {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
          </button>
        </div>
      )}
    </header>
  )
}