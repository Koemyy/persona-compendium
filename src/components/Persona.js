import styles from '../css/Persona.module.css';

function Persona({name, arcana, level, personaImg, personaAlt}) {
    return (
        <div id={styles["persona"]}>
            <img src={personaImg} alt={personaAlt}/>
            <div>
                <h2 className={styles.personaName}>Name: {name}</h2>
                <p className={styles.personaAttributes}>Arcana: {arcana}</p>
                <p className={styles.personaAttributes}>Level: {level}</p>
            </div>
        </div>
    )
}

export default Persona;
