const user = {
  name: 'Raphael',
  age: 32,
  address: {
    city: 'Sao Paulo',
    state: 'SP'
  },
};

console.log(user);
/*
const name = user.name;
const age = user.age;
const city = user.address.city;
*/

// using ES6+ desestructuration
const { name, age, address: {city}} = user;
console.log(name);
console.log(age);
console.log(city);

const showNameAndAge = ({name, age})=>{
  console.log(name);
  console.log(age);
}

showNameAndAge(user);