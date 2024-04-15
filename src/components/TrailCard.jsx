import styles from "./TrailCard.module.css"

function TrailCard({image, title, location, length, difficulty}) {
    const levelSrc = `src/assets/level-${difficulty}.png`
    return (
        <div className={styles.card}>
            <img className= {styles.cardimg}
            src= {image} alt={title}
            />
            <h3>{title}</h3>
            <h4>{location}</h4>
            <p>{length}</p>
            <img className={styles.difficulty} src={levelSrc} alt="difficulty-level" />
            
            

        </div>
    )
}

export default TrailCard