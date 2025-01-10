
import Head from "next/head";
import Link from "next/link";
import { useMenu } from "../../hooks/useMenu";
import VideoSection from "../../components/VideoSection"; // Assuming you already have this component




export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/trips.json`);
    const trips = await res.json();

    console.log("Trips fetched for paths:", trips); // Debugging log

    const paths = trips.map((trip) => ({
        params: { slug: trip.slug },
    }));

    console.log("Generated paths:", paths); // Debugging log
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/trips.json`);
    const trips = await res.json();

    console.log("Trips fetched for props:", trips); // Debugging log

    const trip = trips.find((trip) => trip.slug === params.slug);

    console.log("Matched trip:", trip); // Debugging log

    if (!trip) {
        return {
            notFound: true, // Return 404 if no trip matches
        };
    }

    return {
        props: { trip },
    };
}
export default function TripPage({ trip }) {
    useMenu(); // Hook for menu functionality

    return (
        <>
            {/* Metadata */}
            <Head>
                <title>{trip.title || "Trip"} | Trip Agency</title>
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
                    {trip.content.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
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
