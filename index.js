function isPalindrome(word) {
  // Write your algorithm here
  const counter = Math.floor(word.length / 2)
  
  for (let i = 0; i < counter; i++) {
    
    if (word[i] !== word[word.length - i - 1]) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
  

  Iterate through the string, comparing the first character to the last, 
  then the second character to the second to last.

  If at any time they two don't match, return false
  
  If there is an odd number of characters, skip the middle one

  Use a counter equal to half of the length of the string, rounded down.

  If the iteration finishes without finding any mismatched characters, return true
*/
  
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("lool"));
  console.log("=>", isPalindrome("lol"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("loop"));
  console.log("=>", isPalindrome("lop"));
}

module.exports = isPalindrome;
