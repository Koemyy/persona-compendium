import './App.css';
import Presentation from './components/Presentation';
import Persona from './components/Persona';
import Compendium from './components/Compendium';

function App() {
    return (
        <div>
            <Presentation/>
            <Compendium/>
            <Persona personaImg = "https://static.wikia.nocookie.net/megamitensei/images/0/0b/Jack_Frost_SMTV_Art.png"
                     personaAlt= "Persona Jack Frost"
                     name="Jack Frost"
                     arcana="Magician"
                     level="14"/>
        </div>
    );
}

export default App;
