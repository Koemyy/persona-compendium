import styles from '../css/Compendium.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import Button from '../components/Button';

function Compendium({personaImg, personaAlt}) {
    const [name, setName] = useState()
    const [arcana, setArcana] = useState()
    const [level, setLevel] = useState()

    return (
        <div id={styles["persona"]}>
            <div>
                <h2>Compendium</h2>
                <p>See your registred demons</p>
                <p>You can register new ones too</p>
            </div>
            <form>
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
                <div>
                    <Button
                        text="Register"
                    />
                </div>
            </form>
        </div>
    )
}

Compendium.propTypes = {
    name: PropTypes.string,
    arcana: PropTypes.string,
    level: PropTypes.number,
};

export default Compendium;
