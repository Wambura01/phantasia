import React from "react";

import TextField from "@mui/material/TextField";

import placeholder from "../../Assets/art-placeholder.jpg";

import "./seminarContainer.scss";

function SeminarContainer({ seminars }) {
  return (
    <div className="seminars-container">
      <div className="filters-container">
        <TextField
          label="Filter"
          variant="outlined"
          placeholder="Type to Filter"
        />
      </div>
      <div className="seminars">
        {seminars.map((seminar) => (
          <div className="seminar">
            <div className="img-container">
              <img src={placeholder} alt="art placeholder" />
            </div>
            <div className="text-container">
              <p className="name">{seminar.name}</p>
              <p className="location">{seminar.location}</p>
              <div className="info">
                <p className="text">
                  <span>Attendees:</span> {seminar.number}
                </p>
                <p className="text">
                  <span>Price:</span> {seminar.price}
                </p>
                <p className="text">
                  <span>From:</span> {seminar.date}
                </p>
                <p className="text">
                  <span>For:</span> {seminar.days} <span>days</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeminarContainer;
