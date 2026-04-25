import Hero from '../components/Hero'
import Button from '../components/Button'
import PastWorksSlider from '../components/PastWorksSlider'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import {
  pastWorks,
  premiumStats,
  processSteps,
  services,
  showcaseLawns,
  testimonials,
} from '../data/siteData'
import styles from '../styles/HomePage.module.css'

function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.statsStrip}>
        {premiumStats.map((stat) => (
          <article key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="About Lawnistry"
          title="Premium care for every square meter of your outdoor space"
          description="We combine horticultural expertise with modern styling to deliver clean, elevated, and lasting landscape outcomes."
        />
        <div className={styles.introCard}>
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful professional lawn design"
          />
          <div>
            <h3>Designed to Impress. Maintained to Last.</h3>
            <p>
              From private villas to contemporary family homes, Lawnistry Green
              delivers immaculate finishes and healthy green spaces that look
              refined all year.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Past Works"
          title="See real projects completed by Lawnistry Green"
          description="Swipe through recent installations and landscape upgrades completed for our clients."
        />
        <PastWorksSlider items={pastWorks} />
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Our Services"
          title="Crafted solutions for lawns, gardens, and exterior spaces"
        />
        <div className={styles.grid}>
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Beautiful Lawns"
          title="Recent outdoor transformations"
        />
        <div className={styles.showcase}>
          {showcaseLawns.map((lawn) => (
            <article key={lawn.title} className={styles.showcaseCard}>
              <img src={lawn.image} alt={lawn.title} loading="lazy" />
              <div>
                <h4>{lawn.title}</h4>
                <span>{lawn.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Before & After"
          title="See the Lawnistry Green transformation difference"
        />
        <div className={styles.comparePanel}>
          <article>
            <img
              src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80"
              alt="Lawn after professional transformation"
            />
            <span>After: Structured, dense, healthy lawn finish</span>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=1200&q=80"
              alt="Lawn before renovation work"
            />
            <span>Before: Uneven grass and low visual appeal</span>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Our Method"
          title="A premium process that keeps quality consistent"
        />
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <article key={step.title} className={styles.processCard}>
              <strong>0{index + 1}</strong>
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by homeowners who expect excellence"
        />
        <div className={styles.testimonials}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.testimonial}>
              <p>"{item.quote}"</p>
              <h4>{item.name}</h4>
              <span>{item.location}</span>
            </article>
          ))}
        </div>
        <div className={styles.ctaPanel}>
          <h3>Ready for a premium outdoor upgrade?</h3>
          <p>
            Book a consultation and get a custom lawn and landscape strategy for
            your property.
          </p>
          <div>
            <Button to="/contact">Book Consultation</Button>
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
