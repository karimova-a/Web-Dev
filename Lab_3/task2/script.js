// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

// Add new task
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    // Create list item
    const li = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', checkbox.checked);
    });

    // Task text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Assemble
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input and focus
    todoInput.value = '';
    todoInput.focus();
});