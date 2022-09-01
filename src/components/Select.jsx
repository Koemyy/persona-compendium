import styles from '../css/Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div id={styles["select"]}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Select one Arcana</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;
