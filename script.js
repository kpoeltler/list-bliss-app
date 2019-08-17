//store todos
let todos = ['item1', 'items2', 'item3'];

//display todos
function displayTodos(){
  console.log(`My Todos List ${todos.slice(0, 2).join(', ')} and ${todos[2]}.`);
}

// function addTodo(){

// }

// function changeTodo(){

// }

// function deleteTodo(){

// }

console.log(displayTodos());