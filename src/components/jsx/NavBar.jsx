import React from 'react';
import logo from '../../assets/img/logo_eldorado.jpg';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { UserSignIn } from '../../services/UserSignIn';
import InfoHelp from '../jsx/InfoHelp';


const Navbar = () => {

  let isAuthenticated = false;
  const userSignIn = new UserSignIn();
  //const infoHelp = new InfoHelp();

  if (userSignIn.isAuthenticated()) {
    isAuthenticated = true;
  }

  return (
    
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-options">
          <span>🌐 Español</span>
          <span>💰 Colombia (COP)</span>
        </div>
      </div>

      <div className="navbar-main">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="navbar-links">
          <a href="#reservar">Reservar</a>
          <a href="#ofertas">Ofertas y destinos</a>
          <a href="#tu-reserva">Tu reserva</a>
          {
            !isAuthenticated &&
            (<button className="checkin-button">
              <Link to="/signin">Check-in</Link>
            </button>)
          }
          
          <Link to="/infoHelp">Información y ayuda</Link>

          <a href="#lifemiles">Lifemiles</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
