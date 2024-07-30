// frontend/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  const handleEdit = (id) => {
    // Handle edit logic here
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => fetchTasks())
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <header>
        <h1>My Task</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">My Tasks</a></li>
          <li><a href="/todo-list">Todo List</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className="task-item">
            <p><strong>Task:</strong> {task.title}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <button className="edit-btn" onClick={() => handleEdit(task._id)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
