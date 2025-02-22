
function countWordsArray(a){
  let count = {};
  a.forEach(function(i) { count[i] = (count[i]|| 0) + 1;});
  return count;
}

a = ["apple", "banana", "apple", "pie", "banana", "apple"];;
console.log(countWordsArray(a));
