import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import products from '../../data/products.json'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products
                        headingText="Trending"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
