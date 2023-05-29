import { useContext, useState, useEffect } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartContext from "../../Context/CartContext";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import "./CheckOut.css";

const CheckOut = () => {
  const [cargando, setCargando] = useState(false);
  const [ordenId, setOrdenId] = useState("");
  const [totalReal, setTotalReal] = useState(0);

  const { cart, clear } = useContext(CartContext);

  useEffect(() => {
    setTotalReal(calcularTotal(cart));
  }, [cart]);

  const sendOrder = async ({ name, phone, email }) => {
    setCargando(true);
    try {
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalReal,
      };
      const db = getFirestore();
      const orderCollectionRef = collection(db, "orders");
      await addDoc(orderCollectionRef, order)
        .then((docRef) => {
          console.log("Orden con ID " + docRef.id + " creada!");
          setOrdenId(docRef.id);
          clear(); // Limpiar el carrito después de guardar la orden
        })
        .catch((error) => {
          console.error("Error al crear la orden:", error);
        });
    } finally {
      setCargando(false);
    }
  };

  const calcularTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total;
  };

  if (cargando) {
    return <h1 className="loading-order">Se Está Cargando La Orden...</h1>;
  }

  if (ordenId) {
    return (
      <div>
       <h1 className="order-number">Su Numero de Orden es: {ordenId}</h1>
       <h1 className="thank-you">Gracias por utilizar X-treme Shop.</h1>
      </div>
    );
  }

  return (
    <div>
      <CheckOutForm onConfirm={sendOrder} />
    </div>
  );
};

export default CheckOut;



