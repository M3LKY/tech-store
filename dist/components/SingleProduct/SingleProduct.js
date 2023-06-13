import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/context";
import { useParams } from "react-router-dom";
import products from '../../data/products.json';
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const {
    id
  } = useParams();
  const {
    handleAddToCart
  } = useContext(Context);
  const decrement = () => {
    setQuantity(prevState => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity(prevState => prevState + 1);
  };
  // console.log(products)
  let product;
  for (let i = 0; i < products.products.length; i++) {
    if (products.products[i].id === id) {
      product = products.products[i];
      break; // Exit the loop once the matching product is found
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "single-product-main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "single-product-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.thumbnail
  })), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, product.title), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "$ ", product.price), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, product.description), /*#__PURE__*/React.createElement("div", {
    className: "cart-buttons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity-buttons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: decrement
  }, "-"), /*#__PURE__*/React.createElement("span", null, quantity), /*#__PURE__*/React.createElement("span", {
    onClick: increment
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "add-to-cart-button",
    onClick: () => {
      handleAddToCart(product, quantity);
      setQuantity(1);
    }
  }, /*#__PURE__*/React.createElement(FaCartPlus, {
    size: 20
  }), "ADD TO CART")), /*#__PURE__*/React.createElement("span", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-bold"
  }, "Category:", " ", /*#__PURE__*/React.createElement("span", null, product.category)), /*#__PURE__*/React.createElement("span", {
    className: "text-bold"
  }, "Share:", /*#__PURE__*/React.createElement("span", {
    className: "social-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FaFacebookF, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FaTwitter, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(FaInstagram, {
    size: 14
  }))))))), /*#__PURE__*/React.createElement(RelatedProducts, {
    productId: product.id,
    categoryId: product.category
  })));
};
export default SingleProduct;