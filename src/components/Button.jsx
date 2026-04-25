import { Link } from 'react-router-dom'
import styles from '../styles/Button.module.css'

function Button({ to, children, variant = 'primary', type = 'button' }) {
  if (to) {
    return (
      <Link className={`${styles.button} ${styles[variant]}`} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
}

export default Button
