const taskInput = document.getElementById("input-task");
const addButton = document.getElementById("add-task-button");
const list = document.getElementById("task-list");
const STORAGE_INCOMPLETE_TASKS = 'incomplete-tasks';
const STORAGE_COMPLETE_TASKS = 'complete-tasks'

renderTasks();

addButton.onclick = () => {
  const taskName = taskInput.value;
  if (taskName === "") return;
  taskInput.value = "";
  createTask(taskName);
  const incompleteTasks = JSON.parse(localStorage.getItem(STORAGE_INCOMPLETE_TASKS) || "[]");
  incompleteTasks.push(taskName);
  localStorage.setItem(STORAGE_INCOMPLETE_TASKS, JSON.stringify(incompleteTasks));
}

function deleteTask(listItem, taskName) {
  animateDelete(listItem);
  setTimeout(() => list.removeChild(listItem), 1000);

  const incompleteTasks = JSON.parse(localStorage.getItem(STORAGE_INCOMPLETE_TASKS) || "[]");
  let i = incompleteTasks.indexOf(taskName);
  if (i > -1) {
    incompleteTasks.splice(i, 1);
    localStorage.setItem(STORAGE_INCOMPLETE_TASKS, JSON.stringify(incompleteTasks));
    return;
  }
  const completeTasks = JSON.parse(localStorage.getItem(STORAGE_COMPLETE_TASKS) || "[]");
  i = completeTasks.indexOf(taskName);
  if (i > -1) {
    completeTasks.splice(i, 1);
    localStorage.setItem(STORAGE_COMPLETE_TASKS, JSON.stringify(completeTasks));
  }
}

function changeTaskState(task, taskName) {
  const completed = task.classList.toggle("completed");
  const incompleteTasks = JSON.parse(localStorage.getItem(STORAGE_INCOMPLETE_TASKS));
  const completeTasks = JSON.parse(localStorage.getItem(STORAGE_COMPLETE_TASKS) || '[]');
  if (completed) {
    const i = incompleteTasks.indexOf(taskName);
    if (i > -1) {
      incompleteTasks.splice(i, 1);
      localStorage.setItem(STORAGE_INCOMPLETE_TASKS, JSON.stringify(incompleteTasks));
      completeTasks.push(taskName);
      localStorage.setItem(STORAGE_COMPLETE_TASKS, JSON.stringify(completeTasks));
    }
  } else {
    const i = completeTasks.indexOf(taskName);
    if (i > -1) {
      completeTasks.splice(i, 1);
      localStorage.setItem(STORAGE_COMPLETE_TASKS, JSON.stringify(completeTasks));
      incompleteTasks.push(taskName);
      localStorage.setItem(STORAGE_INCOMPLETE_TASKS, JSON.stringify(incompleteTasks));
    }
  }
}

function createTask(taskName, completed = false) {
  const listItem = document.createElement("li");

  const task = document.createElement("span");
  const taskClass = completed ? "task completed" : "task";
  task.setAttribute("class", taskClass);
  task.textContent = taskName;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (completed) {
    checkbox.setAttribute("checked", "true");
  }
  checkbox.onchange = () => changeTaskState(task, taskName);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-btn");
  deleteButton.onclick = () => {
    this.disabled = "disabled";
    deleteTask(listItem, taskName);
  }

  const deleteSymbol = document.createElement("span");
  deleteSymbol.textContent = "☒";

  deleteButton.appendChild(deleteSymbol);
  listItem.appendChild(checkbox);
  listItem.appendChild(task);
  listItem.appendChild(deleteButton);
  setTimeout(() => listItem.animate([
    {
      opacity: "0",
      height: "0px",
      transform: "rotateX(-90deg)",

    },
    {
      opacity: "1",
      height: `${listItem.offsetHeight}px`,
      transform: "rotateX(0deg)",

    }
  ], 1000));
  list.appendChild(listItem);
}

function renderTasks() {
  const incompleteTasks = JSON.parse(localStorage.getItem(STORAGE_INCOMPLETE_TASKS) || "[]");
  const completeTasks = JSON.parse(localStorage.getItem(STORAGE_COMPLETE_TASKS) || "[]");
  incompleteTasks.forEach(elem => createTask(elem));
  completeTasks.forEach(elem => createTask(elem, true));
}

function animateDelete(listItem) {
  listItem.animate([
    {
      opacity: "100%",
      height: `${listItem.offsetHeight}px`,
      transform: "rotateX(0deg)"
    },
    {
      opacity: "0%",
      height: "0px",
      transform: "rotateX(-90deg)"
    }], 1000);
  listItem.style.opacity = "0";
  listItem.style.height = "0px";
}