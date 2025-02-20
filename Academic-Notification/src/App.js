import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selection from "./Pages/Selection";
import DegreeProgress from "./Pages/DegreeProgress";
import DegreeInfo from "./Pages/DegreeInfo";
import ElectiveRequirements from "./Pages/ElectiveRequirements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/degree-progress/:studentID" element={<DegreeProgress />} />
        <Route path="/degree-information/:studentID" element={<DegreeInfo/>} />
        <Route path="/elective-requirements/:studentID" element={<ElectiveRequirements/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

