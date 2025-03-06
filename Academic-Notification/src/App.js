import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selection from "./Pages/Selection";
import DegreeProgress from "./Pages/DegreeProgress";
import FakePage from "./Pages/FakePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/degree-progress/:studentID" element={<DegreeProgress />} />
        <Route path="/fake-page" element={<FakePage />} />
      </Routes>
    </Router>
  );
}

export default App;

