const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add new task to the list
function addTask() {
  const taskText = newTaskInput.value;
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button>Delete</button>
    `;
    taskList.appendChild(li);
    newTaskInput.value = "";
    li.querySelector("button").addEventListener("click", deleteTask);
  }
}

// Delete task from the list
function deleteTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}

// Add event listener for adding new tasks
newTaskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Load tasks from local storage
if (localStorage.getItem("tasks")) {
  taskList.innerHTML = localStorage.getItem("tasks");
}

// Save tasks to local storage
window.addEventListener("beforeunload", function() {
  localStorage.setItem("tasks", taskList.innerHTML);
});
