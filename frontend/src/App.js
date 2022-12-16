import "./App.css";
import ProductSection from "./Components/ProductSection";
import Address from "./Pages/AddressPage/Address";
import Homepage from "./Pages/HomePage/Homepage";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"

function App() {
return (
  <div className="App">
    {/* <AllRoutes /> */}
    <Navbar />
    <Homepage />
    {/* <Address/> */}
    <Footer />
  </div>
);

}

export default App;
