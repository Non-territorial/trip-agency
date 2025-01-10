import Head from "next/head";
import Newsletter from "../components/newsletter";
import AboutSection from "../components/AboutSection";
import Link from "next/link";
import VideoSection from '../components/VideoSection';
import { useMenu } from "../hooks/useMenu";

export default function Home() {
    useMenu(); 

    // Homepage-specific video data
    const homepageVideos = [
        {
            src: "qUggBqQ34mPlNtoSzBlYal02XBvdKRGX00pp2011Z5OXz4", // Mux playback ID
            title: "Discover Trip Agency - Hedonistic Retreats",
        },
    ];

    return (
        <>
<Head>
    <link rel="canonical" href="https://www.trip-agency.net/" />
    <title>Trip Agency | Hedonistic Retreats - Art, Wine and Cuisine</title>
    <meta name="description" content="Explore Trip Agency's Hedonistic Retreats turning audiovisual art, traditional cuisine and stunning locations into deeply transformative experiences. Discover our trips in Italy, Sweden, and Japan." />
    <meta property="og:title" content="Trip Agency" />
    <meta property="og:description" content="Experience transformative retreats in Italy, Sweden, and Japan." />
    <meta property="og:image" content="/og-image.png" />
</Head>


            <header className="navbar">
                <div className="navbar-left">
                    <Link href="/" className="brand" onClick={(e) => {
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
                        TRIP<span className="agency">AGENCY</span>
                    </Link>
                </div>
                <div className="navbar-right">
                <Link href="/booking" className="booking">BOOK</Link>
                </div>
            </header>

<main id="app" className="video-page">
                {/* Display the homepage video */}
                <VideoSection videos={homepageVideos} />
           

                <section id="packages" className="vertical-section">
                    <div className="content-wrapper">
                        <span className="jp-text">ヘドニスティック・リトリート</span>
                        <h1 className="heading">
                        Hedonistic Retreats<br />
    Art and Culinary Experiences
</h1>
<p className="description">
    Trip Agency blends unique <b>locations</b>, <b>art</b>, culinary offerings, and <b>hospitality</b>, creating <b>transformative</b> experiences set in Italy, Sweden, and Japan.
</p>
<p className="description">
    These <b>hedonistic retreats</b> are designed to provide an <b>escape</b>, offering an <b>environment</b> for indulging in <b>unexpected</b> moments. Each retreat is crafted using a Sonic Canvas, a <b>sound</b> ambiance inviting moments of reflection.
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
                    <div className="content-wrapper">
                        <h3 className="title">SONIC | CINEMATIC</h3>
                        <h2 className="heading">Settings</h2>
                        <p className="description">Each Trip hosts a set of art installations</p>
                    </div>
                </section>

                <section id="four" className="monteverde">
                    <div className="content-wrapper">
                        <h3 className="title">TIMING</h3>
                        <h2 className="heading">Four days</h2>
                        <p className="description">
                        TRIP Agency’s experiences are four-day retreats, inviting visitors to fully embrace a single, carefully selected location.<br />
                            <br />
                            Each site is chosen according to its unique features, and then transformed into a living art installation.
                        </p>
                    </div>
                </section>

                <section id="five" className="cuisine">
                    <div className="content-wrapper">
                        <h2 className="heading">Local Culture</h2>
                        <p className="description">
                            Our experiences include a selection of rare, high-quality wines and exceptional culinary offerings that highlights
                            the finest local flavors, carefully chosen to complement the artistic and cultural ambiance.
                        </p>
                    </div>
                </section>


                {/* Aeolian Islands */}
<section id="eolie" className="vertical-section-img">
                    <div className="image-container">
                        
                       
          <img
  src="https://gateway.pinata.cloud/ipfs/bafybeieovzcko4tsmgkldpdncsl2x5hf2z3d2vi5h7k6m3t44ezrwlqhl4"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">(UN)DISCLOSED</div>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Salina, Italy</span>
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
                            <span className="details-value">Audiovisual installation, food, wine and bar</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">02-05, 09-12 October 2025</span>
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
                        <div className="details-link">
    <a href="/trips/undisclosed" className="view-more-link">View more</a>
</div>
                    </div>
                </section>

                {/* Sweden */}
                <section id="sweden" className="vertical-section-img">
                    <div className="image-container">
                    
                       
          <img
  src="https://gateway.pinata.cloud/ipfs/bafybeihgthpatsdkpshkznaq5vpgyo26plmwy5kmalxgcitrntzos54cs4"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">SILENCE VENTURES</div>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Edsåsdalen, Sweden</span>
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
                            <span className="details-value">Audiovisual installation, food, wine and bar</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">03-06, 10-13, 17-20, 24-27 July 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">5,500 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                            In Northern Sweden, a unique remote villa set amidst pristine nature is transformed into a four-day Sonic Resort dedicated to deep listening. A curated collection of rare sound works is presented through both active and passive modes of experience, carefully arranged to harmonize with the surrounding wilderness and facilitate the discovery of new levels of perception.
                            </span>
                        </div>
                        <div className="details-link">
    <a href="/trips/silence-ventures" className="view-more-link">View more</a>
</div>
                    </div>
                </section>

                {/* Monte Argentario */}
                <section id="monte-argentario" className="vertical-section-img">
                    <div className="image-container">
                    
          <img
  src="https://gateway.pinata.cloud/ipfs/bafybeiawxtrvj5ma4hovmbdwpmob6627gjed4qkfp3bzzp7nilpjz6z674"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">MAGIC MOUNTAIN</div>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Monte Argentario, Italy</span>
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
                            <span className="details-value">Audiovisual installation, food, wine and bar</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">03-06, 10-13 April 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">6,000 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                            Tuscany. A contemporary seaside villa transformed into an art installation, offering a holistic experience that combines active and passive listening, a fully curated gastronomic journey, a bar, and the surrounding nature. Sounds shape the ambiance, seamlessly blending with the Mediterranean setting and the rugged beauty of the rocky ledges surrounding the villa, shaping the atmosphere and connecting deeply with the natural beauty of the Mediterranean.
                            </span>
                        </div>
                        <div className="details-link">
    <a href="/trips/magic-mountain" className="view-more-link">View more</a>
</div>
                    </div>
                </section>

                {/* Pantelleria */}
                <section id="pantelleria" className="vertical-section-img">
                    <div className="image-container">
                    <img
  src="https://gateway.pinata.cloud/ipfs/bafybeiab4rresrzvnjlgoup2vyxwnui4zozxmxpx33np24md435da7uxke"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">MONASTERO VENTO</div>
                        <div className="details-item">
                            <span className="details-label">Location</span>
                            <span className="details-value">Pantelleria, Italy</span>
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
                            <span className="details-value">Audiovisual installation, food, wine and bar</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">16-19 October 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Booking fee per guest</span>
                            <span className="details-value">7,500 EUR</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                            The famous villa, resembling a movie set, is transformed into TRIP, a four-day Sonic Exhibition. This creates an environment entirely dedicated to sound as the sole protagonist, offering a space for active and deep listening — a setting designed for contemplative engagement.
                            </span>
                        </div>
                        <div className="details-link">
    <a href="/trips/monastero-vento" className="view-more-link">View more</a>
</div>
                    </div>
                </section>


                {/* Japan */}
                <section id="japan" className="vertical-section-img">
                    <div className="image-container">
           <img
  src="https://gateway.pinata.cloud/ipfs/bafybeiepr7g7uyl3yjs7chasq6kons6brisltdb4ztqrmidyw2afadyo5i"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">UPCOMING</div>
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
                        <div className="details-link">
    <a href="/trips/upcoming" className="view-more-link">View more</a>
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
                    <p className="p2">Ⓒ 2025 Trip Agency All rights reserved</p>
                    <div className="menu-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                <div className="menu-content">
                <Link
    href="/"
    onClick={(e) => {
        e.preventDefault();
        if (window.location.pathname === "/" && window.location.search) {
            // Remove query parameters if already on the home page
            window.history.pushState({}, document.title, "/");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // Navigate to the home page
            window.location.href = "/";
        }
    }}
>
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