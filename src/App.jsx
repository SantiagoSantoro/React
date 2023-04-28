import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";



function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemDetailContainer />
			<ItemListContainer greeting="Bienvenidos a X-treme Shop" />
			
		</div>
	);
}

export default App;






