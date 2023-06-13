import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../Context/context";
import Cart from "../Cart/Cart";
import { TfiGame } from 'react-icons/tfi';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const {
    cartCount,
    showCart,
    setShowCart
  } = useContext(Context);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `main-header ${scrolled ? "sticky-header" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(TfiGame, {
    onClick: () => navigate("/tech-store")
  })), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement(TbSearch, {
    onClick: () => setSearchModal(true)
  }), /*#__PURE__*/React.createElement("span", {
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/React.createElement(CgShoppingCart, null), !!cartCount && /*#__PURE__*/React.createElement("span", null, cartCount))))), searchModal && /*#__PURE__*/React.createElement(Search, {
    setSearchModal: setSearchModal
  }), showCart && /*#__PURE__*/React.createElement(Cart, null));
};
export default Header;