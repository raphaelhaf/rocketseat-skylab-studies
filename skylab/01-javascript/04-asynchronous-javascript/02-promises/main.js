// promises are functions that return 

const HTTP_CODE = {
  SUCCESS : 200
}
var myPromisse = function(){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/raphaelhaf');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE)
        if(xhr.status === HTTP_CODE.SUCCESS)
          resolve(JSON.parse(xhr.responseText));
        else
          reject('Error in request');
    }
  });
}

// var result = myPromisse();
// console.log(result);

myPromisse()
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.error(error);
});