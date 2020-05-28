const verifyAge = function(userAge){
     return new Promise(function(resolve,reject){
      setTimeout(() => {
        if(userAge > 18)
        return resolve();
      return reject();
      }, 2000);
    });
}
verifyAge(20)
.then(function(){
  console.log('More than 18')
})
.catch(function(){
  console.log('Less than 18')
})