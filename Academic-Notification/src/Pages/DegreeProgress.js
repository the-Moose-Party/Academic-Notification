import React,  { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';
import { useStudentData } from '../hooks/useStudentData'; 
import '../styles.css';
import user from '../img/user.png';

export default function DegreeProgress() {
    const { studentID } = useParams();
    const navigate = useNavigate();
    const { studentData, loading, error } = useStudentData(studentID);
    const studentNames = ["Bob Ross", "Joe Demagio", "Cameron Diaz"];
    const graduationDates = [ 1, 2, 3, 4];
    
    function RandomSelect(list) {
        const item = list[Math.floor(Math.random() * list.length)]
        return(item)
        }
    
    
    
    
    return (
        <div className="degree-progress">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() => navigate('/')} />
                <h2 className="header-title">Degree Progress</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div className="student-info">
                <div className="avatar">
                    <img src={user} alt="user-avatar" width = "300px" height = "300px" />
                </div>
                <div className="student-details">
                    <h3><strong>Student Name:</strong> {RandomSelect(studentNames)}</h3>
                    <h3><strong>Student ID:</strong> {studentID}</h3>
                    <h3><strong>Status:</strong> Undergraduate</h3>
                    <h3><strong>Expected Graduation Date:</strong> spring {RandomSelect(graduationDates)}</h3>
                </div>
            </div>

            
            <div className='degree-details'>
                    <h3>Majors & Minors</h3>
                    <div className='major'>
                        <span>Major: Electrical Engineerig</span>

                        <button className="credit-report" onClick={() => navigate(`/degree-information/${studentID}`, { state: { studentData } })}>Credit Report</button>

                    </div>
                    <div className='major'>
                        <span>Major: Chemical Engineerig</span>
                        <button className="credit-report">Credit Report</button>
                    </div>
            </div>


            <button className="summary-report">Generate Credit Summary Report</button>
        </div>
    );
}