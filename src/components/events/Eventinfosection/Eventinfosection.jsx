import { useState } from 'react'
import { FiClock, FiUsers, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { PiCarSimple, PiTShirt } from 'react-icons/pi'
import styles from './EventInfoSection.module.css'

const ICONS = {
  clock: FiClock,
  users: FiUsers,
  parking: PiCarSimple,
  shirt: PiTShirt,
}

const DESCRIPTION_PREVIEW_LENGTH = 140

function GuideIcon({ name }) {
  const Icon = ICONS[name] ?? FiUsers
  return <Icon />
}

function AboutCard({ description }) {
  const [expanded, setExpanded] = useState(false)
  if (!description) return null

  const isLong = description.length > DESCRIPTION_PREVIEW_LENGTH
  const preview = isLong ? description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd() : description

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>
        <span className={styles.accentBar} aria-hidden="true" />
        About the Event
      </h2>
      <p className={styles.bodyText}>
        {expanded || !isLong ? description : `${preview}…`}
      </p>
      {isLong && (
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  )
}

function GuideCard({ guides, maxStatic = 3 }) {
  if (!guides || guides.length === 0) return null
  const isScrollable = guides.length > maxStatic

  return (
    <section className={styles.card}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>
          <span className={styles.accentBar} aria-hidden="true" />
          Event Guide
        </h2>
      </div>

      <div className={isScrollable ? styles.tileScroll : styles.tileGrid}>
        {guides.map((guide) => (
          <div key={guide.id} className={styles.tile}>
            <span className={styles.tileIcon}>
              <GuideIcon name={guide.icon} />
            </span>
            <span className={styles.tileLabel}>{guide.label}</span>
            <span className={styles.tileValue}>{guide.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function VenueCard({ location }) {
  if (!location) return null
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>
        <span className={styles.accentBar} aria-hidden="true" />
        Venue
      </h2>
      <div className={styles.venueBox}>
        <FiMapPin className={styles.venueIcon} aria-hidden="true" />
        <span className={styles.venueText}>{location}</span>
      </div>
    </section>
  )
}

function TermsCard({ terms }) {
  const [open, setOpen] = useState(false)
  if (!terms || terms.length === 0) return null

  return (
    <section className={styles.card}>
      <button
        type="button"
        className={styles.accordionTrigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <h2 className={styles.heading}>
          <span className={styles.accentBar} aria-hidden="true" />
          Terms &amp; Conditions
        </h2>
        <FiChevronDown
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className={styles.termsList}>
          {terms.map((term, i) => (
            <li key={i} className={styles.termsItem}>{term}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function EventInfoSection({ description, guides, location, terms }) {
  return (
    <div className={styles.stack}>
      <AboutCard description={description} />
      <GuideCard guides={guides} />
      <VenueCard location={location} />
      <TermsCard terms={terms} />
    </div>
  )
}