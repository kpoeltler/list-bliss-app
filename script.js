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
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

const handlers = {
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
  changeTodo: function(){
    let changeTodoPosition = document.getElementById('changeTodoPosition');
    let changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoText.value = "";
    changeTodoPosition.value = "";
  }
};

const view = {
  displayTodos: function(){
      let todoUl = document.querySelector('ul');
      todoUl.innerHTML= "";
      todoList.todos.forEach(function(todo, position){
        let todoLi = document.createElement('li');
        let todoComplete = '';
        if(todo.completed === true){
          todoComplete = '( x ) ' + todo.todoText;
        } else {
          todoComplete = '(  ) ' + todo.todoText;
        }
      todoLi.id = position; 
      todoLi.textContent = todoComplete;
      todoLi.appendChild(this.createDeleteBtn());
      todoUl.appendChild(todoLi);
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




