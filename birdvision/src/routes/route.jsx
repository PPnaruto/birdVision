import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "../pages/products";
import SingleProduct from "../pages/singleProduct";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default PageRoutes;
