
function password(obj) {

  const yearDigit = Object.values(obj.birthYear.toString()).length;
  
  const propertyCount = Object.keys(obj).length;
  
  if (propertyCount === 3 && yearDigit === 4) {
  
  const website = obj.siteName;
  
  const createPassword =
  
  website[0].toUpperCase() +
  
  website.slice(1) +
  
  "#" +
  
  obj.name +
  
  "@" +
  
  obj.birthYear;
  
  return createPassword;
  
  } else {
  
  return "invalid";
  
  }
  
  }
const object =  {name:'rahat' ,birthYear:2002,siteName:'Facebook'};
const result = password(object);
console.log(result);
