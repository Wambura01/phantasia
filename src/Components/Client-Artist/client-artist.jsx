import React from "react";
import { motion } from "framer-motion";

import ScrollArrow from "../ScrollArrow/scroll-arrow";

import Artist from "../../Assets/artist.jpg";
import Customer from "../../Assets/customer.jpg";

import AddIcon from "@mui/icons-material/Add";

import "./client-artist.scss";

function ClientArtist() {
  return (
    <div className="client-artist__container">
      <div className="are-you__container">
        <ScrollArrow />
      </div>
      <div id="client-artist" className="client-artist__content">
        <div className="client-container">
          <div className="title-container">
            <p className="title">Client?</p>
          </div>
          <div className="booking-container">
            <div className="image-container">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={Customer}
                alt="customer"
              />
            </div>
            <div className="heading-container">
              <p className="heading">
                Book a session with us down below to learn more
              </p>
            </div>
            <div className="link-container">
              <motion.p whileTap={{ scale: 0.6 }} className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Book a seminar
              </motion.p>
              <motion.p whileTap={{ scale: 0.6 }} className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Book an online session
              </motion.p>
              <motion.p whileTap={{ scale: 0.6 }} className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Book a facility session
              </motion.p>
            </div>
          </div>
        </div>
        <div className="artist-container">
          <div className="container-overlay"></div>
          <div className="title-container">
            <p className="title">Artist?</p>
          </div>
          <div className="booking-container">
            <div className="image-container">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={Artist}
                alt="customer"
              />
            </div>
            <div className="heading-container">
              <p className="heading">
                Book a session with us down below to learn more
              </p>
            </div>
            <div className="link-container">
              <p className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Propose a seminar
              </p>
              <p className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Propose an online session
              </p>
              <p className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Propose a facility session
              </p>
              <p className="booking-link">
                <span>
                  <AddIcon className="icon" />
                </span>
                Book a facility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientArtist;
