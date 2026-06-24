import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMusic,
  FiUsers,
  FiMoreHorizontal,
  FiRotateCcw,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import "./CreateEventStep2.css";

const EVENT_TYPES = [
  { id: "music", icon: FiMusic, label: "Music Event" },
  { id: "workshop", icon: FiUsers, label: "Workshop/Class" },
  { id: "other", icon: FiMoreHorizontal, label: "Other" },
];

const MAX_CATEGORIES = 3;
const TOTAL_STEPS = 5;
const CURRENT_STEP = 2;

function CreateEventStep2() {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState("music");
  const [categories, setCategories] = useState(["House Party"]);
  const [categoryInput, setCategoryInput] = useState("");

  const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

  const addCategory = (raw) => {
    const value = raw.trim();
    if (!value) return;
    if (categories.length >= MAX_CATEGORIES) return;
    if (categories.some((c) => c.toLowerCase() === value.toLowerCase())) return;
    setCategories((prev) => [...prev, value]);
  };

  const handleCategoryKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addCategory(categoryInput);
      setCategoryInput("");
    } else if (e.key === "Backspace" && categoryInput === "" && categories.length > 0) {
      setCategories((prev) => prev.slice(0, -1));
    }
  };

  const removeCategory = (index) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setEventType(null);
    setCategories([]);
    setCategoryInput("");
  };

  const handleBack = () => navigate(-1);

  const canContinue = eventType && categories.length > 0;

  const handleContinue = () => {
    if (!canContinue) return;
    navigate("/events/create-event3", { state: { eventType, categories } });
    console.log("Step 2 data:", { eventType, categories });
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
        <FiMoreHorizontal className="cestep-header-icon" />
        <div>
          <h1 className="cestep-title">Create Your Event</h1>
          <p className="cestep-subtitle">
            Step {CURRENT_STEP} of {TOTAL_STEPS}: Event Type &amp; Category
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
        <div className="cestep2-field-group">
          <h3 className="cestep2-field-label">Event Type</h3>
          <p className="cestep2-field-hint">Select the type of your event.</p>

          <div className="cestep2-type-row">
            {EVENT_TYPES.map((type) => {
              const Icon = type.icon;
              const isSelected = eventType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  className={`cestep2-type-option ${
                    isSelected ? "cestep2-type-option-selected" : ""
                  }`}
                  onClick={() => setEventType(type.id)}
                >
                  <span className="cestep2-type-radio">
                    {isSelected && <span className="cestep2-type-radio-dot" />}
                  </span>
                  <Icon className="cestep2-type-icon" />
                  <span className="cestep2-type-text">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="cestep2-field-group">
          <h3 className="cestep2-field-label">
            Event Category (Select up to {MAX_CATEGORIES})
          </h3>
          <p className="cestep2-field-hint">
            At least one category is required. Comma-separated or select
            from suggestions.
          </p>

          <div className="cestep2-tag-input">
            {categories.map((cat, i) => (
              <span key={cat} className="cestep2-tag">
                {cat}
                <button
                  type="button"
                  className="cestep2-tag-remove"
                  onClick={() => removeCategory(i)}
                  aria-label={`Remove ${cat}`}
                >
                  <FiX />
                </button>
              </span>
            ))}

            {categories.length < MAX_CATEGORIES && (
              <input
                type="text"
                className="cestep2-tag-text-input"
                placeholder={
                  categories.length === 0 ? "e.g. House Party, Live Music" : ""
                }
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={handleCategoryKeyDown}
              />
            )}
          </div>
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

export default CreateEventStep2;