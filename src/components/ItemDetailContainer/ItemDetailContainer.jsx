import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import { ItemDetail } from "../ItemDetail/ItemDetail"

const productList = {
	title: "Element",
	description: "Esta tabla de skate está diseñada para aquellos que buscan un rendimiento superior en la calle o en el skatepark. Fabricada con materiales de alta calidad y una construcción duradera, esta tabla ofrece una combinación perfecta de velocidad, estabilidad y maniobrabilidad. Con un diseño elegante y llamativo, esta tabla es tanto una obra de arte como un instrumento para realizar trucos impresionantes. No importa si eres un principiante o un profesional experimentado, esta tabla de skate es el compañero perfecto para desafiar tus límites y llevar tus habilidades al siguiente nivel",
	price: "$80",
	img: "https://img.skatewarehouse.com/watermark/rs.php?path=ELQUADDK-1.jpg",
}

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})

	useEffect(() => {
		const productPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productList)
			}, 2000)
		})
		productPromise.then(result => setProduct(result))
	}, [])

	return (
		<Container>
			<ItemDetail product={product} />
		</Container>
	)
}