import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../assets/styles/feature.css";

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>Features of Our Kattraan</h2>
        <p>
          Our platform offers everything you need to manage courses, students,
          and instructors effectively.
        </p>
      </div>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-book"></i> {/* Book icon */}
          </div>
          <h3>Course Management</h3>
          <p>Efficiently create, manage, and organize your courses.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-bar-chart"></i> {/* Bar chart icon */}
          </div>
          <h3>Student Dashboard</h3>
          <p>Track progress, grades, and performance in one place.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="bi bi-person-video3"></i> {/* Instructor icon */}
          </div>
          <h3>Instructor Tools</h3>
          <p>Enable instructors to manage classes, quizzes, and assessments.</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
