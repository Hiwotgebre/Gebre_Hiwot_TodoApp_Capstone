function displayTodos(todos) {
    const todosList = document.getElementById('todos-list');
    todosList.innerHTML = ''; // Clear existing todos

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `ID: ${todo.id}, Task: ${todo.todo}`;
        li.className = todo.completed ? 'completed' : ''; // Add 'completed' class for completed tasks
        todosList.appendChild(li);
    });
}
