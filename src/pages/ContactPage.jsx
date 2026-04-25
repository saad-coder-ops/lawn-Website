import { FaWhatsapp } from 'react-icons/fa6'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import styles from '../styles/ContactPage.module.css'

function ContactPage() {
  return (
    <section className={styles.wrapper}>
      <SectionHeading
        eyebrow="Contact Us"
        title="Let us plan your outdoor transformation"
        description="Share your project details and our team will get back with a tailored recommendation."
      />

      <div className={styles.grid}>
        <form className={styles.form}>
          <label htmlFor="name">
            Name
            <input id="name" name="name" type="text" placeholder="Your full name" />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" placeholder="you@example.com" />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your lawn or landscape requirements"
            />
          </label>
          <Button type="submit">Send Message</Button>
        </form>

        <aside className={styles.details}>
          <h3>Office</h3>
          <p>27 Garden Avenue, Richmond, Melbourne 3121</p>
          <h3>Business Hours</h3>
          <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
          <a
            href="https://wa.me/61409680968"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
          <div className={styles.map}>
            <iframe
              title="Lawnistry Green office location map"
              src="https://www.google.com/maps?q=27+Garden+Avenue,+Richmond,+Melbourne+3121&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=27+Garden+Avenue,+Richmond,+Melbourne+3121"
            target="_blank"
            rel="noreferrer"
            className={styles.mapLink}
          >
            Open in Google Maps
          </a>
        </aside>
      </div>
    </section>
  )
}

export default ContactPage
