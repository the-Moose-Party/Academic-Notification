import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ElectiveRequirements.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';


export default function ElectiveRequirements(){
    const navigate = useNavigate();


    return(
        <div class="elective-requirements">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() =>navigate('/degree-information/:studentID')} />
                <h2 className='header-title'>Elective Requirements</h2>
                <FiSettings className="setting-icon" />
            </div>

            <ul class="course-list">
                <div class="Course-Info">
                    <h2>Course Name</h2>
                    <p>Course Description</p>
                </div>
                <div class="Course-Info">
                    <h2>Course Name</h2>
                    <p>Course Description</p>
                </div>
                <div class="Course-Info">
                    <h2>Course Name</h2>
                    <p>Course Description</p>
                </div>
            </ul>
        </div>
    );
}