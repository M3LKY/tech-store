import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../Context/context";
import CartItem from "./CartItem/CartItem";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';

import "./Cart.scss";

const Cart = () => {
  const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    try {
      // Set loading to true when the checkout process starts
      setLoading(true);

      const response = await axios.post('https://server-tech-store.onrender.com/checkout', { items: cartItems });
      const { sessionId } = response.data;

      const stripe = await loadStripe('pk_test_51N8QpmHaY9qo5pUxXwCOVYCnS9qMjgytbJkVq1yustxMJfYnR2FUWfcaEVporrnWPW0iU32QK1af97PLFj5Hyp1g00vJ4rIaOa');
      await stripe.redirectToCheckout({ sessionId });

      // Set loading back to false when the checkout process is completed
      setLoading(false);
    } catch (error) {
      console.error('Error during checkout:', error);
      setLoading(false);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX style={{ color: 'purple' }} />
            <span>You have no items in your cart.</span>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <div className="cart-items-container">
              <div className="cart-items-scroll">
                <CartItem />
              </div>
            </div>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">$ {cartSubTotal.toFixed(2)}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={checkout} disabled={loading}>
                  {loading ? 'Processing...' : 'Checkout'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
