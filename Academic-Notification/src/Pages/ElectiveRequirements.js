import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';
import NavBar from "../components/NavBar";





export default function ElectiveRequirements(){
    const { studentID } = useParams('studentID');
    const { requirement } = useParams('requirement');


    const handleWishlist = e => {
        //Add wishlist interaction here
        //Currently a placeholder since we will not have access to the real Database ourselves
        alert('Added to Wishlist!');
    }

    function CourseInfo(props){
        return <div class='course-info'>
            <h2> {props.name} </h2>
            <p> {props.desc} </p>
            <button class="wishlist-button" onClick={handleWishlist}> Add to Wishlist </button>
        </div>
    }



    const navigate = useNavigate();
    
    const PlaceholderCourses = [
        { name: `${requirement} Course 1`, desc: `Interesting things about ${requirement} course 1` },
        { name: `${requirement} Course 2`, desc: `Interesting things about ${requirement} course 2 but really really long zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz` },
        { name: `${requirement} Course 3`, desc: `Interesting things about ${requirement} course 3` }
    ];


    return(
        <div class="elective-requirements">
            {/* Header */}
            <div className="header">
                <FiArrowLeft className="back-button" onClick={() =>navigate(`/degree-information/${studentID}`)} />
                <h2 className='header-title'>Elective Requirements</h2>
                <FiSettings className="setting-icon" />
            </div>

            <div class="content-justify">
                <div class="scrollable-box">
                    <div class="course-list">
                        {PlaceholderCourses.map((course) => (
                            <CourseInfo name={course.name} desc={course.desc} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}