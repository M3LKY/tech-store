import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../Context/context";
import CartItem from "./CartItem/CartItem";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import "./Cart.scss";
const Cart = () => {
  const {
    cartItems,
    setShowCart,
    cartSubTotal
  } = useContext(Context);
  const checkout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/checkout', {
        items: cartItems
      });
      const {
        sessionId
      } = response.data;
      const stripe = await loadStripe('pk_test_51N8QpmHaY9qo5pUxXwCOVYCnS9qMjgytbJkVq1yustxMJfYnR2FUWfcaEVporrnWPW0iU32QK1af97PLFj5Hyp1g00vJ4rIaOa');
      await stripe.redirectToCheckout({
        sessionId
      });
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cart-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "opac-layer",
    onClick: () => setShowCart(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "cart-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "heading"
  }, "Cart"), /*#__PURE__*/React.createElement("span", {
    className: "close-btn",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/React.createElement(MdClose, {
    className: "close-btn"
  }))), !cartItems.length && /*#__PURE__*/React.createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/React.createElement(BsCartX, {
    style: {
      color: 'purple'
    }
  }), /*#__PURE__*/React.createElement("span", null, "You have no items in your cart.")), !!cartItems.length && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart-items-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-items-scroll"
  }, /*#__PURE__*/React.createElement(CartItem, null))), /*#__PURE__*/React.createElement("div", {
    className: "cart-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subtotal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Subtotal:"), /*#__PURE__*/React.createElement("span", {
    className: "text total"
  }, "$ ", cartSubTotal.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement("button", {
    className: "checkout-cta",
    onClick: checkout
  }, "Checkout"))))));
};
export default Cart;