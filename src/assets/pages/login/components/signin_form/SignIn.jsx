import React, { useState } from 'react';
import '../../SignIn.css';

const SignIn = () => {

  const [username, setUsername] = useState('');
  
  return (
    
    <div className="container-main">
      <form action='#'>
        <div className="container-login">
          <input 
            type="text" 
            placeholder="Pepe352" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </form>

      <p>Drilococo es: {username}</p>
    </div>
  );
};

export default SignIn;
