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


function createButton(className, iconClass) {
    var button = document.createElement("button");
    button.className = className;

    if (iconClass) {
        var icon = document.createElement("i");
        icon.classList.add("fa", iconClass);
        button.appendChild(icon);
    }

    return button;
}

function displayTodos() {
    var listContainer = document.getElementById("todo-list");
    listContainer.innerHTML = ""; // Clear the existing list

    items.forEach(function(todo, index) {
        var listItem = document.createElement("li");
        listItem.textContent = todo.value;

        var editButton = createButton("editButton", "fa-pencil-square-o");
        var removeButton = createButton("del-Button", "fa-trash");

        removeButton.onclick = function() {
            // Call the removeTodo function with the index of the current item
            removeTodo(index);

        };
        editButton.onclick = function(){
            var newText = prompt("Edit todo:", todo.value);
            if (newText !== null) {

            editTodo(index, newText);
            }
        }
        listContainer.appendChild(listItem);

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);

    });
}
function removeTodo(index){
    items.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(items));
    displayTodos();

}
function editTodo(index, newText){
    items[index].value = newText
    localStorage.setItem('todo-list', JSON.stringify(items));
    displayTodos();

}
displayTodos();
