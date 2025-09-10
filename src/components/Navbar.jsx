import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MoonIcon from "../assets/moon.png";
import SunIcon from "../assets/sun.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Skills", to: "/skills" },
        { name: "Projects", to: "/projects" },
        { name: "Achievements", to: "/achievements" },
        { name: "Contact", to: "/contact" },
    ];

    // Toggle dark/light mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Apply the dark/light class to body
    useEffect(() => {
        document.body.classList.remove("dark-mode", "light-mode"); // remove any previous
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }, [darkMode]);

    useEffect(() => {
        if (
            !document.body.classList.contains("dark-mode") &&
            !document.body.classList.contains("light-mode")
        ) {
            document.body.classList.add("light-mode");
        }
    }, []);


    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="logo">
                    Shohag Faraji
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Right-side buttons */}
                <div className="nav-buttons">
                    {/* Mobile menu button */}
                    <button className="menu-btn" onClick={() => setOpen(!open)}>
                        ☰
                    </button>

                    {/* Dark/light mode toggle */}
                    <img
                        src={darkMode ? MoonIcon : SunIcon}
                        alt="Toggle Dark/Light"
                        className="mode-toggle"
                        onClick={toggleDarkMode}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="mobile-menu">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.to} onClick={() => setOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
