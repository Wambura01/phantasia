import React from "react";
import Navigation from "../Navigation/navigation";

import "./seminarLanding.scss";
import SeminarContainer from "../SeminarContainer/seminarContainer";

function SeminarLanding() {
  return (
    <div className="seminars-page__container">
      <Navigation />
      <div className="landing-container">
        <div className="left">
          <p className="title">Seminars</p>
          <p className="description">
            It is our ability to find solutions in even the most difficult
            situations that has helped us deliver our best results. We drill
            down into the granular details of an issue so that we can provide
            unprecedented results and instigate new and amazing art pieces. And
            we build everything with you.
          </p>
        </div>
        <div className="right"></div>
      </div>
      <SeminarContainer />
    </div>
  );
}

export default SeminarLanding;
