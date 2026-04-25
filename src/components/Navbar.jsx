import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import { navLinks } from '../data/siteData'
import styles from '../styles/Navbar.module.css'

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink className={styles.logo} to="/" onClick={closeMenu}>
          Lawnistry <span>Green</span>
        </NavLink>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label="Toggle light and dark theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
