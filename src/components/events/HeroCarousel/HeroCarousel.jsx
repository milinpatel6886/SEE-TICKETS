import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import styles from './HeroCarousel.module.css'

function formatDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate)
  if (Number.isNaN(d.getTime())) return isoDate
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
}

/**
 * events: array of event objects from your mock/API data
 * (expects: id, title, tagline, location, date, image)
 */
export default function HeroCarousel({ events }) {
  const navigate = useNavigate()
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (!events || events.length === 0) return null

  const active = events[selectedIndex] ?? events[0]

  return (
    <section className={styles.hero}>
      <div className={styles.bloomA} aria-hidden="true" />
      <div className={styles.bloomB} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title} key={active.id}>{active.title}</h1>
          <p className={styles.meta} key={`${active.id}-meta`}>
            <span>{formatDate(active.date)}</span>
            <span className={styles.dot} aria-hidden="true">•</span>
            <span>{active.location}</span>
          </p>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => navigate(`/events/${active.id}`)}
          >
            Get Tickets
          </button>

          <div className={styles.arrows}>
            <button type="button" className={styles.arrowButton} onClick={scrollPrev} aria-label="Previous event">
              <FiArrowLeft />
            </button>
            <button type="button" className={styles.arrowButton} onClick={scrollNext} aria-label="Next event">
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.track}>
            {events.map((event, i) => (
              <div
                key={event.id}
                className={`${styles.slide} ${i === selectedIndex ? styles.slideActive : ''}`}
                onClick={() => navigate(`/events/${event.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(`/events/${event.id}`)
                }}
              >
                <img src={event.image} alt={event.title} className={styles.slideImage} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Select event">
        {events.map((event, i) => (
          <button
            key={event.id}
            type="button"
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to ${event.title}`}
            className={`${styles.dotButton} ${i === selectedIndex ? styles.dotButtonActive : ''}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  )
}