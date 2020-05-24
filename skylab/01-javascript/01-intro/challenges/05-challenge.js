var users = [
  {
  name: "Diego",
  skills: ["Javascript", "ReactJS", "Redux"]
  },
  {
  name: "Gabriel",
  skills: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

for(user of users){
  console.log(`${user.name} has the folowing skills: ${user.skills.join()}`);
}