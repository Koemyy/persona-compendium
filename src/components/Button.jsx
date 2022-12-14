import styles from '../css/Button.module.css';

function Button(props) {
    return (
        <div onClick={props.action} id={styles["button"]}>
            <button type="submit" className={styles.btn}>{props.text}</button>
        </div>
    )
}

export default Button;
