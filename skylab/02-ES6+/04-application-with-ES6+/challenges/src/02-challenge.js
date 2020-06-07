import axios from 'axios';

/*
function getUserFromGitHub(user){
  axios.get(`https://api.github.com/users/${user}`)
  .then(response=>{
    console.log(response.data);
  }).catch(err=>{
    console.log(`User doesn't exists`);
  });
}
*/

const getUserFromGitHub = async user =>{
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }catch(err){
    console.log(`User doesn't exists`);
  }
}

getUserFromGitHub('diego3g');
getUserFromGitHub('diego3g124123');