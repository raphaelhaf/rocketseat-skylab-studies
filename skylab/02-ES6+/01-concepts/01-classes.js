/*
class TodoList{
  
  constructor(){
    this.todos = [];
  }

  addTodo(){
    this.todos.push('New todo');
    console.log(this.todos);
  }
}
*/

// using heritage
class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
  
  constructor(){
    // calling the constructor of the parent class
    super();

    this.user = 'Raphael';
  }

  showUser(){
    console.log(this.user);
  }

}

class Math{
  // using a static method
  static sum(a, b){
    return a + b;
  }
}

const MyList = new TodoList();

document.getElementById('newTodo').onclick = ()=>{
  MyList.add('New todo');
  MyList.showUser();
}

console.log(Math.sum(5,6));