import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import './App.css';


// Hook para obtener la ubicación actual


const App = () => {

  return (
    <div>
      <Router>
        
      <div className="App">
        <Routes>
          <Route path="/a" element={<><NavBar /> <SearchBar /></>} />
          <Route path="/b" element={<NavBar />} />
        </Routes>
      </div>

      <Routes>
        <Route path="/c" element={<SignIn />} />
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
