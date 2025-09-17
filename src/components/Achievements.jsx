import React, { useState } from "react";
import "./Achievements.css";

const achievementsData = [
    {
        category: "Winning",
        items: [],
    },
    {
        category: "Online Judge",
        items: [],
    },
    {
        category: "IUPC Participation's",
        items: [],
    },
    {
        category: "Academic Awards and Scholarships",
        items: [],
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
                            <img
                                src={activeItem.images[activeIndex]}
                                alt={activeItem.title}
                                className="modal-image"
                            />

                            {activeItem.images.length > 1 && (
                                <>
                                    <button
                                        className="nav left"
                                        onClick={prevImage}
                                    >
                                        ‹
                                    </button>
                                    <button
                                        className="nav right"
                                        onClick={nextImage}
                                    >
                                        ›
                                    </button>

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
