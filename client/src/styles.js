/*
export const containerStyle = {
  color: 'gold',
  backgroundColor: '#000',
  padding: '30px',
  maxWidth: '600px',
  margin: '0 auto',
  borderRadius: '10px',
  boxShadow: '0px 0px 15px rgba(255, 215, 0, 0.3)',
  fontFamily: 'Arial, sans-serif',
};
export const sectionStyle = {
  flex: 1, // Para que todas las secciones se ajusten automáticamente
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',

};
*/

export const maincontainerStyle = {
  color: 'gold',
  backgroundColor: '#000',
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh', // Ocupa toda la altura disponible de la pantalla
  width: '100vw',     // Ocupa todo el ancho disponible de la pantalla
  boxSizing: 'border-box', // Incluye el padding en el ancho total
};

export const maincontainerStyle2 = {
  color: 'gold',
  backgroundColor: '#000',
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  minHeight: '90vh',  // Ocupa al menos el 90% de la altura de la pantalla
  width: '90vw',      // Ocupa al menos el 90% del ancho de la pantalla
  boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total
  margin: 'auto',     // Centra el contenedor horizontal y verticalmente
  boxShadow: '0px 0px 15px rgba(255, 215, 0, 0.3)',
  fontFamily: 'Arial, sans-serif',
};
export const containerStyle = {
  color: 'gold',
  backgroundColor: '#000',
  padding: '30px',
  //maxWidth: '600px',
  margin: '0 auto',
  borderRadius: '10px',
  boxShadow: '0px 0px 15px rgba(255, 215, 0, 0.3)',
  fontFamily: 'Arial, sans-serif',
};
export const sectionStyle = {
  flex: 1, // Para que todas las secciones se ajusten automáticamente
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',

};

export const headerStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
  borderBottom: '1px solid gold',
  paddingBottom: '10px',
  letterSpacing: '1px',
};

export const labelStyle = {
  flexBasis: '40%',
  textAlign: 'right',
  paddingRight: '10px',
};

export const inputContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
};

export const inputStyle = {
  flexBasis: '55%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid gold',
  backgroundColor: '#333',
  color: 'gold',
  outline: 'none',
};

export const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

export const buttonStyle = {
  backgroundColor: 'gold',
  color: 'light grey',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

export const imageContainerStyle = {
  textAlign: 'center',
  marginBottom: '15px',
};

export const profileImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '2px solid gold',
  boxShadow: '0px 0px 10px rgba(255, 215, 0, 0.5)',
};

export const itemContainerStyle = {
  // Estilos para cada elemento de la lista
  backgroundColor: '#333', // Tono de gris para el fondo de los elementos
  padding: '10px',
  margin: '5px 0',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const deleteButtonStyle = {
  // Estilos específicos para el botón de eliminar
  marginLeft: 'auto',
  backgroundColor: '#333', // Color para el botón de eliminar
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};


export const regresarButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'silver',
  border: '1px solid gold',
};


