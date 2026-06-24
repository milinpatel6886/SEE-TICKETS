import React, { useState } from "react";
import "./HelpCenter.css";

import {
  FiTag,
  FiZap,
  FiUser,
  FiCalendar,
  FiShield,
  FiSearch,
  FiMessageCircle,
  FiChevronRight,
  FiCrosshair,
} from "react-icons/fi";

import ScrollToTopButton from "../../../../components/events/ScrollToTopButton/ScrollToTopButton";

const categories = [
  {
    id: "ticketing",
    Icon: FiTag,
    title: "Ticketing & Booking",
    description:
      "Everything about finding events, booking tickets, and understanding your passes.",
    articles: [
      "How to Buy Tickets",
      "Understanding Multi-Day and Season Passes",
      "Physical Pass Delivery",
      "How to Plan Your Event with Friends",
    ],
  },
  {
    id: "platform",
    Icon: FiZap,
    title: "Platform Features",
    description: "Learn how to get the most out of Locality features.",
    articles: [
      "Feel the Vibe with Spotify Playlists",
      "Sharing Your Public Profile Link",
      "Smart Event Discovery & Personal Vibe Recommendations",
    ],
  },
  {
    id: "profiles",
    Icon: FiUser,
    title: "Profiles & Connections",
    description:
      "Managing your profile, Loop in requests, and privacy settings.",
    articles: [
      "What is 'Loop In' and How Does It Work?",
      "Navigating the Social Strip: Requests, Circles & Suggestions",
      "Managing Connections: Loop Out, Block & Share",
      "Privacy Breakdown: What is Public vs. Private?",
    ],
  },
  {
    id: "organizers",
    Icon: FiCalendar,
    title: "For Organizers",
    description:
      "Best practices for listing events, using PassLink, and promoting your profile.",
    articles: [
      "How to Get Your Event Verified Quickly",
      "PassLink: VIP & Sponsor Ticket Management",
      "Understanding Platform Fees: Exclusive vs. Non-Exclusive",
    ],
  },
  {
    id: "safety",
    Icon: FiShield,
    title: "Safety & Community",
    description:
      "Our commitments to a safe, respectful, and genuine local environment.",
    articles: [
      "Locality Community Guidelines",
      "How to Report Violations and Block Users",
    ],
  },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? categories
        .map((cat) => ({
          ...cat,
          articles: cat.articles.filter((a) =>
            a.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter(
          (cat) =>
            cat.articles.length > 0 ||
            cat.title.toLowerCase().includes(query.toLowerCase()),
        )
    : categories;

  return (
    <div className="hc-root">
      <div className="hc-container">
        {/* Header */}
        <header className="hc-header">
          <div className="hc-logo" aria-hidden="true">
            <FiCrosshair size={28} strokeWidth={1.5} />
          </div>
          <h1 className="hc-title">Locality Help Center</h1>
          <p className="hc-subtitle">
            Find answers to common questions or{" "}
            <a href="#contact" className="hc-link">
              get in touch with our support team.
            </a>
          </p>
        </header>

        {/* Search */}
        <div className="hc-search-wrap">
          <FiSearch className="hc-search-icon" size={15} aria-hidden="true" />
          <input
            className="hc-search"
            type="search"
            placeholder='Search for answers… (e.g., "tickets", "season pass", "payment")'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search help articles"
          />
        </div>

        {/* Category Grid */}
        <div className="hc-grid">
          {filtered.map(({ id, Icon, title, description, articles }) => (
            <div className="hc-card" key={id}>
              <div className="hc-card-header">
                <span className="hc-card-icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="hc-card-title">{title}</h2>
                  <p className="hc-card-desc">{description}</p>
                </div>
              </div>
              <ul className="hc-article-list">
                {articles.map((article) => (
                  <li key={article}>
                    <a href="#article" className="hc-article-link">
                      {article}
                      <FiChevronRight className="hc-article-arrow" size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <section className="hc-cta-section">
          <p className="hc-cta-heading">Can't find what you're looking for?</p>
          <p className="hc-cta-sub">
            Our support team is here to help you with any issue you might be
            facing.
          </p>
          <a href="#contact" className="hc-btn hc-btn-primary" id="contact">
            <FiMessageCircle size={14} strokeWidth={2} />
            Contact Support
          </a>
        </section>

        {/* Organizer CTA */}
        <section className="hc-cta-section">
          <p className="hc-cta-heading">Are you an event organizer?</p>
          <p className="hc-cta-sub">
            Find in-depth articles and guides specifically for managing your
            events.
          </p>
          <a href="#organizer" className="hc-btn hc-btn-secondary">
            <FiCalendar size={14} strokeWidth={2} />
            Go to Organizer Help Center
          </a>
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
