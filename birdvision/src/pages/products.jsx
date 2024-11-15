import React, { useState, useEffect } from "react";
import "../style/products.css";
import axios from "axios";
import Card from "../components/card";

export const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const skip = (page - 1) * productsPerPage;
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
        );
        setData(response.data.products);
        setTotalPages(Math.ceil(response.data.total / productsPerPage)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Calculate the range of pages to display
  const getPageRange = () => {
    const startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPages, page + 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  return (
    <div className="products-page">
      <div className="product-container">
        {data.map((product) => (
          <Card
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>

      {/* BootStrap-Pagination with the require functionality added*/}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          {/* Dynamically render limited page numbers */}
          {getPageRange().map((pageNum) => (
            <li
              key={pageNum}
              className={`page-item ${page === pageNum ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            </li>
          ))}

          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};





