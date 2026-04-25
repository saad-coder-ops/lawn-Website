import { FaWhatsapp } from 'react-icons/fa6'
import styles from '../styles/FloatingWhatsApp.module.css'

function FloatingWhatsApp() {
  return (
    <a
      className={styles.floating}
      href="https://wa.me/61409680968"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span>Chat With Expert</span>
    </a>
  )
}

export default FloatingWhatsApp
