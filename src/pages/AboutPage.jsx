import SectionHeading from '../components/SectionHeading'
import styles from '../styles/AboutPage.module.css'

function AboutPage() {
  return (
    <section className={styles.wrapper}>
      <SectionHeading
        eyebrow="Who We Are"
        title="A trusted landscaping partner for premium outdoor living"
        description="Lawnistry Green is built on craftsmanship, consistency, and deep horticultural knowledge."
      />

      <div className={styles.grid}>
        <article>
          <h3>Our Mission</h3>
          <p>
            To elevate outdoor spaces through detail-driven lawn and garden care
            that enhances everyday living and long-term property value.
          </p>
        </article>
        <article>
          <h3>Our Vision</h3>
          <p>
            To become the benchmark premium landscaping brand known for quality,
            trust, and transformative design.
          </p>
        </article>
      </div>

      <article className={styles.choice}>
        <h3>Why Choose Us</h3>
        <ul>
          <li>Experienced professionals with a design-first mindset</li>
          <li>Consistent schedules and transparent service communication</li>
          <li>High-quality tools, products, and sustainable practices</li>
          <li>Customized plans aligned with your lifestyle and property goals</li>
        </ul>
      </article>
    </section>
  )
}

export default AboutPage
