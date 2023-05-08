import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetail = ({ product }) => {
	const onAdd = () => {
		console.log(product.marca);
	}

	return (
		<div className="text-center">
			<h1 style={{ color: "white", fontSize: "2rem" }}>{product.marca}</h1>
			<p style={{ color: "white", fontSize: "20px" }}>{product.categoria}</p>
			<p style={{ color: "white", fontSize: "16px", fontWeight: "Montserrat" }}>{product.descripcion}</p>
			<p style={{ color: "white", fontSize: "30px", fontWeight: "Montserrat" }}>USD${product.precio}</p>
			<img src={product.img} alt={product.marca} style={{ maxWidth: "50%", height: "auto" }} />
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>)

};

//poner un fondo en el item detail para que se vea un fonto. Suma, restar y poner abajo Agregar al carrito./