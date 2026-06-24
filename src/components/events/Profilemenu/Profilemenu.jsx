import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiTag, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../context/Authcontext/Authcontext";
import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initial = (user?.displayName || user?.email || "?")
    .charAt(0)
    .toUpperCase();

  const handleLogout = async () => {
    setOpen(false);
    await logout();
    navigate("/");
  };

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button
        type="button"
        className={styles.avatarButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || "Profile"}
            className={styles.avatarImage}
          />
        ) : (
          <span className={styles.avatarInitial}>{initial}</span>
        )}
      </button>

      {open && (
        <div className={styles.dropdown} role="menu">
          <div className={styles.dropdownHeader}>
            <p className={styles.dropdownName}>
              {user?.displayName || "My Account"}
            </p>
            <p className={styles.dropdownEmail}>{user?.email}</p>
          </div>

          <button
            type="button"
            className={styles.dropdownItem}
            role="menuitem"
            onClick={() => {
              setOpen(false);
              navigate("/profile");
            }}
          >
            <FiUser /> My Info
          </button>

          <button
            type="button"
            className={styles.dropdownItem}
            role="menuitem"
            onClick={() => {
              setOpen(false);
              navigate("/my-tickets");
            }}
          >
            <FiTag /> My Tickets
          </button>

          <button
            type="button"
            className={`${styles.dropdownItem} ${styles.logoutItem}`}
            role="menuitem"
            onClick={handleLogout}
          >
            <FiLogOut /> Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
