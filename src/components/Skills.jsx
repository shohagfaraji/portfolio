import React, { useState, useEffect } from "react";
import "./Skills.css";

import cppLogo from "../assets/skills/cpp.png";
import javascriptLogo from "../assets/skills/js.png";
import javaLogo from "../assets/skills/java.png";
import pythonLogo from "../assets/skills/python.png";
import sqlLogo from "../assets/skills/sql.png";

import mongodbLogo from "../assets/skills/mongodb.png";
import expressjsLogo from "../assets/skills/express.png";
import reactLogo from "../assets/skills/react.svg";
import nodejsLogo from "../assets/skills/nodejs.png";
import djangoLogo from "../assets/skills/django.svg";

import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/skills/github.png";
import vscodeLogo from "../assets/skills/vscode.svg";
import intellijLogo from "../assets/skills/ij.svg";
import pycharmLogo from "../assets/skills/pc.svg";

import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import bootstrapLogo from "../assets/skills/bootstrap.svg";

export default function Skills() {
    const [darkMode, setDarkMode] = useState(
        document.body.classList.contains("dark-mode")
    );

    useEffect(() => {
        document.title = "Skills";
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
        <div className={`skills-page-container ${darkMode ? "dark" : "light"}`}>
            <div className="skills-card">
                <div className="skills-section">
                    {/** Programming Languages */}
                    <h3 className="skills-section-title">
                        Programming Languages
                    </h3>
                    <div className="skills-row">
                        {[
                            { src: cppLogo, alt: "C++", name: "C++" },
                            {
                                src: javascriptLogo,
                                alt: "JavaScript",
                                name: "JavaScript",
                            },
                            { src: javaLogo, alt: "Java", name: "Java" },
                            { src: pythonLogo, alt: "Python", name: "Python" },
                        ].map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <img src={skill.src} alt={skill.alt} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/** Frameworks */}
                    <h3 className="skills-section-title">Web Technologies</h3>
                    <div className="skills-row">
                        {[
                            { src: reactLogo, alt: "React", name: "React" },
                            {
                                src: expressjsLogo,
                                alt: "ExpressJS",
                                name: "ExpressJS",
                            },
                            {
                                src: nodejsLogo,
                                alt: "Node.js",
                                name: "Node.JS",
                            },
                            { src: djangoLogo, alt: "Django", name: "Django" },
                            { src: htmlLogo, alt: "HTML", name: "HTML" },
                            { src: cssLogo, alt: "CSS", name: "CSS" },
                            {
                                src: bootstrapLogo,
                                alt: "Bootstrap",
                                name: "Bootstrap",
                            },
                            {
                                src: mongodbLogo,
                                alt: "MongoDB",
                                name: "MongoDB",
                            },
                            { src: sqlLogo, alt: "SQL", name: "SQL" },
                        ].map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <img src={skill.src} alt={skill.alt} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/** Tools & Platforms */}
                    <h3 className="skills-section-title">Tools & Platforms</h3>
                    <div className="skills-row">
                        {[
                            { src: gitLogo, alt: "Git", name: "Git" },
                            { src: githubLogo, alt: "GitHub", name: "GitHub" },
                            {
                                src: vscodeLogo,
                                alt: "VS Code",
                                name: "VS Code",
                            },
                            {
                                src: intellijLogo,
                                alt: "IntelliJ",
                                name: "IntelliJ",
                            },
                            {
                                src: pycharmLogo,
                                alt: "PyCharm",
                                name: "PyCharm",
                            },
                        ].map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <img src={skill.src} alt={skill.alt} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
