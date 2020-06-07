import axios from "axios";

class Github{
  static getRepositories(repo){
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response =>{
      console.log(response.data);
    })
    .catch(err =>{
      console.log(`Repository doesn't exists!`);
    })
  }
}

Github.getRepositories('raphaelhaf/rocketseat-skylab-studies');
Github.getRepositories('rocketseat/dslkvmskv');