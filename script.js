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
}
