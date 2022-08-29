import styles from '../css/PageError.module.css'

function ErrorPage() {
    return (
        <div id={styles["pageError"]}>
            <p>Error!</p>
            <p>Page Not Found :(</p>
        </div>
    )
}

export default ErrorPage
