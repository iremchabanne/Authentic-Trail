import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar