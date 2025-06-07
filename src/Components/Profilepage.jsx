import React, { useEffect, useState } from "react";
import "../Styles/Profilepage.css";
import { useNavigate } from "react-router-dom";
import Courses from "./Courses-Section";
import Avatar from "../assets/icon.png";

const StudentProfile = () => {
  // State for user data
  const [userData, setUserData] = useState({
    name: "Loading...",
    studentId: "--------",
  });

  // Fetch user data on component mount (simulated with setTimeout)
  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUser = async () => {
      try {
        const response = await new Promise((res) =>
          setTimeout(() => res({ name: "Agu ", studentId: "1234567890" }), 1500)
        );
        setUserData(response);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUser();
  }, []);

  const navigate = useNavigate();

  // Handle user logout: remove token and redirect to login page
  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    navigate("/login");
  };

  // Render the profile page UI
  return (
    <div className="student-profile">
      <main className="main">
        {/* Profile info section */}
        <div className="profile-info">
          <img src={Avatar} alt="Profile" className="profile-pic" />
          <h2 className="greeting">Greetings, {userData.name}!</h2>
          <p className="student-id">Student ID: {userData.studentId}</p>
        </div>

        {/* Academic progress and course enrollment sections */}
        <div className="progress-section">
          <div className="progress-box">
            <h4>Academic Progress</h4>
            <p>
              <strong>Current Term:</strong> Fall 2023
            </p>
            <p>Units Completed: 12.5 / 15</p>
            <button>View full progress</button>
          </div>

          <div className="course-box">
            <h4>Class Enrollment</h4>
            <p>
              <strong>CS 61A:</strong> Structure and Interpretation of Computer
              Programs
            </p>
            <p>
              <small>Instructor: John Denero</small>
            </p>
            <button>View course details</button>
          </div>
        </div>

        {/* Courses section */}
        <>
          <Courses />
        </>

        {/* Logout button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </main>
    </div>
  );
};

export default StudentProfile;
