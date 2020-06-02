const arr = [1, 3, 4, 5, 6];

/*
const newArr = arr.map(function(item){
  return item * 2;
});
*/

const newArr = arr.map(item => item * 3);

console.log(newArr);

// we need to use the () to return an object
const myObject = ()=> ({name: 'Raphael'});