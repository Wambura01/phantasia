import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage/homepage";
import Seminars from "./Pages/Seminars/seminars";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/seminars" element={<Seminars />} />
      </Routes>
    </div>
  );
}

export default App;
