import React from "react";
import { scroller } from 'react-scroll';
import "./Banner.scss";
const Banner = () => {
  const scrollToSection = sectionId => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -50
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-content"
  }, /*#__PURE__*/React.createElement("h1", null, "TECH-"), /*#__PURE__*/React.createElement("h1", null, "STORE"), /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner-cta",
    onClick: () => scrollToSection('category')
  }, "Categories"), /*#__PURE__*/React.createElement("div", {
    className: "banner-cta v2",
    onClick: () => scrollToSection('products')
  }, "Products")))));
};
export default Banner;