// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import "./CreateQuizPage.css";

// const CreateQuizPage = () => {
//   // const username = useSelector((state) => state.user.username); // Fetch username from Redux store
//   // const username = useSelector((state) => state.user?.username || "");
//   const username = useSelector((state) => state.auth.user?.username || "");

//   const [quizName, setQuizName] = useState("");
//   const [marksPerQuestion, setMarksPerQuestion] = useState("");
//   const [instructions, setInstructions] = useState(["", ""]);
//   const [timeOfQuiz, setTimeOfQuiz] = useState(15); // default 15 mins
//   const [startTime, setStartTime] = useState("");
//   const [totalQuestions, setTotalQuestions] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedQuizName = sessionStorage.getItem("quizName");
//     const storedMarksPerQuestion = sessionStorage.getItem("marksPerQuestion");
//     const storedInstructions = JSON.parse(
//       sessionStorage.getItem("instructions")
//     );
//     const storedQuestions = JSON.parse(sessionStorage.getItem("tempQuestions"));

//     if (storedQuizName) setQuizName(storedQuizName);
//     if (storedMarksPerQuestion) setMarksPerQuestion(storedMarksPerQuestion);
//     if (storedInstructions) setInstructions(storedInstructions);
//     if (storedQuestions) setTotalQuestions(storedQuestions.length);
//   }, []);

//   const generateQuizId = () => {
//     const randomNum = Math.floor(10 + Math.random() * 90); // generates a random two-digit number
//     return "#" + username.slice(0, 3) + randomNum;
//   };

//   const handleAddEditClick = () => {
//     sessionStorage.setItem("quizName", quizName);
//     sessionStorage.setItem("marksPerQuestion", marksPerQuestion);
//     sessionStorage.setItem("instructions", JSON.stringify(instructions));
//     navigate("/quiz-add-edit");
//   };

//   const handleSubmit = async () => {
//     const storedQuestions = JSON.parse(sessionStorage.getItem("tempQuestions"));

//     // Add questionId to each question
//     storedQuestions.forEach((question, index) => {
//       question.questionId = 1000 + index; // starting from 1000, incrementing for each question
//     });

//     const quizData = {
//       username,
//       quizId: generateQuizId(),
//       quizName,
//       timeOfQuiz,
//       startTime,
//       totalQuestions: storedQuestions.length,
//       marksPerQuestion,
//       instructions,
//       quiz: storedQuestions,
//     };

//     try {
//       console.log(quizData);
//       await axios.post("/api/quiz/create", quizData);
//       alert("Quiz created successfully!");

//       sessionStorage.removeItem("quizName");
//       sessionStorage.removeItem("marksPerQuestion");
//       sessionStorage.removeItem("instructions");
//       sessionStorage.removeItem("tempQuestions");
//     } catch (error) {
//       console.error("Failed to save the quiz", error);
//       alert("Failed to create quiz. Please try again.");
//     }
//   };

//   return (
//     <div className="create-quiz-container">
//       <div className="quiz-name-section">
//         <label>Quiz Name:</label>
//         <input
//           type="text"
//           value={quizName}
//           onChange={(e) => setQuizName(e.target.value)}
//           placeholder="Enter the name of the quiz"
//         />
//       </div>

//       <div className="questions-section">
//         <h2>Add Questions & Answers</h2>
//         <button onClick={handleAddEditClick}>Add / Edit</button>
//         <p>Total no of questions Added: {totalQuestions}</p>
//         <label>Each Question is of:</label>
//         <input
//           type="number"
//           value={marksPerQuestion}
//           onChange={(e) => setMarksPerQuestion(e.target.value)}
//           placeholder="Marks per question"
//         />
//       </div>

//       <div className="instructions-section">
//         <h2>Instructions to be displayed to students</h2>
//         {instructions.map((instruction, index) => (
//           <input
//             key={index}
//             type="text"
//             value={instruction}
//             onChange={(e) => {
//               const newInstructions = [...instructions];
//               newInstructions[index] = e.target.value;
//               setInstructions(newInstructions);
//             }}
//             placeholder={`Instruction ${index + 1}`}
//           />
//         ))}
//       </div>

//       <div className="time-section">
//         <label>Time of Quiz (in minutes):</label>
//         <input
//           type="number"
//           value={timeOfQuiz}
//           onChange={(e) => setTimeOfQuiz(e.target.value)}
//           placeholder="Time of Quiz (in minutes)"
//         />

//         <label>Start Time:</label>
//         <input
//           type="datetime-local"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//         />
//       </div>

//       <button onClick={handleSubmit}>Submit Quiz</button>
//     </div>
//   );
// };

// export default CreateQuizPage;

// ------------------------------------------------------
// ------------------------------------------------------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./CreateQuizPage.css";

const CreateQuizPage = () => {
  const username = useSelector((state) => state.auth.user?.username || "");

  const [quizName, setQuizName] = useState("");
  const [marksPerQuestion, setMarksPerQuestion] = useState("");
  const [instructions, setInstructions] = useState(["", ""]);
  const [timeOfQuiz, setTimeOfQuiz] = useState(15); // default 15 mins
  const [startTime, setStartTime] = useState("");
  const [totalQuestions, setTotalQuestions] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuizName = sessionStorage.getItem("quizName");
    const storedMarksPerQuestion = sessionStorage.getItem("marksPerQuestion");
    const storedInstructions = JSON.parse(
      sessionStorage.getItem("instructions")
    );
    const storedQuestions = JSON.parse(sessionStorage.getItem("tempQuestions"));

    if (storedQuizName) setQuizName(storedQuizName);
    if (storedMarksPerQuestion) setMarksPerQuestion(storedMarksPerQuestion);
    if (storedInstructions) setInstructions(storedInstructions);
    if (storedQuestions) setTotalQuestions(storedQuestions.length);
  }, []);

  const generateQuizId = () => {
    const randomNum = Math.floor(10 + Math.random() * 90); // generates a random two-digit number
    return "#" + username.slice(0, 3) + randomNum;
  };

  const handleAddEditClick = () => {
    sessionStorage.setItem("quizName", quizName);
    sessionStorage.setItem("marksPerQuestion", marksPerQuestion);
    sessionStorage.setItem("instructions", JSON.stringify(instructions));
    navigate("/quiz-add-edit");
  };

  const handleSubmit = async () => {
    const storedQuestions = JSON.parse(sessionStorage.getItem("tempQuestions"));

    // Add questionId to each question
    storedQuestions.forEach((question, index) => {
      question.questionId = 1000 + index; // starting from 1000, incrementing for each question
    });

    const quizData = {
      username,
      quizId: generateQuizId(),
      quizName,
      timeOfQuiz,
      startTime,
      totalQuestions: storedQuestions.length,
      marksPerQuestion,
      instructions,
      quiz: storedQuestions,
    };

    try {
      console.log(quizData);
      await axios.post("/api/quiz/create", quizData);
      alert("Quiz created successfully!");

      // Reset the fields
      setQuizName("");
      setMarksPerQuestion("");
      setInstructions(["", ""]);
      setTimeOfQuiz(15);
      setStartTime("");
      setTotalQuestions(0);

      // Clear the session storage
      sessionStorage.removeItem("quizName");
      sessionStorage.removeItem("marksPerQuestion");
      sessionStorage.removeItem("instructions");
      sessionStorage.removeItem("tempQuestions");
    } catch (error) {
      console.error("Failed to save the quiz", error);
      alert("Failed to create quiz. Please try again.");
    }
  };

  return (
    <div className="create-quiz-container">
      <div className="quiz-name-section">
        <label>Quiz Name:</label>
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          placeholder="Enter the name of the quiz"
        />
      </div>

      <div className="questions-section">
        <h2>Add Questions & Answers</h2>
        <button onClick={handleAddEditClick}>Add / Edit</button>
        <p>Total no of questions Added: {totalQuestions}</p>
        <label>Each Question is of:</label>
        <input
          type="number"
          value={marksPerQuestion}
          onChange={(e) => setMarksPerQuestion(e.target.value)}
          placeholder="Marks per question"
        />
      </div>

      <div className="instructions-section">
        <h2>Instructions to be displayed to students</h2>
        {instructions.map((instruction, index) => (
          <input
            key={index}
            type="text"
            value={instruction}
            onChange={(e) => {
              const newInstructions = [...instructions];
              newInstructions[index] = e.target.value;
              setInstructions(newInstructions);
            }}
            placeholder={`Instruction ${index + 1}`}
          />
        ))}
      </div>

      <div className="time-section">
        <label>Time of Quiz (in minutes):</label>
        <input
          type="number"
          value={timeOfQuiz}
          onChange={(e) => setTimeOfQuiz(e.target.value)}
          placeholder="Time of Quiz (in minutes)"
        />

        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default CreateQuizPage;
