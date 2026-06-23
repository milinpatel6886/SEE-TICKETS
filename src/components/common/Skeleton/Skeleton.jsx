import styles from './Skeleton.module.css'

/**
 * Renders a placeholder card matching EventCard's dimensions,
 * shown while real data is loading.
 */
export default function Skeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.poster} />
      <div className={styles.line} style={{ width: '70%' }} />
      <div className={styles.line} style={{ width: '90%' }} />
      <div className={styles.line} style={{ width: '40%' }} />
    </div>
  )
}
