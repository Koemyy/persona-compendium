import styles from '../css/Persona.module.css';
import PropTypes from 'prop-types';

function Persona({name, arcana, level, personaImg, personaAlt}) {
    return (
        <div id={styles["persona"]}>
            <form action="" method="post">
                <div>
                    <img src={personaImg} alt={personaAlt}/>
                </div>
                <div>
                    <label>Name: </label>
                    <input type={name}/>
                </div>
                <div>
                    <label>Arcana: </label>
                    <input type={arcana}/>
                </div>
                <div>
                    <label>Level: </label>
                    <input type={level}/>
                </div>
            </form>
        </div>
    )
}

Persona.propTypes = {
    name: PropTypes.string,
    arcana: PropTypes.string,
    level: PropTypes.number,
};

export default Persona;
