window.onload = function() {
    displayTasks();
};

//Read Tasks
function displayTasks() {
    const tasksList = document.getElementById('tasks');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksList.innerHTML = ''; // Clear existing tasks to avoid duplication

    tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Task:</strong> ${task.task} <br>
                        <strong>Description:</strong> ${task.description} <br>
                        <strong>Due Date:</strong> ${task.dueDate} <br>
                        <strong>Status:</strong> ${task.status} <br>
                        <strong>Priority:</strong> ${task.priority}
                        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
        tasksList.appendChild(li);
    });
}

// Delete Tasks
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove the task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
    displayTasks(); // Refresh the list
}


//Update Tasks
let currentEditingIndex = null; // Global variable to track which task is being edited
function editTask(index) {
    currentEditingIndex = index; // Set the current index being edited
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // Set the values in the form fields (assuming you have a form with inputs for these)
    document.getElementById('edit-task').value = task.task;
    document.getElementById('edit-desc').value = task.description;
    document.getElementById('edit-date').value = task.dueDate;
    document.getElementById('edit-status').value = task.status;
    document.getElementById('edit-priority').value = task.priority;

    // Show the edit form
    document.querySelector('.edit-task-form').style.display = 'block';

    // Optional: Update button to save changes
    const button = document.getElementById('add-button');
    button.onclick = function() { saveChanges(index); };
    button.textContent = 'Save Changes';
}

function saveChanges(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = {
        task: document.getElementById('edit-task').value,
        description: document.getElementById('edit-desc').value,
        dueDate: document.getElementById('edit-date').value,
        status: document.getElementById('edit-status').value,
        priority: document.getElementById('edit-priority').value
    };

    tasks[index] = task; // Update the task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
    displayTasks(); // Refresh the list

    // Hide the edit form
    document.querySelector('.edit-task-form').style.display = 'none'

    // Reset the button (if necessary)
    const button = document.getElementById('add-button');
    button.onclick = function() { addTask(); };
    button.textContent = 'Add Task';
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html'
}

