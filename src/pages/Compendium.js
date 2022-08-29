import styles from '../css/Compendium.module.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select'
import {useState, useEffect} from 'react';

function Compendium() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp => resp.json())).then((data => {setCategories(data)})).catch((err) => console.log(err))
    }, [])

    return (
        <div id={styles["persona"]}>
            <div>
                <h2>Compendium</h2>
                <p>See your registred demons</p>
                <p>You can register new ones too</p>
            </div>
            <form>
                <div>
                    <Input type="text" text="Name" name="name" placeholder="Persona's name"/>
                </div>
                <div>
                    <Select name="category" text="Select Arcana" options={categories}/>
                </div>
                <div>
                    <Input type="number" text="Level" name="level" placeholder="Persona's level"/>
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

export default Compendium;
