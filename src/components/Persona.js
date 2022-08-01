function Persona({name, arcana, level, personaImg, personaAlt}) {
    return (
        <div>
            <img src={personaImg} alt={personaAlt}/>
            <h2>Name: {name}</h2>
            <p>Arcana: {arcana}</p>
            <p>Level: {level}</p>
        </div>
    )
}

export default Persona;
