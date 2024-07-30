const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const PORT = 3000;
const Task = require('./src/models/task');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://hiwotkebede26:Rohisaze21182415!@todo-app.y1bcnog.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

let tasks = []; // This will hold the tasks

// CRUD operations
//GET all tasks
app.get('/tasks', async(req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status,
            priority: req.body.priority
        });

        await newTask.save();
        res.status(201).send('Task added successfully');
    } catch (error) {
        res.status(400).send('Error saving task');
    }
});

// POST a new task
app.post('/tasks', async(req, res) => {
    const task = new Task(req.body);
    try {
        const newTask = await task.save();
    } catch (error) {
        res.status(400).json({ message: error.message });
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
      res.status(404).json({ message: error.message });
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
