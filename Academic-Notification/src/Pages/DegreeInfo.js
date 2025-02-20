import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../css/DegreeInfo.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';


export default function DegreeInfo(){
    const navigate = useNavigate();


    return (
        <div class="degree-progress-info">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() =>navigate('/degree-progress/:studentID')} />
                <h2 className='header-title'>Degree Information</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div class="list-container">
                <div class="requirements-list"> 
                    <ul>
                        <button class="requirement" onClick={() => navigate('/elective-requirements/:studentID')}>Requirement 1</button>
                        <button class="requirement">Requirement 2</button>
                        <button class="requirement">Requirement 3</button>
                    </ul>
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