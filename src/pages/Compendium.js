import styles from '../css/Compendium.module.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select'

function Compendium() {
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
                    <Select name="category" text="Select Arcana"/>
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
