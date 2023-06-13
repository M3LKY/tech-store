import { useNavigate } from "react-router-dom";
import "./Category.scss";
import msi from '../../../assets/msi.jpg';
const Category = () => {
  const navigate = useNavigate();
  const categories = [{
    id: 'apple',
    img: 'https://i.pinimg.com/736x/b9/7e/5a/b97e5a9b044ee6c4012298cb2c45faf3.jpg'
  }, {
    id: 'msi',
    img: msi
  }, {
    id: 'asus',
    img: 'https://w0.peakpx.com/wallpaper/976/385/HD-wallpaper-asus-logo-remastered.jpg'
  }, {
    id: 'razer',
    img: 'https://rare-gallery.com/mocahbig/1412159-razer-computer-logo-dark-hd-4k-black.jpg'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "shop-by-category"
  }, /*#__PURE__*/React.createElement("div", {
    className: "categories"
  }, categories.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    className: "category",
    onClick: () => navigate(`/tech-store/category/${item.id}`)
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img
  })))));
};
export default Category;