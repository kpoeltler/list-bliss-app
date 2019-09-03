
let todoList = {
  todos: [],
  displayTodos: function(){
    if (this.todos.length === 0){
      console.log('My list is empty!');
    } else {
      console.log('My Todos: ');
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true){
          console.log('( x ) ', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText){
    this.todos.push( {
      todoText: todoText,
      completed: false
    });
    view.displayTodos();
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
    var todo = this.todos[position]; 
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
let handlers = {
  displayTodos: function(){
    todoList.displayTodos();
    view.displayTodos();
  },
  addTodo: function(){
    let addTodoText = document.getElementById('addTodoText');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    let changeTodoPosition = document.getElementById('changeTodoPosition');
    let changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber,changeTodoText.value);
    changeTodoPosition.value = ' ';
    changeTodoText.value = ' ';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleTodoCompleted = document.getElementById('toggleTodoCompleted');
    todoList.toggleCompleted(toggleTodoCompleted.value);
    view.displayTodos();
  }
};

//Renders todos to the screen
const view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML= '';
    todoList.todos.forEach(function(todo, position){
       var todoLi = document.createElement('li');
       let todoComplete = '';
      if (todo.completed === true){
        todoComplete = '( x ) ' + todo.todoText;
      } else {
        todoComplete = '(  ) ' + todo.todoText;
      }
      todoLi.id = position; 
      todoLi.textContent = todoComplete;
      todoLi.appendChild(this.createDeleteBtn());
      todosUl.appendChild(todoLi);
    },this)
  },
  createDeleteBtn: function(){
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn'
    return deleteBtn;
  },
  setupEventListener: function(){
    let todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
    
    //Get the element that I clicked.
    var elementClicked = event.target;

    //Check if elementClicked is a delete button.
    if (elementClicked.className === 'deleteBtn'){
      handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
      }
    });
  }
};
view.setupEventListener();