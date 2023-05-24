import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import "./Cart.css";

export const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  // Verificar si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="text-center">
        <p>No hay items en el carrito.</p>
        <Link to="/" className="btn btn-dark">Volver al Landing</Link>
      </div>
    );
  }

  // Calcular el precio total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="cart-items-container">
      <h2>Carrito de Compras</h2>
      {/* Mostrar la lista de items del carrito */}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.nombre}</p>
          <p>Precio: USD {item.precio}</p>
          <p>Cantidad: {item.cantidad}</p>
          <img src={item.img} alt={item.nombre} className="product-image" style={{ maxWidth: "75%", maxHeight: "150px" }} />
          <br />
          <button className="btn btn-dark" onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      {/* Mostrar el precio total del carrito */}
      <h4>Precio total: USD {calculateTotal()}</h4>
      <button className="btn btn-dark" onClick={clear}>Vaciar Carrito</button>
    </div>
  );
};

