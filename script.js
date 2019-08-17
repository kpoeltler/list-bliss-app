let todoList = {
  todos:['item1', 'items2', 'item3'],

  displayTodos: function(){
    console.log(`My Todos List ${this.todos}`);
  },

  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos()
  },

  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}

console.log(todoList.addTodo('item 4'));
console.log(todoList.changeTodo(1,'zebra'));
console.log(todoList.deleteTodo(2));
