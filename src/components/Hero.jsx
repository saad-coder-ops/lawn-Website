import Button from './Button'
import heroLawn from '../assets/hero-lawn.png'
import styles from '../styles/Hero.module.css'

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(20, 55, 32, 0.5), rgba(20, 55, 32, 0.45)), url(${heroLawn})`,
      }}
    >
      <div className={styles.overlay}>
        <p className={styles.kicker}>Luxury Lawn & Garden Care</p>
        <h1>Transforming Outdoor Spaces Into Premium Green Statements</h1>
        <p className={styles.text}>
          Lawnistry Green delivers high-end lawn care, elegant landscaping, and
          detail-focused maintenance for homes and commercial spaces.
        </p>
        <div className={styles.actions}>
          <Button to="/contact">Contact Us</Button>
          <Button to="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
        <div className={styles.badges}>
          <span>Licensed & Insured Team</span>
          <span>Premium Equipment</span>
          <span>Eco-Smart Treatments</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
