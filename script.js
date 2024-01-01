var items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addTodo() {
    var input = document.querySelector("#todo-input");
    var item = input.value;
    if (item === ""){
        document.getElementById("list").innerHTML = "You need to put in a Something";
       return;
    }
    items.push({
    value:item,
    });
    localStorage.setItem('todo-list', JSON.stringify(items));
    input.value = "";
    displayTodos()
}
function displayTodos() {
    // got the Item 
    var listContainer = document.getElementById("todo-list");

    items.forEach(function(todo) {
        var listItem = document.createElement("li");
        listItem.textContent = todo.value;
        listContainer.appendChild(listItem);

    });

}
displayTodos(); // Call the function to display the updated list
