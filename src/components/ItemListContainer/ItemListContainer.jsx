import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");

      try {
        const snapshot = await getDocs(itemsCollection);
        const itemList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (id) {
          setList(itemList.filter((item) => item.categoria === id));
        } else {
          setList(itemList);
        }

        setLoading(false);
      } catch (error) {
        console.log("Error al obtener los productos", error);
        setLoading(false);
      }
    };

    loadItems();
  }, [id]);

  return (
    <Container className="mt-4">
      <h1 className="title">{greeting}</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ItemList list={list} />
      )}
    </Container>
  );
};

