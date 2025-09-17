import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 1500);
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);

    // Apply class to body
    useEffect(() => {
        document.body.classList.remove("dark-mode", "light-mode");
        document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
    }, [darkMode]);

    return (
        <Router>
            <div className="app-wrapper">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                {/* <Alert alert={alert} /> */}
                <div className="container my-3 main-content">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <Home theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            exact
                            path="/about"
                            element={
                                <About theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            exact
                            path="/skills"
                            element={
                                <Skills theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            exact
                            path="/projects"
                            element={
                                <Projects theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            exact
                            path="/achievements"
                            element={
                                <Achievements
                                    theme={darkMode ? "dark" : "light"}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/contact"
                            element={
                                <Contact theme={darkMode ? "dark" : "light"} />
                            }
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
