import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import SignUp from './assets/pages/login/components/register_form/SignUp.jsx'; 
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/a" element={<><NavBar /> <SearchBar /></>} /> {/* Agregada la ruta para la barra de navegación y la barra de búsqueda */}
            <Route path="/b" element={<NavBar />} /> {/* Agregada la ruta para la barra de navegación */}
          
          </Routes>
        </div>
        <Routes>
        {/* Ruta para el SignIn */}
        <Route path="/c" element={<SignIn />} />  {/* Agregada la ruta para el inicio de sesión */}
        {/* Ruta para el SignUp */}
        <Route path="/d" element={<SignUp />} />  {/* Agregada la ruta para el registro */}
      </Routes>
      </Router>
      
      {/* <div className="App">
        <div className="NavBar">
          <NavBar />
        </div>

        <div className="centrado">
          <header>
            <h1>Busca tu vuelo</h1>
          </header>
          <SearchBar />
        </div>
      </div> */}
    </div>
    );
};

export default App;
