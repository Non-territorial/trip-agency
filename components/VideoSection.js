import React from "react";
import Head from "next/head";
import MuxPlayer from "@mux/mux-player-react";

const VideoSection = ({ videos = [] }) => {
    const generateJsonLd = () => {
        const videoJsonLdArray = videos.map((video, index) => ({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.title || `Video ${index + 1}`,
            "description": video.description || "This video is the trailer of trip experience.",
            "thumbnailUrl": video.thumbnail || "https://yourdomain.com/default-thumbnail.jpg",
            "uploadDate": new Date().toISOString(),
            "contentUrl": `https://yourcdn.com/${video.src}`, // Direct video file URL (important for Google indexing)
            "embedUrl": `https://www.trip-agency.net/videos/${video.src}`, // Ensure the embed URL is stable
        }));

        return JSON.stringify(videoJsonLdArray, null, 2);
    };

    return (
        <section className="video-section">
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd() }} />
            </Head>

            {videos.map((video, index) => (
                <div key={index} className="video-container" style={{ position: "relative", marginBottom: "20px" }}>
                    <MuxPlayer
                        streamType="on-demand"
                        playbackId={video.src}
                        metadataVideoTitle={video.title || `Video ${index + 1}`}
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            backgroundColor: "black",
                        }}
                    />
                </div>
            ))}
        </section>
    );
};

export default VideoSection;
