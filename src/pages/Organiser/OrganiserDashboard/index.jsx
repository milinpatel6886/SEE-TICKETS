import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FiBarChart2,
  FiCalendar,
  FiCreditCard,
  FiTrendingUp,
  FiCheckSquare,
  FiPlus,
  FiInfo,
} from "react-icons/fi";
import "./Dashboard.css";

const STAT_CARDS = [
  {
    id: "events",
    label: "Total Events Approved",
    value: "0",
    icon: FiCalendar,
  },
  {
    id: "passes",
    label: "Total Passes Sold",
    value: "0",
    icon: FiCreditCard,
    note: "Across all ticketed events",
  },
  {
    id: "earnings",
    label: "Total Earnings",
    value: "₹0.00",
    icon: FiTrendingUp,
    note: "After platform fees",
  },
];

const TABS = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];

function Dashboard({ userName = "thevisualevent", events = [] }) {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredEvents = events.filter((e) => e.status === activeTab);
  const hasAnyEvents = events.length > 0;

  const btnCreateEvent = () => {
    navigate("/events/create-event1");
  };

  return (
    <div className="dash-page">
      <header className="dash-header">
        <h1 className="dash-title">Dashboard</h1>
        <p className="dash-welcome">Welcome back, {userName}!</p>
      </header>

      <section className="dash-section">
        <h2 className="dash-section-heading">
          <FiBarChart2 />
          Overall Performance
        </h2>

        <div className="dash-stat-grid">
          {STAT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="dash-stat-card">
                <div className="dash-stat-top">
                  <span className="dash-stat-label">{card.label}</span>
                  <Icon className="dash-stat-icon" />
                </div>
                <p className="dash-stat-value">{card.value}</p>
                {card.note && (
                  <p className="dash-stat-note">
                    <FiInfo className="dash-stat-note-icon" />
                    {card.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="dash-section">
        <div className="dash-events-header">
          <h2 className="dash-section-heading">
            <FiCheckSquare />
            Your Events
          </h2>

          {/* <button onClick={btnCreateEvent} className="dash-create-btn">
            <FiPlus />
            Create New Event
          </button> */}
        </div>

        <div className="dash-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`dash-tab ${
                activeTab === tab.id ? "dash-tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="dash-empty">
            <p className="dash-empty-message">No events in this category.</p>

            {!hasAnyEvents && (
              <div className="dash-empty-cta">
                <div className="dash-empty-icon">
                  <FiPlus />
                </div>
                <h3 className="dash-empty-heading">
                  Ready to host an amazing event?
                </h3>
                <p className="dash-empty-subtext">
                  Click the button below to list your first event and share it
                  with your community!
                </p>
                <button className="dash-empty-btn" onClick={btnCreateEvent}>
                  <FiPlus />
                  Create Your First Event
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="dash-event-list">
            {filteredEvents.map((event) => (
              <div key={event.id} className="dash-event-row">
                {event.title}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
