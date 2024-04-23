import styles from "./TrailCard.module.css";
import ButtonDescription from "./ButtonDescription";

function TrailCard({
  image,
  title,
  location,
  length,
  difficulty,
  handleClick,
}) {
  const levelSrc = `src/assets/level-${difficulty}.png`;
  return (
    <div className={styles.card}>
      <img className={styles.cardimg} src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{location}</h4>
      <p>{length}</p>
      <div className={styles.buttonContainer}>
        <img
          className={styles.difficulty}
          src={levelSrc}
          alt="difficulty-level"
        />
        <ButtonDescription handleClick={handleClick} />
      </div>
    </div>
  );
}

export default TrailCard;
