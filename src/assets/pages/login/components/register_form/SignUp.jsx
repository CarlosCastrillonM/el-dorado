import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Asegúrate de que la ruta sea correcta
import logo from '../../../../img/logo_eldorado.jpg'; // Ruta completa para la imagen

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Nuevo estado para el correo electrónico
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica de los campos
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('El nombre de usuario, el correo y la contraseña son obligatorios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Aquí agregarías la lógica para enviar los datos al servidor, si fuera necesario
    console.log('Registrando usuario:', { username, email, password });
    setError('');
  };

  return (
    <div className="container-signup">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className='logo-container'>
            <img src={logo} alt="Logo ElDorado" className='logo' />
          </div>
          
          <p className='form-title'>Regístrate</p>
          <input 
            type="text" 
            placeholder="Nombre de usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />

          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Confirmar contraseña" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Registrar</button>
        </form>

        <div className="login-link">
          <p>¿Ya tienes cuenta? <Link to="/signin">Inicia sesión aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
