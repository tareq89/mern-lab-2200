// Add event listener to the "Add Todo" button
$("#addTodoBtn").on("click", addTodo);

// Function to add a new todo item
function addTodo() {
  // Get the trimmed value from the todo input field
  const todoText = $("#todoInput").val().trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new list item
    const li = $("<li></li>");

    // Create a div to hold the edit and delete buttons
    const buttonsDiv = $("<div class='buttons'></div>");

    // Create a span element to display the todo text
    const span = $("<span></span>").text(todoText);

    // Create an Edit button
    const editButton = $("<button class='link-button'>Edit</button>").on("click", editTodo);
    buttonsDiv.append(editButton);

    // Create a Delete button
    const deleteButton = $("<button class='link-button'>Delete</button>").on("click", deleteTodo);
    buttonsDiv.append(deleteButton);

    // Clear the input field
    $("#todoInput").val("");

    // Append the elements to the list item
    $("#todoList").append(li);
    li.append(span);
    li.append(buttonsDiv);
  }
}

// Function to edit a todo item
function editTodo() {
  // Prompt the user for the updated todo text
  const newText = prompt("Enter updated todo:");

  // Check if the prompt was not cancelled
  if (newText !== null) {
    // Get a reference to the parent list item
    const li = $(this).parent().parent();

    // Update the text of the span element
    li.find("span").text(newText);
  }
}

// Function to delete a todo item
function deleteTodo() {
  // Remove the parent list item of the delete button
  $(this).parent().parent().remove();
}
