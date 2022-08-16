import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/navigation";

import "./seminarLanding.scss";
import SeminarContainer from "../SeminarContainer/seminarContainer";

function SeminarLanding() {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    const fetchSeminars = async () => {
      const url = "http://localhost:3001/seminars";
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setSeminars(data));
    };

    fetchSeminars();
  }, []);

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
      <SeminarContainer seminars={seminars} />
    </div>
  );
}

export default SeminarLanding;
