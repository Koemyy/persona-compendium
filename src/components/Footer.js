import {FaLinkedin, FaGithub} from 'react-icons/fa';
import styles from "../css/Footer.module.css";

function Footer() {
    return (
        <footer id={styles["footer"]}>
            <ul>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
            </ul>
        </footer>
    )
}

export default Footer;
