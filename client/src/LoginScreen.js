import React, { useState } from 'react';
import {
  containerStyle,
  headerStyle,
  labelStyle,
  inputContainerStyle,
  inputStyle,
  buttonContainerStyle,
  buttonStyle,
  regresarButtonStyle,
} from './styles'; // Asegúrate de que la ruta sea correcta

const LoginScreen = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log(`Iniciar sesión con RUT: ${rut} y Contraseña: ${password}`);
  };

  const handleGuestLogin = () => {
    // Lógica para manejar el inicio como invitado
    console.log('Iniciar como invitado');
  };

  const handleRegister = () => {
    // Lógica para redirigir a la pantalla de registro
    console.log('Redirigir a registro de usuario');
  };

  return (
    <div style={{ ...containerStyle, maxWidth: '600px',width: '100%', }}>
      <h1 style={headerStyle}>Inicio de Sesión</h1>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>RUT</label>
        <input
          type="text"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          placeholder="Ingrese su RUT"
          style={inputStyle}
        />
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          style={inputStyle}
        />
      </div>

      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button style={regresarButtonStyle} onClick={handleGuestLogin}>
          Iniciar como Invitado
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="#" onClick={handleRegister}>
          ¿No tiene usuario? Registrar usuario
        </a>
      </div>
    </div>
  );
};

export default LoginScreen;
