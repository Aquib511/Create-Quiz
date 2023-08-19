// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const QuizPage = ({ match }) => {
//   const [questions, setQuestions] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const quizId = match.params.id; // Assuming you're using react-router and have a route like "/quiz/:id"

//   useEffect(() => {
//     const fetchQuizData = async () => {
//       try {
//         const response = await axios.get(`/api/quiz/${quizId}`);
//         setQuestions(response.data.questions);
//         setTimeLeft(response.data.time);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching quiz data:", error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchQuizData();
//   }, [quizId]);

//   useEffect(() => {
//     if (timeLeft === null) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           // Here, you can handle the quiz submission when time runs out
//           return 0;
//         }
//         if (prevTime === 5 * 60) {
//           alert("Warning: Only 5 minutes left!");
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="quiz-container">
//       <div className="timer">Time left: {timeLeft} seconds</div>
//       <div className="question">
//         {questions[currentQuestionIndex]?.questionText}
//       </div>
//       <div className="options">
//         {questions[currentQuestionIndex]?.options.map((option, index) => (
//           <button key={index}>{option}</button>
//         ))}
//       </div>
//       <div className="navigation">
//         {questions.map((_, index) => (
//           <button key={index} onClick={() => setCurrentQuestionIndex(index)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizPage;
// ------------------------------------------------------------------

// /client/src/pages/QuizPage/QuizPage.js

// /client/src/pages/QuizPage/QuizPage.js

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const QuizPage = () => {
  const location = useLocation();
  const fetchedQuizData = location.state.quizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (currentQuestionIndex < fetchedQuizData.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset the selected option
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Reset the selected option
    }
  };

  const currentQuestion = fetchedQuizData.quiz[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>{fetchedQuizData.quizName}</h2>
      <p>{currentQuestion.questionText}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentQuestionIndex === fetchedQuizData.quiz.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default QuizPage;
