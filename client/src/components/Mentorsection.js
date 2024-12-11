import React from "react";
import "../assets/styles/mentorsection.css";

const mentors = [
  {
    id: 1,
    name: "Darrell Steward",
    role: "E-learning Specialist",
    description: "Specializes in creating engaging online learning experiences and improving student outcomes.",
    rating: 4.8,
    reviews: "22k reviews",
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    role: "Administrator",
    description: "Expert in managing and customizing learning management systems for diverse needs.",
    rating: 4.7,
    reviews: "18k reviews",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    role: "Instructional Designer",
    description: "Designs interactive course content and assessments to boost learner engagement.",
    rating: 4.9,
    reviews: "30k reviews",
  },
  {
    id: 4,
    name: "Esther Howard",
    role: "Online Education Consultant",
    description: "Guides institutions in adopting and optimizing e-learning platforms.",
    rating: 4.8,
    reviews: "25k reviews",
  },
];


const MentorSection = () => {
  return (
    <div className="mentor-section">
      <h2>Meet Our Professional Mentors</h2>
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <h3>{mentor.name}</h3>
            <p className="role">{mentor.role}</p>
            <p className="description">{mentor.description}</p>
            <div className="rating">
              <span>{mentor.rating}</span>
              <span>⭐</span>
              <span>({mentor.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
