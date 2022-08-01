import styles from '../css/Persona.module.css';

function Persona({name, arcana, level, personaImg, personaAlt}) {
    return (
        <div>
            <img src={personaImg} alt={personaAlt}/>
            <h2 className={styles.personaName}>Name: {name}</h2>
            <p className={styles.personaAttributes}>Arcana: {arcana}</p>
            <p className={styles.personaAttributes}>Level: {level}</p>
        </div>
    )
}

export default Persona;
