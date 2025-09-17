import { useState } from "react";
import "./Projects.css";

const projects = [];

export default function Projects({ theme }) {
    const [selected, setSelected] = useState(null);

    const openModal = (project) => setSelected(project);
    const closeModal = () => setSelected(null);

    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>

            {/* Project Cards */}
            <div className="projects-grid">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className="project-card"
                        onClick={() => openModal(proj)}
                    >
                        <img
                            src={
                                theme === "dark" ? proj.imgDark : proj.imgLight
                            }
                            alt={proj.title}
                        />
                        <h3>{proj.title}</h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="project-modal" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <h3>
                            <b>{selected.title}</b>
                        </h3>

                        <img
                            src={
                                theme === "dark"
                                    ? selected.gifDark || selected.imgDark
                                    : selected.gifLight || selected.imgLight
                            }
                            alt={selected.title}
                        />

                        <p>{selected.description}</p>

                        <div className="tech-stack">
                            {selected.tech.map((t, i) => (
                                <span key={i} className="tech-badge">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="modal-buttons">
                            <a
                                href={selected.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href={selected.live}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {selected.id === 3
                                    ? "Watch Video"
                                    : "View Live"}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
