import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAirlines from './ListAirlines.jsx';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import SignUp from './assets/pages/login/components/register_form/SignUp.jsx';
import './App.css';

const App = () => {
  return (

    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/a" Component={ListAirlines} />
          </Routes>

          <Routes>
            <Route className="centrado" path="/b" Component={ SearchBar } />
          </Routes>
      </Router>

      <Router>
        <Routes>
          {/* Ruta para el SignIn */}
          <Route path="/c" element={<SignIn />} />  {/* Agregada la ruta para el inicio de sesión */}

          {/* Ruta para el SignUp */}
          <Route path="/d" element={<SignUp />} />  {/* Agregada la ruta para el registro */}
        </Routes>
      </Router >
    </>

  );
};

export default App;
