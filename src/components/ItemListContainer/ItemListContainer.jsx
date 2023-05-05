import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import products from "../../data/products.json"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ greeting }) => {
   const [list, setList] = useState([])
   const {id}=useParams()

   const productList = new Promise((resolve) => {
      setTimeout(() => {
         resolve(products)
      }, 2000)
   })
   useEffect(() => {
      productList.then(result => {
         if(id){
            setList(result.filter(item => item.categoria === id))
         }else{
            setList(result)
         }
      })
   }, [id])

   return (
      <Container className="mt-4">
         <h1 className="title">{greeting}</h1>
         <ItemList list={list} />
      </Container>
   );
}
// Tene en cuenta que la unica categoria que tenemos es Tablas por lo que deberias agregar las otras 2.
// Con respecto a los productos, solo modifica el mismo json, en ese mismo array agrega los objetos de diferentes categorias.