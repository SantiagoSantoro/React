import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting="Bienvenidos a X-Treme Shop" />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;






