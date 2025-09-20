import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const routeRefs = {
    "/": React.createRef(),
    "/about": React.createRef(),
    "/skills": React.createRef(),
    "/projects": React.createRef(),
    "/achievements": React.createRef(),
    "/contact": React.createRef(),
};

function AnimatedRoutes({ darkMode }) {
    const location = useLocation();
    const nodeRef = routeRefs[location.pathname] || React.createRef();

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.pathname}
                classNames="page"
                timeout={300}
                nodeRef={nodeRef}
                unmountOnExit
            >
                <div ref={nodeRef} className="page">
                    <Routes location={location}>
                        <Route
                            path="/"
                            element={
                                <Home theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <About theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            path="/skills"
                            element={
                                <Skills theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <Projects theme={darkMode ? "dark" : "light"} />
                            }
                        />
                        <Route
                            path="/achievements"
                            element={
                                <Achievements
                                    theme={darkMode ? "dark" : "light"}
                                />
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Contact theme={darkMode ? "dark" : "light"} />
                            }
                        />
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        document.body.classList.remove("dark-mode", "light-mode");
        document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
    }, [darkMode]);

    return (
        <Router>
            <div className="app-wrapper">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className="container my-3 main-content">
                    <AnimatedRoutes darkMode={darkMode} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
