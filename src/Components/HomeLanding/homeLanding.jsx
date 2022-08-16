import React from "react";

import Navigation from "../Navigation/navigation";

import bgVideo from "../../Assets/Brown.mp4";

import "./homeLanding.scss";

function HomeLanding() {
  return (
    <div className="landing-container">
      <div className="video-container">
        <video muted loop autoPlay className="bg-video">
          <source src={bgVideo} />
        </video>
      </div>
      <Navigation />
      <div className="landing-content">
        <div className="left">
          <p className="left-text">Bring art to your day-to-day life.</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default HomeLanding;
