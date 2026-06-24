import styles from "./Skeleton.module.css";

function Skeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.poster} />
      <div className={styles.line} style={{ width: "70%" }} />
      <div className={styles.line} style={{ width: "90%" }} />
      <div className={styles.line} style={{ width: "40%" }} />
    </div>
  );
}

export default Skeleton;
