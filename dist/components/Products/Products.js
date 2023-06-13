import "./Products.scss";
import Product from "./Product/Product";
const Products = ({
  products,
  innerPage,
  headingText
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "products-container"
  }, !innerPage && /*#__PURE__*/React.createElement("div", {
    className: "sec-heading"
  }, headingText), /*#__PURE__*/React.createElement("div", {
    className: "products"
  }, products.products.slice(0, 12).map(item => /*#__PURE__*/React.createElement(Product, {
    key: item.id,
    id: item.id,
    product: item
  }))));
};
export default Products;