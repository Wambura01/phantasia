import React from "react";

import "./scroll-arrow.scss";

function ScrollArrow() {
  return (
    <a class="link" href="#client-artist">
      <span class="link__arrow">
        <span></span>
        <span></span>
      </span>
      <span class="link__line"></span>
      <span class="link__text">Are You...</span>
    </a>
  );
}

export default ScrollArrow;
