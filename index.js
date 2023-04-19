function isPalindrome(word) {
  // Write your algorithm here
  let lowercaseWord = word.toLowerCase();
  let splitword = lowercaseWord.split("");
  let reversedarray = splitword.reverse();
  let reversedword = reversedarray.join("");
  if (lowercaseWord === reversedword){
    return true

  }
  else
  return false
}


/* 
  Add your pseudocode here  
  word to  lowercase
  Word to arrange
  word to reverse 
  Join the word back 
  compare with if  and  else 

*/ 


/*
  Add written explanation of your solution here
  change the the word to lowercase or  uppercase.
  change  the word into an array with .split('')
  Use the array method .reverse() to reverse the result from above
  Use  the array method .join("") to  join  the result from above
  Use if  to compare the final and  then initial input string
  return true or  false for both cases
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
