// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String},
  dueDate: { type: Date, required: true},
  status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' }
 
});

const Task = mongoose.model('Task', taskSchema);

module.exports =  Task;
