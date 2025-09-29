import { useState, useEffect } from "react";
import { PROJECTS_IMAGES } from "../assets/projects";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "📚 ShiftText – Text Utility & Encoding Tool",
        imgLight: PROJECTS_IMAGES.ShiftTextLogoLight,
        imgDark: PROJECTS_IMAGES.ShiftTextLogoDark,
        gifLight: PROJECTS_IMAGES.shiftTextLight,
        gifDark: PROJECTS_IMAGES.shiftTextDark,
        description:
            "ShiftText is a React-based text utility tool offering live word/character count, case conversion, word replacement, Morse code & Caesar cipher encoding/decoding, link extraction, space cleanup, and export to .txt or PDF. It also includes a customizable countdown timer for study sessions or exam prep.",
        tech: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/shohagfaraji/react-text-tool",
        live: "https://shifttext.netlify.app/",
    },
    {
        id: 2,
        title: "Thesis: Fall Detection in Surveillance Systems Using YOLO and Pose-Based Analysis",
        imgLight: PROJECTS_IMAGES.thesis,
        imgDark: PROJECTS_IMAGES.thesis,
        gifLight: PROJECTS_IMAGES.thesis_1,
        gifDark: PROJECTS_IMAGES.thesis_1,
        description:
            "A functional vision based fall detection system has been developed for monitoring human activity in surveillance footage. It can classify human states such as walking, sitting, and falling using YOLO-based object detection and verifies posture using pose estimation techniques.",
        tech: [
            "Python",
            "OpenCV",
            "Deep Learning",
            "YOLOv8",
            "YOLOv11",
            "Pose Estimation",
        ],
        github: "",
        live: "",
    },
    {
        id: 3,
        title: "CSE 426: Computer Graphics Lab",
        imgLight: PROJECTS_IMAGES.national_martyrs_monument,
        imgDark: PROJECTS_IMAGES.national_martyrs_monument_dark,
        gifLight: PROJECTS_IMAGES.national_martyrs_monument,
        gifDark: PROJECTS_IMAGES.national_martyrs_monument_dark,
        description:
            "A collection of creative graphics programs developed as part of the Computer Graphics Lab course. The project includes custom-designed scenes such as the National Martyrs' Monument and other illustrative diagrams. Implemented using core graphics concepts including transformations, drawing algorithms, and user interaction, with a final project showcasing advanced rendering and scene composition.",
        tech: ["C++", "OpenGL", "GLUT"],
        github: "https://github.com/shohagfaraji/computer-graphics-lab-works",
        live: "https://www.youtube.com/playlist?list=PLxi-FW-37nrXWuxjpmq0iJrB9EfK4loiw",
    },
    {
        id: 4,
        title: "🚦 4-Way Traffic Light Control System Without Arduino",
        imgLight: PROJECTS_IMAGES.traffic_system,
        imgDark: PROJECTS_IMAGES.traffic_system,
        gifLight: PROJECTS_IMAGES.traffic_system_circuit,
        gifDark: PROJECTS_IMAGES.traffic_system_circuit,
        description:
            "This project demonstrates a simple yet effective 4-way traffic light system designed using digital logic ICs, primarily the 74HC4017 Johnson Decade Counter and a 555 timer in astable mode. It cycles through standard traffic light sequences for four directions, simulating a real-world traffic intersection.",
        tech: [
            "Johnson Counter",
            "555 timer",
            "LEDs",
            "resistors",
            "capacitors",
            "potentiometer",
            "Breadboard ",
            "DC/battery input",
        ],
        github: "https://github.com/shohagfaraji/dlsd-lab-final-project",
        live: "https://github.com/shohagfaraji/dlsd-lab-final-project/tree/main/videos",
    },
];

export default function Projects({ theme }) {
    const [selected, setSelected] = useState(null);

    const openModal = (project) => setSelected(project);
    const closeModal = () => setSelected(null);

    useEffect(() => {
        document.title = "Projects";
    }, []);

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
                        <div className="modal-header">
                            <h3>
                                <b>{selected.title}</b>
                            </h3>
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                        </div>

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
                                {selected.id === 2
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
