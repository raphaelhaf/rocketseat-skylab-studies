function displayAllEvenNumbersInInterval(startNumber,endNumber){
  for(var i = startNumber; i< endNumber; i++){
    if(i % 2 === 0)
      console.log(i);
  }
}

displayAllEvenNumbersInInterval(10,40);