// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Variables for criteria
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "/", "<", ">", "?", ":", ";"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Prompting the user which criteria they want. Ones they don't want are not included in criteria
  var shouldLowerCase = prompt("Would you like lowercase letters? Enter Yes or No. ");
  if (shouldLowerCase == "Yes") {
    passwordText += lowerCase;

  }else if(shouldLowerCase == "No") {
    console.log("No lower case letters!");
  }

  var shouldUpperCase = prompt("Would you like uppercase letters? Enter Yes or No. ");
  if (shouldUpperCase == "Yes") {
    passwordText += upperCase;
  }else if(shouldUpperCase == "No") {
    console.log("No upper case letters!");
  }

  var shouldNumbers = prompt("Would you like numbers? Enter Yes or No. ");
  if (shouldNumbers == "Yes") {
    passwordText += numbers;
  }else if(shouldNumbers == "No") {
    console.log("No numbers!");
  }

  var shouldSpecialChars = prompt("Would you like special characters? (ie !, @, #, $, %) Enter Yes or No. ");
  if (shouldSpecialChars == "Yes") {
    passwordText += specialChars;
  }else if(shouldSpecialChars == "No") {
    console.log("No special characters!");
  }

  // Asking the user the length of the password
  let passwordLength = prompt("How long would you like the password to be? Please respond in a number that is between 8 and 128. ");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8){
    alert("Password must be at least 8 characters, please enter another number. ");
    return ""
  } else if (passwordLength > 128) {
    alert("Password must be no more than 128 characters, please enter another number. ");
    return ""
  }

  //Formation of the password
  for (var i = 0; i < passwordLength; i++) {
    password = passwordText [Math.random(i)];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

