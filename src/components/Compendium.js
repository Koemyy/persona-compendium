import styles from '../css/Compendium.module.css';

function Compendium () {
    return (
        <div id={styles["compendium"]}>
            <div>
                <h2>Compendium</h2>
                <p>See your registred demons</p>
                <p>You can register new ones too</p>
            </div>
        </div>
    )
}

export default Compendium;
