import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { UserSignIn } from '../../services/UserSignIn';
import './SignIn.css';
import logo from '../../assets/img/logo_eldorado.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState('');

  const userSignIn = new UserSignIn();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email.trim() === '' || password.trim() === '') {
      setError('El email y la contraseña son obligatorios.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const response = await userSignIn.login(email, password);
      console.log('Iniciar sesión con:', { email, password });
      setSuccess('Inicio de sesión exitoso!');
      // Aquí puedes redirigir al usuario o realizar otra acción
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'Hubo un problema al iniciar sesión.');
    }
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
            type="email" 
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
            <span 
              className="toggle-password-icon"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? '👁️‍🗨️' : '👁️‍🗨️'}
            </span>
          </div>

          {error && <p className="error-message" aria-live="polite">{error}</p>}
          {success && <p className="success-message" aria-live="polite">{success}</p>}
          <br />

          <button type='submit'>Iniciar Sesión</button>
        </form>

        <div className="signup-link">
          <p>¿No tienes cuenta? <Link to="/signup">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
