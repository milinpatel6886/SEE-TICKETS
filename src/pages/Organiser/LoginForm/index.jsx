import { useState } from "react";
import { FiArrowRight, FiInfo, FiSend } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const CHANNELS = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "phone", label: "Phone" },
  { id: "email", label: "Email" },
];

function LoginForm() {
  const navigate = useNavigate();
  const [channel, setChannel] = useState("whatsapp");
  const [value, setValue] = useState("");

  const isEmail = channel === "email";

  const fieldLabel = isEmail ? "Email Address" : "WhatsApp Number";
  const placeholder = isEmail
    ? "Enter your email address"
    : channel === "phone"
      ? "Enter 10-digit mobile"
      : "Enter 10-digit mobile";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    // TODO: wire up actual OTP request
    console.log("Send OTP to:", { channel, value });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">
          <FiArrowRight />
        </div>

        <h1 className="login-title">Login or Signup</h1>
        <p className="login-subtitle">
          Enter your email or phone number to receive an OTP.
        </p>

        <div className="login-channels">
          {CHANNELS.map((c) => (
            <label key={c.id} className="login-channel-option">
              <input
                type="radio"
                name="channel"
                value={c.id}
                checked={channel === c.id}
                onChange={() => setChannel(c.id)}
                className="login-radio"
              />
              <span className="login-radio-dot" />
              <span className="login-channel-label">{c.label}</span>
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field-label-row">
            <label htmlFor="login-input" className="login-field-label">
              {fieldLabel}
            </label>
            <span
              className="login-info-icon"
              title="We'll send a one-time code to verify you"
            >
              <FiInfo />
            </span>
          </div>

          <input
            id="login-input"
            type={isEmail ? "email" : "tel"}
            className="login-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={isEmail ? undefined : 10}
          />

          <button type="submit" className="login-submit-btn">
            <FiSend />
            Send OTP
          </button>
        </form>

        <p className="login-terms-note">
          By continuing, you agree to our{" "}
          <Link to="/legal/termsandconditions" className="login-terms-link">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
