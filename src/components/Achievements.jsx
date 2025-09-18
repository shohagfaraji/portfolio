import React, { useState } from "react";
import "./Achievements.css";

const achievementsData = [
    {
        category: "Winning",
        items: [
            {
                title: "Champion - অমর একুশে প্রোগ্রামিং কনটেস্ট ২০২৩, ইউএপি",
                description:
                    "Participated in the prestigious Amor Ekushe Programming Contest held at UAP (University of Asia Pacific), where our team successfully solved 8 out of 10 problems. We secured a commanding lead, outperforming the second-place team, who solved 5 out of 10 problems.",
                images: [require("../assets/achievements/win1.png")],
            },
            {
                title: "Best UAP Team - Inter University Collaborative Programing Contest (IUCPC) 2024",
                description:
                    "10 Private Universities Collaborated to Inter University Collaborative Programing Contest 1.0. It was hosted by University of Asia Pacific. We participated in Senior category. Our team achieved 1st place among all the UAP teams and secured 11th place in overall ranking.",
                images: [
                    require("../assets/achievements/win_2_1.jpg"),
                    require("../assets/achievements/win_2_2.png"),
                ],
            },
            {
                title: "Winner - Digital Logic & System Design Lab Final Project",
                description:
                    "This project demonstrates a simple yet effective 4-way traffic light system designed using digital logic ICs, primarily the 74HC4017 Johnson Decade Counter and a 555 timer in astable mode. It cycles through standard traffic light sequences for four directions, simulating a real-world traffic intersection.",
                images: [
                    require("../assets/achievements/win_3_1.png"),
                    require("../assets/achievements/win_3_2.png"),
                    require("../assets/achievements/win_3_3.png"),
                    require("../assets/achievements/win_3_4.png"),
                ],
            },
        ],
    },
    {
        category: "IUPC Participation",
        items: [
            {
                title: "United Group Presents BUET CSE Fest 2024",
                description: "",
                images: [require("../assets/achievements/buet_1.png")],
            },
            {
                title: "MIAKI PRESENTS KUET IUPC 2025",
                description: "",
                images: [require("../assets/achievements/kuet_1.jpg")],
            },
            {
                title: "UIU Inter-University Programming Contest 2025",
                description:
                    "Participated in the highly competitive UIU Inter-University Programming Contest 2025, where our team ranked 66th out of 160 teams from top universities across Bangladesh.",
                images: [
                    require("../assets/achievements/uiu_1.jpg"),
                    require("../assets/achievements/uiu_2.jpg"),
                ],
            },
            {
                title: "MTB Presents AUST Inter University Programming Contest 2025",
                description: "",
                images: [
                    require("../assets/achievements/aust_1.jpg"),
                    require("../assets/achievements/aust_2.jpg"),
                ],
            },
            {
                title: "Betopia Group Presents DUET IUPC 2025",
                description: "",
                images: [
                    require("../assets/achievements/duet_1.jpg"),
                    require("../assets/achievements/duet_2.jpg"),
                ],
            },
            {
                title: "Uttara University Inter-University Programming Contest 2025",
                description: "",
                images: [require("../assets/achievements/uu_1.png")],
            },
        ],
    },
    {
        category: "Online Judge",
        items: [
            {
                title: "Became Pupil on Codeforces",
                description:
                    "After participating in 177 contests on Codeforces, I earned the Pupil title. In the contest that marked my transition to Pupil status, I ranked 2807th, successfully solving 3 problems in Division 2. Alhamdulillah, I never resorted to cheating, despite facing delays - progress was achieved through hard work and perseverance, not shortcuts.",
                images: [
                    require("../assets/achievements/oj_1_0.png"),
                    require("../assets/achievements/oj_1_1.png"),
                ],
            },
            {
                title: "Solved 2000+ Problems on top platforms",
                description:
                    "Successfully solved over 2000 problems across multiple platforms, including Codeforces, LeetCode, AtCoder, CSES, and other competitive programming sites, demonstrating a strong commitment to continuous learning and problem-solving.",
                images: [require("../assets/achievements/2000p.png")],
            },
        ],
    },
    {
        category: "Academic Scholarships and Awards",
        items: [
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Spring - 2025",
                description:
                    "The ICPC JRC Scholarships are awarded based on individual performance in programming contests. Every semester, 5-10 contests are held, and top performers are recognized with this scholarship in memory of National Professor Jamilur Reza Choudhury sir, in partnership with the ICPC Foundation.",
                images: [require("../assets/achievements/jrc_24_25_1.png")],
            },
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Fall - 2024",
                description: "",
                images: [require("../assets/achievements/jrc_24_25_1.png")],
            },
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Spring - 2024",
                description:
                    "Received the ICPC JRC Scholarship Award Certificate from our respected Vice Chancellor in recognition of outstanding performance in individual programming contests.",
                images: [
                    require("../assets/achievements/jrc_23_24_2.jpg"),
                    require("../assets/achievements/jrc_23_24.png"),
                ],
            },
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Fall- 2023",
                description: "",
                images: [
                    require("../assets/achievements/jrc_23_24_1.jpg"),
                    require("../assets/achievements/jrc_23_24.png"),
                ],
            },
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Spring - 2023",
                description:
                    "Received the ICPC JRC Scholarship Award Certificate from the B.O.T. Chairman of UAP in recognition of outstanding performance in individual programming contests.",
                images: [
                    require("../assets/achievements/jrc_22_23_1.png"),
                    require("../assets/achievements/jrc_22_23_3.jpg"),
                ],
            },
            {
                title: "ICPC - Jamilur Reza Choudhury Scholarship, Fall - 2022",
                description: "",
                images: [
                    require("../assets/achievements/jrc_22_23_2.jpg"),
                    require("../assets/achievements/jrc_22_23_4.jpg"),
                ],
            },
            {
                title: "Vice Chancellor's Honour Award for Fall - 2024",
                description:
                    "Received the Vice Chancellor’s Honor Award for outstanding academic performance in the 4.1 semester (Fall 2024), achieving a GPA of 3.91.",
                images: [require("../assets/achievements/vc_award.png")],
            },
            {
                title: "Dean's Honour Award for Fall- 2023",
                description:
                    "Received the Dean’s Award for exceptional academic performance in the 3.1 semester (Fall 2023), achieving a GPA of 3.83.",
                images: [require("../assets/achievements/dean_award.png")],
            },
            {
                title: "Dean's Honour Award for Spring - 2023",
                description:
                    "Received the Dean’s Award for exceptional academic performance in the 2.2 semester (Spring 2023), achieving a GPA of 3.75.",
                images: [require("../assets/achievements/dean_award.png")],
            },
            {
                title: "Dean's Honour Award for Spring - 2022",
                description:
                    "Received the Dean’s Award for exceptional academic performance in the 1.2 semester (Spring 2022), achieving a GPA of 3.75.",
                images: [require("../assets/achievements/dean_award.png")],
            },
        ],
    },
    {
        category: "Extracurricular Activities",
        items: [],
    },
];

const Achievements = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (item) => {
        setActiveItem(item);
        setActiveIndex(0);
    };

    const closeModal = () => {
        setActiveItem(null);
        setActiveIndex(0);
    };

    const nextImage = () => {
        if (!activeItem) return;
        setActiveIndex((prev) => (prev + 1) % activeItem.images.length);
    };

    const prevImage = () => {
        if (!activeItem) return;
        setActiveIndex(
            (prev) =>
                (prev - 1 + activeItem.images.length) % activeItem.images.length
        );
    };

    return (
        <div className="achievements">
            <h1 className="achievements-title">Achievements</h1>

            <div className="achievements-grid">
                {achievementsData.map((cat, idx) => (
                    <div key={idx} className="category-card">
                        <h2 className="category-title">{cat.category}</h2>
                        <div className="items-grid">
                            {cat.items.map((item, j) => (
                                <div
                                    key={j}
                                    className="achievement-card"
                                    onClick={() => openModal(item)}
                                >
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="achievement-thumb"
                                    />
                                    <h3>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // prevent close on inside click
                    >
                        <button className="modal-close" onClick={closeModal}>
                            ✕
                        </button>
                        <h2 className="modal-title">{activeItem.title}</h2>

                        <div className="modal-image-wrapper">
                            <div
                                className="modal-image-clickable"
                                onClick={(e) => {
                                    const rect =
                                        e.currentTarget.getBoundingClientRect();
                                    const clickX = e.clientX - rect.left; // X position relative to image
                                    const half = rect.width / 2;

                                    if (clickX < half) {
                                        prevImage(); // left half → previous
                                    } else {
                                        nextImage(); // right half → next
                                    }
                                }}
                            >
                                <img
                                    src={activeItem.images[activeIndex]}
                                    alt={activeItem.title}
                                    className="modal-image"
                                />
                            </div>

                            {activeItem.images.length > 1 && (
                                <>
                                    <div className="dots">
                                        {activeItem.images.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={`dot ${
                                                    idx === activeIndex
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setActiveIndex(idx)
                                                }
                                            ></span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <p className="modal-description">
                            {activeItem.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;
