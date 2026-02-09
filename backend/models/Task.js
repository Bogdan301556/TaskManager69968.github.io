const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: String,
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Task", TaskSchema);
