import styles from './ArtistCard.module.css'

 function ArtistCard({ artist }) {
  if (!artist) return null
  const { name, role, photo } = artist

  return (
    <div className={styles.card}>
      <div className={styles.photoWrap}>
        {photo ? (
          <img src={photo} alt={name} className={styles.photo} />
        ) : (
          <div className={styles.photoFallback} aria-hidden="true">
            {name?.charAt(0) ?? '?'}
          </div>
        )}
      </div>
      <p className={styles.name}>{name}</p>
      {role && <p className={styles.role}>{role}</p>}
    </div>
  )
}

export default ArtistCard;