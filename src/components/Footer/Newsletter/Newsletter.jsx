import React, {useState} from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
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
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Be the first to know about our offers
                </span>
                <div className="form">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={join}>Join</button>
                </div>
                
                <br /><br />
                <span className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank">
                        <div className="icon">
                            <FaFacebookF size={14} />
                        </div>
                    </a>
                    <a href="https://twitter.com/" target="_blank" >
                        <div className="icon">
                            <FaTwitter size={14} />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
