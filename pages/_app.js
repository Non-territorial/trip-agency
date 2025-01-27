import { Analytics } from "@vercel/analytics/react"; // Vercel Analytics
import Script from "next/script"; // Google Analytics
import "../styles/style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <div className="vpn-warning">
                If you're experiencing issues accessing this site, please check your VPN settings.
                Some VPNs may block access. Try disabling your VPN or using a different region.
            </div>
            {/* Head Section */}
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hedonistic Retreats | Art, Wine & Cuisine</title> {/* Optional: Add a default title */}
            </Head>

            {/* Google Analytics Scripts */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-NBVLCF33EK"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NBVLCF33EK', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>

            {/* Main Component */}
            <Component {...pageProps} />

            {/* Vercel Analytics */}
            <Analytics />
        </>
    );
}
