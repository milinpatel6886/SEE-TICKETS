import styles from './Button.module.css'

export default function Button({ children, onClick, variant = 'primary', icon, ...rest }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} {...rest}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
