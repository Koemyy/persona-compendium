import styles from '../css/Button.module.css';

function Button (props) {
    return (
        <div id={styles["button"]} >
        <button className={styles.btn}>{props.text}</button>
        </div>
    )
}

export default Button;
