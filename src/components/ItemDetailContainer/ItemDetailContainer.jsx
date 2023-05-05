import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import products from "../../data/products.json"


export const ItemDetailContainer = () => {
	const { itemId } = useParams()
	const [product, setProduct] = useState({})

	useEffect(() => {
		const productPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				const product = products.find(p => p.id === itemId)
				resolve(product)
			}, 2000)
		})
		productPromise.then(result => setProduct(result))
	}, [itemId])

	return (
		<Container>
			<ItemDetail product={product} />
		</Container>
	)
}