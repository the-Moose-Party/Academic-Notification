import React from 'react';

function DegreeProgress() {
  return (
    <div className="degree-progress">
      {/* Top section with major and minor details */}
      <div className="top-section">
        <div className="major">Major: Computer Science</div>
        <div className="minor">Minor: XXX</div>
        <div className="declared-date">Declared Date: 20XX</div>
      </div>

      {/* Academic year in review section */}
      <div className="year-in-review">
        <div className="year-in-review-header">Academic Year in Review</div>
        <div className="year-in-review-content">
          <div className="credits">75 Total Credits</div>
          <div className="major-progress">
            <div className="major-name">Major: Computer Science...</div>
            <div className="progress-bar">{/* Placeholder for progress bar */}</div>
          </div>
          <div className="major-progress">
            <div className="major-name">Major: Electrical Engineering...</div>
            <div className="progress-bar">{/* Placeholder for progress bar */}</div>
          </div>
        </div>
      </div>

      {/* Bottom section with buttons and links */}
      <div className="bottom-section">
        <button className="today-button">Today</button>
        <button className="play-button">▶</button>
        <a href="#" className="view-transcript">View Unofficial Transcripts</a>
      </div>
    </div>
  );
}

export default DegreeProgress;