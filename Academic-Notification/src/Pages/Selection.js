import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import umaine from '../img/umaine.png';
import '../styles.css';
import { FiSettings } from 'react-icons/fi';

export default function Selection() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Tracks highlighted <li>
  const navigate = useNavigate();
  const listRefs = useRef([]); // Store refs for list items

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentFiles = [
          '1125662', '0000000', '1122334', '1634455',
          '1182072', '1011854', '9876543', '1011856',
        ];
        const students = [];
        for (let file of studentFiles) {
          const response = await fetch(`/students/${file}.json`);
          if (response.ok) {
            const studentData = await response.json();
            students.push({ id: file, data: studentData });
          } else {
            console.error(`Failed to fetch student data for ${file}`);
          }
        }
        setData(students);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchStudentData();
  }, []);


  const filteredData = search ? data.filter((item) => item.id.includes(search)) : [];

  const handleSelectStudent = (studentID) => {
    const student = data.find((item) => item.id === studentID);
    if (student) {
      console.log('Navigating to progress with student ID:', studentID);
      navigate(`/degree-progress/${studentID}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (selectedIndex !== -1) {
        handleSelectStudent(filteredData[selectedIndex].id);
      } else if (filteredData.length > 0) {
        handleSelectStudent(filteredData[0].id);
      }
    }

    if (e.key === 'Tab' && filteredData.length > 0) {
      e.preventDefault(); 

      if (e.shiftKey) {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1));
      } else {

        setSelectedIndex((prevIndex) => (prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0));
      }
    }
  };


  useEffect(() => {
    if (selectedIndex !== -1 && listRefs.current[selectedIndex]) {
      listRefs.current[selectedIndex].focus();
    }
  }, [selectedIndex]);

  return (
    <div className="selections">
      {/* Header */}
      <div className="header">
        <h2 className="header-title">Student ID Selection</h2>
        <FiSettings className="setting-icon" />
      </div>

      <div className="content-justify">
        <div className="logo-container">
          <img src={umaine} alt="Umaine Logo" height="150px" width="150px" />
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
                <li
                  key={index}
                  className={`dropdown-item ${selectedIndex === index ? 'active' : ''}`}
                  onClick={() => handleSelectStudent(item.id)}
                  ref={(el) => (listRefs.current[index] = el)}
                  tabIndex={-1} 
                >
                  {item.id}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
