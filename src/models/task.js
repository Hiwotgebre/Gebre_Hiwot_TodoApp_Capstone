// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: String,
  priority: String,
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.export =  Task;
