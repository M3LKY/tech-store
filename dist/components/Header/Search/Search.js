import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import data from '../../../data/products.json';
const Search = ({
  setSearchModal
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = e => {
    setQuery(e.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "search-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    type: "text",
    placeholder: "",
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MdClose, {
    className: "close-btn",
    onClick: () => setSearchModal(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "search-result-content"
  }, !data.products.length && /*#__PURE__*/React.createElement("div", {
    className: "start-msg"
  }, "Start typing to see products you are looking for."), /*#__PURE__*/React.createElement("div", {
    className: "search-results"
  }, data.products.filter(item => {
    if (query == "") {
      return item;
    } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
      return item;
    }
  }).map(item => /*#__PURE__*/React.createElement("div", {
    className: "search-result-item",
    key: item.id,
    onClick: () => {
      navigate("/tech-store/product/" + item.id);
      setSearchModal(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.thumbnail
  })), /*#__PURE__*/React.createElement("div", {
    className: "prod-details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, item.title), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, item.description)))))));
};
export default Search;