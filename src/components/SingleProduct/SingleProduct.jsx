import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/context";
import { useParams } from "react-router-dom";
import {products} from '../../data/products.js'
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const { handleAddToCart } = useContext(Context);
    
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    // console.log(products)
    let product
    for (let i = 0; i < products.products.length; i++) {
        if (products.products[i].id === id) {
            product = products.products[i];
            break; // Exit the loop once the matching product is found
        }
    }

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                                product.thumbnail
                            }
                        />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">$ {product.price}</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(product, quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {product.category}
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <a href="https://www.facebook.com/" target="_blank">
                                            <FaFacebookF size={14} />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" >
                                            <FaTwitter size={14} />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                            <FaInstagram size={14} />
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productId={product.id}
                    categoryId={product.category}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
