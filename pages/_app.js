import Script from "next/script";
import "../styles/style.css";
import Head from "next/head";



export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
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
            <Component {...pageProps} />
        </>
    );
}
