const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
];

// 2.1
const allAges = users.map(user => user.age);

// 2.2
const allUsersMoreThanEighteen = users.filter(user => user.age > 18);

// 2.3
const userThatWorksForGoogle = users.find(user => user.company === 'Google');

// 2.4
const usersDoubleAgeAreLessThenFifty =
  users
    .map(user => ({ ...user, age: user.age * 2 }))
    .filter(user => user.age <= 50);

console.log(usersDoubleTwoMoreThanFifty);