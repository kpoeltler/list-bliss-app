//store todos
let todos = ['item1', 'items2', 'item3'];

//display todos
function displayTodos(){
  console.log(`My Todos List ${todos}`);
}

function addTodo(todo){
  todos.push(todo);
  displayTodos()
 }

// function changeTodo(){

// }

// function deleteTodo(){

// }

console.log(addTodo('item 4'));