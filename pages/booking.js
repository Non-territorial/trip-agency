import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        trip: "",
        guests: "",
        message: "",
    });

    const [formMessage, setFormMessage] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormMessage("Booking inquiry submitted successfully!");
                setFormData({ name: "", email: "", trip: "", guests: "", message: "" });
            } else {
                const errorData = await response.json();
                setFormMessage(`Failed to submit: ${errorData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error submitting booking inquiry:", error);
            setFormMessage("An error occurred. Please try again.");
        }
    };

    useEffect(() => {
        const trigger = document.querySelector(".menu-trigger");
        const menuContent = document.querySelector(".menu-content");

        const toggleMenu = () => {
            if (menuContent) {
                menuContent.style.display =
                    menuContent.style.display === "flex" ? "none" : "flex";
            }
        };

        const closeMenu = (event) => {
            if (
                menuContent &&
                !menuContent.contains(event.target) &&
                trigger &&
                !trigger.contains(event.target)
            ) {
                menuContent.style.display = "none";
            }
        };

        if (trigger) {
            trigger.addEventListener("click", toggleMenu);
            document.addEventListener("click", closeMenu);
        }

        return () => {
            if (trigger) trigger.removeEventListener("click", toggleMenu);
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Book - Trip Agency</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="navbar">
                <div className="navbar-left">
                    <Link href="/" className="brand">
                        TRIP<span className="agency">AGENCY</span>
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link href="/booking" className="booking">
                        BOOK
                    </Link>
                </div>
            </header>

            <section className="book-section">
                <div id="book">
                    <h2>INQUIRE</h2>
                    <form id="book-form" className="book-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            name="trip"
                            value={formData.trip}
                            onChange={handleChange}
                            placeholder="Trip you are interested in"
                            required
                        />
                        <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            placeholder="Number of guests"
                            min="1"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <p id="form-message">{formMessage}</p>
                </div>
            </section>

            <footer className="bottom-menu">
                <nav className="bottom-navbar">
                    <p className="p2">Ⓒ 2025 Brave Hills Ltd All rights reserved</p>
                    <div className="menu-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                <div className="menu-content">
    <Link href="/">
        Home <span className="visually-hidden">Go to the Home Page</span>
    </Link>
    <Link href="/#monte-argentario">
        Trips <span className="visually-hidden">Explore Our Trips</span>
    </Link>
    <Link href="/#about">
        About <span className="visually-hidden">Learn About Us</span>
    </Link>
    <Link href="/#contact">
        Contact <span className="visually-hidden">Get in Touch</span>
    </Link>
    <Link href="/t&c">
        T&C <span className="visually-hidden">Terms and Conditions</span>
    </Link>
</div>

            </footer>
        </>
    );
}
