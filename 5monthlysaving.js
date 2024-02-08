
function monthlySavings(arr, livingCost) {

  if (Array.isArray(arr) && typeof livingCost === "number") {
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
  
  if (arr[i] >= 3000) {
  
  const tax = arr[i] * 0.2;
  
  const afterTax = arr[i] - tax;
  
  arr[i] = afterTax;
  
  }
  
  sum = sum + arr[i]; // Add to sum
  
  }
  
  const totalSaving = sum - livingCost;
  
  if (totalSaving >= 0) {
  
  return totalSaving;
  
  } else {
  
  return "“earn more”";
  
  }
  
  } else {
  
  return "invalid input";
  
  }
  
  }

const result = monthlySavings([900, 2700, 3400],8000);
console.log(result);
