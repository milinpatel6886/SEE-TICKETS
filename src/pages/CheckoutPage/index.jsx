import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiMapPin } from "react-icons/fi";
import { useAuth } from "../../context/Authcontext/Authcontext";
import { saveTicketOrder } from "../../utils/ticketStorage";
import AuthModal from "../../components/events/Authmodal/Authmodal";
import AttendeeInfoModal from "../../components/events/Attendeeinfomodal/Attendeeinfomodal";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  const [order, setOrder] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAttendeeModal, setShowAttendeeModal] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("checkoutOrder");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <div className={styles.emptyState}>
        <p>No tickets selected yet.</p>
        <button
          type="button"
          className={styles.backLink}
          onClick={() => navigate("/checkout")}
        >
          {/* <FiArrowLeft /> Back to events */}
        </button>
      </div>
    );
  }

  const {
    eventTitle,
    eventImage,
    eventDate,
    eventVenue,
    lines,
    totalQty,
    totalAmount,
  } = order;
  const convenienceFee = totalAmount > 0 ? Math.round(totalAmount * 0.02) : 0;
  const payable = totalAmount + convenienceFee;

  // Step 1: clicking Proceed to Pay checks auth first.
  const handleProceedToPay = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    setShowAttendeeModal(true);
  };

  // Step 2: once logged in (from the modal), move straight to attendee info.
  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setShowAttendeeModal(true);
  };

  // Step 3: attendee info submitted — save the order and go to My Tickets.
  // (This is where you'd trigger an actual payment flow before saving,
  // once you have a real payment gateway — for now it saves immediately.)
  const handleAttendeesSubmit = (attendees) => {
    saveTicketOrder(user.uid, {
      eventTitle,
      eventImage,
      eventDate,
      eventVenue,
      lines,
      totalQty,
      totalAmount: payable,
      attendees,
    });
    sessionStorage.removeItem("checkoutOrder");
    setShowAttendeeModal(false);
    navigate("/my-tickets");
  };

  return (
    <div className={styles.page}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft /> Back
      </button>

      <div className={styles.layout}>
        {/* Left: event + ticket summary */}
        <div className={styles.summaryCard}>
          <div className={styles.eventBanner}>
            {eventImage ? (
              <img
                src={eventImage}
                alt={eventTitle}
                className={styles.eventImage}
              />
            ) : (
              <div className={styles.eventImageFallback} aria-hidden="true" />
            )}
          </div>

          <div className={styles.eventMeta}>
            <h1 className={styles.eventTitle}>{eventTitle}</h1>
            <div className={styles.metaRow}>
              {eventDate && (
                <span className={styles.metaItem}>
                  <FiCalendar /> {eventDate}
                </span>
              )}
              {eventVenue && (
                <span className={styles.metaItem}>
                  <FiMapPin /> {eventVenue}
                </span>
              )}
            </div>
          </div>

          <div className={styles.divider} />

          <h2 className={styles.sectionLabel}>Order Summary</h2>
          <div className={styles.lineList}>
            {lines.map((line) => (
              <div key={line.id} className={styles.lineRow}>
                <div>
                  <p className={styles.lineName}>{line.name}</p>
                  <p className={styles.lineQty}>Qty x {line.qty}</p>
                </div>
                <span className={styles.lineAmount}>
                  {line.price > 0 ? `₹${line.price * line.qty}` : "Free"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: price breakdown + pay */}
        <div className={styles.priceCard}>
          <h2 className={styles.sectionLabel}>Price Details</h2>

          <div className={styles.priceRow}>
            <span>Tickets ({totalQty})</span>
            <span>₹{totalAmount}</span>
          </div>
          <div className={styles.priceRow}>
            <span>Convenience fee</span>
            <span>₹{convenienceFee}</span>
          </div>

          <div className={styles.priceDivider} />

          <div className={styles.priceRowTotal}>
            <span>Amount Payable</span>
            <span>₹{payable}</span>
          </div>

          <button
            type="button"
            className={styles.payButton}
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>

          <p className={styles.fineprint}>
            Tickets are non-refundable. You'll receive a confirmation by email
            once payment is complete.
          </p>
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      )}

      {showAttendeeModal && (
        <AttendeeInfoModal
          totalQty={totalQty}
          onClose={() => setShowAttendeeModal(false)}
          onSubmit={handleAttendeesSubmit}
        />
      )}
    </div>
  );
}

export default CheckoutPage;
