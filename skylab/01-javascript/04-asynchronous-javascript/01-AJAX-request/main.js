var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/raphaelhaf');
xhr.send(null);

xhr.onreadystatechange = function(){
  if (xhr.readyState === XMLHttpRequest.DONE)
    console.log(JSON.parse(xhr.responseText));
}