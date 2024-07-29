
// Create Task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const descInput = document.getElementById('task-desc');
    const dateInput = document.getElementById('task-date');
    const statusInput = document.getElementById('task-status');
    const priorityInput = document.getElementById('task-priority');


    const newTask = taskInput.value;
    const description = descInput.value;
    const dueDate = dateInput.value;
    const status = statusInput.value;
    const priority =priorityInput.value;

    if(newTask.length > 0 && dueDate) {
        const task = {
            task: newTask,
            description: description,
            dueDate: dueDate,
            status: status,
            priority: priority
        };

        //Store the task in local storage
        // const tasks = JSON.parse(localStorage.getItem('tasks')) || []; i will un comment it later
        // tasks.push(task);i will un comment it later
        // localStorage.setItem('tasks', JSON.stringify(tasks));i will un comment it later

        // const li = document.createElement('li');
        // li.innerHTML = `<strong>Task:</strong> ${newTask} <br>
        //                 <strong>Description:</strong> ${description} <br>
        //                 <strong>DueDate:</strong> ${dueDate} <br>
        //                 <strong>Status:</strong> ${status} <br>
        //                 <strong>Priority:</strong> ${priority}`;
        // document.getElementById('tasks').appendChild(li);
        // taskInput.value = '';i will un comment it later
        // descInput.value = '';i will un comment it later
        // dateInput.value = '';i will un comment it later
        // statusInput.selectedIndex = 0;i will un comment it later
        // priorityInput.selectedIndex = 0;i will un comment it later

        //Redirect to task-display.html
        //     window.location.href = 'task-display.html';i will un comment it later
        // } else {i will un comment it later
        //     alert('Please enter a task');i will un comment it later
        // }i will un comment it later
        //};


        //Send POST request to server
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error creating task');
            }
            //return response.json();  //or 
            return fetchTasks(); //to refresh the list
        })
        .then(() => {
            console.log('Task added successfully');
            window.location.href = 'task-display.html'; // Redirect to display tasks
            //fetchTasks(); // Refresh the tasks list i will un comment it later
        })
        .catch(error => {
            console.error('There was an error:', error);
            alert('Failed to create task');
        });
    } else {
            alert('Please enter a task');
    }
}

function fetchAllTodos() {
    fetch('https://dummyjson.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            return response.json();
        })
        .then(data => {
            displayTodos(data.todos); // Assuming the API returns an object with a 'todos' array
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
}

function displayTodos(todos) {
    const todosList = document.getElementById('todos-list');
    todosList.innerHTML = ''; // Clear existing todos

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `ID: ${todo.id}, Task: ${todo.todo}, Completed: ${todo.completed}`;
        todosList.appendChild(li);
    });
}
