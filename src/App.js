import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./Context/context";
function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      AppContext,
      null,
      React.createElement(Header, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/tech-store",
          element: React.createElement(Home, null),
        }),
        React.createElement(Route, {
          path: "/tech-store/category/:id",
          element: React.createElement(Category, null),
        }),
        React.createElement(Route, {
          path: "/tech-store/product/:id",
          element: React.createElement(SingleProduct, null),
        })
      ),
      React.createElement(Newsletter, null),
      React.createElement(Footer, null)
    )
  );
}
export default App;
