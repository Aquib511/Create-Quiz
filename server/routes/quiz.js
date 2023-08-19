const express = require("express");
const router = express.Router();

const {
  createQuiz,
  getQuizById,
  editQuiz,
  deleteQuiz,
  getQuizzesByUsername,
} = require("../controllers/quizController");

// Create a new quiz
router.post("/create", createQuiz);

// Fetch a quiz by its ID
router.get("/:quizId", getQuizById);

// Edit a quiz
router.put("/edit/:quizId", editQuiz);

// Delete a quiz
router.delete("/delete/:quizId", deleteQuiz);

// Fetch all quizzes by a username
router.get("/user/:username", getQuizzesByUsername);

module.exports = router;
