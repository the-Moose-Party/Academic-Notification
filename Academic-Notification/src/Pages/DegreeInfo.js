import React from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../css/DegreeInfo.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';



export default function DegreeInfo(){
    const { studentID } = useParams();


    const { state } = useLocation();  // Get the passed state
    const { studentData } = state || {}; // Destructure the student data 

    const navigate = useNavigate();

    const PlaceholderReqs = [
        { name: 'General Education Requirements' },
        { name: 'COS 300+ Electives' },
        { name: 'Western Culture' },
        { name: 'COS Required Courses'}
    ]


    return (
        <div class="degree-progress-info">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() =>navigate(`/degree-progress/${studentID}`)} />
                <h2 className='header-title'>Degree Information {studentID}</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div className="scrollable-container">
      {/* Header */}
      <div className="header">
        <FiArrowLeft className="back-button" onClick={() => window.history.back()} />
        <h2 className="header-title">Scrollable Box</h2>
        <div className="spacer" /> {/* Placeholder for spacing */}
      </div>

      {/* Scrollable Content */}
      <div className="scrollable-box">
        <div className="box-grid">
        {[...Array(12)].map((_, index) => (
            <button
              key={index}
              className="boxbutton"
              onClick={() => navigate(`/elective-requirements/${studentID}/${PlaceholderReqs}`, { state: { studentData } })}
            >
              Box {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
            <div class="requirement-progress">
                <img class="Piechart-Image" src="../img/moose-logo.png" alt="Pie chart placeholder"/>
                <ul class="percent-progress">
                    <li>60% Complete</li>
                    <li>20% In Progress</li>
                    <li>20% Incomplete</li>
                </ul>
            </div>
        </div>
    );
}