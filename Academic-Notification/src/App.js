import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selection from "./Pages/Selection";
import DegreeProgress from "./Pages/DegreeProgress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/degree-progress/:studentID" element={<DegreeProgress />} />
      </Routes>
    </Router>
  );
}

export default App;

