import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess, logout } from "../../redux/slices/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  // const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // const handleLogin = (user) => {
  //   dispatch(loginSuccess(user));
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const handleDemoClick = async () => {
    try {
      const response = await axios.get("/api/quiz/byUser/admin");
      navigate("/quizpage", { state: { quizData: response.data } });
    } catch (error) {
      console.error("Failed to fetch the quiz", error);
    }
  };

  const handleCreateQuizClick = () => {
    if (auth.isAuthenticated) {
      // Using Redux state to check authentication
      navigate("/createquiz");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Catchy Headline Here</h1>
        <p>Brief description or tagline.</p>
        <button onClick={handleCreateQuizClick}>Create Quiz</button>
        <button onClick={handleDemoClick}>Take a Demo</button>
      </div>

      <div className="features-overview">
        {/* Add features overview content here */}
      </div>
    </div>
  );
};

export default HomePage;
