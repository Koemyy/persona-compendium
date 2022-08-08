import styles from '../css/Persona.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';

function Persona({name, arcana, level, personaImg, personaAlt}) {
    const [name, setName] = useState()
    const [arcana, setArcana] = useState()
    const [level, setLevel] = useState()
    return (
        <div id={styles["persona"]}>
            <form action="" method="post">
                <div>
                    <img src={personaImg} alt={personaAlt}/>
                </div>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" onChange={(e) => setName(e.target.value)} type={name}/>
                </div>
                <div>
                    <label htmlFor="arcana">Arcana: </label>
                    <input id="arcana" name="arcana" onChange={(e) => setArcana(e.target.value)} type={arcana}/>
                </div>
                <div>
                    <label htmlFor="level">Level: </label>
                    <input id="level" name="level" onChange={(e) => setLevel(e.target.value)} type={level}/>
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
