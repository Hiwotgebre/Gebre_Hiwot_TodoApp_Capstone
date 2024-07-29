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
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // const li = document.createElement('li');
        // li.innerHTML = `<strong>Task:</strong> ${newTask} <br>
        //                 <strong>Description:</strong> ${description} <br>
        //                 <strong>DueDate:</strong> ${dueDate} <br>
        //                 <strong>Status:</strong> ${status} <br>
        //                 <strong>Priority:</strong> ${priority}`;
        // document.getElementById('tasks').appendChild(li);
        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';
        statusInput.selectedIndex = 0;
        priorityInput.selectedIndex = 0;

        //Redirect to task-display.html
        window.location.href = 'task-display.html';
    } else {
        alert('Please enter a task');
    }
}