//store todos
let todos = ['item1', 'items2', 'item3'];

//display todos
function displayTodos(){
  console.log(`My Todos List ${todos.slice(0, 2).join(', ')}, ${todos[2]}, and  ${todos[3]}`);
}

function addTodo(){
  todos.push('new todo');
 }

// function changeTodo(){

// }

// function deleteTodo(){

// }

console.log(displayTodos(addTodo()));