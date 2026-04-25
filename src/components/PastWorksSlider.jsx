import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import styles from '../styles/PastWorksSlider.module.css'

function PastWorksSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  useEffect(() => {
    if (isPaused || items.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [isPaused, items.length])

  return (
    <section
      className={styles.sliderSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.slider}>
        <button
          type="button"
          onClick={goPrev}
          className={`${styles.control} ${styles.left}`}
          aria-label="Previous past work slide"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item) => (
              <article key={`${item.title}-${item.image}`} className={styles.slide}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className={styles.caption}>{item.title}</div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className={`${styles.control} ${styles.right}`}
          aria-label="Next past work slide"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.dots}>
        {items.map((item, index) => (
          <button
            key={`${item.title}-dot`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
            aria-label={`Go to ${item.title}`}
          />
        ))}
      </div>
    </section>
  )
}

export default PastWorksSlider
