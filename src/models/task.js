// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  dueDate: Date,
  status: String,
  priority: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
