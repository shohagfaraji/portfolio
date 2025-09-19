import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import MoonIcon from "../assets/moon.png";
import SunIcon from "../assets/sun.png";

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [open, setOpen] = useState(false);
    const highlightRef = useRef(null);
    const navRef = useRef(null);
    const location = useLocation();

    const links = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Skills", to: "/skills" },
        { name: "Projects", to: "/projects" },
        { name: "Achievements", to: "/achievements" },
        { name: "Contact", to: "/contact" },
    ];

    // Function to move the highlight box
    const moveHighlight = (el) => {
        if (!highlightRef.current || !navRef.current) return;
        const rect = el.getBoundingClientRect();
        const parentRect = navRef.current.getBoundingClientRect();

        highlightRef.current.style.width = rect.width + "px";
        highlightRef.current.style.height = rect.height + "px";
        highlightRef.current.style.left = rect.left - parentRect.left + "px";
        highlightRef.current.style.top = rect.top - parentRect.top + "px";
    };

    useEffect(() => {
        // Set highlight to the active link on load/route change
        const activeLink = document.querySelector(".nav-link.active");
        if (activeLink) moveHighlight(activeLink);
    }, [location.pathname]);

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="logo">
                    Shohag Faraji
                </Link>

                <ul className="nav-links" ref={navRef}>
                    <span className="nav-highlight" ref={highlightRef}></span>
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                onMouseEnter={(e) => moveHighlight(e.target)}
                                onMouseLeave={() => {
                                    const activeLink =
                                        document.querySelector(
                                            ".nav-link.active"
                                        );
                                    if (activeLink) moveHighlight(activeLink);
                                }}
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
