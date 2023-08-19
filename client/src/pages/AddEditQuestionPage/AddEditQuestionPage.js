import React, { useState, useEffect } from "react";
import "./AddEditQuestionPage.css";
import { useNavigate } from "react-router-dom";

const AddEditQuestionPage = () => {
  const [questions, setQuestions] = useState(
    JSON.parse(sessionStorage.getItem("tempQuestions")) || [
      { questionText: "", options: ["", "", "", ""], rightAns: "" },
    ]
  );
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("tempQuestions", JSON.stringify(questions));
  }, [questions]);

  const handleOptionChange = (qIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleRightAnswerChange = (qIndex, value) => {
    if (value >= 1 && value <= 4) {
      const newQuestions = [...questions];
      newQuestions[qIndex].rightAns = value;
      setQuestions(newQuestions);
    }
  };

  const addMoreQuestions = () => {
    setQuestions([
      ...questions,
      { questionText: "", options: ["", "", "", ""], rightAns: "" },
    ]);
  };

  const handleDeleteQuestion = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions.splice(qIndex, 1);
    setQuestions(newQuestions);
  };

  return (
    <div className="add-edit-question-container">
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="question-block">
          <label>Question:</label>
          <input
            type="text"
            value={q.questionText}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[qIndex].questionText = e.target.value;
              setQuestions(newQuestions);
            }}
          />

          <div className="options">
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>Option {optionIndex + 1}:</label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(qIndex, optionIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <label>Right Answer (Option Number 1-4):</label>
          <input
            type="number"
            min="1"
            max="4"
            value={q.rightAns}
            onChange={(e) => handleRightAnswerChange(qIndex, e.target.value)}
          />
          <button onClick={() => handleDeleteQuestion(qIndex)}>
            Delete Question
          </button>
        </div>
      ))}

      <button onClick={addMoreQuestions}>Add more Questions</button>
      <p>Going to your quiz dashboard will not erase your questions.</p>
      <button onClick={() => navigate("/createquiz")}>Done / Back</button>
    </div>
  );
};

export default AddEditQuestionPage;
