// before we need to install the @babel/plugin-proposal-object-rest-spread
// yarn add  @babel/plugin-proposal-object-rest-spread
// open the .babelrc file and add the following line after the presets section
// "plugins": [@babel/plugin-proposal-object-rest-spread]

// rest
const user = {
  name: 'Raphael',
  age: '32',
  company: 'Rocketseat'
};

const {name, ...rest } = user;

console.log(name);
console.log(rest);

const arr = [1, 2, 3, 4];
const[a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function sum(...params){
  return params.reduce((total, next) => total+next);
}
// will return 8
console.log(sum(1, 3, 4));

// will return 4, 5
function returnParcial(a, b, ...params){
  return params;
}
console.log(arr);

console.log(returnParcial(1, 3, 4, 5));
console.log('ra');

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// the ... operator will copy the array content
const arr3 = [...arr1, ...arr2]