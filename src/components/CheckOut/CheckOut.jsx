import { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartContext from "../../Context/CartContext";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CheckOut = () => {
    const [cargando, setCargando] = useState(false);
    const [ordenId, setOrdenId] = useState("");

    const { cart } = useContext(CartContext);

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
                total: 100,
            };
            const db = getFirestore();
            const orderCollectionRef = collection(db, "orders");
            await addDoc(orderCollectionRef, order)
                .then((docRef) => {
                    console.log("Orden con ID " + docRef.id + " creada!");
                    setOrdenId(docRef.id);
                })
                .catch((error) => {
                    console.error("Error al crear la orden:", error);
                });
        } finally {
            setCargando(false);
        }
    };

    if (cargando) {
        return <h1>Se Está Cargando La Orden...</h1>;
    }

    if (ordenId) {
        return <h1>Su Numero de Orden es: {ordenId}</h1>;
    }
    
    return (
        <div>
            <CheckOutForm onConfirm={sendOrder} />
        </div>
    );
};

export default CheckOut;


