import { useState, useEffect } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-left">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-subtitle">You can reach me on:</p>
                <div className="contact-links">
                    <a
                        href="https://github.com/shohagfaraji"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shohagfaraji/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a
                        href="https://codeforces.com/profile/cse"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiCodeforces /> Codeforces
                    </a>
                    <a
                        href="https://leetcode.com/u/shohagfaraji/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiLeetcode /> LeetCode
                    </a>
                    <a href="mailto:shohagfaraji2@gmail.com">
                        <FaEnvelope /> Email
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-right">
                {sent ? (
                    <div className="success-message">
                        <div className="success-icon">
                            <svg
                                viewBox="0 0 120 120"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    className="success-circle"
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    fill="none"
                                />
                                <path
                                    className="success-check"
                                    d="M40 65 L55 80 L85 45"
                                    fill="none"
                                />
                            </svg>
                        </div>
                        <p>Message sent successfully!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}
