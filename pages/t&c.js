import Head from "next/head";
import Link from "next/link";
import { useMenu } from "../hooks/useMenu";

export default function TermsAndConditions() {
    useMenu();


    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.trip-agency.net/t&c" />
                <title>Trip Agency | Terms and Conditions</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
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

            {/* Main Content */}
            <div id="app" className="terms-content">
            <section>
                    <h3>TERMS AND CONDITIONS FOR TRIP Agency SERVICES</h3>
                    <p>
                        Welcome to TRIP Agency. Please read these terms and conditions carefully before using our
                        website and services.
                    </p>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to TRIP Agency, an ultra-high-quality provider of personal art and travel experiences.
                        These Terms and Conditions outline the rules and regulations for the use of TRIP Agency's
                        website and services. By booking a service or using our website, you agree to be bound by
                        these Terms and Conditions.
                    </p>
                    <h2>2. Company Information</h2>
                    <p>
                        TRIP Agency is a trademark and brand owned, managed, and operated by Brave Hills Ltd., a
                        company registered in England with registration number 15061340, based at 4th Floor,
                        Silverstream House, 45 Fitzroy Street, London, England, W1T 6EB.
                    </p>
                    <h2>3. Services</h2>
                    <p>
                        TRIP Agency provides personalized luxury art and travel experiences in unique locations. The
                        services offered include, but are not limited to, curated events, immersive art installations,
                        and bespoke travel arrangements.
                    </p>
                    <h2>4. Booking and Payments</h2>
                    <p>
                        - Booking: All bookings must be made through the TRIP Agency website or by contacting our
                        customer service. Reservations are subject to availability.
                    </p>
                    <p>
                        - Pricing: The prices listed are per person and may vary depending on the package and
                        customization selected.
                    </p>
                    <p>
                        - Payment Terms: A deposit may be required at the time of booking. Full payment must be
                        completed as per the terms specified at the time of booking.
                    </p>
                    <p>
                        - Cancellations and Refunds: Cancellations made within the agreed-upon window may qualify for
                        a partial refund. Please contact TRIP Agency for specific cancellation policies related to
                        your booking.
                    </p>
                    <h2>5. Clients Responsibilities</h2>
                    <p>
                        By participating in a TRIP Agency experience, clients agree to conduct themselves respectfully
                        and responsibly. TRIP Agency reserves the right to remove any client who disrupts an experience
                        or fails to follow venue or staff instructions.
                    </p>
                    <h2>6. Intellectual Property</h2>
                    <p>
                        All materials on the TRIP Agency website, including images, text, and design, are the
                        intellectual property of Brave Hills Ltd. and are protected by copyright and trademark laws.
                        Unauthorized use of these materials is prohibited.
                    </p>
                    <h2>7. Liability</h2>
                    <p>
                        TRIP Agency and Brave Hills Ltd. shall not be held liable for any loss, damage, or injury
                        sustained during the experience, except where it is proven to be due to negligence by TRIP
                        Agency staff or agents.
                    </p>
                    <h2>8. Data Protection and Privacy</h2>
                    <p>
                        TRIP Agency is committed to protecting your personal data. Our Privacy Policy explains how we
                        collect, use, and protect information. By using our services, you agree to the terms outlined
                        in our Privacy Policy.
                    </p>
                    <h2>9. Changes to Terms and Conditions</h2>
                    <p>
                        TRIP Agency reserves the right to modify these Terms and Conditions at any time. Changes will
                        be effective immediately upon posting to our website, and continued use of our services
                        constitutes acceptance of the updated Terms.
                    </p>
                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms and Conditions are governed by the laws of England and Wales. Any disputes arising
                        from these terms shall be resolved in the courts of England.
                    </p>
                    <h2>11. Contact Us</h2>
                    <p>
                        For any questions or concerns regarding these Terms and Conditions, please contact TRIP Agency
                        at <a href="mailto:i@trip-agency.net" className="about-email">i@trip-agency.net</a> or by mail at Brave Hills Ltd.,
                        4th Floor, Silverstream House, 45 Fitzroy Street, London, England, W1T 6EB.
                    </p>
                </section>
            </div>

            {/* Footer */}
            <div className="bottom-menu">
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

            </div>

        </>
    );
}

