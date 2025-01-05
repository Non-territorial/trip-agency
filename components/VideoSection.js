import { useEffect, useRef } from "react";
import shaka from "shaka-player";

const VideoSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const player = new shaka.Player(video);

            player
                .load("https://stream.mux.com/oFF6SHarBZJmgo01oNcVXo4d59cCRHlrQ4IaRRoVOzl00.m3u8")
                .then(() => {
                    console.log("The video has been loaded!");
                    video.play().catch((error) => console.error("Video autoplay failed:", error));
                })
                .catch((error) => {
                    console.error("Error loading video:", error);
                });

            return () => {
                player.destroy(); // Cleanup the player instance
            };
        }
    }, []);

    return (
        <section className="video-section">
            <video
    ref={videoRef}
    muted
    autoPlay
    loop
    preload="auto"
    style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Centers the video
        width: "100%",
        height: "100%",
        objectFit: "contain", // Preserves aspect ratio and adds black bars
        backgroundColor: "black", // Ensures black bars
        margin: 0,
        padding: 0,
    }}
/>
        </section>
    );
};

export default VideoSection;
