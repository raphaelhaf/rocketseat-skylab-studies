import axios from 'axios';

/*
const findUser = user =>{
  axios.get(`https://api.github.com/users/${user}`)
  .then(response =>
    console.log(response.data))
  .catch(err=>{
    console.log(`User doesn't exists!`)
  });
}
*/

const findUser = async user =>{
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  }catch(err){
    console.log(err)
  }
};

findUser('diego3g');