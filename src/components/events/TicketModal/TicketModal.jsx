import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import styles from "./TicketModal.module.css";

function TicketModal({
  eventId,
  eventTitle,
  eventImage,
  eventDate,
  eventVenue,
  ticketTypes,
  onClose,
}) {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const updateQty = (ticketId, delta, max) => {
    setQuantities((prev) => {
      const current = prev[ticketId] || 0;
      const next = Math.min(Math.max(current + delta, 0), max ?? 10);
      return { ...prev, [ticketId]: next };
    });
  };

  const selectedLines = useMemo(() => {
    return ticketTypes
      .map((ticket) => ({ ticket, qty: quantities[ticket.id] || 0 }))
      .filter((line) => line.qty > 0);
  }, [ticketTypes, quantities]);

  const totalQty = selectedLines.reduce((sum, line) => sum + line.qty, 0);
  const totalAmount = selectedLines.reduce(
    (sum, line) => sum + line.qty * line.ticket.price,
    0,
  );

  const handleBuyNow = () => {
    const order = {
      eventId,
      eventTitle,
      eventImage,
      eventDate,
      eventVenue,
      lines: selectedLines.map(({ ticket, qty }) => ({
        id: ticket.id,
        name: ticket.name,
        price: ticket.price,
        qty,
      })),
      totalQty,
      totalAmount,
    };
    sessionStorage.setItem("checkoutOrder", JSON.stringify(order));
    navigate("/checkout");
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ticket-modal-title"
      >
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Select Tickets</p>
            <h2 id="ticket-modal-title" className={styles.eventTitle}>
              {eventTitle}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        <div className={styles.list}>
          {ticketTypes.map((ticket) => {
            const qty = quantities[ticket.id] || 0;
            return (
              <div key={ticket.id} className={styles.ticketRow}>
                <div className={styles.ticketInfo}>
                  <h3 className={styles.ticketName}>{ticket.name}</h3>
                  <p className={styles.ticketDesc}>{ticket.description}</p>
                </div>
                <div className={styles.ticketAction}>
                  <span className={styles.ticketPrice}>
                    {ticket.price > 0 ? <>₹{ticket.price}</> : "Free"}
                  </span>

                  {qty === 0 ? (
                    <button
                      type="button"
                      className={styles.selectButton}
                      onClick={() =>
                        updateQty(ticket.id, 1, ticket.maxPerOrder)
                      }
                    >
                      Select
                    </button>
                  ) : (
                    <div
                      className={styles.stepper}
                      role="group"
                      aria-label={`Quantity for ${ticket.name}`}
                    >
                      <button
                        type="button"
                        className={styles.stepperButton}
                        onClick={() =>
                          updateQty(ticket.id, -1, ticket.maxPerOrder)
                        }
                        aria-label={`Decrease ${ticket.name} quantity`}
                      >
                        <FiMinus />
                      </button>
                      <span className={styles.stepperValue} aria-live="polite">
                        {qty}
                      </span>
                      <button
                        type="button"
                        className={styles.stepperButton}
                        onClick={() =>
                          updateQty(ticket.id, 1, ticket.maxPerOrder)
                        }
                        aria-label={`Increase ${ticket.name} quantity`}
                        disabled={qty >= (ticket.maxPerOrder ?? 10)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {totalQty > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalInfo}>
              <span className={styles.totalLabel}>
                {totalQty} {totalQty === 1 ? "ticket" : "tickets"}
              </span>
              <span className={styles.totalAmount}>₹{totalAmount}</span>
            </div>
            <button
              type="button"
              className={styles.buyButton}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketModal;
