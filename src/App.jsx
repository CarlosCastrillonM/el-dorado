import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAirlines from './ListAirlines.jsx';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './assets/component/jsx/NavBar.jsx';
import SignIn from './assets/pages/login/components/signin_form/SignIn.jsx';
import './App.css';


// Hook para obtener la ubicación actual


const App = () => {

  return (

    <>
      <Router>
      <div>
        <NavBar />

      <Routes>
        <Route path="/a" Component={ ListAirlines }/>
      </Routes>

      <Routes>
        <Route className="centrado" path="/b" Component={ SearchBar } />
      </Routes>

      </div>
      </Router>

      <Router>
        <Routes>
          <Route path="/c" Component={ NavBar } />
        </Routes>
      </Router>
    
    </>

  );
};

export default App;
