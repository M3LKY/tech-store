import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "About"), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "Welcome to TECH-STORE, your one-stop destination for top-tier technology from Apple, Razer, Asus, and Msi. Experience innovation at its finest.")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "c-item"
  }, /*#__PURE__*/React.createElement(FaLocationArrow, null), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "1500 Apalachee Pkwy, Tallahassee, FL 32301, United States")), /*#__PURE__*/React.createElement("div", {
    className: "c-item"
  }, /*#__PURE__*/React.createElement(FaMobileAlt, null), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "Phone: 590 654 2354")), /*#__PURE__*/React.createElement("div", {
    className: "c-item"
  }, /*#__PURE__*/React.createElement(FaEnvelope, null), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "Email: techstore@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Categories"), /*#__PURE__*/React.createElement("span", {
    className: "text",
    onClick: () => {
      navigate('/tech-store/category/apple');
    }
  }, "A p p l e"), /*#__PURE__*/React.createElement("span", {
    className: "text",
    onClick: () => {
      navigate('/tech-store/category/msi');
    }
  }, "M s i"), /*#__PURE__*/React.createElement("span", {
    className: "text",
    onClick: () => {
      navigate('/tech-store/category/asus');
    }
  }, "A s u s"), /*#__PURE__*/React.createElement("span", {
    className: "text",
    onClick: () => {
      navigate('/tech-store/category/razer');
    }
  }, "R a z e r")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bottom-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottom-bar-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Copyright \xA9 2023 TECH-STORE. All right reserved."), /*#__PURE__*/React.createElement("img", {
    src: Payment
  }))));
};
export default Footer;