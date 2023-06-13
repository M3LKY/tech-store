import React from "react";
import { scroller } from 'react-scroll';
import "./Banner.scss";

const Banner = () => {
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
          offset: -50, 
        });
      };
    return (
        <div className="hero-banner">
            
            <div className="content">
                <div className="text-content">
                    <h1>TECH-</h1>
                        <h1>STORE</h1>
                    <div className="ctas">
                        <div className="banner-cta" onClick={() => scrollToSection('category')}>Categories</div>
                        <div className="banner-cta v2" onClick={() => scrollToSection('products')}>Products</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
