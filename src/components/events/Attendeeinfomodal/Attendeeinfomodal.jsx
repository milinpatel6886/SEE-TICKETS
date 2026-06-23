import { useState } from 'react'
import { FiX, FiUser, FiPhone } from 'react-icons/fi'
import styles from './AttendeeInfoModal.module.css'

/**
 * totalQty: number of attendee slots to collect
 * onClose: () => void
 * onSubmit: (attendees: [{name, phone}]) => void
 */
export default function AttendeeInfoModal({ totalQty, onClose, onSubmit }) {
  const [attendees, setAttendees] = useState(
    Array.from({ length: totalQty }, () => ({ name: '', phone: '' }))
  )
  const [error, setError] = useState('')

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const updateAttendee = (index, field, value) => {
    setAttendees((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const incomplete = attendees.some((a) => !a.name.trim() || !a.phone.trim())
    if (incomplete) {
      setError('Please fill in name and phone number for all attendees.')
      return
    }
    const invalidPhone = attendees.some((a) => !/^\d{10}$/.test(a.phone.trim()))
    if (invalidPhone) {
      setError('Please enter a valid 10-digit phone number for each attendee.')
      return
    }
    setError('')
    onSubmit(attendees)
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="attendee-modal-title">
        <div className={styles.header}>
          <h2 id="attendee-modal-title" className={styles.title}>Attendee Details</h2>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>
        <p className={styles.subtitle}>
          Please enter the name and phone number for each of your {totalQty} {totalQty === 1 ? 'ticket' : 'tickets'}.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.attendeeScroll}>
            {attendees.map((attendee, index) => (
              <div key={index} className={styles.attendeeBlock}>
                <p className={styles.attendeeNumber}>Attendee {index + 1}</p>

                <label className={styles.field}>
                  <FiUser className={styles.fieldIcon} />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={attendee.name}
                    onChange={(e) => updateAttendee(index, 'name', e.target.value)}
                    className={styles.input}
                  />
                </label>

                <label className={styles.field}>
                  <FiPhone className={styles.fieldIcon} />
                  <input
                    type="tel"
                    placeholder="10-digit phone number"
                    value={attendee.phone}
                    onChange={(e) => updateAttendee(index, 'phone', e.target.value)}
                    className={styles.input}
                    maxLength={10}
                  />
                </label>
              </div>
            ))}
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.continueButton}>
            Continue to Pay
          </button>
        </form>
      </div>
    </div>
  )
}