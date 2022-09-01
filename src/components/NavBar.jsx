import styles from '../css/NavBar.module.css'
import {Link} from 'react-router-dom';
import logo from '../img/logo.webp';

function NavBar() {
    return (
        <nav id={styles["navBar"]}>
            <Link to="/">
                <img src={logo} alt="Compendium Logo"/>
            </Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/compendium">Compendium</Link>
            </div>
        </nav>
    )
}

export default NavBar;
