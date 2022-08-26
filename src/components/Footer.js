import {FaLinkedin, FaGithub} from 'react-icons/fa';
import styles from "../css/Footer.module.css";

function Footer() {
    return (
        <footer id={styles["footer"]}>
            <div>
                <ul>
                    <a href="https://www.linkedin.com/in/francinepns/" target="_blank">
                        <li><FaLinkedin/></li>
                    </a>
                    <a href="https://github.com/Koemyy" target="_blank">
                        <li><FaGithub/></li>
                    </a>
                </ul>
            </div>
            <div>
                <p>Com ❤ por Francine Nogueira</p>
            </div>
        </footer>
    )
}

export default Footer;
