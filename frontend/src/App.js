import "./App.css";
import Cart from "./Components/Cart/Cart";
import ProductSection from "./Components/ProductSection";
import AllRoutes from "./Routes/AllRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import Admin from "./Pages/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Box } from "@chakra-ui/react";
function App() {
	return (
		<div className="App">
			{window.location.pathname === "/dashboard" ||
			window.location.pathname === "/admin/login" ? (
				<Box>
					<AdminRoutes />
				</Box>
			) : (
				<Box>
					<Navbar />
					<AllRoutes />
					<Footer />
				</Box>
			)}
		</div>
	);
}

export default App;
