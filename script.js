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

function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
 }

console.log(deleteTodo(0));