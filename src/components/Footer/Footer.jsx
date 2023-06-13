import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to TECH-STORE, your one-stop destination for top-tier technology from Apple, Razer, Asus, and Msi. Experience innovation at its finest.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        1500 Apalachee Pkwy, Tallahassee, FL 32301, United States
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 590 654 2354</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: techstore@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={()=>{navigate('/category/apple')}}>A p p l e</span>
                    <span className="text" onClick={()=>{navigate('/category/msi')}}>M s i</span>
                    <span className="text" onClick={()=>{navigate('/category/asus')}}>A s u s</span>
                    <span className="text" onClick={()=>{navigate('/category/razer')}}>R a z e r</span>
                </div>
                <div className="col">
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Copyright &copy; 2023 TECH-STORE. All right reserved.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
