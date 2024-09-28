import React, { useRef, useEffect } from "react";
import myVideo from "../assets/implementation_video.mp4"; // Adjust the path as necessary

const VideoComponent = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    const video = videoRef.current;

    // Function to handle the ended event
    const handleVideoEnded = () => {
      video.currentTime = 0; // Reset the video to the start
      video.play(); // Play the video again
    };

    // Add event listener for when the video ends
    if (video) {
      video.addEventListener("ended", handleVideoEnded);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <div
      className="video-container"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "30px",
      }}
    >
      <video
        ref={videoRef} // Attach the ref to the video element
        controls
        autoPlay
        muted
        style={{
          width: "200%",
          height: "600px",
          borderRadius: "20px",
          marginRight: "20px",
          marginLeft: "100px",
        }}
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
