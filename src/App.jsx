import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import './App.css'; 

const App = () => {

  
  return (


    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>

      <div className="centrado">
        <header>
          <h1>Busca tu vuelo</h1>
        </header>
        {/* Inserta el componente de búsqueda aquí */}
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
