import { useNavigate } from "react-router-dom";
import "./Category.scss";
import msi from '/msi.jpg'
import asuslog from "/asuslog.jpg"
import razerlog from "/razerlog.jpg"
import iphonelog from "/iphonelog.jpg"

const Category = () => {
    const navigate = useNavigate();
    const categories = [
        {
            id: 'apple',
            img: iphonelog
        },
        {
            id: 'msi',
            img: msi
        },
        {
            id: 'asus',
            img: asuslog
        },
        {
            id: 'razer',
            img: razerlog
        },
    ]
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/tech-store/category/${item.id}`)}
                    >
                        <img src={item.img} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
