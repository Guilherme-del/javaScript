function findFirstNumDontRepeat(arr) {
  let count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num of arr) {
    if (count[num] === 1) {
      return num;
    }
  }
  
  return 'None';
}

console.log(findFirstNumDontRepeat([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5])); // 6
console.log(findFirstNumDontRepeat([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])); // None






