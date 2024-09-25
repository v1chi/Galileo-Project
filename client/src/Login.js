import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        email: username,
        password: password,
      });
      setMessage('Inicio de sesión exitoso');
    } catch (error) {
      setMessage('Error en el inicio de sesión: ' + (error.response?.data?.message || 'Error desconocido'));
    }
  };

  const goToRegister = () => {
    navigate('/register'); 
  };

  return (
    <div className="login-container">
      <h2>Acceso</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Correo electrónico:</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Iniciar sesión</button>
          <button type="button" onClick={goToRegister}>Registrarse</button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginRegister;
