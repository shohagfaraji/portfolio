import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import MoonIcon from "../assets/moon.png";
import SunIcon from "../assets/sun.png";

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Skills", to: "/skills" },
        { name: "Projects", to: "/projects" },
        { name: "Achievements", to: "/achievements" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="logo">
                    Shohag Faraji
                </Link>

                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="nav-buttons">
                    <button className="menu-btn" onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                    <img
                        src={darkMode ? MoonIcon : SunIcon}
                        alt="Toggle Dark/Light"
                        className="mode-toggle"
                        onClick={toggleDarkMode}
                    />
                </div>
            </div>

            {open && (
                <ul className="mobile-menu">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
