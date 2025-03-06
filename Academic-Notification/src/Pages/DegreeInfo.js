import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../css/DegreeInfo.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';



export default function DegreeInfo(){
    const { studentID } = useParams();

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

            <div class="list-container">
                <div class="requirements-list">
                    {PlaceholderReqs.map((requirement) => (
                        <button class="requirement" onClick={() => navigate(`/elective-requirements/${studentID}/${requirement.name}`)}>{ requirement.name }</button>
                    ))}
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