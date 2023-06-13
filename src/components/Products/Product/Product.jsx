import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ product }) => { // Destructure the "product" prop
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => {
        navigate("/tech-store/product/" + product.id); // Access the "id" directly from the "product" prop
      }}
    >
      <div className="thumbnail">
        <img src={product.thumbnail} alt={product.title} /> {/* Add the "alt" attribute */}
      </div>
      <div className="prod-details">
        <span className="name">{product.title}</span>
        <span className="price">$ {product.price}</span>
      </div>
    </div>
  );
};

export default Product;
