import React, { useContext } from "react";
import { Context } from "../../../Context/context";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
const CartItem = () => {
  const {
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity
  } = useContext(Context);

  // console.log(cartItems)
  return /*#__PURE__*/React.createElement("div", {
    className: "cart-products"
  }, cartItems.map(item => /*#__PURE__*/React.createElement("div", {
    className: "search-result-item",
    key: item.product.id,
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.product.thumbnail
  })), /*#__PURE__*/React.createElement("div", {
    className: "prod-details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, item.product.title), /*#__PURE__*/React.createElement(MdClose, {
    className: "close-btn",
    onClick: () => handleRemoveFromCart(item.product)
  }), /*#__PURE__*/React.createElement("div", {
    className: "quantity-buttons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => handleCartProductQuantity("dec", item.product)
  }, "-"), /*#__PURE__*/React.createElement("span", null, item.quantity), /*#__PURE__*/React.createElement("span", {
    onClick: () => handleCartProductQuantity("inc", item.product)
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("span", null, item.quantity), /*#__PURE__*/React.createElement("span", null, "x"), /*#__PURE__*/React.createElement("span", null, item.product.price), /*#__PURE__*/React.createElement("span", {
    className: "highlight"
  }, /*#__PURE__*/React.createElement("span", null, "$ "), (item.product.price * item.quantity).toFixed(2)))))));
};
export default CartItem;