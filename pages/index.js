import Head from "next/head";
import { useEffect } from "react";
import Newsletter from "../components/newsletter";
import AboutSection from "../components/AboutSection";
import Link from "next/link";
import Script from "next/script";
import VideoSection from '../components/VideoSection';


export default function Home() {
    useEffect(() => {
        // Menu toggle functionality
        const trigger = document.querySelector(".menu-trigger");
        const menuContent = document.querySelector(".menu-content");

        if (trigger && menuContent) {
            trigger.addEventListener("click", () => {
                menuContent.style.display =
                    menuContent.style.display === "flex" ? "none" : "flex";
            });

            document.addEventListener("click", (event) => {
                if (!menuContent.contains(event.target) && !trigger.contains(event.target)) {
                    menuContent.style.display = "none";
                }
            });
        }

        return () => {
            // Cleanup event listeners to prevent memory leaks
            if (trigger) trigger.removeEventListener("click", null);
            document.removeEventListener("click", null);
        };
    }, []);

    return (
        <>
<Head>
    <title>Trip Agency | Hedonistic Retreats- Unique Art and Culinary Experiences in Italy, Sweden, and Japan.</title>
    <meta name="description" content="Trip Agency provides unique retreats blending art, hospitality, and hedonistic experiences." />
    <meta property="og:title" content="Trip Agency" />
    <meta property="og:description" content="Experience transformative retreats in Italy, Sweden, and Japan." />
    <meta property="og:image" content="/og-image.png" />
</Head>


            <header className="navbar">
                <div className="navbar-left">
                    <Link href="/" className="brand">
                        TRIP<span className="agency">AGENCY</span>
                    </Link>
                </div>
                <div className="navbar-right">
                <Link href="/booking" className="booking">BOOK</Link>
                </div>
            </header>

<main id="app" className="video-page">
  <VideoSection />

                <section id="packages" className="vertical-section">
                    <div className="content-wrapper">
                        <span className="jp-text">ヘドニスティック・リトリート</span>
                        <h1 className="heading">Hedonistic Retreats<br />in Italy, Sweden, and Japan</h1>


                        <p className="description">
    We blend unique <b>locations</b>, <b>art</b>, cuisine, and <b>hospitality</b>, creating hedonistic and <b>transformative</b> experiences set in Italy, Sweden, and Japan.
</p>
<p className="description">
    These <b>retreats</b> are designed to provide an <b>escape</b>, offering an <b>environment</b> for indulging in <b>unexpected</b> moments. Each retreat is crafted using a Sonic Canvas, a <b>sound</b> ambiance inviting moments of reflection.
</p>
<p className="description">
Imagine spending several nights in a <b>museum</b> or <b>gallery</b> within an atmosphere of <b>poetic dimension</b>, in an unfamiliar environment, or conversely, one that feels deeply familiar.
</p>
<p className="description">
It’s about <b>reducing</b> the distance between <b>art and life</b>.
</p>

                    </div>
                </section>

                <section id="three" className="room">
                    <div className="text-block">
                        <h3 className="title">SONIC | CINEMATIC</h3>
                        <h2 className="heading">Settings</h2>
                        <p className="description">Each location hosts a set of art installations</p>
                    </div>
                </section>

                <section id="four" className="monteverde">
                    <div className="content-wrapper">
                        <h3 className="title">TIMING</h3>
                        <h2 className="heading">Four days</h2>
                        <p className="description">
                        TRIP Agency’s experiences are four-day retreats, inviting visitors to fully embrace a single, carefully selected location.<br />
                            <br />
                            Each site is chosen according to its unique features, and then transformed into a living installation.
                        </p>
                    </div>
                </section>

                <section id="five" className="cuisine">
                    <div className="content-wrapper">
                        <h2 className="heading">Local Culture</h2>
                        <p className="description">
                            Our experiences include a selection of rare, high-quality wines and exceptional cuisine that highlights
                            the finest local flavors, carefully chosen to complement the artistic and cultural ambiance.
                        </p>
                    </div>
                </section>

                {/* Monte Argentario */}
                <section id="monte-argentario" className="vertical-section-img">
                    <div className="image-container">
                        <img
                            src="https://gateway.pinata.cloud/ipfs/bafybeia7hsyn7iitne5f75c7j5adnrj4efymxazpcaqovxi73okdz5wkc4"
                            alt="invitation"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="details-block">
                        <h3 className="details-heading">DETAILS</h3>
                        <h1 className="details-title">MAGIC MOUNTAIN</h1>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Monte Argentario | Italy</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Experience</span>
                            <span className="details-value">4 nights</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Guests</span>
                            <span className="details-value">up to 14</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, food, wine, bar and full hosting</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates | Spring</span>
                            <span className="details-value">03-06 | 10-13 April 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">6,000 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                                Presenting a Sonic Exhibition where sound shapes the ambiance, seamlessly blending with the
                                Mediterranean setting and the rugged beauty of the rocky ledges surrounding the villa.
                            </span>
                        </div>
                    </div>
                </section>

                {/* Pantelleria */}
                <section id="pantelleria" className="vertical-section-img">
                    <div className="image-container">
                        <img
                            src="https://gateway.pinata.cloud/ipfs/bafybeifk3ezy5hcuyfbeniawl4dycoy3243x2hsapcxlfbmfsc37fjgwua"
                            alt="invitation"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="details-block">
                        <h3 className="details-heading">DETAILS</h3>
                        <h1 className="details-title">MONASTERO VENTO</h1>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Pantelleria | Italy</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Experience</span>
                            <span className="details-value">4 nights</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Guests</span>
                            <span className="details-value">up to 14</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, food, wine, bar and full hosting</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates | Spring</span>
                            <span className="details-value">16-19 October 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">6,000 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                                The famous villa, for multiple Cinematic occasions, transformed into sonic exhibition lasting for four
                                days. The Sonic Exhibition is an environment entirely dedicated to sound as the sole protagonist.
                                The space to engage in active and deep listening, a setting for contemplative engagement.
                            </span>
                        </div>
                    </div>
                </section>

{/* Aeolian Islands */}
<section id="eolie" className="vertical-section-img">
                    <div className="image-container">
                        <img
                            src="https://gateway.pinata.cloud/ipfs/bafybeibd6bt2phtjudtkeqwii5zc6yyjawfpipubbvxpt222ebpsnctzcm"
                            alt="Aeolian Islands"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="details-block">
                        <h3 className="details-heading">DETAILS</h3>
                        <h1 className="details-title">(UN)DISCLOSED</h1>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Salina|Aeolian Islands|Italy</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Experience</span>
                            <span className="details-value">4 nights</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Guests</span>
                            <span className="details-value">42</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, food, wine, bar and full hosting</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates | Autumn</span>
                            <span className="details-value">02-05|09-12 October 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">5,000 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                            (UN)DISCLOSED is a travel experience in the form of an exhibition. It is an art experience set on Salina, a remote Sicilian island of the Mediterranean Sea, comprised of several distributed exhibitions throughout the island. (UN)DISCLOSED will turn your stay into a live art experience, in an absolutely unprecedented way. 
                            </span>
                        </div>
                    </div>
                </section>

                {/* Sweden */}
                <section id="sweden" className="vertical-section-img">
                    <div className="image-container">
                        <img
                            src="https://gateway.pinata.cloud/ipfs/bafkreifrux5ainslvhffyp3vjmp3cmshhu3lsb6one7bo6dy7vqxnrsjia"
                            alt="Sweden"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="details-block">
                        <h3 className="details-heading">DETAILS</h3>
                        <h1 className="details-title">SILENCE VENTURES</h1>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Edsåsdalen|Sweden</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Experience</span>
                            <span className="details-value">4 nights</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Guests</span>
                            <span className="details-value">Up to 12</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, food, wine, bar and full hosting</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates|Summer</span>
                            <span className="details-value">03-06|10-13|17-20|24-27 July 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">6,500 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                                A unique A-frame house transformed into a four-day Sonic Resort for deep listening.
                            </span>
                        </div>
                    </div>
                </section>

                {/* Japan */}
                <section id="japan" className="vertical-section-img">
                    <div className="image-container">
                        <img
                            src="https://gateway.pinata.cloud/ipfs/bafybeieydbahejlehqbgkzty23pa2qahx2t5whbwqobim4azgvyf6abjwe"
                            alt="Japan"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="details-block">
                        <h3 className="details-heading">DETAILS</h3>
                        <h1 className="details-title">UPCOMING</h1>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Japan</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Experience</span>
                            <span className="details-value">4 nights</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Guests</span>
                            <span className="details-value"></span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value"></span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">2026</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value"></span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                                An upcoming series of locations and artistic programs across Japan.
                            </span>
                        </div>
                    </div>
                </section>

                <AboutSection />


{/* Contact Section */}
<section id="contact" className="contact">
    <div className="content-wrapper">
        {/* Contact Us */}
        <div className="contact-us">
            <h2 className="heading">Contact Us</h2>
            <p className="description">
                Feel free to reach out with any <b><a href="/booking" className="inquiry">inquiry</a></b> for
                additional details.
            </p>
        </div>
        
        {/* Newsletter */}
        <div className="newsletter">
            <Newsletter />
        </div>
    </div>
</section>
</main>

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