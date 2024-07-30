// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AddTaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/todo-list" element={<TaskList />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
