import styles from '../css/Select.module.css'

function Select({text, name, options}) {
    return (
        <div id={styles["select"]}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name}>
                <option>Select one Arcana</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
