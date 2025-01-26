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
            title: "Discover TRIP Agency - Hedonistic Retreats",
        },
    ];

    return (
        <>
<Head>
    {/* Canonical URL */}
    <link rel="canonical" href="https://www.trip-agency.net/" />

    {/* SEO Title */}
    <title>Hedonistic Retreats | Transformative Travel Experiences - Trip Agency</title>

    {/* Meta Description */}
    <meta name="description" content="Explore luxury hedonistic retreats with TRIP Agency. Indulge in art, wine, and fine cuisine in breathtaking locations across Italy, Sweden, and Japan." />

    {/* Open Graph (OG) for Social Media */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trip-agency.net/" />
    <meta property="og:title" content="Hedonistic Retreats | Transformative Travel Experiences" />
    <meta property="og:description" content="Discover transformative travel experiences blending art, culture, and gastronomy with TRIP Agency. Perfect for discerning travelers seeking luxury retreats." />
    <meta property="og:image" content="https://www.trip-agency.net/images/og-image.jpg" /> {/* Ensure the URL is absolute */}
    <meta property="og:image:alt" content="TRIP Agency's Hedonistic Retreats banner showcasing scenic landscapes." />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="TRIP Agency" />


    {/* Additional Verification and SEO Meta Tags */}
    <meta name="p:domain_verify" content="223d43cdd0380d3fe3e34270be7281dd" /> {/* Pinterest domain verification */}
    <meta name="keywords" content="luxury travel, transformative experiences, hedonistic retreats, art travel, audiovisual installations, gastronomic discoveries, quality wines, sonic baths, sonic exhibitions, infinite bar, Sweden retreats, Italy travel, Japan luxury tours, cultural excursions, natural excursions, TRIP Agency" />
    <meta name="author" content="TRIP Agency" />
    <meta name="robots" content="index, follow" />

    {/* Favicons */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {/* Preload Key Assets */}
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" as="style" />

    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Hedonistic Retreats | Transformative Travel Experiences",
                            "url": "https://www.trip-agency.net",
                            "logo": "https://www.trip-agency.net/images/logo.png",
                            "description": "TRIP Agency's Hedonistic Retreats combine art, wine, and cuisine into transformative experiences in Italy, Sweden, and Japan."
                        })
                    }}
                />
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
                        Hedonistic Retreats: <br />Art and Culinary Experiences
</h1>
<p className="description">
TRIP Agency's Hedonistic Retreats turn <b>art</b>, <b>cuisine</b> and stunning <b>locations</b> into <b>transformative</b> travel experiences. Discover our trips in Italy, Sweden, and Japan.
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
                    <div className="content-wrapper">
                        <h3 className="title">SONIC | CINEMATIC</h3>
                        <h2 className="heading">Settings</h2>
                        <p className="description">The unusual of TRIP Agency lies within its transformative capacities, turning selected locations into exhibition-experience environments.</p>
                    </div>
                </section>

                <section id="four" className="monteverde">
                    <div className="content-wrapper">
                        <h3 className="title">TIMING</h3>
                        <h2 className="heading">Four days</h2>
                        <p className="description">
                        TRIP Agency’s experiences are four-day retreats, inviting visitors to fully embrace a single, carefully selected location.<br />
                            <br />
                            Each site is chosen according its unique features, and then transformed into a living art installation.
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
                            <span className="details-value">30 to 40</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Distributed audiovisual installations, enogastronomic itineraries, listening sessions, local excursions</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">02-05, 09-12 October 2025</span>
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
                            <span className="details-value">08 to 12</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, gastronomic discoveries, listening sessions, infinite bar, natural excursions</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">03-06, 10-13, 17-20, 24-27 July 2025</span>
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
                            <span className="details-value">10 to 14</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, coastal enogastronomy, listening sessions, infinite bar, cultural excursions</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">03-06, 10-13 April, 01-04, 08-11 May 2025</span>
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
  src="https://gateway.pinata.cloud/ipfs/bafybeifi4bbluuvqogbcbqvx6fayxzdbuph6xvyuivc7lmtdafjzfkz3se"
  alt="invitation"
  width="2550"
  height="3300"
/>
                    </div>
                    <div className="details-block">
                        <div className="details-heading">DETAILS</div>
                        <div className="details-title">MONASTERO</div>
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
                            <span className="details-value">06 to 10</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Features</span>
                            <span className="details-value">Audiovisual installation, enogastronomic discoveries, listening sessions, infinite bar, mineral excursions</span>
                        </div>
                        <div className="details-item">
                            <span className="details-label">Dates</span>
                            <span className="details-value">11-14, 18-21 September 2025</span>
                        </div>
                        <div className="details-item">
                            <span className="details-info">
                            The intimate dammuso, resembling some kind of dream, is transformed into TRIP, a four-day Sonic Exhibition. This creates an environment entirely dedicated to sound as the sole protagonist, offering a space for active and deep listening — a setting designed for contemplative engagement.
                            </span>
                        </div>
                        <div className="details-link">
    <a href="/trips/monastero" className="view-more-link">View more</a>
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
            <p className="description">
                Email: <a href="mailto:i@trip-agency.net" className="email">i@trip-agency.net</a> <br />
                Telephone: <a href="tel:+393515635054" className="phone">+39 351 563 5054</a> <br />
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