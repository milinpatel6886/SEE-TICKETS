// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEvents } from "../../../hooks/useEvents";
// import EventGrid from "../../../components/events/EventGrid/EventGrid";
// import HeroCarousel from "../../../components/events/HeroCarousel/HeroCarousel";
// import Footer from "../../../components/Footer/Footer";
// import styles from "./EventsListPage.module.css";

// function EventsListPage() {
//   const { events, isLoading, error } = useEvents();
//   const navigate = useNavigate();

//   const handleEventClick = (event) => {
//     navigate(`/events/${event.id}`);
//   };

//   const featuredEvents = useMemo(
//     () => (events ?? []).filter((event) => event.featured),
//     [events],
//   );

//   return (
//     <>
//       <main className={styles.page}>
//         <div className={styles.inner}>
//           {/* {!isLoading && !error && featuredEvents.length > 0 && (
//           <HeroCarousel events={featuredEvents} />
//         )} */}
//           <h1 className={styles.heading}>Upcoming Events</h1>

//           <EventGrid
//             events={events}
//             isLoading={isLoading}
//             error={error}
//             onEventClick={handleEventClick}
//           />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default EventsListPage;

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPublicEventList } from "../../../services/client/publicEventService";
import { mapEventToCardProps } from "../../../utils/mapEvents";
import EventGrid from "../../../components/events/EventGrid/EventGrid";
import HeroCarousel from "../../../components/events/HeroCarousel/HeroCarousel";
import Footer from "../../../components/Footer/Footer";
import styles from "./EventsListPage.module.css";

function EventsListPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getPublicEventList();
        if (isMounted) {
          setEvents(response?.data?.events ?? []);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleEventClick = (event) => {
    // event here is the mapped card object; raw API event is preserved under .raw
    navigate(`/events/${event.id}`);
  };

  const cardEvents = useMemo(() => events.map(mapEventToCardProps), [events]);

  const featuredEvents = useMemo(
    () => cardEvents.filter((event) => event.badge === "Featured"),
    [cardEvents],
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
            events={cardEvents}
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