
function checkName(name) {

  if (typeof name !== "string") {
  
  return "invalid";
  
  } else {
  
  const lowerCase = name.toLowerCase();
  
  // const length = name.length
  
  const lastWord = lowerCase[lowerCase.length - 1];
  
  if (
  
  lastWord === "a" ||
  
  lastWord === "y" ||
  
  lastWord === "i" ||
  
  lastWord === "e" ||
  
  lastWord === "o" ||
  
  lastWord === "u" ||
  
  lastWord === "w"
  
  ) {
  
  return "Good Name";
  
  } else {
  
  return "Bad Name";
  
  }
  
  }
  
  }
const nameCheck = checkName(['sumkn']);
console.log(nameCheck);
