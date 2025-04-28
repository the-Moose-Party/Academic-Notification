import React from "react";
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import '../styles.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';
import NavBar from "../components/NavBar";
import { useRequirementCourses } from '../hooks/useStudentData';

export default function ElectiveRequirements() {
    const [searchParams] = useSearchParams();
    const { studentID } = useParams();
    const reqGroup = searchParams.get('reqGroup');
    const reqNum = searchParams.get('reqNum');

    const navigate = useNavigate();
    const { reqProgramInfo, loading, error } = useRequirementCourses(reqGroup, reqNum);

    const handleWishlist = () => {
        alert('Added to Wishlist!');
    };

    function CourseInfo({ name, desc }) {
        return (
            <div className="course-info">
                <h2>{name}</h2>
                <p>{desc}</p>
                <button className="wishlist-button" onClick={handleWishlist}>
                    Add to Wishlist
                </button>
            </div>
        );
    }

    if (loading) {
        return <div>Loading course data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(reqProgramInfo); // Keep only one clean log if needed

    return (
        <div className="elective-requirements">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() => navigate(-1)} />
                <h2 className="header-title">Elective Requirements</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div className="course-list">
                {reqProgramInfo.map((course, index) => (
                    <CourseInfo
                        key={index}
                        name={`${course.courseSubject} ${course.courseNumber}: ${course.title}`}
                        desc={course.description}
                    />
                ))}
            </div>

        </div>
    );
}
