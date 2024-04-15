import styles from "./TrailCard.module.css"

function TrailCard() {
    return (
        <div className={styles.card}>
            <img className= {styles.cardimg}
            src="https://www.svetoutdooru.cz/wp-content/uploads/sites/3/2021/03/greater-patagonian-trail-03-1500x880.jpg"
            alt="greater-patagonian-trail"
            />
            <h3>Greater Patagonian Track </h3>
            <h4>Chile and Argentina</h4>
            <p>20.000 KM</p>
            <img className={styles.difficulty} src="src/assets/level.png" alt="difficulty-level" />
            
            

        </div>
    )
}

export default TrailCard