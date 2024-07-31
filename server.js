//Server.js
const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const Task = require('./src/models/task.js');
const connectDB = require('./config/conn.js');

const app = express();
const PORT = process.env.PORT || 3001;

//Connect to MongoDB
connectDB(); //This will establish the MongoDB connection

//Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON bodies


// let tasks = []; // This will hold the tasks

// CRUD operations
// POST a new task
app.post('/tasks', async(req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//GET all tasks
app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//PUT update a task
app.put('/tasks/:id', async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

//DELETE a task
app.delete('/tasks/:id', async(req, res) => {
    try {
     const task = await  Task.findByIdAndDelete(req.params.id);
     if (!task) {
        return res.status(404).json({ message: "Task not found"});
     }
     res.json({ message: "Task deleted successfully "});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
