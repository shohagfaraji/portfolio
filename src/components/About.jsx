import "./About.css";
import { useEffect, useState } from "react";

import contestBannerDarkBG from "../assets/about/trophy_dark_mode.svg";
import eid_code_quest_uap from "../assets/about/eid_code_quest_uap.png";
import uap_practice_contest_2023 from "../assets/about/uap_practice_contest_2023.jpg";
import upcoming_contest from "../assets/about/upcoming_contest.svg";

import icpc_world_final from "../assets/about/icpc_world_final.jpg";
import team_tokyo from "../assets/about/team_tokyo.png";
import pcc_club_president from "../assets/about/pcc_club_president.png";
import club_president from "../assets/about/club_president.jpg";
import uap_iucpc_host from "../assets/about/uap_iucpc_host.JPG";
import batch from "../assets/about/batch.png";
import stopstalk from "../assets/about/stopstalk.jpeg";
import csheatmap2023 from "../assets/about/csheatmap2023.png";

export default function About() {
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        document.title = "About";
    }, []);

    const pastContests = [
        {
            title: "Eid Code Quest - UAP",
            banner: contestBannerDarkBG,
            contestLink: "https://toph.co/contests/training/hgnw43b",
            pdfLink: "#",
            details: {
                images: [eid_code_quest_uap],
                description:
                    "This was a festive contest organized during Eid, featuring original problems designed to test algorithmic thinking. The event was sponsored by varsity alumni, who contributed a generous cash prize, which was later distributed among all the participants.",
            },
        },
        {
            title: "UAP Practice Contest",
            banner: contestBannerDarkBG,
            contestLink: "https://toph.co/contests/training/6whf2ve",
            pdfLink: "#",
            details: {
                images: [uap_practice_contest_2023],
                description:
                    "A practice contest to help juniors prepare for bigger competitions by solving original problems.",
            },
        },
        {
            title: "C++ STL: Level One",
            banner: contestBannerDarkBG,
            contestLink: "https://toph.co/contests/training/4bzbbdk",
            pdfLink: "#",
            details: {
                images: [upcoming_contest],
                description:
                    "This contest focused on the built-in C++ STL data structures, covering more than 15 different types, to help participants sharpen their knowledge and implementation skills in C++ STL.",
            },
        },
        {
            title: "C++ STL: Level Zero",
            banner: contestBannerDarkBG,
            contestLink: "https://toph.co/contests/training/geyf43k",
            pdfLink: "#",
            details: {
                images: [upcoming_contest],
                description:
                    "This contest focused on the built-in C++ STL data structures, covering more than 15 different types, with the goal of motivating and helping new programmers eager to learn C++ STL.",
            },
        },
    ];

    const highlights = [
        {
            title: (
                <>
                    I volunteered at the 45<sup>th</sup> ICPC World Finals,
                    Dhaka.
                </>
            ),
            image: icpc_world_final,
            details: {
                images: [team_tokyo],
                description:
                    "I had the honor of volunteering at the 45th ICPC World Finals, where I had the opportunity to interact with top programmers from around the world. In this picture, I am with the team from the University of Tokyo.",
            },
        },
        {
            title: "Event Coordinator, Inter-University Collaborative Programming Contest (IUCPC) 2023",
            image: uap_iucpc_host,
            details: {
                images: [uap_iucpc_host],
                description:
                    "Led the coordination of one of the largest programming contests held at UAP. Worked closely with a dedicated team to manage logistics, planning, and execution. The event was a great success, conducted seamlessly with no major issues, and received positive feedback from participants and faculty.",
            },
        },
        {
            title: "StopStalk Top Performer In Bangladesh",
            image: batch,
            details: {
                images: [stopstalk],
                description:
                    "Recognized as a top performer on StopStalk for consistent problem solving across multiple platforms.",
            },
        },
        {
            title: "Codeforces Heatmap",
            image: csheatmap2023,
            details: {
                images: [csheatmap2023],
                description:
                    "A visual representation of my Codeforces participation, showcasing consistency and dedication.",
            },
        },
        {
            title: "President, UAP Programming Contest Club (PCC)",
            image: pcc_club_president,
            details: {
                images: [club_president],
                description:
                    "Served as the President of PCC, the most resourceful and active club at UAP. I had aspired to join the club since my first semester, and it was a rewarding experience to lead it in my 4.1 semester (earlier than the typical eligibility of 4.2). Despite being the first to hold this position before 4.2, I effectively collaborated with senior club leaders and ensured smooth coordination across multiple activities and events.",
            },
        },
    ];

    const renderModal = (card, isContest = false) => (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{card.title}</h2>
                    <button
                        className="modal-close"
                        onClick={() => setSelectedCard(null)}
                    >
                        ×
                    </button>
                </div>
                <div className="modal-images">
                    {card.details?.images?.map((img, i) => (
                        <img key={i} src={img} alt={card.title} />
                    ))}
                </div>
                {card.details?.description && <p>{card.details.description}</p>}

                {isContest && (
                    <div className="card-buttons">
                        <a
                            href={card.contestLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contest
                        </a>
                        <a href={card.pdfLink} target="_blank" rel="noreferrer">
                            Problem Set
                        </a>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
                Hello! I'm <span className="highlight">Shohag Faraji</span>, a
                <b> Computer Science and Engineering</b> student passionate
                about solving problems through code and building impactful
                software solutions.
            </p>

            <h3 className="section-title">🎓 Education</h3>
            <ul className="about-list">
                <li>
                    B.Sc. in Computer Science and Engineering –{" "}
                    <b>University of Asia Pacific</b>
                    <div className="grade">
                        3.70/4.00 (Last semester ongoing)
                    </div>
                    <br />
                </li>
                <li>
                    HSC at <b>Milestone College</b> (Science background)
                </li>
            </ul>

            <h3 className="section-title">🌱 Interests</h3>
            <div className="cards-section">
                Beyond coding, I conduct competitive programming classes for
                juniors at our university, explore new technologies, read about
                innovative problem-solving approaches, and also organize
                programming contests by writing original problems myself.
            </div>

            <h3 className="section-title">🧩 Problem Setting</h3>

            {/* Contests */}
            <div className="cards-section">
                {pastContests.map((contest, idx) => (
                    <div
                        className="highlights-card"
                        key={idx}
                        onClick={() =>
                            setSelectedCard({ ...contest, type: "contest" })
                        }
                    >
                        <img src={contest.banner} alt={contest.title} />
                        <h4>{contest.title}</h4>
                    </div>
                ))}
            </div>

            {/* Other Highlights */}
            <h3 className="section-title">✨ Other Highlights</h3>
            <div className="cards-section">
                {highlights.map((ach, idx) => (
                    <div
                        className="highlights-card"
                        key={idx}
                        onClick={() =>
                            setSelectedCard({ ...ach, type: "highlights" })
                        }
                    >
                        <img src={ach.image} alt={ach.title} />
                        <h4>{ach.title}</h4>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCard &&
                renderModal(selectedCard, selectedCard.type === "contest")}
        </div>
    );
}
