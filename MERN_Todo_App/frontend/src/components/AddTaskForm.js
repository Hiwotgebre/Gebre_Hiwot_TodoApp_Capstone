// frontend/src/components/AddTaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');
  const [priority, setPriority] = useState('low');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { title, description, dueDate, status, priority };
    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(response => {
        console.log('Task added:', response.data);
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('pending');
        setPriority('low');
        navigate('/tasks'); // Redirect to "My Tasks" page
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <div>
      <header>
        <h1>Homework Todo App</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">My Tasks</a></li>
          <li><a href="/todo-list">Todo List</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <section className="task-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add new homework..."
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
}

export default AddTaskForm;
