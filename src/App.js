import './App.css';
import Presentation from './components/Presentation';
import Persona from './components/Persona';

function App() {
    const banner = "https://cdnb.artstation.com/p/assets/images/images/043/873/357/large/danni-martin-velvet-a1.jpg?1638474674";
    return (
        <div className="App">
            <h1>Welcome to the Velvet Room</h1>
            <img src={banner} alt="Velvet Room"/>
            <Presentation/>
            <Persona personaImg = "https://static.wikia.nocookie.net/megamitensei/images/0/0b/Jack_Frost_SMTV_Art.png"
                     name="Jack Frost"
                     arcana="Magician"
                     level="14"/>
        </div>
    );
}

export default App;
