import styles from '../css/Select.module.css'

function Select ({text, name}){
    return(
        <div id={styles["select"]}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name}>
                <option>Select one Arcana</option>
            </select>
        </div>
    )
}

export default Select;
