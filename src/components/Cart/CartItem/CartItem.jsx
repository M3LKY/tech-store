import React, { useContext } from "react";
import { Context } from "../../../Context/context";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";
const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
        useContext(Context);

        
    // console.log(cartItems)
    return (
        <div className="cart-products">
            {cartItems.map((item) => (
                <div
                    className="search-result-item"
                    key={item.product.id}
                    onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                                item.product.thumbnail
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.product.title}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => handleRemoveFromCart(item.product)}
                        />
                        <div className="quantity-buttons">
                            <span
                                onClick={() =>
                                    handleCartProductQuantity("dec", item.product)
                                }
                            >
                                -
                            </span>
                            <span>{item.quantity}</span>
                            <span
                                onClick={() =>
                                    handleCartProductQuantity("inc", item.product)
                                }
                            >
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span>{item.product.price}</span>
                            <span className="highlight">
                                <span>$ </span>
                                {(item.product.price *
                                    item.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
