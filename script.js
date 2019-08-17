let todoList = {
  todos:['item1', 'items2', 'item3'],

  displayTodos: function(){
    console.log(`My Todos List ${this.todos}`);
  },

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos()
  },

  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}

console.log(todoList.addTodo('item 7'));

