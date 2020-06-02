// 4.1
const company = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC',
  }
};

const {name, address:{city, state} } = company;

console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(state); // SC

// 4.2
const showUserInfo = ({name, age}) => `${name} has ${age} years.`;

console.log(showUserInfo({name: 'Raphael', age: 32}));