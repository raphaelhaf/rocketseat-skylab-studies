var btnAdd = document.querySelector('#app button');
var inputRepo = document.querySelector('#app input');
var list = document.querySelector('#app ul');
var selectStrategy = document.querySelector('#app select');

btnAdd.addEventListener('click', loadGithubReposFromUserName);

function loadGithubReposFromUserName(){
  window[selectStrategy.value]();
}

function renderItemsInList(items){
  list.innerHTML = '';
  for (item of items) {
    var listItem = document.createElement('li');
    var textNode = document.createTextNode(item.name);
    listItem.appendChild(textNode);
    list.appendChild(listItem);
  }
}

function loadGithubReposFromUserNameWithAxios() {
  axios.get(`https://api.github.com/users/${inputRepo.value}/repos`)
    .then(function (response) {
      renderItemsInList(response.data);
    })
    .catch(function (error) {
      console.error('error in request with axios');
    });
};

function loadGithubReposFromUserNameWithXHR(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.github.com/users/${inputRepo.value}/repos`);
  xhr.send();

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
      
      if(xhr.status !== 200){
        console.error('error in request with XMLHttpRequest')
      }
      renderItemsInList(JSON.parse(xhr.response));
    }
  }
}