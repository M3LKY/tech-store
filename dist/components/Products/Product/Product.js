import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({
  product
}) => {
  // Destructure the "product" prop
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    className: "product-card",
    onClick: () => {
      navigate("/tech-store/product/" + product.id); // Access the "id" directly from the "product" prop
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumbnail"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.thumbnail,
    alt: product.title
  }), " "), /*#__PURE__*/React.createElement("div", {
    className: "prod-details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, product.title), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$ ", product.price)));
};
export default Product;