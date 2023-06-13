import React from "react";
import Products from "../../Products/Products";
import products from '../../../data/products.json';
const RelatedProducts = ({
  categoryId,
  productId
}) => {
  function filterObjectsByCategoryAndId(category, id) {
    const filteredObjects = {
      products: []
    };

    // Iterate over each product object
    for (const product of products.products) {
      if (product.category === category && product.id !== id) {
        filteredObjects.products.push(product);
      }
    }
    return filteredObjects;
  }

  // Calling the function when `data` is already defined
  const filteredData = filterObjectsByCategoryAndId(categoryId, productId);
  // console.log(filteredData)
  return /*#__PURE__*/React.createElement("div", {
    className: "related-products"
  }, /*#__PURE__*/React.createElement(Products, {
    headingText: "Related",
    products: filteredData
  }));
};
export default RelatedProducts;