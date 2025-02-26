function isPalindrome(str) {
  // Step 1. The first part is the same as earlier
  var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, "");
  // Step 2. Create the FOR loop
  var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30

  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      // As long as the characters from each part match, the FOR loop will go on
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));