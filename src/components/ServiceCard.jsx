import styles from '../styles/ServiceCard.module.css'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <span className={styles.icon}>
        <Icon />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}

export default ServiceCard
