// axios encapsules the XMLHttpRequest
axios.get('https://api.github.com/users/raphaelhaf')
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.error(error);
});