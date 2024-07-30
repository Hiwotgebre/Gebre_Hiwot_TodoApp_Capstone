// frontend/src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = { username, password };
    axios.post('http://localhost:5000/api/login', loginData)
      .then(response => {
        console.log('Logged in:', response.data);
        // Handle successful login (e.g., store auth token, redirect, etc.)
        // For example, you can store the token and redirect to the tasks page
        sessionStorage.setItem('authToken', response.data.token); // Assuming the response contains a token
        navigate('/tasks'); // Redirect to "My Tasks" page
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <div>
      <header>
        <h1>Login</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">My Tasks</a></li>
          <li><a href="/todo-list">Todo List</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
