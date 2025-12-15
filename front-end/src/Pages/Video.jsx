import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import video from "../assets/Almodesk1-video.mp4";
import "../Styles/Video.css";

const Video = () => {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  };

  const options = {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "fullscreen",
    ],
    hideControls: true,
    clickToPlay: true,
    keyboard: false,
    settings: [], // remove triple dot
    disableContextMenu: true,
    fullscreen: { enabled: true },
    ratio: "16:9",
  };

  return (
   <section
  className="video-section"
>
  <div className="video-inner">
    <h3 className="fw-bold mb-4 text-center">
      🎥 Watch Superfone in action - just 2 minutes
    </h3>

    <div className="video-frame">
      <Plyr source={videoSrc} options={options} />
    </div>
  </div>
</section>
  );
};

export default Video;
