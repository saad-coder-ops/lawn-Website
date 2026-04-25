import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.brand}>Lawnistry Green</h3>
          <p className={styles.copy}>
            Premium lawn care and landscape transformation for modern outdoor
            living.
          </p>
          <a
            className={styles.contactMeta}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@kittensassociations.com.au"
            target="_blank"
            rel="noreferrer"
          >
            info@kittensassociations.com.au
          </a>
          <a className={styles.contactMeta} href="tel:+61409680968">
            +61 409 680 968
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Office Timings</h4>
          <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <p className={styles.bottom}>© 2016 Lawnistry Green.</p>
    </footer>
  )
}

export default Footer
