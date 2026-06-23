import styles from './Badge.module.css'

export default function Badge({ children, icon }) {
  return (
    <span className={styles.badge}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
