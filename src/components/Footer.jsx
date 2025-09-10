import React from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    &copy; {currentYear} Shohag Faraji. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
