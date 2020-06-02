const arr = [1, 3, 4, 5, 8, 9];

// iterate over all array elements returning this elements
const newArr = arr.map(function(item,index){
  return item + index;
});

console.log(newArr);

const sumArray = arr.reduce(function(total,next){
  return total+next;
});

const filter = arr.filter(function(item){
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(value){
  return value === 2;
});

console.log(find);