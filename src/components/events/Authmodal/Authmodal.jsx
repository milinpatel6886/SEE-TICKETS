import { useState } from "react";
import { FiX, FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../context/Authcontext/Authcontext";
import styles from "./Authmodal.module.css";

function AuthModal({ onClose, onSuccess }) {
  const { loginWithEmail, registerWithEmail, loginWithGoogle } = useAuth();
  const [mode, setMode] = useState("login"); // 'login' | 'register'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (mode === "register") {
      await registerWithEmail(name, email, password);
    } else {
      await loginWithEmail(email, password);
    }
    setIsSubmitting(false);
    onSuccess?.();
  };

  const handleGoogleClick = async () => {
    setIsSubmitting(true);
    await loginWithGoogle();
    setIsSubmitting(false);
    onSuccess?.();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>

        <h2 id="auth-modal-title" className={styles.title}>
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h2>
        <p className={styles.subtitle}>
          {mode === "login"
            ? "Log in to continue booking your tickets."
            : "Sign up to book tickets and manage your orders."}
        </p>

        <button
          type="button"
          className={styles.googleButton}
          onClick={handleGoogleClick}
          disabled={isSubmitting}
        >
          <FcGoogle className={styles.googleIcon} />
          Continue with Google
        </button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        <form className={styles.form} onSubmit={handleEmailSubmit}>
          {mode === "register" && (
            <label className={styles.field}>
              <FiUser className={styles.fieldIcon} />
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </label>
          )}

          <label className={styles.field}>
            <FiMail className={styles.fieldIcon} />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <FiLock className={styles.fieldIcon} />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </label>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Please wait…"
              : mode === "login"
                ? "Log In"
                : "Create Account"}
          </button>
        </form>

        <p className={styles.switchModeText}>
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className={styles.switchModeButton}
                onClick={() => setMode("register")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className={styles.switchModeButton}
                onClick={() => setMode("login")}
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
