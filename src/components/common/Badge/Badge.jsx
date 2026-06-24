import styles from "./Badge.module.css";

function Badge({ children, icon }) {
  return (
    <span className={styles.badge}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
