import React from "react";

import ClientArtist from "../../Components/Client-Artist/client-artist";
import HomeLanding from "../../Components/HomeLanding/homeLanding";

function Homepage() {
  return (
    <div>
      <HomeLanding />
      <ClientArtist />
    </div>
  );
}

export default Homepage;
