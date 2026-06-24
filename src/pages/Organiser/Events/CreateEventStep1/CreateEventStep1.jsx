import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiSmile,
  FiStar,
  FiBarChart2,
  FiInfo,
  FiRotateCcw,
  FiArrowRight,
} from "react-icons/fi";
import "./CreateEventStep1.css";

const SERVICE_TYPES = [
  {
    id: "free",
    icon: FiSmile,
    title: "Free Event",
    feeLabel: "Platform Fees: 0%",
    description:
      "The event will be registration only and will not have ticketing enabled.",
  },
  {
    id: "exclusive",
    icon: FiStar,
    title: "Exclusive Event",
    feeLabel: "Platform Fees: 3.3% + GST",
    description:
      "Tickets for the event are only available on See Tickets and no other platform.",
  },
  {
    id: "non-exclusive",
    icon: FiBarChart2,
    title: "Non-Exclusive Event",
    feeLabel: "Platform Fees: 9% + GST",
    description:
      "Tickets for the event are available on See Tickets and other platforms.",
  },
];

const TOTAL_STEPS = 5;
const CURRENT_STEP = 1;

function CreateEventStep1() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("free");

  const handleReset = () => setSelected(null);

  const handleContinue = () => {
    if (!selected) return;
    navigate("/events/create-event2", { state: { serviceType: selected } });
  };

  const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

  return (
    <div className="cestep-page">
      <button
        type="button"
        className="cestep-back-btn"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft />
        Dashboard
      </button>

      <div className="cestep-header">
        <FiBarChart2 className="cestep-header-icon" />
        <div>
          <h1 className="cestep-title">Create Your Event</h1>
          <p className="cestep-subtitle">
            Step {CURRENT_STEP} of {TOTAL_STEPS}: Service Type
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
        <div className="cestep-options">
          {SERVICE_TYPES.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                type="button"
                className={`cestep-option ${
                  isSelected ? "cestep-option-selected" : ""
                }`}
                onClick={() => setSelected(option.id)}
              >
                <Icon className="cestep-option-icon" />
                <h3 className="cestep-option-title">{option.title}</h3>
                <p className="cestep-option-fee">{option.feeLabel}</p>
                <p className="cestep-option-desc">{option.description}</p>
              </button>
            );
          })}
        </div>

        <div className="cestep-info-box">
          <p className="cestep-info-row">
            <FiInfo className="cestep-info-icon" />
            Platform fees are charged on the gross amount of ticket price listed
            by you.
          </p>
          <p className="cestep-info-row">
            <FiInfo className="cestep-info-icon" />
            Misinformation will result in a fine of 18% per ticket sold and may
            result in being banned from listing on See Tickets.
          </p>
        </div>

        <div className="cestep-footer">
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
            disabled={!selected}
          >
            Continue
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventStep1;
