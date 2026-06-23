import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useEvent } from "../../hooks/useEvents";
import EventMeta from "../../components/events/EventMeta/EventMeta";
import EventInfoSection from "../../components/events/Eventinfosection/Eventinfosection";
import ArtistCard from "../../components/events/ArtistCard/ArtistCard";
import ArtistsCard from "../../components/events/ArtistsCard/ArtistsCard";
import TicketModal from "../../components/events/TicketModal/TicketModal";
import styles from "./EventDetailsPage.module.css";

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { event, isLoading, error } = useEvent(id);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  if (isLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.message}>Loading event…</p>
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.message}>We couldn't find that event.</p>
          <Link to="/" className={styles.backLink}>
            <FiArrowLeft /> Back to events
          </Link>
        </div>
      </main>
    );
  }

  const {
    title,
    tagline,
    image,
    location,
    date,
    priceLabel,
    badge,
    description,
    guides,
    terms,
    artists,
    ticketTypes,
  } = event;

  return (
    <main className={styles.page}>
      <div className={styles.banner}>
        <img src={image} alt={title} className={styles.bannerImage} />
        <div className={styles.bannerOverlay} />

        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>

        <div className={styles.bannerContent}>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>

      <div className={styles.inner}>
        {/* <EventMeta
          location={location}
          date={date}
          priceLabel={priceLabel}
          badge={badge}
        /> */}

        <EventInfoSection
          description={description}
          guides={guides}
          location={location}
          terms={terms}
        />

        <ArtistsCard artists={artists} ArtistCard={ArtistCard} />

        {/* Spacer so content isn't hidden behind the sticky CTA */}
        <div className={styles.ctaSpacer} />
      </div>

      <div className={styles.ctaBar}>
        <button
          type="button"
          className={styles.ctaButton}
          onClick={() => setIsTicketModalOpen(true)}
        >
          {badge ? "Request Invite" : "Book Now"}
        </button>
      </div>

      {isTicketModalOpen && (
        <TicketModal
          eventId={id}
          eventTitle={title}
          eventImage={image}
          eventDate={date}
          eventVenue={location}
          ticketTypes={ticketTypes}
          onClose={() => setIsTicketModalOpen(false)}
        />
      )}
    </main>
  );
}

export default EventDetailsPage;