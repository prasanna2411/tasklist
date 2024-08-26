document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value.trim();
    
    if (taskValue !== '') {
        var taskList = document.getElementById('taskList');

        // Create task item
        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        var taskText = document.createElement('span');
        taskText.textContent = taskValue;
        
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(taskItem);
        };
        
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
