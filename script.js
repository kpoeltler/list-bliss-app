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

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
 }

// function deleteTodo(){

// }

console.log(changeTodo(0, 'changed value'));