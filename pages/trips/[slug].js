
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

    return (
        <>
            {/* Metadata */}
            <Head>
            <title>{typeof trip.title === "string" ? `${trip.title} | Trip Agency` : "Trip | Trip Agency"}</title>

                <meta name="description" content={trip.description || "Description of the trip"} />
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

<section id="packages" className="vertical-page">
    <div className="content-wrapper">
        {/* Trip Title */}
        <span className="title">{trip.title || ""}</span>

        {/* Trip Heading */}
        {trip.content?.heading && <h1 className="heading">{trip.content.heading}</h1>}

        {/* Trip Description */}
        {trip.content?.description && (
            <div className="description">
                {trip.content.description.map((paragraph, index) => {
            const trimmedParagraph = paragraph.trim(); // Ensure extra spaces are removed

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
