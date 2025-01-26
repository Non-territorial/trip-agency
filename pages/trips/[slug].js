
import Head from "next/head";
import Link from "next/link";
import { useMenu } from "../../hooks/useMenu";
import VideoSection from "../../components/VideoSection"; // Assuming you already have this component
import fs from 'fs';
import path from 'path';





export async function getStaticPaths() {
    try {
        // Read the static JSON file
        const filePath = path.join(process.cwd(), 'public', 'trips.json');
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const trips = JSON.parse(fileContents);

        const paths = trips.map((trip) => ({
            params: { slug: trip.slug },
        }));

        return {
            paths,
            fallback: false, // or true/false depending on your requirements
        };
    } catch (error) {
        console.error("Error in getStaticPaths:", error);
        return { paths: [], fallback: false };
    }
}


export async function getStaticProps({ params }) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'trips.json');
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const trips = JSON.parse(fileContents);

        const trip = trips.find((trip) => trip.slug === params.slug);

        if (!trip) {
            return { notFound: true };
        }

        return {
            props: {
                trip,
            },
        };
    } catch (error) {
        console.error("Error in getStaticProps:", error);
        return { props: {} };
    }
}



export default function TripPage({ trip }) {
    useMenu(); // Hook for menu functionality

    // Generate JSON-LD for structured data
    const generateJsonLd = () => ({
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": trip.title,
        "description": trip.content.description.join(" "),
        "offers": {
            "@type": "Offer",
            "price": trip.content.details.price.replace(",", "").replace(" EUR", ""),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
        },
        "tripOrigin": {
            "@type": "Place",
            "name": trip.content.details.location,
        },
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": trip.content.details.itinerary.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item,
            })),
        },
        "additionalProperty": trip.content.details.features.map((feature) => ({
            "@type": "PropertyValue",
            "name": feature,
            "value": true,
        })),
    });
    
    
    

return (
    <>
        {/* Metadata */}
        <Head>
    {/* Dynamic Page Title */}
    <title>{trip.title ? `${trip.title} | TRIP Agency` : "Hedonistic Retreats | TRIP Agency"}</title>


    {/* Meta Description */}
    <meta name="description" content={trip.content.description.join(" ")} />

    {/* Canonical URL */}
    <link rel="canonical" href={`https://www.trip-agency.net/trips/${trip.slug}`} />

    {/* Open Graph (OG) Tags for Social Sharing */}
    <meta property="og:title" content={trip.title} />
    <meta property="og:description" content={trip.content.description.join(" ")} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://www.trip-agency.net/trips/${trip.slug}`} />

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
    />
</Head>


            {/* Top Navbar */}
            <header className="navbar">
                <div className="navbar-left">
                    <Link
                        href="/"
                        className="brand"
                        onClick={(e) => {
                            e.preventDefault();
                            if (window.location.pathname === "/" && window.location.search) {
                                window.history.pushState({}, document.title, "/");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                                window.location.href = "/";
                            }
                        }}
                    >
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
            <main id="app" className="video-page">
                {/* Video Section */}
                <VideoSection
    videos={[
        {
            src: trip.video, // Dynamically fetch the video for the specific trip
            title: trip.title,
        },
    ]}
/>
<div className="outer-container">
<section id="packages" className="vertical-page">
    <div className="vertical-page-content">
        {/* Trip Title */}
        <span className="title">{trip.title || ""}</span>

        {/* Trip Heading */}
        {trip.content?.heading && <h1 className="heading">{trip.content.heading}</h1>}

        {/* Trip Description */}
        {trip.content?.description && (
    <div className="description">
        {trip.content.description.map((paragraph, index) => {
            const trimmedParagraph = paragraph.trim(); // Ensure extra spaces are removed

            // Check if the paragraph contains HTML (e.g., <a> tag)
            const containsHTML = /<\/?[a-z][\s\S]*>/i.test(trimmedParagraph);

            // Render HTML content directly if it contains HTML
            if (containsHTML) {
                return (
                    <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: trimmedParagraph }}
                    />
                );
            }

            // Render "Included" section
            if (trimmedParagraph === "INCLUDED:") {
                return <p key={index} className="included-title"><strong>Included:</strong></p>;
            }

            // Render "Not Included" section
            if (trimmedParagraph === "NOT_INCLUDED:") {
                return <p key={index} className="not_included-title"><strong>Not Included:</strong></p>;
            }

            // Render bullet points with indentation
            if (trimmedParagraph.startsWith("-")) {
                return <p key={index} style={{ marginLeft: "20px" }}>{trimmedParagraph}</p>;
            }

            // Render "Price per person" as bold
            if (trimmedParagraph.includes("Price per person:")) {
                const [label, value] = trimmedParagraph.split(":");
                return (
                    <p key={index}>
                        <strong>{label}:</strong> {value.trim()}
                    </p>
                );
            }

            // Render regular text
            return <p key={index}>{trimmedParagraph}</p>;
        })}
    </div>
)}
    </div>
</section>
</div>


            </main>

            {/* Bottom Navbar */}
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
                                window.history.pushState({}, document.title, "/");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
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
