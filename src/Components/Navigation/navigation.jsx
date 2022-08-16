import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.png";

import "./navigation.scss";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <Link className="nav-link" to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links-container">
        <Link className="nav-link" to="/">
          <motion.p whileTap={{ scale: 0.6 }}>Home</motion.p>
        </Link>
        <Link className="nav-link" to="/seminars">
          <motion.p whileTap={{ scale: 0.6 }}>Seminars</motion.p>
        </Link>
        <motion.p whileTap={{ scale: 0.6 }}>Catalog</motion.p>
      </div>
      <div className="profile-container">
        <p>BW</p>
      </div>
    </div>
  );
}

export default Navigation;
