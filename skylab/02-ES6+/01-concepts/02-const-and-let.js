// const cannot has their values reatributed
const a = 1;
// will generate a read-only error
// a = 3;

const user = { name: 'Raphael' };
user.name = 'Laura';

console.log(user.name);


let number = 8;
if(true){
  let number = 2;
  // will print 2
  console.log(number);
}
// will print 8
console.log(number);