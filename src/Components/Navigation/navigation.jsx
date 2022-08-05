import React from "react";
import { motion } from "framer-motion";

import Logo from "../../Assets/logo.png";

import "./navigation.scss";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="links-container">
        <motion.p whileTap={{ scale: 0.6 }}>Home</motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>Events</motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>Catalog</motion.p>
      </div>
      <div className="profile-container">
        <p>BW</p>
      </div>
    </div>
  );
}

export default Navigation;
