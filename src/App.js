import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Compendium from './pages/Compendium';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/compendium" element={<Compendium/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
