import React, { useEffect, useState } from 'react';
import { 
    containerStyle, 
    headerStyle, 
    buttonStyle, 
    buttonContainerStyle, 
    itemContainerStyle, 
    deleteButtonStyle ,
    regresarButtonStyle 
} from './styles'; // Asegúrate de que la ruta sea correcta

function ShoppingCart({ cartItems = [], setCartItems = () => {}, onComplete, onBack }) {
    const defaultItems = [
      { id: 1, name: 'Item 1', price: 10, quantity: 1 },
      { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    ];
  
    // Estado para gestionar los elementos temporales del carrito
    const [temporaryCartItems, setTemporaryCartItems] = useState(cartItems.length > 0 ? cartItems : defaultItems);
  
    // Effect para actualizar el carrito temporal al recibir nuevos elementos
    useEffect(() => {
      setTemporaryCartItems(cartItems.length > 0 ? cartItems : defaultItems);
    }, [cartItems]);
  
    const handleRemoveItem = (id) => {
      // Filtra el carrito temporal para eliminar el item con el id especificado
      setTemporaryCartItems(temporaryCartItems.filter(item => item.id !== id));
    };
  
    const handleCompletePurchase = () => {
      // Envía el carrito actualizado al manejador de compra
      onComplete(temporaryCartItems);
      // Actualiza el estado del carrito en el componente padre (opcionalmente vaciar el carrito)
      setCartItems(temporaryCartItems);
    };
  
    const handleBack = () => {
      // Restaura el carrito a su estado inicial (no se registra el cambio)
      setTemporaryCartItems(cartItems.length > 0 ? cartItems : defaultItems);
      onBack(); // Llama a la función de volver a la pantalla anterior
    };
  
    return (
      <div style={{ ...containerStyle, width: '70%', margin: '0 auto' }}>
        <h2 style={headerStyle}>Carrito de Compras</h2>
        {temporaryCartItems.length === 0 ? (
          <p>No hay elementos en el carrito.</p>
        ) : (
          temporaryCartItems.map(item => (
            <div key={item.id} style={itemContainerStyle}>
              <span>{item.name} - ${item.price} x {item.quantity}</span>
              <button 
                onClick={() => handleRemoveItem(item.id)} 
                style={deleteButtonStyle}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
        <div style={buttonContainerStyle}>
          
          <button 
            onClick={onBack} // Llama a la función para regresar
            style={regresarButtonStyle}
          >
            Regresar
          </button>
          <button onClick={handleCompletePurchase} style={buttonStyle}>
            Completar Compra
          </button>
        </div>
      </div>
    );
  }
  
export default ShoppingCart;