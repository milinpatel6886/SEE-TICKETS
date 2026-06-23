import EventMeta from '../EventMeta/EventMeta'
import styles from './EventCard.module.css'

export default function EventCard({ event, onClick }) {
  const { title, tagline, image, location, date, priceLabel, badge } = event

  return (
    <article className={styles.card} onClick={() => onClick?.(event)}>
      <div className={styles.posterWrap}>
        <img src={image} alt={title} className={styles.poster} loading="lazy" />
        <div className={styles.overlay} />
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        <span className={styles.watermark}>LOCALITY</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <EventMeta location={location} date={date} priceLabel={priceLabel} badge={badge} />
      </div>
    </article>
  )
}
