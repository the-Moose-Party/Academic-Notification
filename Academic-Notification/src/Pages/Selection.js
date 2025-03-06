import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import umaine from '../img/umaine.png';
import '../css/Selection.css';
import { FiSettings } from 'react-icons/fi';

export default function Selection() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch the student IDs dynamically
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // List of student files you want to fetch (you can also dynamically generate this if necessary)
        const studentFiles = [
          '1125662',
          '0000000',
          '1122334',
          '1634455',
          '1182072',
          '1011854',
          '9876543',
          '1011856',
        ]; 

        const studentIds = [];
        for (let file of studentFiles) {
          const response = await fetch(`/students/${file}.json`);
          if (response.ok) {
            const studentData = await response.json();
            studentIds.push(file); 
          } else {
            console.error(`Failed to fetch student data for ${file}`);
          }
        }
        setData(studentIds);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  const filteredData = search
    ? data.filter((item) => item.includes(search))
    : [];

    const handleSelectStudent = (studentID) => {
        const studentData = data.find((item) => item === studentID); // Get the actual data
        console.log("Navigating to progress with student ID:", studentID);
        navigate(`/degree-progress/${studentID}`, { state: { studentData } });
      };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredData.length > 0) {
      handleSelectStudent(filteredData[0]);
    }
  };

  return (
    <div className="home">
      <div className="settings-icon">
        <FiSettings size={24} />
      </div>

      <div className="logo-container">
        <img src={umaine} alt="Umaine Logo" />
      </div>

      <h1 className="title">Academic Notification</h1>

      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Enter Student ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

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
