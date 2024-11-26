import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserSignIn } from '../../services/UserSignIn';
import './SignIn.css';
import logo from '../../assets/img/logo_eldorado.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // Estado para manejar errores de validación
  const [success, setSuccess] = useState('');

  const userSignIn = new UserSignIn();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación simple
    if (email.trim() === '' || password.trim() === '') {
      setError('El email y la contraseña son obligatorios.');
      return;
    }

    try{
      const response = await userSignIn.login(email, password);
      console.log('Iniciar sesión con:', { email, password });

    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'Hubo un problema al iniciar sesión.');
    }

    setError('');
    console.log('Iniciar sesión con:', { email, password });
  };

  return (
    <div className="container-main">
      <div className="container-login">
        <form onSubmit={handleSubmit}>
          <div className='cont-img'>
            <img src={logo} className='logo' alt="Logo ElDorado" />
          </div>
          
          <p className='sub-title'>Correo</p>
          <input 
            type="text" 
            placeholder="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            aria-label="correo electronico" 
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
