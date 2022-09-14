import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { getSeminars } from "../../Redux/Actions/seminarActions";

import {
  TextField,
  InputAdornment,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import placeholder from "../../Assets/art-placeholder.jpg";

import { filterData } from "../../Utils/filterData";

import "./seminarContainer.scss";

function SeminarContainer() {
  const dispatch = useDispatch();
  const seminars = useSelector((state) => state.seminarReducer.seminarList);

  console.log("SEMINARS: ", seminars);

  const [filter, setFilter] = useState("");

  // handle user input
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  //handle user selection
  const handleSelect = (e) => {
    console.log("SELECTED: ", e.target.value);
    setFilter(e.target.value);
  };

  console.log("Filter", filter);

  // fetch seminars on mount
  useEffect(() => {
    getSeminars({ dispatch });
  }, []);

  return (
    <div className="seminars-container">
      <div className="filters-container">
        <div className="name-filter">
          <InputLabel
            sx={{
              fontFamily: `"Source Sans Pro", sans-serif`,
              color: "#2b2d2f",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          >
            Search by name:
          </InputLabel>
          <TextField
            label="By Name"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ cursor: "pointer" }} position="end">
                  <SearchIcon
                    component={motion.svg}
                    whileTap={{ scale: 0.6 }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              fontFamily: `"Source Sans Pro", sans-serif`,
              color: "#2b2d2f",

              "& label.Mui-focused": {
                color: "#654321",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "#2b2d2f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2b2d2f",
                },
              },
            }}
            placeholder="Type to filter..."
          />
        </div>
        <div className="location-filter">
          <InputLabel
            sx={{
              fontFamily: `"Source Sans Pro", sans-serif`,
              color: "#2b2d2f",
              fontSize: "1.2rem",
              marginRight: "1rem",
            }}
          >
            Search by location:
          </InputLabel>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={seminars?.map((seminar) => seminar.location)}
            onChange={(event, value) => setFilter(value)}
            sx={{
              width: 300,

              "& label.Mui-focused": {
                color: "#654321",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "#2b2d2f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2b2d2f",
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="Location" />}
          />
        </div>
      </div>
      <div className="seminars">
        {filterData(seminars, filter)?.map((seminar) => (
          <div key={seminar.id} className="seminar">
            <div className="img-container">
              <img src={placeholder} alt="art placeholder" />
            </div>
            <div className="text-container">
              <div className="titles">
                <p className="name">{seminar.name}</p>
                <p className="location">{seminar.location}</p>
              </div>
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
