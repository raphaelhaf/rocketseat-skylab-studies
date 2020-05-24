function getXpLevel(years){
  
  if (years >= 0 && years <= 1) {
    return "Noob";
  }
  else if (years > 1 && years <= 3) {
    return "Intermediate";
  }
  else if (years > 3 && years <= 6) {
    return "Advanced";
  }
  else if (years >= 7) {
    return "Jedi Master";
  }
  
  /*
  switch(years){
    case 0,1:
      return 'Noob';
    case 2,3:
      return 'Intermediate';
    case 4, 5, 6:
      return 'Advanced';
    case 7 , 8, 9:
      return 'Jedi Master';
  }
  */
}

  var studyYears = 7;

  console.log(getXpLevel(studyYears));