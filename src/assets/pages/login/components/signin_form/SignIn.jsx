import React, { useState } from 'react';
import '../../SignIn.css';
import logo from '../../../../img/logo_eldorado.jpg';

const SignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    
    <div className="container-main">
      
      <div className="container-login">
        <form action='#'>
          <div className='cont-img'><img src={logo} className='logo'></img></div>
          <h2>Usuario</h2>
          <input type="text" placeholder="Pepe352" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
          <input type="password" placeholder="Pepe352" value={password} onChange={(e) => setUsername(e.target.value)} required />
        </form>
      </div>

      {/* <p>Drilococo es: {username}</p> */}
    </div>
  );
};

export default SignIn;
