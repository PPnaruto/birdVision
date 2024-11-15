import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/singleProduct.css";
import Loading from "../components/loading";

const SingleProduct = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Loading/>;
  }

  return (
    <div className="single-product-container">
      <div className="product-image-container">
        <img src={product.images[0]} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        {product.discountPercentage && (
          <p className="product-discount">Discount: {product.discountPercentage}%</p>
        )}
        <p className="product-rating">Rating: {product.rating} ★</p>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
