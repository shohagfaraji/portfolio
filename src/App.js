import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Achievements from "./components/Achievements";
// import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 1500);
    };

    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                {/* <Alert alert={alert} /> */}
                <div className="container my-3 main-content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        {/* <Route exact path="/skills" element={<Skills />} /> */}
                        {/* <Route exact path="/projects" element={<Projects />} /> */}
                        {/* <Route
                            exact
                            path="/achievements"
                            element={<Achievements />}
                        /> */}
                        {/* <Route exact path="/contact" element={<Contact />} /> */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
