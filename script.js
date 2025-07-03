let tasks = [];

function addTask() {
  let input = document.getElementById("todoInput").value.trim();

  if (input !== "") {
    tasks.push({ text: input, completed: false }); // object store
    document.getElementById("todoInput").value = "";
    updateList();
  } else {
    alert("Please enter a valid task!");
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateList();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  updateList();
}

function editTask(index) {
  let newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    updateList();
  }
}

function updateList() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleComplete(${i})">
      <span class="task-text ${task.completed ? "completed" : ""}">${task.text}</span>
      <div class="action-buttons">
        <button class="edit-btn" onclick="editTask(${i})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}
