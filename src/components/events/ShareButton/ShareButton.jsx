// src/components/events/ShareButton/ShareButton.jsx
import { useState } from "react";
import { FiShare2, FiCheck } from "react-icons/fi";
import styles from "./ShareButton.module.css";

function ShareButton({ eventId, eventTitle, shareCount = 0, onShare }) {
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(shareCount);

  const shareUrl = `${window.location.origin}/events/${eventId}`;

  const handleShare = async () => {
    // Try native share sheet first (mobile/supported browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          url: shareUrl,
        });
        registerShare();
      } catch (err) {
        // User cancelled the share sheet — don't count it, don't show an error
        if (err.name !== "AbortError") console.error(err);
      }
      return;
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      registerShare();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const registerShare = () => {
    setCount((prev) => prev + 1);
    onShare?.(eventId); // let parent persist this to your backend
  };

  return (
    <button
      type="button"
      className={styles.shareButton}
      onClick={handleShare}
      aria-label="Share this event"
    >
      {copied ? <FiCheck className={styles.icon} /> : <FiShare2 className={styles.icon} />}
      <span className={styles.label}>{copied ? "Link copied" : "Share"}</span>
      {count > 0 && <span className={styles.count}>{count}</span>}
    </button>
  );
}

export default ShareButton;