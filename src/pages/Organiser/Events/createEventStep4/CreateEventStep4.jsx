import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiPlus,
  FiTag,
  FiRotateCcw,
  FiArrowRight,
} from "react-icons/fi";
import "./CreateEventStep4.css";

const TOTAL_STEPS = 5;
const CURRENT_STEP = 4;

function CreateEventStep4() {
  const navigate = useNavigate();
  const [dateSlots, setDateSlots] = useState([]);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [tickets, setTickets] = useState({});

  const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

  const selectedSlot = dateSlots.find((s) => s.id === selectedSlotId) || null;
  const selectedSlotTickets = selectedSlotId
    ? tickets[selectedSlotId] || []
    : [];

  const handleAddDateTime = () => {
    // TODO: open a date/time picker modal — stubbing a placeholder slot for now
    const newSlot = {
      id: Date.now(),
      label: `New slot ${dateSlots.length + 1}`,
    };
    setDateSlots((prev) => [...prev, newSlot]);
    setSelectedSlotId(newSlot.id);
  };

  const handleAddTicket = () => {
    if (!selectedSlotId) return;
    // TODO: open an add-ticket modal — stubbing a placeholder ticket for now
    setTickets((prev) => ({
      ...prev,
      [selectedSlotId]: [
        ...(prev[selectedSlotId] || []),
        { id: Date.now(), name: "New ticket" },
      ],
    }));
  };

  const handleReset = () => {
    setDateSlots([]);
    setSelectedSlotId(null);
    setTickets({});
  };

  const handleBack = () => navigate(-1);

  const hasPrimaryDate = dateSlots.length > 0;
  const canContinue =
    hasPrimaryDate &&
    dateSlots.every((slot) => (tickets[slot.id] || []).length > 0);

  const handleContinue = () => {
    if (!canContinue) return;
    // TODO: persist { dateSlots, tickets } and navigate to step 5
    console.log("Step 4 data:", { dateSlots, tickets });
  };

  return (
    <div className="cestep-page">
      <button
        type="button"
        className="cestep-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FiArrowLeft />
        Dashboard
      </button>

      <div className="cestep-header">
        <FiCalendar className="cestep-header-icon" />
        <div>
          <h1 className="cestep-title">Create Your Event</h1>
          <p className="cestep-subtitle">
            Step {CURRENT_STEP} of {TOTAL_STEPS}: Dates, Times &amp; Tickets
          </p>
        </div>
      </div>

      <div className="cestep-progress-track">
        <div
          className="cestep-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="cestep-card">
        <div className="cestep4-section">
          <div className="cestep4-section-header">
            <div className="cestep4-section-heading-group">
              <FiCalendar className="cestep4-section-icon" />
              <div>
                <h3 className="cestep4-section-title">Event Dates &amp; Times</h3>
                <p className="cestep2-field-hint">
                  Add one or more date/time slots for your event.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="cestep4-action-btn"
              onClick={handleAddDateTime}
            >
              <FiCalendar />
              Add Date &amp; Time
            </button>
          </div>

          {dateSlots.length === 0 ? (
            <>
              <p className="cestep4-empty-text">
                No date/time slots added yet. Click 'Add Date &amp; Time' to
                get started.
              </p>
              <p className="cestep4-error-text">
                Primary event date is required (add at least one date/time
                slot).
              </p>
            </>
          ) : (
            <div className="cestep4-slot-list">
              {dateSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  className={`cestep4-slot-chip ${
                    selectedSlotId === slot.id
                      ? "cestep4-slot-chip-selected"
                      : ""
                  }`}
                  onClick={() => setSelectedSlotId(slot.id)}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <hr className="cestep4-divider" />

        <div className="cestep4-section">
          <div className="cestep4-section-header">
            <div className="cestep4-section-heading-group">
              <FiTag className="cestep4-section-icon" />
              <div>
                <h3 className="cestep4-section-title">
                  Manage Tickets{" "}
                  <span className="cestep4-section-title-muted">
                    for {selectedSlot ? selectedSlot.label : "Select a slot"}
                  </span>
                </h3>
                <p className="cestep2-field-hint">
                  Select a date slot to manage its tickets.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="cestep4-action-btn"
              onClick={handleAddTicket}
              disabled={!selectedSlotId}
            >
              <FiPlus />
              Add Ticket
            </button>
          </div>

          {selectedSlotTickets.length === 0 ? (
            <div className="cestep4-ticket-dropzone-wrap">
              <button
                type="button"
                className="cestep4-ticket-dropzone"
                onClick={handleAddTicket}
                disabled={!selectedSlotId}
              >
                <FiPlus className="cestep4-ticket-dropzone-icon" />
                <span>Add Ticket</span>
              </button>
              {!selectedSlotId && (
                <p className="cestep4-empty-text">
                  Please select a date slot above to manage tickets.
                </p>
              )}
            </div>
          ) : (
            <div className="cestep4-ticket-list">
              {selectedSlotTickets.map((ticket) => (
                <div key={ticket.id} className="cestep4-ticket-row">
                  {ticket.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cestep-footer">
          <button
            type="button"
            className="cestep2-back-arrow-btn"
            onClick={handleBack}
            aria-label="Go back to previous step"
          >
            <FiArrowLeft />
          </button>

          <button
            type="button"
            className="cestep-reset-btn"
            onClick={handleReset}
          >
            <FiRotateCcw />
            Reset
          </button>

          <button
            type="button"
            className="cestep-continue-btn"
            onClick={handleContinue}
            disabled={!canContinue}
          >
            Continue
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventStep4;