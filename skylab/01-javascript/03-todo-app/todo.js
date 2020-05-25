var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = loadFromStorage();

function renderTodos(){
  
  listElement.innerHTML = '';

  for(todo of todos){
    var todoElement = document.createElement('li');
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Remove');

    linkElement.appendChild(linkText);
    linkElement.setAttribute('href','#');
    
    var pos = todos.indexOf(todo)
    linkElement.setAttribute('onclick', `removeTodo(${pos})`);
    
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
  saveToStorage();
}

function addTodo(){
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

function removeTodo(index){
  todos.splice(index,1);
  renderTodos();
}
buttonElement.onclick = ()=>
  addTodo();

function saveToStorage(){
  localStorage.setItem('todo_list',JSON.stringify(todos));
}

function loadFromStorage(){
  var todos = localStorage.getItem('todo_list');
  return JSON.parse(todos ?? '[]');
}

renderTodos();

