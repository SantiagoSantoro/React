import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemDetailContainer />
			<ItemListContainer greeting="Bienvenidos a X-treme Shop" />
			
		</div>
	);
}
// function App() {
// 	return (
// 	  <BrowserRouter>
// 		<NavBar />
// 		<Routes>
// 		  <Route path="/" element={<ItemListContainer />} />
// 		  <Route path="/category/:id" element={<ItemListContainer />} />
// 		  <Route path="/item/:id" element={<ItemDetailContainer />} />
// 		</Routes>
// 	  </BrowserRouter>
// 	);
//   }

export default App;






