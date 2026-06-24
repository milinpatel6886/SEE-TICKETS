import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../../../hooks/useEvents";
import EventGrid from "../../../components/events/EventGrid/EventGrid";
import HeroCarousel from "../../../components/events/HeroCarousel/HeroCarousel";
import Footer from "../../../components/Footer/Footer";
import styles from "./EventsListPage.module.css";

function EventsListPage() {
  const { events, isLoading, error } = useEvents();
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    navigate(`/events/${event.id}`);
  };

  const featuredEvents = useMemo(
    () => (events ?? []).filter((event) => event.featured),
    [events],
  );

  return (
    <>
      <main className={styles.page}>
        <div className={styles.inner}>
          {/* {!isLoading && !error && featuredEvents.length > 0 && (
          <HeroCarousel events={featuredEvents} />
        )} */}
          <h1 className={styles.heading}>Upcoming Events</h1>

          <EventGrid
            events={events}
            isLoading={isLoading}
            error={error}
            onEventClick={handleEventClick}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventsListPage;
