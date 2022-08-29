/* 
JavaScript program to find maximum
contiguous subarray

Function to find the maximum
contiguous subarray
*/ 
function maxSubArraySum(a) {
  var maxInt = Math.pow(2, 53);
  var maxSoFar = -maxInt - 1;
  var maxEndingHere = 0;

  for (let i = 0; i < a.length; i++) {
    console.log(maxSoFar,maxEndingHere)
    maxEndingHere = maxEndingHere + a[i];
    if (maxSoFar < maxEndingHere) { 
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
       maxEndingHere = 0;
    }
  }
  return maxSoFar;
}

const a = [-2, -3, 4, -1, -2, 1, 3, -3];
const result = maxSubArraySum(a);

console.log(`maxArray = ${result}`);