import styles from '../css/Persona.module.css';
import PropTypes from 'prop-types';

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

Persona.propTypes = {
    name: PropTypes.string.isRequired,
    arcana: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
};

export default Persona;
