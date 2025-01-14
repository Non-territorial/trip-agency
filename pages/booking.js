import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useMenu } from "../hooks/useMenu";

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

    useMenu();

    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.trip-agency.net/booking" />
                <title>Trip Agency | Booking Inquiry</title>
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
                    <p className="p2">Ⓒ 2025 Trip Agency All rights reserved</p>
                    <div className="menu-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                <div className="menu-content">
    <Link href="/" onClick={(e) => {
        e.preventDefault();
        if (window.location.pathname === "/" && window.location.search) {
            // Remove query parameters if already on the home page
            window.history.pushState({}, document.title, "/");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // Navigate to the home page
            window.location.href = "/";
        }
    }}>
        Home <span className="visually-hidden">Go to the Home Page</span>
    </Link>
    <Link href="/#eolie">
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
