import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import products from '../../data/products.json';
import "./Category.scss";
import { useEffect } from "react";
const Category = () => {
  const {
    id
  } = useParams();
  function filterObjectsByCategoryAndId() {
    const filteredObjects = {
      products: []
    };

    // Iterate over each product object
    for (const product of products.products) {
      if (product.category === id) {
        filteredObjects.products.push(product);
      }
    }
    return filteredObjects;
  }
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Scroll to the top of the page when the component is updated
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleScrollToTop);
    return () => {
      window.removeEventListener("beforeunload", handleScrollToTop);
    };
  }, []);
  const prod = filterObjectsByCategoryAndId();
  return /*#__PURE__*/React.createElement("div", {
    className: "category-main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "category-title"
  }, id), /*#__PURE__*/React.createElement(Products, {
    innerPage: true,
    products: prod
  })));
};
export { Category as default };