const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter_todo");
const todoList = document.querySelector(".todo_list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add("complete_btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add("trash_btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash_btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
