import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiInfo,
  FiImage,
  FiFilm,
  FiRotateCcw,
  FiArrowRight,
} from "react-icons/fi";
import "./CreateEventStep3.css";

const TOTAL_STEPS = 5;
const CURRENT_STEP = 3;

function CreateEventStep3() {
  const navigate = useNavigate();
  const posterInputRef = useRef(null);
  const reelInputRef = useRef(null);

  const [posterFile, setPosterFile] = useState(null);
  const [reelFile, setReelFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventSlug, setEventSlug] = useState("");
  const [location, setLocation] = useState("");

  const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

  const handleSlugChange = (e) => {
    const cleaned = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setEventSlug(cleaned);
  };

  const handleReset = () => {
    setPosterFile(null);
    setReelFile(null);
    setEventName("");
    setEventSlug("");
    setLocation("");
    if (posterInputRef.current) posterInputRef.current.value = "";
    if (reelInputRef.current) reelInputRef.current.value = "";
  };

  const handleBack = () => navigate(-1);

  const canContinue =
    posterFile && eventName.trim() && eventSlug.trim() && location.trim();

  const handleContinue = () => {
    if (!canContinue) return;
    // TODO: persist { posterFile, reelFile, eventName, eventSlug, location }

    navigate("/events/create-event4", {
      state: {
        posterFile,
        reelFile,
        eventName,
        eventSlug,
        location,
      },
    });

    console.log("Step 3 data:", {
      posterFile,
      reelFile,
      eventName,
      eventSlug,
      location,
    });
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
        <FiInfo className="cestep-header-icon" />
        <div>
          <h1 className="cestep-title">Create Your Event</h1>
          <p className="cestep-subtitle">
            Step {CURRENT_STEP} of {TOTAL_STEPS}: Event Basics &amp; Media
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
        <div className="cestep3-upload-row">
          <div className="cestep3-field-group">
            <h3 className="cestep2-field-label">Event Poster</h3>
            <p className="cestep2-field-hint">Recommended 3:4 aspect ratio.</p>

            <button
              type="button"
              className="cestep3-dropzone"
              onClick={() => posterInputRef.current?.click()}
            >
              <FiImage className="cestep3-dropzone-icon" />
              <span className="cestep3-dropzone-text">
                {posterFile ? posterFile.name : "Click to upload poster (3:4)"}
              </span>
              <span className="cestep3-dropzone-note">Recommended: 3/4</span>
            </button>
            <input
              ref={posterInputRef}
              type="file"
              accept="image/*"
              className="cestep3-hidden-input"
              onChange={(e) => setPosterFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="cestep3-field-group">
            <h3 className="cestep2-field-label">Best Reel (Optional)</h3>
            <p className="cestep2-field-hint">
              Short video (Max 30s, 9:16 recommended).
            </p>

            <button
              type="button"
              className="cestep3-dropzone"
              onClick={() => reelInputRef.current?.click()}
            >
              <FiFilm className="cestep3-dropzone-icon" />
              <span className="cestep3-dropzone-text">
                {reelFile ? reelFile.name : "Click to upload reel (9:16)"}
              </span>
              <span className="cestep3-dropzone-note">Recommended: 9/16</span>
            </button>
            <input
              ref={reelInputRef}
              type="file"
              accept="video/*"
              className="cestep3-hidden-input"
              onChange={(e) => setReelFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>

        <div className="cestep3-field-group">
          <h3 className="cestep2-field-label">Event Name</h3>
          <input
            type="text"
            className="cestep3-text-input"
            placeholder="E.g., Grand Community Celebration 2024"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="cestep3-field-group">
          <h3 className="cestep2-field-label">Event URL</h3>
          <p className="cestep2-field-hint">
            This will be your unique event link. Lowercase letters, numbers, and
            hyphens only.
          </p>

          <div className="cestep3-slug-row">
            <span className="cestep3-slug-prefix">seetickets.in/events/</span>
            <input
              type="text"
              className="cestep3-slug-input"
              placeholder="your-unique-event-name"
              value={eventSlug}
              onChange={handleSlugChange}
            />
          </div>
        </div>

        <div className="cestep3-field-group">
          <h3 className="cestep2-field-label">Venue / Location</h3>
          <p className="cestep2-field-hint">
            Start typing to search for a location.
          </p>

          <input
            type="text"
            className="cestep3-text-input"
            placeholder="E.g., Convention Center, Cityville"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
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

export default CreateEventStep3;
