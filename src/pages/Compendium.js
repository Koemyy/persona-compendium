import styles from '../css/Compendium.module.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Compendium({handleSubmit, btnText, projectData}) {
    const [project, setProject] = useState(projectData || {})
    const [arcanas, setArcanas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/arcanas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setArcanas(data)
            })
    }, [])

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,
            arcana: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    const submit = (e) => {
        e.preventDefault()
        createPost(project)
    }

    const navigate = useNavigate()

    function createPost(project) {
        project.minLevel = 0
        project.attributes = []

        fetch('http://localhost:5000/personas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/compendium', { message: 'Projeto criado com sucesso!' })
            })
    }

    return (
        <div id={styles["persona"]}>
            <div>
                <h2>Compendium</h2>
                <p>See your registred personas</p>
                <p>You can register new ones too</p>
            </div>
            <form onSubmit={submit}>
                <div>
                    <Input type="text"
                           text="Name"
                           name="name"
                           placeholder="Persona's name"
                           handleOnChange={handleChange} value={project.name}/>
                </div>
                <div>
                    <Select name="arcana"
                            text="Select Arcana"
                            options={arcanas}
                            handleOnChange={handleCategory}
                            value={project.arcana ? project.arcana.id : ''}
                    />
                </div>
                <div>
                    <Input type="number"
                           text="Level"
                           name="level"
                           placeholder="Persona's level"
                           handleOnChange={handleChange} value={project.level}/>
                </div>
                <div>
                    <Button
                        handleSubmit={createPost}
                        text="Register"
                    />
                </div>
            </form>
        </div>
    )
}

export default Compendium;
