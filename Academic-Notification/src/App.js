import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selection from "./Pages/Selection";
import DegreeProgress from "./Pages/DegreeProgress";
import CreditReport from './Pages/CreditReport';
import CourseSelection from './Pages/CourseSelection.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/degree-progress/:studentID" element={<DegreeProgress />} />
        <Route path="/credit-report/:studentID" element={<CreditReport />} />
        <Route path="/Course-Selection/:studentID" element={<CourseSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

