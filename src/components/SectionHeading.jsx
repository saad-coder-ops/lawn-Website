import styles from '../styles/SectionHeading.module.css'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className={styles.heading}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  )
}

export default SectionHeading
