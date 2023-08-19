const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{4}/.test(v); // Ensure it's a 4-digit number
      },
      message: (props) => `${props.value} is not a valid 4-digit number!`,
    },
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.length === 4; // Ensure there are exactly 4 options
      },
      message: (props) => `Expected 4 options but got ${props.value.length}!`,
    },
  },
  rightAns: {
    type: String,
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 10,
  },
  quizId: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /#[A-Za-z0-9]{5}/.test(v); // Ensure it starts with # followed by 5 alphanumeric characters
      },
      message: (props) => `${props.value} is not a valid quiz ID!`,
    },
  },
  quizName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  timeOfQuiz: {
    type: Number,
    required: true,
    default: 15, // 15 minutes by default
  },
  startTime: Date,
  marksPerQuestion: Number,
  instructions: {
    type: [String],
    default: undefined,
  },
  quiz: [questionSchema],
});

module.exports = mongoose.model("Quiz", quizSchema);
