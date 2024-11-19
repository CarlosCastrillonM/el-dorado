import React, { useState } from 'react';
import '../../SignIn.css';
import logo from '../../../../img/logo_eldorado.jpg';

const SignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Cambiar el estado de visibilidad
  };
  
  return (
    
    <div className="container-main">
      
      <div className="container-login">
        <form action='#'>
          <div className='cont-img'><img src={logo} className='logo'></img></div>
          <p className='sub-title'>Usuario</p>
          <input type="text" placeholder="Pepe352" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />

          <p className='sub-title'>Contraseña</p>
          <input type={showPassword ? "text" : "password"} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button 
              type="button" 
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}  {/* Cambia el texto según el estado */}
            </button>
            <br />

          <button type='submit'>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
