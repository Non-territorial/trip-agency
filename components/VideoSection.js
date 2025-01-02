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
        <section className="video-section" style={{ margin: 0, padding: 0, height: "100vh" }}>
            <video
                ref={videoRef}
                muted
                autoPlay
                loop
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    margin: 0,
                    padding: 0,
                }}
            />
        </section>
    );
};

export default VideoSection;
