import React, { useState } from 'react';

const containerStyle = {
    color: 'gold',
    backgroundColor: '#000',
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(255, 215, 0, 0.3)',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    borderBottom: '1px solid gold',
    paddingBottom: '10px',
    letterSpacing: '1px',
  };

  const labelStyle = {
    flexBasis: '40%',
    textAlign: 'right',
    paddingRight: '10px',
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const inputStyle = {
    flexBasis: '55%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid gold',
    backgroundColor: '#333',
    color: 'gold',
    outline: 'none',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'gold',
    color: 'light grey',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const imageContainerStyle = {
    textAlign: 'center',
    marginBottom: '15px',
  };

  const profileImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid gold',
    boxShadow: '0px 0px 10px rgba(255, 215, 0, 0.5)',
  };


  /**
    const [profile, setProfile] = useState({
      image: '',
      username: '',
      email: '',
      profession: '',
      country: '',
      gender: '',
    });
   */
    function UserProfile({ profile, setProfile }) {
        const defaultProfile = {
          image: '',
          username: 'null',
          email: 'null',
          profession: 'null',
          country: 'null',
          gender: 'null',
        };
      
        // Si profile está vacío, usa el objeto por defecto
        const currentProfile = profile && Object.keys(profile).length > 0 ? profile : defaultProfile;
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setProfile({ ...currentProfile, [name]: value });
        };
      
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setProfile({ ...currentProfile, image: reader.result });
            };
            reader.readAsDataURL(file);
          }
        };
      
        const handleSave = () => {
          console.log('Profile saved:', currentProfile);
        };
      
        const handleBack = () => {
          console.log('Returning...');
        };
      
        return (
          <div style={containerStyle}>
            <h2 style={headerStyle}>Perfil de Usuario</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>  
              {/* Aqui se maneja lo que es la imagend de usuario*/}
              {currentProfile.image && (
                <div style={imageContainerStyle}>
                  <img src={currentProfile.image} alt="Profile" style={profileImageStyle} />
                </div>
              )}
              {/* ############################################################################################################ */}

              {/* Aqui se muestra por pantalla los datos de los usuarios*/}
              {['Usuario', 'Email', 'Profession', 'Pais', 'Genero'].map((field, index) => (
                <div key={index} style={inputContainerStyle}>
                  <label htmlFor={field} style={labelStyle}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={currentProfile[field]} // Muestra el valor de profile
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder={`Ingrese su ${field}`}
                  />
                </div>
              ))}
              {/* ############################################################################################################ */}

              {/* Aqui se manejan los botones*/}
              <div style={buttonContainerStyle}>
                {/* Aqui se configura el boton para regresar*/}
                <button 
                  onClick={handleBack} 
                  style={{ ...buttonStyle, backgroundColor: 'silver', border: '1px solid gold' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Regresar
                </button>

                {/* Aqui esta el boton que actualizaria los datos*/}
                <button 
                  onClick={handleSave} 
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#ffd700'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'gold'}
                >
                  Guardar
                </button>
              </div>
              {/* ############################################################################################################ */}

            </div>
          </div>
        );
      }
      

  export default UserProfile;

  /*
      llamada es :  <UserProfile profile={profile} setProfile={setProfile} />
      import es : import UserProfile from './UserProfile'; // Asegúrate de que la ruta sea correcta
  */