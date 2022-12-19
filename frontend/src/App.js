import "./App.css";
import Cart from "./Components/Cart/Cart";
import ProductSection from "./Components/ProductSection";
import AllRoutes from "./Routes/AllRoutes";
import Admin from "./Pages/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Navbar />
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
