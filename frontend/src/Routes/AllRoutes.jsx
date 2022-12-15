import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import Homepage from "../Pages/HomePage/Homepage"
import ProductSection from '../Components/ProductSection'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/products" element={<ProductSection />}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

