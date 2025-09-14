import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "./Home.css";
import LightImage from "../assets/coding_day.png";
import DarkImage from "../assets/coding_night.png";
import { useEffect, useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(
        document.body.classList.contains("dark-mode")
    );

    useEffect(() => {
        document.title = "Home";
        const observer = new MutationObserver(() => {
            setDarkMode(document.body.classList.contains("dark-mode"));
        });
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-container">
            {/* Left Half (Image) */}
            <div className="home-left">
                <img
                    src={darkMode ? DarkImage : LightImage}
                    alt="Shohag"
                    className="home-image"
                />
            </div>

            {/* Right Half (Text + Typing + Button) */}
            <div className="home-right">
                <h1
                    className={`intro-title ${
                        darkMode ? "dark-text" : "light-text"
                    }`}
                >
                    Hi I'm Shohag 👋
                </h1>

                <div className="typed-wrapper">
                    <ReactTyped
                        className={`intro-typed ${
                            darkMode ? "dark-subtext" : "light-subtext"
                        }`}
                        strings={[
                            "🎓 Computer Science and Engineering Student",
                            "🌐 Interested in Building and Exploring Technology",
                            "🧩 Solved over 2000 problems on Codeforces",
                            "💻 a Competitive Programmer (Codeforces <span style='color:" +
                                (darkMode ? "#1aff5bff" : "#1fd100ff") +
                                "'><b>Pupil</b></span>)",
                        ]}
                        typeSpeed={20}
                        backSpeed={20}
                        backDelay={1500}
                        loop
                    />
                </div>

                <Link
                    to="/projects"
                    className={`projects-btn ${
                        darkMode ? "dark-btn" : "light-btn"
                    }`}
                >
                    View My Projects
                </Link>
            </div>
        </div>
    );
}
