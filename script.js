// selecting elements
const inputField = document.getElementById("input-field");
const btnClear = document.querySelector(".clear-all");
const todoListElement = document.querySelector(".todo-lists");
const pendingNumber = document.querySelector(".pending-number");

let todo;
// when input value and click enter
inputField.addEventListener("keyup", function (e) {
  todo = inputField.value.trim();
  if (e.key === "Enter" && todo.length > 0) {
    addTask();
    inputField.value = "";
    allTasks();
  }
});

const addTask = function () {
  let li = document.createElement("li");
  li.classList.add("todo-item", "pending");
  li.onclick = function () {
    handleStatus(this);
  };
  let checkElement = document.createElement("i");
  checkElement.classList.add("ri-checkbox-fill", "check");
  let uncheckElement = document.createElement("i");
  uncheckElement.classList.add("ri-checkbox-blank-line", "uncheck");
  let deleteElement = document.createElement("i");
  deleteElement.classList.add("ri-delete-bin-6-fill", "delete-icon");
  deleteElement.onclick = function () {
    deleteButton(this);
  };
  let span = document.createElement("span");
  span.innerText = todo;
  li.appendChild(checkElement);
  li.appendChild(uncheckElement);
  li.appendChild(span);
  li.appendChild(deleteElement);
  todoListElement.appendChild(li);
};

// when click list
const handleStatus = function (e) {
  e.classList.toggle("checked");
  e.classList.toggle("pending");
  allTasks();
};

const allTasks = function () {
  let tasks = document.querySelectorAll(".pending");
  pendingNumber.innerText = tasks.length === 0 ? "No" : tasks.length;
};

//delete button icon
const deleteButton = function (e) {
  e.parentElement.remove();
};

//click button clear all
btnClear.addEventListener("click", function () {
  todoListElement.innerHTML = "";
  allTasks();
});
