import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import DegreeProgress from './components/DegreeProgress'; // Import your DegreeProgress component

function App() {
  return (
    <Router>  {/* Wrap the app with BrowserRouter */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* Remove the button as navigation is handled by routes */}
        </header>

        {/* Define Routes here (optional, can be in a separate file) */}
        <Routes>
          <Route path="/" element={<DegreeProgress />} /> {/* Replace Home with your default component */}
          {/* ... other routes if needed ... */}
          <Route path="/degree-progress" element={<DegreeProgress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;