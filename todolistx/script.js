// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
    // Create the list item element
    const li = document.createElement('li');
    
    // Set the text content for the task
    li.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'; // The 'x' character for a simple look
    deleteBtn.classList.add('delete-btn');
    
    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add event listener to toggle 'completed' class when clicking the task
    li.addEventListener('click', function(event) {
        // Only toggle if the click is not on the delete button itself
        if (event.target !== deleteBtn) {
            li.classList.toggle('completed');
        }
    });

    // Add event listener to delete the task when clicking the 'x' button
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Return the created list item
    return li;
}

// Function to handle adding a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get text and remove whitespace

    // Check if the input is not empty
    if (taskText !== '') {
        const newTaskItem = createTaskItem(taskText);
        taskList.appendChild(newTaskItem);
        taskInput.value = ''; // Clear the input box after adding the task
    }
}

// Event listener for the "Add" button click
addTaskBtn.addEventListener('click', addTask);

// Event listener for the Enter key press in the input box
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});