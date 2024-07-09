import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/blog"> Blog</Link>
        </li>
        <li>
          <Link to="/trails"> Trails</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
