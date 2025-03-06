import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selection from "./Pages/Selection";
import DegreeProgress from "./Pages/DegreeProgress";
import CreditReport from './Pages/CreditReport';
import CourseSelection from './Pages/CourseSelection.js';
import DegreeInfo from "./Pages/DegreeInfo";
import ElectiveRequirements from "./Pages/ElectiveRequirements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/degree-progress/:studentID" element={<DegreeProgress />} />
        <Route path="/credit-report/:studentID" element={<CreditReport />} />
        <Route path="/Course-Selection/:studentID" element={<CourseSelection />} />
        <Route path="/degree-information/:studentID" element={<DegreeInfo/>} />
        <Route path="/elective-requirements/:studentID/:requirement" element={<ElectiveRequirements/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

