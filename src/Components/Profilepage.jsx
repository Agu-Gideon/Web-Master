import React, { useEffect, useState } from "react";
import "../Styles/Profilepage.css";

const StudentProfile = () => {
  const [userData, setUserData] = useState({
    name: "Loading...",
    studentId: "--------",
  });

  useEffect(() => {
    // This is to fecth the users Data
    const fetchUser = async () => {
      try {
        const response = await new Promise((res) =>
          setTimeout(
            () => res({ name: "Lily Zhang", studentId: "1234567890" }),
            1500
          )
        );

        setUserData(response);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="student-profile">
      <main className="main">
        <div className="profile-info">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2 className="greeting">Greetings, {userData.name}!</h2>
          <p className="student-id">Student ID: {userData.studentId}</p>
        </div>

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

          <div className="course-cards">
            <div className="course-card">
              <img
                src="https://source.unsplash.com/300x160/?abstract,education"
                alt="Course 1"
              />
            </div>
            <div className="course-card">
              <img
                src="https://source.unsplash.com/300x160/?abstract,learning"
                alt="Course 2"
              />
            </div>
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </main>
    </div>
  );
};

export default StudentProfile;
