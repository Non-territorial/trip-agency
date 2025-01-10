import React from "react";
import MuxPlayer from "@mux/mux-player-react";

const VideoSection = ({ videos = [] }) => {
    return (
        <section className="video-section">
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
    objectFit: "cover", // Ensures the video fills the space proportionally
    backgroundColor: "black", // Prevents gaps
    
  }}
/>
                </div>
            ))}
        </section>
    );
};

export default VideoSection;
