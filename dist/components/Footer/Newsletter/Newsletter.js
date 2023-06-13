import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const join = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Valid email address
      setEmail('');
      alert(`You're subscribed!`);
    } else {
      // Invalid email address
      alert('Please enter a valid email address.');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "newsletter-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "newsletter-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "small-text"
  }, "Newsletter"), /*#__PURE__*/React.createElement("span", {
    className: "big-text"
  }, "Be the first to know about our offers"), /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email Address",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: join
  }, "Join")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "social-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(FaFacebookF, {
    size: 14
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(FaTwitter, {
    size: 14
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(FaInstagram, {
    size: 14
  }))))));
};
export default Newsletter;