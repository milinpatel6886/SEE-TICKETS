import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

const LINK_COLUMNS = [
  {
    heading: "SEE Tickets",
    links: [
      { label: "Become an Organizer", to: "/organizer" },
      { label: "Organizer Dashboard", to: "/organizer/dashboard" },
      { label: "List Your Event", to: "/login-form" },
      { label: "Help Center", to: "/help" },
      { label: "Events", to: "/events" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", to: "/legal/termsandconditions" },
      { label: "Privacy Policy", to: "/legal/privacy-policy" },
      { label: "Refund Policy", to: "/legal/refund-policy" },
      { label: "Cookie Policy", to: "/legal/cookie-policy" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Become a Venue Partner", to: "/partners/venues" },
      { label: "Partner Dashboard", to: "/partners/dashboard" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", to: "/facebook", Icon: FaFacebookF },
  { label: "Instagram", to: "/instagram", Icon: FaInstagram },
  { label: "Email", to: "/contact", Icon: FiMail },
  { label: "LinkedIn", to: "/linkedin", Icon: FaLinkedinIn },
  { label: "YouTube", to: "/youtube", Icon: FaYoutube },
  { label: "X", to: "/x", Icon: FaXTwitter },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <Link to="/" className={styles.logo}>
              SEE TICKETS
            </Link>

            <p className={styles.tagline}>
              Discover and book the best local events near you. Low platform
              fees for organizers, zero convenience fees for attendees — just a
              simple, fast way to find what's happening around you.
            </p>

            <h3 className={styles.connectHeading}>Connect With Us</h3>

            <div className={styles.socialRow}>
              {SOCIAL_LINKS.map(({ label, to, Icon }) => (
                <Link
                  key={label}
                  to={to}
                  className={styles.socialIcon}
                  aria-label={label}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.columnsBlock}>
            {LINK_COLUMNS.map((column) => (
              <div key={column.heading} className={styles.column}>
                <h3 className={styles.columnHeading}>{column.heading}</h3>

                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {year} SEE Tickets | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
