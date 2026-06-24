import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiShare2, FiCheck } from "react-icons/fi";
import { useEvent } from "../../../hooks/useEvents";
import EventMeta from "../../../components/events/EventMeta/EventMeta";
import EventInfoSection from "../../../components/events/Eventinfosection/Eventinfosection";
import ArtistCard from "../../../components/events/ArtistCard/ArtistCard";
import ArtistsCard from "../../../components/events/ArtistsCard/ArtistsCard";
import TicketModal from "../../../components/events/TicketModal/TicketModal";
import styles from "./EventDetailsPage.module.css";

const SCROLL_THRESHOLD = 280;

function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { event, isLoading, error } = useEvent(id);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [shareCount, setShareCount] = useState(0);
  const [justCopied, setJustCopied] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const stored = Number(localStorage.getItem(`shareCount:${id}`)) || 0;
    setShareCount(stored);
  }, [id]);

  // Show the sticky CTA bar once the user scrolls past the threshold
  useEffect(() => {
    const handleScroll = () => {
      setShowCta(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async (title, url) => {
    const shareData = {
      title,
      text: `Check out ${title}`,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 2000);
      }

      setShareCount((prev) => {
        const next = prev + 1;
        localStorage.setItem(`shareCount:${id}`, String(next));
        return next;
      });
    } catch (err) {
      if (err?.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  };

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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

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

        <button
          type="button"
          className={styles.shareButton}
          onClick={() => handleShare(title, shareUrl)}
          aria-label="Share this event"
        >
          {justCopied ? <FiCheck /> : <FiShare2 />}
          {shareCount > 0 && (
            <span className={styles.shareCount}>{shareCount}</span>
          )}
        </button>

        {/* <div className={styles.bannerContent}>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          <h1 className={styles.title}>{title}</h1>
        </div> */}

        <div className={styles.bannerContent}>
          <div>
            {tagline && <p className={styles.tagline}>{tagline}</p>}
            <h1 className={styles.title}>{title}</h1>
          </div>

          <button
            type="button"
            className={`${styles.titleCtaButton} ${
              showCta ? styles.titleCtaHidden : ""
            }`}
            onClick={() => setIsTicketModalOpen(true)}
          >
            {badge ? "Request Invite" : "Book Now"}
          </button>
        </div>
      </div>

      <div className={styles.inner}>
        <EventInfoSection
          description={description}
          guides={guides}
          location={location}
          terms={terms}
        />

        <ArtistsCard artists={artists} ArtistCard={ArtistCard} />

        {/* Spacer so content isn't hidden behind the sticky CTA once visible */}
        <div className={styles.ctaSpacer} />
      </div>

      <div
        className={`${styles.ctaBar} ${showCta ? styles.ctaBarVisible : ""}`}
      >
        <div className={styles.ctaPriceBlock}>
          <span className={styles.ctaPriceLabel}>Starting from</span>
          <span className={styles.ctaPriceValue}>{priceLabel}</span>
        </div>

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
