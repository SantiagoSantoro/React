import { useContext } from "react";
import { CartProvider } from "../../Context/CartContext";

export const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartProvider);

  // Verificar si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div>
        <p>No hay items en el carrito.</p>
        {/* Agrega acá el enlace o botón para volver al Landing */}
      </div>
    );
  }

  // Calcular el precio total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {/* Mostrar la lista de items del carrito */}
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Precio: USD {item.precio}</p>
          <p>Cantidad: {item.cantidad}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      {/* Mostrar el precio total del carrito */}
      <h4>Precio total: USD {calculateTotal()}</h4>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

