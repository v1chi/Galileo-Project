import React, { useState } from 'react';
import axios from 'axios';

function LoginRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email: username,
        password: password,
      });
      console.log('Login exitoso:', response.data);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        name: username,
        email: username,
        password: password,
      });
      console.log('Registro exitoso:', response.data);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
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
          <button type="button" onClick={handleRegister}>Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default LoginRegister;
