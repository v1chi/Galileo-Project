import React, { useEffect, useState } from 'react';

import { 
  containerStyle, 
  headerStyle, 
  labelStyle, 
  inputContainerStyle, 
  inputStyle, 
  buttonContainerStyle, 
  buttonStyle, 
  imageContainerStyle, 
  profileImageStyle,
  regresarButtonStyle 
} from './styles'; // Asegúrate de que la ruta sea correcta

function CursoProfile({ curso, setCurso, onSave, onBack }) {
  const defaultProfile = {
    image: '',
    cursoname: 'null',
    codecurso: 'null',
  };

  // Si curso está vacío, usa el objeto por defecto
  const currentCurso = curso && Object.keys(curso).length > 0 ? curso : defaultProfile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...currentCurso, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurso({ ...currentCurso, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Función de guardar que usa el onSave para devolver el curso actualizado
  const handleSave = () => {
    onSave(currentCurso); // Devuelve el curso actualizado a través del prop onSave
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Perfil del Curso</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        {/* Manejo de la imagen del curso */}
        {currentCurso.image && (
          <div style={imageContainerStyle}>
            <img src={currentCurso.image} alt="Course" style={profileImageStyle} />
          </div>
        )}
        
        {/* Manejo de los datos del curso */}
        {['cursoname', 'codecurso'].map((field, index) => (
          <div key={index} style={inputContainerStyle}>
            <label htmlFor={field} style={labelStyle}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={currentCurso[field]} // Muestra el valor de curso
              onChange={handleChange}
              style={inputStyle}
              placeholder={`Ingrese el ${field}`}
            />
          </div>
        ))}
        
        {/* Botones para guardar o regresar */}
        <div style={buttonContainerStyle}>
          <button 
            onClick={onBack} // Llama a la función para regresar
            style={regresarButtonStyle}
          >
            Regresar
          </button>
          <button 
            onClick={handleSave} 
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ffd700'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'gold'}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
export default CursoProfile;