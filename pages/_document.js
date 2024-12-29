import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Add your global stylesheets here */}
                <link rel="stylesheet" href="/css/style.css" />
                <link href="https://vjs.zencdn.net/8.0.4/video-js.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
