import EventCard from "../EventCard/EventCard";
import Skeleton from "../../common/Skeleton/Skeleton";
import styles from "./EventGrid.module.css";

function EventGrid({ events, isLoading, error, onEventClick }) {
  if (error) {
    return (
      <p className={styles.message}>
        Something went wrong loading events. Please try again.
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  if (!events.length) {
    return <p className={styles.message}>No events found.</p>;
  }

  return (
    <div className={styles.grid}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))}
    </div>
  );
}

export default EventGrid;
