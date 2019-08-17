let todoList = {
  todos:[],
  displayTodos: function(){
    console.log(`My Todos List:`);
    for(let i = 0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        console.log(`( X ), ${this.todos[i].todoText}`);
      } else {
        console.log(`(  ), ${this.todos[i].todoText}`);
      }
    } 
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
  },
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

const handlers = {
  displayTodos: function(){
    todoList.displayTodos();
    //view.displayTodos();
  },
  addTodo: function(){
    let addTodoTextInput = document.getElementById('addTodoText');
    todoList.addTodo(addTodoInput.value);
    addTodoTextInput.value = '';
  }
}


// const view = {
//   displayTodos: function(){

//   }
// }



