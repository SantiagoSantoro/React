import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemDocRef = doc(db, "items", id);

      try {
        const itemDocSnap = await getDoc(itemDocRef);

        if (itemDocSnap.exists()) {
          setProduct({ id: itemDocSnap.id, ...itemDocSnap.data() });
        } else {
          console.log("El producto no existe");
        }
      } catch (error) {
        console.log("Error al obtener el producto:", error);
      }

      setLoading(false);
    };

    if (id) {
      loadProduct();
    }

    return () => {
      // Limpiar el estado cuando el componente se desmonte
      setProduct({});
    };
  }, [id]);

  return (
    <Container>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ItemDetail product={product} />
      )}
    </Container>
  );
};
