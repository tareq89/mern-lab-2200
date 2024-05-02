const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const li = document.createElement("li");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
    const span = document.createElement("span");
    span.textContent = todoText;

    const editButton = document.createElement("button");
    editButton.classList.add("link-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);
    buttonsDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("link-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    buttonsDiv.appendChild(deleteButton);

    todoInput.value = "";

    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  }
}

function editTodo() {
  const newText = prompt("Enter new todo:");
  if (newText !== null) {
    this.parentElement.textContent = newText;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);
    this.parentElement.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    this.parentElement.appendChild(deleteButton);
  }
}

function deleteTodo() {
  this.parentElement.parentElement.remove();
}
