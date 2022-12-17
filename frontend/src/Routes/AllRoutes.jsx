import React from "react";
import { Route, Routes } from "react-router-dom";
// import Products from '../Pages/Products'
import SingleProduct from "../Pages/SingleProduct";
import Homepage from "../Pages/HomePage/Homepage";
import ProductSection from "../Components/ProductSection";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
