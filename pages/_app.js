import Head from "next/head";
import "../styles/style.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "PagesMeter",
                            "url": "https://www.PagesMeter.com",
                            "logo": "https://www.PagesMeter.com/logo.png",
                        }),
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
