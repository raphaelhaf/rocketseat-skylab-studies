// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

// 5.2
const user = {
  name: 'Diego',
  age: 23,
  address: {
    city: 'Rio do Sul',
    state: 'SC',
    country: 'Brasil',
  }
};

const user2 = {...user, name:'Raphael'};
const user3 = {...user, address:{...user.address, city:'Lontras'}};
console.log(user2);
console.log(user3);