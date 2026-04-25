import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'
import styles from '../styles/ServicesPage.module.css'

function ServicesPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <h2>Professional Lawn & Landscape Services</h2>
        <p>
          Built for premium properties that demand clean lines, healthy growth,
          and year-round visual excellence.
        </p>
      </div>
      <SectionHeading
        eyebrow="What We Offer"
        title="Professional services tailored to your landscape goals"
        description="Every service is delivered with premium standards, reliable schedules, and meticulous execution."
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
