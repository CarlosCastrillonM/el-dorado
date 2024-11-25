import React from 'react';
import logo from '../../assets/img/logo_eldorado.jpg';
import '../css/NavBar.css';

const Navbar = () => {
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
          <button className="checkin-button">Check-in</button>
          <a href="#informacion">Información y ayuda</a>
          <a href="#lifemiles">Lifemiles</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
