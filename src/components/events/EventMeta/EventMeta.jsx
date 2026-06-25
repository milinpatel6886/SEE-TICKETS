import { FiMapPin, FiCalendar, FiLock } from "react-icons/fi";
import { formatDate } from "../../../utils/formatDate";
import { truncate } from "../../../utils/truncate";
import styles from "./EventMeta.module.css";

function EventMeta({ location, date, priceLabel, badge }) {
  return (
    <div className={styles.meta}>
      <div className={styles.row}>
        <FiMapPin className={styles.icon} />
        <span className={styles.text}>{truncate(location)}</span>
      </div>

      <div className={styles.row}>
        <FiCalendar className={styles.icon} />
        <span className={styles.text}>{formatDate(date)}</span>
      </div>

      <div className={styles.row}>
        {badge ? (
          <>
            <FiLock className={styles.icon} />
            <span className={styles.badgeText}>{badge}</span>
          </>
        ) : (
          <span className={styles.price}>
            <span className={styles.rupee}></span> {priceLabel}
          </span>
        )}
      </div>
    </div>
  );
}

export default EventMeta;
