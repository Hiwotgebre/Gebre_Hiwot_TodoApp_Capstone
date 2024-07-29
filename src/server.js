const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = []; // This will hold the tasks

// CRUD operations
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send();
});

app.put('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tasks[index] = {...tasks[index], ...req.body};
        res.send();
    } else {
        res.status(404).send();
    }
});

app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tasks.splice(index, 1);
        res.send();
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
