import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

