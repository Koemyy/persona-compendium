import styles from '../css/Button.module.css';

function Button (props) {
    return (
        <button id={styles["button"]} className={styles.btn}>{props.text}</button>
    )
}

export default Button;
