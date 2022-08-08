import './App.css';
import Presentation from './components/Presentation';
import Persona from './components/Persona';
import Compendium from './components/Compendium';
import Divider from './components/Divider';

function App() {
    return (
        <div>
            <Presentation/>
            <Divider/>
            <Compendium/>
            <Persona personaImg="https://static.wikia.nocookie.net/megamitensei/images/0/0b/Jack_Frost_SMTV_Art.png"
                     personaAlt="Persona Jack Frost"/>
        </div>
    );
}

export default App;
