// // script.js

// // Function to add a new task
// function addTask() {
//     // Get the input field and its value
//     const taskInput = document.getElementById('new-task');
//     const taskText = taskInput.value.trim();

//     // Check if input is not empty
//     if (taskText !== '') {
//         // Create a new list item
//         const li = document.createElement('li');

//         // Add the task text to the list item
//         li.textContent = taskText;

//         // Create a 'Delete' button
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.className = 'delete-btn';

//         // Append delete button to the list item
//         li.appendChild(deleteBtn);

//         // Add the new task to the task list (ul)
//         document.getElementById('task-list').appendChild(li);

//         // Clear the input field after adding task
//         taskInput.value = '';

//         // Add event listener to mark the task as complete/incomplete when clicked
//         li.addEventListener('click', function() {
//             li.classList.toggle('completed');
//         });

//         // Add event listener to delete the task
//         deleteBtn.addEventListener('click', function(event) {
//             event.stopPropagation(); // Prevent marking task as completed
//             li.remove();
//         });
//     } else {
//         alert('Please enter a task!');
//     }
// }





// // selectors
// const taskInput = document.getElementById('new-task');
// const addTaskButton = document.getElementById('add-task');
// const taskList = document.getElementById('task-list');

// // event listeners
// addTaskButton.addEventListener("click", addTask);

// // functions
// function addTask(evnt) {

//     event.preventDefault();

//     // tast DIV
//     const input = document.createElement("li");
//     newtask.innertext = "hey";
//     newtask.classlist.add("task=item");
//     taskDIV.appendChild(newtask);
//     // 
//     const completedAdd = document.createElement("add");
//     // completedAdd.innerHTML = "<i class=add"></i>";
//     completedAdd.classList.add("complete=btn");
//     taskDIV.appendChild(completedAdd);
//     // check mark add
//     const trashadd = document.createElement("add")

// }
// script.js

// // Generalized function to add a task to any list
// function addTask(inputId, listId) {
//     // Get the input field and its value based on the passed IDs
//     const taskInput = document.getElementById(inputId);
//     const taskText = taskInput.value.trim();
//     const taskInput = document.getElementById(inputId);
//     const taskText = taskInput.value.trim();
//     // Check if the input is not empty
//     if (taskText !== '') {
//         // Create a new list item
//         const li = document.createElement('li');

//         // Add the task text to the list item
//         li.textContent = taskText;

//         // Create a 'Delete' button
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.className = 'delete-btn';

//         // Append the delete button to the list item
//         li.appendChild(deleteBtn);

//         // Add the new task to the specified task list
//         document.getElementById(listId).appendChild(li);

//         // Clear the input field after adding the task
//         taskInput.value = '';

//         // Add event listener to mark the task as complete/incomplete when clicked
//         li.addEventListener('click', function() {
//             li.classList.toggle('completed');
//         });

//         // Add event listener to delete the task
//         deleteBtn.addEventListener('click', function(event) {
//             event.stopPropagation(); // Prevent marking task as completed
//             li.remove();
//         });
//     } else {
//         alert('Please enter a task!');
//     }
// }