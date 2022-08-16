import styles from '../css/NavBar.module.css'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav id={styles["navBar"]}>
            <Link to="/">Home</Link>
            <Link to="/compendium">Compendium</Link>
        </nav>
    )
}

export default NavBar;
