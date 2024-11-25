import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación entre páginas
import './SignIn.css';
import logo from '../../../../img/logo_eldorado.jpg';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // Estado para manejar errores de validación

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (username.trim() === '' || password.trim() === '') {
      setError('El nombre de usuario y la contraseña son obligatorios.');
      return;
    }

    // Simulación de inicio de sesión
    setError(''); // Limpiar errores si todo está bien
    console.log('Iniciar sesión con:', { username, password });
    // Aquí iría la lógica de autenticación
  };

  return (
    <div className="container-main">
      <div className="container-login">
        <form onSubmit={handleSubmit}>
          <div className='cont-img'>
            <img src={logo} className='logo' alt="Logo ElDorado" />
          </div>
          
          <p className='sub-title'>Usuario</p>
          <input 
            type="text" 
            placeholder="Pepe352" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            aria-label="Nombre de usuario" 
            required 
          />
          <br />

          <p className='sub-title'>Contraseña</p>
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              aria-label="Contraseña" 
              required 
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="toggle-password-btn"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          {error && <p className="error-message" aria-live="polite">{error}</p>}
          <br />

          <button type='submit'>Iniciar Sesión</button>
        </form>

        {/* Aquí se agrega el enlace al formulario de registro */}
        <div className="signup-link">
          <p>¿No tienes cuenta? <Link to="/signup">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
