import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import umaine from '../img/umaine.png';
import '../css/Selection.css';
import { FiSettings } from 'react-icons/fi';

export default function Selection() {
  const [search, setSearch] = useState('');
  const data = ['1125662', '0000000', '1122334', '1634455', '1182072'];
  const navigate = useNavigate();

  const filteredData = search
  ? data.filter((item) => item.includes(search)): [];

  const handleSelectStudent = (studentID) => {
    console.log("Navigating to progress with student ID:", studentID); //debug
    navigate(`/degree-progress/${studentID}`);

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredData.length > 0) {
        handleSelectStudent(filteredData[0]);
    }
  };

  return (
    <div className="home">
        {/* Settings Icon */}
        <div className="settings-icon">
            <FiSettings size={24} /> {/* Icon with size 24px */}
        </div>

        {/* Logo */}
        <div className="logo-container">
            <img src={umaine} alt="Umaine Logo" />
        </div>

        <h1 className="title">Academic Notification</h1>

        {/* Search Bar */}
        <div className="search-container">
            <input
            type="text"
            className="search"
            placeholder="Enter Student ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            />

            {/* Dropdown for filtered results */}
            {filteredData.length > 0 && (
                <ul className="dropdown">
                    {filteredData.map((item, index) => (
                        <li key={index} className="dropdown-item" onClick={() => handleSelectStudent(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
}

