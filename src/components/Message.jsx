import styles from '../css/Message.module.css'

function Message({type, msg}) {
    return (
        <p className={`${styles.message} ${styles[type]}`}>{msg}</p>
    )
}

export default Message;
