import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logica inicio de sesion
  };

  const handleRegister = () => {
    // Logica registro
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Acceso</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
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
    </div>
  );
}

export default App;
