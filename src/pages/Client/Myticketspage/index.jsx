import { useNavigate } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { FiArrowLeft, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useAuth } from '../../../context/Authcontext/Authcontext'
import { getTicketsForUser } from '../../../utils/ticketStorage'
import styles from './MyTicketsPage.module.css'

function MyTicketsPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className={styles.page}>
        <p className={styles.message}>You need to be logged in to view your tickets.</p>
      </div>
    )
  }

  const tickets = getTicketsForUser(user.uid)

  return (
    <div className={styles.page}>
      <button type="button" className={styles.backButton} onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>

      <h1 className={styles.pageTitle}>My Tickets</h1>

      {tickets.length === 0 ? (
        <div className={styles.emptyState}>
          <p>You haven't booked any tickets yet.</p>
          <button type="button" className={styles.browseButton} onClick={() => navigate('/')}>
            Browse Events
          </button>
        </div>
      ) : (
        <div className={styles.ticketList}>
          {tickets.map((order) => (
            <div key={order.orderId} className={styles.ticketCard}>
              <div className={styles.ticketBanner}>
                {order.eventImage ? (
                  <img src={order.eventImage} alt={order.eventTitle} className={styles.ticketImage} />
                ) : (
                  <div className={styles.ticketImageFallback} aria-hidden="true" />
                )}
              </div>

              <div className={styles.ticketBody}>
                <h2 className={styles.eventTitle}>{order.eventTitle}</h2>
                <div className={styles.metaRow}>
                  {order.eventDate && (
                    <span className={styles.metaItem}><FiCalendar /> {order.eventDate}</span>
                  )}
                  {order.eventVenue && (
                    <span className={styles.metaItem}><FiMapPin /> {order.eventVenue}</span>
                  )}
                </div>

                <div className={styles.divider} />

                <div className={styles.qrSection}>
                  <div className={styles.qrWrap}>
                    <QRCodeSVG value={order.orderId} size={120} bgColor="transparent" fgColor="#f3f0fa" />
                  </div>
                  <div className={styles.qrInfo}>
                    <p className={styles.qrLabel}>Order ID</p>
                    <p className={styles.qrValue}>{order.orderId}</p>
                    <p className={styles.qrHint}>Show this QR code at the venue entrance.</p>
                  </div>
                </div>

                {order.attendees?.length > 0 && (
                  <div className={styles.attendeeList}>
                    <p className={styles.attendeeLabel}>Attendees</p>
                    {order.attendees.map((attendee, i) => (
                      <p key={i} className={styles.attendeeItem}>
                        {attendee.name} — {attendee.phone}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyTicketsPage;