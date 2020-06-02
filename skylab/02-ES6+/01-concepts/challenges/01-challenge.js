class User{
  constructor(email,password){
    this.email = email;
    this.password = password;
  }
};

class Admin extends User{
  constructor(email, password){
    super(email,password);
  }
};

var user = new User('raphael@gmail.com', 'myPass');


console.log(user);