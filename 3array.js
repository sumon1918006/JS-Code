
function deleteInvalids(arrays) {

  if (Array.isArray(arrays)) {
  
  const numberArray = [];
  
  for (const number of arrays) {
  
  if (typeof number === "number" && !isNaN(number)) {
  
  numberArray.push(number);
  
  }
  
  }
  
  return numberArray;
  
  } else {
  
  return "“Invalid Array”";
  
  }
  
  }
const defineArray =  [1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}];
const inputArray = deleteInvalids(defineArray);
console.log(inputArray);
