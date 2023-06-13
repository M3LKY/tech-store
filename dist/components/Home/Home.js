import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import products from '../../data/products.json';
const Home = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, null), /*#__PURE__*/React.createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement(Category, null), /*#__PURE__*/React.createElement(Products, {
    headingText: "Trending",
    products: products
  }))));
};
export default Home;