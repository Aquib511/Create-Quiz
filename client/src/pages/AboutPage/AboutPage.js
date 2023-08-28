import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Our Quiz App</h1>

      <div className="feature">
        <i className="feature-icon" aria-hidden="true">
          🔧
        </i>
        <h2>Dynamic Quiz Creation</h2>
        <p>
          Faculties have the freedom to craft quizzes that resonate with their
          teaching style. Be it MCQs, True/False questions, or short answers,
          our platform supports it all.
        </p>
      </div>

      <div className="feature">
        <i className="feature-icon" aria-hidden="true">
          ⏰
        </i>
        <h2>Adaptive Timer Functionality</h2>
        <p>
          Every quiz has its unique duration. As students navigate through the
          quiz, an on-screen timer provides real-time feedback, ensuring focus
          and time-management.
        </p>
      </div>

      <div className="feature">
        <i className="feature-icon" aria-hidden="true">
          🔀
        </i>
        <h2>Intelligent Question Shuffling</h2>
        <p>
          To ensure fairness and minimize malpractices, our platform shuffles
          questions for every student, drawing from a vast question bank.
        </p>
      </div>

      <div className="feature">
        <i className="feature-icon" aria-hidden="true">
          📊
        </i>
        <h2>Comprehensive Faculty Dashboard</h2>
        <p>
          Our dashboard is more than just a control center. It offers insights,
          analytics, and management tools to ensure faculties have everything
          they need right at their fingertips.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
