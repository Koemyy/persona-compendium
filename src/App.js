import './App.css';

function App() {
    const banner = "https://cdnb.artstation.com/p/assets/images/images/043/873/357/large/danni-martin-velvet-a1.jpg?1638474674";
    return (
        <div className="App">
            <h1>Welcome to the Velvet Room</h1>
            <img src={banner} alt="Velvet Room"/>
        </div>
    );
}

export default App;
