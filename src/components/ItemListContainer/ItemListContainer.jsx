import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import products from "../../data/products.json"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ greeting }) => {
   const [list, setList] = useState([])
   const [loading, setLoading] = useState(true)
   const {id}=useParams()

   const productList = new Promise((resolve) => {
      setTimeout(() => {
         resolve(products)
      }, 2000)
   })

   useEffect(() => {
      setLoading(true) // Establecer el estado de loading en true al comienzo
      // console.log(products)//
      productList.then(result => {
         if(id){
            setList(result.filter(item => item.categoria === id))
         }else{
            setList(result)
         }
         setLoading(false) // Establecer el estado de loading en false al completarse la carga
      })
   }, [id])

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
}
