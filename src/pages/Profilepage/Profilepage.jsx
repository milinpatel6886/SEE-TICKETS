import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiPhone } from 'react-icons/fi'
import { useAuth } from '../../context/Authcontext/Authcontext'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {
  const { user, updateUserProfile } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState(user?.displayName || '')
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '')
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  if (!user) {
    return (
      <div className={styles.page}>
        <p className={styles.message}>You need to be logged in to view this page.</p>
      </div>
    )
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      await updateUserProfile({ displayName: name })
      // Phone isn't a Firebase Auth profile field, so we keep it in localStorage
      // for now until there's a real backend/user-profile store.
      localStorage.setItem('userPhone', phone)
      setSavedMessage('Profile updated successfully.')
      setIsEditing(false)
    } catch {
      setSavedMessage('Something went wrong. Please try again.')
    } finally {
      setIsSaving(false)
      setTimeout(() => setSavedMessage(''), 3000)
    }
  }

  return (
    <div className={styles.page}>
      <button type="button" className={styles.backButton} onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>

      <div className={styles.card}>
        <div className={styles.avatarRow}>
          {user.photoURL ? (
            <img src={user.photoURL} alt={name} className={styles.avatarImage} />
          ) : (
            <div className={styles.avatarFallback}>{(name || user.email || '?').charAt(0).toUpperCase()}</div>
          )}
          <div>
            <h1 className={styles.title}>My Info</h1>
            <p className={styles.subtitle}>Manage your personal details</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSave}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}><FiUser /> Full Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className={styles.input}
              placeholder="Your name"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}><FiMail /> Email</span>
            <input
              type="email"
              value={user.email || ''}
              disabled
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}><FiPhone /> Phone Number</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditing}
              className={styles.input}
              placeholder="Add your phone number"
            />
          </label>

          {savedMessage && <p className={styles.savedMessage}>{savedMessage}</p>}

          {isEditing ? (
            <div className={styles.actionRow}>
              <button type="submit" className={styles.saveButton} disabled={isSaving}>
                {isSaving ? 'Saving…' : 'Save Changes'}
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  setIsEditing(false)
                  setName(user.displayName || '')
                  setPhone(localStorage.getItem('userPhone') || '')
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className={styles.editButton} onClick={() => setIsEditing(true)}>
              Edit Info
            </button>
          )}
        </form>
      </div>
    </div>
  )
}