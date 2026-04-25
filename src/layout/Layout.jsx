import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import styles from '../styles/Layout.module.css'

function Layout() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('lawnistry-theme')
    if (stored) {
      return stored
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('lawnistry-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))

  return (
    <div className={styles.page}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default Layout
