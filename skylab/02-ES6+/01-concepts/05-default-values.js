function sum(a,b){
  return a + b;
}

// will return nan
console.log(sum(1));

function sumWithDefaultValuesForParameters(a=3,b=3){
  return a + b;
}

// will return 4 because b already have a value
console.log(sumWithDefaultValuesForParameters(1));