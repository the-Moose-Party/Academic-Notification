import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selection from "./Pages/Selection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
      </Routes>
    </Router>
  );
}

export default App;

