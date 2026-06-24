import styles from "./ArtistsCard.module.css";

function ArtistsCard({ artists, ArtistCard }) {
  if (!artists || artists.length === 0) return null;

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>
        <span className={styles.accentBar} aria-hidden="true" />
        Artists
      </h2>
      <div className={styles.artistRow}>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}

export default ArtistsCard;
