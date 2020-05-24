function hasJavascriptSkill(skills){

  // a more elegant way
  return skills.indexOf('Javascript') >= 0 ;

  // another way to do
  /*
  for(skill of skills)
    if(skill === 'Javascript')
      return true;
  return false;
  */

}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(hasJavascriptSkill(skills));