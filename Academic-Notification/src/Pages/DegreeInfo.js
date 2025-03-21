import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useStudentData } from '../hooks/useStudentData'; 
import '../styles.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';


export default function DegreeInfo(){
    const { studentID } = useParams();
    const { studentData, loading, error } = useStudentData(studentID);
    const navigate = useNavigate();

    // Loading and error handling
    if (loading) {
        return <div>Loading student data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="degree-progress-info">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() => navigate(`/degree-progress/${studentID}`)} />
                <h2 className='header-title'>Degree Information {studentID}</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div className="content-justify">

                {/* Scrollable Content */}
                <div className="scrollable-box">
                    <div className="box-grid">
                        {studentData.groups.map((group, index) => (
                            <button
                                key={index}
                                className="boxbutton"
                                onClick={() => navigate(`/elective-requirements/${studentID}/${group.rqrmnt_group}`, { state: { studentData } })}
                            >
                                {/* Displaying group label and status */}
                                <div className="adjust-font-to-half-container-size">{group.label}</div>
                                <div className="adjust-font-to-half-container-size">
                                    {/* Optionally display more information */}
                                    {group.status ? <p dangerouslySetInnerHTML={{ __html: group.status }} /> : <p>Status not available</p>}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress Section */}
            <div className="requirement-progress">
                <img className="Piechart-Image" src="../img/moose-logo.png" alt="Pie chart placeholder"/>
                <ul className="percent-progress">
                    <li>60% Complete</li>
                    <li>20% In Progress</li>
                    <li>20% Incomplete</li>
                </ul>
            </div>
        </div>
    );
}
