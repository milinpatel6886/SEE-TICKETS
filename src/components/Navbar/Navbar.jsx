import { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import Button from '../common/Button/Button'
import ProfileMenu from '../events/ProfileMenu/ProfileMenu'
import AuthModal from '../events/Authmodal/Authmodal'
import { useAuth } from '../../context/Authcontext/Authcontext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { isLoggedIn } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          {/* LOCALITY */}SEE TICKETS
        </a>

        {isLoggedIn && (
          <ProfileMenu />
        )}
      </div>

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
      )}
    </header>
  )
}