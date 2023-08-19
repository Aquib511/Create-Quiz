const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 10,
    validate: {
      validator: function (v) {
        // This regex checks if there are at least 2 numbers in the string
        return /\d.*\d/.test(v);
      },
      message: (props) => `${props.value} should have at least 2 numbers!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10,
  },
  quizCreated: {
    type: [String], // This denotes an array of strings
    default: null,
  },
  quizTaken: {
    type: [String], // This denotes an array of strings
    default: null,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
