import styles from "./SelectedCard.module.css";

function SelectedCard({
  image,
  title,
  location,
  length,
  difficulty,
  description,
}) {
  const levelSrc = `src/assets/level-${difficulty}.png`;
  return (
    <div className={styles.selectedContainer}>
      <img className={styles.selectedCardImg} src={image} alt={title} />
      <div className={styles.rightPart}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <h4>{location}</h4>
          <h4>{length}</h4>
          <img
            className={styles.difficulty}
            src={levelSrc}
            alt="difficulty-level"
          />
        </div>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectedCard;
