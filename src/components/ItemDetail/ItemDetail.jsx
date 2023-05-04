export const ItemDetail = ({ product }) => (
	<div>
	  <h1 style={{ color: "white", fontSize: "2rem" }}>
		{product.title} {product.price}
	  </h1>
	  <img src={product.img} alt={product.description} style={{ maxWidth: "50%", height: "auto" }} />
	  <p style={{ color:"white", fontSize: "16px" }}>{product.description}</p>
	</div>
  );
  //TENGO QUE AGREGARLE EL CONTADOR. . El número del changuito es otra funcionalidad aparte que por ahora no manejaremos.//